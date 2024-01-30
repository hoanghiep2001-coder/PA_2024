import { _decorator, Animation, AudioSource, Camera, view, Vec2, Component, EventTouch, Graphics, log, math, Node, PhysicsSystem, quat, RigidBody, SkeletalAnimation, Skeleton, Vec3, UITransform, ParticleSystem, PrivateNode, tween } from 'cc';
import { CharacterControl } from './CharacterControl';
import { RangerControl } from './RangerControl';
import { GameController } from './GameController';
import { TouchAreaController } from './TouchAreaController';
import { AudioManager } from '../Plugin/AudioManager';
import { Constants } from '../Data/Constant';
import { NodesController } from './NodesController';
import { Utils } from '../Plugin/Utils';
const { ccclass, property } = _decorator;
@ccclass('GamePlay')
export class GamePlay extends Component {

    // Script
    @property(NodesController)
    NodesController: NodesController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;

    // Component

    
    // 3D


    // state
    isMergeStep1Flag: boolean = false;


    protected onLoad(): void {
       
    }


    public initGame(): void {
    
    }


    protected start(): void {
        this.handleGamePlay();
        this.registerEvent();
    }


    private handleGamePlay(): void {

    }


    private registerEvent(): void {
   
    }


    private handleMergeStep1(): void {
        this.isMergeStep1Flag = true;

        this.NodesController.Camera.getComponent(Animation).play();
        this.NodesController.dinoLevels.forEach(level => level.active = false);
        this.scheduleOnce(() => {
            this.NodesController.FX_Merge.play();
        }, 1);

        this.scheduleOnce(() => {
            this.NodesController.dinosStep1.forEach(dino => Utils.GamePlay.mergeDinoStep1(dino));
        }, 2);

        this.scheduleOnce(() => {
            this.NodesController.MainCharacter_1.active = true;
            this.NodesController.MainCharacter_1.getComponent(CharacterControl).level.active = true;
            tween(this.NodesController.MainCharacter_1)
            .to(0.5, {scale: new Vec3(0.004, 0.004, 0.004)})
            .start();
        }, 2.5);


        this.scheduleOnce(() => {
            this.NodesController.dinoLevels.forEach(level => level.active = true);
        }, 4)
    }


    protected update(dt: number): void {
        Constants.isDoneMergeStep1 && !this.isMergeStep1Flag && this.handleMergeStep1();
    }
}
