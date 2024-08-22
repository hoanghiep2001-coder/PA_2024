// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { House } from "../Gameplay/House";
import { Constants } from "../Utility/Constant";
import Singleton from "../Utility/Singleton";
import AdsManager from "./AdsManager";
import Global, { eventDispatcher } from "./Global";
import SoundManager from "./SoundManager";
import Utility from "./Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends Singleton<GameManager> {

    @property(AdsManager)
    ads: AdsManager = null;


    @property(House)
    characterHouse: House = null;

    @property(House)
    enemyHouse: House = null;


    @property(cc.Node)
    characterHolder: cc.Node = null;

    @property(cc.Node)
    coinHolder: cc.Node = null;

    @property(cc.Node)
    imageDieHolder: cc.Node = null;

    @property(cc.Node)
    endcardLose: cc.Node = null;

    @property(cc.Node)
    endcardWin: cc.Node = null;

    @property(cc.Node)
    CTA: cc.Node = null;

    @property(cc.Node)
    nextLevel: cc.Node = null;

    @property(cc.Node)
    night: cc.Node = null;

    @property(cc.Node)
    btnAll: cc.Node = null;

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

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Global.characterHouse = this.characterHouse;
        Global.enemyHouse = this.enemyHouse;
        Global.CharacterHolder = this.characterHolder;
        Global.CoinHolder = this.coinHolder;
        Global.DieImageHolder = this.imageDieHolder;
    }

    start() {
    }
    ShowEndcardLose() {
        SoundManager.Instance(SoundManager).StopAllSound();
        Utility.PlaySound(Global.Lose, false);
        this.endcardLose.active = true;
        this.scheduleOnce(() => {
            this.endcardLose.children[1].runAction(
                cc.sequence(
                    cc.fadeOut(0.5),
                    cc.callFunc(() => {
                        this.night.active = true;
                        this.ActiveCTA();
                        this.night.runAction(
                            cc.sequence(
                                cc.fadeOut(2),
                                cc.callFunc(() => {

                                })
                            )
                        )
                    })
                )
            )
        }, 1);
    }

    ShowEndcardWin() {
        SoundManager.Instance(SoundManager).StopAllSound();

        Utility.PlaySound(Global.Win, false);
        this.endcardWin.active = true;
        this.scheduleOnce(() => {
            this.endcardWin.children[1].runAction(
                cc.sequence(
                    cc.fadeOut(0.5),
                    cc.callFunc(() => {
                        this.night.active = true;
                        this.ActiveCTA();
                        this.night.runAction(
                            cc.sequence(
                                cc.fadeOut(2),
                                cc.callFunc(() => {
                                })
                            )
                        )
                    })
                )
            )
        }, 1);
    }
    ActiveCTA() {
        this.CTA.active = true;
        this.btnAll.active = true;

    }
    update(dt) {
       // this.handleMuteSoundIronSource();
    }

    ClickToCTA() {
        this.ads.installHandle();
        this.btnAll.active = true;
    }
}
