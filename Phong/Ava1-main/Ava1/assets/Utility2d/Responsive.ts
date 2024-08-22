

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(cc.Node)
    verticalGroup: cc.Node = null;

    @property(cc.Node)
    elementGroupVertical: cc.Node = null;

    @property(cc.Node)
    textVertical: cc.Node = null;

    @property(cc.Node)
    horizontalGroup: cc.Node = null;


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
        this.horizontalGroup.opacity = 255;
        this.verticalGroup.opacity = 0;
    }
    //       this.logo


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
            cc.log("hr ip 6");
            this.horizontalGroup.opacity = 255;
            this.verticalGroup.opacity = 0;
            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {

            cc.log("hr ipad");
            this.horizontalGroup.opacity = 255;
            this.verticalGroup.opacity = 0;
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
        cc.log("vt ipx");
        this.horizontalGroup.opacity = 0;
        this.verticalGroup.opacity = 255;
        this.elementGroupVertical.scale = 0.8;
        this.textVertical.scale = 0.8;
        this.device = this.VERTICAL_IPX;


    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
            cc.log("vt ip 6");


            this.horizontalGroup.opacity = 0;
            this.verticalGroup.opacity = 255;
            this.elementGroupVertical.scale = 1;
            this.textVertical.scale = 1;
            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {
            cc.log("vt ipad");
            this.horizontalGroup.opacity = 0;
            this.verticalGroup.opacity = 255;
            this.elementGroupVertical.scale = 1.08;
            this.textVertical.scale = 1;
            // Ipad


        }

    }


    private unActiveLogo(): void {

    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
