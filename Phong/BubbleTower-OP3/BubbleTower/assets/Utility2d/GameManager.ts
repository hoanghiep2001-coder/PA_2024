// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BubbleController from "../Gameplay/Bubble/BubbleController";
import MapGeneration from "../Gameplay/MapGeneration/MapGeneration";
import { Constants } from "./Constant";
import Global, { eventDispatcher } from "./Global";
import Singleton from "./Singleton";
import Utility from "./Utility";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends Singleton<GameManager> {

    @property(cc.Node)
    all: cc.Node = null;

    @property(cc.Node)
    shooter: cc.Node = null;

    @property(cc.Node)
    endcard: cc.Node = null;

    @property(cc.Node)
    night: cc.Node = null;

    @property(cc.Node)
    btnAll: cc.Node = null;

    @property(cc.Node)
    cashHolder: cc.Node = null;

    @property(cc.Node)
    fantastic: cc.Node = null;

    @property(MapGeneration)
    map: MapGeneration = null;

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

    protected onLoad(): void {
        Global.CashPos = this.cashHolder;
    }

    start() {
        this.map.Init();
        // this.scheduleOnce(() => {
        //     this.Intro();
        // }, 1);

    }
    ShowEndcard() {

        this.night.active = true;
        this.endcard.active = true;
        Utility.PlaySound(Global.Release, false);
        this.endcard.runAction(
            cc.sequence(
                cc.scaleTo(1, 1, 1).easing(cc.easeBackOut()),
                cc.callFunc(() => {
                    this.btnAll.active = true;
                })
            )
        )
    }
    Intro() {
        this.all.runAction(
            cc.sequence(
                cc.moveTo(1.5, new cc.Vec2(0, 0)),
                cc.callFunc(() => {
                    this.shooter.active = true;
                })
            )
        )
    }

    update(dt) {
        //this.handleMuteSoundIronSource();
    }
}
