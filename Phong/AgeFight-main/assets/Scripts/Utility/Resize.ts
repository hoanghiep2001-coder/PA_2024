// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Resize extends cc.Component {

    @property(cc.Integer)
    scale1: number = 0;

    @property(cc.Integer)
    posY1: number = 0;

    @property(cc.Integer)
    scale2: number = 0;

    @property(cc.Integer)
    posY2: number = 0;

    @property(cc.Integer)
    scale3: number = 0;

    @property(cc.Integer)
    posY3: number = 0;

    @property(cc.Integer)
    scale4: number = 0;

    @property(cc.Integer)
    posY4: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() { }

    update(dt) {
        if (cc.Canvas.instance.node.y / cc.Canvas.instance.node.x <= 2.05 && cc.Canvas.instance.node.y / cc.Canvas.instance.node.x >= 1) {
            this.node.scale = this.scale2; //1.2
            if (this.posY2 != 0)
                this.node.y = this.posY2; //1.2
        } else if (cc.Canvas.instance.node.y / cc.Canvas.instance.node.x > 2.05 && cc.Canvas.instance.node.y / cc.Canvas.instance.node.x <= 2.15) {
            this.node.scale = this.scale3; //1.2
            if (this.posY3 != 0)
                this.node.y = this.posY3; //1.2

        } else if (cc.Canvas.instance.node.y / cc.Canvas.instance.node.x < 1) {
            this.node.scale = this.scale1; //1.2
            if (this.posY1 != 0)
                this.node.y = this.posY1; //1.2
        } else {
            this.node.scale = this.scale4;
            if (this.posY4 != 0)
                this.node.y = this.posY4; //1.2
        }
    }
}
