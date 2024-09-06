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
    star: cc.Node = null;
    @property([cc.Node])
    sheeps: cc.Node[] = [];
    @property(cc.Node)
    CTA: cc.Node = null;


    // state
    isDoneEraser: boolean = false;
    soundTrack: cc.AudioSource = null;
    age: number = 54;
    ageIncrease: number = 58;


    protected onLoad(): void {

    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.CTA.active = false;
        this.soundTrack = this.AudioManager.SheepSound1;
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


    increaseAge(fromValue, toValue) {
        this.age = fromValue;
        cc.tween(this)
            .to(1, { age: toValue }, {
                progress: (start, end, current, t) => {
                    // Cập nhật giá trị vàng trên giao diện người dùng
                    let newValue = Math.floor(cc.misc.lerp(start, end, t));
                    this.ageLabel.string = newValue.toString();
                    return newValue;
                }
            })
            .start();
    }


    public checkCollideSheeps(point: cc.Node): void {
        let pointBdx = point.getBoundingBox();

        if(this.soundTrack.isPlaying) return;

        // this.soundTrack = this.AudioManager.SheepSound1;

        for (let index = 0; index < this.sheeps.length; index++) {
            const sheep = this.sheeps[index];
            const sheepBdx = sheep.getBoundingBox();

            if (pointBdx.intersects(sheepBdx)) {
                if(index !== 0) {
                    this.ageLabel.node.color = cc.Color.RED;
                    this.ageIncrease += 2;
                    this.increaseAge(this.age, this.ageIncrease);
                } else {
                    this.ageLabel.node.color = cc.Color.GREEN;
                    this.increaseAge(this.age, 18);
                }

                let random = cc.math.randomRangeInt(0, 2);
                switch (random) {
                    case 1:
                        this.soundTrack = this.AudioManager.SheepSound1;
                        this.AudioManager.playSound(Constants.SoundTrack.SheepSound1);
                        break;
                    case 0:
                        this.soundTrack = this.AudioManager.SheepSound2;
                        this.AudioManager.playSound(Constants.SoundTrack.SheepSound2);
                        break;
                    default:
                        break;
                }
            }
        }
    }


    private checkDoneEraser(): void {
        if (this.Scratchable.getComponent("Scratchable").isWin) {
            this.AudioManager.playSound(Constants.SoundTrack.successSound);
            this.Scratchable.active = false;
            Constants.isDoneEraser = true;
            this.isDoneEraser = true;
            this.increaseAge(this.age, 18);
            this.ageLabel.node.color = cc.Color.GREEN;
            // this.age18.active = true;
            // this.age54.active = false;
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
