
import { _decorator, Component, Node, SkeletalAnimation } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('BossController')
export class BossController extends Component {


    


    protected start(): void {
        this.getComponent(SkeletalAnimation).play("Idle_2");
    }


    protected update(dt: number): void {
        
    }

}

