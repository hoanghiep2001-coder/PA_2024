const { ccclass, property } = cc._decorator;


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
    spiderSound = "spiderSound",
    walkSound = "walkSound",
    scareSound = "scareSound",
    IntroDelightSound = "IntroDelightSound",
    hmmSound = "hmmSound",
    whooseSound = "whooseSound",
    moveItemSound = "moveItemSound",
    drySound = "drySound",
    shampooSound = "shampooSound",
    toothPaste1Sound = "toothPaste1Sound",
    toothPaste2Sound = "toothPaste2Sound",
    DoneStepSound = "DoneStepSound",
    ShakeBrush = "ShakeBrush"
}


export class Constants {

    // state    
    static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);

    static isRotate: boolean = false;
    static isDoneDryer: boolean = false;
    static isDoneWaterBrush: boolean = false;
    static isTouch: boolean = false;
    static isCanTouch: boolean = true;
    static isToStore: boolean = false;
    static isTouchToothPaste: boolean = false;
    static isDoneToothPaste: boolean = false;

    static toothPaste_PointsStatus: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    static water_PointsStatus: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    static toothPaste_Points: cc.Node[] = [];
    static Water_Points: cc.Node[] = [];
    static spine_Bubbles: sp.Skeleton[] = [];
    static spine_WaterBubbles: sp.Skeleton[] = [];

    static maggotRemoved: number = 0;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
