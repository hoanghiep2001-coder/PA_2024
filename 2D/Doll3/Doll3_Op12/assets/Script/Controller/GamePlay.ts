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

  dollPrecent: number = 0;
  opponentPrecent: number = 0;


  protected onLoad(): void {

  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.handleGamePlay();
  }


  private handleGamePlay(): void {
    // this.activeBlinkAnimForBtnStart();
  }


  private activeBlinkAnimForBtnStart(): void {
    // cc.tween(this.NodesContainer.Btn_Start)
    //   .repeatForever(
    //     cc.tween(this.NodesContainer.Btn_Start)
    //       .to(0.5, { scale: 0.3 })
    //       .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })
    //   ).start();
  }


  public playGreatSound(): void {
    this.AudioManager.playSound(Constants.SoundTrack.woaAnimeSound)
    let random = Math.floor(Math.random() * 4) + 1;
    switch (random) {
      case 1:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus1)
        this.AudioManager.Fx_Bonus1.volume = 0.5;
        break;
      case 2:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus2)
        this.AudioManager.Fx_Bonus1.volume = 0.5;
        break;
      case 3:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus3)
        this.AudioManager.Fx_Bonus1.volume = 0.5;
        break;
      case 4:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus4)
        this.AudioManager.Fx_Bonus1.volume = 0.5;
        break;
      default:
        break;
    }
  }


  public switchToLv2(): void {
    this.scheduleOnce(() => {
      cc.tween(this.NodesContainer.Overlay)
      .to(1, {opacity: 150})
      .call(() => {
        this.switchDollToStep2();
        this.NodesContainer.Lv1_Hint.active = false;
        this.NodesContainer.Lv2_Hint.active = true;
        this.NodesContainer.FX_Blink.stopSystem();
      })
      .to(1, {opacity: 0})
      .start();
    }, 1.5) 
  }


  private switchDollToStep2(): void {
    this.NodesContainer.Dolls[0].active = false;
    this.NodesContainer.Dolls[1].active = false;
    this.NodesContainer.Dolls[2].active = false;
    
    this.NodesContainer.Dolls.splice(0, 3);
    
    this.NodesContainer.Dolls[0].active = true;
    this.NodesContainer.Dolls[1].active = true;
    this.NodesContainer.Dolls[2].active = true;

    for (let index = 0; index < this.NodesContainer.Dolls.length; index++) {
      const doll = this.NodesContainer.Dolls[index];
      cc.tween(doll)
      .to(1, {scale: 0.45, opacity: 255}, {easing: 'elasticInOut'})
      .call(() => {doll.getComponent(cc.Animation).play()})
      .start();
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


  // protected update(dt: number): void {
  //     this.handleMuteSoundIronSource();
  // }

}
