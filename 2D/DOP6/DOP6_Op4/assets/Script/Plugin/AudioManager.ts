import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    eraserSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    successSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    moveSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    fireworksSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    clickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    SheepSound1: cc.AudioSource = null;
    @property(cc.AudioSource)
    SheepSound2: cc.AudioSource = null;
    @property(cc.AudioSource)
    LoseSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    femaleLaughSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    fightSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "fightSound":
                    this.fightSound.play();
                    break;
                case "femaleLaughSound":
                    this.femaleLaughSound.play();
                    break;
                case "eraserSound":
                    this.eraserSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "SheepSound1":
                    this.SheepSound1.play();
                    break;
                case "SheepSound2":
                    this.SheepSound2.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "successSound":
                    this.successSound.play();
                    break;
                case "moveSound":
                    this.moveSound.play();
                    break;
                case "fireworksSound":
                    this.fireworksSound.play();
                    break;
                default:
                    break;
            }
        }
    }

    public stopSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "femaleLaughSound":
                this.femaleLaughSound.stop();
                break;
            case "fightSound":
                this.fightSound.stop();
                break;
            case "eraserSound":
                this.eraserSound.stop();
                break;
            case "LoseSound":
                this.LoseSound.stop();
                break;
            case "SheepSound1":
                this.SheepSound1.stop();
                break;
            case "SheepSound2":
                this.SheepSound2.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "successSound":
                this.successSound.stop();
                break;
            case "moveSound":
                this.moveSound.stop();
                break;
            case "fireworksSound":
                this.fireworksSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.fightSound.stop();
        this.bgSound.stop();
        this.femaleLaughSound.stop();
        this.eraserSound.stop();
        this.successSound.stop();
        this.moveSound.stop();
        this.fireworksSound.stop();
        this.clickSound.stop();
        this.SheepSound1.stop();
        this.SheepSound2.stop();
        this.LoseSound.stop();
    }
}
