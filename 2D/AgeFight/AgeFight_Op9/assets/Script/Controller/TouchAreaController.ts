import { Constants } from "../Data/constants";
import IronSource from "../Data/IronSource";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {
  // Component
  @property(IronSource)
  IronSource: IronSource = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  // Node
  @property(cc.Node)
  CTA: cc.Node = null;
  @property(cc.Node)
  hidemask: cc.Node = null;
  @property(cc.Node)
  hand: cc.Node = null;


  @property([cc.Node])
  btn_SpawnArmys: cc.Node[] = [];
  @property(cc.Node)
  btn_install: cc.Node = null;
  @property(cc.Node)
  btn_upgrade: cc.Node = null;


  @property([cc.Node])
  btn_BuyArmys: cc.Node[] = [];


  @property([cc.ParticleSystem])
  ps_upgrade: cc.ParticleSystem[] = [];
  @property([cc.Node])
  Lv1Troops: cc.Node[] = [];
  @property([cc.Node])
  Lv2Troops: cc.Node[] = [];


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
    // this.Lv2Troops.forEach(troop => troop.active = false);
  }


  private registerEvent(): void {

    // hidemask
    // this.hidemask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // btn spawn army
    for (let index = 0; index < this.btn_SpawnArmys.length; index++) {
      const btn = this.btn_SpawnArmys[index];
      btn.on(cc.Node.EventType.TOUCH_START, () => {

        if (Constants.isToStore) {
          this.GameController.installHandle();
          return;
        }

        if (Constants.isLoose || Constants.isWin || this.CTA.active) return

        this.AudioManager.playSound(Constants.SoundTrack.clickSound);

        this.GamePlay.spawnArmy(index + 1);
        
        this.hand.active = false

        // this.IronSource.handleIronSourcePlaySound();
      }, this);
    };


    // btn buy army
    for (let index = 0; index < this.btn_BuyArmys.length; index++) {
      const btn = this.btn_BuyArmys[index];
      btn.on(cc.Node.EventType.TOUCH_START, () => {

        if (Constants.isToStore) {
          this.GameController.installHandle();
          return;
        }

        // handle buy lv2 army
        if (index === 0) {
          if (Constants.currentCoin >= 60) {
            this.AudioManager.playSound(Constants.SoundTrack.buySound);

            console.log("buyed");

            Constants.isCanBuyArmyLv2 = true;
            Constants.enemyDie -= 2;
            this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
            btn.active = false;

          } else {

            console.log("-- can not buy");

          }
        }

        // handle buy lv3 army
        else {
          if (Constants.currentCoin >= 90) {
            this.AudioManager.playSound(Constants.SoundTrack.buySound);

            console.log("buyed");

            Constants.isCanBuyArmyLv3 = true;
            Constants.enemyDie -= 3;
            this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
            btn.active = false;
          } else {

            console.log("-- can not buy");

          }
        }
      }, this);
    }


    // btn upgrade
    // this.btn_upgrade.on(cc.Node.EventType.TOUCH_START, () => {
    //   this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
    //   if (Constants.currentCoin >= 120) {
    //     console.log("Upgraded");
    //     Constants.isUpgrade = true;
    //     Constants.enemyDie -= 4;
    //     this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
    //     this.btn_upgrade.parent.active = false;
    //     this.ps_upgrade.forEach(ps => ps.resetSystem());
    //     this.Lv2Troops.forEach(troop => troop.active = true);
    //     this.Lv1Troops.forEach(troop => troop.active = false);
    //   } else {
    //     console.log("Fail");
    //   }

    // }, this);


    // btn install
    // this.btn_install.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }

}
