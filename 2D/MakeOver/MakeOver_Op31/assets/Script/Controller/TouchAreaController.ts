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


  protected onLoad() {
    
  }


  protected start() {
    this.NodeContainer.CTA.active = false;
    this.NodeContainer.Btn_1.active = false;
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodeContainer.Btn_1.on(cc.Node.EventType.TOUCH_START, this.GamePlay.showIntro, this);

    this.NodeContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    // this.NodeContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  private hideMaskTouchStart(e: any): void {
    // mtg & applovin
    // Constants.maggotRemoved >= 1 && this.GameController.installHandle();

    // ironsource
    this.IronSource.handleIronSourcePlaySound();

    // mtg & applovin
    // Constants.isToStore && this.GameController.installHandle();
  }


  private enableTouch(): void {
    Constants.isCanTouch = false;
  }


  private touchStart(e: any): void {
        // ironsource
        this.IronSource.handleIronSourcePlaySound();

    Constants.isToStore && this.GameController.installHandle();
    if (!Constants.isCanTouch) return;
    this.NodeContainer.Hand.active = false;
    this.NodeContainer.Delight_EyeAlert.active = false;
    // this.GamePlay.hand.getComponent(cc.Animation).stop();
    // this.GamePlay.hand.opacity = 0;
  }


  private touchMove(e: cc.Touch): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) return;
    let pos = e.getLocation();
    let posConverted = this.node.convertToNodeSpaceAR(pos);
    this.moveTools(posConverted, pos);

    this.GamePlay.checkCollideFly();
  }



  private touchEnd(e: cc.Touch): void {
    this.isTouch = false;
    let pos = e.getLocation();
    // this.AudioManager.stopSound(Constants.SoundTrack.toothPaste2Sound);
  }


  private moveTools(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);
    this.NodeContainer.ToolHeadArea.setPosition(posConverted.x - 45, posConverted.y - 40);
    this.NodeContainer.Tool.setPosition(posConverted.x - 45, posConverted.y - 40);
  }

}
