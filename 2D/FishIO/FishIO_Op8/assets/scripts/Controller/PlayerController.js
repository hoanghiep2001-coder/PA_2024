const { Constants } = require("../Data/Constant");

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 5,
    isMove: false,
    touchArea: cc.Node,
    targetPosition: cc.Vec2,
    score: 0,
    isLive: true,
    gc: cc.Node,
    headPlayer: cc.Node,
    crownGold: cc.Node,
    crownSilver: cc.Node,
    crownCopper: cc.Node,
    rigidBody: cc.RigidBody,

    scoreLabel1: cc.Label,
    scoreLabel2: cc.Label,
    scoreLabel3: cc.Label,

    rankName1: cc.Sprite,
    rankName2: cc.Sprite,
    rankName3: cc.Sprite,

    sfName1: cc.SpriteFrame,
    sfName2: cc.SpriteFrame,
    sfName3: cc.SpriteFrame,
    sfNamePlayer: cc.SpriteFrame,

  },

  // onLoad () {},

  start() {
    this.gameController = this.gc.getComponent("GameController");

    switch (Constants.optionChosen) {
      case 2:
        console.log("change character");
        this.getComponent(cc.CircleCollider).radius = 35;
        this.node.getChildByName("Body").getChildByName("NewCharacter").active = true;
        this.node.getChildByName("Body").getChildByName("CapAmerica").active = false;
        break;
      case 3:
        console.log("use axe");
         this.node.getChildByName("Body").getChildByName("CapAmerica").getChildByName("Sword").active = false;
         this.node.getChildByName("Body").getChildByName("CapAmerica").getChildByName("Axe").active = true;
        break;
      default:
        this.getComponent(cc.CircleCollider).radius = 25;
        this.node.getChildByName("Body").getChildByName("NewCharacter").active = false;
        this.node.getChildByName("Body").getChildByName("CapAmerica").active = true;
        break;
    }
  },

  onCollisionEnter(other, self) {
    if (other.tag == 2 || other.tag == 3) {
      if (this.isLive) {
        this.die();
        this.headPlayer.active = true;
        this.gameController.playAudio(this.gameController.audioBossAtk);
        this.node.getChildByName("Atk").getComponent(sp.Skeleton).setAnimation(0, "bite", false);
        Constants.countRevive -= 1;
        console.log("ReviveCount: " + Constants.countRevive);
      }
    }
  },

  die() {
    this.gameController.playAudio(this.gameController.audioEat);
    this.node.getChildByName("Body").active = false;
    this.node.getChildByName("Die").active = true;
    this.getComponent(cc.Animation).play("EnemyDieAnim");
    this.isLive = false;

    // FINISH
    this.scheduleOnce(function () {
      this.gameController.showPopupInstall();
    }, 1)
  },

  update(dt) {
    if (this.isMove && this.isLive && !Constants.isShowPopupOptions) {
      this.targetPosition = this.touchArea.getComponent("TouchArea").positionTouch;

      //console.log(this.targetPosition.x+" --- "+this.targetPosition.y);

      let currentPosition = this.node.getPosition();
      currentPosition.lerp(this.targetPosition, 0.02, currentPosition);
      this.node.setPosition(currentPosition);
    }
  },
});
