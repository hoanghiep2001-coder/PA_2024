import { Constants } from "../Data/constants";
import IronSource from "../Data/IronSource";
import Army from "../Other/Army";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import SpawnController from "./SpawnController";
import SupporterController from "./SupporterController";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {
  // Component
  @property(SupporterController)
  SupporterController: SupporterController = null;
  @property(SpawnController)
  SpawnController: SpawnController = null;
  @property(IronSource)
  IronSource: IronSource = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  // Node
  @property([cc.Node])
  btn_SpawnArmys: cc.Node[] = [];
  @property(cc.Node)
  btn_install: cc.Node = null;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    // btn spawn army
    for (let index = 0; index < this.btn_SpawnArmys.length; index++) {
      const btn = this.btn_SpawnArmys[index];
      btn.on(cc.Node.EventType.TOUCH_START, () => {
        this.AudioManager.playSound(Constants.SoundTrack.clickSound);
        !Constants.isStartGame && this.SpawnController.SpawnAllies();
        !Constants.isStartGame && this.SpawnController.SpawnEnemies();
        !Constants.isStartGame && this.activeAnimForAllCurrentArmies();
        Constants.isStartGame = true;


        index === 0 && this.activeSupporter(10, Constants.isBuySupportLv1, index, btn, 1);
        index === 1 && this.activeSupporter(30, Constants.isBuySupportLv2, index, btn, 3);
        index === 2 && this.activeSupporter(50, Constants.isBuySupportLv3, index, btn, 5);

        this.IronSource.handleIronSourcePlaySound();
      }, this);
    };
  }


  private activeAnimForAllCurrentArmies(): void {
    for (let index = 0; index < Constants.allyArmies.length; index++) {
      const army = Constants.allyArmies[index];
      army.getComponent(Army).activeRunAnim();
    }
    for (let index = 0; index < Constants.allyArmies.length; index++) {
      const army = Constants.allyArmies[index];
      army.getComponent(Army).activeRunAnim();
    }
  }


  private activeSupporter(
    target: number,
    StoreboolCondition: boolean,
    index: number,
    btn: cc.Node,
    StoreDisCount: number
  ): void {
    if (Constants.currentCoin >= target && !StoreboolCondition) {
      console.log("buyed");
      StoreboolCondition = true;
      Constants.enemyDie -= StoreDisCount;
      this.SupporterController.activeSupporter(index);
      btn.getChildByName("canChoose").opacity = 0;
      btn.off(cc.Node.EventType.TOUCH_START);
    }
  }

}
