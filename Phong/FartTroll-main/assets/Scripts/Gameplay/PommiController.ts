import { _decorator, Animation, Component, Node, SkeletalAnimation, tween, Vec3 } from 'cc';
import Singleton from '../Utility/Singleton';

const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PommiController
 * DateTime = Thu Apr 11 2024 16:47:16 GMT+0700 (Indochina Time)
 * Author = PhongDNRocket123
 * FileBasename = PommiController.ts
 * FileBasenameNoExtension = PommiController
 * URL = db://assets/Scripts/Gameplay/PommiController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PommiController')
export class PommiController extends Singleton<PommiController> {

    constructor() {
        super();
        PommiController._instance = this;
    }
    @property(Node)
    nodeToMove: Node = null!;

    @property({ type: SkeletalAnimation })
    anim: SkeletalAnimation = null!;

    @property(String)
    animIdleString: string = "";

    @property(String)
    animStartFartString: string = "";

    @property(String)
    animEndFartString: string = "";

    @property(String)
    animFartLoopString: string = "";

    @property(String)
    animWin1String: string = "";

    @property(String)
    animWin2String: string = "";


    setAnimation(animString: string, timeDelay: number, speedAnim: number) {
        setTimeout(() => {
            this.anim.play(animString);
        }, timeDelay);
    }


    rotate(yRotate: number, duration:number =0.5) {
        let tweenDuration: number = duration;
        tween(this.nodeToMove)
            .to(tweenDuration, { eulerAngles: new Vec3(0, yRotate, 0) })
            .start()
    }
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

