
import { _decorator, Camera, Component, CurveRange, director, enumerableProps, EventMouse, game, log, Node, ParticleSystem, ParticleSystemComponent, Scheduler, SkeletalAnimation, sys, systemEvent, SystemEvent, tween, utils, Vec2, Vec3 } from 'cc';
import Singleton from '../Utility/Singleton';
import Global from '../Utility/Global';
import { PommiController } from './PommiController';
import { LiftingManController } from './LiftingManController';
import { UIManager } from './UIManager';
import SoundManager from '../Utility/SoundManager';
import { Constants } from '../Utility/Constant';
import Utility from '../Utility/Utility';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameManager
 * DateTime = Thu Apr 11 2024 16:29:50 GMT+0700 (Indochina Time)
 * Author = PhongDNRocket123
 * FileBasename = GameManager.ts
 * FileBasenameNoExtension = GameManager
 * URL = db://assets/Scripts/GameManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('GameManager')
export class GameManager extends Singleton<GameManager> {
    [x: string]: any;
    @property(Camera)
    cam: Camera = null!;
    @property(ParticleSystemComponent)
    fart: ParticleSystemComponent = null!;

    pommiController: PommiController = null;
    liftingManController: LiftingManController = null;

    @property(Node)
    level1: Node = null!;

    @property(Node)
    level2: Node = null!;

    @property(Node)
    endcard: Node = null!;

    @property(Node)
    textGuide1: Node = null!;

    @property(Node)
    textGuide2: Node = null!;


    @property({ type: SkeletalAnimation })
    anim: SkeletalAnimation = null!;


    boolCanFarting: boolean = false;
    boolEndgame: boolean = false;
    firstTouch: Vec2 = null;
    currentTouch: Vec2 = null;
    onEnable() {
        this.onRegisterEvent();
        this.pommiController = PommiController.Instance(PommiController);
        this.liftingManController = LiftingManController.Instance(LiftingManController);

    }
    constructor() {
        super();
        GameManager._instance = this;
    }

