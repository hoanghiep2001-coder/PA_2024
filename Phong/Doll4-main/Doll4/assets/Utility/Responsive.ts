

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(cc.Node)
    tabSkin: cc.Node = null;

    @property(cc.Node)
    yesOrNo: cc.Node = null;

    @property(cc.Node)
    match3: cc.Node = null;

    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";

    protected onLoad(): void {

    }

    protected start(): void {
        this.handleRotate();
    }


    private handleRotate(): void {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.tabSkin.scale = 2;
            this.yesOrNo.scale = 1.5;
            this.match3.scale = 1.5;
            this.yesOrNo.y = 333;
            this.setHorizontal();
        } else {
           

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
        this.device = this.HORIZONTAL_IPX;

    }
    //       this.logo


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
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
        this.isRotate = false;
        this.tabSkin.scale = 1.1;
        this.yesOrNo.scale = 0.8;
        this.match3.scale = 0.9;
        this.yesOrNo.y = 0;
        this.device = this.VERTICAL_IPX;


    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.isRotate = false;
        this.tabSkin.scale = 1.1;
        this.yesOrNo.scale = 1;
        this.match3.scale = 1;
        this.yesOrNo.y = 0;

        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {

            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {
            // Ipad

        }

    }


    private unActiveLogo(): void {

    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
