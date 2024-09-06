
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
    calculatedScale: 0,
}


enum SoundTrack {
    bgSound = "bgSound",
    woaAnimeSound = "woaAnimeSound",
    openBookSound = "openBookSound",
    showItemSound = "showItemSound",
    pickItemSound = "pickItemSound",
    waoGameSound = "waoGameSound",
    swtichItemSound = "swtichItemSound",
    Fx_Bonus1 = "Fx_Bonus1",
    Fx_Bonus2 = "Fx_Bonus2",
    Fx_Bonus3 = "Fx_Bonus3",
    Fx_Bonus4 = "Fx_Bonus4",
    Fx_Lose = "Fx_Lose"
}


export class Constants {

    // state    
    static isStartCalculate: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = true;
    static countClick: number = 0;
    static currentListItem: number = 0;
    static isDoneStep1: boolean = false;
    static isDoneStep2: boolean = false;
    static isDoneStep3: boolean = false;
    static currentStep: number = 0;
    static maxClickToStore: number = 3;
    static isTakePhoto: boolean = false;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
