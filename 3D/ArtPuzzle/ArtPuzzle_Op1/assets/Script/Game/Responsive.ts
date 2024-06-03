
import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log, Widget, Camera, Vec3, UITransform } from 'cc';
import { GamePlay } from './GamePlay';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';
const { ccclass, property } = _decorator;


@ccclass('Responsive')
export class Responsive extends Component {

    @property(UIController)
    UIController: UIController = null;

    // Node
    scrollView_view: Node = null;
    scrollView_content: Node = null;

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
        this.scrollView_view = this.UIController.ScrollView.node.getChildByName("View");
        this.scrollView_content = this.scrollView_view.getChildByName("content");
    }


    private handleRotate(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        if (screen.windowSize.height / screen.windowSize.width < 0.65) {
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

        this.UIController.Progress.parent.setPosition(0, 780, 0);
        this.UIController.Tutorial.setPosition(0, 0, 0);
        this.UIController.ScrollView.node.setPosition(0, -195, 0);
        this.UIController.ScrollView.getComponent(UITransform).width = 1000;
        this.scrollView_view.getComponent(UITransform).width = 1000;
        this.scrollView_content.getComponent(UITransform).setAnchorPoint(0.5, 0.5);

        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    


        // if (screen.windowSize.height / screen.windowSize.width > 0.55) {
        //     // Ip 6 / 6Plus / 7 / 7 Plus

        //     console.log(1);
        // } else {

        //     // IpX
  
        //     console.log(2);
        // }

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.UIController.Progress.parent.setPosition(0, 800, 0);
        this.UIController.Tutorial.setPosition(0, 0, 0);
        this.UIController.ScrollView.node.setPosition(0, -195, 0);
        this.UIController.ScrollView.getComponent(UITransform).width = 1000;
        this.scrollView_view.getComponent(UITransform).width = 1000;
        this.scrollView_content.getComponent(UITransform).setAnchorPoint(0.5, 0.5);


        console.log(3);

        // horizontal google
        // if(cc.screen.windowSize.width / cc.screen.windowSize.height <= 1.2 && cc.screen.windowSize.width / cc.screen.windowSize.height >= 1.2) {

        //     return;
        // }

    }


    private setVertical(): void {
        if (screen.windowSize.width / screen.windowSize.height < 0.5) {
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

        console.log(4);
        
        this.UIController.Progress.parent.setPosition(0, 870, 0);
        this.UIController.Tutorial.setPosition(0, -45, 0);
        this.UIController.ScrollView.node.setPosition(0, -230, 0);
        this.UIController.ScrollView.getComponent(UITransform).width = 200;
        this.scrollView_view.getComponent(UITransform).width = 280;
        this.scrollView_content.getComponent(UITransform).setAnchorPoint(0.07, 0.5);

    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.UIController.Progress.parent.setPosition(0, 800, 0);
        this.UIController.Tutorial.setPosition(0, 0, 0);
        this.UIController.ScrollView.node.setPosition(0, -195, 0);
        this.UIController.ScrollView.getComponent(UITransform).width = 500;
        this.scrollView_view.getComponent(UITransform).width = 280;
        this.scrollView_content.getComponent(UITransform).setAnchorPoint(0.07, 0.5);

        // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
        //     // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
        //     //     // mobile mode applovin

        //     //     return;
        //     // }

        //     // Iphone 6 / 6 plus / 7 / 7 Plus

        //     console.log(5);
        // } else {
        //     // Ipad
        //     console.log(6);
        // }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

