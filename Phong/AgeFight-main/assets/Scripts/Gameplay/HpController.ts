// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class HpController extends cc.Component {

    @property(cc.Sprite)
    hpBar: cc.Sprite = null;

    @property(cc.Sprite)
    hpWhiteBar: cc.Sprite = null;

    @property(Number)
    totalHp: number = 0;

    currentHp: number = 0;
    tween: cc.Tween = null;
    protected onEnable(): void {

    }

    Init() {
        this.currentHp = this.totalHp;
        this.hpBar.fillStart = 1;
        this.hpWhiteBar.fillStart = 1;
        this.scheduleOnce(() => { this.node.active = false; }, 0.3);
    }

    UpdateFillHpWhiteBar(ratio: number) {
        this.scheduleOnce(() => { this.node.active = false; }, 0.3);
        if (this.tween != null) this.tween.stop();
        this.tween = cc.tween(this.hpWhiteBar)
            .to(0.25, { fillStart: ratio })
            .start();
    }

    OnDecreaseHp(damage: number) {
        this.currentHp -= damage;
        this.currentHp = this.currentHp <= 0 ? 0 : this.currentHp;
        if (this.currentHp == 0) {
            this.node.active = false;
            return;
        }
        let ratio = this.currentHp / this.totalHp
        this.hpBar.fillStart = ratio;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(() => {
            this.UpdateFillHpWhiteBar(ratio);
        }, 0.05);
    }

    RunOutHp() {
        return this.currentHp <= 0;
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
