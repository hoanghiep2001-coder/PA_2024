import NeutrinoEffectComponent from "../../neutrinoparticles/components/NeutrinoEffect_NoNameEffect";
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
    }


    public handleDragWrong(nodeSpaceAR: cc.Vec2, prevPos: cc.Vec2, object: cc.Node): void {
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
                Constants.isCanTouch = true;

                object.setPosition(prevPos)

                cc.log("reset Progress!");

            })
            .start();

        cc.log("drag wrong...");
    }


    public handleDoneLevel(fx: cc.ParticleSystem, currentScene: cc.Node, object: cc.Node): void {

        Constants.isCanTouch = false;

        fx.resetSystem();

        let timeToDoneLevel: number = null;

        let timeToShowNextLevel: number = null;

        switch (Constants.currentLv) {
            case 1:
                timeToDoneLevel = 2;

                timeToShowNextLevel = 4;

                this.handleDoneScene1(currentScene);

                break;
            case 2:
                timeToDoneLevel = 2;

                timeToShowNextLevel = 4;

                this.handleDoneScene2(currentScene);

                break;
            case 3:
                Constants.isCanTouch = true;

                Constants.levelObjectDoneIndex += 1;

                currentScene.getChildByName("circle").children[Constants.levelObjectDoneIndex - 1].active = true;
                object.active = false;

                if(Constants.levelObjectDoneIndex >= 2) {
                    Constants.isCanTouch = false;

                    timeToDoneLevel = 2;

                    timeToShowNextLevel = 3;

                    this.handleDoneScene3(currentScene);
                }

                break;
            default:
                break;
        }

        this.AudioManager.playSound(Constants.SoundTrack.passSound);

        // show fx
        if(timeToDoneLevel) this.scheduleOnce(() => {
            this.NodeController.FX_confetti.resetSystem();
            this.AudioManager.playSound(Constants.SoundTrack.successSound);
        }, timeToDoneLevel);

        if(timeToShowNextLevel) {
            Constants.currentLv += 1;
            Constants.currentLv <= 3
            ? this.showNextLevel(timeToShowNextLevel)
            : this.winGame();
        };
    }


    private handleDoneScene1(currentScene: cc.Node): void {

        let chure = currentScene.getChildByName("chure");
        let codau = currentScene.getChildByName("codau");
        let obj = currentScene.getChildByName("object_true");
        let circle = currentScene.getChildByName("circle");
        let result = currentScene.getChildByName("Result_Win");
        let nycChure = result.getChildByName("NycChure");
        let hallDoor = result.getChildByName("Hall_Door");
        let fx_Water = hallDoor.getChildByName("PS_Base")
            .getChildByName("water").getComponent(cc.ParticleSystem);


        obj.active = false;
        circle.active = false;

        chure.getComponent(sp.Skeleton).setAnimation(0, AnimData.Chure.Level01_C, true);

        codau.getComponent(sp.Skeleton).setAnimation(0, AnimData.Codau.Level01_C, true);

        let nycChurePos = nycChure.getPosition();

        this.scheduleOnce(() => {
            hallDoor.getComponent(sp.Skeleton).setAnimation(0, AnimData.Door.Level01_B, false);

            nycChure.getComponent(sp.Skeleton).setAnimation(0, AnimData.NycChuRe.Level01_B, true);

            this.scheduleOnce(() => { fx_Water.resetSystem(); }, 0.2)

            cc.tween(nycChure)
                .to(0.5, { x: nycChurePos.x - 40 })
                .call(() => {
                    nycChure.getComponent(sp.Skeleton).setAnimation(0, AnimData.NycChuRe.Level01_C, true);
                })
                .start();
        }, 0.25)
    }


    private handleDoneScene2(currentScene: cc.Node): void {

        let boy = currentScene.getChildByName("spine_Boy");
        let result_win = currentScene.getChildByName("result_win");
        let girl = currentScene.getChildByName("spine_Girl");
        let nycBoy = currentScene.getChildByName("spine_NycBoy");
        let obj_true = currentScene.getChildByName("object_true");
        let circle = currentScene.getChildByName("circle");
        let FX_Heart = currentScene.getChildByName("FX_Heart");

        boy.active = false;
        circle.active = false;
        obj_true.active = false;
        FX_Heart.active = true;
        result_win.active = true;

        boy.getComponent(sp.Skeleton).setAnimation(0, AnimData.Boy.Level02_B, true);

        girl.getComponent(sp.Skeleton).setAnimation(0, AnimData.Girl.Level02_B, true);

        nycBoy.getComponent(sp.Skeleton).setAnimation(0, AnimData.NycChuRe.Level02_B, true);
    }


    private handleDoneScene3(currentScene: cc.Node): void {

        let boy = currentScene.getChildByName("spine_Boy");
        let nycBoy = currentScene.getChildByName("spine_NycBoy");
        let result = currentScene.getChildByName("Result");
        let fx_rain = currentScene.getChildByName("FX_Rain");

        boy.active = false;
        nycBoy.active = false;
        result.active = true;
        fx_rain.active = true;
    }


    private showNextLevel(timeToShowNextLevel: number): void {
        this.scheduleOnce(() => {
            Constants.isCanTouch = true;

            this.NodeController.Scenes[Constants.currentLv - 2].active = false;

            this.NodeController.Scenes[Constants.currentLv - 1].active = true;

            this.NodeController.FX_confetti.stopSystem();
        }, timeToShowNextLevel)
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
}
