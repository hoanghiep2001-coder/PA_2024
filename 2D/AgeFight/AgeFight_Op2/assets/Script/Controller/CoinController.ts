import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CoinController extends cc.Component {
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(cc.Label)
    label: cc.Label = null;

    tempEnemyDie: number = 0;
    isTweenRunning: boolean = false;

    protected start(): void {
        // this.label.string = String(50);
    }


    public handleIncreaseCoin(fromValue: number, toValue: number): void {
        if (this.isTweenRunning) return;

        Constants.isStartGame && this.AudioManager.playSound(Constants.SoundTrack.coinSound);

        this.label.string = String(fromValue);
        cc.tween(Constants)
            .to(0.5, { currentCoin: toValue }, {
                progress: (start, end, current, t) => {
                    let newValue = Math.floor(cc.misc.lerp(start, end, t));
                    this.label.string = newValue.toString();
                    return newValue;
                },
            })
            .call(() => {
                this.isTweenRunning = false;
            })
            .start();
    }


    protected update(dt: number): void {
        if(this.tempEnemyDie !== Constants.enemyDie) {
            let toValue = Constants.enemyDie * 10;
            this.handleIncreaseCoin(Constants.currentCoin, toValue)
        }
        this.tempEnemyDie = Constants.enemyDie;
    }
}
