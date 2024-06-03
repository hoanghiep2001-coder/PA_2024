import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;

  @property(cc.Node)
  background: cc.Node = null;
  @property([sp.Skeleton])
  spine_Bubbles: sp.Skeleton[] = [];
  @property(cc.Node)
  hair_tut: cc.Node = null;
  @property(cc.Node)
  hand: cc.Node = null;
  @property(cc.Node)
  overlay: cc.Node = null;
  @property(cc.Node)
  circle: cc.Node = null;

  @property(cc.Node)
  character: cc.Node = null;
  @property(cc.Node)
  character_dirtyHair: cc.Node = null;

  @property([cc.ParticleSystem])
  Effect_Blinks: cc.ParticleSystem[] = [];

  doneStep1Flag: boolean = false;


  protected onLoad(): void {
    this.hair_tut.active = false;
    this.circle.active = false;
    this.hand.active = false;
  }


  protected start(): void {
    this.handleGamePlay();
  }


  private handleGamePlay(): void {
    this.getComponent(cc.Animation).play("GamePlay_TutorialAnim");

    this.scheduleOnce(() => {
      // ironsource
      // this.AudioManager.playSound(Constants.SoundTrack.moveItemSound)
    }, 0.5);

    this.scheduleOnce(() => {
      this.hair_tut.active = true;
      this.hand.active = true;
    }, 1);
    
    this.scheduleOnce(() => {
      Constants.isCanTouch = true;
    }, 2)
  }


  private runDoneStep1Anim(): void {
    this.doneStep1Flag = true;
    this.AudioManager.stopSound(Constants.SoundTrack.conClearSound);
    this.getComponent(cc.Animation).play("GamePlay_DoneStep1Anim");
    
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.moveItemSound)
    }, 0.8)

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.showerSound);
    }, 1.5)

    this.scheduleOnce(() => {
      this.spine_Bubbles[0].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[1].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[2].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[3].setAnimation(0, "action04_bubble_clean", false);
    }, 1.9);

    this.scheduleOnce(() => {
      this.spine_Bubbles[4].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[5].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[6].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[7].setAnimation(0, "action04_bubble_clean", false);
    }, 2.3);

    this.scheduleOnce(() => {
      this.spine_Bubbles[8].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[9].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[10].setAnimation(0, "action04_bubble_clean", false);
    }, 2.7);

    this.scheduleOnce(() => {
      this.spine_Bubbles[11].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[12].setAnimation(0, "action04_bubble_clean", false);
      this.spine_Bubbles[13].setAnimation(0, "action04_bubble_clean", false);
    }, 3.1);

    this.scheduleOnce(() => {
      Constants.step = 2;
      Constants.isDoneStep1 = true;
    }, 3.5);

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.completeSound);
      this.Effect_Blinks.forEach(effect => effect.resetSystem());

      cc.tween(this.character)
      .to(1, {scale: 0.85})
      .start();
      cc.tween(this.character_dirtyHair)
      .to(1, {opacity: 0})
      .start();
    }, 4.3)

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.woaAnimeSound);
    }, 5.3)

    this.scheduleOnce(() => {
      this.getComponent(cc.Animation).play("GamePlay_TutorialStep2Anim");
      this.circle.active = true;
    }, 6.5)

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.moveItemSound)
    }, 7);
    
    this.scheduleOnce(() => {
      this.hand.active = true;
    }, 7.5)
  }


  protected update(dt: number): void {
      !this.doneStep1Flag && Constants.isDoneCleanHair && this.runDoneStep1Anim();
  }

}
