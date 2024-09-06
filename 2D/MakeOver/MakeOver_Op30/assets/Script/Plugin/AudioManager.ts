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
    drySound: cc.AudioSource = null;
    @property(cc.AudioSource)
    shampooSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    toothPaste1Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    toothPaste2Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    DoneStepSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ShakeBrush: cc.AudioSource = null;

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
                    case "ShakeBrush":
                        this.ShakeBrush.play();
                        break;
                    case "DoneStepSound":
                        this.DoneStepSound.play();
                        break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "drySound":
                    this.drySound.play();
                    break;

                case "shampooSound":
                    this.shampooSound.play();
                    break;

                case "toothPaste1Sound":
                    this.toothPaste1Sound.play();
                    break;

                case "toothPaste2Sound":
                    this.toothPaste2Sound.play();
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
                case "ShakeBrush":
                    this.ShakeBrush.stop();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.stop();
                    break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "drySound":
                this.drySound.stop();
                break;

            case "shampooSound":
                this.shampooSound.stop();
                break;

            case "toothPaste1Sound":
                this.toothPaste1Sound.stop();
                break;

            case "toothPaste2Sound":
                this.toothPaste2Sound.stop();
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
        this.ShakeBrush.stop();
        this.DoneStepSound.stop();
        this.whooseSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.walkSound.stop();
        this.spiderSound.stop();
        this.scareSound.stop();
        this.IntroDelightSound.stop();
        this.hmmSound.stop();
        this.drySound.stop()
        this.shampooSound.stop()
        this.toothPaste1Sound.stop()
        this.toothPaste2Sound.stop()
    }
}
