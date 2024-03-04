import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    xitNuocSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun1Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun2Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun3Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    completeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    conClearSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    moveItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    woaAnimeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    girlScreamSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    dirtySound: cc.AudioSource = null;
    @property(cc.AudioSource)
    wormBgSound: cc.AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "wormBgSound":
                    this.wormBgSound.play();
                    break;
                case "xitNuocSound":
                    this.xitNuocSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "nhoMun3Sound":
                    this.nhoMun3Sound.play();
                    break;
                case "completeSound":
                    this.completeSound.play();
                    break;
                case "conClearSound":
                    this.conClearSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                case "girlScreamSound":
                    this.girlScreamSound.play();
                    break;
                case "dirtySound":
                    this.dirtySound.play();
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
            case "wormBgSound":
                this.wormBgSound.stop();
                break;
            case "xitNuocSound":
                this.xitNuocSound.stop();
                break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "nhoMun3Sound":
                this.nhoMun3Sound.stop();
                break;
            case "completeSound":
                this.completeSound.stop();
                break;
            case "conClearSound":
                this.conClearSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "girlScreamSound":
                this.girlScreamSound.stop();
                break;
            case "dirtySound":
                this.dirtySound.stop();
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
        this.wormBgSound.stop();
        this.xitNuocSound.stop();
        this.nhoMun1Sound.stop();
        this.nhoMun2Sound.stop();
        this.nhoMun3Sound.stop();
        this.completeSound.stop();
        this.conClearSound.stop();
        this.moveItemSound.stop();
        this.girlScreamSound.stop();
        this.dirtySound.stop();
        this.woaAnimeSound.stop();
    }
}
