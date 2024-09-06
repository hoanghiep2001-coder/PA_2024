
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
    ArmyAnim["Idle"] = "Idle";
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
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["buySound"] = "buySound";
    SoundTrack["coinSound"] = "coinSound";
    SoundTrack["failSound"] = "failSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["Lv2_Kinife"] = "Lv2_Kinife";
    SoundTrack["Lv2_Gun"] = "Lv2_Gun";
    SoundTrack["Lv2_Tank"] = "Lv2_Tank";
    SoundTrack["Bg_Attack"] = "Bg_Attack";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.isToStore = true;
    Constants.isStartGame = false;
    Constants.isHasResult = false;
    Constants.isGainCoin = false;
    Constants.isPauseGame = false;
    Constants.isWin = false;
    Constants.isLoose = false;
    Constants.isCollideBase = false;
    Constants.isActiveCTA = false;
    Constants.isSpawnTank = false;
    Constants.isFirstShoot = false;
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
    Constants.isUpgrade = false;
    Constants.currentCoin = 0;
    Constants.increaseCoin = 10;
    Constants.enemyDie = 0;
    Constants.food = 15;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.scaleBoss = 0.5;
    Constants.scaleArmy = 0;
    Constants.shootCount = 0;
    Constants.comboCount = 0;
    Constants.troopsSpawnLeftCount = 4;
    Constants.troopsInTankCount = 0;
    Constants.isFiveBroInTank = false;
    Constants.isTankCanRun = false;
    Constants.enemyArmies = [];
    Constants.allyArmies = [];
    Constants.tank_TroopPoints = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx5QkFBYSxDQUFBO0lBQ2IsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUdELElBQUssUUFNSjtBQU5ELFdBQUssUUFBUTtJQUNULDZCQUFpQixDQUFBO0lBQ2pCLHVCQUFXLENBQUE7SUFDWCx5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtJQUNYLHlCQUFhLENBQUE7QUFDakIsQ0FBQyxFQU5JLFFBQVEsS0FBUixRQUFRLFFBTVo7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxLQUFLO0lBQ1osZUFBZSxFQUFFLENBQUM7Q0FDckIsQ0FBQTtBQUdELElBQUssVUFXSjtBQVhELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHVDQUF5QixDQUFBO0lBQ3pCLG1DQUFxQixDQUFBO0lBQ3JCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLG1DQUFxQixDQUFBO0lBQ3JCLHVDQUF5QixDQUFBO0lBQ3pCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFYSSxVQUFVLEtBQVYsVUFBVSxRQVdkO0FBR0Q7SUFBQTtJQWtFQSxDQUFDO0lBaEVHLFlBQVk7SUFDTCxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixpQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixvQkFBVSxHQUFZLEtBQUssQ0FBQztJQUM1QixtQkFBUyxHQUFZLElBQUksQ0FBQztJQUMxQixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixvQkFBVSxHQUFZLEtBQUssQ0FBQztJQUM1QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixlQUFLLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRTlCLHlCQUFlLEdBQVksS0FBSyxDQUFDO0lBQ2pDLHlCQUFlLEdBQVksS0FBSyxDQUFDO0lBQ2pDLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLHFCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBQ3hCLHNCQUFZLEdBQVcsRUFBRSxDQUFDO0lBQzFCLGtCQUFRLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLGNBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsdUJBQWEsR0FBVyxDQUFDLENBQUM7SUFDMUIsc0JBQVksR0FBVyxDQUFDLENBQUM7SUFDekIsbUJBQVMsR0FBVyxHQUFHLENBQUM7SUFDeEIsbUJBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsb0JBQVUsR0FBVyxDQUFDLENBQUM7SUFFdkIsb0JBQVUsR0FBVyxDQUFDLENBQUM7SUFDdkIsOEJBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLDJCQUFpQixHQUFXLENBQUMsQ0FBQztJQUM5Qix5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyxzQkFBWSxHQUFZLEtBQUssQ0FBQztJQUU5QixxQkFBVyxHQUFjLEVBQUUsQ0FBQztJQUM1QixvQkFBVSxHQUFjLEVBQUUsQ0FBQztJQUMzQiwwQkFBZ0IsR0FBYyxFQUFFLENBQUM7SUFHeEMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELFlBQVk7SUFDTCxrQkFBUSxHQUFvQixRQUFRLENBQUM7SUFHNUMsWUFBWTtJQUNMLGtCQUFRLEdBQW9CLFFBQVEsQ0FBQztJQUVoRCxnQkFBQztDQWxFRCxBQWtFQyxJQUFBO0FBbEVZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5lbnVtIEFybXlTa2luIHtcclxuICAgIEFsbHkgPSBcImFsbHlcIixcclxuICAgIEVuZW15ID0gXCJlbmVteVwiXHJcbn1cclxuXHJcblxyXG5lbnVtIEFybXlBbmltIHtcclxuICAgIEF0dGFjayA9IFwiQXR0YWNrXCIsXHJcbiAgICBEaWUgPSBcIkRpZVwiLFxyXG4gICAgSHVydCA9IFwiSHVydFwiLFxyXG4gICAgUnVuID0gXCJSdW5cIixcclxuICAgIElkbGUgPSBcIklkbGVcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbiAgICBpc0hvcjogZmFsc2UsXHJcbiAgICBpc1ZlcjogZmFsc2UsXHJcbiAgICBzcGVlZENhbGN1bGF0ZWQ6IDAsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgY2xpY2tTb3VuZCA9IFwiY2xpY2tTb3VuZFwiLFxyXG4gICAgYnV5U291bmQgPSBcImJ1eVNvdW5kXCIsXHJcbiAgICBjb2luU291bmQgPSBcImNvaW5Tb3VuZFwiLFxyXG4gICAgZmFpbFNvdW5kID0gXCJmYWlsU291bmRcIixcclxuICAgIHdpblNvdW5kID0gXCJ3aW5Tb3VuZFwiLFxyXG4gICAgTHYyX0tpbmlmZSA9IFwiTHYyX0tpbmlmZVwiLFxyXG4gICAgTHYyX0d1biA9IFwiTHYyX0d1blwiLFxyXG4gICAgTHYyX1RhbmsgPSBcIkx2Ml9UYW5rXCIsXHJcbiAgICBCZ19BdHRhY2sgPSBcIkJnX0F0dGFja1wiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc1N0YXJ0R2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzSGFzUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNHYWluQ29pbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUGF1c2VHYW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0xvb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDb2xsaWRlQmFzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQWN0aXZlQ1RBOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNTcGF3blRhbms6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0ZpcnN0U2hvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNDYW5CdXlBcm15THYyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5CdXlBcm15THYzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNVcGdyYWRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRDb2luOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluY3JlYXNlQ29pbjogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgZW5lbXlEaWU6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgZm9vZDogbnVtYmVyID0gMTU7XHJcbiAgICBzdGF0aWMgRW5lbXlCYXNlSGVhbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBBbGx5QmFzZUhlYWw6IG51bWJlciA9IDE7XHJcbiAgICBzdGF0aWMgc2NhbGVCb3NzOiBudW1iZXIgPSAwLjU7XHJcbiAgICBzdGF0aWMgc2NhbGVBcm15OiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIHNob290Q291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGNvbWJvQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgdHJvb3BzU3Bhd25MZWZ0Q291bnQ6IG51bWJlciA9IDQ7XHJcbiAgICBzdGF0aWMgdHJvb3BzSW5UYW5rQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgaXNGaXZlQnJvSW5UYW5rOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUYW5rQ2FuUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGVuZW15QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyBhbGx5QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyB0YW5rX1Ryb29wUG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG5cclxuICAgIC8vIEFybXkgU2lkZVxyXG4gICAgc3RhdGljIEFybXlTa2luOiB0eXBlb2YgQXJteVNraW4gPSBBcm15U2tpbjtcclxuXHJcblxyXG4gICAgLy8gQXJteSBBbmltXHJcbiAgICBzdGF0aWMgQXJteUFuaW06IHR5cGVvZiBBcm15QW5pbSA9IEFybXlBbmltO1xyXG5cclxufVxyXG4iXX0=