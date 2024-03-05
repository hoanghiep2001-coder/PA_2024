
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
        _this.xitNuocSound = null;
        _this.nhoMun1Sound = null;
        _this.nhoMun2Sound = null;
        _this.nhoMun3Sound = null;
        _this.completeSound = null;
        _this.conClearSound = null;
        _this.moveItemSound = null;
        _this.woaAnimeSound = null;
        _this.girlScreamSound = null;
        _this.dirtySound = null;
        _this.wormBgSound = null;
        _this.cleanSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        if (constants_1.Constants.ironSource.SoundState && constants_1.Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "wormBgSound":
                    this.wormBgSound.play();
                    break;
                case "cleanSound":
                    this.cleanSound.play();
                    break;
                case "xitNuocSound":
                    this.xitNuocSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "nhoMun3Sound":
                    this.nhoMun3Sound.play();
                    break;
                case "completeSound":
                    this.completeSound.play();
                    break;
                case "conClearSound":
                    this.conClearSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                case "girlScreamSound":
                    this.girlScreamSound.play();
                    break;
                case "dirtySound":
                    this.dirtySound.play();
                    break;
                default:
                    break;
            }
        }
        // if (Constants.ironSource.SoundState) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "wormBgSound":
        //             this.wormBgSound.play();
        //             break;
        //             case "cleanSound":
        //                 this.cleanSound.play();
        //                 break;
        //         case "xitNuocSound":
        //             this.xitNuocSound.play();
        //             break;
        //         case "nhoMun1Sound":
        //             this.nhoMun1Sound.play();
        //             break;
        //         case "nhoMun2Sound":
        //             this.nhoMun2Sound.play();
        //             break;
        //         case "nhoMun3Sound":
        //             this.nhoMun3Sound.play();
        //             break;
        //         case "completeSound":
        //             this.completeSound.play();
        //             break;
        //         case "conClearSound":
        //             this.conClearSound.play();
        //             break;
        //         case "moveItemSound":
        //             this.moveItemSound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         case "girlScreamSound":
        //             this.girlScreamSound.play();
        //             break;
        //         case "dirtySound":
        //             this.dirtySound.play();
        //             break;
        //         default:
        //             break;
        //     }
        // }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "wormBgSound":
                this.wormBgSound.stop();
                break;
            case "cleanSound":
                this.cleanSound.stop();
                break;
            case "xitNuocSound":
                this.xitNuocSound.stop();
                break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "nhoMun3Sound":
                this.nhoMun3Sound.stop();
                break;
            case "completeSound":
                this.completeSound.stop();
                break;
            case "conClearSound":
                this.conClearSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "girlScreamSound":
                this.girlScreamSound.stop();
                break;
            case "dirtySound":
                this.dirtySound.stop();
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.wormBgSound.stop();
        this.xitNuocSound.stop();
        this.cleanSound.stop();
        this.nhoMun1Sound.stop();
        this.nhoMun2Sound.stop();
        this.nhoMun3Sound.stop();
        this.completeSound.stop();
        this.conClearSound.stop();
        this.moveItemSound.stop();
        this.girlScreamSound.stop();
        this.dirtySound.stop();
        this.woaAnimeSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "xitNuocSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun1Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun2Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun3Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "completeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "conClearSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "moveItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaAnimeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "girlScreamSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "dirtySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "wormBgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "cleanSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyTEM7UUF6TEcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDOztJQStKdEMsQ0FBQztJQTdKVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixhQUFhO1FBQ2IsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3ZFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssYUFBYTtvQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixNQUFN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LENBQUMsU0FBUyxHQTJMckQ7a0JBM0xvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBzb3VuZCBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHhpdE51b2NTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbmhvTXVuMVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBuaG9NdW4yU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIG5ob011bjNTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY29tcGxldGVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY29uQ2xlYXJTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbW92ZUl0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd29hQW5pbWVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgZ2lybFNjcmVhbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkaXJ0eVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB3b3JtQmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY2xlYW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBpcm9uc291cmNlXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvcm1CZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JtQmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsZWFuU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwieGl0TnVvY1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aXROdW9jU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5ob011bjFTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuaG9NdW4yU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmhvTXVuM1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uaG9NdW4zU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbkNsZWFyU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbkNsZWFyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdmVJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImdpcmxTY3JlYW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2lybFNjcmVhbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXJ0eVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIC8vICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIndvcm1CZ1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53b3JtQmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSBcImNsZWFuU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jbGVhblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwieGl0TnVvY1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy54aXROdW9jU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIm5ob011bjFTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJuaG9NdW4yU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwibmhvTXVuM1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5uaG9NdW4zU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImNvbXBsZXRlU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImNvbkNsZWFyU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbkNsZWFyU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIm1vdmVJdGVtU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImdpcmxTY3JlYW1Tb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZ2lybFNjcmVhbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJkaXJ0eVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b3JtQmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JtQmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGVhblNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhblNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInhpdE51b2NTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54aXROdW9jU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuaG9NdW4xU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibmhvTXVuMlNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm5ob011bjNTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uaG9NdW4zU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25DbGVhclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbkNsZWFyU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnaXJsU2NyZWFtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2lybFNjcmVhbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlydHlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid29hQW5pbWVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndvcm1CZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnhpdE51b2NTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhblNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm5ob011bjFTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5uaG9NdW4yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubmhvTXVuM1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY29uQ2xlYXJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmdpcmxTY3JlYW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndvYUFuaW1lU291bmQuc3RvcCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==