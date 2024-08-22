// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility2d/Global";
import Skin from "./Skin";

const { ccclass, property } = cc._decorator;



@ccclass
export default class SkinController extends cc.Component {

    @property(Skin)
    skins: Skin[] = [];

    @property(cc.Node)
    btnAll: cc.Node = null;

    countToEndcard: number = 0;
    bool
    protected onLoad(): void {
        eventDispatcher.on(Global.ChangeSkin, this.ChangeSkin, this);
    }

    ChangeSkin(indexSkin: number, isRandomSkin: boolean) {

        this.countToEndcard += 1;

        if (this.countToEndcard == 2) {
            this.scheduleOnce(() => {
                this.btnAll.active = true;
            }, 1.2);
        }

        if (isRandomSkin) {
            for (let i = 0; i < this.skins.length; i++) {
                this.skins[i].OnDisable();
            }
            for (let i = 0; i < this.skins.length; i++) {
                if (this.skins[i].isActive == false) {
                    this.skins[i].OnActive();
                    break;
                }
            }
        }

        else {
            for (let i = 0; i < this.skins.length; i++) {
                if (i == indexSkin) {
                    this.skins[indexSkin].OnActive();
                } else {

                    this.skins[i].OnDisable();
                }
            }

        }

    }


    // update (dt) {}
}
