import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // state
    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";

    @property(cc.Node)
    background: cc.Node = null;

    @property(cc.Node)
    downloadIcon: cc.Node = null;
    @property(cc.Node)
    moneyTrayBase: cc.Node = null;

    @property(cc.Node)
    loadFood: cc.Node = null;
    @property(cc.Node)
    frameFood: cc.Node = null;
    @property(cc.Node)
    LayoutOptions: cc.Node = null;


    protected start(): void {

    }


    private handleRotate(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (width > height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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

        if(Constants.Responsive.isHor) {
            return;
        }

        Constants.Responsive.isHor = true;

        // cc.director.loadScene("game");
        Constants.scaleArmy = 0.3;
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        if(Constants.Responsive.isHor) {
            return;
        }

        Constants.Responsive.isHor = true;

        Constants.scaleArmy = 0.3;
        // cc.director.loadScene("game");

    }


    private setVertical(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }


    private setIphoneX(): void {
        if(Constants.Responsive.isVer) {
            return;
        }

        Constants.Responsive.isVer = true;

        Constants.scaleArmy = 0.3;
        // cc.director.loadScene("game");
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        if(Constants.Responsive.isVer) {
            return;
        }

        Constants.Responsive.isVer = true;


        if (height / width > 1.5) {
            // if (width / height >= 0.6 && width / height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            // cc.director.loadScene("game");
            Constants.scaleArmy = 0.3;
        } else {
            // cc.director.loadScene("game");
            Constants.scaleArmy = 0.3;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
