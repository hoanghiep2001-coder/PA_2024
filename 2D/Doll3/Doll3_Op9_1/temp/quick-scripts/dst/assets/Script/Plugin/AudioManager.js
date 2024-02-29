
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
        if (constants_1.Constants.ironSource.SoundState) {
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
        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtSkM7UUFqSkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBbUl0QyxDQUFDO0lBaklVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2pDLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssZUFBZTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUIsTUFBTTtnQkFDTixLQUFLLFlBQVk7b0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDZCxLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsTUFBTTtnQkFDVixLQUFLLGFBQWE7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsTUFB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UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUE5SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQWhCakIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1KaEM7SUFBRCxtQkFBQztDQW5KRCxBQW1KQyxDQW5KeUMsRUFBRSxDQUFDLFNBQVMsR0FtSnJEO2tCQW5Kb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBvcGVuRG9vclNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBrbm9ja0Rvb3JTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc2NyZWFtU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNyeVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB3b2FBbmltZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjbGlja1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3BlbkRvb3JTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRvb3JTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwia25vY2tEb29yU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtub2NrRG9vclNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY3JlYW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWFtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNyeVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcnlTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid29hQW5pbWVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgICAgIC8vIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAvLyAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vcGVuRG9vclNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJrbm9ja0Rvb3JTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMua25vY2tEb29yU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcInNjcmVhbVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JlYW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoVm9sdW1lKHNvdW5kTmFtZTogc3RyaW5nLCB2b2x1bWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC52b2x1bWUgPSB2b2x1bWVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImtub2NrRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtub2NrRG9vclNvdW5kLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2NyZWFtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWFtU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjcnlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcnlTb3VuZC52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJrbm9ja0Rvb3JTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rbm9ja0Rvb3JTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNjcmVhbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVhbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMua25vY2tEb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2NyZWFtU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=