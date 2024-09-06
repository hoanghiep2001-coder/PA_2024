import { Constants } from "../Data/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {
    @property(cc.Node)
    btn_Next: cc.Node = null;
    @property(cc.Node)
    tutorial: cc.Node = null;
    @property(cc.Node)
    btn_install: cc.Node = null;


    // state
    device: string = "";
    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected onLoad(): void {

    }


    protected start(): void {

    }

    
    private handleRotate(): void {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }

    private setHorizontal(): void {
        if(cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX(); 
        } else {
            this.setHorizontalForTablet();
        }
    }

    private setHorizontalForIpX(): void {
        if(this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;

        this.btn_Next.y = -125;
        this.btn_Next.scale = 0.3;

        this.tutorial.scale = 1;
        this.tutorial.y = 0;

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
    }

    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        this.btn_Next.y = -125;
        this.btn_Next.scale = 0.35;

        this.tutorial.scale = 1;
        this.tutorial.y = 0;

        this.btn_install.scale = 0.5;
        this.btn_install.getComponent(cc.Widget).right = -0;
        this.btn_install.getComponent(cc.Widget).bottom = -25;
        // horizontal google
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height <= 1.2 && cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 1.2) {

        //     return;
        // }

    }

    private setVertical(): void {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }

    private setIphoneX(): void {
        if(this.VERTICAL_IPX === this.device) {
            return;
        }

        this.device = this.VERTICAL_IPX;

        this.btn_Next.y = -300;
        this.btn_Next.scale = 0.6;

        this.tutorial.scale = 1.3;
        this.tutorial.y = -180;

        this.btn_install.scale = 0.6;
        this.btn_install.getComponent(cc.Widget).right = -0
        this.btn_install.getComponent(cc.Widget).bottom = -350
    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;           

        if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {

            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
                // mobile mode applovin
                this.btn_Next.y = -300;
                this.btn_Next.scale = 0.45;
    
                this.tutorial.scale = 1.3;
                this.tutorial.y = -140;
    
                this.btn_install.scale = 0.6;
                this.btn_install.getComponent(cc.Widget).right = -0
                this.btn_install.getComponent(cc.Widget).bottom = -240

                return;
            }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.btn_Next.y = -300;
            this.btn_Next.scale = 0.45;

            this.tutorial.scale = 1.3;
            this.tutorial.y = -140;

            this.btn_install.scale = 0.6;
            this.btn_install.getComponent(cc.Widget).right = -0
            this.btn_install.getComponent(cc.Widget).bottom = -260
        } else {    

            // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 8.5 
            // && cc.view.getFrameSize().width / cc.view.getFrameSize().height > 8.3) {

            //     return;
            // }

            // Ipad
            this.btn_Next.y = -200;
            this.btn_Next.scale = 0.45;

            this.tutorial.scale = 1.1;
            this.tutorial.y = -90;

            this.btn_install.scale = 0.5;
            this.btn_install.getComponent(cc.Widget).right = -0
            this.btn_install.getComponent(cc.Widget).bottom = -158
 
        }
        
    }

    protected update(dt: number): void {
        this.handleRotate();
    }

}
