"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var ArmySkin;
(function (ArmySkin) {
    ArmySkin["Ally"] = "ally";
    ArmySkin["Enemy"] = "enemy";
})(ArmySkin || (ArmySkin = {}));
var ArmyAnim;
(function (ArmyAnim) {
    ArmyAnim["Attack"] = "Attack";
    ArmyAnim["Die"] = "Die";
    ArmyAnim["Hurt"] = "Hurt";
    ArmyAnim["Run"] = "Run";
    ArmyAnim["Idle"] = "Idle";
})(ArmyAnim || (ArmyAnim = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
    isHor: false,
    isVer: false,
    speedCalculated: 0,
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["buySound"] = "buySound";
    SoundTrack["coinSound"] = "coinSound";
    SoundTrack["failSound"] = "failSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["Lv2_Kinife"] = "Lv2_Kinife";
    SoundTrack["Lv2_Gun"] = "Lv2_Gun";
    SoundTrack["Lv2_Tank"] = "Lv2_Tank";
    SoundTrack["Bg_Attack"] = "Bg_Attack";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.isToStore = true;
    Constants.isStartGame = false;
    Constants.isHasResult = false;
    Constants.isGainCoin = false;
    Constants.isPauseGame = false;
    Constants.isWin = false;
    Constants.isLoose = false;
    Constants.isCollideBase = false;
    Constants.isActiveCTA = false;
    Constants.isSpawnTank = false;
    Constants.isFirstShoot = false;
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
    Constants.isUpgrade = false;
    Constants.currentCoin = 0;
    Constants.increaseCoin = 10;
    Constants.enemyDie = 0;
    Constants.food = 15;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.scaleBoss = 0.5;
    Constants.scaleArmy = 0;
    Constants.shootCount = 0;
    Constants.comboCount = 0;
    Constants.troopsSpawnLeftCount = 4;
    Constants.troopsInTankCount = 0;
    Constants.isFiveBroInTank = false;
    Constants.isTankCanRun = false;
    Constants.enemyArmies = [];
    Constants.allyArmies = [];
    Constants.tank_TroopPoints = [];
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    // Army Side
    Constants.ArmySkin = ArmySkin;
    // Army Anim
    Constants.ArmyAnim = ArmyAnim;
    return Constants;
}());
exports.Constants = Constants;

cc._RF.pop();