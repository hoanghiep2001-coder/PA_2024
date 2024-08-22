// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../Utility2d/Global";
import PoolManager, { BubbleType } from "../../Utility2d/Pool/PoolManager";


const { ccclass, property } = cc._decorator;

@ccclass()
export default class BubbleShooter extends cc.Component {

    @property({ type: cc.Enum(BubbleType) })
    public typeBubble: BubbleType = BubbleType.BLUE;

    bubble: cc.Node = null;

    tween: cc.Tween = null;
    protected onLoad(): void {
        this.bubble = this.node.children[0];
    }

    StartMove() {
        this.MovingBullet(this.bubble, Global.fireTime, -3000, 3000);

    }
    MovingBullet(Temp: cc.Node, firetime: number, x: number, y: number) {
        Temp.runAction(cc.sequence(cc.moveBy(firetime, cc.v2(x * Math.tan(Temp.angle * Math.PI / 180), y)), cc.callFunc(() => {
            Temp.destroy();
        })));
    }
    StopMoving() {
        this.bubble.stopAllActions();
        this.Falling();

    }
    Falling() {
        this.node.runAction(cc.fadeOut(1))
        this.node.runAction(cc.moveBy(1, new cc.Vec2(0, -1000)));
        this.scheduleOnce(() => {
            PoolManager.Instance(PoolManager).RecycleBubble(this.typeBubble, this.node);
        }, 1.1);
    }
    
}
