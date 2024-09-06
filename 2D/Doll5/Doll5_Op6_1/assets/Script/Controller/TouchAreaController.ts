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


  // state
  isCanChangeColor: boolean = false;
  itemChangeColor1: cc.Node = null;
  itemChangeColor2: cc.Node = null;
  checkClick: number = 0;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {

    this.NodesContainer.BtnDownload.getChildByName("btnDownload")
      .on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // hair on click event
    for (let index = 0; index < this.NodesContainer.Frame_Hairs.length; index++) {
      const frame = this.NodesContainer.Frame_Hairs[index];
      frame.on(cc.Node.EventType.TOUCH_START, () => { this.activeHairOnTouch(index) }, this);
    }

    // color hair on click event
    for (let index = 0; index < this.NodesContainer.Frame_Colors.length; index++) {
      const frame = this.NodesContainer.Frame_Colors[index];
      frame.on(cc.Node.EventType.TOUCH_START, () => { this.activeColorOnTouch(frame) }, this);
    }

    // dress on click event
    for (let index = 0; index < this.NodesContainer.Frame_Dresses.length; index++) {
      const frame = this.NodesContainer.Frame_Dresses[index];
      frame.on(cc.Node.EventType.TOUCH_START, () => { this.activeDressOnTouch(index) }, this);
    }

    // shoe on click event
    for (let index = 0; index < this.NodesContainer.Frame_Shoes.length; index++) {
      const frame = this.NodesContainer.Frame_Shoes[index];
      frame.on(cc.Node.EventType.TOUCH_START, () => { this.activeShoeOnTouch(index) }, this);
    }

    this.NodesContainer.BtnLeft.children[0].on(cc.Node.EventType.TOUCH_START, this.naviagateItems, this);
    this.NodesContainer.BtnRight.children[0].on(cc.Node.EventType.TOUCH_START, this.naviagateItems, this);


    this.NodesContainer.hideMask
      .on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);


    this.NodesContainer.Btn_DollCamera.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

  }


  private hideMaskTouchStart(): void {
    // applovin & mtg
    if ((Constants.countClick >= Constants.maxClickToStore) || Constants.isTakePhoto) {
      this.GameController.installHandle();
      return;
    }
  }


  private activeHairOnTouch(index: number): void {
    if (Constants.countClick >= Constants.maxClickToStore) {
      this.GameController.installHandle();
      return;
    }

    // ironsource
    // this.handleIronSourcePlaySound();

    if (!Constants.isDoneStep1) Constants.currentStep = 1;

    Constants.countClick += 1;
    Constants.isDoneStep1 = true;

    if(this.checkClick === 2) this.checkClick = 0;
    if(this.checkClick === 0) {
      this.GamePlay.playGreatSound();
    }
    this.checkClick += 1;
    let result = index + 1;
    this.NodesContainer.Char_Hairs.forEach(hair => hair.active = false);
    this.NodesContainer.Frame_Hairs.forEach(frame => frame.color = cc.Color.WHITE);
    this.NodesContainer.Frame_Hairs[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
    this.NodesContainer.PS_Blink_Head.resetSystem();
    this.NodesContainer.BtnRight.active = true;
    this.NodesContainer.Hand.active = false;

    switch (result) {
      case 1:
        this.isCanChangeColor = false;
        this.itemChangeColor1 = this.NodesContainer.Char_Hairs[10];
        this.itemChangeColor2 = this.NodesContainer.Char_Hairs[11];
        this.NodesContainer.Char_Hairs[10].active = true;
        this.NodesContainer.Char_Hairs[11].active = true;
        break;
      case 2:
        this.isCanChangeColor = false;
        this.itemChangeColor1 = this.NodesContainer.Char_Hairs[2];
        this.itemChangeColor2 = this.NodesContainer.Char_Hairs[3];
        this.NodesContainer.Char_Hairs[2].active = true;
        this.NodesContainer.Char_Hairs[3].active = true;
        break;
      case 3:
        this.isCanChangeColor = false;
        this.NodesContainer.Char_Hairs[4].active = true;
        break;
      case 4:
        this.isCanChangeColor = false;
        this.NodesContainer.Char_Hairs[5].active = true;
        break;
      case 5:
        this.isCanChangeColor = false;
        this.NodesContainer.Char_Hairs[6].active = true;
        this.NodesContainer.Char_Hairs[7].active = true;
        break;
      case 6:
        this.isCanChangeColor = false;
        this.NodesContainer.Char_Hairs[8].active = true;
        this.NodesContainer.Char_Hairs[9].active = true;
        break;
      default:
        break;
    }

    this.activeChangeColor(this.isCanChangeColor);
  }

  private activeDressOnTouch(index: number): void {
    if (Constants.countClick >= Constants.maxClickToStore) {
      this.GameController.installHandle();
      return;
    }

    if (!Constants.isDoneStep2) Constants.currentStep = 2;

    Constants.countClick += 1;
    Constants.isDoneStep2 = true;

    if(this.checkClick === 2) this.checkClick = 0;
    if(this.checkClick === 0) {
      this.GamePlay.playGreatSound();
    }
    this.checkClick += 1;
    this.NodesContainer.Char_Dresses.forEach(shoe => shoe.active = false);
    this.NodesContainer.Frame_Dresses.forEach(frame => frame.color = cc.Color.WHITE);
    this.NodesContainer.Frame_Dresses[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
    this.NodesContainer.PS_Blink_Base.resetSystem();
    this.NodesContainer.BtnRight.active = true;
    this.NodesContainer.BtnLeft.active = true;
    this.NodesContainer.Char_Dresses[index].active = true;

  }

  private activeShoeOnTouch(index: number): void {
    if (Constants.countClick >= Constants.maxClickToStore) {
      this.GameController.installHandle();
      return;
    }

    if (!Constants.isDoneStep3) Constants.currentStep = 3;

    Constants.countClick += 1;
    Constants.isDoneStep3 = true;

    if(this.checkClick === 2) this.checkClick = 0;
    if(this.checkClick === 0) {
      this.GamePlay.playGreatSound();
    }
    this.checkClick += 1;
    this.NodesContainer.Char_Shoes.forEach(shoe => shoe.active = false);
    this.NodesContainer.Frame_Shoes.forEach(frame => frame.color = cc.Color.WHITE);
    this.NodesContainer.Frame_Shoes[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
    this.NodesContainer.PS_Blink_Shoe.resetSystem();
    this.NodesContainer.BtnRight.active = true;
    this.NodesContainer.BtnLeft.active = true;
    this.NodesContainer.Char_Shoes[index].active = true;

  }

  private activeChangeColor(active: boolean): void {
    active ? this.NodesContainer.ListColor.active = true : this.NodesContainer.ListColor.active = false;
  }


  private activeColorOnTouch(frame: cc.Node): void {
    if (Constants.countClick >= Constants.maxClickToStore) {
      this.GameController.installHandle();
      return;
    }

    let color = frame.color.toHEX();
    this.itemChangeColor1.color = cc.Color.fromHEX(new cc.Color, color);
    this.itemChangeColor2.color = cc.Color.fromHEX(new cc.Color, color);

    if(this.checkClick === 2) this.checkClick = 0;
    if(this.checkClick === 0) {
      this.GamePlay.playGreatSound();
    }
    this.checkClick += 1;
    this.NodesContainer.PS_Blink_Head.resetSystem();
  }


  private naviagateItems(e: cc.Event.EventTouch): void {
    if (Constants.countClick >= Constants.maxClickToStore) {
      this.GameController.installHandle();
      return;
    }

    this.isCanChangeColor = false;
    let Node: cc.Node = e.target;
    this.NodesContainer.BtnRight.active = false;
    if (Node.parent.name === "Btn_Right") {

      if (Constants.isDoneStep3) {
        Constants.isTakePhoto = true;
        this.GamePlay.handleTakePhoto();
      }

      this.NodesContainer.BtnLeft.active = true;
      Constants.currentListItem += 1;
      if (Constants.currentListItem > 2) Constants.currentListItem = 2;
    } else {
      Constants.currentListItem -= 1;
      if (Constants.currentListItem < 0) Constants.currentListItem = 0;
    }

    this.GamePlay.updateProgress();

    this.NodesContainer.Items.forEach(item => item.active = false);
    this.NodesContainer.Items[Constants.currentListItem].active = true;
    this.activeChangeColor(this.isCanChangeColor);
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
