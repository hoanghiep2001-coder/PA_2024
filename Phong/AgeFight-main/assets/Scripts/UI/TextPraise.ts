// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility/Global";
import Utility from "../Utility/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TextPraise extends cc.Component {

    @property(cc.Node)
    textList: cc.Node[] = [];

    protected start(): void {
        eventDispatcher.on(Global.ActiveText, this.ActiveText, this);
    }

    ActiveText() {
        var random = Utility.RandomRangeInteger(0, 2);
        for (let i = 0; i < this.textList.length; i++) {
            if (i == random) {
                this.textList[i].active = true;
            } else {
                this.textList[i].active = false;

            }
        }
    }

    // update (dt) {}
}
