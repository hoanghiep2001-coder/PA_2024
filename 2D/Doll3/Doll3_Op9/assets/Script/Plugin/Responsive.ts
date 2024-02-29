import GamePlay from "../Controller/GamePlay";
import NodesContainer from "../Controller/NodesContainer";
import { Constants } from "../Data/constants";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {
    @property(NodesContainer)
    NodesContainer: NodesContainer = null;
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

        this.NodesContainer.logo.active = true;
        this.NodesContainer.icon.active = true;

        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;

        this.NodesContainer.background_2_hor.scale = 0.55;
        this.NodesContainer.background_1.scale = 0.45;
        this.NodesContainer.background_1.y = 95;
        this.NodesContainer.background_3.scale = 0.55;
        this.NodesContainer.doll_scene3.x = -115;
        this.NodesContainer.doll_scene3.scale = 0.35;
        this.NodesContainer.adultery.scale = 0.65;

        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -10;
        this.NodesContainer.CTA_btn.y = -160;

        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 50;
        this.NodesContainer.items[0].scale = 0.9;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = -90;
        this.NodesContainer.items[1].scale = 0.9;
        this.NodesContainer.items[2].x = 230;
        this.NodesContainer.items[2].y = -90;
        this.NodesContainer.items[2].scale = 0.9;
        this.NodesContainer.items[3].x = 230;
        this.NodesContainer.items[3].y = 50;
        this.NodesContainer.items[3].scale = 0.9;
    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;

        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.45;

        this.NodesContainer.background_1.scale = 0.3;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.38;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.adultery.scale = 0.65;

        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = 0;
        this.NodesContainer.CTA_btn.y = -160;

        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
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

        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;

        this.NodesContainer.background_2_hor.active = false;
        this.NodesContainer.background_2_ver.active = true;
        this.NodesContainer.background_2_ver.scale = 0.4;

        this.NodesContainer.background_1.scale = 0.4;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.45;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.adultery.scale = 0.65;

        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = -30;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -20;
        this.NodesContainer.CTA_btn.y = -160;

        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;

        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;

        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;

        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodesContainer.background_2_hor.active = false;
            this.NodesContainer.background_2_ver.active = true;
            this.NodesContainer.background_2_ver.scale = 0.3;

            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 0;
            this.NodesContainer.background_3.scale = 0.3;

            this.NodesContainer.adultery.scale = 0.55;

            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 0;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -160;

        } else {
            this.NodesContainer.background_2_hor.active = true;
            this.NodesContainer.background_2_ver.active = false;
            this.NodesContainer.background_2_hor.scale = 0.45;
            // this.NodesContainer.background_2_ver.scale = 0.3;
    
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 20;
            this.NodesContainer.background_3.scale = 0.38;
    
            this.NodesContainer.adultery.scale = 0.65;
    
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 20;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -160;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
