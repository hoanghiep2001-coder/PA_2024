
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
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx5QkFBYSxDQUFBO0lBQ2IsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUdELElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULDZCQUFpQixDQUFBO0lBQ2pCLHVCQUFXLENBQUE7SUFDWCx5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFMSSxRQUFRLEtBQVIsUUFBUSxRQUtaO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztDQUNmLENBQUE7QUFHRCxJQUFLLFVBWUo7QUFaRCxXQUFLLFVBQVU7SUFDWCxpQ0FBbUIsQ0FBQTtJQUNuQixpREFBbUMsQ0FBQTtJQUNuQyxpREFBbUMsQ0FBQTtJQUNuQyxpREFBbUMsQ0FBQTtJQUNuQyx1Q0FBeUIsQ0FBQTtJQUN6QixtQ0FBcUIsQ0FBQTtJQUNyQixxQ0FBdUIsQ0FBQTtJQUN2QixxQ0FBdUIsQ0FBQTtJQUN2QixtQ0FBcUIsQ0FBQTtJQUNyQixpREFBbUMsQ0FBQTtJQUNuQyxxQ0FBdUIsQ0FBQTtBQUMzQixDQUFDLEVBWkksVUFBVSxLQUFWLFVBQVUsUUFZZDtBQUdEO0lBQUE7SUF1REEsQ0FBQztJQXJERyxZQUFZO0lBQ0wsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsbUJBQVMsR0FBWSxJQUFJLENBQUM7SUFDMUIscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0Isb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IsZUFBSyxHQUFZLEtBQUssQ0FBQztJQUN2QixpQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6Qix1QkFBYSxHQUFZLEtBQUssQ0FBQztJQUUvQix5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyx5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUVqQyxxQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN4QixzQkFBWSxHQUFXLEVBQUUsQ0FBQztJQUMxQixrQkFBUSxHQUFXLENBQUMsQ0FBQztJQUNyQixjQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQ2pCLHVCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzFCLHNCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLG1CQUFTLEdBQVcsR0FBRyxDQUFDO0lBQ3hCLG1CQUFTLEdBQVcsQ0FBQyxDQUFDO0lBR3RCLHFCQUFXLEdBQWMsRUFBRSxDQUFDO0lBQzVCLG9CQUFVLEdBQWMsRUFBRSxDQUFDO0lBR2xDLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxZQUFZO0lBQ0wsa0JBQVEsR0FBb0IsUUFBUSxDQUFDO0lBRzVDLFlBQVk7SUFDTCxrQkFBUSxHQUFvQixRQUFRLENBQUM7SUFFaEQsZ0JBQUM7Q0F2REQsQUF1REMsSUFBQTtBQXZEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuZW51bSBBcm15U2tpbiB7XHJcbiAgICBBbGx5ID0gXCJhbGx5XCIsXHJcbiAgICBFbmVteSA9IFwiZW5lbXlcIlxyXG59XHJcblxyXG5cclxuZW51bSBBcm15QW5pbSB7XHJcbiAgICBBdHRhY2sgPSBcIkF0dGFja1wiLFxyXG4gICAgRGllID0gXCJEaWVcIixcclxuICAgIEh1cnQgPSBcIkh1cnRcIixcclxuICAgIFJ1biA9IFwiUnVuXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWRZOiAwLFxyXG4gICAgY2FsY3VsYXRlZFg6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG4gICAgaXNIb3I6IGZhbHNlLFxyXG4gICAgaXNWZXI6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIEFybXlMdjFIaXRTb3VuZCA9IFwiQXJteUx2MUhpdFNvdW5kXCIsXHJcbiAgICBBcm15THYySGl0U291bmQgPSBcIkFybXlMdjJIaXRTb3VuZFwiLFxyXG4gICAgQXJteUx2M0hpdFNvdW5kID0gXCJBcm15THYzSGl0U291bmRcIixcclxuICAgIGNsaWNrU291bmQgPSBcImNsaWNrU291bmRcIixcclxuICAgIGJ1eVNvdW5kID0gXCJidXlTb3VuZFwiLFxyXG4gICAgY29pblNvdW5kID0gXCJjb2luU291bmRcIixcclxuICAgIGZhaWxTb3VuZCA9IFwiZmFpbFNvdW5kXCIsXHJcbiAgICB3aW5Tb3VuZCA9IFwid2luU291bmRcIixcclxuICAgIGVhcnRoUXVha2VTb3VuZCA9IFwiZWFydGhRdWFrZVNvdW5kXCIsXHJcbiAgICBoZWxpU291bmQgPSBcImhlbGlTb3VuZFwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc1N0YXJ0R2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzSGFzUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNHYWluQ29pbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUGF1c2VHYW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0xvb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDb2xsaWRlQmFzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpc0NhbkJ1eUFybXlMdjI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhbkJ1eUFybXlMdjM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgY3VycmVudENvaW46IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgaW5jcmVhc2VDb2luOiBudW1iZXIgPSAxMDtcclxuICAgIHN0YXRpYyBlbmVteURpZTogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBmb29kOiBudW1iZXIgPSAzO1xyXG4gICAgc3RhdGljIEVuZW15QmFzZUhlYWw6IG51bWJlciA9IDE7XHJcbiAgICBzdGF0aWMgQWxseUJhc2VIZWFsOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIHNjYWxlQm9zczogbnVtYmVyID0gMC41O1xyXG4gICAgc3RhdGljIHNjYWxlQXJteTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgc3RhdGljIGVuZW15QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyBhbGx5QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG5cclxuICAgIC8vIEFybXkgU2lkZVxyXG4gICAgc3RhdGljIEFybXlTa2luOiB0eXBlb2YgQXJteVNraW4gPSBBcm15U2tpbjtcclxuXHJcblxyXG4gICAgLy8gQXJteSBBbmltXHJcbiAgICBzdGF0aWMgQXJteUFuaW06IHR5cGVvZiBBcm15QW5pbSA9IEFybXlBbmltO1xyXG5cclxufVxyXG4iXX0=