import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import Army from "./Army";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Supporter extends cc.Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    collide: cc.PhysicsCollider = null;
    spine: sp.Skeleton = null;
    enemyCollider: cc.PhysicsCollider = null;

    isActive: boolean = false;
    isDoneAttackAnim: boolean = true;


    protected start(): void {
        this.spine = this.getComponent(sp.Skeleton);
    }


    onCollisionEnter(o: cc.PhysicsCollider, s) {
        if (!this.isActive || !this.isDoneAttackAnim) return;

        
        if (o.tag === 2) {
            !(this.spine.animation === "Attack") && Constants.isStartGame && this.Attack(o);
            this.enemyCollider = o;
        }
    }


    onCollisionStay(o: cc.PhysicsCollider, s) {
        if (!this.isActive || !this.isDoneAttackAnim) return;
        if (o.tag === 2) {
            !(this.spine.animation === "Attack") && Constants.isStartGame && this.Attack(o);
            this.enemyCollider = o;
        }
    }


    onCollisionExit(o, s) {
        if (!this.isActive) return;
        this.spine.setAnimation(0, Constants.SupporterAnim.Idle, true);
    }


    private Attack(o: cc.PhysicsCollider): void {
        this.isDoneAttackAnim = false;

        this.spine.setAnimation(0, Constants.SupporterAnim.Attack, true);
        this.spine.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
            this.isDoneAttackAnim = true;
            
            if (trackEntry.animation.name === "Attack") {

                this.node.name === "Spine_Cauda" && this.AudioManager.playSound(Constants.SoundTrack.earthQuakeSound);

                if(this.node.name === "spine_Phao") {
                    let spine = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                    spine.node.active = true;
                    this.node.getChildByName("Blast").getComponent(sp.Skeleton).setAnimation(0, "2", false);
                }

                if (o) {
                    o.getComponent(Army).checkDie();
                    this.node.name === "spine_Phao" && this.AudioManager.playSound(Constants.SoundTrack.BoomSound);
                    this.node.name === "Spine_Laze" && this.AudioManager.playSound(Constants.SoundTrack.lazerSound);
                }
            }
        })
    }
}
