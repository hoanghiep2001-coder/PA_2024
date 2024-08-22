// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager from "./Pool/PoolManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AutoDestruction extends cc.Component {

    @property(Number)
    timeDestruction: number = 0;

    protected onEnable(): void {
        this.node.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this.scheduleOnce(() => {
            PoolManager.Instance(PoolManager).SpawnerAnimDie(this.node);

        }, this.timeDestruction);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {

    // }

    // update (dt) {}
}
