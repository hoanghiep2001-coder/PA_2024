
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
    eraserSound = "eraserSound",
    successSound = "successSound",
    moveSound = "moveSound",
    fireworksSound = "fireworksSound",
    clickSound = "clickSound",
    SheepSound1 = "SheepSound1",
    SheepSound2 = "SheepSound2",
    LoseSound = "LoseSound",
    femaleLaughSound = "femaleLaughSound",
    fightSound = "fightSound"
}


export class Constants {

    // state    
    static isClickGameStart: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = true;
    static isDoneEraser: boolean = false;
    
    static currentLv: number = null;

    static touchPoint: cc.Vec2 = null;


    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
