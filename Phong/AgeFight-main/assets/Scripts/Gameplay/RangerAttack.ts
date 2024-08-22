// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager, { BulletType } from "../Utility/Pool/PoolManager";
import Utility from "../Utility/Utility";
import { Attacker } from "./Attacker";
import { BulletController } from "./BulletController";
import { Character } from "./Character";
import { House } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RangerAttack extends Attacker {

    @property(cc.Node)
    firePos: cc.Node = null;

    @property(cc.Animation)
    fxFire: cc.Animation = null;

    @property(String)
    animString: string = "";

    @property({ type: cc.Enum(BulletType) })
    bulletType: BulletType = BulletType.NONE;

    override  Attack(target: Character): void {

        if (target == null) return;
        var targetNode = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, target.node.parent, target.node);
        var firePostNode1 = Utility.ConvertPosToHigherParentByNode(this.firePos.parent.parent, this.firePos.parent, this.firePos);
        var firePostNode2 = Utility.ConvertPosToParentByVector(this.firePos.parent.parent, this.firePos.parent.parent, firePostNode1);
        var dir = targetNode.sub(firePostNode2).normalize();
        this.scheduleOnce(() => {
            if (this.fxFire != null)
                this.fxFire.play(this.animString, 0);
            // cc.log("ranger attack " + this.damage);
            var bullet = PoolManager.Instance(PoolManager).SpawnerBullet(this.bulletType);
            bullet.parent = this.firePos;
            bullet.setPosition(cc.Vec2.ZERO);
            bullet.getComponent(BulletController).Init(new cc.Vec2(dir.x, dir.y), this.bulletType, this.damage);
            this.PlayAttackSound();
        }, this.delayEmitAttack);


    }
    override AttackToHouse(targetHouse: House) {
        if (targetHouse == null) return;
        var targetNode = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, targetHouse.node.parent, targetHouse.node);
        var firePostNode1 = Utility.ConvertPosToHigherParentByNode(this.firePos.parent.parent, this.firePos.parent, this.firePos);
        var firePostNode2 = Utility.ConvertPosToParentByVector(this.firePos.parent.parent, this.firePos.parent.parent, firePostNode1);
        var dir = targetNode.sub(firePostNode2).normalize();
        this.scheduleOnce(() => {
            if (this.fxFire != null)
                this.fxFire.play(this.animString, 0);
            // cc.log("ranger attack " + this.damage);
            var bullet = PoolManager.Instance(PoolManager).SpawnerBullet(this.bulletType);
            bullet.parent = this.firePos;
            bullet.setPosition(cc.Vec2.ZERO);
            bullet.getComponent(BulletController).Init(new cc.Vec2(dir.x, dir.y), this.bulletType, this.damage);
            this.PlayAttackSound();
        }, this.delayEmitAttack);
    }
    FindHouse() {
        throw new Error("Method not implemented.");
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    // update (dt) {}
}
