import { _decorator, Component, Node, Vec2, EventTouch, Vec3 } from "cc";
import { Constants } from "../Data/Constant";
const { ccclass, property } = _decorator;

@ccclass("TouchAreaController")
export class TouchAreaController extends Component {

  @property(Node)
  point: Node = null;
  @property(Node)
  hideMask: Node = null;


  @property([Node])
  points_1: Node[] = [];


  // state
  pos: Vec3 = null;


  protected start(): void {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.hideMask.on(Node.EventType.TOUCH_START, this.touchMove, this);
    this.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
  }


  public touchMove(event: EventTouch, stick: Node) {
    Constants.isTouching = true;

   

    const screenPos = event.getUILocation();
    this.pos = this.convertToLocalLocation(screenPos);
    this.point.setPosition(this.pos);
  }


  private touchEnd(): void {
    Constants.isTouching = false;
  }


  public convertToLocalLocation(value: Vec2) {
    const localX = value.x - 160 - this.node.getPosition().x;
    const localY = value.y - 240 - this.node.getPosition().y;
    const result = new Vec3(localX, localY, 0);
    return result;
  }


  protected update(dt: number): void {

  }
}
