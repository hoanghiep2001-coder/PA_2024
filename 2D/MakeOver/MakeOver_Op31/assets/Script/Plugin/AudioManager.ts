import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    spiderSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    hmmSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    walkSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    scareSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    IntroDelightSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    whooseSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    moveItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    DoneStepSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    crySound: cc.AudioSource = null;
    @property(cc.AudioSource)
    gapRuoiSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    screamHoooSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun1Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun2Sound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "screamHoooSound":
                    this.screamHoooSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "gapRuoiSound":
                    this.gapRuoiSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "whooseSound":
                    this.whooseSound.play();
                    break;
                case "hmmSound":
                    this.hmmSound.play();
                    break;
                case "walkSound":
                    this.walkSound.play();
                    break;
                case "spiderSound":
                    this.spiderSound.play();
                    break;
                case "scareSound":
                    this.scareSound.play();
                    break;
                case "IntroDelightSound":
                    this.IntroDelightSound.play();
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
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "screamHoooSound":
                this.screamHoooSound.stop();
                break;
            case "gapRuoiSound":
                this.gapRuoiSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "DoneStepSound":
                this.DoneStepSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "whooseSound":
                this.whooseSound.stop();
                break;
            case "spiderSound":
                this.spiderSound.stop();
                break;
            case "walkSound":
                this.walkSound.stop();
                break;
            case "hmmSound":
                this.hmmSound.stop();
                break;
            case "scareSound":
                this.scareSound.stop();
                break;
            case "IntroDelightSound":
                this.IntroDelightSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.nhoMun2Sound.stop();
        this.nhoMun1Sound.stop();
        this.screamHoooSound.stop();
        this.DoneStepSound.stop();
        this.whooseSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.walkSound.stop();
        this.spiderSound.stop();
        this.scareSound.stop();
        this.IntroDelightSound.stop();
        this.hmmSound.stop();
        this.crySound.stop();
        this.gapRuoiSound.stop();
    }
}
