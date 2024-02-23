
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
        _this.openDoorSound = null;
        _this.knockDoorSound = null;
        _this.screamSound = null;
        _this.crySound = null;
        _this.woaAnimeSound = null;
        _this.clickSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // if (Constants.ironSource.SoundState) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "openDoorSound":
        //             this.openDoorSound.play();
        //             break;
        //             case "clickSound":
        //                 this.clickSound.play();
        //                 break;
        //         case "knockDoorSound":
        //             this.knockDoorSound.play();
        //             break;
        //         case "screamSound":
        //             this.screamSound.play();
        //             break;
        //         case "crySound":
        //             this.crySound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         default:
        //             break;
        //     }
        // }
        // ironsource
        if (constants_1.Constants.ironSource.SoundState && constants_1.Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "openDoorSound":
                    this.openDoorSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "knockDoorSound":
                    this.knockDoorSound.play();
                    break;
                case "screamSound":
                    this.screamSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.switchVolume = function (soundName, volume) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.volume = volume;
                break;
            case "openDoorSound":
                this.openDoorSound.volume = volume;
                break;
            case "clickSound":
                this.clickSound.volume = volume;
                break;
            case "knockDoorSound":
                this.knockDoorSound.volume = volume;
                break;
            case "screamSound":
                this.screamSound.volume = volume;
                break;
            case "crySound":
                this.crySound.volume = volume;
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.volume = volume;
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "openDoorSound":
                this.openDoorSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "knockDoorSound":
                this.knockDoorSound.stop();
                break;
            case "screamSound":
                this.screamSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
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
        this.openDoorSound.stop();
        this.knockDoorSound.stop();
        this.screamSound.stop();
        this.crySound.stop();
        this.woaAnimeSound.stop();
        this.clickSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "openDoorSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "knockDoorSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "screamSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "crySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaAnimeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtSkM7UUFqSkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBbUl0QyxDQUFDO0lBaklVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLHlDQUF5QztRQUN6QywyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLHlDQUF5QztRQUN6QyxxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLDBDQUEwQztRQUMxQyx5QkFBeUI7UUFDekIsaUNBQWlDO1FBQ2pDLDBDQUEwQztRQUMxQyxxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLHVDQUF1QztRQUN2QyxxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLG9DQUFvQztRQUNwQyxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLHlDQUF5QztRQUN6QyxxQkFBcUI7UUFFckIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixRQUFRO1FBQ1IsSUFBSTtRQUVKLGFBQWE7UUFDYixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxxQkFBUyxDQUFDLFVB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LENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBOUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1REFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ1M7SUFoQmpCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FtSmhDO0lBQUQsbUJBQUM7Q0FuSkQsQUFtSkMsQ0FuSnlDLEVBQUUsQ0FBQyxTQUFTLEdBbUpyRDtrQkFuSm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNvdW5kIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgb3BlbkRvb3JTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAga25vY2tEb29yU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHNjcmVhbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjcnlTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd29hQW5pbWVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY2xpY2tTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIC8vICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIm9wZW5Eb29yU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImtub2NrRG9vclNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5rbm9ja0Rvb3JTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwic2NyZWFtU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcmVhbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJjcnlTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuY3J5U291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRG9vclNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJrbm9ja0Rvb3JTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua25vY2tEb29yU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjcmVhbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlYW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoVm9sdW1lKHNvdW5kTmFtZTogc3RyaW5nLCB2b2x1bWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC52b2x1bWUgPSB2b2x1bWVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImtub2NrRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtub2NrRG9vclNvdW5kLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2NyZWFtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWFtU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjcnlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcnlTb3VuZC52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJrbm9ja0Rvb3JTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rbm9ja0Rvb3JTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNjcmVhbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVhbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMua25vY2tEb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2NyZWFtU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=