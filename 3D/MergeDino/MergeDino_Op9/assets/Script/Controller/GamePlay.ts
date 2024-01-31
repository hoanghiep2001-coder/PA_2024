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


    // state
    isMergeStep1Flag: boolean = false;
    isMergeStep2Flag: boolean = false;
    isFailStep1Flag: boolean = false;


    protected onLoad(): void {
       
    }


    public initGame(): void {
    
    }


    protected start(): void {

    }


    private handleMergeStep1(): void {
        Constants.isCanTouch = false;
        this.isMergeStep1Flag = true;

        this.NodesController.Camera.getComponent(Animation).play();
        this.NodesController.dinoLevels.forEach(level => level.active = false);
        this.scheduleOnce(() => {
            this.NodesController.FX_Merge.play();
        }, 1);

        this.scheduleOnce(() => {
            this.NodesController.unitsStep1.forEach(unit => Utils.GamePlay.mergeDinoStep1(unit));
            this.NodesController.MainCharacter_1.active = true;
            tween(this.NodesController.MainCharacter_1)
            .to(0.5, {scale: new Vec3(0.004, 0.004, 0.004)})
            .start();
        }, 2);
        
        this.scheduleOnce(() => {
            this.NodesController.MainCharacter_1.getComponent(CharacterControl).level.active = true;
        }, 2.5);

        this.scheduleOnce(() => {
            this.NodesController.dinoLevels.forEach(level => level.active = true);
            this.NodesController.Text_Tap.active = true;
            Constants.isCanTouch = true;
        }, 4)
    }

    private handleMergeStep2(): void {
        Constants.isCanTouch = false;
        this.isMergeStep2Flag = true;

        this.NodesController.Camera.getComponent(Animation).play();
        this.NodesController.dinoLevels.forEach(level => level.active = false);
        this.scheduleOnce(() => {
            this.NodesController.FX_Merge_2.play();
        }, 1);

        this.scheduleOnce(() => {
            this.NodesController.unitstep2.forEach(unit => Utils.GamePlay.mergeDinoStep2(unit));
            this.NodesController.MainCharacter_2.active = true;
            tween(this.NodesController.MainCharacter_2)
            .to(0.5, {scale: new Vec3(0.004, 0.004, 0.004)})
            .start();
        }, 2);
        
        this.scheduleOnce(() => {
            this.NodesController.MainCharacter_2.getComponent(CharacterControl).level.active = true;
            this.NodesController.MainCharacter_1.getComponent(CharacterControl).level.active = true;
        }, 2.5);

        this.scheduleOnce(() => {
            this.NodesController.dinoLevels.forEach(level => level.active = true);
            this.NodesController.Text_Tap.active = true;
            Constants.isStartStep2 = true;
            Constants.isCanTouch = true;
        }, 4)
    }


    private setupStep2(): void {
        this.isFailStep1Flag = true;
        this.NodesController.Fail.active = true;
        
        this.NodesController.dinoLines.forEach(line => line.active = false);

        this.scheduleOnce(() => {
            this.NodesController.unitsStep1.forEach((unit, index) => {
                unit.setPosition(Constants.unitsStep1InitPos[index]);
                unit.setScale(new Vec3(8,8,8));
                unit.active = true;
            });
            this.NodesController.dinosStep1.forEach((dino, index) => {
                dino.getComponent(SkeletalAnimation).play("Idle_1");
                dino.setPosition(Constants.dinosStep1InitPos[index]);
                dino.setScale(new Vec3(0.08, 0.08, 0.08));
                dino.active = true;
            });


            this.NodesController.unitstep2.forEach((unit, index) => {
                unit.setPosition(Constants.unitsStep2InitPos[index]);
                unit.setScale(new Vec3(8,8,8));
                unit.active = true;
            });
            this.NodesController.dinosStep2.forEach((dino, index) => {
                dino.getComponent(SkeletalAnimation).play("Idle_1");
                dino.setPosition(Constants.dinosStep2InitPos[index]);
                dino.setScale(new Vec3(0.08, 0.08, 0.08));
                dino.active = true;
            });

            this.NodesController.MainCharacter_1.active = false;
            this.NodesController.MainCharacter_1.getComponent(CharacterControl).level.active = false;
        }, 2)

        this.scheduleOnce(() => {
            this.NodesController.hint_2.active = true;
        }, 2.5)
        // this.NodesController.dinosStep1.forEach((dino, index) => {
        //     dino.setPosition(Constants.dinosStep1InitPos[index]);
        //     dino.active = true;
        //     dino.setScale(new Vec3(0.08, 0.08, 0.08));
        // });
        // this.NodesController.dinosStep2.forEach((dino, index) => dino.setPosition(Constants.dinosStep2InitPos[index]));

    }


    protected update(dt: number): void {
        Constants.isDoneMergeStep1 && !this.isMergeStep1Flag && this.handleMergeStep1();
        Constants.isDoneMergeStep2 && !this.isMergeStep2Flag && this.handleMergeStep2();
        Constants.isFailStep1 && !this.isFailStep1Flag && this.setupStep2();
    }
}
