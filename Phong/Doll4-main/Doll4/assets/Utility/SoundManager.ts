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
    moveBlock: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    matchBlock: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    girl: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    clickSound: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    amazing: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    suprise: cc.AudioClip = null;

    constructor() {
        super();
        SoundManager._instance = this;
    }

    protected start(): void {
        Global.clickSound = this.clickSound;
        Global.matchBlock = this.matchBlock;
        Global.moveBlock = this.moveBlock;
        Global.girl = this.girl;
        Global.amazing = this.amazing;
        Global.suprise = this.suprise;
    }


    protected update(dt: number): void {
        if (Constants.ironSource.SoundState) {
          //  this.theme.volume = 0.5;
        } else {
           // this.theme.volume = 0;

        }
    }
    StopAllSound() {
    }
}
