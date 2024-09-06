
const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemiesController extends cc.Component {

    @property(cc.Node)
    Player: cc.Node = null;
    @property(cc.Node)
    TouchArea: cc.Node = null;

    // array
    @property([cc.Prefab])
    enemiesFish: cc.Prefab[] = [];
    @property([cc.Node])
    Point_Lv1: cc.Node[] = [];
    @property([cc.Node])
    Point_Lv2: cc.Node[] = [];
    @property([cc.Node])
    Point_Lv3: cc.Node[] = [];


    Fishes_Lv3: cc.Node[] = [];

    isUnActiveFishLv3Level: boolean = false;

    protected onLoad(): void {

    }


    protected start(): void {
        for (let i = 0; i < this.Point_Lv1.length; ++i) {
            let newFish = cc.instantiate(this.enemiesFish[0]);

            let x = this.Point_Lv1[i].x;
            let y = this.Point_Lv1[i].y;

            newFish.setPosition(x, y);
            newFish.parent = this.node;
            newFish.name = String(newFish.name + `_${i}`)
            // this.Fishes_Lv1.push(newFish);
        }

        for (let i = 0; i < this.Point_Lv2.length; ++i) {
            let newFish = cc.instantiate(this.enemiesFish[1]);

            let x = this.Point_Lv2[i].x;
            let y = this.Point_Lv2[i].y;

            newFish.setPosition(x, y);
            newFish.parent = this.node;
            newFish.name = String(newFish.name + `_${i}`)
            // this.Fishes_Lv2.push(newFish);
        }

        for (let i = 0; i < this.Point_Lv3.length; ++i) {
            let newFish = cc.instantiate(this.enemiesFish[2]);

            let x = this.Point_Lv3[i].x;
            let y = this.Point_Lv3[i].y;

            newFish.setPosition(x, y);
            newFish.parent = this.node;
            newFish.name = String(newFish.name + `_${i}`);
            this.Fishes_Lv3.push(newFish);
        }
    }


    protected update(dt: number): void {
        if(this.Player.getComponent("PlayerController").isLevel3 && !this.isUnActiveFishLv3Level) {
            this.isUnActiveFishLv3Level = true;
            for (let index = 0; index < this.Fishes_Lv3.length; index++) {
                const element = this.Fishes_Lv3[index];
                element.getChildByName("Level").active = false;
            }
        }
    }

}
