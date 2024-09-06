import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodeController from "./NodeController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchAreaController extends cc.Component {
    @property(GamePlay)
    GamePlay: GamePlay = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;
    @property(NodeController)
    NodeController: NodeController = null;


    @property(cc.Node)
    CTA_Btn: cc.Node = null;
    @property(cc.Node)
    CTA_Overlay: cc.Node = null;

    
    // state
    isTouch: boolean = false;
    isActiveCTA: boolean = false;
    startTouchPos: cc.Vec2 = null;


    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg && aplovin
        this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private touchStart(e: cc.Touch): void {
        // ironsource
        this.GamePlay.playYameteKudasaiSound();

        this.GamePlay.handleIronSourcePlaySound();

        if (!Constants.isCanTouch) return;

        this.isTouch = true;

        this.NodeController.Point.active = true;

        !Constants.isDoneEraser && this.AudioManager.playSound(Constants.SoundTrack.eraserSound);

        let pos = e.getLocation();

        let convertedPos = this.node.convertToNodeSpaceAR(pos);

        this.NodeController.Point.getComponent(cc.Animation).stop();

        this.NodeController.Point.setPosition(convertedPos);

        this.startTouchPos = convertedPos;
    }


    private touchMove(e: cc.Touch): void {
        if (!Constants.isCanTouch || !this.isTouch) return;

        let pos = e.getLocation();

        let convertedPos = this.node.convertToNodeSpaceAR(pos);

        this.NodeController.Point.setPosition(convertedPos);
    }


    private touchEnd(e: cc.Touch): void {

        if (!Constants.isCanTouch || !this.isTouch) return;

        this.isTouch = false;

        this.AudioManager.stopSound(Constants.SoundTrack.eraserSound);

        let result: any[];

        // lọc ra những thằng đã bị xóa

        // dựa vào result in ra kết quả
        if (result) {

            // check xóa đúng hoặc sai
            result.length >= 2 && this.GamePlay.handleDeleteWrong(this.startTouchPos, result)
            result.length === 1 && this.GamePlay.filterCorrectResult(result[0], this.startTouchPos);

            cc.log("check Result..");

        } else {
            // ko có result là xóa sai, xóa linh tinh, chưa xóa, ...
            this.GamePlay.handleDeleteWrong(this.startTouchPos, result);
        }


    }


    public unActivePoint(): void {
        this.NodeController.Point.active = false;
    }


    offEvent(): void {
        this.isActiveCTA = false;
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_START);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_END);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_CANCEL);
    }


    protected update(dt: number): void {
        this.GamePlay.handleMuteSoundIronSource();
    }
}
