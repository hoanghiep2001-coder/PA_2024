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
    this.NodeContainer.Flow1_Opt1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Flow1_Opt2.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);

    this.NodeContainer.Flow2_Opt1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Flow2_Opt2.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);

    this.NodeContainer.Flow3_Opt1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodeContainer.Flow3_Opt2.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);

    // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
  }


  private hideMaskTouchStart(e: any): void {
    Constants.toStore && this.GameController.installHandle();
    // mtg & applovin
    // Constants.optionDoneLength >= 3 && this.GameController.installHandle();

    // ironsource
    // this.IronSource.handleIronSourcePlaySound();
  }


  private enableTouch(): void {
    Constants.isCanTouch = false;
  }


  private touchStart(e: any): void {
    Constants.toStore && this.GameController.installHandle();
    // this.IronSource.handleIronSourcePlaySound();
    // if (!Constants.isCanTouch) return;
    // Constants.optionDoneLength <= 2 && this.enableTouch();
    // let target = e.target._name;
    // switch (target) {
    //   case "item_1":
    //     this.GamePlay.runFlow1_Opt1();
    //     break;
    //   case "item_2":
    //     this.GamePlay.runFlow1_Opt2();
    //     break;
    //   case "item_3":
    //     this.GamePlay.runFlow2_Opt1();
    //     break;
    //   case "item_4":
    //     this.GamePlay.runFlow2_Opt2();
    //     break;
    //   case "item_5":
    //     this.GameController.installHandle();
    //     break;
    //   case "item_6":
    //     this.GameController.installHandle();
    //     break;

    //   default:
    //     break;
    // }
  }


  private touchMove(e: cc.Touch): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) return;

  }


  private touchEnd(e: cc.Touch): void {
    this.isTouch = false;
    this.AudioManager.stopSound(Constants.SoundTrack.cleanSound)
    this.AudioManager.cleanSound.loop = false;
  }

  protected update(dt: number): void {
    this.isTouch = Constants.isTouch;
  }
}
