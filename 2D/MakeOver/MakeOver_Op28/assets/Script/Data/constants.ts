
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
    woaAnimeSound = "woaAnimeSound",
    girlScreamSound = "girlScreamSound",
    dirtySound = "dirtySound",
    wormBgSound = "wormBgSound",
    cleanSound = "cleanSound"
}


export class Constants {

    // state    
    static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);

    static isRotate: boolean = false;
    static toStore: boolean = true;
    static isDoneCleanser: boolean = false;
    static isTouch: boolean = false;
    static isCanTouch: boolean = true;
    static optionDoneLength: number = 0;

    // Flow 1
    static isFlow1_Opt1: boolean = false;
    static isFlow1_Opt2: boolean = false;

    // Flow2
    static isFlow2_Opt1: boolean = false;
    static isFlow2_Opt2: boolean = false;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
