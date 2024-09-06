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


  private registerEvent(): void {
    this.activeDressWhenClick();
    this.activeHairWhenClick();
    this.activeShoeWhenClick();

    this.NodesContainer.Btn_Submit.on(cc.Node.EventType.TOUCH_START, this.GamePlay.goToNextItem, this);
    this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskClick, this);
  }


  private hideMaskClick(): void {
    // mtg & applovin
    // Constants.currentStep >= 2 && this.GameController.installHandle()

    // ironsource
    this.handleIronSourcePlaySound();
  }


  private activeDressWhenClick(): void {
    for (let index = 0; index < this.NodesContainer.Dress_Frames.length; index++) {
      const node = this.NodesContainer.Dress_Frames[index];
      let btn = node.parent.addComponent(cc.Button);
      btn.target = btn.node;
      btn.transition = cc.Button.Transition.SCALE;

      node.on(cc.Node.EventType.TOUCH_START, () => {
        this.NodesContainer.Btn_Submit.active = true;
        this.NodesContainer.btnNext_Sprite.active = true;
        Constants.currentStep <= 2 && this.GamePlay.activeBlinkAnimForBtnSubmit();

        this.NodesContainer.Dress_Frames.forEach(frame => frame.opacity = 0);
        this.NodesContainer.Doll_Dresses.forEach(item => item.active = false);
        this.NodesContainer.Doll_Dresses[index].active = true;
        this.NodesContainer.DollDressDefault.active = false

        node.opacity = 255;
        this.NodesContainer.FX_Heart.resetSystem();
        this.GamePlay.playGreatSound();
      }, this);
    }
  }


  private activeHairWhenClick(): void {
    for (let index = 0; index < this.NodesContainer.Hair_Frames.length; index++) {
      const node = this.NodesContainer.Hair_Frames[index];
      let btn = node.parent.addComponent(cc.Button);
      btn.target = btn.node;
      btn.transition = cc.Button.Transition.SCALE;

      node.on(cc.Node.EventType.TOUCH_START, () => {
        // ironsource
        this.handleIronSourcePlaySound();

        this.NodesContainer.Btn_Submit.active = true;
        this.NodesContainer.btnNext_Sprite.active = true;
        Constants.currentStep <= 2 && this.GamePlay.activeBlinkAnimForBtnSubmit();

        this.NodesContainer.Hair_Frames.forEach(frame => frame.opacity = 0);
        this.NodesContainer.Doll_F_Hairs.forEach(item => item.active = false);
        this.NodesContainer.Doll_F_Hairs[index].active = true;
        this.NodesContainer.DollHairDefault.active = false;
        this.NodesContainer.Hand.active = false;

        node.opacity = 255;
        this.NodesContainer.FX_Heart.resetSystem();
        this.GamePlay.playGreatSound();
      }, this);
    }
  }


  private activeShoeWhenClick(): void {
    for (let index = 0; index < this.NodesContainer.Shoe_Frames.length; index++) {
      const node = this.NodesContainer.Shoe_Frames[index];
      let btn = node.parent.addComponent(cc.Button);
      btn.target = btn.node;
      btn.transition = cc.Button.Transition.SCALE;

      node.on(cc.Node.EventType.TOUCH_START, () => {
        this.GameController.installHandle();
      }, this);
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


  protected update(dt: number): void {
      this.handleMuteSoundIronSource();
  }
}
