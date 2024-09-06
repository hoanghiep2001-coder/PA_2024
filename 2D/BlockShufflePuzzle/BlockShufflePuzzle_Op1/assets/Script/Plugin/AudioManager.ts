import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    switchItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    pickItemSound: cc.AudioSource = null;

    @property(cc.AudioSource)
    Fx_Bonus1: cc.AudioSource = null;
    @property(cc.AudioSource)
    Fx_Bonus2: cc.AudioSource = null;
    @property(cc.AudioSource)
    Fx_Bonus3: cc.AudioSource = null;
    @property(cc.AudioSource)
    Fx_Bonus4: cc.AudioSource = null;

    @property(cc.AudioSource)
    Fx_Lose: cc.AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "switchItemSound":
                    this.switchItemSound.play();
                    break;
                case "Fx_Lose":
                    this.Fx_Lose.play();
                    break;
                case "Fx_Bonus1":
                    this.Fx_Bonus1.play();
                    break;
                case "Fx_Bonus2":
                    this.Fx_Bonus2.play();
                    break;
                case "Fx_Bonus3":
                    this.Fx_Bonus3.play();
                    break;
                case "Fx_Bonus4":
                    this.Fx_Bonus4.play();
                    break;
                case "pickItemSound":
                    this.pickItemSound.play();
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
            case "switchItemSound":
                this.switchItemSound.stop();
                break;
            case "Fx_Lose":
                this.Fx_Lose.stop();
                break;
            case "Fx_Bonus1":
                this.Fx_Bonus1.stop();
                break;
            case "Fx_Bonus2":
                this.Fx_Bonus2.stop();
                break;
            case "Fx_Bonus3":
                this.Fx_Bonus3.stop();
                break;
            case "Fx_Bonus4":
                this.Fx_Bonus4.stop();
                break;
            case "pickItemSound":
                this.pickItemSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSoundExceptBgSound(): void {
        this.pickItemSound.stop();
        this.Fx_Lose.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
        this.switchItemSound.stop();
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.Fx_Lose.stop();
        this.pickItemSound.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
        this.switchItemSound.stop();
    }
}
