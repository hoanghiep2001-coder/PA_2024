import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;



  protected onLoad(): void {

  }


  protected start(): void {
    this.handleGamePlay();
  }


  private handleGamePlay(): void {

  }




  protected update(dt: number): void {
  }

}
