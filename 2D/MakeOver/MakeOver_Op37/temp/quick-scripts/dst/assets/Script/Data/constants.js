
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
    SoundTrack["FaceWashSound"] = "FaceWashSound";
    SoundTrack["IntroDelightSound"] = "IntroDelightSound";
    SoundTrack["hmmSound"] = "hmmSound";
    SoundTrack["whooseSound"] = "whooseSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["DoneStepSound"] = "DoneStepSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["gapRuoiSound"] = "gapRuoiSound";
    SoundTrack["screamHoooSound"] = "screamHoooSound";
    SoundTrack["nhoMun2Sound"] = "nhoMun2Sound";
    SoundTrack["nhoMun1Sound"] = "nhoMun1Sound";
    SoundTrack["bopMunSound"] = "bopMunSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    // static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.isToStore = false;
    Constants.isDoneStep1 = false;
    Constants.collideEarAcneNumber = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFpQko7QUFqQkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIseUNBQTJCLENBQUE7SUFDM0IscUNBQXVCLENBQUE7SUFDdkIsdUNBQXlCLENBQUE7SUFDekIsNkNBQStCLENBQUE7SUFDL0IscURBQXVDLENBQUE7SUFDdkMsbUNBQXFCLENBQUE7SUFDckIseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsbUNBQXFCLENBQUE7SUFDckIsMkNBQTZCLENBQUE7SUFDN0IsaURBQW1DLENBQUE7SUFDbkMsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IseUNBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQWpCSSxVQUFVLEtBQVYsVUFBVSxRQWlCZDtBQUdEO0lBQUE7SUErQkEsQ0FBQztJQTdCRyxZQUFZO0lBQ1osdURBQXVEO0lBRWhELGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBSTdCLDhCQUFvQixHQUFXLENBQUMsQ0FBQztJQUV4QyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0EvQkQsQUErQkMsSUFBQTtBQS9CWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgc3BpZGVyU291bmQgPSBcInNwaWRlclNvdW5kXCIsXHJcbiAgICB3YWxrU291bmQgPSBcIndhbGtTb3VuZFwiLFxyXG4gICAgc2NhcmVTb3VuZCA9IFwic2NhcmVTb3VuZFwiLFxyXG4gICAgRmFjZVdhc2hTb3VuZCA9IFwiRmFjZVdhc2hTb3VuZFwiLFxyXG4gICAgSW50cm9EZWxpZ2h0U291bmQgPSBcIkludHJvRGVsaWdodFNvdW5kXCIsXHJcbiAgICBobW1Tb3VuZCA9IFwiaG1tU291bmRcIixcclxuICAgIHdob29zZVNvdW5kID0gXCJ3aG9vc2VTb3VuZFwiLFxyXG4gICAgbW92ZUl0ZW1Tb3VuZCA9IFwibW92ZUl0ZW1Tb3VuZFwiLFxyXG4gICAgRG9uZVN0ZXBTb3VuZCA9IFwiRG9uZVN0ZXBTb3VuZFwiLFxyXG4gICAgY3J5U291bmQgPSBcImNyeVNvdW5kXCIsXHJcbiAgICBnYXBSdW9pU291bmQgPSBcImdhcFJ1b2lTb3VuZFwiLFxyXG4gICAgc2NyZWFtSG9vb1NvdW5kID0gXCJzY3JlYW1Ib29vU291bmRcIixcclxuICAgIG5ob011bjJTb3VuZCA9IFwibmhvTXVuMlNvdW5kXCIsXHJcbiAgICBuaG9NdW4xU291bmQgPSBcIm5ob011bjFTb3VuZFwiLFxyXG4gICAgYm9wTXVuU291bmQgPSBcImJvcE11blNvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgLy8gc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG5cclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGlzRG9uZVN0ZXAxOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgY29sbGlkZUVhckFjbmVOdW1iZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==