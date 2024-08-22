/** @format */

import Singleton from "../Singleton";
import Utility from "../Utility";
import BasePool from "./BasePool";

const { ccclass, property } = cc._decorator;


export enum BubbleType {
  NONE,
  BLUE,
  RED,
  CYAN,
  YELLOW,
  PURPLE,
  GREEN,
}

@ccclass("Bubble")
export class Bubble {
  @property(BasePool)
  Pool: BasePool = null;
  @property({ type: cc.Enum(BubbleType) })
  public Type: BubbleType = BubbleType.BLUE;
}
@ccclass("BubbleBullet")
export class BubbleBullet {
  @property(BasePool)
  Pool: BasePool = null;
  @property({ type: cc.Enum(BubbleType) })
  public Type: BubbleType = BubbleType.NONE;
}
@ccclass("PoolManager")
export default class PoolManager extends Singleton<PoolManager> {
  @property(Bubble)
  arrayBubbles: Bubble[] = [];

  @property(BubbleBullet)
  arrayBubbleBullets: BubbleBullet[] = [];

  @property(BasePool)
  fxSmoke: BasePool = null;

  constructor() {
    super();
    PoolManager._instance = this;
  }

  SpawnerBubbleBullet(type: BubbleType): cc.Node {
    for (let i = 0; i < this.arrayBubbleBullets.length; ++i) {
      if (type == this.arrayBubbleBullets[i].Type) {
        return this.arrayBubbleBullets[i].Pool.createObject(this.node);
      }
    }
    return null;
  }
  RecycleBubbleBullet(type: BubbleType, node: cc.Node) {
    for (let i = 0; i < this.arrayBubbleBullets.length; ++i)
      if (type == this.arrayBubbleBullets[i].Type) {
        this.arrayBubbleBullets[i].Pool.RecycleObject(node);
      }
  }

  SpawnerBubble(type: BubbleType, node: cc.Node): cc.Node {
    for (let i = 0; i < this.arrayBubbles.length; ++i) {
      if (type == this.arrayBubbles[i].Type) {
        return this.arrayBubbles[i].Pool.createObject(node);
      }
    }
    return null;
  }
  RecycleBubble(type: BubbleType, node: cc.Node) {
    for (let i = 0; i < this.arrayBubbles.length; ++i)
      if (type == this.arrayBubbles[i].Type) {
        this.arrayBubbles[i].Pool.RecycleObject(node);
      }
  }

  SpawnerFxSmoke(node: cc.Node): cc.Node {
    return this.fxSmoke.createObject(node);
  }
  RecycleFxSmoke(node: cc.Node) {
    this.fxSmoke.RecycleObject(node);
  }

}