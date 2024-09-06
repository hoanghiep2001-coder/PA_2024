const { Constants } = require("../Data/Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        device: "",
        HORIZONTAL_IPX: "horizontal_IPX",
        HORIZONTAL_TABLET: "horizontal_Tablet",
        VERTICAL_IPX: "vertical_IPX",
        VERTICAL_MOBILE: "vertical_Mobile",

        btn_install: cc.Node,
        popupOption: cc.Node,
    },

    start() {

    },


    handleRotate() {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    },

    setHorizontal() {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        } else {
            this.setHorizontalForTablet();
        }
    },

    setHorizontalForIpX() {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;

        this.popupOption.scale = 1;

        // if(cc.view.getFrameSize().height / cc.view.getFrameSize().width >= 0.6) {
        //     // Applovin horizontal
        //     this.btn_install.getComponent(cc.Widget).right = -40
        //     return;
        // }

        this.btn_install.scale = 0.5;
        this.btn_install.getComponent(cc.Widget).bottom = 0;

        if(cc.view.getFrameSize().height / cc.view.getFrameSize().width >= 0.6) {
            // Applovin horizontal
            this.btn_install.getComponent(cc.Widget).right = -40
            return;
        }

        if(cc.view.getFrameSize().height / cc.view.getFrameSize().width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.btn_install.getComponent(cc.Widget).right = -52
        } else {
            // IpX
            this.btn_install.getComponent(cc.Widget).right = -110
        }
    },

    setHorizontalForTablet() {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.popupOption.scale = 1;
        this.btn_install.scale = 0.5;
        this.btn_install.getComponent(cc.Widget).right = -0;
        this.btn_install.getComponent(cc.Widget).bottom = -25;
        // horizontal google
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height <= 1.2 && cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 1.2) {

        //     return;
        // }
    },

    setVertical() {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    },

    setIphoneX() {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }

        this.device = this.VERTICAL_IPX;

        this.popupOption.scale = 1.5;

        this.btn_install.scale = 0.6;
        this.btn_install.getComponent(cc.Widget).right = -0
        this.btn_install.getComponent(cc.Widget).bottom = -350
    },

    setMobile() {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.popupOption.scale = 1.5;
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {

            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
                // mobile mode applovin
                this.btn_install.scale = 0.6;
                this.btn_install.getComponent(cc.Widget).right = -0
                this.btn_install.getComponent(cc.Widget).bottom = -240
                return;
            }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.btn_install.scale = 0.6;
            this.btn_install.getComponent(cc.Widget).right = -0
            this.btn_install.getComponent(cc.Widget).bottom = -260
        } else {

            // Ipad
            this.btn_install.scale = 0.5;
            this.btn_install.getComponent(cc.Widget).right = -0
            this.btn_install.getComponent(cc.Widget).bottom = -158
        }

    },

    update(dt) {
        this.handleRotate();
    }

    // update (dt) {},
});
