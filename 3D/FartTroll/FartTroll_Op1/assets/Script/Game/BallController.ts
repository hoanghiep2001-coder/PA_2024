
import { _decorator, Component, Node, Quat, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('BallController')
export class BallController extends Component {
        protected start(): void {
            tween(this.node)
            .by(3.5, { position: new Vec3(6, 0, 0) })
            .to(0, { rotation: Quat.fromEuler(new Quat(), 0, -90, 0) })
            .by(3.5, { position: new Vec3(-6, 0, 0) })
            .to(0, { rotation: Quat.fromEuler(new Quat(), 0, 90, 0) })
            .union()
            .repeatForever()
            .start();
            
        }
}
