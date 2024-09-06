
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


  public registerEvent(): void {
    for (let index = 0; index < this.NodesContainer.Cats.length; index++) {
      const cat = this.NodesContainer.Cats[index];
      cat.on(cc.Node.EventType.TOUCH_START, () => {

        Constants.isToStore && this.GameController.installHandle();

        // this.GamePlay.handleIronSourcePlaySound();
        this.GamePlay.handleActiveCat(index);
        this.NodesContainer.Text.active = false;
        this.GamePlay.caculateTime();
      }, this);
    }
  }


  public offEvent(): void {
    for (let index = 0; index < this.NodesContainer.Cats.length; index++) {
      const cat = this.NodesContainer.Cats[index];
      cat.off(cc.Node.EventType.TOUCH_START);
    }
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
