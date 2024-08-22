// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CoinController from "../Coin/CoinController";
import Global from "../Utility/Global";
import PoolManager from "../Utility/Pool/PoolManager";
import Utility from "../Utility/Utility";
import { Character } from "./Character";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyCharacter extends Character {
    override GetTarget() {
        var nodePos = Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, this.node.parent, this.node);
        for (let i = 0; i < Global.characterList.length; i++) {
            if (Global.characterList[i].isDie) {
                continue;
            } else {
                var distance = Utility.Distance(nodePos,
                    Utility.ConvertPosToHigherParentByNode(cc.Canvas.instance.node, Global.characterList[i].node.parent, Global.characterList[i].node));
                if (distance < this.rangeToTrase) {
                    this.target = Global.characterList[i];
                    //  cc.log(this.node.name + " get target " + this.target.node.name);
                    return;
                }
            }
        }
        this.target = null;
    }

    override  SpawnCoin() {
        var coin = PoolManager.Instance(PoolManager).SpawnerCoin(cc.Canvas.instance.node);
        coin.setPosition(this.node.getPosition());
        coin.getComponent(CoinController).InstantiateCoin();
    }
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group == "Bullet") {
            this.hpController.node.active = true;
        }
    }

    override DespawnCharacter() {
        super.DespawnCharacter();
        Global.countEnemyDie += 1;
    }
    // onLoad () {}



    // update (dt) {}
}
