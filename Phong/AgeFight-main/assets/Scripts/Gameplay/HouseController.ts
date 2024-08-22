// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../Utility/GameManager";
import Global, { eventDispatcher } from "../Utility/Global";
import { House, TypeWarior } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HouseController extends House {

    override  start(): void {
        super.start();
        eventDispatcher.on(Global.SpawnWarior, this.SpawnWarior, this);
    }

    override update(dt: any): void {
        super.update(dt);
    }
    override  OnBreakHouse(): void {
        super.OnBreakHouse();
        this.scheduleOnce(() => {
            GameManager.Instance(GameManager).ShowEndcardLose();

        }, 1)

        // show endcard lose
    }
    // update all warior of this house


}
