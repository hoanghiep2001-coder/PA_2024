import NodeContainer from "../Controller/NodeContanier";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    @property(NodeContainer)
    NodeContainer: NodeContainer = null;


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

        this.NodeContainer.Bg_1.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.45;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Bg_2_1.scale = 0.45;
        this.NodeContainer.Bg_2_1.y = 45;
        this.NodeContainer.Bg_2_1.x = 600;
        this.NodeContainer.Bg_2_2.scale = 0.45;
        this.NodeContainer.Bg_2_2.y = 45;
        this.NodeContainer.Bg_2_2.x = -670;

        Constants.Responsive.calculatedX = 155;
        Constants.Responsive.calculatedY = 250;

        this.NodeContainer.Step1_Ponny.scale = 0.88;
        this.NodeContainer.Step1_Ponny.y = -210;
            
        this.NodeContainer.Step2_Ponny.y = -30;

        this.NodeContainer.OptionContainer.scale = 1.1;
        this.NodeContainer.OptionContainer.x = 220;
        this.NodeContainer.OptionContainer.y = 250;

        this.NodeContainer.Flow1_Opt1.x = 0;
        this.NodeContainer.Flow1_Opt1.y = -150;
        this.NodeContainer.Flow1_Opt2.x = 0;
        this.NodeContainer.Flow1_Opt2.y = -290;

        this.NodeContainer.Flow2_Opt1.x = 0;
        this.NodeContainer.Flow2_Opt1.y = -150;
        this.NodeContainer.Flow2_Opt2.x = 0;
        this.NodeContainer.Flow2_Opt2.y = -290;
        
        this.NodeContainer.Flow3_Opt1.x = 0;
        this.NodeContainer.Flow3_Opt1.y = -150;
        this.NodeContainer.Flow3_Opt2.x = 0;
        this.NodeContainer.Flow3_Opt2.y = -290;
    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.NodeContainer.Bg_1.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.4;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;

        Constants.Responsive.calculatedX = 155;
        Constants.Responsive.calculatedY = 310;

        this.NodeContainer.Step1_Ponny.scale = 0.85;
        this.NodeContainer.Step1_Ponny.y = -210;
        
        this.NodeContainer.Step2_Ponny.y = -30;

        this.NodeContainer.OptionContainer.scale = 1.1;
        this.NodeContainer.OptionContainer.x = 220;
        this.NodeContainer.OptionContainer.y = 250;

        this.NodeContainer.Flow1_Opt1.x = 0;
        this.NodeContainer.Flow1_Opt1.y = -150;
        this.NodeContainer.Flow1_Opt2.x = 0;
        this.NodeContainer.Flow1_Opt2.y = -290;

        this.NodeContainer.Flow2_Opt1.x = 0;
        this.NodeContainer.Flow2_Opt1.y = -150;
        this.NodeContainer.Flow2_Opt2.x = 0;
        this.NodeContainer.Flow2_Opt2.y = -290;
        
        this.NodeContainer.Flow3_Opt1.x = 0;
        this.NodeContainer.Flow3_Opt1.y = -150;
        this.NodeContainer.Flow3_Opt2.x = 0;
        this.NodeContainer.Flow3_Opt2.y = -290;
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
        if (this.VERTICAL_IPX === this.device) {
            return;
        }

        this.device = this.VERTICAL_IPX;

        this.NodeContainer.Bg_1.scale = 0.55;
        this.NodeContainer.Bg_2.scale = 0.48;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;

        this.NodeContainer.OptionContainer.scale = 1;
        this.NodeContainer.OptionContainer.x = 0;
        this.NodeContainer.OptionContainer.y = 0;

        this.NodeContainer.Flow1_Opt1.x = -64;
        this.NodeContainer.Flow1_Opt1.y = -220;
        this.NodeContainer.Flow1_Opt2.x = 64;
        this.NodeContainer.Flow1_Opt2.y = -220;

        this.NodeContainer.Flow2_Opt1.x = -64;
        this.NodeContainer.Flow2_Opt1.y = -220;
        this.NodeContainer.Flow2_Opt2.x = 64;
        this.NodeContainer.Flow2_Opt2.y = -220;
        
        this.NodeContainer.Flow3_Opt1.x = -64;
        this.NodeContainer.Flow3_Opt1.y = -220;
        this.NodeContainer.Flow3_Opt2.x = 64;
        this.NodeContainer.Flow3_Opt2.y = -220;
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        // node build-inline.js unity
        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin

                this.NodeContainer.Bg_1.scale = 0.45;
                this.NodeContainer.Bg_2.scale = 0.4;
                this.NodeContainer.Bg_2.y = 45;
                this.NodeContainer.Bg_2.x = -45;
    
                Constants.Responsive.calculatedX = 0;
                Constants.Responsive.calculatedY = 0;
    
                this.NodeContainer.OptionContainer.scale = 0.9;
                this.NodeContainer.OptionContainer.x = 0;
                this.NodeContainer.OptionContainer.y = 0;
        
                this.NodeContainer.Flow1_Opt1.x = -64;
                this.NodeContainer.Flow1_Opt1.y = -220;
                this.NodeContainer.Flow1_Opt2.x = 64;
                this.NodeContainer.Flow1_Opt2.y = -220;
        
                this.NodeContainer.Flow2_Opt1.x = -64;
                this.NodeContainer.Flow2_Opt1.y = -220;
                this.NodeContainer.Flow2_Opt2.x = 64;
                this.NodeContainer.Flow2_Opt2.y = -220;
                
                this.NodeContainer.Flow3_Opt1.x = -64;
                this.NodeContainer.Flow3_Opt1.y = -220;
                this.NodeContainer.Flow3_Opt2.x = 64;
                this.NodeContainer.Flow3_Opt2.y = -220;
                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Bg_1.scale = 0.45;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;

            Constants.Responsive.calculatedX = 0;
            Constants.Responsive.calculatedY = 0;

            this.NodeContainer.OptionContainer.scale = 1;
            this.NodeContainer.OptionContainer.x = 0;
            this.NodeContainer.OptionContainer.y = 0;
    
            this.NodeContainer.Flow1_Opt1.x = -64;
            this.NodeContainer.Flow1_Opt1.y = -220;
            this.NodeContainer.Flow1_Opt2.x = 64;
            this.NodeContainer.Flow1_Opt2.y = -220;
    
            this.NodeContainer.Flow2_Opt1.x = -64;
            this.NodeContainer.Flow2_Opt1.y = -220;
            this.NodeContainer.Flow2_Opt2.x = 64;
            this.NodeContainer.Flow2_Opt2.y = -220;
            
            this.NodeContainer.Flow3_Opt1.x = -64;
            this.NodeContainer.Flow3_Opt1.y = -220;
            this.NodeContainer.Flow3_Opt2.x = 64;
            this.NodeContainer.Flow3_Opt2.y = -220;
        } else {
            this.NodeContainer.Bg_1.scale = 0.5;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;

            Constants.Responsive.calculatedX = 20;
            Constants.Responsive.calculatedY = 25;

            this.NodeContainer.Step1_Ponny.scale = 0.85;
            this.NodeContainer.Step1_Ponny.y = -210;

            this.NodeContainer.Step2_Ponny.y = 0;

            this.NodeContainer.OptionContainer.scale = 0.85;
            this.NodeContainer.OptionContainer.x = 0;
            this.NodeContainer.OptionContainer.y = 0;
    
            this.NodeContainer.Flow1_Opt1.x = -64;
            this.NodeContainer.Flow1_Opt1.y = -220;
            this.NodeContainer.Flow1_Opt2.x = 64;
            this.NodeContainer.Flow1_Opt2.y = -220;
    
            this.NodeContainer.Flow2_Opt1.x = -64;
            this.NodeContainer.Flow2_Opt1.y = -220;
            this.NodeContainer.Flow2_Opt2.x = 64;
            this.NodeContainer.Flow2_Opt2.y = -220;
            
            this.NodeContainer.Flow3_Opt1.x = -64;
            this.NodeContainer.Flow3_Opt1.y = -220;
            this.NodeContainer.Flow3_Opt2.x = 64;
            this.NodeContainer.Flow3_Opt2.y = -220;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
