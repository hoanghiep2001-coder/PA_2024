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

  tweenAnims: cc.Tween[] = [];


  protected start(): void {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.handleOpenScene();
  }


  private handleOpenScene(): void {
    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.hooooSound)}, 0.7);
  }


  public activeBlinkAnimForBtnSubmit(): void {
    Constants.isShowBtnSubmit = true;

    if (Constants.isRotate) {
      this.tweenAnims.push(cc.tween(this.NodesContainer.Btn_Submit)
        .repeatForever(
          cc.tween(this.NodesContainer.Btn_Submit)
            .to(0.5, { scale: 0.5 })
            .to(0.5, { scale: 0.47 }, { easing: 'elasticOut' })
        ).start())
    } else {
      this.tweenAnims.push(cc.tween(this.NodesContainer.Btn_Submit)
        .repeatForever(
          cc.tween(this.NodesContainer.Btn_Submit)
            .to(0.5, { scale: 0.35 })
            .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })
        ).start())
    }
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


  public goToNextItem(e: cc.Event.EventTouch): void {
    if (Constants.currentStep >= 2) {
      this.GameController.installHandle();
      return;
    }

    let node: cc.Node = e.target;
    node.active = false;

    Constants.currentStep += 1;
    this.AudioManager.playSound(Constants.SoundTrack.openBookSound);
    this.NodesContainer.Items[Constants.currentStep - 1].active = false;
    this.NodesContainer.Items[Constants.currentStep].active = true;
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

}
