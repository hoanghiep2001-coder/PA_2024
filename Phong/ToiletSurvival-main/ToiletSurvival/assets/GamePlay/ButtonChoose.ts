// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility2d/Global";
import Utility from "../Utility2d/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonChoose extends cc.Component {

    @property(cc.Animation)
    holder: cc.Animation = null;

    @property(cc.Node)
    highlight: cc.Node = null;

    @property(cc.SpriteFrame)
    iconChar: cc.SpriteFrame = null;

    button: cc.Button = null;

    protected onEnable(): void {
        this.button = this.getComponent(cc.Button);
        eventDispatcher.on(Global.DoneSelection, this.DoneSelection, this);
    }
    DoneSelection() {
        this.button.interactable = false;
    }


    onClick() {
        if (Global.startTouch) return;
        Global.startTouch = true;
        this.holder.play("Default");

        Utility.PlaySound(Global.Click, false);
        eventDispatcher.emit(Global.SetUp, this.node.getSiblingIndex());
    }
}
