// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";
import Utility from "../Utility/Utility";
import GameManager from "./GameManager";
import Match3Controller from "./Match3Controller";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GetSkin extends cc.Component {

    @property
    index: number = 0;

    @property(cc.SpriteFrame)
    spriteFrameItem: cc.SpriteFrame = null;

    @property(Number)
    scaleItemConfig: number = 0;

    SetSkinGirl() {
        if (Global.completeChooseSkin) return;
        Utility.PlaySound(Global.clickSound, false);
        Global.completeChooseSkin = true;
        Match3Controller.Instance(Match3Controller).SetItem(this.spriteFrameItem, this.scaleItemConfig);
        GameManager.Instance(GameManager).SetSkinGirl(this.index);
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
