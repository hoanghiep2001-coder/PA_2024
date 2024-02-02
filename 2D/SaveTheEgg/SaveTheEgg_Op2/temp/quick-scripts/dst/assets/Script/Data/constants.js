
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
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.currentPosition = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFFRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBQzdCLHFDQUF1QixDQUFBO0lBQ3ZCLCtDQUFpQyxDQUFBO0FBQ3JDLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBR0Q7SUFBQTtJQXdCQSxDQUFDO0lBdEJHLFlBQVk7SUFDTCwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIseUJBQWUsR0FBWSxJQUFJLENBQUM7SUFHdkMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBQ3RELGdCQUFDO0NBeEJELEFBd0JDLElBQUE7QUF4QlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgZHJhd1NvdW5kID0gXCJkcmF3U291bmRcIixcclxuICAgIHN1Y2Nlc3NTb3VuZCA9IFwic3VjY2Vzc1NvdW5kXCIsXHJcbiAgICBtb3ZlU291bmQgPSBcIm1vdmVTb3VuZFwiLFxyXG4gICAgZmlyZXdvcmtzU291bmQgPSBcImZpcmV3b3Jrc1NvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgc3RhdGljIGlzQ2xpY2tHYW1lU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG59XHJcblxyXG4iXX0=