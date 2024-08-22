/** @format */

import Singleton from "../Singleton";
import Utility from "../Utility";
import BasePool from "./BasePool";

const { ccclass, property } = cc._decorator;

export enum BulletEnemyType {
  SPITTER,
  BUGSPITTERBULLET,
  NONE,
}

export enum BulletType {
  NONE,
  PISTOL,
  REVOLVER,
  MAC10,
  DE,
  UMP45,
  SHORTGUN,
  M4A1,
  P90,
  AK47,
  SG1,
  M249,
  AWP,
  GLATING_GUN,
  BOMBTHROWER,
  LAZERGUN,
  BERRETT,
  BAZOOKA,
  PHOTONGUN,
  PLASMAGUN,
}
export enum EnemyType {
  ZOMBIE,
  TANKER,
  SPIDER,
  RAT,
  FAT,
  SPRITTER,
  DOG,
  BUG,
  BUG1,
  HELICOPTER,
}
@ccclass("Bullet")
export class Bullet {
  @property(BasePool)
  Pool: BasePool = null;
  @property({ type: cc.Enum(BulletType) })
  public Type: BulletType = BulletType.PISTOL;
}
@ccclass("BulletEnemy")
export class BulletEnemy {
  @property(BasePool)
  Pool: BasePool = null;
  @property({ type: cc.Enum(BulletEnemyType) })
  public Type: BulletEnemyType = BulletEnemyType.NONE;
}
@ccclass("Enemy")
export class Enemy {
  @property(BasePool)
  Pool: BasePool = null;
  @property({ type: cc.Enum(EnemyType) })
  public Type: EnemyType = EnemyType.ZOMBIE;
}
@ccclass("PoolManager")
export default class PoolManager extends Singleton<PoolManager> {
  @property(Bullet)
  arrayBullets: Bullet[] = [];

  @property(BulletEnemy)
  arrayBulletsEnemy: BulletEnemy[] = [];

  @property(Enemy)
  arrayEnemy: Enemy[] = [];

  @property(BasePool)
  item: BasePool = null;

  constructor() {
    super();
    PoolManager._instance = this;
  }

  SpawnerEnemy(): cc.Node {
    let i = Utility.RandomRangeInteger(0, this.arrayEnemy.length - 1);
    return this.arrayEnemy[i].Pool.createObject(this.node);

    // for (let i = 0; i < this.arrayEnemy.length; ++i) {
    //   if (type == this.arrayEnemy[i].Type) {
    //     return this.arrayEnemy[i].Pool.createObject(this.node);
    //   }
    // }
    // return null;
  }
  RecycleEnemy(type: EnemyType, node: cc.Node) {
    for (let i = 0; i < this.arrayEnemy.length; ++i)
      if (type == this.arrayEnemy[i].Type) {
        this.arrayEnemy[i].Pool.RecycleObject(node);
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

  SpawnerBulletEnemy(type: BulletEnemyType): cc.Node {
    for (let i = 0; i < this.arrayBulletsEnemy.length; ++i) {
      if (type == this.arrayBulletsEnemy[i].Type) {
        return this.arrayBulletsEnemy[i].Pool.createObject(this.node);
      }
    }
    return null;
  }
  RecycleBulletEnemy(type: BulletEnemyType, node: cc.Node) {
    for (let i = 0; i < this.arrayBulletsEnemy.length; ++i)
      if (type == this.arrayBulletsEnemy[i].Type) {
        this.arrayBulletsEnemy[i].Pool.RecycleObject(node);
      }
  }
}