
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
    calculated: 0,
    currentDevice: "",
}


enum SoundTrack {
    bgSound = "bgSound",
    drawSound = "drawSound",
    successSound = "successSound",
    moveSound = "moveSound",
    fireworksSound = "fireworksSound",
    clickSound = "clickSound",
    SheepSound1 = "SheepSound1",
    SheepSound2 = "SheepSound2",
    LoseSound = "LoseSound",
    femaleLaughSound = "femaleLaughSound"
}


export class Constants {

    // state    
    static currentLv: number = 1;
    static isClickGameStart: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = false;
    static isDoneEraser: boolean = false;
    static isRestart: boolean = false;
    
    static age: number = 54;
    static ageIncrease: number = 58;
    static life: number = 3;
    static step: number = 1;
    static touchPoints: cc.Vec2[] = [];


    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
