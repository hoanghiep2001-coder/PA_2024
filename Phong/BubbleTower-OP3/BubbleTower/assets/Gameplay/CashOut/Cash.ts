// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../../Utility2d/Global";
import SoundManager from "../../Utility2d/SoundManager";
import Utility from "../../Utility2d/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Cash extends cc.Component {

    @property(cc.Node)
    cashIcon: cc.Node = null;


    protected onEnable(): void {
        this.cashIcon.angle = 0;
        this.cashIcon.runAction(cc.rotateTo(0.1, Utility.RandomRangeInteger(-360, 360)));

        this.MoveToCashHolder();
    }


    MoveToCashHolder() {
        this.scheduleOnce(() => {
            SoundManager.Instance(SoundManager).money.play();
            let cashHolderPos = Utility.ConvertPosToHigherParentByNode(Global.CashPos.parent.parent, Global.CashPos.parent, Global.CashPos);
            this.node.runAction(cc.moveTo(0.5, cashHolderPos));
            this.node.runAction(cc.scaleTo(0.5, 0, 0));
            this.scheduleOnce(() => {
                eventDispatcher.emit(Global.UpdateCash, 5);
            }, 0.6);
        }, 0.5);
        this.scheduleOnce(() => {
            SoundManager.Instance(SoundManager).money.stop();

        }, 2)
    }
}
