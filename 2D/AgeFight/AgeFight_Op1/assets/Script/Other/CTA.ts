// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
    rect: cc.Node = null;
    @property(cc.Node)
    btn: cc.Node = null;
    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Node)
    overlay: cc.Node = null;

    @property(cc.Node)
    Next: cc.Node = null;
    @property(cc.Node)
    tryAgain: cc.Node = null;


    protected start(): void {
        cc.tween(this.overlay)
        .to(0.5, {opacity: 100})
        .start();
        this.activeTweenForBtn();

        this.tryAgain.opacity = 0;
        this.Next.opacity = 0;
        this.btn.opacity = 0;

        if(Constants.isLoose) {
            this.tryAgain.active = true;
            this.Next.active = false;
        } else {
            this.tryAgain.active = false;
            this.Next.active = true;
        }


        this.scheduleOnce(() => {
            this.btn.opacity = 255;
            this.tryAgain.opacity = 255;
            this.Next.opacity = 255;
            if(Constants.isLoose) {
                this.AudioManager.playSound(Constants.SoundTrack.failSound);
            } else {
                this.AudioManager.playSound(Constants.SoundTrack.winSound);
            }
            // cc.tween(this.rect)
            // .to(0.5, {scale: 0.4})
            // .call(() => {
            //     this.activeTweenForBtn();
            // })
            // .start();
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
                .to(0.5, { scale: 0.5 }, { easing: 'elasticOut' })
        ).start();
    }
}
