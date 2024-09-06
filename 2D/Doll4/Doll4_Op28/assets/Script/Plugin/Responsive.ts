import GamePlay from "../Controller/GamePlay";
import NodesContainer from "../Controller/NodesContainer";
import { Constants } from "../Data/constants";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    @property(GamePlay)
    GamePlay: GamePlay = null;
    @property(NodesContainer)
    NodesContainer: NodesContainer = null;

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

        Constants.Responsive.calculatedX = -180;
        Constants.Responsive.calculatedY = -125;
        Constants.Responsive.calculatedScale = 1.2;

        this.NodesContainer.OpenScene.scale = 1;
        this.NodesContainer.BG.scale = 1;

        this.NodesContainer.OpenScene.scale = 0.9;

        this.NodesContainer.Doll.x = -200
        this.NodesContainer.Doll.y = -180;
        this.NodesContainer.Doll.scale = 1.4;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -60;

        this.NodesContainer.Opponent.x = 180
        this.NodesContainer.Opponent.y = 20;
        this.NodesContainer.Opponent.scale = 0.48;

        this.NodesContainer.DressUpBg_1.active = false;
        this.NodesContainer.DressUpBg_2.active = true;

        this.NodesContainer.DressUpPickTray.x = 150;
        this.NodesContainer.DressUpPickTray.y = 70;
        this.NodesContainer.DressUpPickTray.scale = 0.4;

        this.NodesContainer.DressUpText.scale = 0.6;
        this.NodesContainer.DressUpText.x = 150;
        this.NodesContainer.DressUpText.y = 150;

        this.NodesContainer.DressUp_BtnInstall.scale = 0.4;
        this.NodesContainer.DressUp_BtnInstall.x = 150;
        this.NodesContainer.DressUp_BtnInstall.y = -190;

        this.NodesContainer.Btn_Submit.scale = 0.45;
        this.NodesContainer.Btn_Submit.x = 150;
        this.NodesContainer.Btn_Submit.y = -130;
    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        Constants.Responsive.calculatedX = -180;
        Constants.Responsive.calculatedY = -125;
        Constants.Responsive.calculatedScale = 1.2;
        
        this.NodesContainer.BG.scale = 1;
        this.NodesContainer.OpenScene.scale = 0.9;

        this.NodesContainer.Doll.x = -200
        this.NodesContainer.Doll.y = -180;
        this.NodesContainer.Doll.scale = 1.4;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -60;

        this.NodesContainer.Opponent.x = 180
        this.NodesContainer.Opponent.y = 25;
        this.NodesContainer.Opponent.scale = 0.48;

        this.NodesContainer.DressUpBg_1.active = false;
        this.NodesContainer.DressUpBg_2.active = true;

        this.NodesContainer.DressUpPickTray.x = 120;
        this.NodesContainer.DressUpPickTray.y = 70;
        this.NodesContainer.DressUpPickTray.scale = 0.3;

        this.NodesContainer.DressUpText.scale = 0.45;
        this.NodesContainer.DressUpText.x = 120;
        this.NodesContainer.DressUpText.y = 150;

        this.NodesContainer.DressUp_BtnInstall.scale = 0.4;
        this.NodesContainer.DressUp_BtnInstall.x = 120;
        this.NodesContainer.DressUp_BtnInstall.y = -190;

        this.NodesContainer.Btn_Submit.scale = 0.45;
        this.NodesContainer.Btn_Submit.x = 120;
        this.NodesContainer.Btn_Submit.y = -120;

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
        Constants.Responsive.calculatedX = -80;
        Constants.Responsive.calculatedY = -195;
        Constants.Responsive.calculatedScale = 1.05;

        this.NodesContainer.BG.scale = 1.3;

        this.NodesContainer.OpenScene.scale = 1;

        this.NodesContainer.Doll.x = -0
        this.NodesContainer.Doll.y = -0;
        this.NodesContainer.Doll.scale = 1;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -90;

        this.NodesContainer.Opponent.x = 80
        this.NodesContainer.Opponent.y = -85;
        this.NodesContainer.Opponent.scale = 0.45;

        this.NodesContainer.DressUpBg_1.active = true;
        this.NodesContainer.DressUpBg_1.scale = 0.45;
        this.NodesContainer.DressUpBg_2.active = false;

        this.NodesContainer.DressUpPickTray.x = 0;
        this.NodesContainer.DressUpPickTray.y = -79.6;
        this.NodesContainer.DressUpPickTray.scale = 0.3;

        this.NodesContainer.DressUpText.scale = 0.33;
        this.NodesContainer.DressUpText.x = 0;
        this.NodesContainer.DressUpText.y = -230;

        this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
        this.NodesContainer.DressUp_BtnInstall.x = 0;
        this.NodesContainer.DressUp_BtnInstall.y = -300;

        this.NodesContainer.Btn_Submit.scale = 0.35;
        this.NodesContainer.Btn_Submit.x = 100;
        this.NodesContainer.Btn_Submit.y = -10;

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
            Constants.Responsive.calculatedX = -80;
            Constants.Responsive.calculatedY = -145;
            Constants.Responsive.calculatedScale = 1.05;

            this.NodesContainer.OpenScene.scale = 1;

            this.NodesContainer.Doll.x = -0
            this.NodesContainer.Doll.y = -0;
            this.NodesContainer.Doll.scale = 1;
            this.NodesContainer.DollPoint.node.scale = 0.8;
            this.NodesContainer.DollPoint.node.y = -90;

            this.NodesContainer.Opponent.x = 80
            this.NodesContainer.Opponent.y = -35;
            this.NodesContainer.Opponent.scale = 0.45;
    
            this.NodesContainer.DressUpBg_1.active = true;
            this.NodesContainer.DressUpBg_2.active = false;
    
            this.NodesContainer.DressUpPickTray.x = 0;
            this.NodesContainer.DressUpPickTray.y = -59.6;
            this.NodesContainer.DressUpPickTray.scale = 0.3;
    
            this.NodesContainer.DressUpText.scale = 0.33;
            this.NodesContainer.DressUpText.x = 0;
            this.NodesContainer.DressUpText.y = -200;
    
            this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
            this.NodesContainer.DressUp_BtnInstall.x = 0;
            this.NodesContainer.DressUp_BtnInstall.y = -245;
    
            this.NodesContainer.Btn_Submit.scale = 0.35;
            this.NodesContainer.Btn_Submit.x = 100;
            this.NodesContainer.Btn_Submit.y = -10;
        } else {

            Constants.Responsive.calculatedX = -80;
            Constants.Responsive.calculatedY = -130;
            Constants.Responsive.calculatedScale = 0.9;

            this.NodesContainer.OpenScene.scale = 0.9;

            this.NodesContainer.Doll.x = -0;
            this.NodesContainer.Doll.y = 25;
            this.NodesContainer.Doll.scale = 0.8;
            this.NodesContainer.DollPoint.node.scale = 0.8;
            this.NodesContainer.DollPoint.node.y = -90;
    
            this.NodesContainer.Opponent.x = 80
            this.NodesContainer.Opponent.y = -30;
            this.NodesContainer.Opponent.scale = 0.4;
    
            this.NodesContainer.DressUpBg_1.active = true;
            this.NodesContainer.DressUpBg_1.scale = 0.4;
            this.NodesContainer.DressUpBg_2.active = false;
    
            this.NodesContainer.DressUpPickTray.x = 0;
            this.NodesContainer.DressUpPickTray.y = -29.6;
            this.NodesContainer.DressUpPickTray.scale = 0.3;
    
            this.NodesContainer.DressUpText.scale = 0.33;
            this.NodesContainer.DressUpText.x = 0;
            this.NodesContainer.DressUpText.y = -170;
    
            this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
            this.NodesContainer.DressUp_BtnInstall.x = 0;
            this.NodesContainer.DressUp_BtnInstall.y = -210;
    
            this.NodesContainer.Btn_Submit.scale = 0.35;
            this.NodesContainer.Btn_Submit.x = 110;
            this.NodesContainer.Btn_Submit.y = 20;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
