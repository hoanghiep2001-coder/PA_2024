import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CoinController extends cc.Component {
    @property(AudioManager)
    AudioManager: AudioManager = null;


    @property([cc.Node])
    frameUnlockArmies: cc.Node[] = [];
    @property(cc.Node)
    frameUpgrade: cc.Node = null;
    @property(cc.Label)
    label: cc.Label = null;

    tempEnemyDie: number = 0;
    isTweenRunning: boolean = false;


    protected start(): void {

    }


    public increaseCoin(fromValue: number, toValue: number) {
        if (this.isTweenRunning) return;

        this.AudioManager.playSound(Constants.SoundTrack.coinSound);

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


    private checkUnlockArmy(): void {
        for (let index = 0; index < this.frameUnlockArmies.length; index++) {            
            const node = this.frameUnlockArmies[index];
            const cost = node.getChildByName("Label").getComponent(cc.Label);
            if(Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            } else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    }


    private checkEnableFrameUpgrade(): void {
        let node = this.frameUpgrade;
        if(node) {
            const cost = node.getChildByName("Label").getComponent(cc.Label);
            if(Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            } else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    }


    protected update(dt: number): void {
        this.checkUnlockArmy();
        // this.checkEnableFrameUpgrade();

        if(this.tempEnemyDie !== Constants.enemyDie) {
            let toValue = Constants.enemyDie * 30;
            this.increaseCoin(Constants.currentCoin, toValue)
        }
        this.tempEnemyDie = Constants.enemyDie;
    }
}
