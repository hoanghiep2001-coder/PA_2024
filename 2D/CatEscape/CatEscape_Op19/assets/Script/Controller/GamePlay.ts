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
  @property(cc.Node)
  touchArea: cc.Node = null;


  coutingTime: number = 0;
  isCrouch: boolean = false;
  timeoutId: number = null;

  protected onLoad(): void {

  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.handleYourOrientation();
    this.activeBubbleAnimForText();

    cc.view.setResizeCallback (()=>{
        this.handleYourOrientation();
    });

    this.activeHint(0);
  }


  public caculateTime(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); 
    }

    this.timeoutId = setTimeout(() => {
      let random = cc.math.randomRangeInt(0, this.NodesContainer.Cats.length);
      this.activeHint(random);
    }, 3000);
  }


  private activeBubbleAnimForText(): void {
    cc.tween(this.NodesContainer.Text)
    .repeatForever(
        cc.tween(this.NodesContainer.Text)
            .to(0.5, { scale: 0.8 })
            .to(0.5, { scale: 0.83 }, { easing: 'elasticOut' })
    ).start();
  }


  private unActiveHints(): void {
    for (let index = 0; index < this.NodesContainer.Hints.length; index++) {
      const hint = this.NodesContainer.Hints[index];
      hint.active = false
    }
  }


  private activeHint(index: number): void {
    this.unActiveHints();
    this.NodesContainer.Hints[index].active = true;
    cc.tween(this.NodesContainer.Hints[index])
    .to(0.5, {opacity: 255})
    .start();
    this.NodesContainer.Hints[index].getComponent(cc.Animation).play();
  }


  public handleActiveCat(index: number): void {
      Constants.countCat >= 3 && this.GameController.installHandle();
      Constants.countCat += 1;
      this.AudioManager.playSound(Constants.SoundTrack.CatSound);
      this.AudioManager.playSound(Constants.SoundTrack.ClickSound);
      this.NodesContainer.Cats[index].opacity = 255;
      this.NodesContainer.Stars[index].active = true;
      this.NodesContainer.Hints[index].active = false;
      
      this.touchArea.getComponent("TouchAreaController").offEvent();
      this.NodesContainer.Cats.splice(index, 1);
      this.NodesContainer.Stars.splice(index, 1);
      this.NodesContainer.Hints.splice(index, 1);

      this.touchArea.getComponent("TouchAreaController").registerEvent();
  }


  private handleYourOrientation(): void {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.NodesContainer.CatBackground.y = 32;
      this.NodesContainer.RotateArea.active = false;
    } else {
      this.NodesContainer.CatBackground.y = 0;
      this.NodesContainer.RotateArea.active = true;
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


  protected update(dt: number): void {
    // this.handleMuteSoundIronSource();
  }

}
