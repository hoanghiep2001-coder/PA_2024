// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class HpHouse extends cc.Component {

    @property(cc.Label)
    textHp: cc.Label = null;

    @property(Number)
    totalHp: number = 0;

    currentHp: number = 0;

    Init() {
        this.currentHp = this.totalHp;

    }

    OnDecreaseHp(damage: number) {
        this.currentHp -= damage;
        this.currentHp = this.currentHp <= 0 ? 0 : this.currentHp;

        this.textHp.string = this.currentHp.toString();
    }

    RunOutHp() {
        return this.currentHp <= 0;
    }
    // update (dt) {}
}
