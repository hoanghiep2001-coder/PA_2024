// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass("BasePool")
export default class BasePool {

    private pool: cc.NodePool;

    @property(cc.Prefab)
    Prefab: cc.Prefab = null;

    @property(Boolean)
    public reuse: boolean = true;

    @property(Number)
    public Size: number = 0;

    constructor() {
        this.pool = new cc.NodePool();
        //Khong can biet chinh xac so luong nut ban dau ta se sinh ra cac nut neu bi thieu trong thoi gian chay
        for (let i = 0; i < this.Size; ++i) {
            let obj = cc.instantiate(this.Prefab); // create node instance
            this.pool.put(obj); // populate your pool with put method
        }
    }

    createObject(parent: cc.Node): cc.Node {
        if (this.reuse) {
            let obj: cc.Node = null;
            if (this.pool.size() > 0) {
                obj = this.pool.get();
                obj.active = true;
            } else {
                obj = cc.instantiate(this.Prefab);
                obj.parent = cc.Canvas.instance.node;
            }
            obj.parent = parent;
            return obj;
        } else {
            let obj: cc.Node = cc.instantiate(this.Prefab);
            obj.parent = parent;
            return obj;
        }
    }
    RecycleObject(obj: cc.Node) {
        if (this.reuse) {
            obj.active = false;
            this.pool.put(obj);
        } else {
            obj.destroy();
        }
    }

    clearPool() {
        this.pool.clear();
    }
}
