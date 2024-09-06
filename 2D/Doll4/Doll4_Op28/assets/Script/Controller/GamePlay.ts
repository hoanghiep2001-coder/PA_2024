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
    this.NodesContainer.DollPoint.node.active = false;
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.handleGamePlay();
  }


  private handleGamePlay(): void {
    this.activeBlinkAnimForBtnStart();
  }


  private activeBlinkAnimForBtnStart(): void {
    cc.tween(this.NodesContainer.Btn_Start)
      .repeatForever(
        cc.tween(this.NodesContainer.Btn_Start)
          .to(0.5, { scale: 0.3 })
          .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })
      ).start();
  }


  public activeBlinkAnimForBtnSubmit(): void {
    Constants.isShowBtnSubmit = true;
    this.NodesContainer.Btn_Submit.active = true;

    if(Constants.isRotate) {
      cc.tween(this.NodesContainer.Btn_Submit)
      .repeatForever(
        cc.tween(this.NodesContainer.Btn_Submit)
          .to(0.5, { scale: 0.45 })
          .to(0.5, { scale: 0.4 }, { easing: 'elasticOut' })
      ).start();
    } else {
      cc.tween(this.NodesContainer.Btn_Submit)
      .repeatForever(
        cc.tween(this.NodesContainer.Btn_Submit)
          .to(0.5, { scale: 0.35 })
          .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })
      ).start();
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


  public goToDressUp(): void {
    Constants.isClickStartBtn = true;
    this.AudioManager.playSound(Constants.SoundTrack.swtichItemSound);
    this.AudioManager.playSound(Constants.SoundTrack.chickFunSound)
    this.AudioManager.stopSound(Constants.SoundTrack.bgSound)
    this.NodesContainer.OpenScene.active = false;
    this.NodesContainer.DressUpScene.active = true;
    this.NodesContainer.BG.active = false;

    this.handleIronSourcePlaySound();
  }


  public goToBattle(): void {
    this.AudioManager.playSound(Constants.SoundTrack.pickItemSound);
    this.NodesContainer.DressUp_Container.active = false;
    this.NodesContainer.Doll.opacity = 0;
    this.NodesContainer.BG.active = true;
    this.NodesContainer.Doll.scale = Constants.Responsive.calculatedScale;
    this.NodesContainer.Doll.setPosition(
      Constants.Responsive.calculatedX, 
      Constants.Responsive.calculatedY
      )
    // !Constants.isRotate && this.NodesContainer.Doll.setPosition(-80, -140);
    // Constants.isRotate && this.NodesContainer.Doll.setPosition(-180, -110);
    this.scheduleOnce(() => {      
      this.NodesContainer.DollPoint.node.active = true;
      this.NodesContainer.DollPoint.string = `0 %`;
      this.NodesContainer.UI.getComponent(cc.Animation).play("UI_ShowBattle");

      // caculate Doll Point
      this.scheduleOnce(() => {Constants.isStartCalculate = false
        Constants.isStartCalculate = true;
      }, 0.5)

      this.scheduleOnce(() => {Constants.isStartCalculate = false;}, 1.2)
      this.scheduleOnce(() => {Constants.isStartCalculate = true;}, 1.6)
      this.scheduleOnce(() => {Constants.isStartCalculate = false;}, 2.2)
      this.scheduleOnce(() => {Constants.isStartCalculate = true;}, 2.4)

      this.scheduleOnce(() => {
        this.NodesContainer.CTA.active = true;
        this.NodesContainer.CTA.getComponent(cc.Animation).play("CTA_Anim");

        cc.tween(this.NodesContainer.CTA_Btn)
        .repeatForever(
          cc.tween(this.NodesContainer.CTA_Btn)
            .to(0.5, { scale: 0.5 })
            .to(0.5, { scale: 0.53 }, { easing: 'elasticOut' })
        ).start();

        this.NodesContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        // this.NodesContainer.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
      }, 5.5)
    }, 1);

    this.scheduleOnce(() => {
      Constants.isStartCalculate = false;
      this.AudioManager.playSound(Constants.SoundTrack.Fx_Lose);
    }, 4);

  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      Constants.ironSource.isPlayBgSound = true;
      Constants.isClickStartBtn 
      ? this.AudioManager.playSound(Constants.SoundTrack.chickFunSound)
      : this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }

  }


  private handleMuteSoundIronSource(): void {
    Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

    if (Constants.ironSource.State) {
      if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
        Constants.ironSource.SoundState = true;

        Constants.isClickStartBtn 
        ? this.AudioManager.playSound(Constants.SoundTrack.chickFunSound)
        : this.AudioManager.playSound(Constants.SoundTrack.bgSound);
      }

      if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
        Constants.ironSource.SoundState = false;
        this.AudioManager.stopAllSound();
      }
    }
  }


  protected update(dt: number): void {
    
      if(Constants.isStartCalculate) {
        this.dollPrecent += 0.4;
        this.opponentPrecent += 0.6;
        this.NodesContainer.DollPoint.string = `${Math.floor(this.dollPrecent)} %`;
        this.NodesContainer.Opponent
        .getChildByName("DollPoint").getComponent(cc.Label).string = `${Math.floor(this.opponentPrecent)} %`;
      }

      this.handleMuteSoundIronSource();
  }

}
