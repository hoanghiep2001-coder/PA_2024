import Supporter from "../Other/Supporter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SupporterController extends cc.Component {

    @property([cc.Node])
    supporters: cc.Node[] = [];

    // state
    tweenStates: cc.Tween[] = [];

    protected start(): void {
        for (let index = 0; index < this.supporters.length; index++) {
            const node = this.supporters[index];

            let tweenState = cc.tween(node)
            .repeatForever(
                cc.tween(node)
                    .to(0.8, { opacity: 120 })
                    .to(0.8, { opacity: 50 })
            ).start();

            this.tweenStates.push(tweenState);
        }
    }


    public activeSupporter(index: number): void {
        this.tweenStates[index].stop();
        this.supporters[index].opacity = 255;
        this.supporters[index].getComponent(Supporter).isActive = true;
    }
}
