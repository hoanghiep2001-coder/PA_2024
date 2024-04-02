import {
  _decorator,
  Component,
  Node,
  Vec3,
  CCFloat,
  v3,
  EventTouch,
  screen,
  Animation,
} from "cc";
import { GameController } from "./GameController";
import { Constants } from "../Data/Constant";
import AudioManager from "../Plugin/AudioManager";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {
  // component
  @property(GameController)
  GameController: GameController = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;


  // state
  meowSoundState: number = null;

  // ironsource
  ironSourceState: number = 1;
  ironSourceSoundState: boolean = true;
  isEndGame: boolean = false;
  endGame: boolean = false;


  protected start(): void {
    
  }


  private handleIronSourceSound(): void {
    // if (this.isPlayBgSound) {
    //   return;
    // }

    // if (this.ironSourceSoundState) {
    //   this.catSound.setLoop(true);
    //   this.catSound.play();
    //   this.bg.setLoop(true);
    //   this.bg.play();
    // }

    // this.isPlayBgSound = true;
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


  protected update(dt: number): void {

  }



}
