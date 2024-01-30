import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Script
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;


    // Component
    @property(cc.Graphics)
    pencil: cc.Graphics = null;


    // Node
    @property(cc.Node)
    Bg_HideMask: cc.Node = null;
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    point: cc.Node = null;
    @property(cc.Node)
    hint: cc.Node = null;
    @property([cc.Node])
    point_draws: cc.Node[] = [];
    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    CTA_logo: cc.Node = null;
    @property(cc.Node)
    CTA_overlay: cc.Node = null;
    @property(cc.Node)
    CTA_btn: cc.Node = null;
    @property([cc.Node])
    fireWorks: cc.Node[] = [];



    // Effects
    @property([cc.Node])
    effect_Nodes: cc.Node[] = [];
    @property([cc.ParticleSystem])
    effect_FireWorks: cc.ParticleSystem[] = [];
    @property([sp.Skeleton])
    spine_FireWorks: sp.Skeleton[] = [];

    // Lv3
    @property(cc.Node)
    spine_level3: cc.Node = null;
    @property(cc.Node)
    text_lv3: cc.Node = null;


    // State
    curentPosition: cc.Vec2 = null;
    currentHint: cc.Node = null;
    currentPencil: cc.Graphics = null;
    curerntPoint: cc.Node = null;
    currentHitPoints: cc.Node[] = [];
    doneHitPoints: boolean[] = [false, false, false];


    protected onLoad(): void {
        this.CTA.active = false;
        this.spine_FireWorks.forEach(fw => fw.node.active = false);
    }


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        // this.setupLevel();
        this.handleGamePlay();
        Constants.isCanTouch = true;
    }


    private handleGamePlay(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_START, this.handleBgTouchStart, this);
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_MOVE, this.handleBgTouchMove, this);
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_END, this.handleBgTouchEnd, this);
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.handleBgTouchEnd, this);
    }


    private handleBgTouchStart(e: cc.Touch): void {
        if (!Constants.isCanTouch) {
            return;
        }


        if (Constants.currentLv === 3) {
            this.GameController.installHandle();
            return;
        }


        this.curentPosition = e.getLocation();
        this.setupLevel();
        this.currentHint.getComponent(cc.Animation).stop();
        this.currentHint.active = false;
        // this.currentHint.getComponent(cc.Animation).play(`Hand_AnimLv${Constants.currentLv}`)
        this.curerntPoint.setPosition(this.setCurrentPointPos());
        this.AudioManager.playSound(Constants.SoundTrack.drawSound);
        this.AudioManager.drawSound.loop = true;

        // this.handleIronSourcePlaySound();
    }


    private handleBgTouchMove(e: cc.Touch): void {
        if (!Constants.isCanTouch) {
            return;
        }

        this.currentPencil.moveTo(
            this.curentPosition.x - cc.winSize.width / 2,
            this.curentPosition.y - cc.winSize.height / 2 - Constants.Responsive.calculated
        );
        this.currentPencil.lineTo(
            e.getLocation().x - cc.winSize.width / 2,
            e.getLocation().y - cc.winSize.height / 2 - Constants.Responsive.calculated
        );

        this.curentPosition = e.getLocation();
        this.currentPencil.stroke();
        this.curerntPoint.setPosition(this.setCurrentPointPos());
        this.handleIntersectPoints();
    }


    private handleBgTouchEnd(): void {
        if (!Constants.isCanTouch) {
            return;
        }

        this.currentPencil.clear();
        this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
        let result = this.doneHitPoints.find(point => point === false);
        let newResult = String(result);
        newResult === "false" ? this.drawAgain() : this.drawSuccess();
    }


    private setupLevel(): void {
        this.currentHint = this.hint;
        this.currentPencil = this.pencil;
        this.curerntPoint = this.point;
        this.currentHitPoints = this.point_draws;
    }


    private setCurrentPointPos(): cc.Vec2 {
        let result = new cc.Vec2(0, 0);
        result.x = this.curentPosition.x - cc.winSize.width / 2;
        result.y = (this.curentPosition.y - cc.winSize.height / 2) - Constants.Responsive.calculated;

        return result;
    }


    private handleIntersectPoints(): void {
        for (let i = 0; i < this.currentHitPoints.length; i++) {
            let currentNode = this.currentHitPoints[i];
            if (currentNode.getBoundingBox().intersects(this.curerntPoint.getBoundingBox())) {
                for (let j = 0; j < this.doneHitPoints.length; j++) {
                    if (!this.doneHitPoints[j]) {
                        this.doneHitPoints[j] = true;
                        this.currentHitPoints.splice(i, 1);
                        break;
                    }
                }
                break;
            }
        }
    }


    private drawAgain(): void {
        console.log("draw again");
        this.doneHitPoints[0] = false;
        this.doneHitPoints[1] = false;
        this.doneHitPoints[2] = false;
    }


    private drawSuccess(): void {
        console.log("draw success");
        Constants.isCanTouch = false;
        this.doneHitPoints[0] = false;
        this.doneHitPoints[1] = false;
        this.doneHitPoints[2] = false;

        this.effect_FireWorks[0].resetSystem();
        this.effect_FireWorks[1].resetSystem();

        this.activeFireWorks();
    }


    private activeFireWorks(): void {
        this.AudioManager.playSound(Constants.SoundTrack.fireworksSound);
        this.AudioManager.fireworksSound.volume = 0.7;
        this.fireWorks.forEach(fw => {
            cc.tween(fw)
                .to(1,
                    {
                        y: this.point_draws[3].y,
                        scale: 0
                    }
                )
                .start();
        });


        this.scheduleOnce(() => {
            this.spine_FireWorks[0].node.active = true;
            this.spine_FireWorks[3].node.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.successSound);
        }, 1);

        this.scheduleOnce(() => {
            this.spine_FireWorks[1].node.active = true;
            this.spine_FireWorks[4].node.active = true;
        }, 1.5);

        this.scheduleOnce(() => {
            this.spine_FireWorks[2].node.active = true;
            this.spine_FireWorks[5].node.active = true;
            this.handleDoneLevel();
        }, 2)
    }


    private handleDoneLevel(): void {
        this.spine_level3.getComponent(sp.Skeleton).setAnimation(0, "action", true);
        this.spine_level3.getParent().getComponent(cc.Animation).stop("Character_Anim");
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_START);
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_END);
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_CANCEL);

        this.scheduleOnce(() => {
            Constants.isDrawSuccess = true;
            this.CTA.active = true;
            this.CTA_btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

            // mtg & applovin
            // this.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 2)
    }



    
    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
          return;
        }
    
        if (Constants.ironSource.SoundState) {
          this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }
    
        Constants.ironSource.isPlayBgSound = true;
      }


      private handleMuteSoundIronSource(): void {
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
            // this.handleMuteSoundIronSource();
    }
}
