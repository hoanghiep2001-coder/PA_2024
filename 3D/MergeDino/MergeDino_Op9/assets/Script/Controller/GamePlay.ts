import { _decorator, Animation, AudioSource, Camera, view, Vec2, Component, EventTouch, Graphics, log, math, Node, PhysicsSystem, quat, RigidBody, SkeletalAnimation, Skeleton, Vec3, UITransform, ParticleSystem, PrivateNode } from 'cc';
import { CharacterControl } from './CharacterControl';
import { RangerControl } from './RangerControl';
import { GameController } from './GameController';
import { TouchAreaController } from './TouchAreaController';
import { AudioManager } from '../Plugin/AudioManager';
const { ccclass, property } = _decorator;
@ccclass('GamePlay')
export class GamePlay extends Component {
    // Camera
    @property(Camera)
    Camera: Camera = null;

    // 3D
    @property([Node])
    Dino_Lines: Node[] = [];



    protected onLoad(): void {
        this.initGame();
    }


    public initGame(): void {
        this.Dino_Lines.forEach(line => line.active = false);
    }


    protected start(): void {
        this.handleGamePlay();
        this.registerEvent();
    }


    private handleGamePlay(): void {

    }


    private registerEvent(): void {
   
    }
}
