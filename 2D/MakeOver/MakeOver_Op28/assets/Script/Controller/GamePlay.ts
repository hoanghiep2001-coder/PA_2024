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
  isRunFlow1: boolean = false;
  checkCleanserFlag: boolean = false;
  checkshowTweezersFlag: boolean = false;
  isRemovingMaggot: boolean = false;


  protected onLoad(): void {

  }


  protected start(): void {
    this.handleGamePlay();
  }


  private handleGamePlay(): void {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    // this.AudioManager.playSound(Constants.SoundTrack.dirtySound);

    // this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.girlScreamSound)}, 0.5);
    this.scheduleOnce(() => {this.getComponent(cc.Animation).play("GamePlay_SwtichStep")}, 2);
  }


  public runFlow1_Opt1(): void {
    this.isRunFlow1 = true;
    this.NodeContainer.Flow1_Opt1.active = false;
    this.NodeContainer.Flow1_Opt2.active = false;
    Constants.optionDoneLength += 1;
    this.NodeContainer.Sp_Cleanser.node.active = true;
    this.NodeContainer.Sp_Cleanser.setAnimation(0, "Intro", false);
    this.showTools(this.NodeContainer.Sp_Cleanser);
    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.xitNuocSound) }, 1.2);
    this.scheduleOnce(() => { this.NodeContainer.Sp_Cleanser.node.getComponent(cc.Animation).play("spCleanser_MoveAnim") }, 3);
    this.scheduleOnce(() => {
      this.NodeContainer.PointScratch.getComponent(cc.Animation).play();
      this.activeCleanSound();
      Constants.isTouch = true;
    }, 3.8);
  }


  public runFlow1_Opt2(): void {
    this.isRunFlow1 = true;
    this.NodeContainer.Flow1_Opt1.active = false;
    this.NodeContainer.Flow1_Opt2.active = false;
    this.NodeContainer.Sp_Shower.node.active = true;
    Constants.optionDoneLength += 1;
    this.showTools(this.NodeContainer.Sp_Shower);
    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);
    this.scheduleOnce(() => {
      this.NodeContainer.Sp_Shower.setAnimation(0, "Shower_Action", true);
      this.NodeContainer.PointScratch.getComponent(cc.Animation).play();
      this.AudioManager.playSound(Constants.SoundTrack.showerSound);
      Constants.isTouch = true;
    }, 1);
  }


  private showTools(tool: sp.Skeleton): void {
    let node = tool.node;
    let position = node.getPosition();
    node.setPosition(position.x - 50, position.y);
    cc.tween(node)
      .to(0.5, { x: position.x, opacity: 255 })
      .start();
  }


  public activeCleanSound(): void {
    this.AudioManager.playSound(Constants.SoundTrack.cleanSound);
    this.AudioManager.cleanSound.volume = 0.7;

    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.cleanSound) }, 0.5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.cleanSound) }, 1);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.cleanSound) }, 1.5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.cleanSound) }, 2);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.cleanSound) }, 2.5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.cleanSound) }, 3);

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
      this.NodeContainer.PointScratch.getComponent(cc.Animation).play("Point_HideAnim");
      this.AudioManager.playSound(Constants.SoundTrack.completeSound);
      this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
      this.AudioManager.stopSound(Constants.SoundTrack.showerSound);
      this.scheduleOnce(() => { this.NodeContainer.Step2.getComponent(cc.Animation).play("Step2_ShowFlow2") }, 1)
    }
  }


  public runFlow2_Opt1(): void {
    Constants.isCanTouch = false;
    this.NodeContainer.Flow2_Opt1.opacity = 0;
    this.NodeContainer.Flow2_Opt2.opacity = 0;
    this.NodeContainer.Spine_RMMG1.node.active = true;
    Constants.optionDoneLength += 1;
    this.activeRemoveMaggotSound(false);
    this.setCompleteSpine(this.NodeContainer.Spine_RMMG1, this.NodeContainer.Flow2_Opt1);
    this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
    this.scheduleOnce(() => { this.NodeContainer.Spine_Maggot2.node.active = false }, 0.7);
  }


  public runFlow2_Opt2(): void {
    Constants.isCanTouch = false;
    this.NodeContainer.Flow2_Opt1.opacity = 0;
    this.NodeContainer.Flow2_Opt2.opacity = 0;
    Constants.optionDoneLength += 1;
    this.NodeContainer.Spine_Acne.setAnimation(0, "action03_squeze_big", false);
    this.activeRemoveMaggotSound(true);
    this.setCompleteSpine(this.NodeContainer.Spine_Acne, this.NodeContainer.Flow2_Opt2);
  }


  private showAnotherOption(nodeToEnable: cc.Node): void {
    nodeToEnable.active = false;
    this.NodeContainer.Step2.getComponent(cc.Animation).play("Step2_AnotherOpt");
    this.scheduleOnce(() => { Constants.isCanTouch = true }, 0.5);
  }


  private showFlow3(): void {
    Constants.isCanTouch = true;
    this.NodeContainer.Step2.getComponent(cc.Animation).play("Step2_ShowFlow3");
  }


  private activeRemoveMaggotSound(isLonger: boolean): void {
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound); }, 0.75);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound); }, 1.5);
    isLonger && this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound); }, 1.9);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound); }, 2.2);
    isLonger && this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound); }, 1.5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound); }, 2.8);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.nhoMun3Sound); }, 3.5)

  }


  public setCompleteSpine(spine: sp.Skeleton, nodeToEnable: cc.Node): void {
    spine.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
      this.AudioManager.playSound(Constants.SoundTrack.completeSound);
      Constants.optionDoneLength <= 2 && this.scheduleOnce(() => { this.showAnotherOption(nodeToEnable) }, 1);
      Constants.optionDoneLength >= 3 && this.scheduleOnce(() => {this.showFlow3(); nodeToEnable.active = false}, 1);
    })
  }



  protected update(dt: number): void {
    !this.checkCleanserFlag && this.handleDoneCleanser();
  }

}
