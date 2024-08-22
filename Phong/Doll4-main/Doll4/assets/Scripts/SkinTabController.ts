// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";
import Utility from "../Utility/Utility";
import TabController from "./TabController";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SkinTabController extends cc.Component {


    @property(TabController)
    tabShowSkin: TabController[] = [];


    @property(cc.Node)
    tapGuide: cc.Node = null;


    currentTab: TabController = null;


    LoadSkin(event, customEventData) {
        this.tapGuide.active = false;
        if (Global.completeChooseSkin) return;
        Utility.PlaySound(Global.clickSound, false);
        if (this.currentTab != null) {
            this.currentTab.DeactiveTab();
        }
        this.currentTab = this.tabShowSkin[parseInt(customEventData)];
        this.currentTab.ShowTabSkin();
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
