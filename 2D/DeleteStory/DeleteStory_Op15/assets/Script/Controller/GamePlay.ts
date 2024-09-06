import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Script
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;


    // Component
    @property(cc.Node)
    Scratchable: cc.Node = null;
    @property(cc.Node)
    boy1: cc.Node = null;
    @property(cc.Node)
    boy2: cc.Node = null;
    @property(cc.Node)
    star: cc.Node = null;
    @property(cc.Node)
    CTA: cc.Node = null;


    // state
    isDoneEraser: boolean = false;


    protected onLoad(): void {

    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.CTA.active = false;
    }


    private handleGamePlay(): void {

    }


    private registerEvent(): void {
        // this.Bg_HideMask.on(cc.Node.EventType.TOUCH_START, this.handleBgTouchStart, this);
        // this.Bg_HideMask.on(cc.Node.EventType.TOUCH_MOVE, this.handleBgTouchMove, this);
        // this.Bg_HideMask.on(cc.Node.EventType.TOUCH_END, this.handleBgTouchEnd, this);
        // this.Bg_HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.handleBgTouchEnd, this);
    }


    private handleBgTouchStart(e: cc.Touch): void {
        if (!Constants.isCanTouch) {
            return;
        }


        if (Constants.currentLv === 3) {
            this.GameController.installHandle();
            return;
        }
    }


    private handleBgTouchMove(e: cc.Touch): void {
        if (!Constants.isCanTouch) {
            return;
        }
    }


    private handleBgTouchEnd(): void {
        if (!Constants.isCanTouch) {
            return;
        }
    }


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    public handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(Constants.SoundTrack.bgSound);
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    private checkDoneEraser(): void {
        if(this.Scratchable.getComponent("Scratchable").isWin) {
            this.AudioManager.playSound(Constants.SoundTrack.successSound);
            this.Scratchable.active = false;
            Constants.isDoneEraser = true;
            this.isDoneEraser = true;
            this.boy1.active = false;
            this.boy2.active = true;
            this.star.getComponent(cc.Animation).play();

            this.scheduleOnce(() => {
                this.CTA.active = true;
                this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            }, 2)
        }
    }


    protected update(dt: number): void {
        !this.isDoneEraser && this.checkDoneEraser();
        // this.handleMuteSoundIronSource();
    }
}
