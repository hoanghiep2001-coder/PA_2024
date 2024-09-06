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

        this.NodesContainer.BG.scale = 0.6;

        this.NodesContainer.Logo.scale = 1.1;
        let logoWidget = this.NodesContainer.Logo.getComponent(cc.Widget);
        logoWidget.top = 80;

        this.NodesContainer.Icon.scale = 1.25;
        let IconWidget = this.NodesContainer.Icon.getComponent(cc.Widget);
        IconWidget.top = 60;
        IconWidget.left = 60;

        this.NodesContainer.BtnDownload.scale = 1.25;
        let DownloadWidget = this.NodesContainer.BtnDownload.getComponent(cc.Widget);
        DownloadWidget.bottom = 40;
        DownloadWidget.right = 90;
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.NodesContainer.BG.scale = 0.5;

        this.NodesContainer.Logo.scale = 1.1;
        let logoWidget = this.NodesContainer.Logo.getComponent(cc.Widget);
        logoWidget.top = 80;

        this.NodesContainer.Icon.scale = 1.25;
        let IconWidget = this.NodesContainer.Icon.getComponent(cc.Widget);
        IconWidget.top = 60;
        IconWidget.left = 60;

        this.NodesContainer.BtnDownload.scale = 1.25;
        let DownloadWidget = this.NodesContainer.BtnDownload.getComponent(cc.Widget);
        DownloadWidget.bottom = 40;
        DownloadWidget.right = 90;
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

        this.NodesContainer.BG.scale = 0.5;

        this.NodesContainer.Logo.scale = 0.95;
        let logoWidget = this.NodesContainer.Logo.getComponent(cc.Widget);
        logoWidget.top = 80;

        this.NodesContainer.Icon.scale = 0.7;
        let IconWidget = this.NodesContainer.Icon.getComponent(cc.Widget);
        IconWidget.top = 25;
        IconWidget.left = 25;

        this.NodesContainer.BtnDownload.scale = 0.9;
        let DownloadWidget = this.NodesContainer.BtnDownload.getComponent(cc.Widget);
        DownloadWidget.bottom = 25;
        DownloadWidget.right = 60;
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.NodesContainer.BG.scale = 0.5;

        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodesContainer.Logo.scale = 1;
            let logoWidget = this.NodesContainer.Logo.getComponent(cc.Widget);
            logoWidget.top = 100;

            this.NodesContainer.Icon.scale = 1;
            let IconWidget = this.NodesContainer.Icon.getComponent(cc.Widget);
            IconWidget.top = 40;
            IconWidget.left = 40;

            this.NodesContainer.BtnDownload.scale = 1;
            let DownloadWidget = this.NodesContainer.BtnDownload.getComponent(cc.Widget);
            DownloadWidget.bottom = 25;
            DownloadWidget.right = 60;

        } else {

            let logoWidget = this.NodesContainer.Logo.getComponent(cc.Widget);
            logoWidget.top = 100;

            this.NodesContainer.Icon.scale = 1;
            let IconWidget = this.NodesContainer.Icon.getComponent(cc.Widget);
            IconWidget.top = 40;
            IconWidget.left = 40;

            this.NodesContainer.BtnDownload.scale = 1;
            let DownloadWidget = this.NodesContainer.BtnDownload.getComponent(cc.Widget);
            DownloadWidget.bottom = 25;
            DownloadWidget.right = 60;

        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
