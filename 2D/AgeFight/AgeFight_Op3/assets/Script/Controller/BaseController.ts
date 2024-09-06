import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import GamePlay from "./GamePlay";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseController extends cc.Component {
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;
    @property(cc.Node)
    baseLose: cc.Node = null;
    @property(cc.Node)
    HealthBar: cc.Node = null;
    @property(cc.String)
    baseSide: String = "";  

    baseLv2: cc.Node = null;

    rigidbody: cc.RigidBody = null;
    collider: cc.PhysicsBoxCollider = null;

    isUpgrade: boolean = false;


    protected start(): void {
        if(this.baseSide === "Player") {
            this.baseLv2 = this.node.getChildByName("base").getChildByName("baseLv2");
        }
    }


    protected update(dt: number): void {
        if(this.baseSide === "Player" && !Constants.isHasResult) {
            if(this.HealthBar.scaleX < 0.05) {
                Constants.isHasResult = true;
                Constants.isPauseGame = true;
                Constants.isLoose = true;
                this.HealthBar.active = false;
                this.baseLose.active = true;
                this.AudioManager.playSound(Constants.SoundTrack.earthQuakeSound);
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = Constants.AllyBaseHeal;
        }

        if(this.baseSide === "Enemy" && !Constants.isHasResult) {
            if(this.HealthBar.scaleX < 0.05) {
                Constants.isHasResult = true;
                Constants.isPauseGame = true;
                this.baseLose.active = true;
                this.HealthBar.active = false;
                this.AudioManager.playSound(Constants.SoundTrack.earthQuakeSound);
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = Constants.EnemyBaseHeal;
        }

        // upgradeBase
        if(this.baseSide === "Player" && Constants.isUpgrade && !this.isUpgrade) {
            this.isUpgrade = true;
            this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
            this.baseLv2.active = true;
        }
    }

}
