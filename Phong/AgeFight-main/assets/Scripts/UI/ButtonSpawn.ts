// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { TypeWarior } from "../Gameplay/House";
import AdsManager from "../Utility/AdsManager";
import GameManager from "../Utility/GameManager";
import Global, { eventDispatcher } from "../Utility/Global";
import Utility from "../Utility/Utility";
import TextFloating from "./TextFloating";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonSpawn extends cc.Component {

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(Number)
    priceGold: number = 0;

    @property(Number)
    priceFood: number = 0;

    @property(cc.Node)
    light: cc.Node = null;

    @property(cc.Node)
    lockIcon: cc.Node = null;

    @property(cc.Node)
    blurImage: cc.Node = null;

    @property(TextFloating)
    textPriceFloating: TextFloating = null;

    @property(cc.Node)
    iconFood: cc.Node = null;

    @property(cc.Node)
    iconGold: cc.Node = null;

    @property(cc.Label)
    priceText: cc.Label = null;

    @property(Boolean)
    unlockedButton: Boolean = false;

    @property({ type: TypeWarior })
    type: TypeWarior = TypeWarior.C1;

    @property(cc.Node)
    redline: cc.Node = null;

    @property(cc.Node)
    textUnlock: cc.Node = null;

    @property(Number)
    numberToStore: number = 0;

    boolCanClick: boolean = true;
    doubleClick: boolean = false;

    protected onLoad(): void {
        const button = this.node.getComponent(cc.Button);

        button.node.on(cc.Node.EventType.TOUCH_END, this.EndClick, this);
    }

    CountToStore() {
        this.numberToStore -= 1;
        if (this.numberToStore <= 0) {
            this.numberToStore = 0;
            AdsManager.Instance(AdsManager).installHandle();
        }
    }
    EndClick() {
        // if (!this.boolStartCanClick) return;
        this.scheduleOnce(() => {
            Global.clickButtonSpawnWarior = false;
        }, 0.3);
    }
    FirstClick() {
        if (!Global.startTouch) {
            this.redline.active = false;
            this.textUnlock.active = false;
            Global.startTouch = true;
            eventDispatcher.emit(Global.StartGame);
        }
    }
    OnClick() {
        GameManager.Instance(GameManager).ClickToCTA();
        // this.CountToStore();
        // if (Global.endGame) return;
        // Global.clickButtonSpawnWarior = true;
        // this.FirstClick();
        // if (!this.unlockedButton) {
        //     this.UnlockButton();
        // } else {
        //     this.FirstClick();
        //     if (!this.boolCanClick) return;
        //     this.SpawnWarior();
        // }

    }
    UnlockButton() {
        if (Global.totalGold >= this.priceGold) {
            Global.totalGold -= this.priceGold;
            Utility.PlaySound(Global.Click, false);

            eventDispatcher.emit(Global.UpdateCoin, -this.priceGold);
            this.lockIcon.active = false;
            this.blurImage.active = false;
            this.light.active = true;
            this.unlockedButton = true;
            this.iconFood.active = true;
            this.iconGold.active = false;
            this.priceText.string = this.priceFood.toString();
            this.PlayAnim("Default");
            this.scheduleOnce(() => {
                Utility.PlaySound(Global.Unlock, false);
            }, 0.15);
        }
    }
    SpawnWarior() {
        if (Global.totalFood >= this.priceFood) {
            Global.totalFood -= this.priceFood;
            Utility.PlaySound(Global.Click, false);
            this.ActiveTextFloating();
            this.PlayAnim("Click");
            this.scheduleOnce(() => {
                eventDispatcher.emit(Global.CheckPrice);
            }, 0.05);
            eventDispatcher.emit(Global.SpawnWarior, this.type);

        }
    }

    ActiveTextFloating() {
        this.textPriceFloating.Floating();
    }

    CheckPriceFood() {
        //   cc.log("CheckPriceGold");
        if (Global.totalFood < this.priceFood) {
            this.boolCanClick = false;
        } else {
            this.boolCanClick = true;
        }
    }

    currentStringAnim: string = "";
    lastStringAnim: string = "";

    PlayAnim(stringAnim: string) {
        this.lastStringAnim = this.currentStringAnim;
        if (this.currentStringAnim != stringAnim) {
            this.currentStringAnim = stringAnim;
            this.anim.play(stringAnim, 0);

        }
    }
    // onLoad () {}

    start() {
        eventDispatcher.on(Global.CheckPrice, this.CheckPriceFood, this);
    }

    // update(dt) {
    // }
}
