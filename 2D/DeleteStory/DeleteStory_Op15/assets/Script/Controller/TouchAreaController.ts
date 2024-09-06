import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

const {ccclass, property} = cc._decorator;

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
    hand: cc.Node = null;
    @property(cc.Node)
    Point: cc.Node = null;

    @property(cc.Node)
    CTA_Btn: cc.Node = null;

    // state
    isTouch: boolean = false;
    isActiveCTA: boolean = false;

    protected start(): void {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private touchStart(): void {
        this.isTouch = true;
        this.hand.active = false;
        this.Point.getComponent(cc.Animation).stop();
        !Constants.isDoneEraser && this.AudioManager.playSound(Constants.SoundTrack.drawSound);

        this.GamePlay.handleIronSourcePlaySound();
        // mtg && aplovin
        // this.isActiveCTA && this.GameController.installHandle();
    }


    private touchMove(e: cc.Touch): void {
        let pos = e.getLocation();
        let convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
    }


    private touchEnd(): void {
        this.isTouch = false;
        this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
    }


    private unActivePoint(): void {
        this.isActiveCTA = true;
        this.Point.active = false;
        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    protected update(dt: number): void {
        !this.isActiveCTA && Constants.isDoneEraser && this.unActivePoint();
        this.GamePlay.handleMuteSoundIronSource();
    }
}
