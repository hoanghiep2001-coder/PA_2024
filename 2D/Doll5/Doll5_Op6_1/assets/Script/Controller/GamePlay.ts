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
  currentProgress: cc.Node = null;
  PrevProgress: cc.Node = null;


  protected onLoad(): void {

  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.currentProgress = this.NodesContainer.ProgressSteps[Constants.currentListItem];
  }


  public updateProgress(): void {
    this.PrevProgress = this.currentProgress;
    this.currentProgress = this.NodesContainer.ProgressSteps[Constants.currentListItem];
    this.setupTween();
  }


  private setupTween(): void {
    let icon = this.currentProgress.getChildByName("icon");
    let frame = this.currentProgress.getChildByName("khungicon");
    let framePick = this.currentProgress.getChildByName("Pickicon");
    let stroke = this.currentProgress.getChildByName("ElipseStroke");
    let tick = this.currentProgress.getChildByName("tick");
    
    icon.active = true;
    tick.active = false;
    frame.active = true;
    framePick.active = false;
    stroke.color = cc.Color.fromHEX(new cc.Color, "#FFFFFF");

    if(this.PrevProgress) {
      let prev_icon = this.PrevProgress.getChildByName("icon");
      let prev_frame = this.PrevProgress.getChildByName("khungicon");
      let prev_framePick = this.PrevProgress.getChildByName("Pickicon");
      let prev_stroke = this.PrevProgress.getChildByName("ElipseStroke");
      let prev_tick = this.PrevProgress.getChildByName("tick");
      prev_icon.active = false;
      prev_tick.active = true;
      prev_frame.active = false;
      prev_framePick.active = true;
      prev_stroke.color = cc.Color.fromHEX(new cc.Color, "#00FF14");
    }

    this.callTween();
  }


  private callTween(): void {
    cc.tween(this.currentProgress)
    .to(1, {scale: 0.8}, {easing: "elasticOut"})
    .start();

    if(this.PrevProgress) {
      cc.tween(this.PrevProgress)
      .to(1, {scale: 0.6}, {easing: "elasticOut"})
      .start();
    }
  }


  public handleTakePhoto(): void {
    this.NodesContainer.Doll_Camera.active = true;
    this.NodesContainer.Progress.active = false;
    this.NodesContainer.UI.getChildByName("PickTray").active = false;
    let cameraFrame = this.NodesContainer.Doll_Camera.getChildByName("frame");
    let doll = this.NodesContainer.UI.getChildByName("Dolls");

    cc.tween(cameraFrame)
    .to(1, {opacity: 255},  {easing: 'elasticOut'})
    .start();

    cc.tween(doll)
    .to(1, {y: 40, scale: 0.22}, {easing: "elasticOut"})
    .start();

    cc.tween(this.NodesContainer.Btn_DollCamera)
    .to(1, {opacity: 255},  {easing: 'elasticOut'})
    .call(() => {
      cc.tween(this.NodesContainer.Btn_DollCamera)
      .repeatForever(
          cc.tween(this.NodesContainer.Btn_DollCamera)
              .to(0.5, { scale: 1 })
              .to(0.5, { scale: 0.9 }, { easing: 'elasticOut' })
      ).start();
    })
    .start();
  }


  private showCTA(intervalID: number): void {
    clearInterval(intervalID);
    this.scheduleOnce(() => {
      this.NodesContainer.UI.getComponent(cc.Animation).play("CTA_Anim");
    }, 0.5);

    // this.scheduleOnce(() => {
    // this.reset();
    // this.activeCasualSkinsWithAnim();
    // }, 2.5);
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


  public handleMuteSoundIronSource(): void {
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
    if (Constants.currentListItem <= 0) this.NodesContainer.BtnLeft.active = false;
  }

}
