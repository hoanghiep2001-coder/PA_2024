
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
    openDoorSound = "openDoorSound",
    knockDoorSound = "knockDoorSound",
    screamSound = "screamSound",
    woaAnimeSound = "woaAnimeSound",
    crySound = "crySound",
    clickSound = "clickSound"
}


export class Constants {

    // state    

    static isRotate: boolean = false;
    static isCanClick: boolean = false;
    static isChooseRevenge: boolean = false;
    static isChooseDress: boolean = false;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
