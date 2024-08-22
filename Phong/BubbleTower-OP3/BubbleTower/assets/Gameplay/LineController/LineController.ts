// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class LineController extends cc.Component {

    @property(cc.Prefab)
    point: cc.Prefab = null;

    @property()
    offsetY: number = 0;

    @property()
    offsetX: number = 0;

    @property()
    totalPoint: number = 0;

    @property()
    autoGenerate: boolean = false;

    GeneratePoint(color: cc.Color) {
        for (let i = 0; i < this.totalPoint; i++) {
            var p = cc.instantiate(this.point);
            p.parent = this.node;
            p.y = i * this.offsetY;
            p.x = i * this.offsetX;
        }
        this.ChangeColor(color);
    }
    ChangeColor(color: cc.Color) {
        this.node.children.forEach(element => {
            element.color = color;
        });
    }

    start() {
        this.GeneratePoint(new cc.Color(240, 101, 206));
    }

    // update (dt) {}
}
