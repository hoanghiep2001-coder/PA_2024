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

        this.NodesContainer.PickTray.scale = 0.4;
        this.NodesContainer.PickTray.setPosition(170, 0);
        this.NodesContainer.PickTray.angle = 90;

        for (let index = 0; index < this.NodesContainer.frameItems.length; index++) {
            const item = this.NodesContainer.frameItems[index];
            item.angle = -90;
        }

        this.NodesContainer.Doll.x = -200
        this.NodesContainer.Doll.y = -150;
        this.NodesContainer.Doll.scale = 1.15;

        this.NodesContainer.Btn_Submit.scale = 0.5;
        this.NodesContainer.Btn_Submit.x = 120;
        this.NodesContainer.Btn_Submit.y = -150;

        for (let index = 0; index < this.GamePlay.tweenAnims.length; index++) {
            const tweenAnim = this.GamePlay.tweenAnims[index];
            tweenAnim.stop();
        }
        this.GamePlay.activeBlinkAnimForBtnSubmit();
    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.NodesContainer.PickTray.scale = 0.4;
        this.NodesContainer.PickTray.setPosition(130, 0);
        this.NodesContainer.PickTray.angle = 90;

        for (let index = 0; index < this.NodesContainer.frameItems.length; index++) {
            const item = this.NodesContainer.frameItems[index];
            item.angle = -90;
        }

        this.NodesContainer.Doll.x = -180
        this.NodesContainer.Doll.y = -150;
        this.NodesContainer.Doll.scale = 1.15;

        this.NodesContainer.Btn_Submit.scale = 0.5;
        this.NodesContainer.Btn_Submit.x = 80;
        this.NodesContainer.Btn_Submit.y = -150;

        for (let index = 0; index < this.GamePlay.tweenAnims.length; index++) {
            const tweenAnim = this.GamePlay.tweenAnims[index];
            tweenAnim.stop();
        }
        this.GamePlay.activeBlinkAnimForBtnSubmit();
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

        this.NodesContainer.PickTray.scale = 0.3;
        this.NodesContainer.PickTray.setPosition(0, -130);
        this.NodesContainer.PickTray.angle = 0;

        for (let index = 0; index < this.NodesContainer.frameItems.length; index++) {
            const item = this.NodesContainer.frameItems[index];
            item.angle = 0;
        }

        this.NodesContainer.Doll.x = 0
        this.NodesContainer.Doll.y = -85;
        this.NodesContainer.Doll.scale = 1;

        this.NodesContainer.Btn_Submit.scale = 0.35;
        this.NodesContainer.Btn_Submit.x = 100;
        this.NodesContainer.Btn_Submit.y = -130;

        for (let index = 0; index < this.GamePlay.tweenAnims.length; index++) {
            const tweenAnim = this.GamePlay.tweenAnims[index];
            tweenAnim.stop();
        }
        this.GamePlay.activeBlinkAnimForBtnSubmit();

    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;

        this.NodesContainer.PickTray.scale = 0.3;
        this.NodesContainer.PickTray.setPosition(0, -130);
        this.NodesContainer.PickTray.angle = 0;

        for (let index = 0; index < this.NodesContainer.frameItems.length; index++) {
            const item = this.NodesContainer.frameItems[index];
            item.angle = 0;
        }

        this.NodesContainer.Doll.x = 0
        this.NodesContainer.Doll.y = -85;
        this.NodesContainer.Doll.scale = 1;

        this.NodesContainer.Btn_Submit.scale = 0.35;
        this.NodesContainer.Btn_Submit.x = 100;
        this.NodesContainer.Btn_Submit.y = -130;

        for (let index = 0; index < this.GamePlay.tweenAnims.length; index++) {
            const tweenAnim = this.GamePlay.tweenAnims[index];
            tweenAnim.stop();
        }
        this.GamePlay.activeBlinkAnimForBtnSubmit();

        // if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
        //     // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
        //     //     // mobile mode applovin
        //     //     return;
        //     // }

        //     // Iphone 6 / 6 Plus / 7 / 7 Plus   

        // } else {

        // }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
