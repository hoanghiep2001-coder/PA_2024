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
    K98Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ArmyLv3HitSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    EnemyTankSound: cc.AudioSource = null;
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
    baseDownSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    lazerSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    BoomSound: cc.AudioSource = null;

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
                case "K98Sound":
                    this.K98Sound.play();
                    break;
                case "EnemyTankSound":
                    this.EnemyTankSound.play();
                    break;
                case "earthQuakeSound":
                    this.earthQuakeSound.play();
                    break;
                case "baseDownSound":
                    this.baseDownSound.play();
                    break;
                case "lazerSound":
                    this.lazerSound.play();
                    break;
                case "BoomSound":
                    this.BoomSound.play();
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
            case "K98Sound":
                this.K98Sound.stop();
                break;
            case "EnemyTankSound":
                this.EnemyTankSound.stop();
                break;
            case "earthQuakeSound":
                this.earthQuakeSound.stop();
                break;
            case "baseDownSound":
                this.baseDownSound.play();
                break;
            case "lazerSound":
                this.lazerSound.stop();
                break;
            case "BoomSound":
                this.BoomSound.stop();
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
        this.K98Sound.stop();
        this.EnemyTankSound.stop();
        this.bgSound.stop();
        this.lazerSound.stop();
        this.BoomSound.stop();
        this.baseDownSound.stop();
        this.ArmyLv1HitSound.stop();
        this.ArmyLv2HitSound.stop();
        this.ArmyLv3HitSound.stop();
        this.earthQuakeSound.stop();
        this.clickSound.stop();
        this.buySound.stop();
        this.coinSound.stop();
        // this.failSound.stop();
        // this.winSound.stop();
    }
}
