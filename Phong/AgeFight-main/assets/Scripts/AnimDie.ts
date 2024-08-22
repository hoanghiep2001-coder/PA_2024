// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager from "./Utility/Pool/PoolManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimDie extends cc.Component {


    onLoad() {
        this.node.runAction(
            cc.sequence(
                cc.fadeOut(8),
                cc.callFunc(() => {
                    PoolManager.Instance(PoolManager).RecycleDieImage(this.node);
                }))
        )
    }
    

    // update (dt) {}
}
