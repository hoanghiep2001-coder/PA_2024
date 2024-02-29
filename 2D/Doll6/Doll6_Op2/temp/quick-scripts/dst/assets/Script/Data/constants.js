
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["woaSound"] = "woaSound";
    SoundTrack["woaSound2"] = "woaSound2";
    SoundTrack["SwapSound"] = "SwapSound";
    SoundTrack["GemSound"] = "GemSound";
    SoundTrack["rainbowSound"] = "rainbowSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.countScore = 0;
    Constants.isClickFirstTime = false;
    Constants.Board = null;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQVFKO0FBUkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsdUNBQXlCLENBQUE7SUFDekIsbUNBQXFCLENBQUE7SUFDckIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsbUNBQXFCLENBQUE7SUFDckIsMkNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQVJJLFVBQVUsS0FBVixVQUFVLFFBUWQ7QUFHRDtJQUFBO0lBd0JBLENBQUM7SUF0QkcsWUFBWTtJQUNMLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBQzNCLG9CQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLDBCQUFnQixHQUFZLEtBQUssQ0FBQztJQUNsQyxlQUFLLEdBQVksSUFBSSxDQUFDO0lBRTdCLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQXhCRCxBQXdCQyxJQUFBO0FBeEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBjbGlja1NvdW5kID0gXCJjbGlja1NvdW5kXCIsXHJcbiAgICB3b2FTb3VuZCA9IFwid29hU291bmRcIixcclxuICAgIHdvYVNvdW5kMiA9IFwid29hU291bmQyXCIsXHJcbiAgICBTd2FwU291bmQgPSBcIlN3YXBTb3VuZFwiLFxyXG4gICAgR2VtU291bmQgPSBcIkdlbVNvdW5kXCIsXHJcbiAgICByYWluYm93U291bmQgPSBcInJhaW5ib3dTb3VuZFwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBjb3VudFNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGlzQ2xpY2tGaXJzdFRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBCb2FyZDogYW55W11bXSA9IG51bGw7XHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==