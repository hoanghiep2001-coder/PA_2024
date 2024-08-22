

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(cc.Camera)
    cam: cc.Camera = null;

    @property(cc.Camera)
    camIntro: cc.Camera = null;

    @property(cc.Node)
    moneyHolder: cc.Node = null;

    @property(cc.Node)
    characteHouse: cc.Node = null;

    @property(cc.Node)
    enemyHouse: cc.Node = null;

    @property(cc.Node)
    road: cc.Node = null;

    @property(cc.Node)
    bottomUI: cc.Node = null;

    @property(cc.Node)
    topUI: cc.Node = null;

    @property(cc.Node)
    goldHolder: cc.Node = null;

    @property(cc.Node)
    buttonHolder: cc.Node = null;

    // @property(cc.Node)
    // characterHolder: cc.Node = null;

    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";

    protected onLoad(): void {
        this.handleRotate();
    }

    protected start(): void {
        this.handleRotate();
    }


    private handleRotate(): void {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;

            this.setHorizontal();
        } else {

            this.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {

        //  cc.Canvas.instance.fitWidth = false;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        } else {

            this.setHorizontalForTablet();
        }
    }


    private setHorizontalForIpX(): void {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        cc.log("hr ip x");
        this.goldHolder.getComponent(cc.Widget).right = 200;
        this.moneyHolder.scale = 2;
        this.cam.zoomRatio = 1.8;
        this.camIntro.zoomRatio = 1.2;
        this.buttonHolder.scale = 1.1;
        this.bottomUI.scale = 1.3;
        this.topUI.scale = 1.2;
        this.characteHouse.x = -800;
        this.goldHolder.scale = 1;
        this.buttonHolder.scale = 1.2;
        // this.road.scale = 1;
        //  this.characteHouse.children[0].scale = 1;
        this.enemyHouse.x = 850;
        // this.enemyHouse.children[0].scale = 1.2;
        // this.map.scale = 1;
        this.device = this.HORIZONTAL_IPX;

    }
    //       this.logo


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
            cc.log("hr ip 6");
            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {
            //  this.map.scale = 1;
            cc.log("hr ipad");
            this.goldHolder.getComponent(cc.Widget).right = 200;
            this.camIntro.zoomRatio = 1.2;
            this.moneyHolder.scale = 1.5;

            this.cam.zoomRatio = 1.3;
            this.buttonHolder.scale = 1.1;
            this.goldHolder.scale = 1.3;
            this.bottomUI.scale = 1.5;
            this.topUI.scale = 1.5;
            this.characteHouse.x = -800;
            this.enemyHouse.x = 850;
            // Ipad


        }

        this.device = this.HORIZONTAL_TABLET;

    }


    private setVertical(): void {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }

    private setIphoneX(): void {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.cam.zoomRatio = 1;

        cc.log("vt ipx");
        this.cam.zoomRatio = 1;
        this.camIntro.zoomRatio = 0.8;
        this.moneyHolder.scale = 1.2;

        this.bottomUI.scale = 1;
        this.topUI.scale = 1;
        this.goldHolder.scale = 0.6;
        this.goldHolder.getComponent(cc.Widget).right = 135;
        this.buttonHolder.scale = 1;
        this.characteHouse.x = -400;
        this.enemyHouse.x = 430;

        this.device = this.VERTICAL_IPX;


    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
            cc.log("vt ip 6");
            this.goldHolder.getComponent(cc.Widget).right = 200;
            this.cam.zoomRatio = 1.1;
            this.camIntro.zoomRatio = 1;
            this.moneyHolder.scale = 1.5;

            this.bottomUI.scale = 1;
            this.topUI.scale = 1;
            this.goldHolder.scale = 0.8;
            this.buttonHolder.scale = 1.2;
            this.characteHouse.x = -450;
            this.enemyHouse.x = 480;
            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {
            cc.log("vt ipad");
            this.goldHolder.getComponent(cc.Widget).right = 200;
            this.camIntro.zoomRatio = 1.1;
            this.moneyHolder.scale = 1.5;

            this.cam.zoomRatio = 1;
            this.goldHolder.scale = 1;
            this.bottomUI.scale = 1;
            this.topUI.scale = 1;
            this.buttonHolder.scale = 1.2;
            this.characteHouse.x = -700;
            this.enemyHouse.x = 700;

            // Ipad


        }

    }


    private unActiveLogo(): void {

    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
