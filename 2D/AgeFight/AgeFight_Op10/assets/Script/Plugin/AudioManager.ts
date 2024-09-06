import { Constants } from "../Data/constants";
import Singleton from "./Singleton";


const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    clickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    buySound: cc.AudioSource = null;
    @property(cc.AudioSource)
    coinSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    failSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    winSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    Lv2_Kinife: cc.AudioSource = null;
    @property(cc.AudioSource)
    Lv2_Gun: cc.AudioSource = null;
    @property(cc.AudioSource)
    Lv2_Tank: cc.AudioSource = null;
    @property(cc.AudioSource)
    Bg_Attack: cc.AudioSource = null;


    protected start(): void {
  
    }


    public playSound(soundName: string): void {
        this.normalNetwork(soundName);
    }


    private normalNetwork(soundName): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                    case "Bg_Attack":
                        this.Bg_Attack.play();
                        break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "buySound":
                    this.buySound.play();
                    break;
                case "coinSound":
                    this.coinSound.play();
                    break;
                case "failSound":
                    this.failSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "Lv2_Kinife":
                    this.Lv2_Kinife.play();
                    break;
                case "Lv2_Gun":
                    this.Lv2_Gun.play();
                    break;
                case "Lv2_Tank":
                    this.Lv2_Tank.play();
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
                case "Bg_Attack":
                    this.Bg_Attack.stop();
                    break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "buySound":
                this.buySound.stop();
                break;
            case "coinSound":
                this.coinSound.stop();
                break;
            case "failSound":
                this.failSound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "Lv2_Kinife":
                this.Lv2_Kinife.stop();
                break;
            case "Lv2_Gun":
                this.Lv2_Gun.stop();
                break;
            case "Lv2_Tank":
                this.Lv2_Tank.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.Lv2_Kinife.stop();
        this.Lv2_Gun.stop();
        this.Lv2_Tank.stop();
        this.bgSound.stop();
        this.clickSound.stop();
        this.buySound.stop();
        this.coinSound.stop();
        this.Bg_Attack.stop();
    }
}
