
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
    // ironsource
    this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, () => {
      this.handleIronSourcePlaySound();
    }, this);

    this.NodesContainer.Btn_Start.on(cc.Node.EventType.TOUCH_START, this.GamePlay.goToDressUp, this);
    this.NodesContainer.OpenScene_BtnInstall.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    this.NodesContainer.DressUp_BtnInstall.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    this.activeFrameIconsWhenClick();
    this.activeDressWhenClick();
    this.activeHairWhenClick();
    this.activeShoesWhenClick();

    this.NodesContainer.Btn_Submit.on(cc.Node.EventType.TOUCH_START, this.GamePlay.goToBattle, this);
  }


  private activeFrameIconsWhenClick(): void {
    for (let index = 0; index < this.NodesContainer.Frame_Icons.length; index++) {
      const node = this.NodesContainer.Frame_Icons[index];
      node.on(cc.Node.EventType.TOUCH_START, () => {

        this.NodesContainer.Frame_Icons.forEach(frame => frame.opacity = 0);
        this.NodesContainer.Items.forEach(item => item.active = false);
        this.NodesContainer.Items[index].active = true;

        node.opacity = 255;
      }, this);
    }
  }


  private activeDressWhenClick(): void {
    for (let index = 0; index < this.NodesContainer.Dress_Frames.length; index++) {
      const node = this.NodesContainer.Dress_Frames[index];
      node.on(cc.Node.EventType.TOUCH_START, () => {
        !Constants.isShowBtnSubmit && this.GamePlay.activeBlinkAnimForBtnSubmit();

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
      node.on(cc.Node.EventType.TOUCH_START, () => {
        !Constants.isShowBtnSubmit && this.GamePlay.activeBlinkAnimForBtnSubmit();

        this.NodesContainer.Hair_Frames.forEach(frame => frame.opacity = 0);
        this.NodesContainer.Doll_F_Hairs.forEach(item => item.active = false);
        this.NodesContainer.Doll_F_Hairs[index].active = true;
        this.NodesContainer.DollHairDefault.active = false;

        node.opacity = 255;
        this.NodesContainer.FX_Heart.resetSystem();
        this.GamePlay.playGreatSound();
      }, this);
    }
  }


  private activeShoesWhenClick(): void {
    for (let index = 0; index < this.NodesContainer.Shoe_Frames.length; index++) {
      const node = this.NodesContainer.Shoe_Frames[index];
      node.on(cc.Node.EventType.TOUCH_START, () => {
        !Constants.isShowBtnSubmit && this.GamePlay.activeBlinkAnimForBtnSubmit();

        this.NodesContainer.Shoe_Frames.forEach(frame => frame.opacity = 0);
        this.NodesContainer.Doll_Shoes.forEach(item => item.active = false);
        this.NodesContainer.Doll_Shoes[index].active = true;

        node.opacity = 255;
        this.NodesContainer.FX_Heart.resetSystem();
        this.GamePlay.playGreatSound();
      }, this);
    }
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


  // protected update(dt: number): void {
  //     this.handleMuteSoundIronSource();
  // }
}
