import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import LoadFoodController from "./LoadFoodController";
import SpawnController from "./SpawnController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(LoadFoodController)
  LoadFoodController: LoadFoodController = null;
  @property(SpawnController)
  SpawnController: SpawnController = null;

  // Node
  @property(cc.Node)
  CTA: cc.Node = null;
  @property(cc.Node)
  Boss: cc.Node = null;

  // state
  isCollideBaseFlag: boolean = false;


  protected onLoad(): void {
    let physics = cc.director.getPhysicsManager();
    physics.enabled = true;
    let collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
    // collisionManager.enabledDrawBoundingBox = true;
    // collisionManager.enabledDebugDraw = true;
  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.AudioManager.bgSound.volume = 0.5;

    cc.view.setResizeCallback(() => {
      this.handleYourOrientation();
    });
  }


  private handleYourOrientation() {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      cc.director.loadScene("game_Horizontal");
      Constants.scaleArmy = 0.5;
    } else {
      let width = cc.view.getFrameSize().width;
      let height = cc.view.getFrameSize().height;
      if (width / height < 0.5) {
        // IPX
        cc.director.loadScene("game_IPX");
        Constants.scaleArmy = 0.3;
      } else {
        // other
        if (height / width > 1.5) {
          cc.director.loadScene("game_Vertical");
          Constants.scaleArmy = 0.3;
        } else {
          cc.director.loadScene("game_VerticalIpad");
          Constants.scaleArmy = 0.35;
        }
      }

    }
  }


  public spawnArmy(index: number): void {
    switch (index) {
      case 1:
        !Constants.isStartGame && this.LoadFoodController.increaseFood();
        !Constants.isStartGame && this.SpawnController.SpawnEnemies();
        Constants.isStartGame = true;

        // spawn army lv1
        if (Constants.food >= 3) {
          Constants.food -= 3;
          this.SpawnController.SpawnPlayerArmy(Constants.ArmySkin.Ally, 1);
        }

        break;
      case 2:
        // spawn army lv2
        if (Constants.food >= 4 && Constants.isCanBuyArmyLv2) {
          Constants.food -= 4;
          this.SpawnController.SpawnPlayerArmy(Constants.ArmySkin.Ally, 2);
        }
        break;

      case 3:
        // spawn army lv3
        if (Constants.food >= 5 && Constants.isCanBuyArmyLv3) {
          Constants.food -= 5;
          this.SpawnController.SpawnPlayerArmy(Constants.ArmySkin.Ally, 3);
        }
        break;
      default:
        console.log("can not spawn");
        break;
    }
  }


  protected update(dt: number): void {
    if (Constants.isCollideBase && !this.isCollideBaseFlag) {
      this.isCollideBaseFlag = true;
      this.Boss.active = true;
      this.scheduleOnce(() => {
        this.CTA.active = true;
      }, 1.5)
    }
  }

}
