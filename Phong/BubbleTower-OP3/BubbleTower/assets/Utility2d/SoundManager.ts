// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "./Constant";
import Global from "./Global";
import Singleton from "./Singleton";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundManager extends Singleton<SoundManager> {


    @property(cc.AudioClip)
    bound: cc.AudioClip = null;

    @property(cc.AudioClip)
    hit: cc.AudioClip = null;

    @property(cc.AudioClip)
    shoot: cc.AudioClip = null;

    @property(cc.AudioClip)
    release: cc.AudioClip = null;

    @property(cc.AudioClip)
    bubble: cc.AudioClip = null;

    @property(cc.AudioClip)
    cash: cc.AudioClip = null;

    @property(cc.AudioClip)
    electric: cc.AudioClip = null;

    @property(cc.AudioClip)
    bomb: cc.AudioClip = null;

    @property(cc.AudioSource)
    theme: cc.AudioSource = null;

    @property(cc.AudioSource)
    money: cc.AudioSource = null

    constructor() {
        super();
        SoundManager._instance = this;
    }

    protected onLoad(): void {
        Global.Bound = this.bound;
        Global.Shoot = this.shoot;
        Global.Hit = this.hit;
        Global.Release = this.release;
        Global.Explosion = this.bubble;
        Global.Electric = this.electric;
        Global.Cash = this.cash;
        Global.Bomb = this.bomb;
    }

    StopAllSound() {
    }

    protected update(dt: number): void {
        if (Constants.ironSource.SoundState) {
            this.theme.volume = 1;
            this.money.volume = 1;
        } else {
            this.theme.volume = 0;
            this.money.volume = 0;

        }
    }
}