    onRegisterEvent() {
        this.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onMouseUp, this);
        this.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
    }

    onMouseDown(event: EventMouse) {
        this.firstTouch = event.getLocation();
        this.currentTouch = event.getLocation();
        if (this.boolEndgame) return;
        if (!this.canFarting) return;
        if (this.firstTouch != null) {
            this.pommiController.setAnimation(this.pommiController.animStartFartString, 0, 1);
        }
        this.textGuide1.active = false;

        UIManager.Instance(UIManager).guideHand.active = false;
        UIManager.Instance(UIManager).text.active = false;
        this.schedule(function () {
            // Here this refers to component
            Global.startTouch = true;
            this.fart.node.active = true;
            this.fart.play();
            this.fart.sizeOvertimeModule.enable = false;
        }, 0.1);


    }
    onMouseMove(event: EventMouse) {

        this.currentTouch = event.getLocation();
        if (this.boolEndgame) return;
        if (!this.canFarting) return;
        if (Global.startTouch) {
            if (this.currentTouch.y < this.firstTouch.y) {
                this.farting();
            }
        }

    }
    onMouseUp(event: EventMouse) {
        SoundManager.Instance(SoundManager).fart.volume = 0;

        Global.startTouch = false;
        if (this.boolEndgame) return;
        if (!this.canFarting) return;
        this.stopFarting();
        this.unscheduleAllCallbacks();

    }

    maxSize: number = 8;
    minSize: number = 0;
    ration: number = 4;
    currentSize: number = 1;
    maxlifeTime: number = 1.5;
    minLifetTime: number = 0;
    currentLifeTime: number = 0.25;
    speedDecrese: number = 4;

    startFarting: boolean = false;
    canFarting: boolean = false;
    canLifting: boolean = false;
    completeLifting: boolean = false;


    farting() {
        if (Constants.ironSource.SoundState) {
            SoundManager.Instance(SoundManager).fart.volume = 1;
        } else {
            SoundManager.Instance(SoundManager).fart.volume = 0;

        }
        if (!this.startFarting) {
            this.pommiController.setAnimation(this.pommiController.animFartLoopString, 0, 1);

        }
        this.startFarting = true;
        if (this.currentSize < this.maxSize) {
            this.currentSize += this.ration * game.deltaTime;
            if (!this.canLifting && this.currentSize >= 2) {
                this.liftingManController.setAnimation(this.liftingManController.animPushString, 0, 1);

                this.canLifting = true;
            }
            this.fart.startSizeX.constant = this.currentSize / 2;
            this.fart.startSizeY.constant = this.currentSize;
        }
        if (this.currentSize >= this.maxSize) {
            if (!this.completeLifting) {
                this.completeLifting = true;
                this.liftingManController.setAnimation(this.liftingManController.animWinString, 0, 1);
                this.boolEndgame = true;
                this.pommiController.setAnimation(this.pommiController.animEndFartString, 0, 1);
                this.winLevel();
            }
        }
        if (this.currentLifeTime <= this.maxlifeTime) {
            this.currentLifeTime += this.ration * game.deltaTime;
            this.fart.startLifetime.constant = this.currentLifeTime;
        }

    }

    descrease() {
        if (this.currentSize >= this.minSize) {
            this.currentSize -= this.ration * game.deltaTime * this.speedDecrese;
            this.fart.startSizeX.constant = this.currentSize / 2;
            this.fart.startSizeY.constant = this.currentSize;
        }

        if (this.currentLifeTime >= this.minLifetTime) {
            this.currentLifeTime -= this.ration * game.deltaTime * this.speedDecrese;
            this.fart.startLifetime.constant = this.currentLifeTime;
        }
    }
    stopFarting() {
        if (!this.completeLifting) {
            this.liftingManController.setAnimation(this.liftingManController.animWaitString, 0, 1);
        }
        this.pommiController.setAnimation(this.pommiController.animEndFartString, 0, 1);
        this.startFarting = false;
        this.canLifting = false;
    }

    intro() {
        this.pommiController.setAnimation(this.pommiController.animStartFartString, 1500, 1);
        setTimeout(() => {
            this.pommiController.rotate(-90);
        }, 1000);

        setTimeout(() => {
            let tweenDuration: number = 0.5;
            UIManager.Instance(UIManager).gymText.active = false;
            this.textGuide1.active = true;
            tween(this.cam.node)
                .to(tweenDuration, { position: new Vec3(0, 0.7, 2.8) })
                .start()
            tween(this.cam)
                .to(tweenDuration, { fov: Global.fov })
                .start()


        }, 1000);

        setTimeout(() => {

            this.canFarting = true;
            UIManager.Instance(UIManager).guideHand.active = true;
            UIManager.Instance(UIManager).text.active = true;
        }, 1800);

    }


    winLevel() {
        Global.endGame = true;
        if (Constants.ironSource.SoundState) {
            SoundManager.Instance(SoundManager).win.play();
        } else {
            //SoundManager.Instance(SoundManager).win.volume = 0;
        }
        // this.fart.node.setScale(new Vec3(0, 0, 0));
        tween(this.fart.node)
            .to(1, { scale: new Vec3(0, 0, 0) })
            .start()
        this.boolEndgame = true;
        this.pommiController.rotate(0, 0.2);
        this.pommiController.setAnimation(this.pommiController.animWin1String, 0, 1);
        setTimeout(() => {
            UIManager.Instance(UIManager).winText.active = true;
            UIManager.Instance(UIManager).confenti.active = true;
            setTimeout(() => {
                this.level1.destroy();
                this.level2.active = true;
                this.cam.fov = Global.fovEndgame;
                this.cam.node.setPosition(new Vec3(0, 1, 3))
                tween(this.anim.node)
                    .to(0.5, { eulerAngles: new Vec3(0, -90, 0) })
                    .start()
                this.textGuide2.active = true;

                UIManager.Instance(UIManager).guideHand.active = true;
                UIManager.Instance(UIManager).text.active = true;
                this.anim.play("pomni_fart_start");
                this.endcard.active = true;
                UIManager.Instance(UIManager).winText.active = false;
                UIManager.Instance(UIManager).confenti.active = false;
            }, 1500);
        }, 1000);
    }

    public handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
            }
        }
    }
    start() {
        this.intro();
    }

    update(deltaTime: number) {
        if (!Global.startTouch || this.boolEndgame) {

            this.descrease();
            SoundManager.Instance(SoundManager).fart.volume = 0;
        }
        this.handleMuteSoundIronSource();
    }
}


