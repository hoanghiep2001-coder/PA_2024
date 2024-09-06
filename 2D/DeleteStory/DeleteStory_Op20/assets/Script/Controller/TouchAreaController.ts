import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchAreaController extends cc.Component {
    @property(GamePlay)
    GamePlay: GamePlay = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;

    @property(cc.Node)
    hideMask: cc.Node = null;

    @property(cc.Node)
    Text_HelpHer: cc.Node = null;
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Node)
    Point: cc.Node = null;

    @property(cc.Node)
    CTA_Btn: cc.Node = null;
    @property(cc.Node)
    CTA_Overlay: cc.Node = null;

    // state
    isTouch: boolean = false;
    isActiveCTA: boolean = false;


    protected start(): void {
        this.Point.active = false;

        this.registerEvent();

        setInterval(() => {
            if(this.isTouch || Constants.isDoneEraser) {
                return
            };

            this.hand.opacity = 0;
            this.hand.active = true;
            this.Point.active = true;
            this.Point.getComponent(cc.Animation).play();
        }, 3000)
    }


    private registerEvent(): void {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

         // mtg && aplovin
        // this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private touchStart(e: cc.Touch): void {
        if(Constants.ironSource.isEndGame) return;

        this.GamePlay.handleIronSourcePlaySound();
        
        this.isTouch = true;
        this.hand.active = false;
        this.Text_HelpHer.active = false;
        this.Point.active = true;
        this.Point.getComponent(cc.Animation).stop();
        !Constants.isDoneEraser && this.AudioManager.playSound(Constants.SoundTrack.drawSound);

        let pos = e.getLocation();
        let convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        Constants.touchPoints.push(convertedPos);
    }


    private touchMove(e: cc.Touch): void {
        let pos = e.getLocation();
        this.Point.getComponent(cc.Animation).stop();
        let convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);

        Constants.touchPoints.push(convertedPos);
    }


    private checkStraightLine(touchPoints: cc.Vec2[]): boolean {
        if (touchPoints.length < 3) {
            return false;
        }

        let A = touchPoints[touchPoints.length - 3];
        let B = touchPoints[touchPoints.length - 2];
        let C = touchPoints[touchPoints.length - 1];

        return (B.x - A.x) * (C.y - A.y) === (B.y - A.y) * (C.x - A.x);
    }


    private touchEnd(): void {
        this.isTouch = false;
        this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
    }


    public unActivePoint(): void {
        this.Point.active = false;
    }


    offEvent(): void {
        this.isActiveCTA = false;
        this.hideMask.off(cc.Node.EventType.TOUCH_START);
        this.hideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.hideMask.off(cc.Node.EventType.TOUCH_END);
        this.hideMask.off(cc.Node.EventType.TOUCH_CANCEL);
    }


    protected update(dt: number): void {
        this.isActiveCTA && this.offEvent();
        this.GamePlay.handleMuteSoundIronSource();
    }
}
