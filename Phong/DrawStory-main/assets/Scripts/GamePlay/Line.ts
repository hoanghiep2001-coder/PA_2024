// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Line extends cc.Component {

    @property
    color: cc.Color = cc.Color.WHITE;

    @property
    isDrawed: boolean = false;

    drawing: cc.Graphics;
    isDrawStart: boolean = false;
    posOld: cc.Vec2 = null;

    start() {
        this.drawing = this.node.getComponent(cc.Graphics);
    }

    update(dt) {
        if (Global.endGame) return;
        if (Global.touchPos != null && !this.isDrawed) {
            if (this.posOld == null) {
                this.posOld = Global.touchPos;
                cc.log(this.posOld);
            }
            if (this.checkDistance(this.posOld, Global.touchPos)) {
                Global.listPosDraw1.push(Global.touchPos);
                this.drawing.lineWidth = 15;
                this.drawing.strokeColor = this.color;
                this.drawing.moveTo(this.posOld.x, this.posOld.y);
                this.drawing.lineTo(Global.touchPos.x, Global.touchPos.y);
                this.drawing.close();
                this.drawing.stroke();
                this.posOld = Global.touchPos;
            }
        }
    }
    checkDistance(a: cc.Vec2, b: cc.Vec2) {
        if (cc.Vec2.distance(a, b) < 5)
            return false;
        return true;
    }
}
