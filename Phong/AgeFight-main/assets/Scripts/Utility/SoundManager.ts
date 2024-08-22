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

    @property({ type: cc.AudioSource })
    theme: cc.AudioSource = null;

    @property({ type: cc.AudioClip })
    win: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    lose: cc.AudioClip = null;


    @property({ type: cc.AudioClip })
    click: cc.AudioClip = null;


    @property({ type: cc.AudioClip })
    coin: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    unlock: cc.AudioClip = null;

    constructor() {
        super();
        SoundManager._instance = this;
    }

    protected start(): void {
        Global.Win = this.win;
        Global.Lose = this.lose;
        Global.Coin = this.coin;
        Global.Click = this.click;
        Global.Unlock = this.unlock;

    }
    protected update(dt: number): void {
        if (Constants.ironSource.SoundState) {
            this.theme.volume = 0.5;
        } else {
            this.theme.volume = 0;

        }
    }
    StopAllSound() {
        this.theme.stop();
    }
}
