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
    btn_Yes: cc.Node = null;
    @property(cc.Node)
    btn_No: cc.Node = null;

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
        this.btn_Yes.on(cc.Node.EventType.TOUCH_START, this.btnYesTouch, this);
        this.btn_No.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        if(!this.GamePlay.Opening.active) {
            this.registerEvent();
        }
    }


    private registerEvent(): void {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private btnYesTouch(): void {
        this.btn_Yes.getChildByName("icon").active = true;
        this.AudioManager.playSound(Constants.SoundTrack.clickSound);
        this.GamePlay.Opening.active = false;
        this.GamePlay.MainContent.active = true;

        this.GamePlay.handleIronSourcePlaySound();
        this.registerEvent();
    }


    private touchStart(e: cc.Touch): void {

        Constants.life <= 0 && this.GameController.installHandle();

        if(Constants.ironSource.isEndGame) return;

        this.GamePlay.handleIronSourcePlaySound();
        
        this.isTouch = true;
        this.hand.active = false;
        this.Point.getComponent(cc.Animation).stop();
        !Constants.isDoneEraser && this.AudioManager.playSound(Constants.SoundTrack.drawSound);

        let pos = e.getLocation();
        let convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        Constants.touchPoints.push(convertedPos);

        // mtg && aplovin
        // this.isActiveCTA && this.GameController.installHandle();
    }


    private touchMove(e: cc.Touch): void {
        let pos = e.getLocation();
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
        this.unActivePoint();

        // win
        if (this.GamePlay.isDeleteOverHalf() && this.checkStraightLine(Constants.touchPoints)) {
            this.isActiveCTA = true;
            Constants.isDoneEraser = true;
            this.GamePlay.winGame();
            this.GamePlay.ageLabel.node.color = cc.Color.GREEN;
            this.GamePlay.increaseAge(Constants.age, 18);
            this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }

        // lose
        if (!Constants.isDoneEraser) {
            Constants.isRestart = true;
            Constants.life -= 1;
            Constants.ageIncrease += 3;
            this.GamePlay.ageLabel.node.color = cc.Color.RED;
            this.GamePlay.increaseAge(Constants.age, Constants.ageIncrease);
            this.AudioManager.playSound(Constants.SoundTrack.LoseSound);
            this.scheduleOnce(() => {
                this.GamePlay.RestartGame();
            }, 1.5)
        }
    }


    private unActivePoint(): void {
        this.Point.active = false;
    }

    protected update(dt: number): void {
        this.GamePlay.handleMuteSoundIronSource();
    }
}
