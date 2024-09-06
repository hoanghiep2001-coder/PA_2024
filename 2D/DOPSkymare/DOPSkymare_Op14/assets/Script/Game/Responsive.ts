
import { Constants } from "../Data/constants";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {
    // Component
    @property(GamePlay)
    GamePlay: GamePlay = null;

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
        this.GamePlay.drawSpace_Lv1.y = 0;
        this.GamePlay.hand_Lv1.scale = 0.3;

        this.GamePlay.drawSpace_Lv2.y = 5;
        
        // this.GamePlay.hand_Lv2.scale = 0.4;

        this.GamePlay.text_lv2.scale = 0.5;
        this.GamePlay.text_lv2.y = 180;

        this.GamePlay.spine_level2.scale = 0.3;
        this.GamePlay.spine_level2.y = -200;

        this.GamePlay.text_lv3.scale = 0.4;
        this.GamePlay.text_lv3.y = 155;
        // this.GamePlay.handLv3.y = -20;

        this.GamePlay.text.scale = 0.4;

        this.GamePlay.spine.scale = 0.35;
        this.GamePlay.spine.x = 0;
        this.GamePlay.spine.y = -200;  

        this.GamePlay.logo.scale = 0.5;
        this.GamePlay.logo.x = -270;  
        this.GamePlay.logo.y = 0      
        this.GamePlay.text.y = 190;

        this.GamePlay.image_Lv3.scale = 0.4;
        this.GamePlay.image_Lv3.y = 0;

        this.GamePlay.btn_install.getComponent(cc.Button).enabled = false;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = false;
        this.GamePlay.btn_install.scale = 0.35;
        this.GamePlay.btn_install.getComponent(cc.Button).enabled = true;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = true;
    }


    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        Constants.Responsive.currentDevice = "horizon_Tablet";
        this.GamePlay.drawSpace_Lv1.y = 0;
        this.GamePlay.drawSpace_Lv2.y = 0;
        this.GamePlay.hand_Lv1.scale = 0.3;

        // this.GamePlay.hand_Lv2.scale = 0.3;
        this.GamePlay.text_lv2.scale = 0.48;
        this.GamePlay.text_lv2.y = 135;

        this.GamePlay.text_lv3.scale = 0.4;
        this.GamePlay.text_lv3.y = 155;
        // this.GamePlay.handLv3.y = 0;
        
        this.GamePlay.spine.scale = 0.32;
        this.GamePlay.spine.x = 0;
        this.GamePlay.spine.y = -180;     
        
        this.GamePlay.logo.scale = 0.4;
        this.GamePlay.logo.x = -240;  
        this.GamePlay.logo.y = 0      

        this.GamePlay.text.scale = 0.35;
        this.GamePlay.text.y = 190;

        this.GamePlay.image_Lv3.scale = 0.4;
        this.GamePlay.image_Lv3.y = 0;

        this.GamePlay.btn_install.getComponent(cc.Button).enabled = false;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = false;
        this.GamePlay.btn_install.scale = 0.3;
        this.GamePlay.btn_install.getComponent(cc.Button).enabled = true;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = true;
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
        this.GamePlay.drawSpace_Lv1.y = -10;
        this.GamePlay.hand_Lv1.scale = 0.25;
        // this.GamePlay.hand_Lv2.scale = 0.25;

        this.GamePlay.drawSpace_Lv2.y = 20;
        
        this.GamePlay.text_lv2.scale = 0.28;
        this.GamePlay.text_lv2.y = 70;

        this.GamePlay.text_lv3.scale = 0.22;
        this.GamePlay.text_lv3.y = 80;
        // this.GamePlay.handLv3.y = -20;

        this.GamePlay.text.scale = 0.23;
        this.GamePlay.spine.scale = 0.22;
        this.GamePlay.logo.scale = 0.4;

        this.GamePlay.logo.x = 0;  
        this.GamePlay.logo.y = 150    
         
        this.GamePlay.text.y = 75;

        this.GamePlay.spine.x = 0;
        this.GamePlay.spine.y = -180;
        this.GamePlay.spine_level2.scale = 0.18;
        this.GamePlay.spine_level2.y = -160;

        this.GamePlay.image_Lv3.scale = 0.28;
        this.GamePlay.image_Lv3.y = -20;

        this.GamePlay.btn_install.getComponent(cc.Button).enabled = false;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = false;
        this.GamePlay.btn_install.scale = 0.2;
        this.GamePlay.btn_install.getComponent(cc.Button).enabled = true;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = true;
    }


    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;

        Constants.Responsive.currentDevice = "vertical_mobile";
        this.GamePlay.drawSpace_Lv1.y = 0;
        this.GamePlay.drawSpace_Lv2.y = 20;
        this.GamePlay.hand_Lv1.scale = 0.25;
        // this.GamePlay.hand_Lv2.scale = 0.25;
        
        this.GamePlay.text_lv2.scale = 0.35;
        this.GamePlay.text_lv2.y = 110;

        this.GamePlay.text_lv3.scale = 0.3;
        this.GamePlay.text_lv3.y = 120;
        // this.GamePlay.handLv3.y = -55;

        this.GamePlay.spine.scale = 0.25;   

        this.GamePlay.spine_level2.scale = 0.2;
        this.GamePlay.spine_level2.y = -180;

        this.GamePlay.logo.scale = 0.4;
        
        this.GamePlay.logo.x = 0;    
        this.GamePlay.logo.y = 188;

        this.GamePlay.text.scale = 0.3;
        this.GamePlay.text.y = 105;

        this.GamePlay.spine.x = 0;
        this.GamePlay.spine.y = -180;            
        
        this.GamePlay.image_Lv3.scale = 0.28;
        this.GamePlay.image_Lv3.y = -30;

        this.GamePlay.btn_install.getComponent(cc.Button).enabled = false;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = false;
        this.GamePlay.btn_install.scale = 0.2;
        this.GamePlay.btn_install.getComponent(cc.Button).enabled = true;
        this.GamePlay.btn_install.getComponent(cc.Widget).enabled = true;

        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
           
        // } else {    
        //     // Ipad

        // }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
