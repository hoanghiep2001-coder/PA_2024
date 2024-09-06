cc.Class({
  extends: cc.Component,

  properties: {
    // node
    gamePlay: cc.Node,
    characterNode: cc.Node,
    BG0: cc.Node,
    tweezers: cc.Node,
    test1: cc.Node,
    test2: cc.Node,

    // text
    textOMG: cc.Node,

    // btn
    hideMask: cc.Button,

    // audio
    bgAudio: cc.AudioClip,
  },

  onLoad() {
    this.dataNode = [this.test2, this.test1];
    this.realHeight;
    this.realWidth;
    this.viewHeight = 0;
    this.hideMask.node.on("click", this.installHandle, this);
    // this.tweezers.on("touchstart", this.startLocation, this);
    // this.tweezers.on("touchend", this.endLocation, this);
  },

  startLocation(event) {
    this.tweezers.getComponent(cc.Animation).stop("txtScale");
    this.tweezers.scale = 0.25;
    this.tweezers.x = event.getLocation().x - cc.winSize.width / 2;
    this.tweezers.y = event.getLocation().y - cc.winSize.height / 2;
    this.tweezers.on("touchmove", this.currentLocation, this);
  },

  currentLocation(event) {
    this.tweezers.x = event.getLocation().x - cc.winSize.width / 2;
    this.tweezers.y = event.getLocation().y - cc.winSize.height / 2;
  },

  endLocation(event) {
    this.tweezers.x = event.getLocation().x - cc.winSize.width / 2;
    this.tweezers.y = event.getLocation().y - cc.winSize.height / 2;
    this.checkPosition();
  },

  checkPosition() {
    const cPointerX =
      this.tweezers.x - this.tweezers.width * 0.5 * this.tweezers.scale;
    const cPointerY =
      this.tweezers.y + this.tweezers.height * 0.25 * this.tweezers.scale;
    const l = this.dataNode.length;
    for (let i = 0; i < l; i++) {
      let data = this.getData(this.dataNode[i]);
      if (
        data.nX < cPointerX &&
        cPointerX < data.pX &&
        data.nY < cPointerY &&
        data.pY > cPointerY
      ) {
        this.scheduleOnce(() => {
          console.log("xoa");
          this.dataNode.splice(i, 1);
          data.Node.active = false;
        }, 0.2);
        // console.log(this.dataNode);
      }
    }
  },

  getData(node) {
    const Node = node;
    const scale = node.scale;
    const width = node.width * scale;
    const height = node.height * scale;
    const nX = node.x - width / 2;
    const pX = node.x + width / 2;
    const nY = node.y - height / 2;
    const pY = node.y + height / 2;
    const X = node.x;
    const Y = node.y;
    return {
      X,
      Y,
      nX,
      pX,
      nY,
      pY,
      Node,
      scale,
      width,
      height,
    };
  },

  start() {
    this.tweezers.getComponent(cc.Animation).play("txtScale");
    this.playAudio(this.bgAudio);
    window.gameReady && window.gameReady();
  },

  update(dt) {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.characterNode.scale = 1.2;
      this.realHeight = 480;
      this.realWidth =
        480 * (cc.view.getFrameSize().width / cc.view.getFrameSize().height);
    } else {
      if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 1.4) {
        this.realWidth = 370;
      } else {
        this.realWidth = 320;
      }
      this.characterNode.scale = 1;

      this.realHeight =
        this.realWidth *
        (cc.view.getFrameSize().height / cc.view.getFrameSize().width);
    }
    this.BG0.height = this.realHeight;
    this.BG0.width = this.realWidth;
  },

  onFinish() {
    window.gameEnd && window.gameEnd();
  },

  playAudio(audio) {
    switch (audio) {
      case this.bgAudio:
        this.playBg = cc.audioEngine.play(this.bgAudio, true, 1);
        break;
    }
  },

  installHandle: function () {
    this.onFinish();
    cc.log("installHandle");
    cc.audioEngine.stopAll();
    //If ad network is tiktok
    if (typeof playableSDK != "undefined") {
      window.playableSDK.openAppStore();
      return;
    }

    // If ad network is google ads
    if (typeof ExitApi != "undefined") {
      ExitApi.exit();
      return;
    }

    // If ad netwrok is ironsources
    if (typeof dapi != "undefined") {
      dapi.openStoreUrl();
      return;
    }

    // If ad network support MRAID 2.0
    if (typeof mraid != "undefined") {
      if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
        mraid.open(
          "https://play.google.com/store/apps/details?id=com.totee.sweetdoll"
        );
        return;
      }

      if (
        cc.sys.os == cc.sys.OS_IOS ||
        cc.sys.os == cc.sys.IPHONE ||
        cc.sys.os == cc.sys.IPAD
      ) {
        mraid.open("https://itunes.apple.com/us/app/id1614415418");
        return;
      }
      mraid.open(
        "https://play.google.com/store/apps/details?id=com.totee.sweetdoll"
      );
      return;
    }
    // If ad network is mindwork. window alway avaiable so skip undefined check
    window.install && window.install();
  },
});
