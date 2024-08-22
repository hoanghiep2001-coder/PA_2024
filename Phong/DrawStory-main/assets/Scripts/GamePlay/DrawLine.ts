// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "../Utility/Constant";
import Global from "../Utility/Global";
import SoundManager from "../Utility/SoundManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DrawLine extends cc.Component {

    @property(cc.Node)
    guideDraw: cc.Node = null;

    @property(cc.Node)
    pencil: cc.Node = null;

    @property(cc.Node)
    guide: cc.Node = null;

    @property(cc.Prefab)
    line: cc.Prefab = null;

    newLine: cc.Node = null;
    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
    }

    // update (dt) {}
    TouchStart(event) {
        if (Global.endGame) {
            return;
        }
        Global.touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.pencil.active = true;
        if (this.newLine == null) {
            this.newLine = cc.instantiate(this.line);
            this.newLine.getComponent("Line").color = cc.Color.RED;
            this.newLine.parent = this.node;
            this.newLine.setSiblingIndex(0);
            this.newLine.x = 0;
            this.newLine.y = 0;
        }


    }
    TouchMove(event) {

        if (Global.endGame) {
            return;
        }
        if (Constants.ironSource.SoundState) {
            SoundManager.Instance(SoundManager).drawSound.volume = 1;

        } else {
            SoundManager.Instance(SoundManager).drawSound.volume = 0;
        }
        this.guideDraw.active = false;
        this.guide.active = false;
        Global.touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.pencil.setPosition(Global.touchPos);
        Global.startTouch = true;
    }
    TouchEnd(event) {
        SoundManager.Instance(SoundManager).drawSound.volume = 0;
        if (Global.listPosDraw1.length > 5) {
            Global.startTouch = false;
            Global.isDraw = true;
        } else {
            this.ResetDraw();
        }
    }
    ResetDraw() {
        if (this.newLine != null) {
            this.newLine.destroy();
            this.newLine = null;
        }
        this.guide.active = true;
        this.guideDraw.active = true;
        this.pencil.active = false;

    }

}
