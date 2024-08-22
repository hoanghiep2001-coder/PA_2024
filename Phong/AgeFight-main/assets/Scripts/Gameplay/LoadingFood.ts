// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingFood extends cc.Component {

    @property(cc.Label)
    textFood: cc.Label = null;

    @property(cc.Sprite)
    loading: cc.Sprite = null;

    currentFood: number = 5;

    tween: cc.Tween = null;
    Loading() {
        this.tween = cc.tween(this.loading)
            .to(0.75, { fillStart: 0 })
            .call(() => {
                this.currentFood += 1;
                Global.totalFood = this.currentFood;
                this.textFood.string = this.currentFood.toString();
                this.Reset();
            })
            //.repeatForever()
            .start();
    }
    Reset() {
        this.loading.fillStart = -1;
        this.Loading();
    }
    DescreaseCurrentFood() {
        this.currentFood = Global.totalFood;
        this.textFood.string = this.currentFood.toString();
    }

    StopLoading() {
        if (this.tween)
            this.tween.stop();
        this.loading.fillStart = -1;
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        eventDispatcher.on(Global.StopGame, this.StopLoading, this);
        eventDispatcher.on(Global.StartGame, this.Loading, this);
        eventDispatcher.on(Global.CheckPrice, this.DescreaseCurrentFood, this);
    }

    start() {
        this.currentFood = Global.totalFood;
        this.textFood.string = this.currentFood.toString();
    }

    // update (dt) {}
}
