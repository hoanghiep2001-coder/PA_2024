// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossController extends cc.Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(sp.Skeleton)
    blast1: sp.Skeleton = null;
    @property(sp.Skeleton)
    blast2: sp.Skeleton = null;
    @property(sp.Skeleton)
    blast3: sp.Skeleton = null;


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.heliSound);

        this.scheduleOnce(() => {
            this.blast1.node.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.earthQuakeSound);
        }, 0.5);
        this.scheduleOnce(() => {
            this.blast2.node.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.earthQuakeSound);
        }, 0.7);
        this.scheduleOnce(() => {
            this.blast3.node.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.earthQuakeSound);
        }, 1);

        cc.tween(this.node)
        .to(1, {scale: Constants.scaleBoss, x: -40, y: -30})
        .call(() => {
            Constants.isWin = true;
            Constants.isPauseGame = true;
        })
        .start();
    }
}
