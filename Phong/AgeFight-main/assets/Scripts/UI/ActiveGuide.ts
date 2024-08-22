// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility/Global";
import ButtonSpawn from "./ButtonSpawn";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ActiveGuide extends cc.Component {

    @property(ButtonSpawn)
    listButtonSpawn: ButtonSpawn[] = [];

    biggestButtonCanClick: ButtonSpawn = null;
    Check() {
        for (let i = this.listButtonSpawn.length - 1; i >= 0; i--) {
            if (Global.totalGold >= this.listButtonSpawn[i].priceGold && this.listButtonSpawn[i].unlockedButton == false) {
                this.biggestButtonCanClick = null;
                break;
            }

            if (Global.totalFood >= this.listButtonSpawn[i].priceFood && this.listButtonSpawn[i].unlockedButton == true) {
                this.biggestButtonCanClick = this.listButtonSpawn[i];
                break;
            }
        }
        for (let i = 0; i < this.listButtonSpawn.length; i++) {
            this.listButtonSpawn[i].CheckPriceFood();
            this.UpdateAnim(this.listButtonSpawn[i]);
        }

    }
    UpdateAnim(button: ButtonSpawn) {
        if (!button.unlockedButton) {
            if (Global.totalGold >= button.priceGold) {
                button.PlayAnim("GuideClickUnlock");
            } else {
                button.PlayAnim("DisableAndLock");
            }
        } else {
            if (Global.totalFood >= button.priceFood) {
                if (this.biggestButtonCanClick == button) {
                    if (this.biggestButtonCanClick.currentStringAnim == "DisableButton") {
                        button.PlayAnim("Default");
                    }
                    button.PlayAnim("GuideClick");
                } else {
                    button.PlayAnim("Default");
                }
                //    button.PlayAnim("GuideClick");
            } else {
                button.PlayAnim("DisableButton");

            }
        }

    }

    EndGame() {
        for (let i = 0; i < this.listButtonSpawn.length; i++) {
            if (this.listButtonSpawn[i].unlockedButton) {
                if (Global.totalFood >= this.listButtonSpawn[i].priceFood) {
                    this.listButtonSpawn[i].PlayAnim("Default");
                } else {
                    this.listButtonSpawn[i].PlayAnim("DisableButton");
                }
            } else {
                this.listButtonSpawn[i].PlayAnim("DisableAndLock");
            }
        }

    }
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        eventDispatcher.on(Global.StopGame, this.EndGame, this);
    }

    start() {
        this.listButtonSpawn[1].PlayAnim("GuideClickUnlock");
        // this.Check();
    }

    update(dt) {
        if (Global.endGame) return;
        if (!Global.clickButtonSpawnWarior) {
            this.Check();
        }
    }
}
