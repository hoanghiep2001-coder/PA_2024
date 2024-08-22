// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../Utility/GameManager";
import Global from "../Utility/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpawnMark extends cc.Component {

    @property(cc.Node)
    pointStart: cc.Node = null;

    @property(cc.Node)
    pointStartFake: cc.Node = null;

    startGame() {

    }
    protected start(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);

    }
    TouchStart(event) {
        if (Global.endGame) {
            GameManager.Instance(GameManager).ads.installHandle();
            return;
        }

    }
    TouchMove(event) {
        if (Global.endGame) return;
    }
    TouchEnd(event) {
    }
}


