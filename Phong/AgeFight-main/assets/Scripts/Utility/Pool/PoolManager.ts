/** @format */

import { Character } from "../../Gameplay/Character";
import { TypeWarior } from "../../Gameplay/House";
import Singleton from "../Singleton";
import Utility from "../Utility";
import BasePool from "./BasePool";

const { ccclass, property } = cc._decorator;

export enum BulletType {
    NONE,
    Rock,
    Bullet,
    TankBullet
}
@ccclass("Warior")
export class Warior {
    @property(BasePool)
    Pool: BasePool = null;
    @property({ type: cc.Enum(TypeWarior) })
    public Type: TypeWarior = TypeWarior.C1;
}

@ccclass("Bullet")
export class Bullet {
    @property(BasePool)
    Pool: BasePool = null;
    @property({ type: cc.Enum(BulletType) })
    public Type: BulletType = BulletType.Rock;
}
@ccclass("PoolManager")
export default class PoolManager extends Singleton<PoolManager> {
    @property(Bullet)
    arrayBullets: Bullet[] = [];

    @property(Warior)
    arrayCharacter: Warior[] = [];

    @property(BasePool)
    coin: BasePool = null;

    @property(BasePool)
    dieImage: BasePool = null;

    @property(BasePool)
    animDie: BasePool = null;

    constructor() {
        super();
        PoolManager._instance = this;
    }

    SpawnerWariorByType(type: TypeWarior): cc.Prefab {
        // let i = Utility.RandomRangeInteger(0, this.arrayCharacter.length - 1);
        // return this.arrayCharacter[i].Pool.createObject(this.node);
        for (let i = 0; i < this.arrayCharacter.length; ++i) {
            if (type == this.arrayCharacter[i].Type) {
                return this.arrayCharacter[i].Pool.Prefab;
            }
        }
        return null;
    }

    SpawnerWarior(type: TypeWarior): cc.Node {
        // let i = Utility.RandomRangeInteger(0, this.arrayCharacter.length - 1);
        // return this.arrayCharacter[i].Pool.createObject(this.node);
        for (let i = 0; i < this.arrayCharacter.length; ++i) {
            if (type == this.arrayCharacter[i].Type) {
                return this.arrayCharacter[i].Pool.createObject(this.node);
            }
        }
        return null;
    }
    RecycleWarior(type: TypeWarior, node: cc.Node) {
        for (let i = 0; i < this.arrayCharacter.length; ++i)
            if (type == this.arrayCharacter[i].Type) {
                this.arrayCharacter[i].Pool.RecycleObject(node);
            }
    }

    SpawnerBullet(type: BulletType): cc.Node {
        for (let i = 0; i < this.arrayBullets.length; ++i) {
            if (type == this.arrayBullets[i].Type) {
                return this.arrayBullets[i].Pool.createObject(this.node);
            }
        }
        return null;
    }
    RecycleBullet(type: BulletType, node: cc.Node) {
        for (let i = 0; i < this.arrayBullets.length; ++i)
            if (type == this.arrayBullets[i].Type) {
                this.arrayBullets[i].Pool.RecycleObject(node);
            }
    }
    SpawnerCoin(node: cc.Node): cc.Node {
        return this.coin.createObject(node);

    }

    RecycleCoin(node: cc.Node) {
        this.coin.RecycleObject(node);
    }

    SpawnerDieImage(node: cc.Node): cc.Node {
        return this.dieImage.createObject(node);

    }

    RecycleDieImage(node: cc.Node) {
        this.dieImage.RecycleObject(node);
    }

    SpawnerAnimDie(node: cc.Node): cc.Node {
        return this.animDie.createObject(node);

    }

    RecycleAnimDie(node: cc.Node) {
        this.animDie.RecycleObject(node);
    }
}