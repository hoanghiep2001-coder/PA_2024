
import GamePlay from "../Controller/GamePlay";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(cc.Node)
    textOpening: cc.Node = null;
    @property(cc.Node)
    Options: cc.Node = null;
    @property(cc.Node)
    text: cc.Node = null;
    @property(cc.Node)
    BG: cc.Node = null;
    @property([cc.Node])
    Sheeps: cc.Node[] = [];

    @property(cc.Node)
    CTA_Btn: cc.Node = null;
    @property(cc.Node)
    CTA_logo: cc.Node = null;

    // state
    device: string = "";
    isRotate: boolean = false;

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
            this.isRotate = true;
            this.setHorizontal();
        } else {
            this.isRotate = false;
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
        Constants.Responsive.currentDevice = "horizon_Tablet";

        this.textOpening.x = 0;
        this.textOpening.y = 60;
        this.textOpening.scale = 0.6;

        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 1.3;

        this.text.x = 0;
        this.text.y = 190;
        this.text.scale = 1;

        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;

        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.62;

        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.62;

        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.62;

        this.CTA_logo.scale = 0.7;
        this.CTA_Btn.scale = 0.5;
    }


    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        Constants.Responsive.currentDevice = "horizon_Tablet";

        this.textOpening.x = 0;
        this.textOpening.y = 60;
        this.textOpening.scale = 0.6;

        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 1.3;

        this.text.x = 0;
        this.text.y = 190;
        this.text.scale = 1;

        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;

        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.62;

        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.62;

        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.62;

        this.CTA_logo.scale = 0.6;
        this.CTA_Btn.scale = 0.5;
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

        Constants.Responsive.currentDevice = "vertical_mobile";

        this.textOpening.x = 0;
        this.textOpening.y = 50;
        this.textOpening.scale = 0.4;

        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 0.9;

        this.text.x = 0;
        this.text.y = 170;
        this.text.scale = 0.8;

        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.5;

        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.57;

        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.57;

        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.57;

        this.CTA_logo.scale = 0.48;
        this.CTA_Btn.scale = 0.4;
    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;

        Constants.Responsive.currentDevice = "vertical_mobile";

        this.textOpening.x = 0;
        this.textOpening.y = 50;
        this.textOpening.scale = 0.45;

        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 1;

        this.text.x = 0;
        this.text.y = 190;
        this.text.scale = 1;

        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;

        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.62;

        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.62;

        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.62;

        this.CTA_logo.scale = 0.54;
        this.CTA_Btn.scale = 0.4;

        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
            
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
    
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
    
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
    
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
    
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
    
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
    
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
    
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
    
        //     this.cancelBtn.scale = 0.45;

        // } else {    
        //     // Ipad
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
    
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
    
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
    
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
    
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
    
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
    
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
    
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
    
        //     this.cancelBtn.scale = 0.45;
        // }
        
    }


    private unActiveLogo(): void {
    
    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
