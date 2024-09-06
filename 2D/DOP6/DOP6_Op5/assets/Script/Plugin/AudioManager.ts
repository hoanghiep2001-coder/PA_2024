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
    clickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    LoseSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    femaleLaughSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    passSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "passSound":
                    this.passSound.play();
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
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "successSound":
                    this.successSound.play();
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
            case "passSound":
                this.passSound.stop();
                break;
            case "eraserSound":
                this.eraserSound.stop();
                break;
            case "LoseSound":
                this.LoseSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "successSound":
                this.successSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.passSound.stop();
        this.bgSound.stop();
        this.femaleLaughSound.stop();
        this.eraserSound.stop();
        this.successSound.stop();
        this.clickSound.stop();
        this.LoseSound.stop();
    }
}
