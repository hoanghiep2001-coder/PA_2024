

import { _decorator, Camera, Component, CurveRange, director, enumerableProps, EventMouse, game, log, Node, ParticleSystem, ParticleSystemComponent, Scheduler, sys, systemEvent, SystemEvent, tween, UITransform, Vec2, Vec3, view } from 'cc';
import Global from './Global';
const { ccclass, property } = _decorator;

@ccclass('Responsive')
export default class Responsive extends Component {

    // Component

    @property(Camera)
    cam: Camera = null!;

    @property(Node)
    bgVertical: Node = null!;

    @property(Node)
    bgHorizontal: Node = null!;

    @property(Node)
    text: Node = null!;

    @property(Node)
    text1: Node = null!;

    @property(Node)
    text2: Node = null!;

    @property(UITransform)
    guideHand: UITransform = null!;



    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";

    protected onLoad(): void {
        this.handleRotate();
    }

    protected start(): void {
    }


    private handleRotate(): void {

        if (view.getFrameSize().width > view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
            this.guideHand.setContentSize(1920, 1080);
            this.guideHand.node.setPosition(new Vec3(0, 0, 0));
            this.guideHand.node.setScale(new Vec3(1.3, 1.3, 1.3));
        } else {
            this.guideHand.setContentSize(1080, 1920);
            this.guideHand.node.setPosition(new Vec3(0, 0, 0));
            this.guideHand.node.setScale(new Vec3(1, 1, 1));
            this.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        this.text.setScale(new Vec3(2, 2, 2));
        this.text1.setScale(new Vec3(2, 2, 2));
        this.text2.setScale(new Vec3(2, 2, 2));
        Global.fovEndgame = 40;
        this.bgHorizontal.active = true;
        this.bgVertical.active = false;
        Global.fov = 45;
        if (view.getFrameSize().height / view.getFrameSize().width < 0.65) {
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

    }
    //       this.logo


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;

    }


    private setVertical(): void {
        this.text.setScale(new Vec3(1.3, 1.3, 1.3));
        this.text1.setScale(new Vec3(1.3, 1.3, 1.3));
        this.text2.setScale(new Vec3(1.3, 1.3, 1.3));
        this.bgHorizontal.active = false;
        this.bgVertical.active = true;
        Global.fov = 70;
        Global.fovEndgame = 55;

        if (view.getFrameSize().width / view.getFrameSize().height < 0.5) {
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


    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        if (view.getFrameSize().width / view.getFrameSize().height < 0.7) {

            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {
            // Ipad

        }

    }


    private unActiveLogo(): void {

    }


    protected update(dt: number): void {
        this.handleRotate();
        if (Global.doneIntro && !Global.endGame) {
            this.cam.fov = Global.fov;
        } if (Global.endGame) {
            this.cam.fov = Global.fovEndgame;
        }
    }

}


