import BaseController from "../Controller/BaseController";
import CoinController from "../Controller/CoinController";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    @property(BaseController)
    enemyBase: BaseController = null;
    @property(BaseController)
    allyBase: BaseController = null;
    @property(CoinController)
    CoinController: CoinController = null;

    @property(cc.Node)
    Environment: cc.Node = null;
    @property(cc.Node)
    Options: cc.Node = null;


    @property(cc.Node)
    speedLine: cc.Node = null;

    @property(cc.Node)
    CTA_logo: cc.Node = null;

    @property(cc.Node)
    Hor_Decor: cc.Node = null;
    @property(cc.Node)
    Ver_Decor: cc.Node = null;

    FrameFood: cc.Node = null;
    LoadFood: cc.Node = null;
    Options_Layout: cc.Node = null;

    // state
    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected start(): void {
        this.FrameFood = this.Options.getChildByName("Framefood");
        this.LoadFood = this.Options.getChildByName("LoadFoodController");
        this.Options_Layout = this.Options.getChildByName("Layout");
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

        this.Hor_Decor.active = true;
        this.Ver_Decor.active = false;

        Constants.Responsive.speedCalculated = 20;
        Constants.scaleArmy = 0.5;

        this.CoinController.node.scale = 1;

        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);

        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);

        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;

        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        let optionsChild = this.Options_Layout.children;

        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;

        optionsLayout.spacingX = 140;
        optionsChild.forEach(child => {
            child.scale = 1.15;
        });

        this.CTA_logo.scale = 0.4;

        this.speedLine.scale = 0.9;
        this.speedLine.y = -200;
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.Hor_Decor.active = true;
        this.Ver_Decor.active = false;

        Constants.Responsive.speedCalculated = 10;
        Constants.scaleArmy = 0.5;

        this.CoinController.node.scale = 1;

        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);

        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);

        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;

        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        let optionsChild = this.Options_Layout.children;

        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;

        optionsLayout.spacingX = 120;
        optionsChild.forEach(child => {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });

        this.CTA_logo.scale = 0.4;


        this.speedLine.scale = 0.6;
        this.speedLine.y = -180;
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

        this.Hor_Decor.active = false;
        this.Ver_Decor.active = true;

        Constants.Responsive.speedCalculated = 0;
        Constants.scaleArmy = 0.25;

        this.CoinController.node.scale = 0.8;

        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)

        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        this.FrameFood.setScale(10, 0.25);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.22, 0.24);
        this.LoadFood.getComponent(cc.Widget).left = -2;
        this.LoadFood.getComponent(cc.Widget).bottom = -2;
        
        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        let optionsChild = this.Options_Layout.children;
        
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignLeft = true;
        optionsWidget.right = 67;
        optionsWidget.left = 177;
        optionsWidget.bottom = 34;
        
        optionsLayout.spacingX = 55;
        optionsChild.forEach(child => {
            child.scale = 0.6;
        });

        this.CTA_logo.scale = 0.3;
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        this.Hor_Decor.active = false;
        this.Ver_Decor.active = true;


        Constants.Responsive.speedCalculated = 0;
        Constants.scaleArmy = 0.25;

        this.CoinController.node.scale = 0.8;

        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)

        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        this.FrameFood.setScale(10, 0.25);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.22, 0.24);
        this.LoadFood.getComponent(cc.Widget).left = -2;
        this.LoadFood.getComponent(cc.Widget).bottom = -2;
        
        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        let optionsChild = this.Options_Layout.children;
        
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignLeft = true;
        optionsWidget.right = 67;
        optionsWidget.left = 177;
        optionsWidget.bottom = 34;
        
        optionsLayout.spacingX = 55;

        optionsChild.forEach(child => {
            child.scale = 0.6;
        });

        this.CTA_logo.scale = 0.3;


        this.speedLine.scale = 0.3;
        this.speedLine.y = -90;
        // if (height / width > 1.5) {
          
        //     this.CoinController.node.scale = 0.8;

        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
    
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
            
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
            
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
            
        //     optionsLayout.spacingX = 70;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // } else {

        //     this.CoinController.node.scale = 0.8;

        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
    
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
            
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
            
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
            
        //     // optionsLayout.spacingX = 50;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
