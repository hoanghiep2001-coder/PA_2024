const { Constants } = require("../Data/Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        gc: cc.Node,
        player: cc.Node,
        bgWarning: cc.Node,
        timeShowWarning: 8,
        boss: cc.Node,
        bgMove: cc.Node,
        isIronSource: cc.Boolean,
        reload: cc.Node,

        Button_CTA: cc.Node,
        Hand_CTA: cc.Node,
    },


    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        let collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDebugDraw = true;
        // collisionManager.enabledDrawBoundingBox = true

        this.gameController = this.gc.getComponent("GameController");
        this.isPlayBgMusic = false;
    },


    showBoss() {

    },


    start() {
        this.isPlayBgMusic = true;

        Constants.countDie >= 2 && this.showBtnCTA();
    },


    showBtnCTA() {
        this.Button_CTA.getComponent(cc.Animation).play("Btn_CTAAnim");
        this.Hand_CTA.getComponent(cc.Animation).play("Btn_HandAnim");
    },


    handleReplayGame() {
        if (!this.player.getComponent("PlayerController").forceReplay) {
            return;
        }

        this.player.getComponent("PlayerController").forceReplay = false;
        this.showBtnCTA();
        this.Button_CTA.on(cc.Node.EventType.TOUCH_START, () => {
            if(Constants.countDie < 2)   {
                cc.director.loadScene("Game_NoIntro")
            }
        }, this);
        // this.reload.getComponent(cc.Animation).play("Reload_Anim");
        // this.scheduleOnce(() => {
        //     // cc.audioEngine.stopAll();
        //     cc.director.loadScene("Game_NoIntro")
        // }, 1);
    },


    update(dt) {
        if (this.player.getComponent("PlayerController").forceReplay) {
            this.handleReplayGame();
        }
    },

});
