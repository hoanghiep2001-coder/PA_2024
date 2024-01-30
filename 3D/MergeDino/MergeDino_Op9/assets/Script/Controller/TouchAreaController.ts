import { _decorator, Component, Node, Vec2, EventTouch, Vec3 } from "cc";
import { Constants } from "../Data/Constant";
import { Utils } from "../Plugin/Utils";
import { NodesController } from "./NodesController";
const { ccclass, property } = _decorator;

@ccclass("TouchAreaController")
export class TouchAreaController extends Component {

  @property(NodesController)
  NodesController: NodesController = null;


  // state
  pos: Vec3 = null;


  protected start(): void {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodesController.hideMask.on(Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodesController.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodesController.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodesController.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
  }


  private touchStart(): void {
    Constants.isTouching = true;
    this.NodesController.hint_1.active = false;
  }


  private touchMove(event: EventTouch, stick: Node) {
    const screenPos = event.getUILocation();
    this.pos = this.convertToLocalLocation(screenPos);
    this.NodesController.point.setPosition(this.pos);
    Utils.TouchArea.checkMergeFirstStep();
  }


  private touchEnd(): void {
    Constants.isTouching = false;

    if(!Constants.isDoneMergeStep1) {
      this.NodesController.init();
    }
  }


  private convertToLocalLocation(value: Vec2): Vec3 {
    const localX = value.x - 160 - this.node.getPosition().x;
    const localY = value.y - 240 - this.node.getPosition().y;
    const result = new Vec3(localX, localY, 0);
    return result;
  }
}
