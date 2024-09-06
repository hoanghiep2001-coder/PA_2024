import { Constants } from "../Data/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
  @property(cc.Node)
  GameController: cc.Node = null;
  @property(cc.Node)
  Player: cc.Node = null;
  @property(sp.Skeleton)
  Spine_Fish: sp.Skeleton = null;
  @property(sp.Skeleton)
  Spine_Bite: sp.Skeleton = null;
  @property(cc.Node)
  TouchArea: cc.Node = null;
  @property(cc.Label)
  Level: cc.Label = null;

  isLevelUp: boolean = false;
  isDoneAnim: boolean = true;

  score: number = 20;
  trackEntry: sp.spine.TrackEntry = null;


  protected start(): void {

  }


  protected onCollisionEnter(other, self) {
    if (other.tag == 1 && this.TouchArea.getComponent("TouchArea").isTouched) {
      if (Constants.ironSource.SoundState) {
        this.GameController.getComponent("GameController")
          .playAudio(this.GameController.getComponent("GameController").audioEat);
      }
      this.handleEatFishLv1(other);
    }

    if (other.tag == 3 && this.TouchArea.getComponent("TouchArea").isTouched) {
      if (this.Player.getComponent("PlayerController").isLevelUp) {

        if (Constants.ironSource.SoundState) {
          this.GameController.getComponent("GameController")
            .playAudio(this.GameController.getComponent("GameController").audioEat);
        }

        this.handleEatFishLv2(other);
      }
    }

    if (other.tag == 10 && this.TouchArea.getComponent("TouchArea").isTouched) {
      if (this.Player.getComponent("PlayerController").isLevel3) {

        if (Constants.ironSource.SoundState) {
          this.GameController.getComponent("GameController")
            .playAudio(this.GameController.getComponent("GameController").audioEat);
        }

        this.handleEatFishLv3(other);
      }
    }
  }


  private handleEatFishLv1(other: any): void {
    if (this.TouchArea.getComponent("TouchArea").isTouched) {
      this.score += 5;

      if (other.getComponent("Enemy").isLive) {
        other.getComponent("Enemy").die();
      }
    }
  }


  private handleEatFishLv2(other: any): void {
    if (this.TouchArea.getComponent("TouchArea").isTouched) {
      this.score += 800;

      if (other.getComponent("Enemy").isLive) {
        other.getComponent("Enemy").die();
      }
    }
  }


  private handleEatFishLv3(other: any): void {
    if (this.TouchArea.getComponent("TouchArea").isTouched) {
      this.score += 20000;

      if (other.getComponent("Enemy").isLive) {
        other.getComponent("Enemy").die();
      }
    }
  }

  protected update(dt: number): void {
    this.Level.string = String(this.score);
  }

}
