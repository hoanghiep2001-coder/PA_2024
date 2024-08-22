import {
  _decorator,
  Component,
  Node,
  tween,
  Vec3,
  Quat,
  math,
  AudioClip,
  Button,
  director,
  CCFloat,
  v3,
  EventTouch,
  screen,
  Camera,
  Animation,
  Vec2,
  Tween,
  log,
} from "cc";
import { GameController } from "./GameController";
import { JoyStick } from "./JoyStick";
import { Constants } from "../Data/constants";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {

  // component
  @property(JoyStick)
  JoyStickComponent: JoyStick = null;

  @property(Camera)
  Camera: Camera = null;

  //3D
  @property(Node)
  Container: Node = null;
  @property(Node)
  Cat: Node = null;
  @property(Node)
  Door: Node = null;
  @property(Node)
  Boss: Node = null;
  @property([Node])
  Cats: Node[] = [];
  @property(Node)
  Cat_Container: Node = null;


  // 2D
  @property(Node)
  canvas2D: Node;
  @property(Node)
  icon: Node;
  @property(Node)
  navigate: Node;
  @property(Node)
  text: Node;
  @property(Node)
  title: Node;
  @property(Node)
  joyStick: Node;
  @property(Node)
  hideMask: Node;
  @property(Node)
  loadMap: Node = null;
  @property(Node)
  camera: Node = null;


  // PickCat UI
  @property(Node)
  Text_SelectSkin: Node = null;
  @property(Node)
  overlay: Node = null;
  @property(Node)
  pickCatContainer: Node = null;
  @property(Node)
  PickCat_Hand: Node = null;
  @property(Node)
  BtnPlay: Node = null;


  @property
  step: number = 1;
  @property(CCFloat)
  _realHeight: number = null;
  @property(CCFloat)
  _realWidth: number = null;


  // audio
  @property(AudioClip)
  bg: AudioClip = null;
  @property(AudioClip)
  click: AudioClip = null;
  @property(AudioClip)
  win: AudioClip = null;


  touchPos: Vec2 = null;
  meowSoundState: number = null;
  selectNode: Node = null;

  // ironsource
  ironSourceState: number = 1;
  ironSourceSoundState: boolean = true;
  isEndGame: boolean = false;
  endGame: boolean = false;


  start() {
    this.bg.setLoop(true);
    this.bg.play();

    this.canvas2D.active = true;
    this.loadMap.active = false;
    this.BtnPlay.active = false;

    this.scheduleOnce(() => {
      this.BtnPlay.on(Node.EventType.TOUCH_START, this.handleRegisterEventInstall, this);
    }, 0.5)
  }


  public handleRegisterEventInstall(): void {
    new Tween(this.Container)
      .to(0.5, { position: new math.Vec3(2, 0, 0) })
      .start();
    // log(this.selectNode)
    this.selectNode.active = true;

    if (Constants.ironSource.SoundState) {
      this.win.play();
    }

    this.Cat_Container.active = false;
    this.overlay.active = false;
    this.text.active = true;
    this.navigate.active = true;
    this.Text_SelectSkin.active = false;
    this.BtnPlay.active = false;
  }


  protected onLoad() {

  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      this.bg.play();
      this.bg.setLoop(true);
    }

    Constants.ironSource.isPlayBgSound = true;
  }


  public handleMuteSoundIronSource(): void {
    Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

    if (Constants.ironSource.State) {
      if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
        Constants.ironSource.SoundState = true;
        this.bg.play();
        this.bg.setLoop(true);
      }

      if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
        Constants.ironSource.SoundState = false;
        cc.audioEngine.stopAll();
        this.bg.stop();
        this.win.stop();
        this.click.stop();
      }
    }
  }


  update(deltaTime: number) {
    if (screen.windowSize.width > screen.windowSize.height) {
      this.camera.setPosition(v3(-14.8, 24, 0));
      this._realHeight = 480;
      this._realWidth =
        320 * (screen.windowSize.width / screen.windowSize.height);

      if(!(screen.windowSize.height / screen.windowSize.width < 0.65)) {

      }

    } else {
      this.camera.setPosition(v3(-13, 24, 0));
      if (screen.windowSize.height / screen.windowSize.width < 1.4) {
        this._realWidth = 370;
      } else {
        this._realWidth = 320;
      }
      this._realHeight =
        this._realWidth *
        (screen.windowSize.height / screen.windowSize.width);
      
    }

    // ironsource
    // this.handleMuteSoundIronSource();
  }
}
