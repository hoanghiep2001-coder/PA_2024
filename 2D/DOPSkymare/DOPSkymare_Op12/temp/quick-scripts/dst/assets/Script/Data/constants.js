
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBQzdCLHFDQUF1QixDQUFBO0lBQ3ZCLCtDQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBR0Q7SUFBQTtJQThCQSxDQUFDO0lBNUJHLFlBQVk7SUFDTCxtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUN0QiwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsc0JBQVksR0FBWSxLQUFLLENBQUM7SUFDOUIsc0JBQVksR0FBWSxLQUFLLENBQUM7SUFDOUIsdUJBQWEsR0FBWSxLQUFLLENBQUM7SUFDL0Isd0JBQWMsR0FBVyxJQUFJLENBQUM7SUFFOUIsY0FBSSxHQUFXLENBQUMsQ0FBQztJQUd4QixRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0E5QkQsQUE4QkMsSUFBQTtBQTlCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgZHJhd1NvdW5kID0gXCJkcmF3U291bmRcIixcclxuICAgIHN1Y2Nlc3NTb3VuZCA9IFwic3VjY2Vzc1NvdW5kXCIsXHJcbiAgICBtb3ZlU291bmQgPSBcIm1vdmVTb3VuZFwiLFxyXG4gICAgZmlyZXdvcmtzU291bmQgPSBcImZpcmV3b3Jrc1NvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgc3RhdGljIGN1cnJlbnRMdjogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBpc0NsaWNrR2FtZVN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lTGV2ZWwxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lTGV2ZWwyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEcmF3U3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGRyYXdTb3VuZFN0YXRlOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBzdGVwOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19