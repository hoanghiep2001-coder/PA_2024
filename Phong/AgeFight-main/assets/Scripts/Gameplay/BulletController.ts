// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager, { BulletType } from "../Utility/Pool/PoolManager";
import Utility from "../Utility/Utility";
import { Character } from "./Character";
import { House } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class BulletController extends cc.Component {

    @property(cc.Collider)
    collider: cc.Collider = null;
    @property(Number)
    timeMove: number = 200;

    damage: number = 0;
    boolIsHitted: boolean = false;
    moveAction: cc.Action = null;
    dirMove: cc.Vec2 = cc.Vec2.ZERO;
    bulletType: BulletType = BulletType.NONE;
    initPos: cc.Vec2 = null;

    target: Character = null;

    Init(dirMove: cc.Vec2, type: BulletType, damage: number) {
        this.collider.enabled = true;
        this.target = null;
        this.moveAction = null;
        this.dirMove = dirMove;
        this.damage = damage;
        this.bulletType = type;
        var pos = Utility.ConvertPosToHigherParentByNode(this.node.parent.parent, this.node.parent, this.node);
        this.initPos = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent, this.node.parent.parent, pos);
        //after init 
        this.BulletMove();
    }
    BulletMove() {
        const direction = this.dirMove;
        // Calculate duration based on distance and speed
        const distance = Utility.Distance(direction.mul(1000), this.initPos);
        const duration = distance / this.timeMove;

        // Create a move action
        const moveAction = cc.moveBy(duration, direction.mul(1000));

        // Callback to destroy the bullet after reaching the target
        const callback = cc.callFunc(() => {
            this.node.destroy();
        });

        // Run actions sequentially: move towards the target, then destroy the bullet
        this.node.runAction(cc.sequence(moveAction, callback));

    }

    ReuseBullet() {
        this.boolIsHitted = false;
        if (this.moveAction != null)
            this.node.stopAction(this.moveAction);
        this.moveAction = null;
        this.dirMove = cc.Vec2.ZERO;
        PoolManager.Instance(PoolManager).RecycleBullet(this.bulletType, this.node);
    }

    OnHit(target: Character) {
        target.OnHit(this.damage);
        this.ReuseBullet();
    }
    OnHitHouse(target: House) {
        target.OnHit(10);
        this.ReuseBullet();
    }
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group == "Enemy") {
            this.collider.enabled = false;
            if (this.boolIsHitted) return;
            this.boolIsHitted = true;
            if (this.target == null) {
                this.target = other.node.getComponent(Character);
                this.OnHit(this.target);
            }
        }
        if (other.node.group == "HouseEnemy") {
            this.collider.enabled = false;
            if (this.boolIsHitted) return;
            this.boolIsHitted = true;
            this.OnHitHouse(other.node.getComponent(House));
        }

    }

}
