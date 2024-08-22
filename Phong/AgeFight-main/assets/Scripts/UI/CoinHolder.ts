// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CoinHolder extends cc.Component {

    @property(cc.Label)
    textCoin: cc.Label = null;

    currentCoint: number = 0;
    UpdateCoinText(spendCoin: number) {
        this.currentCoint += spendCoin;
        this.currentCoint = this.currentCoint <= 0 ? 0 : this.currentCoint;
        Global.totalGold = this.currentCoint;
        this.textCoin.string = this.currentCoint.toString();
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        eventDispatcher.on(Global.UpdateCoin, this.UpdateCoinText, this);
    }

    start() {
        this.currentCoint = Global.totalGold;
        this.UpdateCoinText(0);
    }

    // update (dt) {}
}
