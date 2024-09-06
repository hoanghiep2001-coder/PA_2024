import { SpineAnims } from "../Data/Anims";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(NodeContainer)
  NodeContainer: NodeContainer = null;

  @property(cc.Node)
  star: cc.Node = null;
  @property(cc.Node)
  star1: cc.Node = null;
  @property(cc.Node)
  star2: cc.Node = null;
  @property(sp.Skeleton)
  sp_mouth: sp.Skeleton = null;


  // Tools
  @property(sp.Skeleton)
  sp_dryer: sp.Skeleton = null;
  @property(cc.Node)
  Teeth_scum: cc.Node = null;
  @property(cc.Node)
  Options: cc.Node = null;
  @property(cc.Node)
  hand: cc.Node = null;


  // state
  trackEnTry: sp.spine.TrackEntry = null;
  isActiveRemoveSound1: boolean = false;
  isActiveRemoveSound2: boolean = false;
  isActiveRemoveSound3: boolean = false;
  isActiveRemoveSound4: boolean = false;

  activeCTA: boolean = false;
  CTA_steps: number = 0;
  CTA_thumbnail: cc.Node = null;
  CTA_isBtn: boolean = false;
  CTA_anyThumbnail: boolean = true;


  protected onLoad(): void {
  }


  protected start(): void {
    this.NodeContainer.CTA.active = false;
    this.hideTears();

    this.scheduleOnce(() => {
      this.showTools(this.NodeContainer.Tool, true);
    }, 2.5);

    this.scheduleOnce(() => {
      this.NodeContainer.Delight_EyeAlert.active = true;
      this.NodeContainer.Hand.active = true;
    }, 3)
    
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);


    // debug 
    // this.debug();
  }


  private debug(): void {
    // hide tear
    this.NodeContainer.Tears.forEach(node => this.hideAnim(node))

    // show tools
    this.showTools(this.NodeContainer.Tool, true);

    // CTA anim
    // this.activeCTAAnim();
  }


  private hideTears(): void {
    this.AudioManager.playSound(Constants.SoundTrack.crySound);
    this.scheduleOnce(() => {this.NodeContainer.Tears.forEach(node => this.hideAnim(node));}, 1.5);
    // this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.screamHoooSound);}, 2.5);
  }


  private activeCTAAnim(): void {
    this.NodeContainer.CTA.active = true;
    this.CTA_thumbnail = this.NodeContainer.CTA_logo;
    
    cc.tween(this.NodeContainer.CTA_overlay)
      .to(0.5, { opacity: 150 })
      .call(() => {        
        this.showThumbnailTween(this.CTA_thumbnail, this.CTA_anyThumbnail, this.CTA_isBtn);
      })
      .start()
  }


  private showThumbnailTween(thumbnail: cc.Node, anyThumbnail: boolean, isBtn: boolean): void {
    console.log(this.NodeContainer.CTA.active);
    switch (this.CTA_steps) {
      case 0:
        this.CTA_thumbnail = this.NodeContainer.CTA_logo;
        break;
      case 1:
        this.CTA_thumbnail = this.NodeContainer.CTA_icon;
        break;
      case 2:
        this.CTA_thumbnail = this.NodeContainer.CTA_Btn;
        this.CTA_anyThumbnail = false;
        this.CTA_isBtn = true;
        break;
      default:
        break;
    }

    this.CTA_steps += 1;

    cc.tween(thumbnail)
      .to(0.5, { opacity: 255 })
      .call(() => {
        anyThumbnail && this.showThumbnailTween(this.CTA_thumbnail, this.CTA_anyThumbnail, this.CTA_isBtn)
        isBtn && this.activeBtnTween(this.CTA_thumbnail)
      }
      ).start();
  }


  private activeBtnTween(btn: cc.Node): void {
    cc.tween(btn)
      .repeatForever(
        cc.tween(btn)
          .to(0.5, { scale: 0.45 })
          .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })
      ).start();
  }


  public showIntro(): void {
    this.NodeContainer.Btn_1.active = false;
    this.NodeContainer.MainGame.active = false;
    this.NodeContainer.intro.active = true;

    // active sound intro
    this.AudioManager.playSound(Constants.SoundTrack.walkSound);

    // declare vars
    let Delight_Intro = this.NodeContainer.intro.getChildByName("Delight");
    let spine_Delight: sp.Skeleton = Delight_Intro.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
    let Spider_Intro = this.NodeContainer.intro.getChildByName("Spider");

    // scale intro
    cc.tween(Delight_Intro)
      .to(4, { scale: 1.15 })
      .start();

    // caculated time to active/unactive Intro steps & sounds
    this.scheduleOnce(() => {
      Spider_Intro.active = true;
      this.AudioManager.stopSound(Constants.SoundTrack.walkSound);
    }, 1.5);


    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.spiderSound) }, 2.5);


    this.scheduleOnce(() => {
      Spider_Intro.active = false;
      spine_Delight.setAnimation(0, SpineAnims.Intro_DollAnim.Scare, false);
    }, 3.2);


    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.hmmSound) }, 5);


    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.scareSound) }, 6.5);


    this.scheduleOnce(() => {
      this.NodeContainer.CTA.active = true;

      this.scheduleOnce(() => {
        cc.tween(this.NodeContainer.CTA_Btn)
        .repeatForever(
          cc.tween(this.NodeContainer.CTA_Btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })
        ).start();
      }, 1.5)
    }, 7);
  }


  private showHint(): void {
    // this.hand.active = true;
    // cc.tween(this.hand)
    //   .to(0.5, { opacity: 255 })
    //   .call(() => {
    //     this.hand.getComponent(cc.Animation).play("Hand_HintAnim");
    //   })
    //   .start()
  }


  private hideAnim(node: cc.Node) {
    cc.tween(node)
      .to(0.5, { opacity: 0 })
      .start();
  }


  private showTools(tool: cc.Node, isActive: boolean): void {
    if (!isActive) tool.active = true;
    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);
    let position = tool.getPosition();
    tool.setPosition(position.x - 30, position.y);
    cc.tween(tool)
      .to(0.5, { x: position.x, opacity: 255 })
      .start();

    this.showHint();
  }


  public checkCollideFly(): void {
    let area = this.NodeContainer.ToolHeadArea.getBoundingBox();
    let fly = this.NodeContainer.Fly.getBoundingBox();

    if(area.intersects(fly)) {
      Constants.isCanTouch = false;
      Constants.isRemovedFly = true;

      this.NodeContainer.Spine_Remove.node.active = true;
      this.NodeContainer.Tool.active = false;
      this.trackEnTry = this.NodeContainer.Spine_Remove.setAnimation(0, "Action", false);
      this.setCompleteSpine();
    }
  }


  private setCompleteSpine(): void {
    this.NodeContainer.Spine_Remove.setCompleteListener((track: sp.spine.TrackEntry) => {
      if(track.animation.name === "Action") {
        this.doneFlowAndShowNextOption();
      }
    })
  }


  private getCurentTimeOfTrack(): void {
    if(this.trackEnTry) {
      if(this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
        this.isActiveRemoveSound1 = true;
        this.NodeContainer.Fly.active = false;
        this.NodeContainer.Delight_EyeFly.active = false;
        this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
      }

      if(this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
        this.isActiveRemoveSound2 = true;
        this.NodeContainer.Fly.active = false;
        this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
      }

      if(this.trackEnTry.trackTime >= 2 && !this.isActiveRemoveSound3) {
        this.isActiveRemoveSound3 = true;
        this.NodeContainer.Fly.active = false;
        this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
      }

      if(this.trackEnTry.trackTime >= 2.5) {
        this.isActiveRemoveSound4 = true;
        this.AudioManager.playSound(Constants.SoundTrack.gapRuoiSound);
      }
    }
  }


  private doneFlowAndShowNextOption(): void {
    this.AudioManager.playSound(Constants.SoundTrack.DoneStepSound);
    this.star2.getComponent(cc.Animation).play("StarAnim");

    this.scheduleOnce(() => {
      this.NodeContainer.Btn_1.active = true;

      cc.tween(this.NodeContainer.Btn_1)
      .to(0.5, {opacity: 255})
      .call(() => {
        cc.tween(this.NodeContainer.Btn_1)
        .repeatForever(
          cc.tween(this.NodeContainer.Btn_1)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })
        ).start();
      })
      .start();
      // this.Options.active = true;
      // this.Options.getComponent(cc.Animation).play("ShowOptions");

      // mtg & applovin
      // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }, 1.5)
  }


  protected update(dt: number): void {
    // this.activeCTA && this.activeCTAAnim();
    !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
  }

}
