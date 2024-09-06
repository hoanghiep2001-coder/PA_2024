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
    Run = "Run",
    Idle = "Idle"
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
    clickSound = "clickSound",
    buySound = "buySound",
    coinSound = "coinSound",
    failSound = "failSound",
    winSound = "winSound",
    Lv2_Kinife = "Lv2_Kinife",
    Lv2_Gun = "Lv2_Gun",
    Lv2_Tank = "Lv2_Tank",
    Bg_Attack = "Bg_Attack"
}


export class Constants {

    // state    
    static isRotate: boolean = false;
    static isTouch: boolean = false;
    static isCanTouch: boolean = false;
    static isToStore: boolean = true;
    static isStartGame: boolean = false;
    static isHasResult: boolean = false;
    static isGainCoin: boolean = false;
    static isPauseGame: boolean = false;
    static isWin: boolean = false;
    static isLoose: boolean = false;
    static isCollideBase: boolean = false;
    static isActiveCTA: boolean = false;
    static isSpawnTank: boolean = false;
    static isFirstShoot: boolean = false;

    static isCanBuyArmyLv2: boolean = false;
    static isCanBuyArmyLv3: boolean = false;
    static isUpgrade: boolean = false;

    static currentCoin: number = 0;
    static increaseCoin: number = 10;
    static enemyDie: number = 0;
    static food: number = 15;
    static EnemyBaseHeal: number = 1;
    static AllyBaseHeal: number = 1;
    static scaleBoss: number = 0.5;
    static scaleArmy: number = 0;
    static shootCount: number = 0;

    static comboCount: number = 0;
    static troopsSpawnLeftCount: number = 4;
    static troopsInTankCount: number = 0;
    static isFiveBroInTank: boolean = false;
    static isTankCanRun: boolean = false;

    static enemyArmies: cc.Node[] = [];
    static allyArmies: cc.Node[] = [];
    static tank_TroopPoints: cc.Node[] = [];


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
