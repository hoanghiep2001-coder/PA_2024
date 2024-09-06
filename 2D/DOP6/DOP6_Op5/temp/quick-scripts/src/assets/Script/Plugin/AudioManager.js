"use strict";
cc._RF.push(module, '16092J/6+9HR5x8fJSUKKad', 'AudioManager');
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
        _this.eraserSound = null;
        _this.successSound = null;
        _this.clickSound = null;
        _this.LoseSound = null;
        _this.femaleLaughSound = null;
        _this.passSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "passSound":
                    this.passSound.play();
                    break;
                case "femaleLaughSound":
                    this.femaleLaughSound.play();
                    break;
                case "eraserSound":
                    this.eraserSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "successSound":
                    this.successSound.play();
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
            case "femaleLaughSound":
                this.femaleLaughSound.stop();
                break;
            case "passSound":
                this.passSound.stop();
                break;
            case "eraserSound":
                this.eraserSound.stop();
                break;
            case "LoseSound":
                this.LoseSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "successSound":
                this.successSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.passSound.stop();
        this.bgSound.stop();
        this.femaleLaughSound.stop();
        this.eraserSound.stop();
        this.successSound.stop();
        this.clickSound.stop();
        this.LoseSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "eraserSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "successSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "LoseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "femaleLaughSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "passSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();