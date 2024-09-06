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


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    for (let index = 0; index < this.NodesContainer.Dolls.length; index++) {
      const doll = this.NodesContainer.Dolls[index];
      doll.on(cc.Node.EventType.TOUCH_START, this.dollClick, this);
    }

    this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskClick, this);
  }


  private dollClick(e: cc.Event.EventTouch): void {
    if (Constants.step === 2) this.GameController.installHandle();

    // ironsource
    this.handleIronSourcePlaySound();

    if (!Constants.isCanTouch) return;

    Constants.isCanTouch = false;

    this.AudioManager.playSound(Constants.SoundTrack.pickItemSound)

    if (Constants.step === 1 && e.target.name === "doll2") {
      Constants.step += 1;
      this.NodesContainer.Hand.active = false;
      this.GamePlay.playGreatSound();
      this.NodesContainer.Lv1_Hint.color = cc.Color.WHITE;
      this.GamePlay.switchToLv2();
      this.NodesContainer.FX_Blink.resetSystem();
      this.NodesContainer.boy_answerWrong.active = false;
      this.NodesContainer.boy_answerCorrect.active = true;
      this.NodesContainer.boy.getComponent(cc.Animation).play();
    } else {
      this.NodesContainer.boy_answerWrong.active = true;
      this.NodesContainer.boy_answerCorrect.active = false;
      this.NodesContainer.boy.getComponent(cc.Animation).play();
    }

    if (Constants.step === 1) this.scheduleOnce(() => { Constants.isCanTouch = true }, 0.3);
  }


  private hideMaskClick(): void {

    // ironsource
    this.handleIronSourcePlaySound();

    // mtg & applovin
    // if (Constants.step === 2) this.GameController.installHandle();
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
