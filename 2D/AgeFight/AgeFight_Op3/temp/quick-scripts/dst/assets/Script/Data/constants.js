
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
var ArmySkin;
(function (ArmySkin) {
    ArmySkin["Ally"] = "ally";
    ArmySkin["Enemy"] = "enemy";
})(ArmySkin || (ArmySkin = {}));
var ArmyAnim;
(function (ArmyAnim) {
    ArmyAnim["Attack"] = "Attack";
    ArmyAnim["Die"] = "Die";
    ArmyAnim["Hurt"] = "Hurt";
    ArmyAnim["Run"] = "Run";
})(ArmyAnim || (ArmyAnim = {}));
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
    isHor: false,
    isVer: false,
    speedCalculated: 0,
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["ArmyLv1HitSound"] = "ArmyLv1HitSound";
    SoundTrack["ArmyLv2HitSound"] = "ArmyLv2HitSound";
    SoundTrack["ArmyLv3HitSound"] = "ArmyLv3HitSound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["buySound"] = "buySound";
    SoundTrack["coinSound"] = "coinSound";
    SoundTrack["failSound"] = "failSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["earthQuakeSound"] = "earthQuakeSound";
    SoundTrack["heliSound"] = "heliSound";
    SoundTrack["UpgradeSound"] = "UpgradeSound";
    SoundTrack["Lv2_Kinife"] = "Lv2_Kinife";
    SoundTrack["Lv2_Gun"] = "Lv2_Gun";
    SoundTrack["Lv2_Tank"] = "Lv2_Tank";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.isToStore = false;
    Constants.isStartGame = false;
    Constants.isHasResult = false;
    Constants.isGainCoin = false;
    Constants.isPauseGame = false;
    Constants.isWin = false;
    Constants.isLoose = false;
    Constants.isCollideBase = false;
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
    Constants.isUpgrade = false;
    Constants.currentCoin = 0;
    Constants.increaseCoin = 10;
    Constants.enemyDie = 0;
    Constants.food = 3;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.scaleBoss = 0.5;
    Constants.scaleArmy = 0;
    Constants.enemyArmies = [];
    Constants.allyArmies = [];
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    // Army Side
    Constants.ArmySkin = ArmySkin;
    // Army Anim
    Constants.ArmyAnim = ArmyAnim;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx5QkFBYSxDQUFBO0lBQ2IsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUdELElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULDZCQUFpQixDQUFBO0lBQ2pCLHVCQUFXLENBQUE7SUFDWCx5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFMSSxRQUFRLEtBQVIsUUFBUSxRQUtaO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztJQUNaLGVBQWUsRUFBRSxDQUFDO0NBQ3JCLENBQUE7QUFHRCxJQUFLLFVBaUJKO0FBakJELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLGlEQUFtQyxDQUFBO0lBQ25DLGlEQUFtQyxDQUFBO0lBQ25DLGlEQUFtQyxDQUFBO0lBQ25DLHVDQUF5QixDQUFBO0lBQ3pCLG1DQUFxQixDQUFBO0lBQ3JCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLG1DQUFxQixDQUFBO0lBQ3JCLGlEQUFtQyxDQUFBO0lBQ25DLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBRTdCLHVDQUF5QixDQUFBO0lBQ3pCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFqQkksVUFBVSxLQUFWLFVBQVUsUUFpQmQ7QUFHRDtJQUFBO0lBdURBLENBQUM7SUFyREcsWUFBWTtJQUNMLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLGVBQUssR0FBWSxLQUFLLENBQUM7SUFDdkIsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsdUJBQWEsR0FBWSxLQUFLLENBQUM7SUFFL0IseUJBQWUsR0FBWSxLQUFLLENBQUM7SUFDakMseUJBQWUsR0FBWSxLQUFLLENBQUM7SUFDakMsbUJBQVMsR0FBWSxLQUFLLENBQUM7SUFFM0IscUJBQVcsR0FBVyxDQUFDLENBQUM7SUFDeEIsc0JBQVksR0FBVyxFQUFFLENBQUM7SUFDMUIsa0JBQVEsR0FBVyxDQUFDLENBQUM7SUFDckIsY0FBSSxHQUFXLENBQUMsQ0FBQztJQUNqQix1QkFBYSxHQUFXLENBQUMsQ0FBQztJQUMxQixzQkFBWSxHQUFXLENBQUMsQ0FBQztJQUN6QixtQkFBUyxHQUFXLEdBQUcsQ0FBQztJQUN4QixtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUV0QixxQkFBVyxHQUFjLEVBQUUsQ0FBQztJQUM1QixvQkFBVSxHQUFjLEVBQUUsQ0FBQztJQUdsQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsWUFBWTtJQUNMLGtCQUFRLEdBQW9CLFFBQVEsQ0FBQztJQUc1QyxZQUFZO0lBQ0wsa0JBQVEsR0FBb0IsUUFBUSxDQUFDO0lBRWhELGdCQUFDO0NBdkRELEFBdURDLElBQUE7QUF2RFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmVudW0gQXJteVNraW4ge1xyXG4gICAgQWxseSA9IFwiYWxseVwiLFxyXG4gICAgRW5lbXkgPSBcImVuZW15XCJcclxufVxyXG5cclxuXHJcbmVudW0gQXJteUFuaW0ge1xyXG4gICAgQXR0YWNrID0gXCJBdHRhY2tcIixcclxuICAgIERpZSA9IFwiRGllXCIsXHJcbiAgICBIdXJ0ID0gXCJIdXJ0XCIsXHJcbiAgICBSdW4gPSBcIlJ1blwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxuICAgIGlzSG9yOiBmYWxzZSxcclxuICAgIGlzVmVyOiBmYWxzZSxcclxuICAgIHNwZWVkQ2FsY3VsYXRlZDogMCxcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBBcm15THYxSGl0U291bmQgPSBcIkFybXlMdjFIaXRTb3VuZFwiLFxyXG4gICAgQXJteUx2MkhpdFNvdW5kID0gXCJBcm15THYySGl0U291bmRcIixcclxuICAgIEFybXlMdjNIaXRTb3VuZCA9IFwiQXJteUx2M0hpdFNvdW5kXCIsXHJcbiAgICBjbGlja1NvdW5kID0gXCJjbGlja1NvdW5kXCIsXHJcbiAgICBidXlTb3VuZCA9IFwiYnV5U291bmRcIixcclxuICAgIGNvaW5Tb3VuZCA9IFwiY29pblNvdW5kXCIsXHJcbiAgICBmYWlsU291bmQgPSBcImZhaWxTb3VuZFwiLFxyXG4gICAgd2luU291bmQgPSBcIndpblNvdW5kXCIsXHJcbiAgICBlYXJ0aFF1YWtlU291bmQgPSBcImVhcnRoUXVha2VTb3VuZFwiLFxyXG4gICAgaGVsaVNvdW5kID0gXCJoZWxpU291bmRcIixcclxuICAgIFVwZ3JhZGVTb3VuZCA9IFwiVXBncmFkZVNvdW5kXCIsXHJcblxyXG4gICAgTHYyX0tpbmlmZSA9IFwiTHYyX0tpbmlmZVwiLFxyXG4gICAgTHYyX0d1biA9IFwiTHYyX0d1blwiLFxyXG4gICAgTHYyX1RhbmsgPSBcIkx2Ml9UYW5rXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNTdGFydEdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0hhc1Jlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzR2FpbkNvaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1BhdXNlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNMb29zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ29sbGlkZUJhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNDYW5CdXlBcm15THYyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5CdXlBcm15THYzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNVcGdyYWRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRDb2luOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluY3JlYXNlQ29pbjogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgZW5lbXlEaWU6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgZm9vZDogbnVtYmVyID0gMztcclxuICAgIHN0YXRpYyBFbmVteUJhc2VIZWFsOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIEFsbHlCYXNlSGVhbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBzY2FsZUJvc3M6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBzY2FsZUFybXk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGVuZW15QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyBhbGx5QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG5cclxuICAgIC8vIEFybXkgU2lkZVxyXG4gICAgc3RhdGljIEFybXlTa2luOiB0eXBlb2YgQXJteVNraW4gPSBBcm15U2tpbjtcclxuXHJcblxyXG4gICAgLy8gQXJteSBBbmltXHJcbiAgICBzdGF0aWMgQXJteUFuaW06IHR5cGVvZiBBcm15QW5pbSA9IEFybXlBbmltO1xyXG5cclxufVxyXG4iXX0=