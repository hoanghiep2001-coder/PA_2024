
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
    clickSound = "clickSound",
    woaSound = "woaSound",
    woaSound2 = "woaSound2",
    SwapSound = "SwapSound",
    GemSound = "GemSound",
    rainbowSound = "rainbowSound",
}


export class Constants {

    // state    
    static isRotate: boolean = false;
    static isCanTouch: boolean = true;
    static countScore: number = 0;
    static isClickFirstTime: boolean = false;
    static Board: any[][] = null;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
