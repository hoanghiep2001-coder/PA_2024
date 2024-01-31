import { _decorator, Component, Node, SkeletalAnimation } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;

 
@ccclass('BossController')
export class BossController extends Component {

    isFight: boolean = false;
    isIdle: boolean = false;

    protected start(): void {
        this.getComponent(SkeletalAnimation).play("Idle_2");
    }


    private fight(): void {
        this.isFight = true;
        this.getComponent(SkeletalAnimation).play("Atk_1");
    }


    private idle(): void {
        this.isIdle = true;
        this.getComponent(SkeletalAnimation).play("Idle_2");
    }


    protected update(dt: number): void {
        Constants.isCharacterCollideBoos && !this.isFight && this.fight();
        Constants.isDoneStep1 && !this.isIdle && this.idle();
    }
}

