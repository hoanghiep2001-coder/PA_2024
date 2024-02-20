import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    woaAnimeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    openBookSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    showItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    pickItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    waoGameSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    swtichItemSound: cc.AudioSource = null;

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
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                case "openBookSound":
                    this.openBookSound.play();
                    break;
                case "showItemSound":
                    this.showItemSound.play();
                    break;
                case "pickItemSound":
                    this.pickItemSound.play();
                    break;   
                    case "waoGameSound":
                    this.waoGameSound.play();
                    break;
                    case "swtichItemSound":
                        this.swtichItemSound.play();
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
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            case "openBookSound":
                this.openBookSound.stop();
                break;
            case "showItemSound":
                this.showItemSound.stop();
                break;
            case "pickItemSound":
                this.pickItemSound.stop();
                break;
                case "waoGameSound":
                    this.waoGameSound.stop();
                    break;
                    case "swtichItemSound":
                        this.swtichItemSound.stop();
                        break;
            default:
                break;
        }
    }


    public stopAllSoundExceptBgSound(): void {
        this.showItemSound.stop();
        this.woaAnimeSound.stop(); this.openBookSound.stop(); this.pickItemSound.stop();
        this.waoGameSound.stop(); this.swtichItemSound.stop();
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.showItemSound.stop();
        this.woaAnimeSound.stop(); this.openBookSound.stop(); this.pickItemSound.stop();
        this.waoGameSound.stop(); this.swtichItemSound.stop();
    }
}
