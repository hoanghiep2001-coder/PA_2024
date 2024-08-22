// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../../Utility2d/GameManager";
import Global, { eventDispatcher } from "../../Utility2d/Global";
import Utility from "../../Utility2d/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CashCard extends cc.Component {

    @property(cc.Vec2)
    newPos: cc.Vec2 = null;

    worldPos: cc.Vec2 = null;

    protected onLoad(): void {
        eventDispatcher.on(Global.GetWorldPos, this.GetPrePos, this);

    }

    // protected start(): void {
    //     this.GetPrePos();
    //     this.moveToCash();
    // }

    GetPrePos() {
        let convert1 = Utility.ConvertPosToHigherParentByNode(this.node.parent.parent, this.node.parent, this.node);
        let convert2 = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent, this.node.parent.parent, convert1);
        let convert3 = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent.parent, this.node.parent.parent.parent, convert2);
        this.worldPos = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent.parent.parent, this.node.parent.parent.parent.parent, convert3);
    }


    moveToCash() {
        this.scheduleOnce(() => {
            this.node.parent = cc.Canvas.instance.node;
            this.node.setPosition(this.worldPos);

            this.node.runAction(cc.moveTo(0.25, this.newPos));
            this.node.runAction(cc.scaleBy(0.25, 1.5, 1.5));


        }, 0.15)
    }

    StartMove() {
        this.node.setPosition(new cc.Vec3(0, 0, 0));

        const cashHolderPos = Utility.ConvertPosToHigherParentByNode(Global.CashPos.parent.parent, Global.CashPos.parent, Global.CashPos);

        this.scheduleOnce(() => {

            Utility.PlaySound(Global.Cash, false);
            this.node.runAction(cc.moveTo(0.5, cashHolderPos));
            this.node.runAction(
                cc.sequence(
                    cc.scaleTo(0.25, 1.2, 1.2),
                    cc.callFunc(() => {
                        this.node.runAction(cc.scaleTo(0.25, 0, 0))
                    })
                ));

            this.scheduleOnce(() => {
                eventDispatcher.emit(Global.UpdateCash, 200);
                this.scheduleOnce(() => {
                    GameManager.Instance(GameManager).ShowEndcard();
                }, 1)
            }, 0.7)
        },)
    }
}
