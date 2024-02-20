
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodesContainer.Button_1.on(cc.Node.EventType.TOUCH_START, this.handleClick, this);
    this.NodesContainer.Button_2.on(cc.Node.EventType.TOUCH_START, this.handleClick, this);

    // mtg & applovin
    this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskClick, this);
  }


  private hideMaskClick(): void {
    // iroon source
    // this.handleIronSourcePlaySound();
    // ----------------------
    
    // mtg & applovin
    Constants.isDresUp && this.GameController.installHandle();
  }


  private handleClick(e: any): void {
    if(!Constants.isCanTouch) {
      return;
    }

    // ironsource
    // this.handleIronSourcePlaySound();
    // --------------

    let nodeClick: string = e.target._name;
    Constants.isDresUp && this.GameController.installHandle();
    !Constants.isDresUp && this.handleDressUp(nodeClick);
    
  }


  private handleDressUp(nodeClick: string): void {
    Constants.isCanTouch = false;
    Constants.isDresUp = true;
    this.AudioManager.stopAllSoundExceptBgSound();
    this.AudioManager.playSound(Constants.SoundTrack.pickItemSound);
    this.AudioManager.playSound(Constants.SoundTrack.waoGameSound);
    this.NodesContainer.Effect_Heart.resetSystem();
    this.NodesContainer.Effect_Blink.resetSystem();
    this.NodesContainer.Doll_DressDefault.active = false;
    this.NodesContainer.Hand.active = false;
    nodeClick === "Btn_1" ? this.NodesContainer.Doll_Dress1.active = true : this.NodesContainer.Doll_Dress2.active = true;

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.swtichItemSound);
      this.GamePlay.getComponent(cc.Animation).play("GamePlay_SwitchItem");
      Constants.isCanTouch = true;
      this.NodesContainer.Hand.active = true;
    }, 1);
  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    Constants.ironSource.isPlayBgSound = true;

    if (Constants.ironSource.SoundState) {
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }
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


  // protected update(dt: number): void {
  //     this.handleMuteSoundIronSource();
  // }
}
