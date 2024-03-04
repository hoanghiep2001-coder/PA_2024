import { Ultils } from "../Data/Ultils";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
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
  }


  private touchStart(e: cc.Touch): void {
    if(!Constants.isCanTouch) return;
    if(!Constants.isDoneCleanser) this.isTouch = true;
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
  

  private touchEnd(): void {
    this.isTouch = false;
  }


  private moveCleanser(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.Cleanser_Point.setPosition(posConverted);
    this.NodeContainer.Spine_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60;
    this.NodeContainer.Spine_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80;
  }


  private moveTweezers(posConverted: cc.Vec2, pos: cc.Vec2): void {
    this.NodeContainer.Tweezers_Point.setPosition(posConverted);
    this.NodeContainer.Spine_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60;
    this.NodeContainer.Spine_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 100;
    this.NodeContainer.Tweezers_HeadPoint.x = (pos.x - cc.winSize.width / 2) - 45;
    this.NodeContainer.Tweezers_HeadPoint.y = (pos.y - cc.winSize.height / 2) - 85;
  }



  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }

    Constants.ironSource.isPlayBgSound = true;
  }


  private handleMuteSoundIronSource(): void {
    Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

    if (Constants.ironSource.State) {
      if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
        Constants.ironSource.SoundState = true;
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
      }

      if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
        Constants.ironSource.SoundState = false;
        this.AudioManager.stopAllSound();
      }
    }
  }

}
