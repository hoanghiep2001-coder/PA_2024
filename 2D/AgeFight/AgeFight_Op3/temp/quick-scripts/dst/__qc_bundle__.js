
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/BaseController');
require('./assets/Script/Controller/BossController');
require('./assets/Script/Controller/CoinController');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/LoadFoodController');
require('./assets/Script/Controller/SpawnController');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/IronSource');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Other/Army');
require('./assets/Script/Other/CTA');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.epicwarrior.stoneage");
                return;
            }
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
            //     return;
            // }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.epicwarrior.stoneage");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsMkVBQTJFLENBQUMsQ0FBQztnQkFDeEYsT0FBTzthQUNWO1lBRUQsOEZBQThGO1lBQzlGLHVFQUF1RTtZQUN2RSxjQUFjO1lBQ2QsSUFBSTtZQUVKLEtBQUssQ0FBQyxJQUFJLENBQUMsMkVBQTJFLENBQUMsQ0FBQztZQUN4RixPQUFPO1NBQ1Y7UUFDRCwyRUFBMkU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3dEQUNXO0lBRnpCLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0F0REQsQUFzREMsQ0F0RG1DLEVBQUUsQ0FBQyxTQUFTLEdBc0QvQztBQXREWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluc3RhbGxIYW5kbGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmFuLmVwaWN3YXJyaW9yLnN0b25lYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDY0NDkyNjk3MzM/bXQ9OFwiKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uZXBpY3dhcnJpb3Iuc3RvbmVhZ2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/CTA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71158ED8B1KhJK96FnjvNWK', 'CTA');
