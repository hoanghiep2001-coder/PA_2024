import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    openDoorSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    knockDoorSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    screamSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    crySound: cc.AudioSource = null;
    @property(cc.AudioSource)
    woaAnimeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    clickSound: cc.AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "openDoorSound":
                    this.openDoorSound.play();
                    break;
                    case "clickSound":
                        this.clickSound.play();
                        break;
                case "knockDoorSound":
                    this.knockDoorSound.play();
                    break;
                case "screamSound":
                    this.screamSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;

                default:
                    break;
            }
        }

        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "openDoorSound":
        //             this.openDoorSound.play();
        //             break;
        //             case "clickSound":
        //                 this.clickSound.play();
        //                 break;
        //         case "knockDoorSound":
        //             this.knockDoorSound.play();
        //             break;
        //         case "screamSound":
        //             this.screamSound.play();
        //             break;
        //         case "crySound":
        //             this.crySound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;

        //         default:
        //             break;
        //     }
        // }
    }


    public switchVolume(soundName: string, volume: number): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.volume = volume;
                break;
            case "openDoorSound":
                this.openDoorSound.volume = volume;
                break;
                case "clickSound":
                    this.clickSound.volume = volume
                    break;
            case "knockDoorSound":
                this.knockDoorSound.volume = volume;
                break;
            case "screamSound":
                this.screamSound.volume = volume;
                break;
            case "crySound":
                this.crySound.volume = volume;
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.volume = volume;
                break;
            default:
                break;
        }
    }


    public stopSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "openDoorSound":
                this.openDoorSound.stop();
                break;
                case "clickSound":
                    this.clickSound.stop();
                    break;
            case "knockDoorSound":
                this.knockDoorSound.stop();
                break;
            case "screamSound":
                this.screamSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.openDoorSound.stop();
        this.knockDoorSound.stop();
        this.screamSound.stop();
        this.crySound.stop();
        this.woaAnimeSound.stop();
        this.clickSound.stop();
    }
}
