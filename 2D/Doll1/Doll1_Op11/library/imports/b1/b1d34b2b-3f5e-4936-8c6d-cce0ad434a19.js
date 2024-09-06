"use strict";
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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        _this.dollPrecent = 0;
        _this.opponentPrecent = 0;
        return _this;
    }
    GamePlay.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.playGreatSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaAnimeSound);
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus1);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            case 2:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus2);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            case 3:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus3);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            case 4:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus4);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.switchToLv2 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.NodesContainer.Overlay)
                .to(1, { opacity: 150 })
                .call(function () {
                _this.switchDollToStep2();
                _this.NodesContainer.Lv1_Hint.active = false;
                _this.NodesContainer.Lv2_Hint.active = true;
                _this.NodesContainer.FX_Blink.stopSystem();
            })
                .to(1, { opacity: 0 })
                .start();
        }, 1.5);
    };
    GamePlay.prototype.switchDollToStep2 = function () {
        this.NodesContainer.Dolls[0].active = false;
        this.NodesContainer.Dolls[1].active = false;
        this.NodesContainer.Dolls[2].active = false;
        this.NodesContainer.Dolls.splice(0, 3);
        this.NodesContainer.Dolls[0].active = true;
        this.NodesContainer.Dolls[1].active = true;
        this.NodesContainer.Dolls[2].active = true;
        var _loop_1 = function (index) {
            var doll = this_1.NodesContainer.Dolls[index];
            cc.tween(doll)
                .to(1, { scale: 0.38, opacity: 255 }, { easing: 'elasticInOut' })
                .call(function () { doll.getComponent(cc.Animation).play(); })
                .start();
        };
        var this_1 = this;
        for (var index = 0; index < this.NodesContainer.Dolls.length; index++) {
            _loop_1(index);
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();