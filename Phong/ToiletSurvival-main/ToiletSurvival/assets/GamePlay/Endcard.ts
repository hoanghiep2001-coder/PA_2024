// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility2d/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Endcard extends cc.Component {

    @property(cc.Node)
    iconCharacter: cc.Node = null;

    protected onEnable(): void {
        eventDispatcher.on(Global.SetUp, this.SetUp, this);
    }

    SetUp(index: number) {
        this.iconCharacter.children[index].active = true;
        this.node.runAction(cc.scaleTo(0, 1, 1));
    }
}
