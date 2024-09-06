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
    speed: number = 25;

    canRun: boolean = true;
    isBase: boolean = false;
    isLive: boolean = true;
    isAttacking: boolean = false;
    isReadyToFight: boolean = false;

    pauseFlag: boolean = false;
    rigidbody: cc.RigidBody = null;

    private collisionCount: number = 0;


    protected start(): void {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    }


    onCollisionEnter(o: cc.PhysicsCollider, s) {
        if ((o.tag === 1 || o.tag === 0 || o.tag === 2) && s.tag !== 9) {
            this.collisionCount++;
            this.skin === Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
            return;
        }

        if (o.tag === 9) {
            this.isReadyToFight = true;
        }

        if (this.collisionCount < 0) this.collisionCount = 0;
    }


    onCollisionStay(o: cc.PhysicsCollider, s) {
        if ((o.tag === 1 || o.tag === 0) && s.tag !== 9) {
            this.canRun = false;
        }
    }


    onCollisionExit(o, s) {
        if (o.tag === 9) {
            this.isReadyToFight = false;
        }

        if (!this.isLive) return;

        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.collisionCount--;
            if (this.collisionCount === 0) {
                this.canRun = true;
                this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
            }
        }

        if (this.collisionCount < 0) this.collisionCount = 0;
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
            // Constants.isCollideBase = true;
            this.isBase = true;
            // this.checkDie();
        }
    }


    private setCollisionForEnemy(o: cc.PhysicsCollider): void {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
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
                this.isBase
                    ? this.handleDecreaseHealthBase()
                    : this.handleDecreaseHealthArmy();
            }
        })
    }


    private handleDecreaseHealthBase(): void {
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }

        if(this.node.name === "Army2_Lv3") {
            this.AudioManager.playSound(Constants.SoundTrack.Lv2_Tank);
            let spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);            
            spineAttackOfTank.node.active = true;
            spineAttackOfTank.setAnimation(0, "2", false);
            Constants.EnemyBaseHeal -= 0.2;
            return;
        }

        if(this.node.name === "Army2_Lv2") {
            Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(Constants.SoundTrack.Lv2_Gun);
            return;
        }

        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
            Constants.EnemyBaseHeal -= 0.08;
            return;
        }

        if (this.skin === "ally") {
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
            Constants.EnemyBaseHeal -= 0.05;
        }

        if (this.skin === "enemy") {
            Constants.AllyBaseHeal -= 0.05;
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        }
    }


    private handleDecreaseHealthArmy(): void {
        if (this.skin === "ally") {
            if(this.node.name === "Army_Lv3") {
                Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
                return;
            }

            if(this.node.name === "Army2_Lv3") {
                this.AudioManager.playSound(Constants.SoundTrack.Lv2_Tank);
                let spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);            
                spineAttackOfTank.node.active = true;
                spineAttackOfTank.setAnimation(0, "2", false);
                Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 1;
                return;
            }

            if(this.node.name === "Army2_Lv2") {
                Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(Constants.SoundTrack.Lv2_Gun);
                return;
            }

            if(this.node.name === "Army_Lv2") {
                Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.2;
                this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
                return;
            }

            if(this.node.name === "Army2_Lv1") {
                Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.3;
                this.AudioManager.playSound(Constants.SoundTrack.Lv2_Kinife);
                return;
            }

            Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.2;
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
            return;
        }


        else {
            this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
            Constants.allyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.2;
        }
    }


    private die(): void {
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(Army).enabled = false;

        // decrease the first ally/enemy in constant array;
        if (this.skin === "enemy") {
            Constants.enemyDie += 1;
            Constants.enemyArmies.splice(0, 1);
        } else {
            Constants.allyArmies.splice(0, 1);
        }
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


    private checkRun(): void {
        if (!this.isLive) return;

        let firstEnemyPos: cc.Vec2 = null;
        let targetPos: cc.Vec2 = null;

        if (this.skin === "ally" && this.canRun) {
            let currentPos = this.node.getPosition();

            this.isReadyToFight 
            ? firstEnemyPos = this.roadToEnemyPos(currentPos, "ally")
            : firstEnemyPos = currentPos;
            
            if (this.node.name === "Army_Lv3" || this.node.name === "Army2_Lv3") {
                targetPos = new cc.Vec2(currentPos.x + 25 + Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos))
                return;
            }

            if (this.node.name === "Army" || this.node.name === "Army2_Lv2" 
                || this.node.name === "Army2_Lv1" || this.node.name === "Army_Lv2" 
            ) {
                targetPos = new cc.Vec2(currentPos.x + 10 + Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos))
            }
        }


        if (this.skin === "enemy" && this.canRun) {
            let currentPos = this.node.getPosition();

            this.isReadyToFight 
            ? firstEnemyPos = this.roadToEnemyPos(currentPos, "enemy")
            : firstEnemyPos = currentPos;            

            targetPos = new cc.Vec2(currentPos.x - 10 - Constants.Responsive.speedCalculated, firstEnemyPos.y);
            this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos))

        }
    }


    private roadToEnemyPos(currentPos: cc.Vec2, yourSide: string): cc.Vec2 {
        if (yourSide === "ally") {
            if (Constants.enemyArmies[0]) {
                return Constants.enemyArmies[0].getPosition();
            } else {
                return currentPos;
            }
        } else {
            if (Constants.allyArmies[0]) {
                return Constants.allyArmies[0].getPosition();
            } else {                
                return currentPos;
            }
        }
    }


    private checkPause(): void {
        if (Constants.isPauseGame) {
            this.canRun = false;
        }

        if (Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.collider.enabled = false;
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
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    }
}
