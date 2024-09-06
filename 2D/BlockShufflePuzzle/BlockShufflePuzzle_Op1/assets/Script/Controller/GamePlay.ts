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


  protected onLoad(): void {

  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);

    this.activeScaleAnimOfBlocks();

    this.scheduleOnce(() => { Constants.isCanTouch = true; this.showHint() }, 1);
  }


  private initTable(): void {
    // Cập nhật vị trí các block trong game sau khi trộn
    const gridSize = 4; // 4x4 grid
    const blockWidth = 122; // Giả sử mỗi block có kích thước 100x100
    const blockHeight = 122;
    const startX = -160; // Tọa độ x ban đầu của grid
    const startY = -240; // Tọa độ y ban đầu của grid

    for (let index = 0; index < (gridSize * gridSize) - 1; index++) {
      const block = cc.instantiate(this.NodesContainer.BlockPrefab);
      this.NodesContainer.Table.addChild(block);
      this.NodesContainer.Blocks.push(block);
    }

    for (let i = 0; i < this.NodesContainer.Blocks.length; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      this.NodesContainer.Blocks[i].setPosition(startX + col * blockWidth + 15, startY - row * blockHeight - 15);
    }

    this.NodesContainer.initBlockNumber();
  }


  public activeScaleAnimOfBlocks(): void {
    this.NodesContainer.Blocks.forEach(block => {
      cc.tween(block)
        .to(1, { scale: 1.8 }, { easing: 'elasticOut' })
        .start();
    })
  }


  private showHint(): void {
    this.NodesContainer.Hand.active = true;

    cc.tween(this.NodesContainer.Hand)
      .to(0.5, { opacity: 255 })
      .call(() => {
        this.NodesContainer.Hand.getComponent(cc.Animation).play();
      })
      .start();
  }


  // private randomBlock(): void {
  //   for (let index = 0; index < this.NodesContainer.Blocks.length; index++) {
  //     const block = this.NodesContainer.Blocks[index];
  //     const pos = block.getPosition();
  //     const random = 
  //   }
  // }


  private showCTA(intervalID: number): void {
    clearInterval(intervalID);
    this.scheduleOnce(() => {
      this.NodesContainer.UI.getComponent(cc.Animation).play("CTA_Anim");
    }, 0.5);
  }


  public playGreatSound(): void {
    this.AudioManager.playSound(Constants.SoundTrack.pickItemSound)
    this.AudioManager.pickItemSound.volume = 0.5;
    let random = Math.floor(Math.random() * 4) + 1;
    switch (random) {
      case 1:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus1)
        break;
      case 2:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus2)
        break;
      case 3:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus3)
        break;
      case 4:
        this.AudioManager.playSound(Constants.SoundTrack.Fx_Bonus4)
        break;
      default:
        break;
    }
  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      Constants.ironSource.isPlayBgSound = true;
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }
  }


  public handleMuteSoundIronSource(): void {
    Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

    if (Constants.ironSource.State) {
      if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
        Constants.ironSource.SoundState = true;
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
      }

      if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
        Constants.ironSource.SoundState = false;
        this.AudioManager.stopAllSound();
      }
    }
  }


  protected update(dt: number): void {
    if(Constants.movesLeft >= 0) {
      this.NodesContainer.Text.getChildByName("Label")
      .getComponent(cc.Label).string = String(`Moves Left: ${Constants.movesLeft}`);
    }
  }

}
