// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility2d/Global";
import Utility from "../Utility2d/Utility";

const { ccclass, property } = cc._decorator;


export enum Type {
    Bohenian,
    Elegant,
    Edgy,
    Vacation,
}

@ccclass
export default class Element extends cc.Component {

    @property(cc.Node)
    guide: cc.Node = null;

    @property(cc.Node)
    pin: cc.Node = null;

    @property(cc.Sprite)
    barFill: cc.Sprite = null;

    @property(Number)
    indexSkin: number = 0;

    @property({ type: cc.Enum(Type) })
    typeSkin: Type = Type.Bohenian;

    mousePos: cc.Vec2 = cc.Vec2.ZERO;
    boolCompleteChange: boolean = false;
    posX: number = 0;
    fillrange: number = 0;
    onLoad() {
        this.RegisterEvent();
    }



    RegisterEvent() {

        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);


        eventDispatcher.on(Global.DisabeleGuide, this.DisabeleGuide, this);
        eventDispatcher.on(Global.UpdatePos, this.UpdatePos, this);
    }
    TouchStart(event) {
        if (!Global.canModify) return;
        this.mousePos = this.node.convertToNodeSpaceAR(event.getLocation());
    }
    TouchMove(event) {
        if (!Global.canModify) return;

        eventDispatcher.emit(Global.DisabeleGuide);

        this.mousePos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.posX = this.mousePos.x;
        this.posX = cc.misc.clampf(this.posX, Global.startX, Global.endX);
        this.fillrange = (this.posX - Global.startX) / (2 * Global.endX)
        this.barFill.fillRange = this.fillrange;
        this.pin.x = this.posX;
    }
    TouchEnd(event) {
        if (!Global.canModify) return;
        Utility.PlaySound(Global.Click, false);

        //  post event call change skin
        eventDispatcher.emit(Global.ChangeSkin, this.indexSkin, this.boolCompleteChange);

        eventDispatcher.emit(Global.UpdatePos, this.typeSkin, this.posX, this.fillrange);


        this.boolCompleteChange = true;
    }

    DisabeleGuide() {
        if (this.guide != null)
            this.guide.active = false;
    }
    UpdatePos(type: Type, posX: number, fillRange: number) {
        if (this.typeSkin == type) {
            this.pin.x = posX;
            this.barFill.fillRange = fillRange;
        }

    }

    // update (dt) {}
}
