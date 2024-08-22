// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "./Global";
import Singleton from "./Singleton";
import Utility from "./Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundManager extends Singleton<SoundManager> {

    @property({ type: cc.AudioSource })
    theme: cc.AudioSource = null;

    @property({ type: cc.AudioSource })
    drawSound: cc.AudioSource = null;

    @property({ type: cc.AudioClip })
    loseSound: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    catSound: cc.AudioClip = null;


    constructor() {
        super();
        SoundManager._instance = this;
    }

    protected start(): void {
        Global.lose = this.loseSound;
        Global.catSound = this.catSound;
    }

    StopAllSound() {
        this.theme.stop();
        this.drawSound.stop();
    }
}
