import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ArmyLv1HitSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ArmyLv2HitSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ArmyLv3HitSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    earthQuakeSound: cc.AudioSource = null;
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
    heliSound: cc.AudioSource = null;

    public playSound(soundName: string): void {
        // ironsource
        // this.ironSourceNetwork(soundName);
        this.normalNetwork(soundName);
    }

    private ironSourceNetwork(soundName): void {
        if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
    }

    private normalNetwork(soundName): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "earthQuakeSound":
                    this.earthQuakeSound.play();
                    break;
                    case "heliSound":
                        this.heliSound.play();
                        break;
                case "ArmyLv1HitSound":
                    this.ArmyLv1HitSound.play();
                    break;
                case "ArmyLv2HitSound":
                    this.ArmyLv2HitSound.play();
                    break;
                case "ArmyLv3HitSound":
                    this.ArmyLv3HitSound.play();
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
            case "earthQuakeSound":
                this.earthQuakeSound.stop();
                break;
                case "heliSound":
                    this.heliSound.stop();
                    break;
            case "ArmyLv1HitSound":
                this.ArmyLv1HitSound.stop();
                break;
            case "ArmyLv2HitSound":
                this.ArmyLv2HitSound.stop();
                break;
            case "ArmyLv3HitSound":
                this.ArmyLv3HitSound.stop();
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
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.ArmyLv1HitSound.stop();
        this.ArmyLv2HitSound.stop();
        this.ArmyLv3HitSound.stop();
        this.earthQuakeSound.stop();
        this.clickSound.stop();
        this.buySound.stop();
        this.coinSound.stop();
        this.heliSound.stop();
        // this.failSound.stop();
        // this.winSound.stop();
    }
}
