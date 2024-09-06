import { SpineAnims } from "../Data/Anims";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(NodeContainer)
  NodeContainer: NodeContainer = null;

  @property(cc.Node)
  star: cc.Node = null;
  @property(cc.Node)
  star1: cc.Node = null;
  @property(cc.Node)
  star2: cc.Node = null;
  @property(sp.Skeleton)
  sp_mouth: sp.Skeleton = null;


  // Tools
  @property(sp.Skeleton)
  sp_dryer: sp.Skeleton = null;
  @property(cc.Node)
  Teeth_scum: cc.Node = null;
  @property(cc.Node)
  Options: cc.Node = null;
  @property(cc.Node)
  hand: cc.Node = null;

  // state
  tweezersStartPos: cc.Vec2 = null;
  tweezersPointStartPos: cc.Vec2 = null;

  isInitVars: boolean = false;
  isRunFlow1: boolean = false;
  checkDryerFlag: boolean = false;
  checkshowTweezersFlag: boolean = false;
  isRemovingMaggot: boolean = false;
  checkToothPasteFlag: boolean = false;
  checkBrushTeethFlag: boolean = false;
  isDoneToothPasteFlag: boolean = false;


  DryerPoint: cc.Node = null;
  DryerToMouthArea: cc.Node = null;
  DryerSpine: sp.Skeleton = null;

  toothPastePoint: cc.Node = null;
  toothPasteSpine: sp.Skeleton = null;
  toothPasteHeadPoint: cc.Node = null;

  WaterBubblePoint: cc.Node = null;
  WaterBubbleSpine: sp.Skeleton = null;
  WaterBubbleHeadPoint: cc.Node = null;

  initPos: cc.Vec2[] = [];


  protected onLoad(): void {
    this.Options.active = false;
  }


  private initVariables(): void {
    this.isInitVars = true;
    this.DryerPoint = this.NodeContainer.dryer.getChildByName("Point_Dryer");
    this.DryerSpine = this.NodeContainer.dryer.getChildByName("sp_dryer").getComponent(sp.Skeleton);
    this.DryerToMouthArea = this.NodeContainer.dryer.getChildByName("Point_Mouth");

    this.toothPastePoint = this.NodeContainer.toothPaste.getChildByName("Point_Tooth");
    this.toothPasteSpine = this.NodeContainer.toothPaste.getChildByName("sp_Tooth").getComponent(sp.Skeleton);
    this.toothPasteHeadPoint = this.NodeContainer.toothPaste.getChildByName("HeadPoint_Tooth");

    this.WaterBubblePoint = this.NodeContainer.waterTooth.getChildByName("Point_WaterTooth");
    this.WaterBubbleSpine = this.NodeContainer.waterTooth.getChildByName("sp_WaterTooth").getComponent(sp.Skeleton);
    this.WaterBubbleHeadPoint = this.NodeContainer.waterTooth.getChildByName("HeadPoint_WaterTooth");

    this.initPos[0] = this.WaterBubblePoint.getPosition();
    this.initPos[1] = this.WaterBubbleSpine.node.getPosition();
    this.initPos[2] = this.WaterBubbleHeadPoint.getPosition();
  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);

    // to store if user click in intro 
    this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    this.initVariables();
    this.showIntro();

    // debug
    // this.showTools(this.NodeContainer.dryer, true);
  }


  private showIntro(): void {
    // active sound intro
    this.AudioManager.playSound(Constants.SoundTrack.walkSound);

    // declare vars
    let Delight_Intro = this.NodeContainer.intro.getChildByName("Delight");
    let spine_Delight: sp.Skeleton = Delight_Intro.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
    let Spider_Intro = this.NodeContainer.intro.getChildByName("Spider");
    let Overlay_Intro = this.NodeContainer.UI.getChildByName("Overlay");

    // scale intro
    cc.tween(Delight_Intro)
      .to(4, { scale: 1.15 })
      .start();

    // caculated time to active/unactive Intro steps & sounds
    this.scheduleOnce(() => {
      Spider_Intro.active = true;
      this.AudioManager.stopSound(Constants.SoundTrack.walkSound);
    }, 1.5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.spiderSound) }, 2.5);
    this.scheduleOnce(() => {
      Spider_Intro.active = false;
      spine_Delight.setAnimation(0, SpineAnims.Intro_DollAnim.Scare, false);
    }, 3.2);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.hmmSound) }, 5);
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.scareSound) }, 6.5);
    this.scheduleOnce(() => {
      cc.tween(Overlay_Intro)
        .to(1, { opacity: 255 })
        .to(1, { opacity: 0 })
        .start();
    }, 7);
    this.scheduleOnce(() => {
      this.NodeContainer.MainGame.active = true;

      cc.tween(this.NodeContainer.MainGame)
        .to(1, { scale: 1.1 })
        .to(1, { scale: 1 })
        .start();
    }, 8);

    this.scheduleOnce(() => {
      // off click to store if user watch full intro
      // To store
      // this.NodeContainer.HideMask.off(cc.Node.EventType.TOUCH_START);

      this.showTools(this.NodeContainer.dryer, true);
    }, 10);
  }


  private showHint(): void {
    this.hand.active = true;
    cc.tween(this.hand)
    .to(0.5, {opacity: 255})
    .call(() => {
      this.hand.getComponent(cc.Animation).play("Hand_HintAnim");
    })
    .start()
  }


  private hideAnim(node: cc.Node) {
    cc.tween(node)
      .to(0.5, { opacity: 0 })
      .start();
  }


  private showTools(tool: cc.Node, isActive: boolean): void {
    if(!isActive) tool.active = true;
    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);
    let position = tool.getPosition();
    tool.setPosition(position.x - 30, position.y);
    cc.tween(tool)
      .to(0.5, { x: position.x, opacity: 255 })
      .start();

    this.showHint();
  }


  public handleDoneDryer(): void {
    let pointBdx = this.DryerPoint.getBoundingBox();
    let areaBdx = this.DryerToMouthArea.getBoundingBox();
    if (pointBdx.intersects(areaBdx)) {
      this.AudioManager.playSound(Constants.SoundTrack.drySound);

      this.checkDryerFlag = true;
      this.sp_dryer.node.active = true;
      this.Teeth_scum.getComponent(cc.Animation).play();
      this.sp_mouth.setAnimation(0, SpineAnims.LipsAnim.Dry, true);

      this.scheduleOnce(() => {
        cc.tween(this.sp_dryer.node)
        .to(1.5, { opacity: 0 })
        .call(() => {
          Constants.isDoneDryer = true;
          this.sp_mouth.setAnimation(0, SpineAnims.LipsAnim.Idle, false);
          this.star.getComponent(cc.Animation).play("StarAnim");
          this.AudioManager.playSound(Constants.SoundTrack.DoneStepSound);
          this.sp_mouth.setAnimation(0, SpineAnims.LipsAnim.DirtySmell, true);
        })
        .start();
      }, 2);

      this.DryerPoint.active = false;
      this.DryerToMouthArea.active = false;
      this.DryerSpine.node.active = false;
    }
  }


  public checkCollideBubblePoints = (bdx: cc.Rect): void => {
    for (let i = 0; i < Constants.toothPaste_Points.length; i++) {
      let currentNode = Constants.toothPaste_Points[i];
      if (currentNode.getBoundingBox().intersects(bdx)) {
        Constants.isTouchToothPaste = true;
        for (let j = 0; j < Constants.toothPaste_PointsStatus.length; j++) {
          if (!Constants.toothPaste_PointsStatus[j]) {
            Constants.toothPaste_PointsStatus[j] = true;
            Constants.toothPaste_Points.splice(i, 1);
            !this.AudioManager.toothPaste1Sound.isPlaying && this.AudioManager.playSound(Constants.SoundTrack.toothPaste1Sound);
            Constants.spine_Bubbles[i].setAnimation(0, SpineAnims.bubbleAnim.Show, false);
            Constants.spine_Bubbles.splice(i, 1);

            if (Constants.toothPaste_PointsStatus.every(status => status === true)) {
              Constants.isCanTouch = false;
              Constants.isDoneToothPaste = true;
              this.NodeContainer.toothPaste.active = false;      
              console.log("Done Tooth Paste ");
            }
            break;
          }
        }
        break;
      }
    }
  }


  public checkBrushTeeth = (bdx: cc.Rect): void => {
    for (let i = 0; i < Constants.Water_Points.length; i++) {
      let currentNode = Constants.Water_Points[i];
      if (currentNode.getBoundingBox().intersects(bdx)) {
        Constants.isTouchToothPaste = true;
        for (let j = 0; j < Constants.water_PointsStatus.length; j++) {
          if (!Constants.water_PointsStatus[j]) {
            Constants.water_PointsStatus[j] = true;
            Constants.Water_Points.splice(i, 1);
    
            Constants.spine_WaterBubbles[i].setAnimation(0, SpineAnims.bubbleAnim.Clean, false);
            Constants.spine_WaterBubbles.splice(i, 1);

            if (Constants.water_PointsStatus.every(status => status === true)) {
              Constants.isCanTouch = false;
              Constants.isDoneWaterBrush = true;
              this.NodeContainer.waterTooth.active = false;
              this.AudioManager.stopSound(Constants.SoundTrack.toothPaste2Sound);
              console.log("Done Water Bubble ");
            }
            break;
          }
        }
        break;
      }
    }
  }



  private showToothPaste(): void {
    this.checkToothPasteFlag = true;

    this.scheduleOnce(() => {
      this.showTools(this.NodeContainer.toothPaste, false);
    }, 1.5);

    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.ShakeBrush)}, 1.8);
    this.scheduleOnce(() => {this.AudioManager.playSound(
      Constants.SoundTrack.shampooSound)
      Constants.isCanTouch = true;
    }, 3.5);
  } 


  private showOptions(): void {
    this.checkBrushTeethFlag = true;
    this.AudioManager.playSound(Constants.SoundTrack.DoneStepSound);
    this.star2.getComponent(cc.Animation).play("StarAnim");

    this.scheduleOnce(() => {
      this.Options.active = true;
      this.Options.getComponent(cc.Animation).play("ShowOptions");

      // mtg & applovin
      // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }, 1.5)
  }


  private showToothBrush(): void {
    this.isDoneToothPasteFlag = true;
    this.sp_mouth.setAnimation(0, SpineAnims.LipsAnim.Idle, true);

    this.scheduleOnce(() => {
      Constants.isCanTouch = true;
      this.showTools(this.NodeContainer.waterTooth, false);

      this.WaterBubblePoint.setPosition(this.initPos[0])
      this.WaterBubbleSpine.node.setPosition(this.initPos[1])
      this.WaterBubbleHeadPoint.setPosition(this.initPos[2])
    }, 1.5);
  }


  protected update(dt: number): void {
    !this.checkDryerFlag && this.isInitVars && this.handleDoneDryer();
    Constants.isDoneDryer && !this.checkToothPasteFlag && this.showToothPaste();
    Constants.isDoneToothPaste && !this.isDoneToothPasteFlag && this.showToothBrush();
    Constants.isDoneWaterBrush && !this.checkBrushTeethFlag && this.showOptions();
  }

}
