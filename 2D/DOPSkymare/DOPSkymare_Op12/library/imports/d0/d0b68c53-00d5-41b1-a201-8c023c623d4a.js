"use strict";
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
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
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["successSound"] = "successSound";
    SoundTrack["moveSound"] = "moveSound";
    SoundTrack["fireworksSound"] = "fireworksSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentLv = 1;
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.isDoneLevel1 = false;
    Constants.isDoneLevel2 = false;
    Constants.isDrawSuccess = false;
    Constants.drawSoundState = null;
    Constants.step = 1;
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