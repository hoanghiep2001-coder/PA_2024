

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(cc.Node)
    all: cc.Node = null;

    @property(cc.Node)
    all1: cc.Node = null;

    @property(cc.Node)
    guide: cc.Node = null;

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    ballStart: cc.Node = null;

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
        cc.log("hr ipx");
        this.device = this.HORIZONTAL_IPX;
        this.all.scale = 1;
        this.bg.scale = 1;
        this.guide.scale = 1;
        this.ballStart.scale = 1;
        this.all.y = 195;

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

            cc.log("hr ipad");
            this.all.scale = 1;
            this.bg.scale = 1;
            this.guide.scale = 1;
            this.ballStart.scale = 1;
            this.all.y = 195;

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

    boolFirst: boolean = false;
    private setIphoneX(): void {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        cc.log("vt ipx");
        this.all.scale = 0.75;
        this.all.y = 550;
        this.ballStart.scale = 0.75;

        this.bg.scale = 1;
        this.guide.scale = 0.9;
        // if (!this.boolFirst) {
        //     this.boolFirst = true;
        //     this.all1.y = -800;
        // }
        this.device = this.VERTICAL_IPX;


    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
            cc.log("vt ip 6");
            this.all.scale = 0.92;
            this.all.y = 308;
            this.bg.scale = 1;
            this.guide.scale = 1;
            this.ballStart.scale = 0.92;

            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {
            cc.log("vt ipad");
            this.all.scale = 1;
            this.all.y = 195;

            this.bg.scale = 1;
            this.guide.scale = 1;
            this.ballStart.scale = 1;


            // Ipad


        }

    }


    private unActiveLogo(): void {

    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
