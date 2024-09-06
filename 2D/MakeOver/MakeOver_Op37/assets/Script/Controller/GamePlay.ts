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
  touchArea: cc.Node = null;


  // Tools
  @property(cc.Node)
  hand: cc.Node = null;
  @property(cc.Node)
  scratchAble: cc.Node = null;


  // state
  trackEnTry: sp.spine.TrackEntry = null;

  isActiveRemoveSound1: boolean = false;
  isActiveRemoveSound2: boolean = false;
  isActiveRemoveSound3: boolean = false;
  isActiveRemoveSound4: boolean = false;

  isDoneScratchAble: boolean = false;

  activeCTA: boolean = false;
  CTA_steps: number = 0;
  CTA_thumbnail: cc.Node = null;
  CTA_isBtn: boolean = false;
  CTA_anyThumbnail: boolean = true;


  protected onLoad(): void {

  }


  protected start(): void {
    this.NodeContainer.CTA.active = false;

    this.AudioManager.playSound(Constants.SoundTrack.bgSound);

    this.scaleToDollEar();
  }


  private scaleToDollEar(): void {
    // const DollCurrentPos = this.NodeContainer.Doll.getPosition();

    this.scheduleOnce(() => {
      cc.tween(this.NodeContainer.Doll)
        .to(1, { y:  -100, scale: 1.6 })
        .call(() => {
          Constants.isCanTouch = true;

          this.NodeContainer.Hint_Circle.active = true;

          this.showTools(this.NodeContainer.Flow1_spineTool, true)
        })
        .start();
    }, 1.5)
  }


  private showHint(): void {
    this.NodeContainer.Hand.active = true;
    this.NodeContainer.Hand.getComponent(cc.Animation).play();

    Constants.isDoneStep1 && this.showHintFlow2();

  }


  private showHintFlow2(): void {
    this.NodeContainer.Hint_Circle_2.active = true;
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


  private showTools(tool: cc.Node, isActive: boolean): void {

    tool.opacity = 0;

    if (!isActive) tool.active = true;

    Constants.isCanTouch = true;

    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);

    let position = tool.getPosition();

    tool.setPosition(position.x - 30, position.y);

    cc.tween(tool)
      .to(0.5, { x: position.x, opacity: 255 })
      .call(() => {

        this.showHint();
      }
      )
      .start();

  }


  public checkCollideAcne(): void {
    const toolHeadBdx = this.NodeContainer.Flow1_ToolHead.getBoundingBox();
    const area = this.NodeContainer.Flow1_Area;
    const areaBdx = area.getBoundingBox();

    if (areaBdx.intersects(toolHeadBdx)) {

      Constants.isCanTouch = false;

      this.NodeContainer.Doll_SpineRmMaggot.node.active = true;

      this.trackEnTry = this.NodeContainer.Doll_SpineRmMaggot.setAnimation(0, "Action", false);

      this.NodeContainer.Flow1_Tool.active = false;

      this.NodeContainer.Flow1_spineTool.active = false;

      this.NodeContainer.Flow1_Tool.opacity = 0;

      this.setCompleteSpine(this.NodeContainer.Doll_SpineRmMaggot);
    }
  }


  private setCompleteSpine(removeSpine: sp.Skeleton): void {
    removeSpine.setCompleteListener((track: sp.spine.TrackEntry) => {
      if (track.animation.name) {
        this.doneFlowAndShowNextOption();
      }
    })
  }


  private getCurentTimeOfTrack(): void {
    if (this.trackEnTry) {
      if (this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
        this.isActiveRemoveSound1 = true;
        this.NodeContainer.Doll_Maggot.active = false;

        this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
      }

      if (this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
        this.isActiveRemoveSound2 = true;
        this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
      }

      if (this.trackEnTry.trackTime >= 5) {
        this.isActiveRemoveSound4 = true;
        this.AudioManager.stopSound(Constants.SoundTrack.nhoMun2Sound);
        this.AudioManager.playSound(Constants.SoundTrack.gapRuoiSound);
      }
    }
  }


  private doneFlowAndShowNextOption(): void {
    !Constants.isDoneStep1 && this.touchArea.getComponent("TouchAreaController").registerFlow2Event();

    Constants.isDoneStep1 = true;

    this.AudioManager.playSound(Constants.SoundTrack.DoneStepSound);

    this.AudioManager.playSound(Constants.SoundTrack.hmmSound);

    this.star.getComponent(cc.Animation).play("StarAnim");

    this.scheduleOnce(() => { this.showTools(this.NodeContainer.Flow2_Tool, false) }, 1.5)
  }


  public checkCollideEarsAcne(): void {
    const toolHeadBdx = this.NodeContainer.Flow2_ToolHead.getBoundingBox();
    const area = this.NodeContainer.Flow2_Area;
    const areaBdx = area.getBoundingBox();

    if (areaBdx.intersects(toolHeadBdx)) {

      Constants.isCanTouch = false;

      Constants.collideEarAcneNumber += 1;

      this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);

      this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.bopMunSound) }, 0.5);

      if (Constants.collideEarAcneNumber === 1) {
        this.NodeContainer.Doll_Ear.setAnimation(0, SpineAnims.EarAnim.Action1, false);

        this.NodeContainer.Doll_Poke.getComponent(cc.Animation).play("Poke_Anim1");


      }

      else {
        this.NodeContainer.Doll_Ear.setAnimation(0, SpineAnims.EarAnim.Action2, false);

        this.NodeContainer.Doll_Poke.getComponent(cc.Animation).play("Poke_Anim2");

        this.donePA();
      }

      this.NodeContainer.Flow2_Tool.active = false;

      this.NodeContainer.Flow2_Tool.opacity = 0;

      this.NodeContainer.Flow2_Tool.setPosition(this.NodeContainer.initPosTool_Flow2);

      this.setCompleteSpine(this.NodeContainer.Doll_Ear);
    }
  }


  private donePA(): void {
    Constants.isToStore = true;
  }


  protected update(dt: number): void {
    !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
  }

}
