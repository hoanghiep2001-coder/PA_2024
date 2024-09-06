"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["spiderSound"] = "spiderSound";
    SoundTrack["walkSound"] = "walkSound";
    SoundTrack["scareSound"] = "scareSound";
    SoundTrack["IntroDelightSound"] = "IntroDelightSound";
    SoundTrack["hmmSound"] = "hmmSound";
    SoundTrack["whooseSound"] = "whooseSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["drySound"] = "drySound";
    SoundTrack["shampooSound"] = "shampooSound";
    SoundTrack["toothPaste1Sound"] = "toothPaste1Sound";
    SoundTrack["toothPaste2Sound"] = "toothPaste2Sound";
    SoundTrack["DoneStepSound"] = "DoneStepSound";
    SoundTrack["ShakeBrush"] = "ShakeBrush";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isDoneDryer = false;
    Constants.isDoneWaterBrush = false;
    Constants.isTouch = false;
    Constants.isCanTouch = true;
    Constants.isToStore = false;
    Constants.isTouchToothPaste = false;
    Constants.isDoneToothPaste = false;
    Constants.toothPaste_PointsStatus = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    Constants.water_PointsStatus = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    Constants.toothPaste_Points = [];
    Constants.Water_Points = [];
    Constants.spine_Bubbles = [];
    Constants.spine_WaterBubbles = [];
    Constants.maggotRemoved = 0;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

cc._RF.pop();