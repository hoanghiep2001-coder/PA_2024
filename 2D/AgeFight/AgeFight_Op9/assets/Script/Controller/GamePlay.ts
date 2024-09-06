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

  // state
  isCollideBaseFlag: boolean = false;


  protected onLoad(): void {
    cc.director.getPhysicsManager().enabled = true;
    let collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
    collisionManager.enabledDrawBoundingBox = true;
    // collisionManager.enabledDebugDraw = true;
  }


  public resetGame(): void {
    Constants.allyArmies.forEach(army => army.destroy());
    Constants.enemyArmies.forEach(army => army.destroy());

    Constants.isStartGame = false;
    Constants.isPauseGame = false;
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
    Constants.isUpgrade = false;
    Constants.isWin = false;
    Constants.isLoose = false;
    Constants.isCollideBase = false;

    Constants.food = 6;
    Constants.enemyDie = 0;
    Constants.currentCoin = 0;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.allyArmies = [];
    Constants.enemyArmies = [];

    cc.director.loadScene("game");
  }


  private initGame(): void {
    Constants.allyArmies.forEach(army => army.destroy());
    Constants.enemyArmies.forEach(army => army.destroy());

    Constants.isStartGame = false;
    Constants.isPauseGame = false;
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
    Constants.isUpgrade = false;
    Constants.isWin = false;
    Constants.isLoose = false;
    Constants.isCollideBase = false;

    Constants.food = 6;
    Constants.enemyDie = 0;
    Constants.currentCoin = 0;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.allyArmies = [];
    Constants.enemyArmies = [];
  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.AudioManager.bgSound.volume = 0.5;

    this.initGame();

    cc.view.setResizeCallback(() => {
      if(Constants.ironSource.isEndGame) return;
      this.resetGame();
    });
  }


  public spawnArmy(index: number): void {
    Constants.isPauseGame = false;
    !Constants.isStartGame && this.LoadFoodController.increaseFood();
    !Constants.isStartGame && this.SpawnController.SpawnEnemies();
    Constants.isStartGame = true;

    switch (index) {
      case 1:
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

}
