
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0Msa0JBQVksR0FBaUIsSUFBSSxDQUFDOztRQThCbEMsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQS9CUSw4Q0FBeUIsR0FBaEM7UUFDRSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUdPLDhDQUF5QixHQUFqQztRQUNFLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxGLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0cscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7b0RBQ1c7SUFIZixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0M5QjtJQUFELGlCQUFDO0NBcENELEFBb0NDLENBcEN1QyxFQUFFLENBQUMsU0FBUyxHQW9DbkQ7a0JBcENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXJvblNvdXJjZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=
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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        _this.background = null;
        _this.downloadIcon = null;
        _this.moneyTrayBase = null;
        _this.loadFood = null;
        _this.frameFood = null;
        _this.LayoutOptions = null;
        return _this;
    }
    Responsive.prototype.start = function () {
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
        if (constants_1.Constants.Responsive.isHor) {
            return;
        }
        constants_1.Constants.Responsive.isHor = true;
        cc.director.loadScene("game_Horizontal");
        constants_1.Constants.scaleArmy = 0.5;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        if (constants_1.Constants.Responsive.isHor) {
            return;
        }
        constants_1.Constants.Responsive.isHor = true;
        cc.director.loadScene("game_Horizontal");
        constants_1.Constants.scaleArmy = 0.5;
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
        constants_1.Constants.Responsive.isVer = true;
        cc.director.loadScene("game_IPX");
        constants_1.Constants.scaleArmy = 0.25;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (constants_1.Constants.Responsive.isVer) {
            return;
        }
        constants_1.Constants.Responsive.isVer = true;
        if (height / width > 1.5) {
            // if (width / height >= 0.6 && width / height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            cc.director.loadScene("game_Vertical");
            constants_1.Constants.scaleArmy = 0.25;
        }
        else {
            cc.director.loadScene("game_VerticalIpad");
            constants_1.Constants.scaleArmy = 0.3;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "downloadIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "moneyTrayBase", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "loadFood", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "frameFood", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "LayoutOptions", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBd0pDO1FBdEpHLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDO1FBRzVDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFnSWxDLENBQUM7SUE3SGEsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksS0FBSyxHQUFHLE1BQU0sRUFBRTtZQUNoQixxQkFBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxxQkFBUyxDQUFDLFFBQVEsR0FB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IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb3dubG9hZEljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb25leVRyYXlCYXNlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvYWRGb29kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZnJhbWVGb29kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTGF5b3V0T3B0aW9uczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChoZWlnaHQgLyB3aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICBpZihDb25zdGFudHMuUmVzcG9uc2l2ZS5pc0hvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5pc0hvciA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVfSG9yaXpvbnRhbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC41O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JUYWJsZXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX1RBQkxFVDtcclxuXHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLlJlc3BvbnNpdmUuaXNIb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuaXNIb3IgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX0hvcml6b250YWxcIik7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuNTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoIC8gaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLlJlc3BvbnNpdmUuaXNWZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuaXNWZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX0lQWFwiKTtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4yNTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZihDb25zdGFudHMuUmVzcG9uc2l2ZS5pc1Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5pc1ZlciA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0IC8gd2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgICAgLy8gaWYgKHdpZHRoIC8gaGVpZ2h0ID49IDAuNiAmJiB3aWR0aCAvIGhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX1ZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4yNTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX1ZlcnRpY2FsSXBhZFwiKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.pauseFlag = false;
        return _this;
    }
    Army_1 = Army;
    // enemyCollider: cc.BoxCollider = null;
    Army.prototype.start = function () {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.skin === constants_1.Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === constants_1.Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionStay = function (o, s) {
        if (o.tag === 1 || o.tag === 0) {
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionExit = function (o, s) {
        this.canRun = true;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
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
            constants_1.Constants.isCollideBase = true;
            this.isBase = true;
            this.checkDie();
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            if (this.node.name === "Army_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv2HitSound);
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
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            constants_1.Constants.EnemyBaseHeal -= 0.08;
            return;
        }
        if (this.skin === "ally") {
            constants_1.Constants.EnemyBaseHeal -= 0.05;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.AllyBaseHeal -= 0.05;
        }
    };
    Army.prototype.handleDecreaseHealthArmy = function () {
        // this.enemyCollider.node.getComponent(Army).HealthBar.scaleX -= 0.3;
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.4;
            return;
        }
        if (this.skin === "ally") {
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.allyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
        }
    };
    Army.prototype.die = function () {
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
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
        this.HealthBar.active = false;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.die();
    };
    Army.prototype.checkRun = function () {
        if (this.skin === "ally" && this.canRun && this.isLive) {
            if (this.node.name === "Army_Lv3") {
                var currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 1, currentPos.y, 0);
                return;
            }
            if (this.node.name === "Army" || this.node.name === "Army_Lv2") {
                var currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.5, currentPos.y, 0);
            }
        }
        if (this.skin === "enemy" && this.canRun && this.isLive) {
            var currentPos = this.node.getPosition();
            this.node.position = new cc.Vec3(currentPos.x - 0.5, currentPos.y, 0);
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
            // this.collider.enabled = true;
            this.pauseFlag = false;
        }
    };
    Army.prototype.update = function (dt) {
        this.checkPause();
        if (this.HealthBar.scaleX <= 0 && this.isLive) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBME5DO1FBeE5HLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUE2TS9CLENBQUM7YUExTm9CLElBQUk7SUFjckIsd0NBQXdDO0lBRzlCLG9CQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ3RFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRCwrQkFBZ0IsR0FB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhlYWx0aEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgc2tpbjogc3RyaW5nID0gXCJcIjtcclxuICAgIGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0Jhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIHBhdXNlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gZW5lbXlDb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnRcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJBdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KEF1ZGlvTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvOiBjYy5Cb3hDb2xsaWRlciwgcykge1xyXG4gICAgICAgIGlmKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbiA9PT0gQ29uc3RhbnRzLkFybXlTa2luLkFsbHkgJiYgdGhpcy5zZXRDb2xsaXNpb25Gb3JBbGx5KG8pO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4gPT09IENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSAmJiB0aGlzLnNldENvbGxpc2lvbkZvckVuZW15KG8pO1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25TdGF5KG86IGNjLkJveENvbGxpZGVyLCBzKSB7XHJcbiAgICAgICAgaWYoby50YWcgPT09IDEgfHwgby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvLCBzKSB7XHJcbiAgICAgICAgdGhpcy5jYW5SdW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckFsbHkobzogY2MuQm94Q29sbGlkZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBoaXQgZW5lbXkgYmFzZSB8fCBlbmVteSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MkhpdFNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RvbmVBdHRhY2tBbmltKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaXQgZW5lbXkgYmFzZVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDb2xsaWRlQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb2xsaXNpb25Gb3JFbmVteShvOiBjYy5Cb3hDb2xsaWRlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGhpdCBhbGx5IGJhc2UgfHwgYWxseSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MkhpdFNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RvbmVBdHRhY2tBbmltKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaXQgYWxseSBiYXNlXHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEb25lQXR0YWNrQW5pbSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IHNwLnNwaW5lLlRyYWNrRW50cnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiQXR0YWNrXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCYXNlXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5oYW5kbGVEZWNyZWFzZUhlYWx0aEFybXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjNcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYzSGl0U291bmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICBpZih0aGlzLnNraW4gPT09IFwiYWxseVwiICYmIHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wODtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURlY3JlYXNlSGVhbHRoQXJteSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjM7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjNcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjNIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC40O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZGllKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkRpZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoQXJteSkuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZmlyc3QgYWxseS9lbmVteSBpbiBjb25zdGFudCBhcnJheTtcclxuICAgICAgICBpZih0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgKz0gMTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRGllKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNMaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHRoaXMubm9kZS5kZXN0cm95KCkpXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1J1bigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLmNhblJ1biAmJiB0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoY3VycmVudFBvcy54ICsgMSwgY3VycmVudFBvcy55LCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteVwiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoY3VycmVudFBvcy54ICsgMC41LCBjdXJyZW50UG9zLnksIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIHRoaXMuY2FuUnVuICYmIHRoaXMuaXNMaXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKGN1cnJlbnRQb3MueCAtIDAuNSwgY3VycmVudFBvcy55LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tQYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50cy5pc1BhdXNlR2FtZSAmJiAhdGhpcy5wYXVzZUZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tQYXVzZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwICYmIHRoaXMuaXNMaXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEaWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja1J1bigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        _this.Boss = null;
        // state
        _this.isCollideBaseFlag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        cc.view.setResizeCallback(function () {
            _this.handleYourOrientation();
        });
    };
    GamePlay.prototype.handleYourOrientation = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            cc.director.loadScene("game_Horizontal");
            constants_1.Constants.scaleArmy = 0.5;
        }
        else {
            var width = cc.view.getFrameSize().width;
            var height = cc.view.getFrameSize().height;
            if (width / height < 0.5) {
                // IPX
                cc.director.loadScene("game_IPX");
                constants_1.Constants.scaleArmy = 0.3;
            }
            else {
                // other
                if (height / width > 1.5) {
                    cc.director.loadScene("game_Vertical");
                    constants_1.Constants.scaleArmy = 0.3;
                }
                else {
                    cc.director.loadScene("game_VerticalIpad");
                    constants_1.Constants.scaleArmy = 0.35;
                }
            }
        }
    };
    GamePlay.prototype.spawnArmy = function (index) {
        switch (index) {
            case 1:
                !constants_1.Constants.isStartGame && this.LoadFoodController.increaseFood();
                !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
                constants_1.Constants.isStartGame = true;
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
    GamePlay.prototype.update = function (dt) {
        var _this = this;
        if (constants_1.Constants.isCollideBase && !this.isCollideBaseFlag) {
            this.isCollideBaseFlag = true;
            this.Boss.active = true;
            this.scheduleOnce(function () {
                _this.CTA.active = true;
            }, 1.5);
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
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Boss", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0hDO1FBOUdDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUU5QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixRQUFRO1FBQ1IsdUJBQWlCLEdBQVksS0FBSyxDQUFDOztJQStGckMsQ0FBQztJQTVGVyx5QkFBTSxHQUFoQjtRQUNFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGtEQUFrRDtRQUNsRCw0Q0FBNEM7SUFDOUMsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFD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UjtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUEzQixpQkFRQztRQVBDLElBQUkscUJBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNSO0lBQ0gsQ0FBQztJQTVHRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7d0RBQ2lCO0lBRTlDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7cURBQ2M7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBZEYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdINUI7SUFBRCxlQUFDO0NBaEhELEFBZ0hDLENBaEhxQyxFQUFFLENBQUMsU0FBUyxHQWdIakQ7a0JBaEhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTG9hZEZvb2RDb250cm9sbGVyIGZyb20gXCIuL0xvYWRGb29kQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU3Bhd25Db250cm9sbGVyIGZyb20gXCIuL1NwYXduQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTG9hZEZvb2RDb250cm9sbGVyKVxyXG4gIExvYWRGb29kQ29udHJvbGxlcjogTG9hZEZvb2RDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoU3Bhd25Db250cm9sbGVyKVxyXG4gIFNwYXduQ29udHJvbGxlcjogU3Bhd25Db250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQm9zczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNDb2xsaWRlQmFzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICBsZXQgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICBwaHlzaWNzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgbGV0IGNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuYmdTb3VuZC52b2x1bWUgPSAwLjU7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlWW91ck9yaWVudGF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZVlvdXJPcmllbnRhdGlvbigpIHtcclxuICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV9Ib3Jpem9udGFsXCIpO1xyXG4gICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC41O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICBpZiAod2lkdGggLyBoZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAvLyBJUFhcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX0lQWFwiKTtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG90aGVyXHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX1ZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuMztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV9WZXJ0aWNhbElwYWRcIik7XHJcbiAgICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4zNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNwYXduQXJteShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuTG9hZEZvb2RDb250cm9sbGVyLmluY3JlYXNlRm9vZCgpO1xyXG4gICAgICAgICFDb25zdGFudHMuaXNTdGFydEdhbWUgJiYgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25FbmVtaWVzKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjFcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gMykge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gMztcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIC8vIHNwYXduIGFybXkgbHYyXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5mb29kID49IDQgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mikge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gNDtcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIC8vIHNwYXduIGFybXkgbHYzXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5mb29kID49IDUgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mykge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gNTtcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIG5vdCBzcGF3blwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNDb2xsaWRlQmFzZSAmJiAhdGhpcy5pc0NvbGxpZGVCYXNlRmxhZykge1xyXG4gICAgICB0aGlzLmlzQ29sbGlkZUJhc2VGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Cb3NzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9LCAxLjUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
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
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        _this.hidemask = null;
        _this.btn_BuyArmys = [];
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
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
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                _this.GamePlay.spawnArmy(index + 1);
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
                    if (constants_1.Constants.currentCoin >= 50) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv2 = true;
                        constants_1.Constants.enemyDie -= 5;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
                // handle buy lv3 army
                else {
                    if (constants_1.Constants.currentCoin >= 100) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv3 = true;
                        constants_1.Constants.enemyDie -= 10;
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
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hidemask", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_BuyArmys", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBdUdDO1FBdEdDLFlBQVk7UUFFWixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7O0lBa0YvQixDQUFDO0lBL0VXLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBRUUsV0FBVztRQUNYLDRGQUE0RjtRQUg5RixpQkFtRUM7Z0NBNURVLEtBQUs7WUFDWixJQUFNLEdBQUcsR0FBRyxPQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDcEMsSUFBRyxxQkFBUyxDQUFDLFNBQVMsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFD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UztJQXJCbEIsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0F1Ry9CO0lBQUQsMEJBQUM7Q0F2R0QsQUF1R0MsQ0F2R3dDLEVBQUUsQ0FBQyxTQUFTLEdBdUdwRDtBQXZHWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IElyb25Tb3VyY2UgZnJvbSBcIi4uL0RhdGEvSXJvblNvdXJjZVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShJcm9uU291cmNlKVxyXG4gIElyb25Tb3VyY2U6IElyb25Tb3VyY2UgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgYnRuX1NwYXduQXJteXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJ0bl9pbnN0YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoaWRlbWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgYnRuX0J1eUFybXlzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBoaWRlbWFza1xyXG4gICAgLy8gdGhpcy5oaWRlbWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcblxyXG4gICAgLy8gYnRuIHNwYXduIGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9TcGF3bkFybXlzLmxlbmd0aDsgaW5kZXgrKykgeyAgICAgICAgXHJcbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnRuX1NwYXduQXJteXNbaW5kZXhdO1xyXG4gICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICBpZihDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LnNwYXduQXJteShpbmRleCArIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuSXJvblNvdXJjZS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gYnRuIGJ1eSBhcm15XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5idG5fQnV5QXJteXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblxyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLmJ0bl9CdXlBcm15c1tpbmRleF07XHJcbiAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBidXkgbHYyIGFybXlcclxuICAgICAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYoQ29uc3RhbnRzLmN1cnJlbnRDb2luID49IDUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5idXlTb3VuZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ1eWVkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MiA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5lbmVteURpZSAtPSA1O1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaGFuZGxlIGJ1eSBsdjMgYXJteVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYoQ29uc3RhbnRzLmN1cnJlbnRDb2luID49IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYnV5U291bmQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ1eWVkXCIpO1xyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MyA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5lbmVteURpZSAtPSAxMDtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLSBjYW4gbm90IGJ1eVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJ0biBpbnN0YWxsXHJcbiAgICAvLyB0aGlzLmJ0bl9pbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
            .to(1, { scaleX: 1 })
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
        if (constants_1.Constants.isPauseGame)
            return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxMb2FkRm9vZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBZ0VDO1FBN0RHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQWUsRUFBRSxDQUFDO1FBRTNCLGdCQUFVLEdBQWMsRUFBRSxDQUFDOztJQXNEL0IsQ0FBQztJQXBEYSxrQ0FBSyxHQUFmO1FBQ0ksOENBQThDO0lBQ2xELENBQUM7SUFHTSx5Q0FBWSxHQUFuQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUcscUJBQVMsQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUVqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNsQixJQUFJLENBQUM7WUFDRixxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdPLDRDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsRCxJQUFHLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDckM7Z0JBQ0QsSUFBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNyQztnQkFDRCxJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3JDO2FBQ0o7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLElBQUcsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWU7b0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNsRixJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBR1MsbUNBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFHLHFCQUFTLENBQUMsV0FBVztZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUE1REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lEQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNPO0lBVlYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FnRXRDO0lBQUQseUJBQUM7Q0FoRUQsQUFnRUMsQ0FoRStDLEVBQUUsQ0FBQyxTQUFTLEdBZ0UzRDtrQkFoRW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRm9vZENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxyXG4gICAgdW5pdENvc3RzOiBjYy5MYWJlbFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgdW5pdEZyYW1lczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlRm9vZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc2NhbGVYID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vdmVybGF5KVxyXG4gICAgICAgIC50bygxLCB7c2NhbGVYOiAxfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5mb29kICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VGb29kKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0VuYWJsZUNvc3QoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudW5pdENvc3RzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMudW5pdENvc3RzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYoTnVtYmVyKHRoaXMubGFiZWwuc3RyaW5nKSA+PSBOdW1iZXIobGFiZWwuc3RyaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IDEgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMiAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RnJhbWVzW2luZGV4XS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMiAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzKSB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFN0cmluZyhDb25zdGFudHMuZm9vZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tFbmFibGVDb3N0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
        return _this;
    }
    SpawnController.prototype.start = function () {
        if (constants_1.Constants.enemyArmies[0])
            constants_1.Constants.enemyArmies.splice(0, 1);
        this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 2);
    };
    SpawnController.prototype.SpawnEnemies = function () {
        this.schedule(function () {
            if (constants_1.Constants.isPauseGame)
                return;
            this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 1);
        }, 4, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 3);
        var newArmy;
        // create Army
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
            default:
                break;
        }
        constants_1.Constants.enemyArmies.push(newArmy);
        // caculate Scale
        newArmy.scaleX = -constants_1.Constants.scaleArmy;
        newArmy.scaleY = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.EnemyPoints[random];
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        newArmy.getComponent(Army_1.default).skin = skin;
        newArmy.group = "Enemy";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
    };
    SpawnController.prototype.SpawnPlayerArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 3);
        var newArmy;
        // create Army
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
        constants_1.Constants.allyArmies.push(newArmy);
        console.log("Allies:" + constants_1.Constants.allyArmies.length);
        // caculate Scale
        newArmy.scale = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.AllyPoints[random];
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        newArmy.getComponent(Army_1.default).skin = skin;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTcGF3bkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHNDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXdHQztRQXJHRyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQzs7SUE0Ri9CLENBQUM7SUF6RmEsK0JBQUssR0FBZjtRQUNJLElBQUkscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQUUscUJBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR00sc0NBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxxQkFBUyxDQUFDLFdBQVc7Z0JBQUUsT0FBTztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHTSx3Q0FBYyxHQUFyQixVQUFzQixJQUFZLEVBQUUsS0FBYTtRQUM3QyxJQUFJLE1BQU0sR0FB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QUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3pCLENBQUM7SUFsR0Q7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7dURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0RBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFaVixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd0duQztJQUFELHNCQUFDO0NBeEdELEFBd0dDLENBeEc0QyxFQUFFLENBQUMsU0FBUyxHQXdHeEQ7a0JBeEdvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBcm15IGZyb20gXCIuLi9PdGhlci9Bcm15XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bhd25Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgQWxseVBvaW50czogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRW5lbXlQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15X0x2MTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15X0x2MjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15X0x2MzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0pIENvbnN0YW50cy5lbmVteUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgdGhpcy5TcGF3bkVuZW15QXJteShDb25zdGFudHMuQXJteVNraW4uRW5lbXksIDIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU3Bhd25FbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlzUGF1c2VHYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15LCAxKTtcclxuICAgICAgICB9LCA0LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC4yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduRW5lbXlBcm15KHNraW46IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDAsIDMpXHJcbiAgICAgICAgbGV0IG5ld0FybXk6IGNjLk5vZGU7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBBcm15XHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2MSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjIpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbnN0YW50cy5lbmVteUFybWllcy5wdXNoKG5ld0FybXkpO1xyXG5cclxuICAgICAgICAvLyBjYWN1bGF0ZSBTY2FsZVxyXG4gICAgICAgIG5ld0FybXkuc2NhbGVYID0gLUNvbnN0YW50cy5zY2FsZUFybXk7XHJcbiAgICAgICAgbmV3QXJteS5zY2FsZVkgPSBDb25zdGFudHMuc2NhbGVBcm15O1xyXG5cclxuICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5FbmVteVBvaW50c1tyYW5kb21dO1xyXG4gICAgICAgIHBvaW50LnBhcmVudC5hZGRDaGlsZChuZXdBcm15KTtcclxuICAgICAgICBuZXdBcm15LnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgICAgICBuZXdBcm15LnNldFBvc2l0aW9uKHBvaW50LmdldFBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2tpbiAmIGdyb3VwXHJcbiAgICAgICAgbmV3QXJteS5nZXRDb21wb25lbnQoQXJteSkuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiRW5lbXlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTcGF3blBsYXllckFybXkoc2tpbjogc3RyaW5nLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMCwgMylcclxuICAgICAgICBsZXQgbmV3QXJteTogY2MuTm9kZTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBBcm15XHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2MSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5wdXNoKG5ld0FybXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxsaWVzOlwiICsgQ29uc3RhbnRzLmFsbHlBcm1pZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gY2FjdWxhdGUgU2NhbGVcclxuICAgICAgICBuZXdBcm15LnNjYWxlID0gQ29uc3RhbnRzLnNjYWxlQXJteTtcclxuXHJcbiAgICAgICAgLy8gc2V0IFBvc1xyXG4gICAgICAgIGxldCBwb2ludCA9IHRoaXMuQWxseVBvaW50c1tyYW5kb21dO1xyXG4gICAgICAgIHBvaW50LnBhcmVudC5hZGRDaGlsZChuZXdBcm15KTtcclxuICAgICAgICBuZXdBcm15LnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgICAgICBuZXdBcm15LnNldFBvc2l0aW9uKHBvaW50LmdldFBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2tpbiAmIGdyb3VwXHJcbiAgICAgICAgbmV3QXJteS5nZXRDb21wb25lbnQoQXJteSkuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiQWxseVwiO1xyXG4gICAgICAgIGxldCBzcGluZSA9IG5ld0FybXkuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHNwaW5lLnNldFNraW4oc2tpbik7XHJcbiAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMC45XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
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
            // cc.tween(this.rect)
            // .to(0.5, {scale: 0.4})
            // .call(() => {
            //     this.activeTweenForBtn();
            // })
            // .start();
        }, 1.5);
        this.btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        // this.overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQ1RBLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUE4RDtBQUM5RCwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUVDO1FBdEVHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBc0Q3QixDQUFDO0lBbkRhLHdCQUFLLEdBQWY7UUFBQSxpQkF3Q0M7UUF2Q0csRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUM7YUFDdkIsS0FBSyxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFHLHFCQUFTLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFHRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBRyxxQkFBUyxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUQ7WUFDRCxzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLGdCQUFnQjtZQUNoQixnQ0FBZ0M7WUFDaEMsS0FBSztZQUNMLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBGLGlCQUFpQjtRQUNqQiwyRkFBMkY7SUFDL0YsQ0FBQztJQUdPLG9DQUFpQixHQUF6QjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNqQixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN4QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQ3pELENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBckVEO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQW5CUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUU1QjtJQUFELGVBQUM7Q0F6RUQsQUF5RUMsQ0F6RXFDLEVBQUUsQ0FBQyxTQUFTLEdBeUVqRDtrQkF6RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlY3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBOZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHJ5QWdhaW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vdmVybGF5KVxyXG4gICAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAxMDB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVHdlZW5Gb3JCdG4oKTtcclxuXHJcbiAgICAgICAgdGhpcy50cnlBZ2Fpbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLk5leHQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5idG4ub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50cy5pc0xvb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QWdhaW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5OZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QWdhaW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuTmV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG4ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy50cnlBZ2Fpbi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLk5leHQub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmlzTG9vc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5mYWlsU291bmQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndpblNvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLnJlY3QpXHJcbiAgICAgICAgICAgIC8vIC50bygwLjUsIHtzY2FsZTogMC40fSlcclxuICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hY3RpdmVUd2VlbkZvckJ0bigpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyAuc3RhcnQoKTtcclxuICAgICAgICB9LCAxLjUpXHJcblxyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgICAgIC8vIHRoaXMub3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVUd2VlbkZvckJ0bigpOiB2b2lkIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bilcclxuICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG4pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICkuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
    CoinController.prototype.update = function (dt) {
        this.checkUnlockArmy();
        if (this.tempEnemyDie !== constants_1.Constants.enemyDie) {
            var toValue = constants_1.Constants.enemyDie * 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDb2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOERDO1FBNURHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUlsQyx1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUFtRHBDLENBQUM7SUFoRGEsOEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTSxxQ0FBWSxHQUFuQixVQUFvQixTQUFpQixFQUFFLE9BQWU7UUFBdEQsaUJBa0JDO1FBakJHLElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQy9CLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLENBQUM7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdPLHdDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRSxJQUFHLHFCQUFTLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDN0M7U0FDSjtJQUNMLENBQUM7SUFHUywrQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUsscUJBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDekMsSUFBSSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDcEQ7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUEzREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUlsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2REFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNJO0lBUk4sY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQThEbEM7SUFBRCxxQkFBQztDQTlERCxBQThEQyxDQTlEMkMsRUFBRSxDQUFDLFNBQVMsR0E4RHZEO2tCQTlEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBmcmFtZVVubG9ja0FybWllczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHRlbXBFbmVteURpZTogbnVtYmVyID0gMDtcclxuICAgIGlzVHdlZW5SdW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBpbmNyZWFzZUNvaW4oZnJvbVZhbHVlOiBudW1iZXIsIHRvVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHdlZW5SdW5uaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb2luU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFN0cmluZyhmcm9tVmFsdWUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKENvbnN0YW50cylcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBjdXJyZW50Q29pbjogdG9WYWx1ZSB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBNYXRoLmZsb29yKGNjLm1pc2MubGVycChzdGFydCwgZW5kLCB0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBuZXdWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUd2VlblJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tVbmxvY2tBcm15KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmZyYW1lVW5sb2NrQXJtaWVzLmxlbmd0aDsgaW5kZXgrKykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5mcmFtZVVubG9ja0FybWllc1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNvc3QgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmN1cnJlbnRDb2luIDwgTnVtYmVyKGNvc3Quc3RyaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IGNjLmNvbG9yKDExMywgMTEzLCAxMTMsIDI1NSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja1VubG9ja0FybXkoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy50ZW1wRW5lbXlEaWUgIT09IENvbnN0YW50cy5lbmVteURpZSkge1xyXG4gICAgICAgICAgICBsZXQgdG9WYWx1ZSA9IENvbnN0YW50cy5lbmVteURpZSAqIDEwO1xyXG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlQ29pbihDb25zdGFudHMuY3VycmVudENvaW4sIHRvVmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGVtcEVuZW15RGllID0gQ29uc3RhbnRzLmVuZW15RGllO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        // this.ironSourceNetwork(soundName);
        this.normalNetwork(soundName);
    };
    AudioManager.prototype.ironSourceNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && constants_1.Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
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
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.ArmyLv1HitSound.stop();
        this.ArmyLv2HitSound.stop();
        this.ArmyLv3HitSound.stop();
        this.earthQuakeSound.stop();
        this.clickSound.stop();
        this.buySound.stop();
        this.coinSound.stop();
        this.heliSound.stop();
        // this.failSound.stop();
        // this.winSound.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE0SUM7UUExSUcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFtQixJQUFJLENBQUM7O0lBb0hyQyxDQUFDO0lBbEhVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLGFBQWE7UUFDYixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sd0NBQWlCLEdBQXpCLFVBQTBCLFNBQVM7UUFDL0IsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3ZFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtTQUNKO0lBQ0wsQ0FB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LFdBQVcsQ0FBQzttREFDUTtJQXhCaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTRJaEM7SUFBRCxtQkFBQztDQTVJRCxBQTRJQyxDQTVJeUMsRUFBRSxDQUFDLFNBQVMsR0E0SXJEO2tCQTVJb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBBcm15THYxSGl0U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEFybXlMdjJIaXRTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgQXJteUx2M0hpdFNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBlYXJ0aFF1YWtlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNsaWNrU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJ1eVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjb2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGZhaWxTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGhlbGlTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBpcm9uc291cmNlXHJcbiAgICAgICAgLy8gdGhpcy5pcm9uU291cmNlTmV0d29yayhzb3VuZE5hbWUpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsTmV0d29yayhzb3VuZE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXJvblNvdXJjZU5ldHdvcmsoc291bmROYW1lKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5vcm1hbE5ldHdvcmsoc291bmROYW1lKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImVhcnRoUXVha2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFydGhRdWFrZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaGVsaVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVsaVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJteUx2MUhpdFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Bcm15THYxSGl0U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFybXlMdjJIaXRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXJteUx2MkhpdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcm15THYzSGl0U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFybXlMdjNIaXRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnV5U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1eVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjb2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvaW5Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmFpbFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndpblNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVhcnRoUXVha2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lYXJ0aFF1YWtlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaGVsaVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxpU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJteUx2MUhpdFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFybXlMdjFIaXRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFybXlMdjJIaXRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Bcm15THYySGl0U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcm15THYzSGl0U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuQXJteUx2M0hpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29pblNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmFpbFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhaWxTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpblNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpblNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkFybXlMdjFIaXRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5Bcm15THYySGl0U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuQXJteUx2M0hpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmVhcnRoUXVha2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmJ1eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmNvaW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5oZWxpU291bmQuc3RvcCgpO1xyXG4gICAgICAgIC8vIHRoaXMuZmFpbFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAvLyB0aGlzLndpblNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
        return _this;
    }
    BaseController.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWlEQztRQS9DRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7SUF1QzFCLENBQUM7SUFwQ2EsOEJBQUssR0FBZjtJQUVBLENBQUM7SUFHUywrQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRTtZQUNyRCxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRTtnQkFDN0IscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHFCQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcscUJBQVMsQ0FBQyxZQUFZLENBQUM7U0FDbEQ7UUFFRCxJQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDcEQsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUU7Z0JBQzdCLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDN0IscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxxQkFBUyxDQUFDLGFBQWEsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO29EQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNFO0lBVkwsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWlEbEM7SUFBRCxxQkFBQztDQWpERCxBQWlEQyxDQWpEMkMsRUFBRSxDQUFDLFNBQVMsR0FpRHZEO2tCQWpEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhc2VMb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGVhbHRoQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBiYXNlU2lkZTogU3RyaW5nID0gXCJcIjtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmJhc2VTaWRlID09PSBcIlBsYXllclwiICYmICFDb25zdGFudHMuaXNIYXNSZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5IZWFsdGhCYXIuc2NhbGVYIDwgMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGFzUmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNMb29zZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhlYWx0aEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZUxvc2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENoaWxkQnlOYW1lKFwiSGVhbEJhclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5IZWFsdGhCYXIuc2NhbGVYID0gQ29uc3RhbnRzLkFsbHlCYXNlSGVhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYmFzZVNpZGUgPT09IFwiRW5lbXlcIiAmJiAhQ29uc3RhbnRzLmlzSGFzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8IDAuMDUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0hhc1Jlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlTG9zZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZWFydGhRdWFrZVNvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDaGlsZEJ5TmFtZShcIkhlYWxCYXJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVQbGF5LkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA9IENvbnN0YW50cy5FbmVteUJhc2VIZWFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
