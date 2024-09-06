import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {
  // Component
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;

  currentBlockNumber: number = 0;
  currentBlockPositionInTable: number = 0;
  prevPos: cc.Vec2 = null;

  canMoveLeft: boolean = false;
  canMoveRight: boolean = false;
  canMoveUp: boolean = false;
  canMoveDown: boolean = false;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodesContainer.Blocks.forEach((block, index) => {
      block.on(cc.Node.EventType.TOUCH_START, () => {this.blockTouchStart(block, index)}, this);
      block.on(cc.Node.EventType.TOUCH_MOVE, this.blockTouchMove, this);
      block.on(cc.Node.EventType.TOUCH_END, this.blockTouchEnd, this);
      block.on(cc.Node.EventType.TOUCH_CANCEL, this.blockTouchEnd, this);
    });

    this.NodesContainer.hideMask
      .on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
  }


  private blockTouchStart(e: cc.Node, index: number): void {
    // ironsource
    // this.handleIronSourcePlaySound()

    if(!Constants.isCanTouch) return;

    if(Constants.isToStore || Constants.movesLeft <= 0) {
      this.GameController.installHandle();
      return;
    }

    const node: cc.Node = e;
    const orderNumber = this.extractOrderNumber(node.name);
    this.currentBlockPositionInTable = index;    

    if (orderNumber !== null) {
      console.log(`Curent Block Touch: ${orderNumber}`);
      this.currentBlockNumber = orderNumber;
    }

    this.NodesContainer.Hand.active = false;
    this.AudioManager.playSound(Constants.SoundTrack.pickItemSound);

    let canMove = this.isMoveEnable(this.currentBlockPositionInTable);
    let block = this.NodesContainer.Blocks[this.currentBlockPositionInTable];
    let blockPos = block.getPosition(); 

    if(canMove) {
      if(this.canMoveDown) this.moveBlock(block, blockPos.x, blockPos.y - 226);
      if(this.canMoveUp) this.moveBlock(block, blockPos.x, blockPos.y + 226);
      if(this.canMoveLeft)  this.moveBlock(block, blockPos.x - 226, blockPos.y);
      if(this.canMoveRight)  this.moveBlock(block, blockPos.x + 226, blockPos.y);
    }
  }


  private blockTouchMove(e: cc.Touch): void {

  }


  private blockTouchEnd(): void {
    if(!Constants.isCanTouch || Constants.ironSource.isEndGame) return;
    Constants.movesLeft -= 1;
    this.canMoveDown = false;
    this.canMoveLeft = false;
    this.canMoveRight = false;
    this.canMoveUp = false;
    this.prevPos = null;
  }


  private hideMaskTouchStart(): void {
    // mtg & applovin
    if(Constants.isToStore || Constants.movesLeft <= 0) {
      this.GameController.installHandle();
      return;
    }

    // ironsource
    // this.handleIronSourcePlaySound();
  }


   // Method to extract order number from node name
   private extractOrderNumber(name: string): number | null {
    const match = name.match(/_(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  }


  private isMoveEnable(orderNumber: number): boolean {
    let result: boolean = false;
    
    if(!Constants.tablePuzzle[orderNumber - 1]) {
      console.log("left");
      this.canMoveLeft = true;
      Constants.tablePuzzle[orderNumber - 1] = true;
      Constants.tablePuzzle[orderNumber] = false;
      return true;
    }

    if(!Constants.tablePuzzle[orderNumber + 1]) {
      console.log("right");
      this.canMoveRight = true;
      Constants.tablePuzzle[orderNumber + 1] = true;
      Constants.tablePuzzle[orderNumber] = false;
      return true;
    }

    if(!Constants.tablePuzzle[orderNumber + 4]) {
      console.log("down");
      this.canMoveDown = true;
      Constants.tablePuzzle[orderNumber + 4] = true;
      Constants.tablePuzzle[orderNumber] = false;
      return true;
    }

    if(!Constants.tablePuzzle[orderNumber - 4]) {
      console.log("up");
      this.canMoveUp = true;
      Constants.tablePuzzle[orderNumber - 4] = true;
      Constants.tablePuzzle[orderNumber] = false;
      return true;
    }

    return result;
  }


  private moveBlock(block: cc.Node, x: number, y: number): void {
    cc.tween(block)
    .to(0.1, {x: x, y: y})
    .call(() => {Constants.isCanTouch = true})
    .start()
  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    Constants.ironSource.isPlayBgSound = true;

    if (Constants.ironSource.SoundState) {
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }
  }


  // protected update(dt: number): void {
  //   this.GamePlay.handleMuteSoundIronSource();
  // }

}
