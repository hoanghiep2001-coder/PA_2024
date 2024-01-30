import { Ultils } from "../Data/Ultils";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  // node
  @property(cc.Node)
  HideMask: cc.Node = null;
  @property(cc.Node)
  Point_maggot: cc.Node = null;
  @property(cc.Node)
  Point_tweezers: cc.Node = null;
  @property(cc.Node)
  Head_tweezers: cc.Node = null;
  @property(cc.Node)
  CTA: cc.Node = null;


  @property(sp.Skeleton)
  spine_CleanHair: sp.Skeleton = null;
  @property([cc.Node])
  bubblePoints: cc.Node[] = [];
  @property([sp.Skeleton])
  spine_Bubbles: sp.Skeleton[] = [];
  @property(sp.Skeleton)
  spine_Tweezers: sp.Skeleton = null;
  @property(sp.Skeleton)
  spine_Maggot: sp.Skeleton = null;


  // state
  activeBubbleFlag: boolean = false;
  isTouchCleanHairFlag: boolean = false;
  isTouchSpineMaggotFlag: boolean = false;
  registerEventStep2Flag: boolean = false;



  protected onLoad() {
    this.CTA.active = false;
    Constants.cleanHair_Points = this.bubblePoints;
    Constants.spine_Bubbles = this.spine_Bubbles;

    // mtg & applovin
    // this.HideMask.on(cc.Node.EventType.TOUCH_START, () => {
    //   Constants.step === 3 && this.GameController.installHandle();
    // }, this);
     
    // ironsource
    this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
  }


  protected start() {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.registerEvent(Constants.step);
  }


  private registerEvent(step: number): void {
    switch (step) {
      case 1:
        this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        break;
      case 2:
        if (this.registerEventStep2Flag) {
          return;
        }

        this.registerEventStep2Flag = true;
        this.Point_tweezers.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.Point_tweezers.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.Point_tweezers.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.Point_tweezers.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        break;
      case 3:
        this.CTA.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        break;
      default:
        break;
    }
  }


  private offEvent(step: number): void {
    switch (step) {
      case 1:
        this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_START);
        this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_MOVE,);
        this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_END);
        this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_CANCEL);
        break;
      case 2:
        this.Point_tweezers.off(cc.Node.EventType.TOUCH_START);
        this.Point_tweezers.off(cc.Node.EventType.TOUCH_MOVE);
        this.Point_tweezers.off(cc.Node.EventType.TOUCH_END);
        this.Point_tweezers.off(cc.Node.EventType.TOUCH_CANCEL);
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
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }

    Constants.ironSource.isPlayBgSound = true;
  }


  private touchStart(event: cc.Touch): void {
    if (!Constants.isCanTouch) {
      return;
    }

    if(Constants.step === 1) {
      this.AudioManager.playSound(Constants.SoundTrack.conClearSound);
    }

    Constants.step === 3 && this.GameController.installHandle();

    this.GamePlay.getComponent(cc.Animation).stop("GamePlay_TutorialStep3Anim");
    this.GamePlay.getComponent(cc.Animation).stop("GamePlay_TutorialStep2Anim");
    this.GamePlay.getComponent(cc.Animation).stop("GamePlay_TutorialAnim");
    
    Constants.isTouch = true;
    this.GamePlay.hair_tut.active = false;
    this.spine_CleanHair.setAnimation(0, "action", true);
    this.GamePlay.hand.active = false;
    this.GamePlay.hand.opacity = 0;
    this.GamePlay.overlay.opacity = 0;
    
    this.handleIronSourcePlaySound();
  }


  private touchMove(event: cc.Touch): void {
    if (!Constants.isCanTouch) {
      return;
    }

    this.GamePlay.hair_tut.active = false;
    this.GamePlay.hand.active = false;
    this.GamePlay.overlay.opacity = 0;

    // step 1
    if (Constants.step === 1) {
      Constants.currentPosition = this.node.convertToNodeSpaceAR(event.getLocation());

      let bdx = this.spine_CleanHair.node.getBoundingBox();
      Ultils.TouchArea.checkCollideBubblePoints(bdx);
      this.spine_CleanHair.node.setPosition(
        Constants.currentPosition.x + Constants.Responsive.calculatedX,
        Constants.currentPosition.y + Constants.Responsive.calculatedY
      );
      if(!this.isTouchCleanHairFlag && Constants.isTouchCleanHair) {
        this.isTouchCleanHairFlag = true;
        this.AudioManager.playSound(Constants.SoundTrack.conClearSound);
      }
    }


    // step 2
    if (Constants.step === 2) {
      Constants.currentPosition = new cc.Vec2(
        event.getLocation().x - cc.winSize.width / 2,
        event.getLocation().y - cc.winSize.height / 2
      );

      this.Point_tweezers.setPosition(
        Constants.currentPosition.x + Constants.Responsive.calculatedX,
        Constants.currentPosition.y + Constants.Responsive.calculatedY
      );
      this.Head_tweezers.setPosition(
        Constants.currentPosition.x - 45 + Constants.Responsive.calculatedX,
        Constants.currentPosition.y - 60 + Constants.Responsive.calculatedY
      );
      this.spine_Tweezers.node.setPosition(
        Constants.currentPosition.x - 50 + Constants.Responsive.calculatedX,
        Constants.currentPosition.y - 70 + Constants.Responsive.calculatedY
      );

      let bdx = this.Head_tweezers.getBoundingBox();
      let maggot = this.Point_maggot.getBoundingBox();
      Ultils.TouchArea.checkCollideMaggot(bdx, maggot);
    }
  }


  private touchEnd(event: cc.Touch) {
    if (!Constants.isCanTouch) {
      return;
    }

    this.scheduleOnce(() => {
      if (Constants.step === 1 && !Constants.isDoneCleanHair) {
        this.GamePlay.hair_tut.active = true;
      }
    }, 3);

    this.isTouchCleanHairFlag = false;
    Constants.isTouchCleanHair = false;
    Constants.isTouch = true; 
    this.spine_CleanHair.setAnimation(0, "idle", false);
    this.AudioManager.stopSound(Constants.SoundTrack.conClearSound);
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


  private handleActiveBubbles(): void {
    this.activeBubbleFlag = true;
    this.spine_Bubbles.forEach(bubble => bubble.setAnimation(0, "idle03_bubble", false));
    this.offEvent(Constants.step);
  }


  private handleActiveSpineMaggot(): void {
    this.GamePlay.circle.active = false;
    this.isTouchSpineMaggotFlag = true;
    this.spine_Maggot.setAnimation(0, "action03_squeze_big", false);
    this.setCompleteSpine();

    this.spine_Tweezers.node.active = false;
    this.offEvent(Constants.step);

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
    }, 0.5);
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    }, 1);
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    }, 1.5);
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    }, 2);
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    }, 2.5);
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun3Sound);
    }, 3.2);
  }


  private setCompleteSpine(): void {
    this.spine_Maggot.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
      if (trackEntry.animation.name === "action03_squeze_big") {
        this.AudioManager.playSound(Constants.SoundTrack.completeSound);

        this.scheduleOnce(() => {
          Constants.step = 3;
          this.CTA.active = true;
          this.GamePlay.getComponent(cc.Animation).play("GamePlay_TutorialStep3Anim");
          this.registerEvent(3);
        }, 0.5)
      }
    });
  }


  protected update(dt: number): void {
    !this.activeBubbleFlag && Constants.isDoneCleanHair && this.handleActiveBubbles();
    !this.isTouchSpineMaggotFlag && Constants.isTouchMaggot && this.handleActiveSpineMaggot();
    Constants.isDoneStep1 && !this.registerEventStep2Flag && this.registerEvent(2);

    this.handleMuteSoundIronSource();
  }
}
