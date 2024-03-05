import GamePlay from "../Controller/GamePlay";
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
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }

    private setHorizontal(): void {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            // Constants.isRotate = true;
            this.setHorizontalForIpX();
        } else {
            // Constants.isRotate = true;
            this.setHorizontalForTablet();
        }
    }

    private setHorizontalForIpX(): void {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;

        this.NodeContainer.Bg_1.scale = 0.8;
        // this.NodeContainer.Bg_1_1.scale = 0.8;
        // this.NodeContainer.Bg_1_2.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.45;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Bg_2_1.scale = 0.45;
        this.NodeContainer.Bg_2_1.y = 45;
        this.NodeContainer.Bg_2_1.x = 600;
        this.NodeContainer.Bg_2_2.scale = 0.45;
        this.NodeContainer.Bg_2_2.y = 45;
        this.NodeContainer.Bg_2_2.x = -670;

        this.NodeContainer.Cleanser.x = 155;
        this.NodeContainer.Cleanser.y = 250;
        this.NodeContainer.Tweezers.x = 155;
        this.NodeContainer.Tweezers.y = 250;

        this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 155;
        this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 250 - 30;
        this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 155;
        this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 250 - 30;
        Constants.Responsive.calculatedX = 155;
        Constants.Responsive.calculatedY = 250;

        this.NodeContainer.Step1_Ponny.scale = 0.88;
        this.NodeContainer.Step1_Ponny.y = -210;
        
        this.NodeContainer.Step2_Ponny.y = -30;
 
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

        this.NodeContainer.Cleanser.x = 155;
        this.NodeContainer.Cleanser.y = 310;
        this.NodeContainer.Tweezers.x = 155;
        this.NodeContainer.Tweezers.y = 310;

        this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 155;
        this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 310 - 30;
        this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 155;
        this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 310 - 30;
        Constants.Responsive.calculatedX = 155;
        Constants.Responsive.calculatedY = 310;

        this.NodeContainer.Step1_Ponny.scale = 0.85;
        this.NodeContainer.Step1_Ponny.y = -210;
        
        this.NodeContainer.Step2_Ponny.y = -30;
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

        this.device = this.VERTICAL_IPX;

        this.NodeContainer.Bg_1.scale = 0.55;
        this.NodeContainer.Bg_2.scale = 0.48;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;

        this.NodeContainer.Cleanser.x = 0;
        this.NodeContainer.Cleanser.y = 0;
        this.NodeContainer.Tweezers.x = 0;
        this.NodeContainer.Tweezers.y = 0;
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin

         
            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Bg_1.scale = 0.45;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;

            this.NodeContainer.Cleanser.x = 0;
            this.NodeContainer.Cleanser.y = 0;
            this.NodeContainer.Tweezers.x = 0;
            this.NodeContainer.Tweezers.y = 0;

            this.NodeContainer.Tweezers_InteractPoint1.x = -39;
            this.NodeContainer.Tweezers_InteractPoint1.y = -73.5;
            this.NodeContainer.Tweezers_InteractPoint2.x = -8;
            this.NodeContainer.Tweezers_InteractPoint2.y = -128.5;
            Constants.Responsive.calculatedX = 0;
            Constants.Responsive.calculatedY = 0;
        } else {
            this.NodeContainer.Bg_1.scale = 0.5;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;

            this.NodeContainer.Cleanser.x = 25;
            this.NodeContainer.Cleanser.y = 25;
            this.NodeContainer.Tweezers.x = 15;
            this.NodeContainer.Tweezers.y = 25;

            this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 15;
            this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 25;
            this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 15;
            this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 25;
            Constants.Responsive.calculatedX = 20;
            Constants.Responsive.calculatedY = 25;

            this.NodeContainer.Step1_Ponny.scale = 0.85;
            this.NodeContainer.Step1_Ponny.y = -210;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