// Script/Other/CTA.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameController_1 = require("../Controller/GameController");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.AudioManager = null;
        _this.rect = null;
        _this.btn = null;
        _this.label = null;
        _this.overlay = null;
        _this.Next = null;
        _this.tryAgain = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.tween(this.overlay)
            .to(0.5, { opacity: 100 })
            .start();
        this.activeTweenForBtn();
        this.tryAgain.opacity = 0;
        this.Next.opacity = 0;
        this.btn.opacity = 0;
        if (constants_1.Constants.isLoose) {
            this.tryAgain.active = true;
            this.Next.active = false;
        }
        else {
            this.tryAgain.active = false;
            this.Next.active = true;
        }
        this.scheduleOnce(function () {
            _this.btn.opacity = 255;
            _this.tryAgain.opacity = 255;
            _this.Next.opacity = 255;
            if (constants_1.Constants.isLoose) {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.failSound);
            }
            else {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            }
        }, 1.5);
        this.btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    NewClass.prototype.activeTweenForBtn = function () {
        cc.tween(this.btn)
            .repeatForever(cc.tween(this.btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: 'elasticOut' })).start();
    };
    __decorate([
        property(GameController_1.GameController)
    ], NewClass.prototype, "GameController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "rect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btn", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Next", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tryAgain", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQ1RBLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUVDO1FBaEVHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBZ0Q3QixDQUFDO0lBN0NhLHdCQUFLLEdBQWY7UUFBQSxpQkFrQ0M7UUFqQ0csRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUM7YUFDdkIsS0FBSyxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFHLHFCQUFTLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFHRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBRyxxQkFBUyxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUQ7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFFUCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEYsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBR08sb0NBQWlCLEdBQXpCO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2pCLGFBQWEsQ0FDVixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FDekQsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBbkJSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRTVCO0lBQUQsZUFBQztDQW5FRCxBQW1FQyxDQW5FcUMsRUFBRSxDQUFDLFNBQVMsR0FtRWpEO2tCQW5Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVjdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE5leHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0cnlBZ2FpbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm92ZXJsYXkpXHJcbiAgICAgICAgLnRvKDAuNSwge29wYWNpdHk6IDEwMH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUd2VlbkZvckJ0bigpO1xyXG5cclxuICAgICAgICB0aGlzLnRyeUFnYWluLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuTmV4dC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmJ0bi5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzTG9vc2UpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlBZ2Fpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk5leHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cnlBZ2Fpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5OZXh0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLnRyeUFnYWluLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuTmV4dC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBpZihDb25zdGFudHMuaXNMb29zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmZhaWxTb3VuZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2luU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMS41KVxyXG5cclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgICB0aGlzLm92ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlVHdlZW5Gb3JCdG4oKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5idG4pXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC40NSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/BaseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff0ebeMo+dPNqttw4fwK25C', 'BaseController');
// Script/Controller/BaseController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseController = /** @class */ (function (_super) {
    __extends(BaseController, _super);
    function BaseController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.baseLose = null;
        _this.HealthBar = null;
        _this.baseSide = "";
        _this.baseLv2 = null;
        _this.rigidbody = null;
        _this.collider = null;
        _this.isUpgrade = false;
        return _this;
    }
    BaseController.prototype.start = function () {
        if (this.baseSide === "Player") {
            this.baseLv2 = this.node.getChildByName("base").getChildByName("baseLv2");
        }
    };
    BaseController.prototype.update = function (dt) {
        if (this.baseSide === "Player" && !constants_1.Constants.isHasResult) {
            if (this.HealthBar.scaleX < 0.05) {
                constants_1.Constants.isHasResult = true;
                constants_1.Constants.isPauseGame = true;
                constants_1.Constants.isLoose = true;
                this.HealthBar.active = false;
                this.baseLose.active = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = constants_1.Constants.AllyBaseHeal;
        }
        if (this.baseSide === "Enemy" && !constants_1.Constants.isHasResult) {
            if (this.HealthBar.scaleX < 0.05) {
                constants_1.Constants.isHasResult = true;
                constants_1.Constants.isPauseGame = true;
                this.baseLose.active = true;
                this.HealthBar.active = false;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = constants_1.Constants.EnemyBaseHeal;
        }
        // upgradeBase
        if (this.baseSide === "Player" && constants_1.Constants.isUpgrade && !this.isUpgrade) {
            this.isUpgrade = true;
            this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
            this.baseLv2.active = true;
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], BaseController.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], BaseController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], BaseController.prototype, "baseLose", void 0);
    __decorate([
        property(cc.Node)
    ], BaseController.prototype, "HealthBar", void 0);
    __decorate([
        property(cc.String)
    ], BaseController.prototype, "baseSide", void 0);
    BaseController = __decorate([
        ccclass
    ], BaseController);
    return BaseController;
}(cc.Component));
exports.default = BaseController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWlFQztRQS9ERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBRXZDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBZ0QvQixDQUFDO0lBN0NhLDhCQUFLLEdBQWY7UUFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQztJQUdTLCtCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3JELElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFO2dCQUM3QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHFCQUFTLENBQUMsV0FB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cUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRTJDLEVBQUUsQ0FBQyxTQUFTLEdBaUV2RDtrQkFqRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhc2VMb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGVhbHRoQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBiYXNlU2lkZTogU3RyaW5nID0gXCJcIjsgIFxyXG5cclxuICAgIGJhc2VMdjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIGlzVXBncmFkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5iYXNlU2lkZSA9PT0gXCJQbGF5ZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VMdjIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENoaWxkQnlOYW1lKFwiYmFzZUx2MlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuYmFzZVNpZGUgPT09IFwiUGxheWVyXCIgJiYgIUNvbnN0YW50cy5pc0hhc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLkhlYWx0aEJhci5zY2FsZVggPCAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0xvb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGVhbHRoQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlTG9zZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmVhcnRoUXVha2VTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFsQmFyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkhlYWx0aEJhci5zY2FsZVggPSBDb25zdGFudHMuQWxseUJhc2VIZWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5iYXNlU2lkZSA9PT0gXCJFbmVteVwiICYmICFDb25zdGFudHMuaXNIYXNSZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5IZWFsdGhCYXIuc2NhbGVYIDwgMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGFzUmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VMb3NlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhlYWx0aEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENoaWxkQnlOYW1lKFwiSGVhbEJhclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5IZWFsdGhCYXIuc2NhbGVYID0gQ29uc3RhbnRzLkVuZW15QmFzZUhlYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1cGdyYWRlQmFzZVxyXG4gICAgICAgIGlmKHRoaXMuYmFzZVNpZGUgPT09IFwiUGxheWVyXCIgJiYgQ29uc3RhbnRzLmlzVXBncmFkZSAmJiAhdGhpcy5pc1VwZ3JhZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1VwZ3JhZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlTHYyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = require("../Controller/BaseController");
var CoinController_1 = require("../Controller/CoinController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemyBase = null;
        _this.allyBase = null;
        _this.CoinController = null;
        _this.Environment = null;
        _this.Options = null;
        _this.Bg_Hor = null;
        _this.Bg_Ver = null;
        _this.FrameFood = null;
        _this.LoadFood = null;
        _this.Options_Layout = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.start = function () {
        this.Bg_Hor = this.Environment.getChildByName("Bg_Hor");
        this.Bg_Ver = this.Environment.getChildByName("Bg_Ver");
        this.FrameFood = this.Options.getChildByName("Framefood");
        this.LoadFood = this.Options.getChildByName("Loadfood");
        this.Options_Layout = this.Options.getChildByName("Layout");
    };
    Responsive.prototype.handleRotate = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        constants_1.Constants.Responsive.speedCalculated = 20;
        constants_1.Constants.scaleArmy = 0.5;
        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;
        this.CoinController.node.scale = 1;
        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);
        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);
        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;
        optionsLayout.spacingX = 140;
        optionsChild.forEach(function (child) {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.speedCalculated = 10;
        constants_1.Constants.scaleArmy = 0.5;
        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;
        this.CoinController.node.scale = 1;
        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);
        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);
        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;
        optionsLayout.spacingX = 120;
        optionsChild.forEach(function (child) {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (constants_1.Constants.Responsive.isVer) {
            return;
        }
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;
        this.CoinController.node.scale = 0.8;
        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25);
        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        // this.FrameFood.setScale(10, 0.13);
        // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        // this.LoadFood.setScale(0.12, 0.12);
        // this.LoadFood.getComponent(cc.Widget).left = -2;
        // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        // let optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = true;
        optionsWidget.isAlignRight = false;
        // optionsWidget.isAlignLeft = false;
        // optionsWidget.right = 30;
        // optionsWidget.bottom = 35;
        // optionsLayout.spacingX = 50;
        // optionsChild.forEach(child => {
        //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        // });
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;
        this.CoinController.node.scale = 0.8;
        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25);
        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        // this.FrameFood.setScale(10, 0.13);
        // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        // this.LoadFood.setScale(0.12, 0.12);
        // this.LoadFood.getComponent(cc.Widget).left = -2;
        // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        // let optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = true;
        optionsWidget.isAlignRight = false;
        // optionsWidget.isAlignLeft = false;
        // optionsWidget.right = 30;
        // optionsWidget.bottom = 35;
        optionsLayout.spacingX = 70;
        // optionsChild.forEach(child => {
        //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        // });
        // if (height / width > 1.5) {
        //     this.CoinController.node.scale = 0.8;
        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
        //     optionsLayout.spacingX = 70;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // } else {
        //     this.CoinController.node.scale = 0.8;
        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
        //     // optionsLayout.spacingX = 50;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(BaseController_1.default)
    ], Responsive.prototype, "enemyBase", void 0);
    __decorate([
        property(BaseController_1.default)
    ], Responsive.prototype, "allyBase", void 0);
    __decorate([
        property(CoinController_1.default)
    ], Responsive.prototype, "CoinController", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Options", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE0VkM7UUF6VkcsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFnVWhELENBQUM7SUE3VGEsMEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsU0FB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TSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBeFZEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7aURBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztnREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQVpQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0VjlCO0lBQUQsaUJBQUM7Q0E1VkQsQUE0VkMsQ0E1VnVDLEVBQUUsQ0FBQyxTQUFTLEdBNFZuRDtrQkE1Vm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IENvaW5Db250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0NvaW5Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShCYXNlQ29udHJvbGxlcilcclxuICAgIGVuZW15QmFzZTogQmFzZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJhc2VDb250cm9sbGVyKVxyXG4gICAgYWxseUJhc2U6IEJhc2VDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShDb2luQ29udHJvbGxlcilcclxuICAgIENvaW5Db250cm9sbGVyOiBDb2luQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbnZpcm9ubWVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBCZ19Ib3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQmdfVmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZyYW1lRm9vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBMb2FkRm9vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBPcHRpb25zX0xheW91dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkJnX0hvciA9IHRoaXMuRW52aXJvbm1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJCZ19Ib3JcIik7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIgPSB0aGlzLkVudmlyb25tZW50LmdldENoaWxkQnlOYW1lKFwiQmdfVmVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkZyYW1lRm9vZCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkZyYW1lZm9vZFwiKTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kID0gdGhpcy5PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiTG9hZGZvb2RcIik7XHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDIwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQmdfSG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gODA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjMpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4zMTYsIDAuMzE2KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0xMDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQubGVmdCA9IDMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAtMTMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gNjU7XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSAxNDA7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiT3BcIikgPyBjaGlsZC5zY2FsZSA9IDEuMTUgOiBjaGlsZC5zY2FsZSA9IDAuNDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAxMDtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC41O1xyXG5cclxuICAgICAgICB0aGlzLkJnX0hvci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQmdfVmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjEwO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDgwO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoMC40LCAwLjQpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSA4MDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC40LCAwLjQpO1xyXG5cclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4zKTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMzE2LCAwLjMxNik7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMTA7XHJcblxyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmxlZnQgPSAzMDtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gLTEzMDtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmJvdHRvbSA9IDY1O1xyXG5cclxuICAgICAgICBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gMTIwO1xyXG4gICAgICAgIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAxLjE1IDogY2hpbGQuc2NhbGUgPSAwLjQxO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAod2lkdGggLyBoZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SXBob25lWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLlJlc3BvbnNpdmUuaXNWZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkID0gMDtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4yNTtcclxuXHJcbiAgICAgICAgdGhpcy5CZ19Ib3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIuYWN0aXZlID0gdHJ1ZTsgIFxyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4xMiwgMC4xMik7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gb3B0aW9uc1dpZGdldC5yaWdodCA9IDMwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDUwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjI1O1xyXG5cclxuICAgICAgICB0aGlzLkJnX0hvci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJnX1Zlci5hY3RpdmUgPSB0cnVlOyAgXHJcblxyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4xMiwgMC4xMik7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gb3B0aW9uc1dpZGdldC5yaWdodCA9IDMwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDcwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuMjUsIDAuMjUpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4xMyk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMTIsIDAuMTIpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSA3MDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjEyLCAwLjEyKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIC8vICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAvLyAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJPcFwiKSA/IGNoaWxkLnNjYWxlID0gMC41IDogY2hpbGQuc2NhbGUgPSAwLjI7XHJcbiAgICAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/SpawnController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe46aRT4+tC+aNQcYlNw6Y+', 'SpawnController');
// Script/Controller/SpawnController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var Army_1 = require("../Other/Army");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpawnController = /** @class */ (function (_super) {
    __extends(SpawnController, _super);
    function SpawnController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AllyPoints = [];
        _this.EnemyPoints = [];
        _this.Army_Lv1 = null;
        _this.Army_Lv2 = null;
        _this.Army_Lv3 = null;
        _this.Army2_Lv1 = null;
        _this.Army2_Lv2 = null;
        _this.Army2_Lv3 = null;
        _this.enemySpawnTime = 4;
        return _this;
    }
    SpawnController.prototype.start = function () {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
    };
    SpawnController.prototype.SpawnEnemies = function () {
        this.schedule(function () {
            if (constants_1.Constants.isPauseGame)
                return;
            this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin) {
        if ((constants_1.Constants.isCanBuyArmyLv3 || constants_1.Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
            console.log("up spawn time");
            this.enemySpawnTime = 1.5;
        }
        var random = cc.math.randomRangeInt(0, 3);
        // create Army
        var newArmy = cc.instantiate(this.Army_Lv1);
        constants_1.Constants.enemyArmies.push(newArmy);
        // caculate Scale
        newArmy.scaleX = -constants_1.Constants.scaleArmy;
        newArmy.scaleY = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.EnemyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Enemy";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        // console.log("Enemy - Group: " + newArmy.group);
    };
    SpawnController.prototype.SpawnPlayerArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 3);
        var newArmy;
        if (!constants_1.Constants.isUpgrade) {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army_Lv3);
                    break;
                default:
                    break;
            }
        }
        else {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army2_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army2_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army2_Lv3);
                    break;
                default:
                    break;
            }
        }
        // create Army
        constants_1.Constants.allyArmies.push(newArmy);
        console.log("Allies:" + constants_1.Constants.allyArmies.length);
        // caculate Scale
        newArmy.scale = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.AllyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        // armyComponent.tag = 1;
        newArmy.group = "Ally";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9;
    };
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "AllyPoints", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "EnemyPoints", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv3", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv3", void 0);
    SpawnController = __decorate([
        ccclass
    ], SpawnController);
    return SpawnController;
}(cc.Component));
exports.default = SpawnController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTcGF3bkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHNDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXNJQztRQW5JRyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUkzQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUFXLENBQUMsQ0FBQzs7SUErRy9CLENBQUM7SUE1R2EsK0JBQUssR0FBZjtRQUNJLG1FQUFtRTtRQUNuRSxpREFBaUQ7SUFDckQsQ0FBQztJQUdNLHNDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUkscUJBQVMsQ0FBQyxXQUFXO2dCQUFFLE9BQU87WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBR00sd0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUU5QixJQUFHLENBQUMscUJBQVMsQ0FBQyxlQUFlLElBQUkscUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMs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Q0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBSTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNRO0lBcEJYLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzSW5DO0lBQUQsc0JBQUM7Q0F0SUQsQUFzSUMsQ0F0STRDLEVBQUUsQ0FBQyxTQUFTLEdBc0l4RDtrQkF0SW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEFybXkgZnJvbSBcIi4uL090aGVyL0FybXlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGF3bkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBBbGx5UG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBFbmVteVBvaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXlfTHYxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXlfTHYyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXlfTHYzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteTJfTHYxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXkyX0x2MjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15Ml9MdjM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIGVuZW15U3Bhd25UaW1lOiBudW1iZXIgPSA0O1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSBDb25zdGFudHMuZW5lbXlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIC8vIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pc1BhdXNlR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLlNwYXduRW5lbXlBcm15KENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSk7XHJcbiAgICAgICAgfSwgdGhpcy5lbmVteVNwYXduVGltZSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDAuMik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTcGF3bkVuZW15QXJteShza2luOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYoKENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMgfHwgQ29uc3RhbnRzLmlzVXBncmFkZSkgJiYgdGhpcy5lbmVteVNwYXduVGltZSA9PT0gMC4zKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXAgc3Bhd24gdGltZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlTcGF3blRpbWUgPSAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCAzKVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgQXJteVxyXG4gICAgICAgIGxldCBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2MSk7XHJcbiAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLnB1c2gobmV3QXJteSk7XHJcblxyXG4gICAgICAgIC8vIGNhY3VsYXRlIFNjYWxlXHJcbiAgICAgICAgbmV3QXJteS5zY2FsZVggPSAtQ29uc3RhbnRzLnNjYWxlQXJteTtcclxuICAgICAgICBuZXdBcm15LnNjYWxlWSA9IENvbnN0YW50cy5zY2FsZUFybXk7XHJcblxyXG4gICAgICAgIC8vIHNldCBQb3NcclxuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLkVuZW15UG9pbnRzW3JhbmRvbV07XHJcbiAgICAgICAgbGV0IGFybXlDb21wb25lbnQgPSBuZXdBcm15LmdldENvbXBvbmVudChBcm15KTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIGFybXlDb21wb25lbnQuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiRW5lbXlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRW5lbXkgLSBHcm91cDogXCIgKyBuZXdBcm15Lmdyb3VwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduUGxheWVyQXJteShza2luOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCAzKVxyXG4gICAgICAgIGxldCBuZXdBcm15OiBjYy5Ob2RlO1xyXG5cclxuICAgICAgICBpZighQ29uc3RhbnRzLmlzVXBncmFkZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXkyX0x2MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteTJfTHYyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15Ml9MdjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjcmVhdGUgQXJteVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLnB1c2gobmV3QXJteSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGxpZXM6XCIgKyBDb25zdGFudHMuYWxseUFybWllcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAvLyBjYWN1bGF0ZSBTY2FsZVxyXG4gICAgICAgIG5ld0FybXkuc2NhbGUgPSBDb25zdGFudHMuc2NhbGVBcm15O1xyXG5cclxuICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5BbGx5UG9pbnRzW3JhbmRvbV07XHJcbiAgICAgICAgbGV0IGFybXlDb21wb25lbnQgPSBuZXdBcm15LmdldENvbXBvbmVudChBcm15KTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIGFybXlDb21wb25lbnQuc2tpbiA9IHNraW47XHJcbiAgICAgICAgLy8gYXJteUNvbXBvbmVudC50YWcgPSAxO1xyXG4gICAgICAgIG5ld0FybXkuZ3JvdXAgPSBcIkFsbHlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pO1xyXG4gICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDAuOTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/LoadFoodController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8aaf1Qac2lG3aTwixhAfLvl', 'LoadFoodController');
// Script/Controller/LoadFoodController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadFoodController = /** @class */ (function (_super) {
    __extends(LoadFoodController, _super);
    function LoadFoodController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overlay = null;
        _this.label = null;
        _this.unitCosts = [];
        _this.unitFrames = [];
        return _this;
    }
    LoadFoodController.prototype.start = function () {
        // this.label.string = String(Constants.food);
    };
    LoadFoodController.prototype.increaseFood = function () {
        var _this = this;
        this.overlay.scaleX = 0;
        if (constants_1.Constants.isPauseGame)
            return;
        cc.tween(this.overlay)
            .to(1.5, { scaleX: 1 })
            .call(function () {
            constants_1.Constants.food += 1;
            _this.increaseFood();
        })
            .start();
    };
    LoadFoodController.prototype.checkEnableCost = function () {
        for (var index = 0; index < this.unitCosts.length; index++) {
            var label = this.unitCosts[index];
            if (Number(this.label.string) >= Number(label.string)) {
                if (index === 0) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if (index === 1 && constants_1.Constants.isCanBuyArmyLv2) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if (index === 2 && constants_1.Constants.isCanBuyArmyLv3) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
            }
            else {
                label.node.color = cc.Color.RED;
                if (index === 1 && constants_1.Constants.isCanBuyArmyLv2)
                    this.unitFrames[index].opacity = 255;
                if (index === 2 && constants_1.Constants.isCanBuyArmyLv3)
                    this.unitFrames[index].opacity = 255;
                this.unitFrames[index].opacity = 0;
            }
        }
    };
    LoadFoodController.prototype.update = function (dt) {
        // if(Constants.isPauseGame) return;
        this.label.string = String(constants_1.Constants.food);
        this.checkEnableCost();
    };
    __decorate([
        property(cc.Node)
    ], LoadFoodController.prototype, "overlay", void 0);
    __decorate([
        property(cc.Label)
    ], LoadFoodController.prototype, "label", void 0);
    __decorate([
        property([cc.Label])
    ], LoadFoodController.prototype, "unitCosts", void 0);
    __decorate([
        property([cc.Node])
    ], LoadFoodController.prototype, "unitFrames", void 0);
    LoadFoodController = __decorate([
        ccclass
    ], LoadFoodController);
    return LoadFoodController;
}(cc.Component));
exports.default = LoadFoodController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxMb2FkRm9vZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBbUVDO1FBakVHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQWUsRUFBRSxDQUFDO1FBRTNCLGdCQUFVLEdBQWMsRUFBRSxDQUFDOztJQTBEL0IsQ0FBQztJQXZEYSxrQ0FBSyxHQUFmO1FBQ0ksOENBQThDO0lBQ2xELENBQUM7SUFHTSx5Q0FBWSxHQUFuQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUcscUJBQVMsQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUVqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNwQixJQUFJLENBQUM7WUFDRixxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQU1PLDRDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsRCxJQUFHLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDckM7Z0JBQ0QsSUFBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNyQztnQkFDRCxJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3JDO2FBQ0o7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLElBQUcsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWU7b0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNsRixJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBR1MsbUNBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lEQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNPO0lBVFYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FtRXRDO0lBQUQseUJBQUM7Q0FuRUQsQUFtRUMsQ0FuRStDLEVBQUUsQ0FBQyxTQUFTLEdBbUUzRDtrQkFuRW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRm9vZENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXHJcbiAgICB1bml0Q29zdHM6IGNjLkxhYmVsW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB1bml0RnJhbWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlRm9vZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc2NhbGVYID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vdmVybGF5KVxyXG4gICAgICAgIC50bygxLjUsIHtzY2FsZVg6IDF9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmZvb2QgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZUZvb2QoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRW5hYmxlQ29zdCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy51bml0Q29zdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy51bml0Q29zdHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZihOdW1iZXIodGhpcy5sYWJlbC5zdHJpbmcpID49IE51bWJlcihsYWJlbC5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RnJhbWVzW2luZGV4XS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAyICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAxICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIpIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAyICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMpIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmKENvbnN0YW50cy5pc1BhdXNlR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0VuYWJsZUNvc3QoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var LoadFoodController_1 = require("./LoadFoodController");
var SpawnController_1 = require("./SpawnController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.LoadFoodController = null;
        _this.SpawnController = null;
        // Node
        _this.CTA = null;
        // state
        _this.isCollideBaseFlag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
    };
    GamePlay.prototype.resetGame = function () {
        constants_1.Constants.allyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.enemyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.isStartGame = false;
        constants_1.Constants.isPauseGame = true;
        constants_1.Constants.isCanBuyArmyLv2 = false;
        constants_1.Constants.isCanBuyArmyLv3 = false;
        constants_1.Constants.isUpgrade = false;
        constants_1.Constants.isWin = false;
        constants_1.Constants.isLoose = false;
        constants_1.Constants.isCollideBase = false;
        constants_1.Constants.food = 3;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
        cc.director.loadScene("game");
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        cc.view.setResizeCallback(function () {
            if (constants_1.Constants.ironSource.isEndGame)
                return;
            _this.resetGame();
        });
    };
    GamePlay.prototype.spawnArmy = function (index) {
        constants_1.Constants.isPauseGame = false;
        !constants_1.Constants.isStartGame && this.LoadFoodController.increaseFood();
        !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
        constants_1.Constants.isStartGame = true;
        switch (index) {
            case 1:
                // spawn army lv1
                if (constants_1.Constants.food >= 3) {
                    constants_1.Constants.food -= 3;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 1);
                }
                break;
            case 2:
                // spawn army lv2
                if (constants_1.Constants.food >= 4 && constants_1.Constants.isCanBuyArmyLv2) {
                    constants_1.Constants.food -= 4;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 2);
                }
                break;
            case 3:
                // spawn army lv3
                if (constants_1.Constants.food >= 5 && constants_1.Constants.isCanBuyArmyLv3) {
                    constants_1.Constants.food -= 5;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 3);
                }
                break;
            default:
                console.log("can not spawn");
                break;
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(LoadFoodController_1.default)
    ], GamePlay.prototype, "LoadFoodController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], GamePlay.prototype, "SpawnController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUdDO1FBakdDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUU5QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsUUFBUTtRQUNSLHVCQUFpQixHQUFZLEtBQUssQ0FBQzs7SUFvRnJDLENBQUM7SUFqRlcseUJBQU0sR0FBaEI7UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGtEQUFrRDtRQUNsRCw0Q0FBNEM7SUFDOUMsQ0FBQztJQUdNLDRCQUFTLEdBQWhCO1FBQ0UscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JELHFCQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUV0RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDOUIscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzdCLHFCQUFTLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxxQkFBUyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMscUJBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHFCQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN4QixxQkFBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDMUIscUJBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRWhDLHFCQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNuQixxQkFBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdkIscUJBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHFCQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUM1QixxQkFBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDM0IscUJBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzFCLHFCQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUUzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUV2QyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3hCLElBQUcscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFBRSxPQUFPO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTSw0QkFBUyxHQUFoQixVQUFpQixLQUFhO1FBQzVCLHFCQUFTLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLHFCQUFTLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUQscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRTdCLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxDQUFDO2dCQUNKLGlCQUFpQjtnQkFDakIsSUFBSSxxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQ3ZCLHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtnQkFFRCxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLGlCQUFpQjtnQkFDakIsSUFBSSxxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3BELHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtnQkFDRCxNQUFNO1lBRVIsS0FBSyxDQUFDO2dCQUNKLGlCQUFpQjtnQkFDakIsSUFBSSxxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3BELHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtnQkFDRCxNQUFNO1lBQ1I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQS9GRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7d0RBQ2lCO0lBRTlDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7cURBQ2M7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQVpELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRzVCO0lBQUQsZUFBQztDQW5HRCxBQW1HQyxDQW5HcUMsRUFBRSxDQUFDLFNBQVMsR0FtR2pEO2tCQW5Hb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IExvYWRGb29kQ29udHJvbGxlciBmcm9tIFwiLi9Mb2FkRm9vZENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFNwYXduQ29udHJvbGxlciBmcm9tIFwiLi9TcGF3bkNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KExvYWRGb29kQ29udHJvbGxlcilcclxuICBMb2FkRm9vZENvbnRyb2xsZXI6IExvYWRGb29kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFNwYXduQ29udHJvbGxlcilcclxuICBTcGF3bkNvbnRyb2xsZXI6IFNwYXduQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIE5vZGVcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzQ29sbGlkZUJhc2VGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGxldCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZXNldEdhbWUoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcy5mb3JFYWNoKGFybXkgPT4gYXJteS5kZXN0cm95KCkpO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSB0cnVlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MyA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzVXBncmFkZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzV2luID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNMb29zZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ29sbGlkZUJhc2UgPSBmYWxzZTtcclxuXHJcbiAgICBDb25zdGFudHMuZm9vZCA9IDM7XHJcbiAgICBDb25zdGFudHMuZW5lbXlEaWUgPSAwO1xyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRDb2luID0gMDtcclxuICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5BbGx5QmFzZUhlYWwgPSAxO1xyXG4gICAgQ29uc3RhbnRzLmFsbHlBcm1pZXMgPSBbXTtcclxuICAgIENvbnN0YW50cy5lbmVteUFybWllcyA9IFtdO1xyXG5cclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuYmdTb3VuZC52b2x1bWUgPSAwLjU7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGlmKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNwYXduQXJteShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgICFDb25zdGFudHMuaXNTdGFydEdhbWUgJiYgdGhpcy5Mb2FkRm9vZENvbnRyb2xsZXIuaW5jcmVhc2VGb29kKCk7XHJcbiAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduRW5lbWllcygpO1xyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gdHJ1ZTtcclxuXHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICAvLyBzcGF3biBhcm15IGx2MVxyXG4gICAgICAgIGlmIChDb25zdGFudHMuZm9vZCA+PSAzKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSAzO1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjJcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gNCAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSA0O1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjNcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gNSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSA1O1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW4gbm90IHNwYXduXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/IronSource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c0ang8TBDWqCvjXG1XKDi', 'IronSource');
