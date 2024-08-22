// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CoinController from "../Coin/CoinController";
import Global, { eventDispatcher } from "../Utility/Global";
import PoolManager from "../Utility/Pool/PoolManager";
import Utility from "../Utility/Utility";
import { Character } from "./Character";
import HpHouse from "./HpHouse";

const { ccclass, property } = cc._decorator;

export enum TypeWarior {
    C1,
    C2,
    C3,
    E1,
    E2,
    E3,
}

@ccclass

export abstract class House extends cc.Component {

    @property(HpHouse)
    hp: HpHouse = null;

    @property(cc.Animation)
    body: cc.Animation = null;

    @property(cc.Node)
    fx: cc.Node = null;

    @property({ type: cc.AudioClip })
    sound: cc.AudioClip = null;

    wariorList: Character[] = [];
    random: number = 0;
    // onLoad () {}

    boolIsDestroyed: boolean = false;
    start() {
        eventDispatcher.emit(Global.RemoveFromList, this.RemoveFromList, this);
        this.hp.Init();
    }
    SpawnWarior(type: TypeWarior) {
        this.SpawnWariorByType(type);
        this.SortByPosition();
    }
    RandomY() {
        this.random += 1;
        this.random %= 2;
        if (this.random % 2 == 0) {
            return Utility.RandomRangeInteger(-70, 0);
        } else {
            return Utility.RandomRangeInteger(10, 30);

        }
    }
    SpawnWariorByType(type: TypeWarior) {
        // spawn character use simple pool
        let warior = cc.instantiate(PoolManager.Instance(PoolManager).SpawnerWariorByType(type));

        //PoolManager.Instance(PoolManager).SpawnerWarior(type);
        warior.parent = Global.CharacterHolder;
        warior.setPosition(this.node.x, this.node.y + this.RandomY());
        warior.getComponent(Character).Init(type);
        this.wariorList.push(warior.getComponent(Character));
    }
    SortByPosition() {
        this.wariorList.sort((a, b) => {
            const xA = a.node.position.x;
            const xB = b.node.position.x;
            return xB - xA;
            // Get the x positions of nodes a and b
            // Compare x positions
            // If you want the node with the bigger x to have the highest index, return xB - xA
            // If you want the node with the smaller x to have the highest index, return xA - xB

        });

    }
    UpdateToGlobal() {
        Global.characterList = this.wariorList;
    }

    UpdateAllWarior() {

        this.wariorList.forEach(element => {
            element.OnUpdate();
        });
    }
    boolCanHitTheHouse: Boolean = false;
    update(dt) {
        if (Global.endGame) return;
        if (this.boolIsDestroyed) return;
        this.boolCanHitTheHouse = this.CanHitTheHouse();
        this.SortByPosition();
        this.UpdateAllWarior();
        this.UpdateToGlobal();
    }

    SpawnCoin() {
        var coin = PoolManager.Instance(PoolManager).SpawnerCoin(cc.Canvas.instance.node);
        coin.setPosition(this.node.getPosition());
        coin.getComponent(CoinController).InstantiateCoin();
    }
    OnHit(damage: number = 10) {
        if (!this.boolCanHitTheHouse) return;
        this.hp.OnDecreaseHp(damage);
        if (this.hp.RunOutHp()) {
            this.OnBreakHouse();
            return;
        }
    }
    CanHitTheHouse() {
        if (this.CheckDieAll) return true;
        this.wariorList.forEach(element => {
            if (!element.isDie && element.node.x > this.node.x)
                return true;
        });
        return false;
    }
    countEnemy: number = 0;
    CheckDieAll() {
        this.countEnemy = this.wariorList.length;
        this.wariorList.forEach(element => {
            if (element.isDie) {
                this.countEnemy -= 1;
            }
        });
        return this.countEnemy == 0;

    }
    OnBreakHouse() {
        Utility.PlaySound(this.sound, false);
        eventDispatcher.emit(Global.StopGame);
        this.body.play("Break");
        this.fx.active = true;
        this.hp.node.active = false;
        Global.endGame = true;
        this.boolIsDestroyed = true;
    }

    RemoveFromList(warior: Character) {
        Global.characterList.filter(item => item !== warior);
        this.wariorList.filter(item => item !== warior);
    }



}


