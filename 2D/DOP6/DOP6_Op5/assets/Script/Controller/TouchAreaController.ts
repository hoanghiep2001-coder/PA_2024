import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodeController from "./NodeController";
import NeutrinoEffectComponent from "../../neutrinoparticles/components/NeutrinoEffect_NoNameEffect";

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

    // đây là đồ vật khi tương tác touch
    currentInteractObject: cc.Node = null;

        // đây là vị trí của đồ vật khi lần đầu tương tác touch
        ObjectPrevPos: cc.Vec2 = null;

    // đây là vùng impact
    currentAreaToImpact: cc.Node = null;

    // fx của đồ vật tương đương scene
    currentFX: cc.ParticleSystem = null;

    // scene hiện tại đang tương tác
    curentScene: cc.Node = null;


    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        this.NodeController.objects.forEach(obj => {
            obj.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
            obj.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
            obj.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
            obj.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        });

        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg && aplovin
        // this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // iroonsoource
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_START, this.GamePlay.handleIronSourcePlaySound, this);
    }


    private touchStart(e: cc.Event.EventTouch): void {
        this.GamePlay.handleIronSourcePlaySound();

        if (!Constants.isCanTouch) return;

        this.isTouch = true;

        this.currentInteractObject = e.target;

        this.ObjectPrevPos = this.currentInteractObject.getPosition();

        this.curentScene = this.currentInteractObject.parent;

        let pos = e.getLocation();

        let convertedPos = this.node.convertToNodeSpaceAR(pos);        

        this.currentInteractObject.setPosition(convertedPos);

        this.startTouchPos = convertedPos;

        this.currentAreaToImpact = this.curentScene.getChildByName("circle");

        this.currentFX = this.curentScene.getChildByName("FX_doneStep").children[0].getComponent(cc.ParticleSystem);

        let hint = this.curentScene.getChildByName("Hint");
        hint.active = false;

    }


    private touchMove(e: cc.Touch): void {
        if (!Constants.isCanTouch || !this.isTouch) return;

        let pos = e.getLocation();

        let convertedPos = this.node.convertToNodeSpaceAR(pos);

        this.currentInteractObject.setPosition(convertedPos);
    }


    private touchEnd(e: cc.Touch): void {

        if (!Constants.isCanTouch || !this.isTouch) return;

        this.isTouch = false;

        let pos = e.getLocation();

        let convertedPos = this.node.convertToNodeSpaceAR(pos);

        if(this.isTouchInteractArea()) {
            this.GamePlay.handleDoneLevel(this.currentFX, this.curentScene, this.currentInteractObject);
        } else {
            this.GamePlay.handleDragWrong(convertedPos, this.ObjectPrevPos, this.currentInteractObject);
        }
        
    }


    private isTouchInteractArea(): boolean {
        let result = false;

        if(this.currentInteractObject.name === "object_true") {
            let objBdx = this.currentInteractObject.getBoundingBox();
            let areaBdx = this.currentAreaToImpact.getBoundingBox();
    
            if(areaBdx.intersects(objBdx)) return true;
        }

        return result;
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