// Script/Data/IronSource.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IronSource = /** @class */ (function (_super) {
    __extends(IronSource, _super);
    function IronSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
        // protected update(dt: number): void {
        //   this.handleMuteSoundIronSource();
        // }
    }
    IronSource.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    IronSource.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], IronSource.prototype, "AudioManager", void 0);
    IronSource = __decorate([
        ccclass
    ], IronSource);
    return IronSource;
}(cc.Component));
exports.default = IronSource;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0Msa0JBQVksR0FBaUIsSUFBSSxDQUFDOztRQThCbEMsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQS9CUSw4Q0FBeUIsR0FBaEM7UUFDRSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUdPLDhDQUF5QixHQUFqQztRQUNFLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxGLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0cscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7b0RBQ1c7SUFIZixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0M5QjtJQUFELGlCQUFDO0NBcENELEFBb0NDLENBcEN1QyxFQUFFLENBQUMsU0FBUyxHQW9DbkQ7a0JBcENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJcm9uU291cmNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchArea = {};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxTQUFTLEdBQUcsRUFFakIsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/Army.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e890fnTUplJe5ZAPuR2b1Xy', 'Army');
// Script/Other/Army.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Army = /** @class */ (function (_super) {
    __extends(Army, _super);
    function Army() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HealthBar = null;
        _this.AudioManager = null;
        _this.spine = null;
        _this.collider = null;
        _this.skin = "";
        _this.speed = 25;
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.isAttacking = false;
        _this.isReadyToFight = false;
        _this.pauseFlag = false;
        _this.rigidbody = null;
        _this.collisionCount = 0;
        return _this;
    }
    Army_1 = Army;
    Army.prototype.start = function () {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        if ((o.tag === 1 || o.tag === 0 || o.tag === 2) && s.tag !== 9) {
            this.collisionCount++;
            this.skin === constants_1.Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === constants_1.Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
            return;
        }
        if (o.tag === 9) {
            this.isReadyToFight = true;
        }
        if (this.collisionCount < 0)
            this.collisionCount = 0;
    };
    Army.prototype.onCollisionStay = function (o, s) {
        if ((o.tag === 1 || o.tag === 0) && s.tag !== 9) {
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionExit = function (o, s) {
        if (o.tag === 9) {
            this.isReadyToFight = false;
        }
        if (!this.isLive)
            return;
        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.collisionCount--;
            if (this.collisionCount === 0) {
                this.canRun = true;
                this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            }
        }
        if (this.collisionCount < 0)
            this.collisionCount = 0;
    };
    Army.prototype.setCollisionForAlly = function (o) {
        // hit enemy base || enemy army
        if (o.tag === 0 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            if (this.node.name === "Army_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim();
        }
        // hit enemy base
        if (o.tag === 0) {
            // Constants.isCollideBase = true;
            this.isBase = true;
            // this.checkDie();
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            this.checkDoneAttackAnim();
        }
        // hit ally base
        if (o.tag === 1) {
            this.isBase = true;
        }
    };
    Army.prototype.checkDoneAttackAnim = function () {
        var _this = this;
        this.spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Attack") {
                _this.isBase
                    ? _this.handleDecreaseHealthBase()
                    : _this.handleDecreaseHealthArmy();
            }
        });
    };
    Army.prototype.handleDecreaseHealthBase = function () {
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        if (this.node.name === "Army2_Lv3") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
            var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
            spineAttackOfTank.node.active = true;
            spineAttackOfTank.setAnimation(0, "2", false);
            constants_1.Constants.EnemyBaseHeal -= 0.2;
            return;
        }
        if (this.node.name === "Army2_Lv2") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
            return;
        }
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.EnemyBaseHeal -= 0.08;
            return;
        }
        if (this.skin === "ally") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.EnemyBaseHeal -= 0.05;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.AllyBaseHeal -= 0.05;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        }
    };
    Army.prototype.handleDecreaseHealthArmy = function () {
        if (this.skin === "ally") {
            if (this.node.name === "Army_Lv3") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
                return;
            }
            if (this.node.name === "Army2_Lv3") {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
                var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                spineAttackOfTank.node.active = true;
                spineAttackOfTank.setAnimation(0, "2", false);
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 1;
                return;
            }
            if (this.node.name === "Army2_Lv2") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
                return;
            }
            if (this.node.name === "Army_Lv2") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
                return;
            }
            if (this.node.name === "Army2_Lv1") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
                return;
            }
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            return;
        }
        else {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.allyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
        }
    };
    Army.prototype.die = function () {
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(Army_1).enabled = false;
        // decrease the first ally/enemy in constant array;
        if (this.skin === "enemy") {
            constants_1.Constants.enemyDie += 1;
            constants_1.Constants.enemyArmies.splice(0, 1);
        }
        else {
            constants_1.Constants.allyArmies.splice(0, 1);
        }
    };
    Army.prototype.checkDie = function () {
        var _this = this;
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.die();
    };
    Army.prototype.checkRun = function () {
        if (!this.isLive)
            return;
        var firstEnemyPos = null;
        var targetPos = null;
        if (this.skin === "ally" && this.canRun) {
            var currentPos = this.node.getPosition();
            this.isReadyToFight
                ? firstEnemyPos = this.roadToEnemyPos(currentPos, "ally")
                : firstEnemyPos = currentPos;
            if (this.node.name === "Army_Lv3" || this.node.name === "Army2_Lv3") {
                targetPos = new cc.Vec2(currentPos.x + 25 + constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
                return;
            }
            if (this.node.name === "Army" || this.node.name === "Army2_Lv2"
                || this.node.name === "Army2_Lv1" || this.node.name === "Army_Lv2") {
                targetPos = new cc.Vec2(currentPos.x + 10 + constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
            }
        }
        if (this.skin === "enemy" && this.canRun) {
            var currentPos = this.node.getPosition();
            this.isReadyToFight
                ? firstEnemyPos = this.roadToEnemyPos(currentPos, "enemy")
                : firstEnemyPos = currentPos;
            targetPos = new cc.Vec2(currentPos.x - 10 - constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
            this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
        }
    };
    Army.prototype.roadToEnemyPos = function (currentPos, yourSide) {
        if (yourSide === "ally") {
            if (constants_1.Constants.enemyArmies[0]) {
                return constants_1.Constants.enemyArmies[0].getPosition();
            }
            else {
                return currentPos;
            }
        }
        else {
            if (constants_1.Constants.allyArmies[0]) {
                return constants_1.Constants.allyArmies[0].getPosition();
            }
            else {
                return currentPos;
            }
        }
    };
    Army.prototype.checkPause = function () {
        if (constants_1.Constants.isPauseGame) {
            this.canRun = false;
        }
        if (constants_1.Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.collider.enabled = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            return;
        }
        if (!constants_1.Constants.isPauseGame) {
            this.pauseFlag = false;
        }
    };
    Army.prototype.update = function (dt) {
        this.checkPause();
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    };
    var Army_1;
    __decorate([
        property(cc.Node)
    ], Army.prototype, "HealthBar", void 0);
    Army = Army_1 = __decorate([
        ccclass
    ], Army);
    return Army;
}(cc.Component));
exports.default = Army;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBaVVDO1FBL1RHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUVuQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDOztJQTZTdkMsQ0FBQzthQWpVb0IsSUFBSTtJQXVCWCxvQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNsRSxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxF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RUFBRTtZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBR1MscUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUE5VEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUTtJQUZULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpVXhCO0lBQUQsV0FBQztDQWpVRCxBQWlVQyxDQWpVaUMsRUFBRSxDQUFDLFNBQVMsR0FpVTdDO2tCQWpVb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhlYWx0aEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgc2tpbjogc3RyaW5nID0gXCJcIjtcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyNTtcclxuXHJcbiAgICBjYW5SdW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNCYXNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0xpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNBdHRhY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzUmVhZHlUb0ZpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcGF1c2VGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICByaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsaXNpb25Db3VudDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50XHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkF1ZGlvTWFuYWdlclwiKS5nZXRDb21wb25lbnQoQXVkaW9NYW5hZ2VyKTtcclxuICAgICAgICB0aGlzLnNwaW5lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG86IGNjLlBoeXNpY3NDb2xsaWRlciwgcykge1xyXG4gICAgICAgIGlmICgoby50YWcgPT09IDEgfHwgby50YWcgPT09IDAgfHwgby50YWcgPT09IDIpICYmIHMudGFnICE9PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5za2luID09PSBDb25zdGFudHMuQXJteVNraW4uQWxseSAmJiB0aGlzLnNldENvbGxpc2lvbkZvckFsbHkobyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbiA9PT0gQ29uc3RhbnRzLkFybXlTa2luLkVuZW15ICYmIHRoaXMuc2V0Q29sbGlzaW9uRm9yRW5lbXkobyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gOSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVhZHlUb0ZpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50IDwgMCkgdGhpcy5jb2xsaXNpb25Db3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uU3RheShvOiBjYy5QaHlzaWNzQ29sbGlkZXIsIHMpIHtcclxuICAgICAgICBpZiAoKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwKSAmJiBzLnRhZyAhPT0gOSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FeGl0KG8sIHMpIHtcclxuICAgICAgICBpZiAoby50YWcgPT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoby50YWcgPT09IDEgfHwgby50YWcgPT09IDAgfHwgby50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25Db3VudC0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25Db3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50IDwgMCkgdGhpcy5jb2xsaXNpb25Db3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlzaW9uRm9yQWxseShvOiBjYy5QaHlzaWNzQ29sbGlkZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBoaXQgZW5lbXkgYmFzZSB8fCBlbmVteSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjJIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEb25lQXR0YWNrQW5pbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGl0IGVuZW15IGJhc2VcclxuICAgICAgICBpZiAoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzQ29sbGlkZUJhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2hlY2tEaWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlzaW9uRm9yRW5lbXkobzogY2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaGl0IGFsbHkgYmFzZSB8fCBhbGx5IGFybXlcclxuICAgICAgICBpZiAoby50YWcgPT09IDEgfHwgby50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgISh0aGlzLnNwaW5lLmFuaW1hdGlvbiA9PT0gXCJBdHRhY2tcIikgJiYgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkF0dGFjaywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEb25lQXR0YWNrQW5pbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGl0IGFsbHkgYmFzZVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRG9uZUF0dGFja0FuaW0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09PSBcIkF0dGFja1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQmFzZVxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5oYW5kbGVEZWNyZWFzZUhlYWx0aEJhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYW5kbGVEZWNyZWFzZUhlYWx0aEFybXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiICYmIHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2M0hpdFNvdW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9UYW5rKTtcclxuICAgICAgICAgICAgbGV0IHNwaW5lQXR0YWNrT2ZUYW5rID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxhc3RcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3BpbmVBdHRhY2tPZlRhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5zZXRBbmltYXRpb24oMCwgXCIyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4yO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjJcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfR3VuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wODtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImVuZW15XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkFsbHlCYXNlSGVhbCAtPSAwLjA1O1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRGVjcmVhc2VIZWFsdGhBcm15KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2M0hpdFNvdW5kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfVGFuayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BpbmVBdHRhY2tPZlRhbmsgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCbGFzdFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BpbmVBdHRhY2tPZlRhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3BpbmVBdHRhY2tPZlRhbmsuc2V0QW5pbWF0aW9uKDAsIFwiMlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYyXCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0d1bik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYxXCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0tpbmlmZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjI7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGRpZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoQXJteSkuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZmlyc3QgYWxseS9lbmVteSBpbiBjb25zdGFudCBhcnJheTtcclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImVuZW15XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15RGllICs9IDE7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmFsbHlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0RpZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BpbmUudGltZVNjYWxlID0gMC4zO1xyXG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5EaWUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLkhlYWx0aEJhci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMubm9kZS5kZXN0cm95KCkpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUnVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RW5lbXlQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLmNhblJ1bikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodCBcclxuICAgICAgICAgICAgPyBmaXJzdEVuZW15UG9zID0gdGhpcy5yb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zLCBcImFsbHlcIilcclxuICAgICAgICAgICAgOiBmaXJzdEVuZW15UG9zID0gY3VycmVudFBvcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2M1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMihjdXJyZW50UG9zLnggKyAyNSArIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCwgZmlyc3RFbmVteVBvcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zLmxlcnAodGFyZ2V0UG9zLCAwLjAyLCBjdXJyZW50UG9zKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlcIiB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjJcIiBcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MVwiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIgXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIoY3VycmVudFBvcy54ICsgMTAgKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQsIGZpcnN0RW5lbXlQb3MueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImVuZW15XCIgJiYgdGhpcy5jYW5SdW4pIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeVRvRmlnaHQgXHJcbiAgICAgICAgICAgID8gZmlyc3RFbmVteVBvcyA9IHRoaXMucm9hZFRvRW5lbXlQb3MoY3VycmVudFBvcywgXCJlbmVteVwiKVxyXG4gICAgICAgICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zOyAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIoY3VycmVudFBvcy54IC0gMTAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQsIGZpcnN0RW5lbXlQb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zLmxlcnAodGFyZ2V0UG9zLCAwLjAyLCBjdXJyZW50UG9zKSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJvYWRUb0VuZW15UG9zKGN1cnJlbnRQb3M6IGNjLlZlYzIsIHlvdXJTaWRlOiBzdHJpbmcpOiBjYy5WZWMyIHtcclxuICAgICAgICBpZiAoeW91clNpZGUgPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5hbGx5QXJtaWVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLmFsbHlBcm1pZXNbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1BhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUgJiYgIXRoaXMucGF1c2VGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNvbnN0YW50cy5pc1BhdXNlR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja1BhdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwLjEgJiYgdGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var IronSource_1 = require("../Data/IronSource");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // Node
        _this.CTA = null;
        _this.hidemask = null;
        _this.hand = null;
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        _this.btn_upgrade = null;
        _this.btn_BuyArmys = [];
        _this.ps_upgrade = [];
        _this.Lv1Troops = [];
        _this.Lv2Troops = [];
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
        // this.Lv2Troops.forEach(troop => troop.active = false);
    };
    TouchAreaController.prototype.registerEvent = function () {
        // hidemask
        // this.hidemask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _this = this;
        var _loop_1 = function (index) {
            var btn = this_1.btn_SpawnArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                if (constants_1.Constants.isLoose || constants_1.Constants.isWin || _this.CTA.active)
                    return;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                _this.GamePlay.spawnArmy(index + 1);
                _this.hand.active = false;
                // this.IronSource.handleIronSourcePlaySound();
            }, this_1);
        };
        var this_1 = this;
        // btn spawn army
        for (var index = 0; index < this.btn_SpawnArmys.length; index++) {
            _loop_1(index);
        }
        ;
        var _loop_2 = function (index) {
            var btn = this_2.btn_BuyArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                // handle buy lv2 army
                if (index === 0) {
                    if (constants_1.Constants.currentCoin >= 60) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv2 = true;
                        constants_1.Constants.enemyDie -= 2;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
                // handle buy lv3 army
                else {
                    if (constants_1.Constants.currentCoin >= 90) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv3 = true;
                        constants_1.Constants.enemyDie -= 3;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
            }, this_2);
        };
        var this_2 = this;
        // btn buy army
        for (var index = 0; index < this.btn_BuyArmys.length; index++) {
            _loop_2(index);
        }
        // btn upgrade
        this.btn_upgrade.on(cc.Node.EventType.TOUCH_START, function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.UpgradeSound);
            if (constants_1.Constants.currentCoin >= 120) {
                console.log("Upgraded");
                constants_1.Constants.isUpgrade = true;
                constants_1.Constants.enemyDie -= 4;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.UpgradeSound);
                _this.btn_upgrade.parent.active = false;
                _this.ps_upgrade.forEach(function (ps) { return ps.resetSystem(); });
                _this.Lv2Troops.forEach(function (troop) { return troop.active = true; });
                _this.Lv1Troops.forEach(function (troop) { return troop.active = false; });
            }
            else {
                console.log("Fail");
            }
        }, this);
        // btn install
        // this.btn_install.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hidemask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_BuyArmys", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], TouchAreaController.prototype, "ps_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv1Troops", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv2Troops", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBbUpDO1FBbEpDLFlBQVk7UUFFWixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBSTdCLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBK0c1QixDQUFDO0lBN0dXLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseURBQXlEO0lBQzNELENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUVFLFdBQVc7UUFDWCw0RkFBNEY7UUFIOUYsaUJBZ0dDO2dDQTFGVSxLQUFLO1lBQ1osSUFBTSxHQUFHLEdBQUcsT0FB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IElyb25Tb3VyY2UgZnJvbSBcIi4uL0RhdGEvSXJvblNvdXJjZVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShJcm9uU291cmNlKVxyXG4gIElyb25Tb3VyY2U6IElyb25Tb3VyY2UgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGlkZW1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGJ0bl9TcGF3bkFybXlzOiBjYy5Ob2RlW10gPSBbXTtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBidG5faW5zdGFsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYnRuX3VwZ3JhZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGJ0bl9CdXlBcm15czogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICBwc191cGdyYWRlOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBMdjFUcm9vcHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgTHYyVHJvb3BzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAvLyB0aGlzLkx2MlRyb29wcy5mb3JFYWNoKHRyb29wID0+IHRyb29wLmFjdGl2ZSA9IGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gaGlkZW1hc2tcclxuICAgIC8vIHRoaXMuaGlkZW1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gYnRuIHNwYXduIGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9TcGF3bkFybXlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLmJ0bl9TcGF3bkFybXlzW2luZGV4XTtcclxuICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNMb29zZSB8fCBDb25zdGFudHMuaXNXaW4gfHwgdGhpcy5DVEEuYWN0aXZlKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsaWNrU291bmQpO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuc3Bhd25Bcm15KGluZGV4ICsgMSk7XHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBidG4gYnV5IGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9CdXlBcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fQnV5QXJteXNbaW5kZXhdO1xyXG4gICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGJ1eSBsdjIgYXJteVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYnV5U291bmQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXllZFwiKTtcclxuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgLT0gMjtcclxuICAgICAgICAgICAgdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleCArIDFdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBidXkgbHYzIGFybXlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuY3VycmVudENvaW4gPj0gOTApIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJ1eVNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnV5ZWRcIik7XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15RGllIC09IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX1NwYXduQXJteXNbaW5kZXggKyAxXS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBidG4gdXBncmFkZVxyXG4gICAgdGhpcy5idG5fdXBncmFkZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suVXBncmFkZVNvdW5kKTtcclxuICAgICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSAxMjApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZ3JhZGVkXCIpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5lbmVteURpZSAtPSA0O1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5VcGdyYWRlU291bmQpO1xyXG4gICAgICAgIHRoaXMuYnRuX3VwZ3JhZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHNfdXBncmFkZS5mb3JFYWNoKHBzID0+IHBzLnJlc2V0U3lzdGVtKCkpO1xyXG4gICAgICAgIHRoaXMuTHYyVHJvb3BzLmZvckVhY2godHJvb3AgPT4gdHJvb3AuYWN0aXZlID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5MdjFUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB0cm9vcC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgIC8vIGJ0biBpbnN0YWxsXHJcbiAgICAvLyB0aGlzLmJ0bl9pbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.ArmyLv1HitSound = null;
        _this.ArmyLv2HitSound = null;
        _this.ArmyLv3HitSound = null;
        _this.earthQuakeSound = null;
        _this.clickSound = null;
        _this.buySound = null;
        _this.coinSound = null;
        _this.failSound = null;
        _this.winSound = null;
        _this.heliSound = null;
        _this.UpgradeSound = null;
        _this.Lv2_Kinife = null;
        _this.Lv2_Gun = null;
        _this.Lv2_Tank = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        this.normalNetwork(soundName);
    };
    AudioManager.prototype.normalNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "earthQuakeSound":
                    this.earthQuakeSound.play();
                    break;
                case "UpgradeSound":
                    this.UpgradeSound.play();
                    break;
                case "heliSound":
                    this.heliSound.play();
                    break;
                case "ArmyLv1HitSound":
                    this.ArmyLv1HitSound.play();
                    break;
                case "ArmyLv2HitSound":
                    this.ArmyLv2HitSound.play();
                    break;
                case "ArmyLv3HitSound":
                    this.ArmyLv3HitSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "buySound":
                    this.buySound.play();
                    break;
                case "coinSound":
                    this.coinSound.play();
                    break;
                case "failSound":
                    this.failSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "UpgradeSound":
                    this.UpgradeSound.play();
                    break;
                case "Lv2_Kinife":
                    this.Lv2_Kinife.play();
                    break;
                case "Lv2_Gun":
                    this.Lv2_Gun.play();
                    break;
                case "Lv2_Tank":
                    this.Lv2_Tank.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "UpgradeSound":
                this.UpgradeSound.stop();
                break;
            case "earthQuakeSound":
                this.earthQuakeSound.stop();
                break;
            case "heliSound":
                this.heliSound.stop();
                break;
            case "ArmyLv1HitSound":
                this.ArmyLv1HitSound.stop();
                break;
            case "ArmyLv2HitSound":
                this.ArmyLv2HitSound.stop();
                break;
            case "ArmyLv3HitSound":
                this.ArmyLv3HitSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "buySound":
                this.buySound.stop();
                break;
            case "coinSound":
                this.coinSound.stop();
                break;
            case "failSound":
                this.failSound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "UpgradeSound":
                this.UpgradeSound.stop();
                break;
            case "Lv2_Kinife":
                this.Lv2_Kinife.stop();
                break;
            case "Lv2_Gun":
                this.Lv2_Gun.stop();
                break;
            case "Lv2_Tank":
                this.Lv2_Tank.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.UpgradeSound.stop();
        this.Lv2_Kinife.stop();
        this.Lv2_Gun.stop();
        this.Lv2_Tank.stop();
        this.bgSound.stop();
        this.ArmyLv1HitSound.stop();
        this.ArmyLv2HitSound.stop();
        this.ArmyLv3HitSound.stop();
        this.earthQuakeSound.stop();
        this.clickSound.stop();
        this.buySound.stop();
        this.coinSound.stop();
        this.heliSound.stop();
        this.UpgradeSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ArmyLv1HitSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ArmyLv2HitSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ArmyLv3HitSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "earthQuakeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "buySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "coinSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "failSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "winSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "heliSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "UpgradeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Lv2_Kinife", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Lv2_Gun", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Lv2_Tank", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF5S0M7UUF2S0csU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQW1CLElBQUksQ0FBQzs7SUF3SXBDLENBQUM7SUF0SVUsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sb0NBQWEsR0FBckIsVUFBc0IsU0FBUztRQUMzQixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwRSxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNB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LEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ087SUFqQ2YsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXlLaEM7SUFBRCxtQkFBQztDQXpLRCxBQXlLQyxDQXpLeUMsRUFBRSxDQUFDLFNBQVMsR0F5S3JEO2tCQXpLb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBBcm15THYxSGl0U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEFybXlMdjJIaXRTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgQXJteUx2M0hpdFNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBlYXJ0aFF1YWtlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNsaWNrU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJ1eVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjb2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGZhaWxTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGhlbGlTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgVXBncmFkZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgTHYyX0tpbmlmZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgTHYyX0d1bjogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgTHYyX1Rhbms6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxOZXR3b3JrKHNvdW5kTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBub3JtYWxOZXR3b3JrKHNvdW5kTmFtZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJlYXJ0aFF1YWtlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVhcnRoUXVha2VTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVXBncmFkZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGdyYWRlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImhlbGlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVsaVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcm15THYxSGl0U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFybXlMdjFIaXRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJteUx2MkhpdFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Bcm15THYySGl0U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFybXlMdjNIaXRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXJteUx2M0hpdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJidXlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV5U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvaW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29pblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmYWlsU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJVcGdyYWRlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZ3JhZGVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTHYyX0tpbmlmZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTHYyX0tpbmlmZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTHYyX0d1blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTHYyX0d1bi5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTHYyX1RhbmtcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkx2Ml9UYW5rLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVXBncmFkZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVwZ3JhZGVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVhcnRoUXVha2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lYXJ0aFF1YWtlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWxpU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVsaVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJteUx2MUhpdFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFybXlMdjFIaXRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFybXlMdjJIaXRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Bcm15THYySGl0U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcm15THYzSGl0U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuQXJteUx2M0hpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pblNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmFpbFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhaWxTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpblNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpblNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVXBncmFkZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVwZ3JhZGVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkx2Ml9LaW5pZmVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuTHYyX0tpbmlmZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkx2Ml9HdW5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuTHYyX0d1bi5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkx2Ml9UYW5rXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkx2Ml9UYW5rLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5VcGdyYWRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuTHYyX0tpbmlmZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5MdjJfR3VuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkx2Ml9UYW5rLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkFybXlMdjFIaXRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5Bcm15THYySGl0U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuQXJteUx2M0hpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmVhcnRoUXVha2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmJ1eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmNvaW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5oZWxpU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuVXBncmFkZVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/BossController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c056/xdspPmoaGSWmCeGgR', 'BossController');
