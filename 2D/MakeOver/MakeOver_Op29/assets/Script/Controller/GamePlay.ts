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


  // state
  tweezersStartPos: cc.Vec2 = null;
  tweezersPointStartPos: cc.Vec2 = null;
  isRunFlow1: boolean = false;
  checkCleanserFlag: boolean = false;
  checkshowTweezersFlag: boolean = false;
  isRemovingMaggot: boolean = false;


  protected onLoad(): void {
    this.NodeContainer.Text_Jimin.opacity = 0;
    this.NodeContainer.Text_Drag.opacity = 0;
    this.NodeContainer.sp_Cleanser.node.active = false;
    this.NodeContainer.Cleanser.opacity = 0;
    this.NodeContainer.tweezers.opacity = 0;
    this.tweezersStartPos = this.NodeContainer.sp_Tweezers.node.getPosition();
    this.tweezersPointStartPos = this.NodeContainer.Point_Tweezers.getPosition();

    this.NodeContainer.Acne1_1.active = false;
    this.NodeContainer.Acne1_2.active = false;
    this.NodeContainer.Acne2_1.active = false;
    this.NodeContainer.Acne2_2.active = false;
  }


  protected start(): void {
    this.handleGamePlay();
  }




  private handleGamePlay(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.scheduleOnce(() => { this.NodeContainer.Text_Jimin.getComponent(cc.Animation).play("ShowAnim") }, 1);
    this.scheduleOnce(() => {
      this.NodeContainer.Bg_2.getComponent(cc.Animation).play("ShowAnim");
      this.NodeContainer.Doll.getComponent(cc.Animation).play("Doll_ScaleAnim");
      this.NodeContainer.Doll.getChildByName("JiminBase").getComponent(cc.Animation).stop();
      this.hideUIFirstStep();
    }, 2);

    this.scheduleOnce(() => {
      this.NodeContainer.Cleanser.getComponent(cc.Animation).play("ShowAnim");
      this.NodeContainer.sp_Cleanser.node.active = true;
      this.showTools(this.NodeContainer.sp_Cleanser);
    }, 3.5);
    this.scheduleOnce(() => {
      this.NodeContainer.Text_Drag.getComponent(cc.Animation).play("ShowAnim");
    }, 4.5);
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.xitNuocSound);
    }, 4.8)
    this.scheduleOnce(() => { cc.tween(this.NodeContainer.Hand_1).to(0.5, { opacity: 255 }).start(); Constants.isCanTouch = true; }, 6)
  }


  private hideUIFirstStep(): void {
    cc.tween(this.NodeContainer.Text_Jimin)
      .to(0.5, { opacity: 0 })
      .start();

    cc.tween(this.NodeContainer.sp_tearsLeft.node)
      .to(0.5, { opacity: 0 })
      .start();

    cc.tween(this.NodeContainer.sp_tearsRight.node)
      .to(0.5, { opacity: 0 })
      .start();
  }

  private hideAnim(node: cc.Node) {
    cc.tween(node)
      .to(0.5, { opacity: 0 })
      .start();
  }

  private showTools(tool: sp.Skeleton): void {
    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);
    let node = tool.node;
    let position = node.getPosition();
    node.setPosition(position.x - 30, position.y);
    cc.tween(node)
      .to(0.5, { x: position.x })
      .start();
  }


  public activeCleanSound(): void {
    this.AudioManager.playSound(Constants.SoundTrack.cleanSound)
    this.AudioManager.cleanSound.loop = true;
  }


  public stopCleanSound(): void {
    this.AudioManager.stopSound(Constants.SoundTrack.cleanSound)
    this.AudioManager.cleanSound.loop = false;
  }


  public handleDoneCleanser(): void {
    if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
      Constants.isTouch = false;
      Constants.isCanTouch = true;
      this.stopCleanSound();
      this.checkCleanserFlag = true;
      this.NodeContainer.Scratchable.active = false;
      this.hideAnim(this.NodeContainer.Cleanser);
      this.AudioManager.playSound(Constants.SoundTrack.completeSound);
      this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
    }
  }


  private showTweezers(): void {
    this.checkshowTweezersFlag = true;
    this.scheduleOnce(() => {
      Constants.isDoneCleanser = true;
      this.NodeContainer.tweezers.getComponent(cc.Animation).play("ShowAnim");
      this.showTools(this.NodeContainer.sp_Tweezers);
      this.scheduleOnce(() => {
        this.NodeContainer.Hand_2.active = true;
        Constants.isRotate
          ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
          : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
        cc.tween(this.NodeContainer.Hand_2)
          .to(0.5, { opacity: 255 })
          .start();
        Constants.isCanTouch = true;
      }, 0.5);
    }, 1.5)
  }


  public handleCheckRemoveMaggots(): void {
    let tweezersBdx = this.NodeContainer.Point_Tweezer_Head.getBoundingBox();
    let points = [this.NodeContainer.Tweezers_InteractPoint1, this.NodeContainer.Tweezers_InteractPoint2];
    for (let i = 0; i < points.length; i++) {
      let PointBdx = points[i].getBoundingBox();
      let pointName = points[i].name;
      if (tweezersBdx.intersects(PointBdx)) {
        this.handleRemoveMaggot(pointName)
      }
    }
  }


  public handleRemoveMaggot(maggotName: string): void {
    this.NodeContainer.tweezers.opacity = 0;
    this.isRemovingMaggot = true;
    Constants.maggotRemoved += 1;
    console.log(maggotName);

    switch (maggotName) {
      case "Point_Mg1":
        this.NodeContainer.Acne1_2.active = true;
        this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
        this.NodeContainer.Spine_RMMG1.node.active = true;
        this.scheduleOnce(() => { this.NodeContainer.Spine_Maggot1.node.active = false }, 0.75);
        this.activeRemoveMaggotSound();
        this.scheduleOnce(() => {
          this.NodeContainer.Acne1_1.active = true;
        }, 3.6)
        this.setCompleteSpine(this.NodeContainer.Spine_RMMG1, maggotName);
        break;
      case "Point_Mg3":
        this.NodeContainer.Acne2_2.active = true;
        this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
        this.NodeContainer.Spine_RMMG2.node.active = true;
        this.scheduleOnce(() => { this.NodeContainer.Spine_Maggot2.node.active = false }, 0.75);
        this.activeRemoveMaggotSound();
        this.scheduleOnce(() => {
          this.NodeContainer.Acne2_1.active = true;
        }, 3.6)
        this.setCompleteSpine(this.NodeContainer.Spine_RMMG2, maggotName);
        break;
      default:
        break;
    }
  }


  private activeRemoveMaggotSound(): void {
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound) }, 0.75);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound) }, 1.5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound) }, 2.2);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound) }, 2.8);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun3Sound) }, 3.6);
  }


  public setCompleteSpine(spine: sp.Skeleton, name: string): void {
    spine.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
      if (trackEntry.animation.name === "Action") {
        this.showTweezers();
        this.AudioManager.playSound(Constants.SoundTrack.completeSound);
        this.NodeContainer.sp_Tweezers.node.setPosition(this.tweezersStartPos);
        this.NodeContainer.Point_Tweezers.setPosition(this.tweezersPointStartPos);
      }
    })
  }



  protected update(dt: number): void {
    !this.checkCleanserFlag && this.handleDoneCleanser();
    this.checkCleanserFlag && !this.checkshowTweezersFlag && this.showTweezers();
    this.checkshowTweezersFlag && !this.isRemovingMaggot && this.handleCheckRemoveMaggots();
  }

}
