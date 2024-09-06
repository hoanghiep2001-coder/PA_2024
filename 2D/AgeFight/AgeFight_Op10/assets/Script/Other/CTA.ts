import { GameController } from "../Controller/GameController";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(cc.Node)
    btn: cc.Node = null;
    @property(cc.Node)
    overlay: cc.Node = null;

    @property(cc.ParticleSystem)
    PS: cc.ParticleSystem = null;

    @property(cc.Node)
    Next: cc.Node = null;
    @property(cc.Node)
    tryAgain: cc.Node = null;

    isActived: boolean = false;


    protected start(): void {
        // cc.tween(this.overlay)
        // .to(0.5, {opacity: 100})
        // .start();
        this.activeTweenForBtn();

        if(Constants.isLoose) {
            this.tryAgain.active = true;
            this.Next.active = false;
        } else {
            this.tryAgain.active = false;
            this.Next.active = true;
            this.PS.resetSystem();
        }


        this.scheduleOnce(() => {
            // this.btn.opacity = 255;
            // this.tryAgain.opacity = 255;
            // this.Next.opacity = 255;
            if(Constants.isLoose) {
                this.AudioManager.playSound(Constants.SoundTrack.failSound);
            } else {
                this.AudioManager.playSound(Constants.SoundTrack.winSound);
            }
        }, 1.5)

        this.btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        // this.overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private activeTweenForBtn(): void {
        cc.tween(this.btn)
        .repeatForever(
            cc.tween(this.btn)
                .to(0.5, { scale: 0.45 })
                .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })
        ).start();
    }
}
