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

  skinIndex: number = 0;


  protected onLoad(): void {

  }


  protected start(): void {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.activeCasualSkinsWithAnim();
  }


  private reset(): void {
    this.NodesContainer.skins[6].active = false;
    this.skinIndex = 0;
    this.NodesContainer.UI.getChildByName("Dolls").y = 0;
    this.NodesContainer.UI.getChildByName("Dolls").scale = 0.25;
    this.NodesContainer.BtnDownload.getChildByName("hand").opacity = 0;
    this.NodesContainer.Logo.opacity = 0;
  }


  private activeCasualSkinsWithAnim(): void {
    const intervalID = setInterval(() => {      
      this.NodesContainer.skins[this.skinIndex].active = false;
      this.skinIndex += 1;
      this.NodesContainer.skins[this.skinIndex].active = true;
      this.skinIndex >= 6 && this.showCTA(intervalID);
    }, 400);
  }


  private showCTA(intervalID: number): void {
    // this.reset();
    clearInterval(intervalID);
    this.scheduleOnce(() => {
      this.NodesContainer.UI.getComponent(cc.Animation).play("CTA_Anim");
    }, 0.5);

    this.scheduleOnce(() => {
      this.reset();
      this.activeCasualSkinsWithAnim();
    }, 2.5);
  }


  public playGreatSound(): void {
    this.AudioManager.playSound(Constants.SoundTrack.pickItemSound)
    this.AudioManager.pickItemSound.volume = 0.5;
    let random = Math.floor(Math.random() * 4) + 1;
    switch (random) {
      case 1:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus1)
        break;
      case 2:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus2)
        break;
      case 3:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus3)
        break;
      case 4:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus4)
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
      Constants.ironSource.isPlayBgSound = true;
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
