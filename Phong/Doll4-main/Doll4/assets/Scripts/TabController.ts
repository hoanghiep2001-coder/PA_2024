// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const { ccclass, property } = cc._decorator;

@ccclass
export default class TabController extends cc.Component {


    @property(cc.Animation)
    animTab: cc.Animation = null;


    @property(cc.Node)
    icon: cc.Node = null;

    @property(cc.Node)
    guideTap: cc.Node = null;



    ShowTabSkin() {

        this.animTab.node.active = true;
        this.icon.color = cc.Color.YELLOW;
        this.icon.runAction(cc.scaleTo(0.1, 1.3, 1.3));
        this.animTab.play("Tab");
        this.scheduleOnce(() => {
            this.guideTap.active = true;
        }, 0.3)
    }
    DeactiveTab() {
        this.icon.runAction(cc.scaleTo(0.1, 1, 1));
        this.icon.color = cc.Color.WHITE;
        this.animTab.play("DeactiveTab");
        this.animTab.node.active = false;
        this.guideTap.active = false;

    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
