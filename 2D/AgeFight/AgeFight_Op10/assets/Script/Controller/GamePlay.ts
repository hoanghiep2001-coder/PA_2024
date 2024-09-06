import { Constants } from "../Data/constants";
import Army from "../Other/Army";
import AudioManager from "../Plugin/AudioManager";
import ComboController from "./CmoboController";
import { GameController } from "./GameController";
import LoadFoodController from "./LoadFoodController";
import SpawnController from "./SpawnController";
import VFxController from "./vFxController";

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

  @property(ComboController)
  ComboController: ComboController = null;

  @property(VFxController)
  VFxController: VFxController = null;

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
    Constants.isFiveBroInTank = false;

    Constants.food = 15;
    Constants.enemyDie = 0;
    Constants.currentCoin = 0;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.comboCount = 0;

    Constants.allyArmies = [];
    Constants.enemyArmies = [];

    cc.director.loadScene("game_Hor");
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
    Constants.isFiveBroInTank = false;

    Constants.food = 15;
    Constants.enemyDie = 0;
    Constants.currentCoin = 0;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.comboCount = 0;

    Constants.allyArmies = [];
    Constants.enemyArmies = [];
  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.AudioManager.bgSound.volume = 0.5;

    this.initGame();

    this.node.on('Shooting', () => {
      this.VFxController.handleShooting();
    }, this);

    this.node.on('ShowSpeedLine', () => {
      this.AudioManager.stopSound(Constants.SoundTrack.bgSound);
      this.AudioManager.playSound(Constants.SoundTrack.Bg_Attack);
      this.AudioManager.Bg_Attack.volume = 0.5;
      this.VFxController.ShowSpeedLine();
    }, this);

    cc.view.setResizeCallback(() => {
      if(Constants.ironSource.isEndGame || Constants.isWin || Constants.isLoose) return;
      this.resetGame();
    });
  }


  public spawnArmy(index: number): void {
    Constants.isPauseGame = false;
    // !Constants.isStartGame && this.LoadFoodController.increaseFood();
    !Constants.isStartGame && this.SpawnController.SpawnEnemies();
    Constants.isStartGame = true;

    switch (index) {
      case 1:
        // spawn army lv1
        if (Constants.food >= 3) {
          Constants.food -= 3;
          Constants.comboCount += 1;
          this.SpawnController.SpawnPlayerArmy(Constants.ArmySkin.Ally, 1);
          this.ComboController.handleShowCombo();
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


  private HandleFiveBroInTank(): void {
    if (Constants.isFiveBroInTank) return;

    Constants.isFiveBroInTank = true;

    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);

    let Troops: cc.Node[] = [];
    let Tank: cc.Node = null;

    Constants.allyArmies.forEach(army => {
      if(army.name === "Army2_Lv1") Troops.push(army);
      if(army.name === "Army_Lv3") Tank = army;
    });

    // cho mấy thằng lính hợp thể vào tank.
    Troops.forEach(troop => {
      cc.tween(troop)
      .to(0.5, {x: Tank.x, y: Tank.y})
      .call(() => {
        Constants.troopsInTankCount += 1;

        // set anim run cho lính
        troop.getComponent(Army).spine.setAnimation(0, Constants.ArmyAnim.Run, true);

        // cho xe tăng chạy nếu đã đủ lính
        if(Constants.troopsInTankCount >= 5) Constants.isTankCanRun = true;

        troop.active = false;
      })
      .start();
    })
  }


  private isSpawn5Troops(): boolean {
    let result: boolean = false;
    if (Constants.troopsSpawnLeftCount < 0) return true;
    return result;
  }


  private activeCTA(): void {
    cc.log("show CTA");
    this.CTA.active = true;
    Constants.isActiveCTA = true;
  }


  protected update(dt: number): void {
    this.isSpawn5Troops() && this.HandleFiveBroInTank();
    if((Constants.isLoose || Constants.isWin) && !Constants.isActiveCTA) {
      this.activeCTA();
   }
  }

}
