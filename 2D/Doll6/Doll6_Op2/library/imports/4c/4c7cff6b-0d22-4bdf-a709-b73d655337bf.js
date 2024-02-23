"use strict";
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
        _this.clickSound = null;
        _this.woaSound = null;
        _this.woaSound2 = null;
        _this.SwapSound = null;
        _this.GemSound = null;
        _this.rainbowSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         case "openBookSound":
        //             this.openBookSound.play();
        //             break;
        //         case "showItemSound":
        //             this.showItemSound.play();
        //             break;
        //         case "pickItemSound":
        //             this.pickItemSound.play();
        //             break;   
        //             case "waoGameSound":
        //             this.waoGameSound.play();
        //             break;
        //             case "swtichItemSound":
        //                 this.swtichItemSound.play();
        //                 break;
        //         default:
        //             break;
        //     }
        // }
        // ----------------
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "woaSound":
                    this.woaSound.play();
                    break;
                case "woaSound2":
                    this.woaSound2.play();
                    break;
                case "SwapSound":
                    this.SwapSound.play();
                    break;
                case "GemSound":
                    this.GemSound.play();
                    break;
                case "rainbowSound":
                    this.rainbowSound.play();
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
            case "clickSound":
                this.clickSound.stop();
                break;
            case "woaSound":
                this.woaSound.stop();
                break;
            case "woaSound2":
                this.woaSound2.stop();
                break;
            case "SwapSound":
                this.SwapSound.stop();
                break;
            case "GemSound":
                this.GemSound.stop();
                break;
            case "rainbowSound":
                this.rainbowSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSoundExceptBgSound = function () {
        this.clickSound.stop();
        this.woaSound.stop();
        this.SwapSound.stop();
        this.GemSound.stop();
        this.rainbowSound.stop();
        this.woaSound2.stop();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.clickSound.stop();
        this.woaSound.stop();
        this.SwapSound.stop();
        this.GemSound.stop();
        this.rainbowSound.stop();
        this.woaSound2.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaSound2", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "SwapSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "GemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "rainbowSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();