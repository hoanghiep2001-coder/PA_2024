// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../../Utility2d/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CashText extends cc.Component {

    @property(cc.Label)
    cashText: cc.Label = null;

    currCash: number = 0;

    protected onLoad(): void {
        eventDispatcher.on(Global.UpdateCash, this.UpdateCash, this);
    }

    protected start(): void {
        this.cashText.string = "$" + this.currCash.toFixed(2).toString()
    }
    UpdateCash(cashAdd: number) {
        this.increaseAmount(this.currCash, this.currCash + cashAdd, 500);
        this.currCash += cashAdd;
        Global.totalCash = this.currCash;

    }
    increaseAmount(startAmount: number, endAmount: number, duration: number): void {
        const stepTime = 100; // Thời gian giữa các bước tăng (ms)
        const steps = duration / stepTime; // Số bước tăng
        const stepAmount = (endAmount - startAmount) / steps; // Số tiền tăng mỗi bước

        let currentAmount = startAmount;
        const interval = setInterval(() => {
            currentAmount += stepAmount;
            if (currentAmount >= endAmount) {
                currentAmount = endAmount;
                clearInterval(interval);
            }
            this.cashText.string = "$" + currentAmount.toFixed(2).toString();
        }, stepTime);
    }
}
