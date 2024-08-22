// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TextFloating extends cc.Component {

    @property(cc.Animation)
    anim: cc.Animation = null;

    currentAnimString: string = "";
    boolStillSetFloatingAnim: boolean = true;

    Floating() {
        this.boolStillSetFloatingAnim = true;
        this.unscheduleAllCallbacks();
        if (this.currentAnimString != "Floating") {
            this.currentAnimString = "Floating";
            this.anim.play(this.currentAnimString, 0);

        }
        this.scheduleOnce(() => { this.boolStillSetFloatingAnim = false; }, 0.5);
    }

    FadingText() {
        if (this.currentAnimString != "FadeOut") {
            this.currentAnimString = "FadeOut";
            this.anim.play(this.currentAnimString, 0);
        }
    }

    // onLoad () {}

    update(dt) {
        if (!Global.startTouch) return;
        if (!this.boolStillSetFloatingAnim) {
            this.FadingText();
        }
    }
}
