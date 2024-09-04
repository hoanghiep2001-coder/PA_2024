
import { _decorator, Component, Graphics, Node } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { SoundController } from './SoundController';
import { CONST } from '../Const/CONST';
import { GameController } from './GameController';
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

    @property(GameController)
    GameController: GameController = null;

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

    @property(Node)
    Tutorial: Node = null;

    @property(Node)
    CTA: Node = null;

    MergePoints: Node[] = [];


    protected start(): void {
        this.registerEvent();

        this.TouchArea.children.forEach(child => {
            if(child.name.includes("MergePoint")) {
                this.MergePoints.push(child);
                GameInfo.UI_MergePoint = this.MergePoints;
            };
        });
    }


    public registerEvent(): void {
        let hideMask = this.CTA.getChildByName("HideMask");
        let btn = this.CTA.getChildByName("btn");

        // applovin & mtg
        hideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }

    protected update(dt: number): void {
        if((GameInfo.isWin || GameInfo.isLose) && !GameInfo.IsShowPopupInstall) {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.winSound);
            GameInfo.IsShowPopupInstall = true;
            this.CTA.active = true;
        }
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
