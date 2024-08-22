// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DrawLine from "../GamePlay/DrawLine";
import SpawnMark from "../GamePlay/SpawnMark";
import { Constants } from "./Constant";
import Controller from "./Controller";
import Global from "./Global";
import Singleton from "./Singleton";
import Utility from "./Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends Singleton<GameManager> {

    @property(Controller)
    ads: Controller = null;

    @property(SpawnMark)
    spawnMark: SpawnMark = null;

    @property(DrawLine)
    drawline: DrawLine = null;

    @property(cc.Node)
    Fail: cc.Node = null;

    @property(cc.Node)
    fakeBlank: cc.Node = null;

    constructor() {
        super();
        GameManager._instance = this;
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


    endGame() {
        Global.endGame = true;
        this.Fail.active = true;
        this.fakeBlank.active = false;
        Utility.PlaySound(Global.lose, false);
        Utility.PlaySound(Global.catSound, false);
        this.scheduleOnce(this.fakeSituation, 1);
    }

    fakeSituation() {
        // this.ads.installHandle();
        this.spawnMark.startGame();
        this.fakeBlank.active = true;
        this.Fail.active = false;
        this.drawline.ResetDraw();
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        if (!Global.startTouch && !Global.endGame && Global.isDraw) {
            this.endGame();
        }
        //this.handleMuteSoundIronSource();
    }
}
