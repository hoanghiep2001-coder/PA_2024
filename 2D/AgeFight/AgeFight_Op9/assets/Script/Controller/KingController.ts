import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import Responsive from "../Plugin/Responsive";

const { ccclass, property } = cc._decorator;

@ccclass
export default class KingController extends cc.Component {
    @property(cc.Node)
    Base: cc.Node = null;

    @property(cc.Node)
    HealthBar: cc.Node = null;

    @property(cc.Node)
    CTA: cc.Node = null;

    @property(Responsive)
    Responsive: Responsive = null;

    AudioManager: AudioManager = null;
    spine: sp.Skeleton = null;
    collider: cc.BoxCollider = null;

    skin: string = "";
    speed: number = 25;

    canRun: boolean = true;
    isBase: boolean = false;
    isLive: boolean = true;
    isAttacking: boolean = false;
    isReadyToFight: boolean = false;

    pauseFlag: boolean = false;
    rigidbody: cc.RigidBody = null;


    protected start(): void {
        this.AudioManager = this.node.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);

        // active run to Base
        this.scheduleOnce(() => {
            this.AudioManager.playSound(Constants.SoundTrack.HelpMe);
            this.runToBase();
            this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
        }, 0.2);

        this.schedule(() => {
            if (Constants.isLoose || Constants.isWin) return;
            this.playSoundHelpMe();
        }, 2);
    }


    private playSoundHelpMe(): void {
        this.AudioManager.playSound(Constants.SoundTrack.HelpMe);
    }


    private runToBase(): void {
        let basePos = this.Base.getPosition();
        let currentDevice = this.Responsive.device;
        let calculateTime: number = null;

        switch (currentDevice) {
            case "horizontal_IPX":
                calculateTime = 23;
                break;
            case "horizontal_Tablet":
                calculateTime = 13.5;
                break;
            case "vertical_IPX":
                calculateTime = 13;
                break;
            case "vertical_Mobile":
                calculateTime = 13;
                break;
            default:
                break;
        }

        cc.tween(this.node)
            .to(calculateTime, { x: basePos.x }, { easing: cc.easing.smooth })
            .call(() => {
                // run to base Successfully
                cc.tween(this.node)
                    .to(0.5, { opacity: 0 })
                    .start();

                if (this.isLive) {
                    Constants.isPauseGame = true;
                    Constants.isWin = true;
                    this.CTA.active = true;
                }
            })
            .start();
    }


    private die(): void {
        Constants.isLoose = true;
        Constants.isPauseGame = true;
        this.CTA.active = true;

        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(KingController).enabled = false;
    }


    private checkDie(): void {
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;

        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(() => this.node.destroy())
            .start();

        this.die();
    }


    public decreaseHealth(): void {

        let random = cc.math.randomRangeInt(0, 4);

        switch (random) {
            case 0:
                this.spine.node.getChildByName("Vfx_1").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 1:
                this.spine.node.getChildByName("Vfx_2").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 2:
                this.spine.node.getChildByName("Vfx_3").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 3:
                this.spine.node.getChildByName("Vfx_4").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            default:
                break;
        }

        this.HealthBar.scaleX -= 0.05;
        this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
    }


    protected update(dt: number): void {
        // this.checkPause();
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        // this.checkRun();
    }
}
