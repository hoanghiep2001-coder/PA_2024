import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import SpawnController from "./SpawnController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(SpawnController)
  SpawnController: SpawnController = null;

  // Node
  @property(cc.Node)
  CTA: cc.Node = null;

  // state
  isCollideBaseFlag: boolean = false;


  protected onLoad(): void {
    let physics = cc.director.getPhysicsManager();
    physics.enabled = true;
    let collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
    // collisionManager.enabledDebugDraw = true;
  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.AudioManager.bgSound.volume = 0.5;
  }

}
