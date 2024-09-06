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

    // Node
    @property(cc.Node)
    Opening: cc.Node = null;
    @property(cc.Node)
    MainContent: cc.Node = null;

    @property(cc.Label)
    ageLabel: cc.Label = null;
    @property(cc.Node)
    age54: cc.Node = null;
    @property(cc.Node)
    age18: cc.Node = null;


    @property(cc.Node)
    iloveyou: cc.Node = null;
    @property(cc.Node)
    boy1: cc.Node = null;
    @property(cc.Node)
    boy2: cc.Node = null;
    @property(cc.Node)
    girl1: cc.Node = null;
    @property(cc.Node)
    girl2: cc.Node = null;


    @property(cc.ParticleSystem)
    particle: cc.ParticleSystem = null;

    @property(cc.Node)
    CTA: cc.Node = null;


    // state
    isDoneEraser: boolean = false;
    soundTrack: cc.AudioSource = null;


    protected onLoad(): void {

    }


    protected start(): void {
        // !Constants.ironSource.isEndGame && this.AudioManager.playSound(Constants.SoundTrack.bgSound);

        // use this if build ironsource
        Constants.isRestart && !Constants.ironSource.isEndGame && this.AudioManager.playSound(Constants.SoundTrack.bgSound);

        this.CTA.active = false;
        this.soundTrack = this.AudioManager.SheepSound1;
        this.ageLabel.string = String(Constants.age);
        cc.director.preloadScene("restartGame");
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


    public isDeleteOverHalf(): boolean {
        let result: boolean;

        console.log(this.Scratchable.getComponent("Scratchable").progress);

        this.Scratchable.getComponent("Scratchable").progress >= 0.4 &&
            this.Scratchable.getComponent("Scratchable").progress <= 0.6
            ? result = true
            : result = false;

        return result;
    }


    public RestartGame(): void {
        cc.director.loadScene("restartGame")
    }


    increaseAge(fromValue, toValue) {
        Constants.age = fromValue;
        cc.tween(Constants)
            .to(1, { age: toValue }, {
                progress: (start, end, current, t) => {
                    let newValue = Math.floor(cc.misc.lerp(start, end, t));
                    this.ageLabel.string = newValue.toString();
                    return newValue;
                }
            })
            .start();
    }


    public winGame(): void {
        this.AudioManager.playSound(Constants.SoundTrack.successSound);
        this.Scratchable.getChildByName("Mask").active = false;

        this.iloveyou.active = true;
        this.boy1.active = false;
        this.boy2.active = true;
        this.girl1.active = false;
        this.girl2.active = true;

        this.isDoneEraser = true;
        // this.age18.active = true;
        // this.age54.active = false;
        this.particle.resetSystem();

        this.scheduleOnce(() => {
            this.CTA.active = true;
            this.CTA.getComponent(cc.Animation).play("CTA_Anim");
        }, 2)
    }


    private checkDoneEraser(): void {

        if (this.Scratchable.getComponent("Scratchable").isWin) {
            console.log("lose");
        }
    }


    protected update(dt: number): void {
        // !this.isDoneEraser && this.checkDoneEraser();
        // this.handleMuteSoundIronSource();
    }
}
