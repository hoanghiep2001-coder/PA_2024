import { Ultils } from "../Data/Ultils";
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
    this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
  }


  private hideMaskTouchStart(): void {
    // mtg & applovin
    // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
    
    // ironsource
    this.IronSource.handleIronSourcePlaySound();
  }


  private touchStart(e: cc.Touch): void {
    if(!Constants.isCanTouch) return;
    if(!Constants.isDoneCleanser) this.isTouch = true;
    // ironsource
    this.IronSource.handleIronSourcePlaySound();
    if(!Constants.isDoneCleanser) this.GamePlay.activeCleanSound();
    Constants.maggotRemoved >= 1 && this.GameController.installHandle();
    this.NodeContainer.Hand_1.active = false;
    this.NodeContainer.Hand_2.active = false;
  }


  private touchMove(e: cc.Touch): void {
    if(!Constants.isCanTouch || Constants.ironSource.isEndGame) return;
    let pos = e.getLocation();
    let posConverted = this.node.convertToNodeSpaceAR(pos);

    !Constants.isDoneCleanser && this.moveCleanser(posConverted, pos);
    Constants.isDoneCleanser && this.moveTweezers(posConverted, pos);
  }
  

  private touchEnd(e: cc.Touch): void {
    this.isTouch = false;
    let pos = e.getLocation();
    this.NodeContainer.Cleanser_Point.x = (pos.x - cc.winSize.width / 2) - Constants.Responsive.calculatedX;
    this.NodeContainer.Cleanser_Point.y = (pos.y - cc.winSize.height / 2) - Constants.Responsive.calculatedY;
    this.NodeContainer.Tweezers_Point.x = (pos.x - cc.winSize.width / 2) - Constants.Responsive.calculatedX;
    this.NodeContainer.Tweezers_Point.y = (pos.y - cc.winSize.height / 2) - Constants.Responsive.calculatedY;
    this.AudioManager.stopSound(Constants.SoundTrack.cleanSound)
    this.AudioManager.cleanSound.loop = false;
  }


  private moveCleanser(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.Cleanser_Point.setPosition(posConverted);
    this.NodeContainer.Spine_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60 - Constants.Responsive.calculatedX;
    this.NodeContainer.Spine_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80 - Constants.Responsive.calculatedY;
  }


  private moveTweezers(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.Tweezers_Point.setPosition(posConverted);
    this.NodeContainer.Spine_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60 - Constants.Responsive.calculatedX;
    this.NodeContainer.Spine_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 100 - Constants.Responsive.calculatedY;
    this.NodeContainer.Tweezers_HeadPoint.x = (pos.x - cc.winSize.width / 2) - 45 - Constants.Responsive.calculatedX;
    this.NodeContainer.Tweezers_HeadPoint.y = (pos.y - cc.winSize.height / 2) - 85 - Constants.Responsive.calculatedY;
  }

}
