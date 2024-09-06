
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFlSjtBQWZELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHlDQUEyQixDQUFBO0lBQzNCLHFDQUF1QixDQUFBO0lBQ3ZCLHVDQUF5QixDQUFBO0lBQ3pCLHFEQUF1QyxDQUFBO0lBQ3ZDLG1DQUFxQixDQUFBO0lBQ3JCLHlDQUEyQixDQUFBO0lBQzNCLDZDQUErQixDQUFBO0lBQy9CLG1DQUFxQixDQUFBO0lBQ3JCLDJDQUE2QixDQUFBO0lBQzdCLG1EQUFxQyxDQUFBO0lBQ3JDLG1EQUFxQyxDQUFBO0lBQ3JDLDZDQUErQixDQUFBO0lBQy9CLHVDQUF5QixDQUFBO0FBQzdCLENBQUMsRUFmSSxVQUFVLEtBQVYsVUFBVSxRQWVkO0FBR0Q7SUFBQTtJQXNDQSxDQUFDO0lBcENHLFlBQVk7SUFDTCx5QkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0Msa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IsMEJBQWdCLEdBQVksS0FBSyxDQUFDO0lBQ2xDLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBQzNCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLDJCQUFpQixHQUFZLEtBQUssQ0FBQztJQUNuQywwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFFbEMsaUNBQXVCLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9JLDRCQUFrQixHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxSSwyQkFBaUIsR0FBYyxFQUFFLENBQUM7SUFDbEMsc0JBQVksR0FBYyxFQUFFLENBQUM7SUFDN0IsdUJBQWEsR0FBa0IsRUFBRSxDQUFDO0lBQ2xDLDRCQUFrQixHQUFrQixFQUFFLENBQUM7SUFFdkMsdUJBQWEsR0FBVyxDQUFDLENBQUM7SUFFakMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBdENELEFBc0NDLElBQUE7QUF0Q1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWRZOiAwLFxyXG4gICAgY2FsY3VsYXRlZFg6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIHNwaWRlclNvdW5kID0gXCJzcGlkZXJTb3VuZFwiLFxyXG4gICAgd2Fsa1NvdW5kID0gXCJ3YWxrU291bmRcIixcclxuICAgIHNjYXJlU291bmQgPSBcInNjYXJlU291bmRcIixcclxuICAgIEludHJvRGVsaWdodFNvdW5kID0gXCJJbnRyb0RlbGlnaHRTb3VuZFwiLFxyXG4gICAgaG1tU291bmQgPSBcImhtbVNvdW5kXCIsXHJcbiAgICB3aG9vc2VTb3VuZCA9IFwid2hvb3NlU291bmRcIixcclxuICAgIG1vdmVJdGVtU291bmQgPSBcIm1vdmVJdGVtU291bmRcIixcclxuICAgIGRyeVNvdW5kID0gXCJkcnlTb3VuZFwiLFxyXG4gICAgc2hhbXBvb1NvdW5kID0gXCJzaGFtcG9vU291bmRcIixcclxuICAgIHRvb3RoUGFzdGUxU291bmQgPSBcInRvb3RoUGFzdGUxU291bmRcIixcclxuICAgIHRvb3RoUGFzdGUyU291bmQgPSBcInRvb3RoUGFzdGUyU291bmRcIixcclxuICAgIERvbmVTdGVwU291bmQgPSBcIkRvbmVTdGVwU291bmRcIixcclxuICAgIFNoYWtlQnJ1c2ggPSBcIlNoYWtlQnJ1c2hcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lRHJ5ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RvbmVXYXRlckJydXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzVG9TdG9yZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hUb290aFBhc3RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lVG9vdGhQYXN0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyB0b290aFBhc3RlX1BvaW50c1N0YXR1czogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICAgc3RhdGljIHdhdGVyX1BvaW50c1N0YXR1czogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICAgc3RhdGljIHRvb3RoUGFzdGVfUG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyBXYXRlcl9Qb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgc3RhdGljIHNwaW5lX0J1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuICAgIHN0YXRpYyBzcGluZV9XYXRlckJ1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgbWFnZ290UmVtb3ZlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19