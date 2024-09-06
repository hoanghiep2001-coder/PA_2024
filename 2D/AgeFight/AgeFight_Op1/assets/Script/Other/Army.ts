
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Army extends cc.Component {
    @property(cc.Node)
    HealthBar: cc.Node = null;

    AudioManager: AudioManager = null;
    spine: sp.Skeleton = null;
    collider: cc.BoxCollider = null;

    skin: string = "";
    canRun: boolean = true;
    isBase: boolean = false;
    isLive: boolean = true;
    
    pauseFlag: boolean = false;
    // enemyCollider: cc.BoxCollider = null;


    protected start(): void {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
        .getChildByName("AudioManager").getComponent(AudioManager);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    }


    onCollisionEnter(o: cc.BoxCollider, s) {
        if(o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.skin === Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
        }
    }


    onCollisionStay(o: cc.BoxCollider, s) {
        if(o.tag === 1 || o.tag === 0) {
            this.canRun = false;
        }
    }


    onCollisionExit(o, s) {
        this.canRun = true;
        this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
    }


    private setCollisionForAlly(o: cc.BoxCollider): void {
        // hit enemy base || enemy army
        if (o.tag === 0 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, Constants.ArmyAnim.Attack, true);
            if(this.node.name === "Army_Lv2") this.AudioManager.playSound(Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim();
        }

        // hit enemy base
        if (o.tag === 0) {
            Constants.isCollideBase = true;
            this.isBase = true;
            this.checkDie();
        }
    }


    private setCollisionForEnemy(o: cc.BoxCollider): void {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, Constants.ArmyAnim.Attack, true);
            if(this.node.name === "Army_Lv2") this.AudioManager.playSound(Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim();
        }

        // hit ally base
        if (o.tag === 1) {
            this.isBase = true;
        }
    }


    private checkDoneAttackAnim(): void {
        this.spine.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
            if (trackEntry.animation.name === "Attack") {
                this.isBase
                ? this.handleDecreaseHealthBase()
                : this.handleDecreaseHealthArmy();
            }
        })
    }


    private handleDecreaseHealthBase(): void {
        if(this.skin === "ally" && this.node.name === "Army_Lv3") {
            Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }

        this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        if(this.skin === "ally" && this.node.name === "Army_Lv2") {
            Constants.EnemyBaseHeal -= 0.08;
            return;
        }

        if (this.skin === "ally") {
            Constants.EnemyBaseHeal -= 0.05;
        }

        if (this.skin === "enemy") {
            Constants.AllyBaseHeal -= 0.05;
        }
    }


    private handleDecreaseHealthArmy(): void {
        // this.enemyCollider.node.getComponent(Army).HealthBar.scaleX -= 0.3;

        if(this.skin === "ally" && this.node.name === "Army_Lv3") {
            Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 1;
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }

        this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        if(this.skin === "ally" && this.node.name === "Army_Lv2") {
            Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.4;
            return;
        }

        if (this.skin === "ally") {
            Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.3;
        }

        if (this.skin === "enemy") {
            Constants.allyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.3;
        }
    }


    private die(): void {
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.spine.setAnimation(0, Constants.ArmyAnim.Die, false);
        this.node.getComponent(Army).enabled = false;

        // decrease the first ally/enemy in constant array;
        if(this.skin === "enemy") {
            Constants.enemyDie += 1;
            Constants.enemyArmies.splice(0, 1);
        } else {
            Constants.allyArmies.splice(0, 1);
        }
    }


    private checkDie(): void {
        this.isLive = false;
        this.HealthBar.active = false;

        cc.tween(this.node)
        .to(1, {opacity: 0})
        .call(() => this.node.destroy())
        .start();
        
        this.die();
    }


    private checkRun(): void {
        if (this.skin === "ally" && this.canRun && this.isLive) {
            if(this.node.name === "Army_Lv3") {
                let currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 1, currentPos.y, 0);
                return;
            }

            if(this.node.name === "Army" || this.node.name === "Army_Lv2" ) {
                let currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.5, currentPos.y, 0);
            }
        }


        if (this.skin === "enemy" && this.canRun && this.isLive) {
            let currentPos = this.node.getPosition();
            this.node.position = new cc.Vec3(currentPos.x - 0.5, currentPos.y, 0);
        }
    }


    private checkPause(): void {
        if(Constants.isPauseGame) {
            this.canRun = false;
        }

        if(Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.collider.enabled = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
            return;
        }

        if(!Constants.isPauseGame) {
            // this.collider.enabled = true;
            this.pauseFlag = false;
        }
    }


    protected update(dt: number): void {
        this.checkPause();
        if(this.HealthBar.scaleX <= 0 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    }
}
