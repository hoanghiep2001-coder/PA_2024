"use strict";
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        _this.Scratchable = null;
        // Node
        _this.Opening = null;
        _this.MainContent = null;
        _this.ageLabel = null;
        _this.age54 = null;
        _this.age18 = null;
        _this.iloveyou = null;
        _this.boy1 = null;
        _this.boy2 = null;
        _this.girl1 = null;
        _this.girl2 = null;
        _this.particle = null;
        _this.CTA = null;
        // state
        _this.isDoneEraser = false;
        _this.soundTrack = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // !Constants.ironSource.isEndGame && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        // use this if build ironsource
        constants_1.Constants.isRestart && !constants_1.Constants.ironSource.isEndGame && this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.CTA.active = false;
        this.soundTrack = this.AudioManager.SheepSound1;
        this.ageLabel.string = String(constants_1.Constants.age);
        cc.director.preloadScene("restartGame");
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
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
    GamePlay.prototype.isDeleteOverHalf = function () {
        var result;
        console.log(this.Scratchable.getComponent("Scratchable").progress);
        this.Scratchable.getComponent("Scratchable").progress >= 0.4 &&
            this.Scratchable.getComponent("Scratchable").progress <= 0.6
            ? result = true
            : result = false;
        return result;
    };
    GamePlay.prototype.RestartGame = function () {
        cc.director.loadScene("restartGame");
    };
    GamePlay.prototype.increaseAge = function (fromValue, toValue) {
        var _this = this;
        constants_1.Constants.age = fromValue;
        cc.tween(constants_1.Constants)
            .to(1, { age: toValue }, {
            progress: function (start, end, current, t) {
                var newValue = Math.floor(cc.misc.lerp(start, end, t));
                _this.ageLabel.string = newValue.toString();
                return newValue;
            }
        })
            .start();
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.successSound);
        this.Scratchable.getChildByName("Mask").active = false;
        this.iloveyou.active = true;
        this.boy1.active = false;
        this.boy2.active = true;
        this.girl1.active = false;
        this.girl2.active = true;
        this.isDoneEraser = true;
        // this.age18.active = true;
        // this.age54.active = false;
        this.particle.resetSystem();
        this.scheduleOnce(function () {
            _this.CTA.active = true;
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
        }, 2);
    };
    GamePlay.prototype.checkDoneEraser = function () {
        if (this.Scratchable.getComponent("Scratchable").isWin) {
            console.log("lose");
        }
    };
    GamePlay.prototype.update = function (dt) {
        // !this.isDoneEraser && this.checkDoneEraser();
        // this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Opening", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "MainContent", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "ageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "age54", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "age18", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "iloveyou", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "boy1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "boy2", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "girl1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "girl2", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], GamePlay.prototype, "particle", void 0);
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