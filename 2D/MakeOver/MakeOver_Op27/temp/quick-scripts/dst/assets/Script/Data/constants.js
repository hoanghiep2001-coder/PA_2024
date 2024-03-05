
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQWVKO0FBZkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsaURBQW1DLENBQUE7SUFDbkMsdUNBQXlCLENBQUE7SUFDekIseUNBQTJCLENBQUE7SUFDM0IsdUNBQXlCLENBQUE7QUFDN0IsQ0FBQyxFQWZJLFVBQVUsS0FBVixVQUFVLFFBZWQ7QUFHRDtJQUFBO0lBMkJBLENBQUM7SUF6QkcsWUFBWTtJQUNMLHlCQUFlLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQix3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUNoQyxpQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixvQkFBVSxHQUFZLEtBQUssQ0FBQztJQUM1Qix1QkFBYSxHQUFXLENBQUMsQ0FBQztJQUdqQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0EzQkQsQUEyQkMsSUFBQTtBQTNCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgeGl0TnVvY1NvdW5kID0gXCJ4aXROdW9jU291bmRcIixcclxuICAgIG5ob011bjFTb3VuZCA9IFwibmhvTXVuMVNvdW5kXCIsXHJcbiAgICBuaG9NdW4yU291bmQgPSBcIm5ob011bjJTb3VuZFwiLFxyXG4gICAgbmhvTXVuM1NvdW5kID0gXCJuaG9NdW4zU291bmRcIixcclxuICAgIGNvbXBsZXRlU291bmQgPSBcImNvbXBsZXRlU291bmRcIixcclxuICAgIGNvbkNsZWFyU291bmQgPSBcImNvbkNsZWFyU291bmRcIixcclxuICAgIG1vdmVJdGVtU291bmQgPSBcIm1vdmVJdGVtU291bmRcIixcclxuICAgIHNob3dlclNvdW5kID0gXCJzaG93ZXJTb3VuZFwiLFxyXG4gICAgd29hQW5pbWVTb3VuZCA9IFwid29hQW5pbWVTb3VuZFwiLFxyXG4gICAgZ2lybFNjcmVhbVNvdW5kID0gXCJnaXJsU2NyZWFtU291bmRcIixcclxuICAgIGRpcnR5U291bmQgPSBcImRpcnR5U291bmRcIixcclxuICAgIHdvcm1CZ1NvdW5kID0gXCJ3b3JtQmdTb3VuZFwiLFxyXG4gICAgY2xlYW5Tb3VuZCA9IFwiY2xlYW5Tb3VuZFwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBjdXJyZW50UG9zaXRpb246IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuXHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RvbmVDbGVhbnNlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgbWFnZ290UmVtb3ZlZDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==