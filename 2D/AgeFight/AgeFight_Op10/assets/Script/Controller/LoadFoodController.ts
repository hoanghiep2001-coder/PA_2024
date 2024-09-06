import { Constants } from "../Data/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadFoodController extends cc.Component {
    @property(cc.Node)
    overlay: cc.Node = null;
    @property(cc.Label)
    label: cc.Label = null;

    @property([cc.Label])
    unitCosts: cc.Label[] = [];
    @property([cc.Node])
    unitFrames: cc.Node[] = [];


    protected start(): void {

    }


    public increaseFood(): void {
        this.overlay.scaleX = 0;
        
        if(Constants.isPauseGame) return;

        cc.tween(this.overlay)
        .to(1.2, {scaleX: 1})
        .call(() => {
            Constants.food += 1;
            this.increaseFood();
        })
        .start();
    }


    private checkEnableCost(): void {
        for (let index = 0; index < this.unitCosts.length; index++) {
            const label = this.unitCosts[index];
            if(Number(this.label.string) >= Number(label.string)) {
                if(index === 0) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if(index === 1 && Constants.isCanBuyArmyLv2) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if(index === 2 && Constants.isCanBuyArmyLv3) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
            } else {
                label.node.color = cc.Color.RED;
                if(index === 1 && Constants.isCanBuyArmyLv2) this.unitFrames[index].opacity = 255;
                if(index === 2 && Constants.isCanBuyArmyLv3) this.unitFrames[index].opacity = 255;
                this.unitFrames[index].opacity = 0;
            }
        }
    }


    protected update(dt: number): void {
        // if(Constants.isPauseGame) return;
        this.label.string = String(Constants.food);

        this.checkEnableCost();
    }
}
