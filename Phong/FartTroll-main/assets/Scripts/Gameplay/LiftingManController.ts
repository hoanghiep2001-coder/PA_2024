
import { _decorator, Animation, Component, log, Node, SkeletalAnimation } from 'cc';
import Singleton from '../Utility/Singleton';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LiftingManController
 * DateTime = Thu Apr 11 2024 16:47:25 GMT+0700 (Indochina Time)
 * Author = PhongDNRocket123
 * FileBasename = LiftingManController.ts
 * FileBasenameNoExtension = LiftingManController
 * URL = db://assets/Scripts/Gameplay/LiftingManController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('LiftingManController')
export class LiftingManController extends Singleton<LiftingManController> {


    constructor() {
        super();
        LiftingManController._instance = this;
    }
    @property({ type: SkeletalAnimation })
    anim: SkeletalAnimation = null!;

    @property(String)
    animPushString: string = "";

    @property(String)
    animWaitString: string = "";

    @property(String)
    animWinString: string = "";

    @property(String)
    animHoldInAirString: string = "";

    @property(String)
    animStartWinString: string = "";

    @property(String)
    animLoseString: string = "";


    setAnimation(animString: string, timeDelay: number, speedAnim: number) {
        setTimeout(() => {
            this.anim.play(animString);
        }, timeDelay);
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

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
