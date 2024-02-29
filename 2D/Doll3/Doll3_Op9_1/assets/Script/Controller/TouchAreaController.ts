import { Ultils } from "../Data/Ultils";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  // node


  // state


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    // ironsource
    // this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);

    this.NodesContainer.UI_button_revenge.on(cc.Node.EventType.TOUCH_START, this.btnTouchStart, this);
    this.NodesContainer.item_Dress_btn.on(cc.Node.EventType.TOUCH_START, this.btnDressTouchStart, this);
  }


  private btnTouchStart(): void {
    if (!Constants.isCanClick || Constants.isChooseRevenge) return;
    // this.handleIronSourcePlaySound();
    this.AudioManager.playSound(Constants.SoundTrack.clickSound);
    this.NodesContainer.buttons.active = false;
    this.NodesContainer.scene1.active = false;
    this.NodesContainer.GamePlay.getComponent(cc.Animation).play("GamePlay_ShowScene3");
    this.NodesContainer.logo.getComponent(cc.Sprite).enabled = false;
    this.NodesContainer.icon.getComponent(cc.Sprite).enabled = false;
    this.scheduleOnce(() => {
      Constants.isChooseRevenge = true;
    }, 2);
  }


  private btnDressTouchStart(): void {
    if(!Constants.isChooseRevenge || Constants.isChooseDress) return;
    Constants.isChooseDress = true;
    this.AudioManager.playSound(Constants.SoundTrack.clickSound);
    this.NodesContainer.doll_dress.active = true;
    this.NodesContainer.doll_dress_default.active = false;
    this.NodesContainer.hand_2.active = false;
    this.NodesContainer.effect_blink_Doll.resetSystem();
    this.NodesContainer.effect_heart.resetSystem();
    this.AudioManager.playSound(Constants.SoundTrack.woaAnimeSound);
    this.scheduleOnce(() => {this.showCTA()}, 1.5);
  }


  private showCTA(): void {
    this.NodesContainer.CTA.active = true;
    this.NodesContainer.CTA_btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // applovin & mtg
    this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
  //   this.handleMuteSoundIronSource();
  // }
}
