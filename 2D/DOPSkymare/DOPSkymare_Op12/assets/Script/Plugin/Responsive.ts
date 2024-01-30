
import GamePlay from "../Controller/GamePlay";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(cc.Node)
    background: cc.Node = null;
    @property(cc.Node)
    lantern: cc.Node = null;
    @property(cc.Node)
    drawArea: cc.Node = null;


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
        this.lantern.scale = 0.5

        this.GamePlay.text_lv3.scale = 0.48;
        this.GamePlay.text_lv3.y = 135;

        this.GamePlay.logo.scale = 0.5;
        this.GamePlay.logo.x = -270;  
        this.GamePlay.logo.y = 0;     
        
        this.GamePlay.CTA_logo.scale = 0.75;
    }

    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        Constants.Responsive.currentDevice = "horizon_Tablet";


        this.lantern.scale = 0.35

        this.GamePlay.text_lv3.scale = 0.48;
        this.GamePlay.text_lv3.y = 135;

        this.GamePlay.logo.scale = 0.4;
        this.GamePlay.logo.x = -240;  
        this.GamePlay.logo.y = 0;    
        
        this.GamePlay.CTA_logo.scale = 0.7;
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

        this.lantern.scale = 0.35

        this.GamePlay.spine_level3.scale = 0.28;
        this.GamePlay.text_lv3.scale = 0.3;
        this.GamePlay.text_lv3.y = 75;

        this.GamePlay.logo.scale = 0.4;

        this.GamePlay.logo.x = 0;  
        this.GamePlay.logo.y = 150;

        this.GamePlay.CTA_logo.scale = 0.55;

    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;

        Constants.Responsive.currentDevice = "vertical_mobile";

        this.lantern.scale = 0.35

        this.GamePlay.text_lv3.scale = 0.38;
        this.GamePlay.text_lv3.y = 100;

        this.GamePlay.logo.scale = 0.4;
        this.GamePlay.logo.x = 0;    
        this.GamePlay.logo.y = 170;   

        this.GamePlay.CTA_logo.scale = 0.6;       

        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
           
        // } else {    
        //     // Ipad

        // }
        
    }


    private unActiveLogo(): void {
        this.GamePlay.logo.active = false;
    }


    protected update(dt: number): void {
        this.handleRotate();
        Constants.isDrawSuccess && this.unActiveLogo();
    }

}
