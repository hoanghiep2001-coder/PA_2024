const { Constants } = require("../Data/Constant");


cc.Class({
    extends: cc.Component,

    properties: {
        gc: cc.Node,
        bgWarning: cc.Node,
        timeShowWarning: 8,
        boss: cc.Node,
        bgMove: cc.Node,
        isIronSource: cc.Boolean,
        PopupOptions: cc.Node,
        player: cc.Node,
    },

    playBgMusic() {
        if (!this.isPlayBgMusic) {
            this.gameController.playAudio(this.gameController.reviveSound);
            this.gameController.playAudio(this.gameController.audioBgMusic);
            this.isPlayBgMusic = true;
        }
    },

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        let collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        //collisionManager.enabledDebugDraw = true;

        this.gameController = this.gc.getComponent("GameController");

        // ironSource
        this.isPlayBgMusic = false;
        if (this.isIronSource) {
            this.node.parent.on(cc.Node.EventType.TOUCH_START, (event) => {
                if (this.isPlayBgMusic) return;
                this.playBgMusic();
            });
        } else {
            this.playBgMusic();
        }
        // ----------------------

    },

    showBoss() {
        this.scheduleOnce(function () {
            this.bgWarning.active = false;
            this.boss.active = true;
        }, 3);
    },


    activeWaringSound() {
        this.scheduleOnce(function () {
            this.gameController.playAudio(this.gameController.audioWarning);
            this.bgWarning.active = true;
            Constants.isCanTouch = false;
            this.showPopupOptions();

            this.scheduleOnce(() => { this.bgWarning.active = false }, 3);
        }, this.timeShowWarning)
    },


    start() {
        Constants.isCanTouch = true;
    },


    showPopupOptions() {
        this.PopupOptions.active = true;
        cc.tween(this.PopupOptions)
            .to(0.5, { opacity: 255 })
            .call(() => {
                this.PopupOptions.getComponent(cc.Animation).play();
            })
            .start();
    },


    handleUpdatePlayer(index) {
        this.gameController.playAudio(this.gameController.audioUpgrade);
        this.PopupOptions.getChildByName("hand").active = false;
        Constants.optionChosen = index + 1;
        let playerBody = this.player.getChildByName("Body");
        switch (Constants.optionChosen) {
            case 1:
                console.log("ReviveCount: " + Constants.countRevive);
                Constants.countRevive += 1;
                break;
            case 2:
                console.log("change character");
                this.player.getComponent(cc.CircleCollider).radius = 35;
                playerBody.getChildByName("NewCharacter").active = true;
                playerBody.getChildByName("CapAmerica").active = false;
                break;
            case 3:
                console.log("use axe");
                playerBody.getChildByName("CapAmerica").getChildByName("Sword").active = false;
                playerBody.getChildByName("CapAmerica").getChildByName("Axe").active = true;
                break;
            default:
                break;
        }
    },


    update(dt) {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.bgMove.y = 0;
        } else {
            this.bgMove.y = -800;
        }
    },


});
