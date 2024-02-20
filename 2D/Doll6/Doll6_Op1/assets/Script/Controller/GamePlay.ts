import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(GameController)
  GameController: GameController = null;


  protected onLoad(): void {
 
  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.handleGamePlay();
  }


  private handleGamePlay(): void {
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.openBookSound);
    }, 0.5);

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.showItemSound);
    }, 0.9);

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.woaAnimeSound);
    }, 1.2);
  }



  // protected update(dt: number): void {
  //     !this.doneStep1Flag && Constants.isDoneCleanHair && this.runDoneStep1Anim();
  // }

}
