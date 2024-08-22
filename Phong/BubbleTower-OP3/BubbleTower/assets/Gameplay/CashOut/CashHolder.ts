// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../../Utility2d/Global";
import { BubbleType } from "../../Utility2d/Pool/PoolManager";
import Utility from "../../Utility2d/Utility";
import CashCard from "./CashCard";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CashHolder extends cc.Component {

    @property(CashCard)
    cashCardHolder: CashCard[] = [];

    @property(cc.Animation)
    keyHolder: cc.Animation = null;


    @property()
    rowRelease: number = 0;

    boolComplete: boolean = false;

    typeUnlock: BubbleType = null;

    index: number = 0;
    index2: number = 0;

    protected onLoad(): void {
        this.index = 0;
        this.index2 = 0;
        this.typeUnlock = BubbleType.GREEN;
        eventDispatcher.on(Global.ReleaseAnimal, this.UnlockKey, this);

    }

    UnlockKey(rowRelease: number, typeUnlock: BubbleType) {
        if (typeUnlock != this.typeUnlock) return;
        if (rowRelease > this.rowRelease) return;
        if (this.boolComplete) return;
        this.boolComplete = true;

        Utility.PlaySound(Global.Electric, false);
        this.scheduleOnce(() => {
            Utility.PlaySound(Global.Bomb, false);
        }, 0.5);
        this.scheduleOnce(() => {
            this.keyHolder.play("Unlock");
            this.schedule(() => {
                this.cashCardHolder[this.index].moveToCash();
                this.index += 1;
            }, 0.25, 2, 1.5);

            this.scheduleOnce(() => {
                this.index2 = 0;
                this.cashCardHolder[0].node.setPosition(new cc.Vec3(0, 0, 0))
                this.cashCardHolder[0].node.setScale(new cc.Vec3(0, 0, 0))
                this.cashCardHolder[1].node.setPosition(new cc.Vec3(0, 0, 0))
                this.cashCardHolder[1].node.setScale(new cc.Vec3(0, 0, 0))
                this.cashCardHolder[2].node.setPosition(new cc.Vec3(0, 0, 0))
                this.cashCardHolder[2].node.setScale(new cc.Vec3(0, 0, 0))
                this.schedule(() => {
                    this.cashCardHolder[this.index2].StartMove();
                    this.index2 += 1;
                }, 0.15, 2, 0);
            }, 3)
        }, 0.5)


    }
}
