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
  checkCleanserFlag: boolean = false;
  checkshowTweezersFlag: boolean = false;
  isRemovingMaggot: boolean = false;

  
  protected onLoad(): void {
    
  }


  protected start(): void {
    this.handleGamePlay();
    this.NodeContainer.Tweezers.active = false;
  }


  private handleGamePlay(): void {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.AudioManager.playSound(Constants.SoundTrack.dirtySound);

    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.girlScreamSound)}, 0.5);
    this.scheduleOnce(() => {this.getComponent(cc.Animation).play("GamePlay_SwtichStep")}, 2);
    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.wormBgSound); Constants.isCanTouch = true}, 3);
    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.moveItemSound); }, 4.3);
    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.xitNuocSound); }, 5.8);
    this.scheduleOnce(() => {
      // this.NodeContainer.Hand_1.active = true; 
      Constants.isRotate 
      ? this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_HrzHintAnim")
      : this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_VtcHintAnim");
    }, 7);
  }


  public handleDoneCleanser(): void {
    if(this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
      Constants.isDoneCleanser = true;
      this.checkCleanserFlag = true;
      this.NodeContainer.Cleanser.getComponent(cc.Animation).play("Cleanser_HideAnim")
      this.NodeContainer.Scratchable.active = false;
      this.NodeContainer.Cleanser_Point.active = false;
      this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
    } 
  }


  private showTweezers(): void {
    console.log("tweezers");
    this.checkshowTweezersFlag = true;
  }


  public handleCheckRemoveMaggots(): void {
    let tweezersBdx = this.NodeContainer.Tweezers_HeadPoint.getBoundingBox();
    let points = [this.NodeContainer.Tweezers_InteractPoint1, this.NodeContainer.Tweezers_InteractPoint2];
    for (let i = 0; i < points.length; i++) {
      let PointBdx = points[i].getBoundingBox();
      let pointName = points[i].name;
      if(tweezersBdx.intersects(PointBdx)) {
        this.handleRemoveMaggot(pointName)
      }
    }
  }


  public handleRemoveMaggot(maggotName: string): void {
    this.isRemovingMaggot = true;
    switch (maggotName) {
      case "Tws_InteractPoint1":
          Constants.maggotRemoved += 1;
          this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
          this.NodeContainer.Spine_RMMG1.node.active = true;
          this.NodeContainer.Circle_1.active = false;
          this.scheduleOnce(() => { this.NodeContainer.Spine_Maggot1.node.active = false}, 1.2);
          this.setCompleteSpine(this.NodeContainer.Spine_RMMG1);
        break;
        case "Tws_InteractPoint2":
          Constants.maggotRemoved += 1;
          this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
          this.NodeContainer.Spine_RMMG2.node.active = true;
          this.NodeContainer.Circle_2.active = false;
          this.scheduleOnce(() => { this.NodeContainer.Spine_Maggot2.node.active = false}, 1.2);
          this.setCompleteSpine(this.NodeContainer.Spine_RMMG2);
        break;
      default:
        break;
    }
  }


  public setCompleteSpine(spine:sp.Skeleton): void {
    spine.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
      if(trackEntry.animation.name === "Action") {
          this.showTweezers();
      }
    })
  }



  protected update(dt: number): void {
      !this.checkCleanserFlag && this.handleDoneCleanser();
      this.checkCleanserFlag && !this.checkshowTweezersFlag && this.showTweezers();
      this.checkshowTweezersFlag && !this.isRemovingMaggot && this.handleCheckRemoveMaggots();
  }

}
