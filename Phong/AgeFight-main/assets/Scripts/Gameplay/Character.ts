// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility/Global";
import PoolManager from "../Utility/Pool/PoolManager";
import Utility from "../Utility/Utility";
import { Attacker } from "./Attacker";
import { House, TypeWarior } from "./House";
import HpController from "./HpController";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class Character extends cc.Component {

    @property(HpController)
    hpController: HpController = null;

    @property(Attacker)
    attacker: Attacker = null;

    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    @property(sp.Skeleton)
    animDie: sp.Skeleton = null;

    @property(cc.Collider)
    collider: cc.Collider = null;

    @property(Number)
    speedMove: number = 0;

    @property(Number)
    rangeToTrase: number = 0;

    @property(Number)
    rangeToAttack: number = 0;

    @property(Number)
    rateAttack: number = 0;

    @property(Boolean)
    isCharacter: boolean = false;

    target: Character = null;
    targetHouse: House = null;
    currentStringAnim: string = Global.Run;
    isDie: boolean = false;
    posTarget: cc.Vec2 = cc.Vec2.ZERO;
    type: TypeWarior = TypeWarior.C1;
    // LIFE-CYCLE CALLBACKS:


    Init(type: TypeWarior) {
        this.type = type;
        this.collider.enabled = true;
        this.target = null;
        this.posTarget = null;
        this.newPos = null;
        if (this.isCharacter) {
            this.targetHouse = Global.enemyHouse;
        } else {
            this.targetHouse = Global.characterHouse;
        }
        this.animDie.node.active = false;
        this.skeleton.node.active = true;
        this.animDie.node.scale = 0.5;
        this.UpdateAnim("Run", true);
        this.hpController.Init();
        this.boolCanAttach = true;
        this.attackTime = this.rateAttack;
        this.scheduleOnce(() => {
            this.isDie = false;
        }, 0.25);
        this.speedMove = 100;
        this.nodePos = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, this.node.parent, this.node);
    }
    targetPos: cc.Vec2 = null;
    nodePos: cc.Vec2 = null;
    dirToTarget: cc.Vec2 = null;
    newPos: cc.Vec2 = null;
    OnUpdate() {
        if (this.isDie) return;
        this.UpdateIndexLayer();
        this.GetTarget();
        this.nodePos = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, this.node.parent, this.node);
        let posHouse = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, this.targetHouse.node.parent, this.targetHouse.node);
        //posHouse.x = posHouse.x - this.targetHouse.body.node.position.x;
        if (Utility.Distance(posHouse, this.nodePos) <= this.rangeToAttack) {
            if (!this.targetHouse.boolIsDestroyed) {
                this.target = null;
                this.AttackTargetInRange(true);
                return;

            }
        }
        if (this.target == null) {
            //  cc.log(this.node.name + " move forward");
            this.MoveFoward();
        } else {
            if (this.target.isDie) {
                this.target = null;
                return;
            }
            this.targetPos = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, this.target.node.parent, this.target.node);
            this.dirToTarget = this.targetPos.sub(this.nodePos).normalize();
            this.newPos = this.nodePos.add(this.dirToTarget.multiplyScalar(this.speedMove * cc.director.getDeltaTime()));
            if (Utility.Distance(this.nodePos, this.targetPos) > this.rangeToTrase) {
                // cc.log(1);
                //  cc.log(this.node.name + " move forward has target");

                this.MoveFoward();
            } else {
                if (Utility.Distance(this.nodePos, this.targetPos) <= this.rangeToAttack) {
                    //  cc.log(2);
                    //    cc.log(this.node.name + " trase to target");

                    this.AttackTargetInRange();
                } else {

                    //  cc.log(3);
                    this.TraseToTarget();
                }
            }

        }
    }

    MoveFoward() {
        this.UpdateAnim("Run", true);
        var dir = this.isCharacter == true ? 1 : -1;
        let nodeX = this.nodePos.x + dir * this.speedMove * cc.director.getDeltaTime();
        this.node.setPosition(nodeX, this.nodePos.y);

    }
    TraseToTarget() {
        this.UpdateAnim("Run", true);
        this.node.setPosition(this.newPos);
    }

    GetTarget() {
        var nodePos = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, this.node.parent, this.node);
        for (let i = 0; i < Global.enemyList.length; i++) {
            if (Global.enemyList[i].isDie == true) {
                continue;
            } else {
                var distance = Utility.Distance(nodePos,
                    Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, Global.enemyList[i].node.parent, Global.enemyList[i].node));
                if (distance < this.rangeToTrase) {
                    this.target = Global.enemyList[i];
                    //cc.log(this.node.name + " get target " + this.target.node.name);
                    return;
                }
            }
        }
        this.target = null;
    }



    boolCanAttach: boolean = true;
    attackTime: number = 0;
    AttackTargetInRange(attackToHouse: boolean = false) {
        if (!this.boolCanAttach) return;
        //   if (this.attackTime >= this.rateAttack) {
        this.boolCanAttach = false;
        //this.target.hpController.node.active = true;
        this.UpdateAnim("Attack", true);
        if (attackToHouse) {
            if (this.targetHouse != null)
                this.attacker.AttackToHouse(this.targetHouse);
        } else {
            if (this.target != null)
                this.attacker.Attack(this.target);

        }
        this.scheduleOnce(() => {
            this.UpdateAnim("Idle", true);
        }, 0.8);
        this.scheduleOnce(() => {
            this.boolCanAttach = true;
        }, this.rateAttack);
        // }

    }
    OnHit(damage: number) {
        this.hpController.OnDecreaseHp(damage);
        if (this.hpController.RunOutHp()) {
            this.OnDie();
        }
    }

    boolIsRespawn: boolean = false;
    OnDie() {
        if (!this.isDie) {
            this.targetHouse = null;
            this.target = null;
            this.collider.enabled = false;
            this.hpController.node.active = false;
            this.isDie = true;
            this.attacker.StopAllAttack();
            this.SpawnCoin();
            this.UpdateAnim(Global.Die, false);
            this.skeleton.node.active = false;
            this.DespawnCharacter();
        }
    }

    UpdateAnim(stringAnim: string, loop: boolean) {

        if (stringAnim != this.currentStringAnim) {
            this.skeleton.setMix(this.currentStringAnim, stringAnim, 0.1);
            this.currentStringAnim = stringAnim;
            this.skeleton.setAnimation(0, stringAnim, loop);
        }
    }

    UpdateIndexLayer() {
        let nos = Utility.ConvertPosToHigherParentByNode(this.node.parent.parent, this.node.parent, this.node);
        this.node.setSiblingIndex(Math.abs(Utility.ConvertPosToParentByVector(cc.Canvas.instance.node, this.node.parent.parent, nos).y));
    }

    DespawnCharacter() {
        this.boolIsRespawn = true;
        //  eventDispatcher.emit(Global.RemoveFromList, this);
        var animDie = PoolManager.Instance(PoolManager).SpawnerAnimDie(Global.DieImageHolder);
        animDie.setPosition(this.node.getPosition());

        var image = PoolManager.Instance(PoolManager).SpawnerDieImage(Global.DieImageHolder);
        image.setPosition(this.node.getPosition());
        //this.node.destroy();
        PoolManager.Instance(PoolManager).RecycleWarior(this.type, this.node);
    }
    SpawnCoin() {

    }
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group == "BulletEnemy") {
            this.hpController.node.active = true;
        }

    }

}
