
import { _decorator, BoxCollider, Component, ERigidBodyType, ICollisionEvent, math, Node, RigidBody, SkeletalAnimation, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterControl')
export class CharacterControl extends Component {

    @property(Node)
    level: Node = null;


    isRun: boolean = false;
    isFight: boolean = false;
    rigidbody: RigidBody;
    collider: BoxCollider;


    protected onLoad(): void {
        this.level.active = false;
        this.node.active = false;
    }


    protected start(): void {
        this.getComponent(SkeletalAnimation).play("Idle_2");
        this.node.setScale(new Vec3(0,0,0));

        this.rigidbody = this.node.getComponent(RigidBody);
        this.collider = this.node.getComponent(BoxCollider)

        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            if (e.otherCollider.node.name === "Robot_melee02_base") {
                this.isRun = false;
                this.isFight = true;
            }
        });
    }

    private Run(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(2, 0, -10))
    }

    protected update(dt: number): void {
        if (this.isRun) this.Run()
    }
}

