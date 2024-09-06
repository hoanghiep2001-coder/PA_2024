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

        Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");

        this.NodeContainer.Text_Jimin.scale = 0.35;
        this.NodeContainer.Text_Jimin.x = 0;
        this.NodeContainer.Text_Jimin.y = 200;
        this.NodeContainer.Text_Drag.x = 0;
        this.NodeContainer.Text_Drag.y = -210;
        this.NodeContainer.tweezers.x = -310;

        this.NodeContainer.Tweezers_InteractPoint1.x = -26 + 310;
        this.NodeContainer.Tweezers_InteractPoint2.x = 34 + 310;

        Constants.Responsive.calculatedX = -310;
    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");

        this.NodeContainer.Text_Jimin.x = 0;
        this.NodeContainer.Text_Jimin.y = 200;
        this.NodeContainer.Text_Drag.x = 0;
        this.NodeContainer.Text_Drag.y = -210;
        this.NodeContainer.tweezers.x = -310;

        this.NodeContainer.Tweezers_InteractPoint1.x = -26 + 310;
        this.NodeContainer.Tweezers_InteractPoint2.x = 34 + 310;

        Constants.Responsive.calculatedX = -310;

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

        Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");

        this.NodeContainer.Text_Jimin.scale = 0.28;
        this.NodeContainer.Text_Jimin.x = 0;
        this.NodeContainer.Text_Jimin.y = 245;
        this.NodeContainer.Text_Drag.x = 0;
        this.NodeContainer.Text_Drag.y = -250;
        this.NodeContainer.tweezers.x = 0;

        this.NodeContainer.Tweezers_InteractPoint1.x = -26;
        this.NodeContainer.Tweezers_InteractPoint2.x = 34;

        Constants.Responsive.calculatedX = 0;
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        Constants.Responsive.calculatedX = 0;
        Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");

        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin

                this.NodeContainer.Text_Jimin.scale = 0.28;
                this.NodeContainer.Text_Jimin.x = 0;
                this.NodeContainer.Text_Jimin.y = 235;
                this.NodeContainer.Text_Drag.x = 0;
                this.NodeContainer.Text_Drag.y = -220;
                this.NodeContainer.tweezers.x = 0;

                this.NodeContainer.Tweezers_InteractPoint1.x = -26;
                this.NodeContainer.Tweezers_InteractPoint2.x = 34;
                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Text_Jimin.scale = 0.28;
            this.NodeContainer.Text_Jimin.x = 0;
            this.NodeContainer.Text_Jimin.y = 245;
            this.NodeContainer.Text_Drag.x = 0;
            this.NodeContainer.Text_Drag.y = -220;
            this.NodeContainer.tweezers.x = 0;

            this.NodeContainer.Tweezers_InteractPoint1.x = -26;
            this.NodeContainer.Tweezers_InteractPoint2.x = 34;
        } else {
            this.NodeContainer.Text_Jimin.x = 0;
            this.NodeContainer.Text_Jimin.y = 200;
            this.NodeContainer.Text_Drag.x = 0;
            this.NodeContainer.Text_Drag.y = -210;
            this.NodeContainer.tweezers.x = 0;

            this.NodeContainer.Tweezers_InteractPoint1.x = -26;
            this.NodeContainer.Tweezers_InteractPoint2.x = 34;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
