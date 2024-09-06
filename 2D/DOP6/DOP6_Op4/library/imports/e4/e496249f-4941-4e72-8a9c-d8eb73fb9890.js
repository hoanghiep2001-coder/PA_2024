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
var AnimData_1 = require("../Data/AnimData");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var NodeController_1 = require("./NodeController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeController = null;
        _this.CTA = null;
        _this.CTA_btn = null;
        // state
        _this.isDoneEraser = false;
        _this.timeoutId = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.initGame();
    };
    GamePlay.prototype.initGame = function () {
        constants_1.Constants.currentLv = 1;
        this.CTA.active = false;
        this.NodeController.shape_wrong.active = false;
        // comment if build ironsource
        // this.playYameteKudasaiSound();
    };
    GamePlay.prototype.activeEaraserHint = function () {
        var _this = this;
        constants_1.Constants.isCanTouch = true;
        this.NodeController.Point.opacity = 0;
        this.NodeController.Point.setPosition(71, 134);
        this.NodeController.Point.active = true;
        cc.tween(this.NodeController.Point)
            .to(0.5, { opacity: 255 })
            .call(function () {
            _this.NodeController.Point.getComponent(cc.Animation).play();
        })
            .start();
    };
    GamePlay.prototype.hideEraserPoint = function () {
        this.NodeController.Point.active = false;
    };
    GamePlay.prototype.handleDeleteWrong = function (nodeSpaceAR, scratchAbleComps) {
        constants_1.Constants.isCanTouch = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
        this.NodeController.shape_wrong.active = true;
        this.NodeController.shape_wrong.setPosition(nodeSpaceAR);
        cc.tween(this.NodeController.shape_wrong)
            .to(0.5, { scale: 0.1, opacity: 255 }, { easing: cc.easing.elasticOut })
            .to(0.5, { opacity: 0, scale: 0 }, { easing: cc.easing.elasticOut })
            .call(function () {
            // Kiểm tra nếu scratchAbleComps là mảng
            Array.isArray(scratchAbleComps)
                ? scratchAbleComps.forEach(function (comp) { return comp.resetProgress(); })
                : scratchAbleComps.resetProgress();
            constants_1.Constants.isCanTouch = true;
            cc.log("reset Progress!");
        })
            .start();
        cc.log("delete wrong...");
    };
    GamePlay.prototype.filterCorrectResult = function (result, deleteWrongPos) {
        switch (constants_1.Constants.currentLv) {
            case 1:
                result.node.parent.name === "Boy" && result.progress >= 0.45
                    ? this.deleteCorrect(1, result)
                    : this.handleDeleteWrong(deleteWrongPos, result);
                break;
            case 2:
                result.node.parent.name === "main" && result.progress >= 0.82
                    ? this.deleteCorrect(2, result)
                    : this.handleDeleteWrong(deleteWrongPos, result);
                break;
            case 3:
                result.node.parent.name === "Scene3" && result.progress >= 0.6
                    ? this.deleteCorrect(3, result)
                    : this.handleDeleteWrong(deleteWrongPos, result);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.deleteCorrect = function (level, Component) {
        var _this = this;
        cc.log("correct");
        constants_1.Constants.currentLv += 1;
        constants_1.Constants.isCanTouch = false;
        this.hideEraserPoint();
        // ẩn scratchable đi.
        Component.node.active = false;
        var scene = this.NodeController.Scenes[level - 1];
        var resultWin = scene.getChildByName("Result_Win");
        var timeToDoneLevel = null;
        var timeToShowNextLevel = null;
        switch (level) {
            case 1:
                var girl = scene.getChildByName("spine_Girl");
                var boy = scene.getChildByName("Boy");
                var fatman = scene.getChildByName("fatman");
                var fightSpine_1 = scene.getChildByName("Fight");
                var helpHerText = scene.getChildByName("text");
                clearInterval(this.timeoutId);
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.fightSound);
                fightSpine_1.active = true;
                this.scheduleOnce(function () {
                    resultWin.active = true;
                    fightSpine_1.active = false;
                    _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.fightSound);
                }, 1.5);
                girl.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Girl.Level28_B, true);
                helpHerText.active = false;
                boy.active = false;
                fatman.active = false;
                timeToShowNextLevel = 3;
                timeToDoneLevel = 1.5;
                break;
            case 2:
                var intro = scene.getChildByName("intro");
                var introGirl = intro.getChildByName("spine_Girl");
                var main = scene.getChildByName("main");
                timeToShowNextLevel = 3;
                timeToDoneLevel = 0.1;
                intro.opacity = 255;
                intro.active = true;
                main.active = false;
                introGirl.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Girl.Level29_B, true);
                break;
            case 3:
                var Lv3Boy = scene.getChildByName("spine_Boy");
                var Lv3Girl = scene.getChildByName("spine_Girl");
                var Lv3ResultWin = scene.getChildByName("Result_Win");
                var Lv3SpineDoor = scene.getChildByName("Hotel")
                    .getChildByName("Scratchable").getChildByName("lvl32_hotel").getChildByName("Hotel_door");
                var Lv3MaskDoor = scene.getChildByName("Hotel")
                    .getChildByName("Scratchable").getChildByName("Mask").getChildByName("Door");
                Lv3SpineDoor.active = true;
                Lv3MaskDoor.active = false;
                Lv3ResultWin.active = true;
                Lv3Boy.active = false;
                Lv3Girl.active = false;
                timeToDoneLevel = 1;
                break;
            default:
                break;
        }
        // show fx
        this.scheduleOnce(function () {
            _this.NodeController.FX_confetti.resetSystem();
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.successSound);
        }, timeToDoneLevel);
        constants_1.Constants.currentLv <= 3
            ? this.showNextLevel(timeToShowNextLevel)
            : this.winGame();
    };
    GamePlay.prototype.showNextLevel = function (timeToShowNextLevel) {
        var _this = this;
        this.scheduleOnce(function () {
            constants_1.Constants.currentLv === 2
                ? _this.scheduleOnce(function () { _this.activeEaraserHint(); }, 3)
                : _this.scheduleOnce(function () { _this.activeEaraserHint(); }, 1);
            _this.NodeController.Scenes[constants_1.Constants.currentLv - 2].active = false;
            _this.NodeController.Scenes[constants_1.Constants.currentLv - 1].active = true;
            _this.NodeController.FX_confetti.stopSystem();
        }, timeToShowNextLevel);
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
    GamePlay.prototype.activeTweenForBtn = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.CTA_btn)
                .to(0.5, { opacity: 255 })
                .call(function () {
                cc.tween(_this.CTA_btn)
                    .repeatForever(cc.tween(_this.CTA_btn)
                    .to(0.5, { scale: 0.5 })
                    .to(0.5, { scale: 0.45 }, { easing: 'elasticOut' })).start();
            })
                .start();
        }, 1);
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        constants_1.Constants.isDoneEraser = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.eraserSound);
        this.isDoneEraser = true;
        this.scheduleOnce(function () {
            _this.CTA.active = true;
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.activeTweenForBtn();
        }, 2);
    };
    GamePlay.prototype.playYameteKudasaiSound = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.femaleLaughSound);
        this.timeoutId = setInterval(function () {
            constants_1.Constants.currentLv < 2 && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.femaleLaughSound);
        }, 6000);
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeController_1.default)
    ], GamePlay.prototype, "NodeController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_btn", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();