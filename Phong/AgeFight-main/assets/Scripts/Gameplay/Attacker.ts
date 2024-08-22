// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Utility from "../Utility/Utility";
import { Character } from "./Character";
import { House } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class Attacker extends cc.Component {

    @property({ type: cc.AudioClip })
    attackSound: cc.AudioClip = null;

    @property(Number)
    damage: number = 0;

    @property(Number)
    delayEmitAttack: number = 0;

    abstract Attack(target: Character);
    abstract AttackToHouse(targetHouse: House);

    StopAllAttack() {
        this.unscheduleAllCallbacks();
    }

    PlayAttackSound() {
        if (this.attackSound == null) return;
        Utility.PlaySound(this.attackSound, false);
    }

   abstract FindHouse();
}
