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
            this.isRotate = true;
            this.setHorizontal();
        } else {
            this.isRotate = false;
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

        this.NodesContainer.Doll.x = 200;
        this.NodesContainer.Doll.y = 0;
        this.NodesContainer.Doll.scale = 1.35;
        this.NodesContainer.Book.x = -150;
        this.NodesContainer.Book.y = 0;
        this.NodesContainer.Book.scale = 0.4;
        this.NodesContainer.Hand.y = -350;
        this.NodesContainer.Hand.scale = 1;

    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        
        this.NodesContainer.Doll.x = 200;
        this.NodesContainer.Doll.y = 0;
        this.NodesContainer.Doll.scale = 1.35;
        this.NodesContainer.Book.x = -120;
        this.NodesContainer.Book.y = 0;
        this.NodesContainer.Book.scale = 0.33;
        this.NodesContainer.Hand.y = -350;
        this.NodesContainer.Hand.scale = 1;

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

        this.NodesContainer.Doll.x = 0;
        this.NodesContainer.Doll.y = 120;
        this.NodesContainer.Doll.scale = 1.05;
        this.NodesContainer.Book.x = 0;
        this.NodesContainer.Book.y = -185;
        this.NodesContainer.Book.scale = 0.3;
        this.NodesContainer.Hand.y = -350;
        this.NodesContainer.Hand.scale = 1;

    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;

        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
                // mobile mode applovin

                this.NodesContainer.Doll.x = 0;
                this.NodesContainer.Doll.y = 105;
                this.NodesContainer.Doll.scale = 0.95;
                this.NodesContainer.Book.x = 0;
                this.NodesContainer.Book.y = -150;
                this.NodesContainer.Book.scale = 0.25;
                this.NodesContainer.Hand.y = -350;
                this.NodesContainer.Hand.scale = 1;
                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodesContainer.Doll.x = 0;
            this.NodesContainer.Doll.y = 120;
            this.NodesContainer.Doll.scale = 1.03;
            this.NodesContainer.Book.x = 0;
            this.NodesContainer.Book.y = -165;
            this.NodesContainer.Book.scale = 0.3;
            this.NodesContainer.Hand.y = -350;
            this.NodesContainer.Hand.scale = 1;
        } else {
            this.NodesContainer.Doll.x = 0;
            this.NodesContainer.Doll.y = 100;
            this.NodesContainer.Doll.scale = 0.9;
            this.NodesContainer.Book.x = 0;
            this.NodesContainer.Book.y = -140;
            this.NodesContainer.Book.scale = 0.23;
            this.NodesContainer.Hand.y = -350;
            this.NodesContainer.Hand.scale = 1;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
