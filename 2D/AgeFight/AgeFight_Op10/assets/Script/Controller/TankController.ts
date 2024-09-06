import { Constants } from "../Data/constants";
import Army from "../Other/Army";
import AudioManager from "../Plugin/AudioManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TankController extends cc.Component {

    @property(cc.Node)
    HealthBar: cc.Node = null;

    @property(cc.Prefab)
    vFx_Booom: cc.Prefab = null;

    @property(cc.ParticleSystem)
    FX_Upgrade: cc.ParticleSystem = null;

    @property(cc.ParticleSystem)
    FX_Blink: cc.ParticleSystem = null;

    @property([cc.Node])
    TroopsPoints: cc.Node[] = [];
 
    AudioManager: AudioManager = null;
    spine: sp.Skeleton = null; 
    collider: cc.BoxCollider = null;

    skin: string = "";
    speed: number = 25;

    isRunning: boolean = false;
    isBase: boolean = false;
    isLive: boolean = true;

    rigidbody: cc.RigidBody = null;


    onCollisionEnter(o: cc.PhysicsCollider, s: cc.Collider) {
        // enemy collide with tank
        if (o) {
            if(o.tag === 0) {
                Constants.isTankCanRun = false;
                this.shoot();
            }

            let armyComponent = o.getComponent(Army);
            if (armyComponent && Constants.isTankCanRun && s.tag === 18) {
                Constants.shootCount += 1;

                Constants.isTankCanRun = false;

                this.spine.setAnimation(0, Constants.ArmyAnim.Attack, false);

                    // fx blast
                    this.scheduleOnce(() => {
                        this.node.getChildByName("Blast").getComponent(cc.Animation).play("Tank_BlastAnim");

                        this.AudioManager.playSound(Constants.SoundTrack.Lv2_Tank);

                        this.shootEnemy(armyComponent);

                        for (let index = 0; index < Constants.enemyArmies.length; index++) {
                            const element = Constants.enemyArmies[index];
                            const army = element.getComponent(Army);

                            army.isLive = false;
                            army.spine.setAnimation(0, Constants.ArmyAnim.Die, false);

                            cc.tween(element)
                            .to(0.5, {opacity: 0})
                            .call(() => {
                                element.active = false;
                                element.destroy();
                            })
                            .start();
                        }

                        Constants.enemyArmies = [];
                    }, 0.3);

            }
        }
    }


    // onCollisionStay(o: cc.PhysicsCollider, s) {
    //     Constants.isTankCanRun = false
    // }


    // onCollisionExit(o, s) {
    //     Constants.isTankCanRun = true;
    // }


    private shootEnemy(armyComponent: Army): void {
        cc.log("shoot!!!");
        
        let tankPos = this.node.getPosition();

        let vFx_Booom = cc.instantiate(this.vFx_Booom);

        vFx_Booom.parent = this.node;

        vFx_Booom.setPosition(tankPos.x + 50, tankPos.y + 105);

        vFx_Booom.active = true;

        this.scheduleOnce(() => {
            vFx_Booom.active = false;
            Constants.isTankCanRun = true;
        }, 1.5)
    }


    protected start(): void {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);

        this.collider.enabled = false;

        // active run to Base
        this.scheduleOnce(() => {
            this.runAheadBase();
            this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
        }, 0.2);

        Constants.tank_TroopPoints = this.TroopsPoints;
    }


    private shoot(): void {
        this.spine.setAnimation(0, Constants.ArmyAnim.Attack, false);

        // fx blast
        this.scheduleOnce(() => {
            this.node.getChildByName("Blast").getComponent(cc.Animation).play("Tank_BlastAnim");
            this.AudioManager.playSound(Constants.SoundTrack.Lv2_Tank)
            const customEvent = new cc.Event.EventCustom('Shooting', true);
            this.node.dispatchEvent(customEvent);
        }, 0.3);
    }


    die(): void {
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;

        Constants.isLoose = true;

        Constants.isPauseGame = true;

        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(() => this.node.destroy())
            .start();

        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
    }


    private runAheadBase(): void {
        let currentPos = this.node.getPosition();
        this.node.x = currentPos.x + 100;
        Constants.isCanTouch = true;


        // cc.tween(this.node)
        //     .to(3, { x: currentPos.x + 100 })
        //     .call(() => {
        //         Constants.isCanTouch = true;
        //         this.spine.setAnimation(0, Constants.ArmyAnim.Idle, true);
        //     })
        //     .start();
    }


    private activeAnimRun(): void {
        if(this.isRunning) return;

        this.spine.node.active = true;

        this.HealthBar.parent.active = true;

        this.collider.enabled = true;

        this.updateTankPremeium();

        this.registerEvent();

        this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
    }


    private updateTankPremeium(): void {
        let currentScale = this.node.scale;

        this.FX_Upgrade.resetSystem();

        this.FX_Blink.resetSystem();

        // this.spine.node.color = cc.color(255, 204, 0 ,255);

        cc.tween(this.node)
        .to(0.5, {scale: currentScale + 0.15}, {easing: cc.easing.elasticOut})
        .start();
    }


    private registerEvent(): void {
        const customEvent = new cc.Event.EventCustom('ShowSpeedLine', true);
        this.node.dispatchEvent(customEvent);
    }


    private run(): void {
        this.activeAnimRun();
        this.isRunning = true;
        let currentPos = this.node.getPosition();
        let targetPos = new cc.Vec2(currentPos.x + 25 + Constants.Responsive.speedCalculated, currentPos.y);
        this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos))
    }


    protected update(dt: number): void {
        if (this.HealthBar.scaleX <= 0.05 && this.isLive) this.die();

        Constants.isTankCanRun && this.run();
    }
}
