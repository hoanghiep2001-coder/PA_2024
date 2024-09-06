
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
var SupporterAnim;
(function (SupporterAnim) {
    SupporterAnim["Attack"] = "Attack";
    SupporterAnim["Idle"] = "Idle";
})(SupporterAnim || (SupporterAnim = {}));
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
    SoundTrack["lazerSound"] = "lazerSound";
    SoundTrack["BoomSound"] = "BoomSound";
    SoundTrack["baseDownSound"] = "baseDownSound";
    SoundTrack["K98Sound"] = "K98Sound";
    SoundTrack["EnemyTankSound"] = "EnemyTankSound";
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
    Constants.isBuySupportLv1 = false;
    Constants.isBuySupportLv2 = false;
    Constants.isBuySupportLv3 = false;
    Constants.currentCoin = 0;
    Constants.increaseCoin = 10;
    Constants.enemyDie = 5;
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
    // Supporter Anim
    Constants.SupporterAnim = SupporterAnim;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx5QkFBYSxDQUFBO0lBQ2IsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUdELElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULDZCQUFpQixDQUFBO0lBQ2pCLHVCQUFXLENBQUE7SUFDWCx5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFMSSxRQUFRLEtBQVIsUUFBUSxRQUtaO0FBR0QsSUFBSyxhQUdKO0FBSEQsV0FBSyxhQUFhO0lBQ2Qsa0NBQWlCLENBQUE7SUFDakIsOEJBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSEksYUFBYSxLQUFiLGFBQWEsUUFHakI7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxLQUFLO0NBQ2YsQ0FBQTtBQUdELElBQUssVUFpQko7QUFqQkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsaURBQW1DLENBQUE7SUFDbkMsaURBQW1DLENBQUE7SUFDbkMsaURBQW1DLENBQUE7SUFDbkMsdUNBQXlCLENBQUE7SUFDekIsbUNBQXFCLENBQUE7SUFDckIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsbUNBQXFCLENBQUE7SUFDckIsaURBQW1DLENBQUE7SUFDbkMscUNBQXVCLENBQUE7SUFDdkIsdUNBQXlCLENBQUE7SUFDekIscUNBQXVCLENBQUE7SUFDdkIsNkNBQStCLENBQUE7SUFDL0IsbUNBQXFCLENBQUE7SUFDckIsK0NBQWlDLENBQUE7QUFDckMsQ0FBQyxFQWpCSSxVQUFVLEtBQVYsVUFBVSxRQWlCZDtBQUdEO0lBQUE7SUE0REEsQ0FBQztJQTFERyxZQUFZO0lBQ0wsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsbUJBQVMsR0FBWSxLQUFLLENBQUM7SUFDM0IscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0Isb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IsZUFBSyxHQUFZLEtBQUssQ0FBQztJQUN2QixpQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6Qix1QkFBYSxHQUFZLEtBQUssQ0FBQztJQUUvQix5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyx5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyx5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUVqQyxxQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN4QixzQkFBWSxHQUFXLEVBQUUsQ0FBQztJQUMxQixrQkFBUSxHQUFXLENBQUMsQ0FBQztJQUNyQixjQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQ2pCLHVCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBQzFCLHNCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLG1CQUFTLEdBQVcsR0FBRyxDQUFDO0lBQ3hCLG1CQUFTLEdBQVcsQ0FBQyxDQUFDO0lBR3RCLHFCQUFXLEdBQWMsRUFBRSxDQUFDO0lBQzVCLG9CQUFVLEdBQWMsRUFBRSxDQUFDO0lBR2xDLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxZQUFZO0lBQ0wsa0JBQVEsR0FBb0IsUUFBUSxDQUFDO0lBRzVDLFlBQVk7SUFDTCxrQkFBUSxHQUFvQixRQUFRLENBQUM7SUFHNUMsaUJBQWlCO0lBQ1YsdUJBQWEsR0FBeUIsYUFBYSxDQUFDO0lBRS9ELGdCQUFDO0NBNURELEFBNERDLElBQUE7QUE1RFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmVudW0gQXJteVNraW4ge1xyXG4gICAgQWxseSA9IFwiYWxseVwiLFxyXG4gICAgRW5lbXkgPSBcImVuZW15XCJcclxufVxyXG5cclxuXHJcbmVudW0gQXJteUFuaW0ge1xyXG4gICAgQXR0YWNrID0gXCJBdHRhY2tcIixcclxuICAgIERpZSA9IFwiRGllXCIsXHJcbiAgICBIdXJ0ID0gXCJIdXJ0XCIsXHJcbiAgICBSdW4gPSBcIlJ1blwiXHJcbn1cclxuXHJcblxyXG5lbnVtIFN1cHBvcnRlckFuaW0ge1xyXG4gICAgQXR0YWNrID0gXCJBdHRhY2tcIixcclxuICAgIElkbGUgPSBcIklkbGVcIixcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWRZOiAwLFxyXG4gICAgY2FsY3VsYXRlZFg6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG4gICAgaXNIb3I6IGZhbHNlLFxyXG4gICAgaXNWZXI6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIEFybXlMdjFIaXRTb3VuZCA9IFwiQXJteUx2MUhpdFNvdW5kXCIsXHJcbiAgICBBcm15THYySGl0U291bmQgPSBcIkFybXlMdjJIaXRTb3VuZFwiLFxyXG4gICAgQXJteUx2M0hpdFNvdW5kID0gXCJBcm15THYzSGl0U291bmRcIixcclxuICAgIGNsaWNrU291bmQgPSBcImNsaWNrU291bmRcIixcclxuICAgIGJ1eVNvdW5kID0gXCJidXlTb3VuZFwiLFxyXG4gICAgY29pblNvdW5kID0gXCJjb2luU291bmRcIixcclxuICAgIGZhaWxTb3VuZCA9IFwiZmFpbFNvdW5kXCIsXHJcbiAgICB3aW5Tb3VuZCA9IFwid2luU291bmRcIixcclxuICAgIGVhcnRoUXVha2VTb3VuZCA9IFwiZWFydGhRdWFrZVNvdW5kXCIsXHJcbiAgICBoZWxpU291bmQgPSBcImhlbGlTb3VuZFwiLFxyXG4gICAgbGF6ZXJTb3VuZCA9IFwibGF6ZXJTb3VuZFwiLFxyXG4gICAgQm9vbVNvdW5kID0gXCJCb29tU291bmRcIixcclxuICAgIGJhc2VEb3duU291bmQgPSBcImJhc2VEb3duU291bmRcIixcclxuICAgIEs5OFNvdW5kID0gXCJLOThTb3VuZFwiLFxyXG4gICAgRW5lbXlUYW5rU291bmQgPSBcIkVuZW15VGFua1NvdW5kXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNTdGFydEdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0hhc1Jlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzR2FpbkNvaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1BhdXNlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNMb29zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ29sbGlkZUJhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNCdXlTdXBwb3J0THYxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNCdXlTdXBwb3J0THYyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNCdXlTdXBwb3J0THYzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRDb2luOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluY3JlYXNlQ29pbjogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgZW5lbXlEaWU6IG51bWJlciA9IDU7XHJcbiAgICBzdGF0aWMgZm9vZDogbnVtYmVyID0gMztcclxuICAgIHN0YXRpYyBFbmVteUJhc2VIZWFsOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIEFsbHlCYXNlSGVhbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBzY2FsZUJvc3M6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBzY2FsZUFybXk6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIHN0YXRpYyBlbmVteUFybWllczogY2MuTm9kZVtdID0gW107XHJcbiAgICBzdGF0aWMgYWxseUFybWllczogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxuXHJcbiAgICAvLyBBcm15IFNpZGVcclxuICAgIHN0YXRpYyBBcm15U2tpbjogdHlwZW9mIEFybXlTa2luID0gQXJteVNraW47XHJcblxyXG5cclxuICAgIC8vIEFybXkgQW5pbVxyXG4gICAgc3RhdGljIEFybXlBbmltOiB0eXBlb2YgQXJteUFuaW0gPSBBcm15QW5pbTtcclxuXHJcblxyXG4gICAgLy8gU3VwcG9ydGVyIEFuaW1cclxuICAgIHN0YXRpYyBTdXBwb3J0ZXJBbmltOiB0eXBlb2YgU3VwcG9ydGVyQW5pbSA9IFN1cHBvcnRlckFuaW07XHJcblxyXG59XHJcbiJdfQ==