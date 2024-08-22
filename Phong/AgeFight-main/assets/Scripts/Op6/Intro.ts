// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";
import Utility from "../Utility/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Intro extends cc.Component {

    @property(cc.Label)
    coinText: cc.Label = null;

    @property(cc.Node)
    guideClick1: cc.Node = null;

    @property(cc.Node)
    guideClick2: cc.Node = null;

    @property(cc.Node)
    guideClick3: cc.Node = null;

    @property(cc.Sprite)
    tab2: cc.Sprite = null;

    @property(cc.Sprite)
    tab3: cc.Sprite = null;

    @property(cc.Node)
    buttonBuyThuCuoi: cc.Node = null;

    @property(cc.Node)
    buttonBuyGay: cc.Node = null;

    @property(cc.Button)
    buttonStart: cc.Button = null;

    @property(cc.SpriteFrame)
    buttonStartEnable: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    tabEnable: cc.SpriteFrame = null;

    @property(cc.Node)
    holder: cc.Node = null;


    currentCoin = 540;
    boolBuyGay: boolean = false;
    boolBuyThuCuoi: boolean = false;
    BuyGay() {

        if (this.boolBuyGay) return;
        this.boolBuyGay = true;

        Utility.PlaySound(Global.Click,false);

        this.tab2.spriteFrame = this.tabEnable;
        this.scheduleOnce(() => {
            this.buttonBuyGay.active = false;

        }, 0.2);
        this.guideClick1.active = false;

        this.guideClick2.active = true;

        this.currentCoin -= 100;
        this.coinText.string = this.currentCoin.toString();
        this.EnableButtonStart();
    }
    BuyThuCuoi() {
        if (this.boolBuyThuCuoi) return;
        this.boolBuyThuCuoi = true;
        Utility.PlaySound(Global.Click,false);
        this.tab3.spriteFrame = this.tabEnable;


        this.scheduleOnce(() => {
            this.buttonBuyThuCuoi.active = false;

        }, 0.2);
        this.guideClick2.active = false;
        this.currentCoin -= 150;
        this.coinText.string = this.currentCoin.toString();

        this.EnableButtonStart();

    }
    EnableButtonStart() {
        if (this.boolBuyGay && this.boolBuyThuCuoi) {
            this.guideClick3.active = true;
            this.buttonStart.node.getComponent(cc.Sprite).spriteFrame = this.buttonStartEnable;
            this.buttonStart.interactable = true;
        }

    }
    ClickStartButton() {
        Utility.PlaySound(Global.Click,false);

        this.node.active = false;
        this.holder.active = true;
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
