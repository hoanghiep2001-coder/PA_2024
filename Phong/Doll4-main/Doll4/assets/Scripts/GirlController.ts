// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GirlController extends cc.Component {


    @property(cc.Node)
    dress: cc.Node = null;

    @property(cc.Node)
    hair: cc.Node = null;

    @property(cc.Node)
    bag: cc.Node = null;

    @property(cc.Node)
    shoes: cc.Node = null;

    setGirl(index: number) {
        this.dress.children[index].active = true;
        this.hair.children[index].active = true;
        this.bag.children[index].active = true;
        this.shoes.children[index].active = true;
    }



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
