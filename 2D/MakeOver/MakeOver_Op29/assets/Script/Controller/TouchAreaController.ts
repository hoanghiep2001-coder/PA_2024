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


  // state
  isTouch: boolean = false;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
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
    Constants.maggotRemoved >= 1 && this.GameController.installHandle();
    if(!Constants.isDoneCleanser) this.isTouch = true;
    !Constants.isDoneCleanser && this.GamePlay.activeCleanSound();
    this.NodeContainer.Hand_1.active = false;
    this.NodeContainer.Hand_2.active = false;
    this.NodeContainer.Text_Drag.active = false;
    // this.IronSource.handleIronSourcePlaySound();
  }


  private touchMove(e: cc.Touch): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) return;
    let pos = e.getLocation();
    let posConverted = this.node.convertToNodeSpaceAR(pos);

    !Constants.isDoneCleanser && this.moveCleanser(posConverted, pos);
    Constants.isDoneCleanser && this.moveTweezers(posConverted, pos);
  }


  private touchEnd(e: cc.Touch): void {
    this.isTouch = false;
    let pos = e.getLocation();

    !Constants.isDoneCleanser && this.setCurrentPosCleanser(pos);
    Constants.isDoneCleanser && this.setCurrentPosTweezers(pos);
    this.AudioManager.stopSound(Constants.SoundTrack.cleanSound)
    this.AudioManager.cleanSound.loop = false;
  }


  private moveCleanser(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.Point_Cleanser.setPosition(posConverted.x + 35, posConverted.y - 30);
    this.NodeContainer.sp_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60;
    this.NodeContainer.sp_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80 ;
  }


  private moveTweezers(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.Point_Tweezers.setPosition(posConverted);
    this.NodeContainer.sp_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60 - Constants.Responsive.calculatedX;
    this.NodeContainer.sp_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 90 - Constants.Responsive.calculatedY;
    this.NodeContainer.Point_Tweezer_Head.x = (pos.x - cc.winSize.width / 2) - 45 - Constants.Responsive.calculatedX;
    this.NodeContainer.Point_Tweezer_Head.y = (pos.y - cc.winSize.height / 2) - 85 - Constants.Responsive.calculatedY;
  }


  private setCurrentPosCleanser(pos): void {
    let posConverted = this.node.convertToNodeSpaceAR(pos);
    this.NodeContainer.Point_Cleanser.setPosition(posConverted)
  }

  private setCurrentPosTweezers(pos): void {
    this.NodeContainer.Point_Tweezers.x = (pos.x - cc.winSize.width / 2) - Constants.Responsive.calculatedX;
    this.NodeContainer.Point_Tweezers.y = (pos.y - cc.winSize.height / 2) - Constants.Responsive.calculatedY;
  }
}
