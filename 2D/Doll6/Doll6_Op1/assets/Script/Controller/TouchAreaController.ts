
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
    this.NodesContainer.Button_1.on(cc.Node.EventType.TOUCH_START, this.handleDressUp, this);
    this.NodesContainer.Button_2.on(cc.Node.EventType.TOUCH_START, this.handleDressUp, this);

    // mtg & applovin
    // this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.handleDressUp, this);
  }


  private handleDressUp(e: any): void {
    let nodeClick: string = e.target._name;
    console.log(nodeClick);
    switch (nodeClick) {
      case "Btn_1":
        
        break;
    
      default:
        break;
    }
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
