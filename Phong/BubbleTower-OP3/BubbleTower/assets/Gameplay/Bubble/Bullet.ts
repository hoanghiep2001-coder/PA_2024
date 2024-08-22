// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../../Utility2d/Global";
import PoolManager, { BubbleType } from "../../Utility2d/Pool/PoolManager";
import BubbleController from "./BubbleController";
import BubbleShooter from "./BubbleShooter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    boolIsHitting: boolean = false;

    type: BubbleType = BubbleType.BLUE;


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group === "Limit") {
            eventDispatcher.emit(Global.ResetShooter);
        }
    }

}
