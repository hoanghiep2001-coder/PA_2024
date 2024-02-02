
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import NodesController from "./NodesController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchAreaController extends cc.Component {

    @property(NodesController)
    NodesController: NodesController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;


    protected start(): void {
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleBgTouchStart, this);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_MOVE, this.handleBgTouchMove, this);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_END, this.handleBgTouchEnd, this);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.handleBgTouchEnd, this);
    }


    
    private handleBgTouchStart(e: cc.Touch): void {
        if (!Constants.isCanTouch) {
            return;
        }


        Constants.currentPosition = e.getLocation();
        this.AudioManager.playSound(Constants.SoundTrack.drawSound);
        this.AudioManager.drawSound.loop = true;

        // this.handleIronSourcePlaySound();
    }


    private handleBgTouchMove(e: cc.Touch): void {
        if (!Constants.isCanTouch) {
            return;
        }

        this.NodesController.Graphics.moveTo(
            Constants.currentPosition.x - cc.winSize.width / 2,
            Constants.currentPosition.y - cc.winSize.height / 2 - Constants.Responsive.calculated
        );
        this.NodesController.Graphics.lineTo(
            e.getLocation().x - cc.winSize.width / 2,
            e.getLocation().y - cc.winSize.height / 2 - Constants.Responsive.calculated
        );

        Constants.currentPosition = e.getLocation();
        this.NodesController.Graphics.stroke();
    }


    private handleBgTouchEnd(): void {
        if (!Constants.isCanTouch) {
            return;
        }

        // this.NodesController.Graphics.clear();
        this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
    }

}
