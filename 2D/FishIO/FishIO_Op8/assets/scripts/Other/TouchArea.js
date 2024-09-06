const { Constants } = require("../Data/Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        positionTouch: cc.Vec2,
        player: cc.Node,
        camera: cc.Node,
        rigidBody: cc.RigidBody,
        tut: cc.Node,
        enemyController: cc.Node,
        gamePlay: cc.Node,
        btn_revive: cc.Node,
        btn_install: cc.Node,

        gameController: cc.Node,
        options: [cc.Node],
    },

    start() {
        this.bodyPlayer = this.player.getChildByName("Body");
        this.isTouched = false;

        this.node.parent.on(cc.Node.EventType.TOUCH_START, (event) => {
            // mtg & applovin
            // Constants.countRevive < 0 && this.gameController.getComponent("GameController").installHandle();

            if (this.tut.active) {
                this.tut.active = false;
                this.player.getComponent("PlayerController").isMove = true;
                this.enemyController.getComponent("EnemyController").startCreateEnemy();
                !Constants.optionChosen && this.gamePlay.getComponent("GamePlay").activeWaringSound();
                Constants.optionChosen && this.gamePlay.getComponent("GamePlay").showBoss();
            }
            Constants.isGameStart = true;
            this.isTouched = true;
            Constants.isCanTouch && this.moveWithTouch(event);
        });

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            Constants.isCanTouch && this.moveWithTouch(event);
        });

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.isTouched = false;
        });

        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.isTouched = false;
        });

        this.btn_install.on(cc.Node.EventType.TOUCH_START, () => {
            this.gameController.getComponent("GameController").installHandle();
        }, this);

        for (let index = 0; index < this.options.length; index++) {
            const option = this.options[index];
            option.on(cc.Node.EventType.TOUCH_START, () => {
                if(Constants.optionChosen) return;

                Constants.isCanTouch = true;
                Constants.isShowPopupOptions = true;
                this.gamePlay.getComponent("GamePlay").handleUpdatePlayer(index);
                this.showChosenOption(option);
                this.gamePlay.getComponent("GamePlay").showBoss();
            });
        }
    },


    showChosenOption(option) {
        for (let j = 0; j < this.options.length; j++) {
            const tempOption = this.options[j];
            tempOption.active = false;
        };

        option.active = true;
        this.gamePlay.getComponent("GamePlay").PopupOptions.getComponent(cc.Animation).stop();

        cc.tween(option)
            .to(1, { position: cc.v2(0, 0), scale: 0.52 })
            .call(() => {
                this.scheduleOnce(() => {
                    option.active = false;
                    this.gamePlay.getComponent("GamePlay").PopupOptions.active = false;
                    Constants.isShowPopupOptions = false;
                }, 1.5)
            })
            .start();
    },


    registerReviveAction() {
        this.btn_revive.on(cc.Node.EventType.TOUCH_START, this.handleBtnReviveTouchStart, this);
    },

    handleBtnReviveTouchStart() {
        cc.audioEngine.stopAll();
        Constants.countRevive >= 0 && cc.director.loadScene("Game");
        console.log("ReviveCount: " + Constants.countRevive);
        Constants.countRevive < 0 && this.gameController.getComponent("GameController").installHandle();
    },

    moveWithTouch(event) {
        this.positionTouch = event.getLocation();
        let localTouchPos = this.node.convertToNodeSpaceAR(this.positionTouch);
        this.positionTouch = localTouchPos;

        this.positionTouch.x += this.camera.x;
        this.positionTouch.y += this.camera.y;

        var anglePlayer = cc.misc.radiansToDegrees(Math.atan((this.player.y - localTouchPos.y) / (this.player.x - localTouchPos.x)));

        this.bodyPlayer.angle = anglePlayer;


        if ((this.player.x - localTouchPos.x) > 0) {
            this.bodyPlayer.scaleX = -1;
        } else {
            this.bodyPlayer.scaleX = 1;
        }
    },
});
