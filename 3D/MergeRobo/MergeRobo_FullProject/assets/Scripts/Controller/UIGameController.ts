
import { _decorator, Component, Graphics, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIGameController
 * DateTime = Mon Aug 26 2024 14:14:13 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = UIGameController.ts
 * FileBasenameNoExtension = UIGameController
 * URL = db://assets/Scripts/Controller/UIGameController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('UIGameController')
export class UIGameController extends Component {

    @property(Node)
    Point: Node = null;
    
    @property(Graphics)
    Graphics: Graphics = null;

    @property(Node)
    Canvas: Node = null;

    @property(Node)
    TouchArea: Node = null;

    @property(Node)
    RoboLevels: Node = null;

    MergePoints: Node[] = [];


    protected start(): void {
        this.TouchArea.children.forEach(child => {
            if(child.name.includes("MergePoint")) this.MergePoints.push(child);
        });
    }
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
