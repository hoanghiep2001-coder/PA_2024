
import { _decorator, Collider, Component, ERigidBodyType, ICollisionEvent, log, Node, RigidBody, SkeletalAnimation, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { RoboAnim } from './RoboAnim';
import { RoboBehavior } from './RoboBehavior';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RoboCollision
 * DateTime = Fri Aug 30 2024 10:09:25 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = RoboCollision.ts
 * FileBasenameNoExtension = RoboCollision
 * URL = db://assets/Scripts/Robo/RoboCollision.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('RoboCollision')
export class RoboCollision extends Component {

    @property(RigidBody)
    rigidBody: RigidBody = null;

    @property(Collider)
    collider: Collider = null;

    speed: number = 7;

    isCollideBoss: boolean = false;

    currentAnim: string = null;

    protected start(): void {
        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            // enemy robo
            if (this.node.name === "Boss") {
                this.changeAnim(RoboAnim.Atk);

                this.scheduleOnce(() => {
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
                    this.getComponent(RoboBehavior).PS_Fires[0].play();
                }, 0.5);

                this.scheduleOnce(() => {
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
                    this.getComponent(RoboBehavior).PS_Fires[1].play();
                }, 1.5);

                this.scheduleOnce(() => {
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);

                    this.getComponent(RoboBehavior).PS_Fires[2].play();
                    this.changeAnim(RoboAnim.Die);
                    
                    GameInfo.isWin = true;
                }, 2.5);
            }

            // player Robo
            if (e.otherCollider.node.name === "Boss") {
                log("Collide Boss")
                this.isCollideBoss = true;
                this.rigidBody.type = ERigidBodyType.STATIC;
                this.changeAnim(RoboAnim.Atk);

                this.scheduleOnce(() => {
                    this.changeAnim(RoboAnim.Idle);
                }, 1.1)
            }
        });
    }


    private moveRigidbodyToTarget(): void {
        if (this.node.name === "Boss") return;

        this.changeAnim(RoboAnim.Walk);

        const currentWorldPosition = this.node.worldPosition;
        // Tính toán hướng từ vị trí hiện tại đến vị trí mục tiêu
        const direction = new Vec3();
        Vec3.subtract(direction, GameInfo.bossPos, currentWorldPosition);

        // Chuẩn hóa vectơ hướng
        direction.normalize();

        // Tính toán vận tốc dựa trên hướng và tốc độ mong muốn
        let velocity = new Vec3();
        Vec3.multiplyScalar(velocity, direction, this.speed);

        // Đặt vận tốc cho Rigidbody
        this.rigidBody.setLinearVelocity(velocity);
    }


    private changeAnim(animName: string): void {
        if (this.currentAnim === animName) return;
        this.currentAnim = animName;
        this.node.getChildByName("Robo_Base").getComponent(SkeletalAnimation).play(animName);
    }


    protected update(dt: number): void {
        GameInfo.isReadyToFight && !this.isCollideBoss && this.moveRigidbodyToTarget();
    }
}

