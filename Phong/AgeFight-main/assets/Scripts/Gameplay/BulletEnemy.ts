// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { BulletController } from "./BulletController";
import { Character } from "./Character";
import { House } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletEnemy extends BulletController {

    override  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group == "Character") {
            this.collider.enabled = false;
            if (this.boolIsHitted) return;
            this.boolIsHitted = true;
            if (this.target == null) {
                this.target = other.node.getComponent(Character);
                this.OnHit(this.target);

            }
        }
        if (other.node.group == "House") {
            this.collider.enabled = false;
            if (this.boolIsHitted) return;
            this.boolIsHitted = true;
            this.OnHitHouse(other.node.getComponent(House));
        }

    }

    // update (dt) {}
}
