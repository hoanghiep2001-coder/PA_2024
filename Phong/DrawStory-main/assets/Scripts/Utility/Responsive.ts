

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(cc.Node)
    logo    : cc.Node = null;
    
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
        this.logo.scale =0.5;
        this.logo.y =530.648;
    }
//       this.logo


    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
       // this.logo.scale = 0.3;
        //this.logo.y = 0.3;
       
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

       
    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;


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
