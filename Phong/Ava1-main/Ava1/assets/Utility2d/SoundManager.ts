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


    @property(cc.AudioSource)
    theme: cc.AudioSource = null;

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    @property(cc.AudioClip)
    open: cc.AudioClip = null;


    constructor() {
        super();
        SoundManager._instance = this;
    }

    protected onLoad(): void {
        Global.Click = this.click;
        Global.Open = this.open;
    }

    StopAllSound() {
    }

    protected update(dt: number): void {
        if (Constants.ironSource.SoundState) {
            this.theme.volume = 1;
        } else {
            this.theme.volume = 0;
        }
    }
}
