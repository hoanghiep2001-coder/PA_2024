// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../../Utility2d/Global";
import Utility from "../../Utility2d/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimalController extends cc.Component {

    @property(cc.Node)
    wall: cc.Node = null;

    @property(cc.Node)
    animal: cc.Node = null;

    @property(cc.Node)
    releasePos: cc.Node = null;

    @property()
    rowRelease: number = 0;

    @property(cc.AudioClip)
    soundEffect: cc.AudioClip = null;

    boolComplete: boolean = false;
    nodeToWord: cc.Vec2 = null;

    protected onEnable(): void {
        eventDispatcher.on(Global.ReleaseAnimal, this.ReleaseAnimal, this);

    }

    GetWorldPos() {
        let convert1 = Utility.ConvertPosToHigherParentByNode(this.node.parent.parent, this.node.parent, this.node);
        let convert2 = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent, this.node.parent.parent, convert1);
        this.nodeToWord = Utility.ConvertPosToParentByVector(cc.Canvas.instance.node, this.node.parent.parent.parent, convert2);
    }

    ReleaseAnimal(rowRelease: number) {
        if (rowRelease > this.rowRelease) return;
        if (this.boolComplete) return;
        this.boolComplete = true;
        Utility.PlaySound(Global.Release, false);
        this.startRelease();
    }
    startRelease() {
        this.GetWorldPos();

        this.wall.active = false;
        this.node.parent = cc.Canvas.instance.node;
        this.node.setPosition(this.nodeToWord);

        this.scheduleOnce(() => {
            if (this.soundEffect)
                Utility.PlaySound(this.soundEffect, false);
        }, 1)

        this.animal.getComponent(cc.Animation).play("Release");
        this.scheduleOnce(() => {
            this.node.runAction(
                cc.sequence(
                    cc.moveTo(1, new cc.Vec2(this.releasePos.x, this.releasePos.y)),
                    cc.callFunc(() => {

                        this.node.runAction(
                            cc.sequence(
                                cc.moveTo(3, new cc.Vec2(2000, this.releasePos.y)),
                                cc.callFunc(() => { cc.fadeOut(0.5) })
                            )
                        )
                    })
                )
            );
        }, 0.5)

    }

}
