import { Node, Vec2, Vec3 } from "cc";

export class GameInfo {


    static IsPlaying : boolean = false;
    static GamePause: boolean = false;


    static isTouching: boolean = false;
    static isCanTouch: boolean = true;
    

    static touchPos: Vec3 = null;


    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;


    static lastPosOfTouchEnd: Vec3 = null;
    static lastPointOfTouchEndRobo: Node = null;

    
    static playerStartGameRobo: Node[] = [];
    static playerRoboLevelArr: Node[] = [];

}