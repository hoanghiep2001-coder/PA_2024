import { SpineAnims } from "../Data/Anims";
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

  DryerPoint: cc.Node = null;
  DryerSpine: sp.Skeleton = null;
  DryerToMouthArea: cc.Node = null;

  toothPastePoint: cc.Node = null;
  toothPasteSpine: sp.Skeleton = null;
  toothPasteHeadPoint: cc.Node = null;

  WaterBubblePoint: cc.Node = null;
  WaterBubbleSpine: sp.Skeleton = null;
  WaterBubbleHeadPoint: cc.Node = null;


  protected onLoad() {

  }


  private initVarialbes(): void {
    this.DryerPoint = this.NodeContainer.dryer.getChildByName("Point_Dryer");
    this.DryerSpine = this.NodeContainer.dryer.getChildByName("sp_dryer").getComponent(sp.Skeleton);
    this.DryerToMouthArea = this.NodeContainer.dryer.getChildByName("Point_Mouth");

    this.toothPastePoint = this.NodeContainer.toothPaste.getChildByName("Point_Tooth");
    this.toothPasteSpine = this.NodeContainer.toothPaste.getChildByName("sp_Tooth").getComponent(sp.Skeleton);
    this.toothPasteHeadPoint = this.NodeContainer.toothPaste.getChildByName("HeadPoint_Tooth");

    this.WaterBubblePoint = this.NodeContainer.waterTooth.getChildByName("Point_WaterTooth");
    this.WaterBubbleSpine = this.NodeContainer.waterTooth.getChildByName("sp_WaterTooth").getComponent(sp.Skeleton);
    this.WaterBubbleHeadPoint = this.NodeContainer.waterTooth.getChildByName("HeadPoint_WaterTooth");
  }


  protected start() {
    this.initVarialbes();
    this.registerEvent();
  }


  private registerEvent(): void {
    this.DryerPoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.DryerPoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.DryerPoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.DryerPoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.toothPastePoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.toothPastePoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.toothPastePoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.toothPastePoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);


    this.Btn_1.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    this.Btn_2.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
  }


  private hideMaskTouchStart(e: any): void {
    // mtg & applovin
    // Constants.maggotRemoved >= 1 && this.GameController.installHandle();

    // ironsource
    // this.IronSource.handleIronSourcePlaySound();

    // mtg & applovin
    // Constants.isToStore && this.GameController.installHandle();
  }


  private enableTouch(): void {
    Constants.isCanTouch = false;
  }


  private touchStart(e: any): void {
    Constants.isToStore && this.GameController.installHandle();
    if (!Constants.isCanTouch) return;

    this.WaterBubbleSpine.setAnimation(0, SpineAnims.waterToothAnim.Action, true);

    Constants.isDoneToothPaste && this.AudioManager.playSound(Constants.SoundTrack.toothPaste2Sound);
    this.GamePlay.hand.getComponent(cc.Animation).stop();
    this.GamePlay.hand.opacity = 0;
  }


  private touchMove(e: cc.Touch): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) return;
    let pos = e.getLocation();
    let posConverted = this.node.convertToNodeSpaceAR(pos);

    let debug = false;
    this.debug(debug, 3, posConverted, pos)
  }


  private debug(isDebug: boolean, toolToDebug: number, posConverted: cc.Vec2, pos: cc.Vec2): void {
    if (isDebug) {
      switch (toolToDebug) {
        case 1:
          this.moveDryer(posConverted, pos);
          break;
        case 2:
          this.moveToothPaste(posConverted, pos);
          break;
        case 3:
          this.moveWaterBrush(posConverted, pos);
          break;
        default:
          break;
      }
      return;
    } else {
      !Constants.isDoneDryer && this.moveDryer(posConverted, pos);
      Constants.isDoneDryer && !Constants.isDoneToothPaste && this.moveToothPaste(posConverted, pos);
      Constants.isDoneToothPaste && !Constants.isDoneWaterBrush && this.moveWaterBrush(posConverted, pos);
    }
  }


  private touchEnd(e: cc.Touch): void {
    this.isTouch = false;
    let pos = e.getLocation();
    this.WaterBubbleSpine.setAnimation(0, SpineAnims.waterToothAnim.Idle, true);
    this.AudioManager.stopSound(Constants.SoundTrack.toothPaste2Sound);
  }


  private moveDryer(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.DryerPoint.setPosition(posConverted.x, posConverted.y);
    this.DryerSpine.node.setPosition(posConverted.x, posConverted.y);
  }


  private moveToothPaste(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.toothPastePoint.setPosition(posConverted.x, posConverted.y);
    this.toothPasteHeadPoint.setPosition(posConverted.x - 80, posConverted.y);
    this.toothPasteSpine.node.x = (pos.x - cc.winSize.width / 2) - 100;
    this.toothPasteSpine.node.y = (pos.y - cc.winSize.height / 2) - 15;

    let bdx = this.toothPasteHeadPoint.getBoundingBox();
    this.GamePlay.checkCollideBubblePoints(bdx);
  }


  private moveWaterBrush(posConverted: cc.Vec2, pos: cc.Vec2) : void {
    console.log("check");
    
    this.WaterBubblePoint.setPosition(posConverted.x, posConverted.y);
    this.WaterBubbleHeadPoint.setPosition(posConverted.x - 105, posConverted.y + 110);
    this.WaterBubbleSpine.node.x = (pos.x - cc.winSize.width / 2) - 90;
    this.WaterBubbleSpine.node.y = (pos.y - cc.winSize.height / 2) + 100;

    let bdx = this.WaterBubbleHeadPoint.getBoundingBox();
    this.GamePlay.checkBrushTeeth(bdx);
  }


  // private setCurrentPosCleanser(pos): void {
  //   let posConverted = this.node.convertToNodeSpaceAR(pos);
  //   this.NodeContainer.Point_Cleanser.setPosition(posConverted)
  // }

  // private setCurrentPosTweezers(pos): void {
  //   this.NodeContainer.Point_Tweezers.x = (pos.x - cc.winSize.width / 2) - Constants.Responsive.calculatedX;
  //   this.NodeContainer.Point_Tweezers.y = (pos.y - cc.winSize.height / 2) - Constants.Responsive.calculatedY;
  // }
}
