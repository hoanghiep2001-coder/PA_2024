import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    clickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    woaSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    woaSound2: cc.AudioSource = null;
    @property(cc.AudioSource)
    SwapSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    GemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    rainbowSound: cc.AudioSource = null;

    public playSound(soundName: string): void {
        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         case "openBookSound":
        //             this.openBookSound.play();
        //             break;
        //         case "showItemSound":
        //             this.showItemSound.play();
        //             break;
        //         case "pickItemSound":
        //             this.pickItemSound.play();
        //             break;   
        //             case "waoGameSound":
        //             this.waoGameSound.play();
        //             break;
        //             case "swtichItemSound":
        //                 this.swtichItemSound.play();
        //                 break;
        //         default:
        //             break;
        //     }
        // }
        // ----------------

        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "woaSound":
                    this.woaSound.play();
                    break;
                    case "woaSound2":
                        this.woaSound2.play();
                        break;
                case "SwapSound":
                    this.SwapSound.play();
                    break;
                case "GemSound":
                    this.GemSound.play();
                    break;
                case "rainbowSound":
                    this.rainbowSound.play();
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
            case "clickSound":
                this.clickSound.stop();
                break;
            case "woaSound":
                this.woaSound.stop();
                break;
                case "woaSound2":
                    this.woaSound2.stop();
                    break;
            case "SwapSound":
                this.SwapSound.stop();
                break;
            case "GemSound":
                this.GemSound.stop();
                break;
            case "rainbowSound":
                this.rainbowSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSoundExceptBgSound(): void {
        this.clickSound.stop();
        this.woaSound.stop();
        this.SwapSound.stop();
        this.GemSound.stop();
        this.rainbowSound.stop();
        this.woaSound2.stop();
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.clickSound.stop();
        this.woaSound.stop();
        this.SwapSound.stop();
        this.GemSound.stop();
        this.rainbowSound.stop();
        this.woaSound2.stop();
    }
}
