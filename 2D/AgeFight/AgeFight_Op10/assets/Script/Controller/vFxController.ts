// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "../Data/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class VFxController extends cc.Component {

    @property(cc.Node)
    vFx_Booom: cc.Node = null;

    @property(sp.Skeleton)
    sp_SpeedLine: sp.Skeleton = null;

    @property(cc.Node)
    enemyBase: cc.Node = null;

    @property(cc.Node)
    enemyBaseHealth: cc.Node = null;

    protected start(): void {
        // this.handleShooting();
        // this.ShowSpeedLine();
    }


    public handleShooting(): void {
            cc.log("boommmmm!!!!");

            Constants.isPauseGame = true;

            this.enemyBase.getChildByName("nha lose").active = true;

            this.enemyBase.getChildByName("baseLv2").active = false;

            this.enemyBaseHealth.active = false;

            this.vFx_Booom.active = true;

            cc.tween(this.sp_SpeedLine.node)
            .to(0.5, {opacity: 0})
            .start();


            this.scheduleOnce(() => {
                this.vFx_Booom.active = false;
                Constants.isWin = true; 
            }, 1.5)
    }


    public ShowSpeedLine(): void {
            cc.log("speedUp!!!!!");

            if(!Constants.isRotate) return;

            this.sp_SpeedLine.node.active = true;

            cc.tween(this.sp_SpeedLine.node)
            .to(0.5, {opacity: 255})
            .start();
    }
}
