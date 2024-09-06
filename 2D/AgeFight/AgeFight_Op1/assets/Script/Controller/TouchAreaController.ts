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
  @property([cc.Node])
  btn_SpawnArmys: cc.Node[] = [];
  @property(cc.Node)
  btn_install: cc.Node = null;
  @property(cc.Node)
  hidemask: cc.Node = null;

  @property([cc.Node])
  btn_BuyArmys: cc.Node[] = [];


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {

    // hidemask
    // this.hidemask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);


    // btn spawn army
    for (let index = 0; index < this.btn_SpawnArmys.length; index++) {        
      const btn = this.btn_SpawnArmys[index];
      btn.on(cc.Node.EventType.TOUCH_START, () => {
        if(Constants.isToStore) {
          this.GameController.installHandle();
          return;
        }

        this.AudioManager.playSound(Constants.SoundTrack.clickSound);
        this.GamePlay.spawnArmy(index + 1);
        
        // this.IronSource.handleIronSourcePlaySound();
      }, this);
    };


    // btn buy army
    for (let index = 0; index < this.btn_BuyArmys.length; index++) {

      const btn = this.btn_BuyArmys[index];
      btn.on(cc.Node.EventType.TOUCH_START, () => {

        if(Constants.isToStore) {
          this.GameController.installHandle();
          return;
        }

        // handle buy lv2 army
        if(index === 0) {
          if(Constants.currentCoin >= 50) {
            this.AudioManager.playSound(Constants.SoundTrack.buySound);

            console.log("buyed");
            
            Constants.isCanBuyArmyLv2 = true;
            Constants.enemyDie -= 5;
            btn.active = false;
          } else {
            console.log("-- can not buy");
          }
        } 
        
        // handle buy lv3 army
        else {
          if(Constants.currentCoin >= 100) {
            this.AudioManager.playSound(Constants.SoundTrack.buySound);
            console.log("buyed");

            Constants.isCanBuyArmyLv3 = true;
            Constants.enemyDie -= 10;
            btn.active = false;
          } else {
            console.log("-- can not buy");
          }
        }
      }, this);
    }

    // btn install
    // this.btn_install.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }

}
