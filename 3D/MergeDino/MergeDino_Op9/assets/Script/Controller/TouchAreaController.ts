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
    if(!Constants.isCanTouch) {
      return;
    }

    Constants.isTouching = true;

    if(Constants.isDoneMergeStep1 && !Constants.isFailStep1) {
      Constants.isFightStep1 = true;
    }

    if(Constants.isFailStep1 &&  Constants.isStartStep2) {
      Constants.isFightStep2 = true;
    }

    this.NodesController.Text_Tap.active = false;
    this.NodesController.hint_1.active = false;
    this.NodesController.hint_2.active = false;
  }


  private touchMove(event: EventTouch, stick: Node) {
    if(!Constants.isCanTouch) {
      return;
    }

    const screenPos = event.getUILocation();
    this.pos = this.convertToLocalLocation(screenPos);
    this.NodesController.point.setPosition(this.pos);

    !Constants.isFailStep1 && Utils.TouchArea.checkMergeFirstStep();
    Constants.isFailStep1 && Utils.TouchArea.checkMergeSecondStep();
  }


  private touchEnd(): void {
    if(!Constants.isCanTouch) {
      return;
    }

    Constants.isTouching = false;

    if(!Constants.isDoneMergeStep1) {
      this.NodesController.init();
    }

    if(!Constants.isDoneMergeStep2 && Constants.isFailStep1) {
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
