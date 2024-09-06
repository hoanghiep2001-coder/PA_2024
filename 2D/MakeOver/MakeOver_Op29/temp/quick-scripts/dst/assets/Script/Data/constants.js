
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
    SoundTrack["xitNuocSound"] = "xitNuocSound";
    SoundTrack["nhoMun1Sound"] = "nhoMun1Sound";
    SoundTrack["nhoMun2Sound"] = "nhoMun2Sound";
    SoundTrack["nhoMun3Sound"] = "nhoMun3Sound";
    SoundTrack["completeSound"] = "completeSound";
    SoundTrack["conClearSound"] = "conClearSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["showerSound"] = "showerSound";
    SoundTrack["woaAnimeSound"] = "woaAnimeSound";
    SoundTrack["girlScreamSound"] = "girlScreamSound";
    SoundTrack["dirtySound"] = "dirtySound";
    SoundTrack["wormBgSound"] = "wormBgSound";
    SoundTrack["cleanSound"] = "cleanSound";
    SoundTrack["laughSound"] = "laughSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isDoneCleanser = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.isToStore = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQWdCSjtBQWhCRCxXQUFLLFVBQVU7SUFDWCxpQ0FBbUIsQ0FBQTtJQUNuQiwyQ0FBNkIsQ0FBQTtJQUM3QiwyQ0FBNkIsQ0FBQTtJQUM3QiwyQ0FBNkIsQ0FBQTtJQUM3QiwyQ0FBNkIsQ0FBQTtJQUM3Qiw2Q0FBK0IsQ0FBQTtJQUMvQiw2Q0FBK0IsQ0FBQTtJQUMvQiw2Q0FBK0IsQ0FBQTtJQUMvQix5Q0FBMkIsQ0FBQTtJQUMzQiw2Q0FBK0IsQ0FBQTtJQUMvQixpREFBbUMsQ0FBQTtJQUNuQyx1Q0FBeUIsQ0FBQTtJQUN6Qix5Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBeUIsQ0FBQTtJQUN6Qix1Q0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBaEJJLFVBQVUsS0FBVixVQUFVLFFBZ0JkO0FBR0Q7SUFBQTtJQTRCQSxDQUFDO0lBMUJHLFlBQVk7SUFDTCx5QkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0Msa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsd0JBQWMsR0FBWSxLQUFLLENBQUM7SUFDaEMsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsbUJBQVMsR0FBWSxJQUFJLENBQUM7SUFFMUIsdUJBQWEsR0FBVyxDQUFDLENBQUM7SUFFakMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBNUJELEFBNEJDLElBQUE7QUE1QlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWRZOiAwLFxyXG4gICAgY2FsY3VsYXRlZFg6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIHhpdE51b2NTb3VuZCA9IFwieGl0TnVvY1NvdW5kXCIsXHJcbiAgICBuaG9NdW4xU291bmQgPSBcIm5ob011bjFTb3VuZFwiLFxyXG4gICAgbmhvTXVuMlNvdW5kID0gXCJuaG9NdW4yU291bmRcIixcclxuICAgIG5ob011bjNTb3VuZCA9IFwibmhvTXVuM1NvdW5kXCIsXHJcbiAgICBjb21wbGV0ZVNvdW5kID0gXCJjb21wbGV0ZVNvdW5kXCIsXHJcbiAgICBjb25DbGVhclNvdW5kID0gXCJjb25DbGVhclNvdW5kXCIsXHJcbiAgICBtb3ZlSXRlbVNvdW5kID0gXCJtb3ZlSXRlbVNvdW5kXCIsXHJcbiAgICBzaG93ZXJTb3VuZCA9IFwic2hvd2VyU291bmRcIixcclxuICAgIHdvYUFuaW1lU291bmQgPSBcIndvYUFuaW1lU291bmRcIixcclxuICAgIGdpcmxTY3JlYW1Tb3VuZCA9IFwiZ2lybFNjcmVhbVNvdW5kXCIsXHJcbiAgICBkaXJ0eVNvdW5kID0gXCJkaXJ0eVNvdW5kXCIsXHJcbiAgICB3b3JtQmdTb3VuZCA9IFwid29ybUJnU291bmRcIixcclxuICAgIGNsZWFuU291bmQgPSBcImNsZWFuU291bmRcIixcclxuICAgIGxhdWdoU291bmQgPSBcImxhdWdoU291bmRcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG5cclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzRG9uZUNsZWFuc2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvU3RvcmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHN0YXRpYyBtYWdnb3RSZW1vdmVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=