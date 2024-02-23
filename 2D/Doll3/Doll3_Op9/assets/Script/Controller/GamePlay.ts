import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(GameController)
  GameController: GameController = null;


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.AudioManager.switchVolume(Constants.SoundTrack.bgSound, 0.7);
    this.handleGamePlay();
    this.initGame();
  }


  private initGame(): void {
    this.NodesContainer.doll_dress.active = false;
    this.NodesContainer.CTA.active = false;
  }


  private handleGamePlay(): void {
      this.handleOpenDoor();
      this.handleShowAdultery();
  }


  private handleOpenDoor(): void {
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.knockDoorSound);
    }, 1);

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.openDoorSound)
      this.NodesContainer.door.getComponent(cc.Animation).play("OpenDoor_Anim");
    }, 2.5);

    this.scheduleOnce(() => {
      this.NodesContainer.doll_mouth_default.active = false;
      this.NodesContainer.doll_mouth_suprise.active = true;
      this.NodesContainer.doll.getComponent(cc.Animation).play("Doll_InHouseAnim");
      this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ShakeAnim");
      this.AudioManager.playSound(Constants.SoundTrack.screamSound);
    }, 3);
  }


  private handleShowAdultery(): void {
    this.scheduleOnce(() => {
      this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomAnim");
    }, 4.5);

    this.scheduleOnce(() => {
      this.getComponent(cc.Animation).play("GamePlay_ShowAdultery");
    }, 5);

    this.scheduleOnce(() => {
      this.NodesContainer.doll_tears_left.node.active = true;
      this.NodesContainer.doll_tears_right.node.active = true;
      this.AudioManager.playSound(Constants.SoundTrack.crySound);
    }, 5.8)

    this.scheduleOnce(() => {
      this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomOutAnim");
    }, 6.5);

    this.scheduleOnce(() => {
      Constants.isCanClick = true;
      this.NodesContainer.UI_Container.getComponent(cc.Animation).play("UI_Anim");
    }, 7.5);
  }

}
