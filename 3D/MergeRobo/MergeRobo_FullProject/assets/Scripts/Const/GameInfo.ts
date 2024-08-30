import { Node, Vec2, Vec3 } from "cc";

export class GameInfo {

    // Main State
    static IsPlaying : boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = true;
    
    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;


    // Merge step
    static touchPos: Vec3 = null;

    static mergeCount: number = 0;

    static playerStartGameRobo: Node[] = [];
    static UI_MergePoint: Node[] = [];
    static playerRoboLevelArr: Node[] = [];

    static lastPosOfTouchEnd: Vec3 = null;
    static lastPointOfTouchEndRobo: Node = null;
    

    // Fight step
    static isReadyToFight: boolean = false;
    static bossPos: Vec3 = null;

}