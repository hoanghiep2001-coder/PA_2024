import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodesController from "./NodesController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Script
    @property(NodesController)
    NodesController: NodesController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;


    // Component


    // Node


    // State
    curentPosition: cc.Vec2 = null;
    currentHint: cc.Node = null;
    currentPencil: cc.Graphics = null;
    curerntPoint: cc.Node = null;


    protected onLoad(): void {

    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        Constants.isCanTouch = true;
    }


    private handleGamePlay(): void {
        this.registerEvent();
    }


    private registerEvent(): void {

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


    private handleMuteSoundIronSource(): void {
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



    protected update(dt: number): void {
        // this.handleMuteSoundIronSource();
    }
}
