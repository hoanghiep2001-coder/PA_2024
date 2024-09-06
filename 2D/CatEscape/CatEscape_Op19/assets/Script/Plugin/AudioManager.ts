import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ClickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    CatSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        // ironsource
        
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "ClickSound":
                    this.ClickSound.play();
                    break;
                case "CatSound":
                    this.CatSound.play();
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
                case "ClickSound":
                    this.ClickSound.stop();
                    break;
                case "CatSound":
                    this.CatSound.stop();
                    break;
            default:
                break;
        }
    }


    public stopAllSoundExceptBgSound(): void {
        this.ClickSound.stop(); this.CatSound.stop();
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.ClickSound.stop(); this.CatSound.stop();
    }
}
