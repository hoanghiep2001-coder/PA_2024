
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
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isTouchCleanHair = false;
    Constants.isDoneCleanHair = false;
    Constants.isTouch = false;
    Constants.isDoneStep1 = false;
    Constants.isTouchMaggot = false;
    Constants.isCanTouch = false;
    Constants.step = 1;
    Constants.cleanHair_PointsStatus = [false, false, false, false, false, false, false, false, false, false, false, false, false];
    Constants.cleanHair_Points = [];
    Constants.spine_Bubbles = [];
    Constants.trackEntry = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQVdKO0FBWEQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7QUFDbkMsQ0FBQyxFQVhJLFVBQVUsS0FBVixVQUFVLFFBV2Q7QUFHRDtJQUFBO0lBcUNBLENBQUM7SUFuQ0csWUFBWTtJQUNMLHlCQUFlLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQiwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMseUJBQWUsR0FBWSxLQUFLLENBQUM7SUFDakMsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IsdUJBQWEsR0FBWSxLQUFLLENBQUM7SUFDL0Isb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIsY0FBSSxHQUFXLENBQUMsQ0FBQztJQUVqQixnQ0FBc0IsR0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hJLDBCQUFnQixHQUFjLEVBQUUsQ0FBQztJQUNqQyx1QkFBYSxHQUFrQixFQUFFLENBQUM7SUFFbEMsb0JBQVUsR0FBd0IsSUFBSSxDQUFDO0lBRzlDLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQXJDRCxBQXFDQyxJQUFBO0FBckNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICB4aXROdW9jU291bmQgPSBcInhpdE51b2NTb3VuZFwiLFxyXG4gICAgbmhvTXVuMVNvdW5kID0gXCJuaG9NdW4xU291bmRcIixcclxuICAgIG5ob011bjJTb3VuZCA9IFwibmhvTXVuMlNvdW5kXCIsXHJcbiAgICBuaG9NdW4zU291bmQgPSBcIm5ob011bjNTb3VuZFwiLFxyXG4gICAgY29tcGxldGVTb3VuZCA9IFwiY29tcGxldGVTb3VuZFwiLFxyXG4gICAgY29uQ2xlYXJTb3VuZCA9IFwiY29uQ2xlYXJTb3VuZFwiLFxyXG4gICAgbW92ZUl0ZW1Tb3VuZCA9IFwibW92ZUl0ZW1Tb3VuZFwiLFxyXG4gICAgc2hvd2VyU291bmQgPSBcInNob3dlclNvdW5kXCIsXHJcbiAgICB3b2FBbmltZVNvdW5kID0gXCJ3b2FBbmltZVNvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG5cclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hDbGVhbkhhaXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RvbmVDbGVhbkhhaXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lU3RlcDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoTWFnZ290OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBzdGVwOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHN0YXRpYyBjbGVhbkhhaXJfUG9pbnRzU3RhdHVzOiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICAgc3RhdGljIGNsZWFuSGFpcl9Qb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgc3RhdGljIHNwaW5lX0J1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgdHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=