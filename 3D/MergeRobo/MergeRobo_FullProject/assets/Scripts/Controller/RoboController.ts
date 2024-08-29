import { _decorator, Component, instantiate, log, Node, Prefab } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { CONST } from '../Const/CONST';
import Singleton from '../Utils/Singleton';
import { UIGameController } from './UIGameController';
import { RoboLevel } from '../Robo/RoboLevel';
import { RoboBehavior } from '../Robo/RoboBehavior';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = RoboController
 * DateTime = Tue Aug 27 2024 14:05:17 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = RoboController.ts
 * FileBasenameNoExtension = RoboController
 * URL = db://assets/Scripts/Controller/RoboController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */


@ccclass('RoboController')
export class RoboController extends Singleton<RoboController> {

    constructor() {
        super();
        RoboController._instance = this;
    }


    @property(UIGameController)
    UIGameController: UIGameController = null;


    @property(Prefab)
    Robo_Level1_Prefab: Prefab = null;
    @property(Prefab)
    Robo_Level2_Prefab: Prefab = null;
    @property(Prefab)
    Robo_Level3_Prefab: Prefab = null;
    @property(Prefab)
    UI_Robo_LevelPrefab: Prefab = null;

    @property(Node)
    Enemy_Robo: Node = null;
    @property(Node)
    Player_Robo: Node = null;


    Robo_Pos: Node[] = [];


    protected start(): void {
        this.Robo_Pos = this.Player_Robo.children;
        this.spawnRoboLevel_1();

        this.spawnRoboLevel_3();
    }


    private spawnRoboLevel_1(): void {
        for (let index = 0; index < this.Robo_Pos.length; ++index) {
            const roboLv1 = instantiate(this.Robo_Level1_Prefab),
                node = this.Robo_Pos[index];

            // create Robo
            roboLv1.parent = node;
            roboLv1.name = String(roboLv1.name + `_${index}`);
            GameInfo.playerStartGameRobo.push(roboLv1);

            // setup level robo
            const UI_level = instantiate(this.UI_Robo_LevelPrefab);
            UI_level.parent = this.UIGameController.Canvas;
            UI_level.name = String(roboLv1.name);

            const roboLevelComponent = UI_level.getComponent(RoboLevel);
            roboLevelComponent.showLevel(3, roboLv1);
            GameInfo.playerRoboLevelArr.push(UI_level);
        }
    }


    private spawnRoboLevel_3(): void {
        const roboLv3 = instantiate(this.Robo_Level3_Prefab);

        // create Robo
        let parent = this.Enemy_Robo;
        roboLv3.parent = parent;
        roboLv3.name = String("Boss");

        // setup Level for robo
        const UI_level = instantiate(this.UI_Robo_LevelPrefab);
        UI_level.parent = this.UIGameController.Canvas;
        UI_level.name = String("Boss");

        const roboLevelComponent = UI_level.getComponent(RoboLevel);
        let level = 15;

        roboLevelComponent.showLevel(level, roboLv3);
    }


    public spawnRoboLevel_2(): void {
        const roboLv2 = instantiate(this.Robo_Level2_Prefab);

        // create Robo
        let parent = this.Robo_Pos.find(pos => pos.name === GameInfo.lastPointOfTouchEndRobo.name);
        roboLv2.parent = parent;

        // setup Level for robo
        const UI_level = instantiate(this.UI_Robo_LevelPrefab);
        UI_level.parent = this.UIGameController.Canvas;

        const roboLevelComponent = UI_level.getComponent(RoboLevel);
        let level = GameInfo.playerStartGameRobo.filter(robo => {
            if (robo.getComponent(RoboBehavior).isPickup) return robo;
        }).length * 3;

        roboLevelComponent.showLevel(level, roboLv2);

    }
}

