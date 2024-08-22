// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility2d/Global";
import Utility from "../Utility2d/Utility";

const { ccclass, property } = cc._decorator;

@ccclass("Skin")
export default class Skin extends cc.Component {
    @property(cc.Node)
    skin: cc.Node = null;

    @property(Boolean)
    isActive: boolean = false;


    OnActive() {
        if (this.isActive) return;

        this.isActive = true;
        this.skin.active = true;
        Global.canModify = false;
        Utility.PlaySound(Global.Open, false);
        this.skin.runAction(
            cc.sequence(
                cc.scaleTo(1, 1, 1).easing(cc.easeBackOut()),
                cc.callFunc(() => {
                    this.scheduleOnce(() => {
                        Global.canModify = true;
                    }, 0.2)
                })
            )
        )
    }

    OnDisable() {
        this.skin.active = false;
    }


}
