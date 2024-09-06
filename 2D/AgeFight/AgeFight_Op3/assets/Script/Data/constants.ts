
const { ccclass, property } = cc._decorator;

enum Event {
    touchStart = "touchstart",
    touchMove = "touchmove",
    touchEnd = "touchend",
    touchCancel = "touchcancel"
}


enum ArmySkin {
    Ally = "ally",
    Enemy = "enemy"
}


enum ArmyAnim {
    Attack = "Attack",
    Die = "Die",
    Hurt = "Hurt",
    Run = "Run"
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
    isHor: false,
    isVer: false,
    speedCalculated: 0,
}


enum SoundTrack {
    bgSound = "bgSound",
    ArmyLv1HitSound = "ArmyLv1HitSound",
    ArmyLv2HitSound = "ArmyLv2HitSound",
    ArmyLv3HitSound = "ArmyLv3HitSound",
    clickSound = "clickSound",
    buySound = "buySound",
    coinSound = "coinSound",
    failSound = "failSound",
    winSound = "winSound",
    earthQuakeSound = "earthQuakeSound",
    heliSound = "heliSound",
    UpgradeSound = "UpgradeSound",

    Lv2_Kinife = "Lv2_Kinife",
    Lv2_Gun = "Lv2_Gun",
    Lv2_Tank = "Lv2_Tank",
}


export class Constants {

    // state    
    static isRotate: boolean = false;
    static isTouch: boolean = false;
    static isCanTouch: boolean = false;
    static isToStore: boolean = false;
    static isStartGame: boolean = false;
    static isHasResult: boolean = false;
    static isGainCoin: boolean = false;
    static isPauseGame: boolean = false;
    static isWin: boolean = false;
    static isLoose: boolean = false;
    static isCollideBase: boolean = false;

    static isCanBuyArmyLv2: boolean = false;
    static isCanBuyArmyLv3: boolean = false;
    static isUpgrade: boolean = false;

    static currentCoin: number = 0;
    static increaseCoin: number = 10;
    static enemyDie: number = 0;
    static food: number = 3;
    static EnemyBaseHeal: number = 1;
    static AllyBaseHeal: number = 1;
    static scaleBoss: number = 0.5;
    static scaleArmy: number = 0;

    static enemyArmies: cc.Node[] = [];
    static allyArmies: cc.Node[] = [];


    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;


    // Army Side
    static ArmySkin: typeof ArmySkin = ArmySkin;


    // Army Anim
    static ArmyAnim: typeof ArmyAnim = ArmyAnim;

}
