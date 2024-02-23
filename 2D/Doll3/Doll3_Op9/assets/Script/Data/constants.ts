
const { ccclass, property } = cc._decorator;

enum Event {
    touchStart = "touchstart",
    touchMove = "touchmove",
    touchEnd = "touchend",
    touchCancel = "touchcancel"
}


const IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
}


const Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
}


enum SoundTrack {
    bgSound = "bgSound",
    xitNuocSound = "xitNuocSound",
    nhoMun1Sound = "nhoMun1Sound",
    nhoMun2Sound = "nhoMun2Sound",
    nhoMun3Sound = "nhoMun3Sound",
    completeSound = "completeSound",
    conClearSound = "conClearSound",
    moveItemSound = "moveItemSound",
    showerSound = "showerSound",
    woaAnimeSound = "woaAnimeSound"
}


export class Constants {

    // state    
    static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);

    static isRotate: boolean = false;
    static isTouchCleanHair: boolean = false;
    static isDoneCleanHair: boolean = false;
    static isTouch: boolean = false;
    static isDoneStep1: boolean = false;
    static isTouchMaggot: boolean = false;
    static isCanTouch: boolean = false;

    static step: number = 1;

    static cleanHair_PointsStatus: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false];
    static cleanHair_Points: cc.Node[] = [];
    static spine_Bubbles: sp.Skeleton[] = [];

    static trackEntry: sp.spine.TrackEntry = null;


    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
