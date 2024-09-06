import { AnimData } from "../Data/AnimData";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodeController from "./NodeController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
    // Script
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;
    @property(NodeController)
    NodeController: NodeController = null;


    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    CTA_btn: cc.Node = null;


    // state
    isDoneEraser: boolean = false;
    timeoutId: number = null;


    protected onLoad(): void {

    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.initGame();
    }


    private initGame(): void {
        Constants.currentLv = 1;

        this.CTA.active = false;

        this.NodeController.shape_wrong.active = false;

        // comment if build ironsource
        // this.playYameteKudasaiSound();
    }


    private activeEaraserHint(): void {
        Constants.isCanTouch = true;

        this.NodeController.Point.opacity = 0;

        this.NodeController.Point.setPosition(71, 134);

        this.NodeController.Point.active = true;

        cc.tween(this.NodeController.Point)
            .to(0.5, { opacity: 255 })
            .call(() => {
                this.NodeController.Point.getComponent(cc.Animation).play();
            })
            .start();
    }


    private hideEraserPoint(): void {
        this.NodeController.Point.active = false;
    }


    public handleDeleteWrong(nodeSpaceAR: cc.Vec2, scratchAbleComps: cc.Component[] | cc.Component): void {
        Constants.isCanTouch = false;

        this.AudioManager.playSound(Constants.SoundTrack.LoseSound);

        this.NodeController.shape_wrong.active = true;

        this.NodeController.shape_wrong.setPosition(nodeSpaceAR);

        cc.tween(this.NodeController.shape_wrong)
            .to(
                0.5,
                { scale: 0.1, opacity: 255 },
                { easing: cc.easing.elasticOut }
            )
            .to(0.5, { opacity: 0, scale: 0 }, { easing: cc.easing.elasticOut })
            .call(() => {

                // Kiểm tra nếu scratchAbleComps là mảng
                Array.isArray(scratchAbleComps)
                    ? scratchAbleComps.forEach(comp => comp.resetProgress())
                    : scratchAbleComps.resetProgress();

                Constants.isCanTouch = true;

                cc.log("reset Progress!");
            })
            .start();

        cc.log("delete wrong...");
    }


    public filterCorrectResult(result: cc.Component, deleteWrongPos: cc.Vec2): void {
        switch (Constants.currentLv) {
            case 1:
                result.node.parent.name === "Boy" && result.progress >= 0.45
                    ? this.deleteCorrect(1, result)
                    : this.handleDeleteWrong(deleteWrongPos, result);
                break;

            case 2:
                result.node.parent.name === "main" && result.progress >= 0.82
                    ? this.deleteCorrect(2, result)
                    : this.handleDeleteWrong(deleteWrongPos, result);
                break;

            case 3:
                result.node.parent.name === "Scene3" && result.progress >= 0.6
                    ? this.deleteCorrect(3, result)
                    : this.handleDeleteWrong(deleteWrongPos, result);
                break;

            default:
                break;
        }
    }


    public deleteCorrect(level: number, Component: cc.Component): void {
        cc.log("correct");

        Constants.currentLv += 1;

        Constants.isCanTouch = false;

        this.hideEraserPoint();

        // ẩn scratchable đi.
        Component.node.active = false;

        let scene = this.NodeController.Scenes[level - 1];
        let resultWin = scene.getChildByName("Result_Win");
        let timeToDoneLevel: number = null;
        let timeToShowNextLevel: number = null;

        switch (level) {

            case 1:
                let girl = scene.getChildByName("spine_Girl");
                let boy = scene.getChildByName("Boy");
                let fatman = scene.getChildByName("fatman");
                let fightSpine = scene.getChildByName("Fight");
                let helpHerText = scene.getChildByName("text");

                clearInterval(this.timeoutId);

                this.AudioManager.playSound(Constants.SoundTrack.fightSound);

                fightSpine.active = true;

                this.scheduleOnce(() => { 
                    resultWin.active = true; 
                    fightSpine.active = false; 
                    this.AudioManager.stopSound(Constants.SoundTrack.fightSound);
                }, 1.5);

                girl.getComponent(sp.Skeleton).setAnimation(0, AnimData.Girl.Level28_B, true);

                helpHerText.active = false;

                boy.active = false;

                fatman.active = false;

                timeToShowNextLevel = 3;

                timeToDoneLevel = 1.5;

                break;


            case 2:
                let intro = scene.getChildByName("intro");
                let introGirl = intro.getChildByName("spine_Girl");
                let main = scene.getChildByName("main");

                timeToShowNextLevel = 3;

                timeToDoneLevel = 0.1;

                intro.opacity = 255;

                intro.active = true;

                main.active = false;

                introGirl.getComponent(sp.Skeleton).setAnimation(0, AnimData.Girl.Level29_B, true);

                break;


            case 3:
                let Lv3Boy = scene.getChildByName("spine_Boy");
                let Lv3Girl = scene.getChildByName("spine_Girl");
                let Lv3ResultWin = scene.getChildByName("Result_Win");

                let Lv3SpineDoor = scene.getChildByName("Hotel")
                    .getChildByName("Scratchable").getChildByName("lvl32_hotel").getChildByName("Hotel_door");

                let Lv3MaskDoor = scene.getChildByName("Hotel")
                    .getChildByName("Scratchable").getChildByName("Mask").getChildByName("Door");

                Lv3SpineDoor.active = true;

                Lv3MaskDoor.active = false;

                Lv3ResultWin.active = true;

                Lv3Boy.active = false;

                Lv3Girl.active = false;

                timeToDoneLevel = 1;

                break;

            default:
                break;
        }

        // show fx
        this.scheduleOnce(() => {
            this.NodeController.FX_confetti.resetSystem();
            this.AudioManager.playSound(Constants.SoundTrack.successSound);
        }, timeToDoneLevel);

        Constants.currentLv <= 3
            ? this.showNextLevel(timeToShowNextLevel)
            : this.winGame();
    }


    private showNextLevel(timeToShowNextLevel: number): void {
        this.scheduleOnce(() => {
            Constants.currentLv === 2
                ? this.scheduleOnce(() => { this.activeEaraserHint() }, 3)
                : this.scheduleOnce(() => { this.activeEaraserHint() }, 1);

            this.NodeController.Scenes[Constants.currentLv - 2].active = false;

            this.NodeController.Scenes[Constants.currentLv - 1].active = true;

            this.NodeController.FX_confetti.stopSystem();
        }, timeToShowNextLevel);
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


    private activeTweenForBtn(): void {
        this.scheduleOnce(() => {

            cc.tween(this.CTA_btn)
                .to(0.5, { opacity: 255 })
                .call(() => {
                    cc.tween(this.CTA_btn)
                        .repeatForever(
                            cc.tween(this.CTA_btn)
                                .to(0.5, { scale: 0.5 })
                                .to(0.5, { scale: 0.45 }, { easing: 'elasticOut' })
                        ).start();
                })
                .start();

        }, 1)
    }


    public winGame(): void {
        Constants.isDoneEraser = true;
        this.AudioManager.stopSound(Constants.SoundTrack.eraserSound);

        this.isDoneEraser = true;

        this.scheduleOnce(() => {
            this.CTA.active = true;
            this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            this.activeTweenForBtn();
        }, 2)
    }


    public playYameteKudasaiSound(): void {
        this.AudioManager.playSound(Constants.SoundTrack.femaleLaughSound);

        this.timeoutId = setInterval(() => {
            Constants.currentLv < 2 && this.AudioManager.playSound(Constants.SoundTrack.femaleLaughSound);
        }, 6000);
    }
}
