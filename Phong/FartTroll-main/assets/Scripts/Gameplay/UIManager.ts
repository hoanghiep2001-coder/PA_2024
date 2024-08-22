
import { _decorator, Component, Node } from 'cc';
import Singleton from '../Utility/Singleton';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIManager
 * DateTime = Fri Apr 12 2024 13:40:07 GMT+0700 (Indochina Time)
 * Author = PhongDNRocket123
 * FileBasename = UIManager.ts
 * FileBasenameNoExtension = UIManager
 * URL = db://assets/Scripts/Gameplay/UIManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('UIManager')
export class UIManager extends Singleton<UIManager> {

    @property(Node)
    guideHand: Node = null!;

    @property(Node)
    text: Node = null!;

    @property(Node)
    gymText: Node = null!;

    @property(Node)
    winText: Node = null!;

    @property(Node)
    confenti: Node = null!;

    constructor() {
        super();
        UIManager._instance = this;
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
