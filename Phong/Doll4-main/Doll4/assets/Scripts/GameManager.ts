// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "../Utility/Constant";
import Global from "../Utility/Global";
import Singleton from "../Utility/Singleton";
import Utility from "../Utility/Utility";
import GirlController from "./GirlController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends Singleton<GameManager> {

    @property(cc.Animation)
    match3: cc.Animation = null;

    @property(GirlController)
    girl: GirlController = null;

    @property(cc.Node)
    tapGuide: cc.Node = null;

    @property(cc.Node)
    matchGuide: cc.Node = null;


    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    defaultGirl: cc.Node = null;

    @property(cc.Node)
    tabSkin: cc.Node = null;

    @property(cc.Node)
    btnInstallNow: cc.Node = null;

    @property(cc.Node)
    boy: cc.Node = null;


    @property(cc.Node)
    text: cc.Node = null;

    @property(cc.Node)
    yesOrNo: cc.Node = null;

    constructor() {
        super();
        GameManager._instance = this;
    }

    ActiveMatch3() {
        this.tapGuide.active = false;
        this.match3.play("ScaleTo1");
        this.matchGuide.active = true;
    }

    SetSkinGirl(index: number) {
        this.girl.setGirl(index);
        this.ActiveMatch3();
    }

    ShowGirl() {
        Utility.PlaySound(Global.amazing, false);
        //   this.defaultGirl.active = false;
        this.defaultGirl.runAction(cc.fadeOut(0.2));
        this.girl.node.runAction(cc.fadeIn(0.2));
        // this.girl.node.active = true;
    }
    ShowEndcard() {
        //this.endcard.active = true;
        this.tabSkin.runAction(cc.fadeOut(0.2));
        this.btnInstallNow.active = false;
        this.bg.runAction(cc.fadeIn(0.5));
        this.girl.node.runAction(cc.moveTo(0.5, new cc.Vec2(293.568, -38.053)));
        this.boy.active = true;
        this.scheduleOnce(() => {
            Utility.PlaySound(Global.suprise, false);
            this.text.active = true;
            this.yesOrNo.active = true;
        }, 0.5)

    }

    public handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
            }
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        this.handleMuteSoundIronSource();
    }
}
