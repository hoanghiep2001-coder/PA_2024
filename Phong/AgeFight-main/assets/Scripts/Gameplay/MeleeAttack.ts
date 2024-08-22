// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Attacker } from "./Attacker";
import { Character } from "./Character";
import { House } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MeleeAttack extends Attacker {
    FindHouse() {
        throw new Error("Method not implemented.");
    }
  override  AttackToHouse(targetHouse: House) {
        if (targetHouse == null) return;
        this.scheduleOnce(() => {
            targetHouse.OnHit(10);
            this.PlayAttackSound();
        }, this.delayEmitAttack);
    }

    @property(Number)
    delayEmitAttack: number = 0;

    override Attack(target: Character): void {
        if (target == null) return;
        this.scheduleOnce(() => {
            target.hpController.node.active= true;
            target.OnHit(this.damage);
            this.PlayAttackSound();
        }, this.delayEmitAttack);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    // update (dt) {}
}
