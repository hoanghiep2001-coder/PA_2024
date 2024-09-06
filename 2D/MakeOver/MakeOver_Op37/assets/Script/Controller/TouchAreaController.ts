import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import IronSource from "./IronSource";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {
  // Component
  @property(IronSource)
  IronSource: IronSource = null;
  @property(NodeContainer)
  NodeContainer: NodeContainer = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  @property(cc.Node)
  Btn_1: cc.Node = null;
  @property(cc.Node)
  Btn_2: cc.Node = null;


  // state
  isTouch: boolean = false;


  protected onLoad() {

  }


  protected start() {
    // this.NodeContainer.CTA.active = false;
    // this.NodeContainer.Btn_1.active = false;
    this.registerEvent();
  }


  private debug(flow: number): void {
    if(flow === 1) {

    } 

    else if (flow === 2) {
      this.registerFlow2Event();

      Constants.isCanTouch = true;

      Constants.isDoneStep1 = true;
    }
  }


  private registerEvent(): void {
    this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);

    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodeContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    // this.NodeContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  public registerFlow2Event(): void {
    this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
  }


  private hideMaskTouchStart(e: any): void {
    // ironsource
    // this.IronSource.handleIronSourcePlaySound();

    // mtg & applovin
    Constants.isToStore && this.GameController.installHandle();
  }


  private enableTouch(): void {
    Constants.isCanTouch = false;
  }


  private touchStart(e: cc.Event.EventTouch): void {

    // ironsource
    // this.IronSource.handleIronSourcePlaySound();

    Constants.isToStore && this.GameController.installHandle();

    this.NodeContainer.Hand.active = false;

    this.NodeContainer.Hint_Circle.active = false;

    this.NodeContainer.Hint_Circle_2.active = false;

    if (!Constants.isCanTouch) return;

    let pos = e.touch.getLocation();

    let posConverted = this.node.convertToNodeSpaceAR(pos);

    this.moveTools(posConverted, pos);
  }


  private touchMove(e: cc.Touch): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) return;

    let pos = e.getLocation();

    let posConverted = this.node.convertToNodeSpaceAR(pos);

    this.moveTools(posConverted, pos);
  }



  private touchEnd(e: cc.Touch): void {
    this.isTouch = false;

    this.AudioManager.stopSound(Constants.SoundTrack.FaceWashSound);
  }


  private moveTools(posConverted: cc.Vec2, pos: cc.Vec2): void {

    if ( !Constants.isDoneStep1 ) {
      this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);

      this.NodeContainer.Flow1_spineTool.setPosition(posConverted.x + 30, posConverted.y + 100)

      this.NodeContainer.Flow1_ToolHead.setPosition(posConverted.x + 20, posConverted.y + 70);

      this.GamePlay.checkCollideAcne();
    } 

    else {
      this.NodeContainer.Flow2_Tool.setPosition(posConverted.x, posConverted.y);

      this.NodeContainer.Flow2_ToolHead.setPosition(posConverted.x, posConverted.y + 100)

      this.GamePlay.checkCollideEarsAcne();
    }
  }

}
