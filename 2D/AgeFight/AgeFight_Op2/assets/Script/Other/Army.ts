
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
    rigidbody: cc.RigidBody = null;

    skin: string = "";
    canRun: boolean = true;
    isBase: boolean = false;
    isLive: boolean = true;
    isActive: boolean = false;

    pauseFlag: boolean = false;

    enemyCollider: cc.PhysicsCollider = null;
    isDoneAnim: boolean = true;


    protected start(): void {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    }


    onCollisionEnter(o: cc.PhysicsCollider, s) {
        if(!Constants.isStartGame) return;

        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.isDoneAnim = false;
            this.skin === Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
            this.enemyCollider = o;
        }
    }


    onCollisionStay(o: cc.BoxCollider, s) {
        if(!Constants.isStartGame) return;

        if (o.tag === 1 || o.tag === 0) {
            this.canRun = false;
        }
    }


    onCollisionExit(o, s) {
        if(!Constants.isStartGame) return;

        this.canRun = true;
        this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
    }


    public activeRunAnim(): void {
        this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
    }


    private setCollisionForAlly(o: cc.PhysicsCollider): void {
        // hit enemy base || enemy army
        if (o.tag === 0 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, Constants.ArmyAnim.Attack, true);
            if (this.node.name === "Army_Lv2") this.AudioManager.playSound(Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim();
        }

        // hit enemy base
        if (o.tag === 0) {
            this.isBase = true;
        }
    }


    private setCollisionForEnemy(o: cc.PhysicsCollider): void {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            if (this.node.name === "Enemy_Lv2") this.AudioManager.playSound(Constants.SoundTrack.K98Sound);
            if (this.node.name === "Enemy_Lv3") this.AudioManager.playSound(Constants.SoundTrack.EnemyTankSound);
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, Constants.ArmyAnim.Attack, true);
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
                this.isDoneAnim = true;
                this.isBase
                    ? this.handleDecreaseHealthBase()
                    : this.handleDecreaseHealthArmy();
            }
        })
    }


    private handleDecreaseHealthBase(): void {
        if (this.skin === "ally" && (this.node.name === "Army_Lv3" || this.node.name === "Tank")) {
            let spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);            
            spineAttackOfTank.node.active = true;
            spineAttackOfTank.setAnimation(0, "2", false);
            Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }

        this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
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
        if(Constants.isHasResult) return;

        if (this.skin === "ally" && (this.node.name === "Army_Lv3" || this.node.name === "Tank")) {
            if(Constants.enemyArmies[0]) {
                let spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);            
                spineAttackOfTank.node.active = true;
                spineAttackOfTank.setAnimation(0, "2", false);
                Constants.enemyDie += 1;
                Constants.enemyArmies[0].destroy();
                Constants.enemyArmies.splice(0, 1);
            }
      
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }

        !this.AudioManager.ArmyLv1HitSound.isPlaying && this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            this.enemyCollider.node.getComponent(Army).HealthBar.scaleX -= 0.5;
            return;
        }

        if (this.skin === "ally") {
            this.enemyCollider.node.getComponent(Army).HealthBar.scaleX -= 0.4;
        }

        if (this.skin === "enemy") {
            this.enemyCollider.node.getComponent(Army).HealthBar.scaleX -= 0.2;
        }

    }


    private die(): void {
        if(this.node.getComponent(cc.Collider)) this.node.getComponent(cc.Collider).destroy();
        this.spine.setAnimation(0, Constants.ArmyAnim.Die, false);

        // decrease the first ally/enemy in constant array;
        if (this.skin === "enemy") {
            Constants.enemyDie += 1;
            Constants.enemyArmies.splice(0, 1);
        } else {
            Constants.allyArmies.splice(0, 1);
        }
    }


    public checkDie(): void {
        this.isLive = false;
        this.HealthBar.active = false;
        this.die();
        cc.tween(this.node)
            .to(1.2, { opacity: 0 })
            .call(() => this.node.destroy())
            .start();
    }


    private checkRun(): void {
        if (!Constants.isStartGame) return

        // if(!(this.spine.animation === "Run")) this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);

        if (this.skin === "ally" && this.canRun && this.isLive) {
            if (this.node.name === "Army_Lv3" || this.node.name === "Tank") {
                let currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.7, currentPos.y, 0);
                return;
            }

            if (this.node.name === "Army"
                || this.node.name === "Army_Lv2"
                || this.node.name === "Gun"
                || this.node.name === "Kinfe"
            ) {
                let currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.7, currentPos.y, 0);
            }
        }


        if (this.skin === "enemy" && this.canRun && this.isLive) {
            let currentPos = this.node.getPosition();
            this.node.position = new cc.Vec3(currentPos.x - 0.7, currentPos.y, 0);
        }
    }


    private checkPause(): void {
        if (Constants.isPauseGame) {
            this.canRun = false;
        }

        if (Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
            return;
        }

        if (!Constants.isPauseGame) {
            this.pauseFlag = false;
        }
    }


    protected update(dt: number): void {
        this.checkPause();
        if (this.HealthBar.scaleX <= 0 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    }
}