// Script/Controller/BossController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BossController = /** @class */ (function (_super) {
    __extends(BossController, _super);
    function BossController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.blast1 = null;
        _this.blast2 = null;
        _this.blast3 = null;
        return _this;
    }
    BossController.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.heliSound);
        this.scheduleOnce(function () {
            _this.blast1.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
        }, 0.5);
        this.scheduleOnce(function () {
            _this.blast2.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
        }, 0.7);
        this.scheduleOnce(function () {
            _this.blast3.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
        }, 1);
        cc.tween(this.node)
            .to(1, { scale: constants_1.Constants.scaleBoss, x: -40, y: -30 })
            .call(function () {
            constants_1.Constants.isWin = true;
            constants_1.Constants.isPauseGame = true;
        })
            .start();
    };
    __decorate([
        property(AudioManager_1.default)
    ], BossController.prototype, "AudioManager", void 0);
    __decorate([
        property(sp.Skeleton)
    ], BossController.prototype, "blast1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], BossController.prototype, "blast2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], BossController.prototype, "blast3", void 0);
    BossController = __decorate([
        ccclass
    ], BossController);
    return BossController;
}(cc.Component));
exports.default = BossController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCb3NzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcUNDO1FBbENHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWdCLElBQUksQ0FBQzs7SUEyQi9CLENBQUM7SUF4QmEsOEJBQUssR0FBZjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7YUFDbkQsSUFBSSxDQUFDO1lBQ0YscUJBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNLO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDSztJQVZWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FxQ2xDO0lBQUQscUJBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzJDLEVBQUUsQ0FBQyxTQUFTLEdBcUN2RDtrQkFyQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3NzQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBibGFzdDE6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGJsYXN0Mjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYmxhc3QzOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suaGVsaVNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsYXN0MS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsYXN0Mi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgIH0sIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsYXN0My5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDEsIHtzY2FsZTogQ29uc3RhbnRzLnNjYWxlQm9zcywgeDogLTQwLCB5OiAtMzB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/CoinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f60c4CpqFlH750A1K4ORO4l', 'CoinController');
// Script/Controller/CoinController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinController = /** @class */ (function (_super) {
    __extends(CoinController, _super);
    function CoinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.frameUnlockArmies = [];
        _this.frameUpgrade = null;
        _this.label = null;
        _this.tempEnemyDie = 0;
        _this.isTweenRunning = false;
        return _this;
    }
    CoinController.prototype.start = function () {
    };
    CoinController.prototype.increaseCoin = function (fromValue, toValue) {
        var _this = this;
        if (this.isTweenRunning)
            return;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.coinSound);
        this.label.string = String(fromValue);
        cc.tween(constants_1.Constants)
            .to(0.5, { currentCoin: toValue }, {
            progress: function (start, end, current, t) {
                var newValue = Math.floor(cc.misc.lerp(start, end, t));
                _this.label.string = newValue.toString();
                return newValue;
            },
        })
            .call(function () {
            _this.isTweenRunning = false;
        })
            .start();
    };
    CoinController.prototype.checkUnlockArmy = function () {
        for (var index = 0; index < this.frameUnlockArmies.length; index++) {
            var node = this.frameUnlockArmies[index];
            var cost = node.getChildByName("Label").getComponent(cc.Label);
            if (constants_1.Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            }
            else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    };
    CoinController.prototype.checkEnableFrameUpgrade = function () {
        var node = this.frameUpgrade;
        if (node) {
            var cost = node.getChildByName("Label").getComponent(cc.Label);
            if (constants_1.Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            }
            else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    };
    CoinController.prototype.update = function (dt) {
        this.checkUnlockArmy();
        this.checkEnableFrameUpgrade();
        if (this.tempEnemyDie !== constants_1.Constants.enemyDie) {
            var toValue = constants_1.Constants.enemyDie * 30;
            this.increaseCoin(constants_1.Constants.currentCoin, toValue);
        }
        this.tempEnemyDie = constants_1.Constants.enemyDie;
    };
    __decorate([
        property(AudioManager_1.default)
    ], CoinController.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.Node])
    ], CoinController.prototype, "frameUnlockArmies", void 0);
    __decorate([
        property(cc.Node)
    ], CoinController.prototype, "frameUpgrade", void 0);
    __decorate([
        property(cc.Label)
    ], CoinController.prototype, "label", void 0);
    CoinController = __decorate([
        ccclass
    ], CoinController);
    return CoinController;
}(cc.Component));
exports.default = CoinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDb2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOEVDO1FBNUVHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUlsQyx1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUFpRXBDLENBQUM7SUE5RGEsOEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTSxxQ0FBWSxHQUFuQixVQUFvQixTQUFpQixFQUFFLE9BQWU7UUFBdEQsaUJBa0JDO1FBakJHLElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQy9CLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLENBQUM7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdPLHdDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRSxJQUFHLHFCQUFTLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDN0M7U0FDSjtJQUNMLENBQUM7SUFHTyxnREFBdUIsR0FBL0I7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLElBQUcsSUFBSSxFQUFFO1lBQ0wsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLElBQUcscUJBQVMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3QztTQUNKO0lBQ0wsQ0FBQztJQUdTLCtCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLElBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxxQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUN6QyxJQUFJLE9BQU8sR0FBRyxxQkFBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtTQUNwRDtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQTNFRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3dEQUNXO0lBSWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzZEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSTtJQVZOLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4RWxDO0lBQUQscUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RTJDLEVBQUUsQ0FBQyxTQUFTLEdBOEV2RDtrQkE5RW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgZnJhbWVVbmxvY2tBcm1pZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmcmFtZVVwZ3JhZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICB0ZW1wRW5lbXlEaWU6IG51bWJlciA9IDA7XHJcbiAgICBpc1R3ZWVuUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VDb2luKGZyb21WYWx1ZTogbnVtYmVyLCB0b1ZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1R3ZWVuUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29pblNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBTdHJpbmcoZnJvbVZhbHVlKTtcclxuICAgICAgICBjYy50d2VlbihDb25zdGFudHMpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgY3VycmVudENvaW46IHRvVmFsdWUgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5mbG9vcihjYy5taXNjLmxlcnAoc3RhcnQsIGVuZCwgdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gbmV3VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHdlZW5SdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVW5sb2NrQXJteSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5mcmFtZVVubG9ja0FybWllcy5sZW5ndGg7IGluZGV4KyspIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZnJhbWVVbmxvY2tBcm1pZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmKENvbnN0YW50cy5jdXJyZW50Q29pbiA8IE51bWJlcihjb3N0LnN0cmluZykpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuY29sb3IgPSBjYy5jb2xvcigxMTMsIDExMywgMTEzLCAyNTUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tFbmFibGVGcmFtZVVwZ3JhZGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmZyYW1lVXBncmFkZTtcclxuICAgICAgICBpZihub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvc3QgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmN1cnJlbnRDb2luIDwgTnVtYmVyKGNvc3Quc3RyaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IGNjLmNvbG9yKDExMywgMTEzLCAxMTMsIDI1NSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja1VubG9ja0FybXkoKTtcclxuICAgICAgICB0aGlzLmNoZWNrRW5hYmxlRnJhbWVVcGdyYWRlKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGVtcEVuZW15RGllICE9PSBDb25zdGFudHMuZW5lbXlEaWUpIHtcclxuICAgICAgICAgICAgbGV0IHRvVmFsdWUgPSBDb25zdGFudHMuZW5lbXlEaWUgKiAzMDtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZUNvaW4oQ29uc3RhbnRzLmN1cnJlbnRDb2luLCB0b1ZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRlbXBFbmVteURpZSA9IENvbnN0YW50cy5lbmVteURpZTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
