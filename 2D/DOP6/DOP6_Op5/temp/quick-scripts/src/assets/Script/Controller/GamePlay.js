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
    };
    GamePlay.prototype.handleDragWrong = function (nodeSpaceAR, prevPos, object) {
        constants_1.Constants.isCanTouch = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
        this.NodeController.shape_wrong.active = true;
        this.NodeController.shape_wrong.setPosition(nodeSpaceAR);
        cc.tween(this.NodeController.shape_wrong)
            .to(0.5, { scale: 0.1, opacity: 255 }, { easing: cc.easing.elasticOut })
            .to(0.5, { opacity: 0, scale: 0 }, { easing: cc.easing.elasticOut })
            .call(function () {
            constants_1.Constants.isCanTouch = true;
            object.setPosition(prevPos);
            cc.log("reset Progress!");
        })
            .start();
        cc.log("drag wrong...");
    };
    GamePlay.prototype.handleDoneLevel = function (fx, currentScene, object) {
        var _this = this;
        constants_1.Constants.isCanTouch = false;
        fx.resetSystem();
        var timeToDoneLevel = null;
        var timeToShowNextLevel = null;
        switch (constants_1.Constants.currentLv) {
            case 1:
                timeToDoneLevel = 2;
                timeToShowNextLevel = 4;
                this.handleDoneScene1(currentScene);
                break;
            case 2:
                timeToDoneLevel = 2;
                timeToShowNextLevel = 4;
                this.handleDoneScene2(currentScene);
                break;
            case 3:
                constants_1.Constants.isCanTouch = true;
                constants_1.Constants.levelObjectDoneIndex += 1;
                currentScene.getChildByName("circle").children[constants_1.Constants.levelObjectDoneIndex - 1].active = true;
                object.active = false;
                if (constants_1.Constants.levelObjectDoneIndex >= 2) {
                    constants_1.Constants.isCanTouch = false;
                    timeToDoneLevel = 2;
                    timeToShowNextLevel = 3;
                    this.handleDoneScene3(currentScene);
                }
                break;
            default:
                break;
        }
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.passSound);
        // show fx
        if (timeToDoneLevel)
            this.scheduleOnce(function () {
                _this.NodeController.FX_confetti.resetSystem();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.successSound);
            }, timeToDoneLevel);
        if (timeToShowNextLevel) {
            constants_1.Constants.currentLv += 1;
            constants_1.Constants.currentLv <= 3
                ? this.showNextLevel(timeToShowNextLevel)
                : this.winGame();
        }
        ;
    };
    GamePlay.prototype.handleDoneScene1 = function (currentScene) {
        var _this = this;
        var chure = currentScene.getChildByName("chure");
        var codau = currentScene.getChildByName("codau");
        var obj = currentScene.getChildByName("object_true");
        var circle = currentScene.getChildByName("circle");
        var result = currentScene.getChildByName("Result_Win");
        var nycChure = result.getChildByName("NycChure");
        var hallDoor = result.getChildByName("Hall_Door");
        var fx_Water = hallDoor.getChildByName("PS_Base")
            .getChildByName("water").getComponent(cc.ParticleSystem);
        obj.active = false;
        circle.active = false;
        chure.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Chure.Level01_C, true);
        codau.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Codau.Level01_C, true);
        var nycChurePos = nycChure.getPosition();
        this.scheduleOnce(function () {
            hallDoor.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Door.Level01_B, false);
            nycChure.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.NycChuRe.Level01_B, true);
            _this.scheduleOnce(function () { fx_Water.resetSystem(); }, 0.2);
            cc.tween(nycChure)
                .to(0.5, { x: nycChurePos.x - 40 })
                .call(function () {
                nycChure.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.NycChuRe.Level01_C, true);
            })
                .start();
        }, 0.25);
    };
    GamePlay.prototype.handleDoneScene2 = function (currentScene) {
        var boy = currentScene.getChildByName("spine_Boy");
        var result_win = currentScene.getChildByName("result_win");
        var girl = currentScene.getChildByName("spine_Girl");
        var nycBoy = currentScene.getChildByName("spine_NycBoy");
        var obj_true = currentScene.getChildByName("object_true");
        var circle = currentScene.getChildByName("circle");
        var FX_Heart = currentScene.getChildByName("FX_Heart");
        boy.active = false;
        circle.active = false;
        obj_true.active = false;
        FX_Heart.active = true;
        result_win.active = true;
        boy.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Boy.Level02_B, true);
        girl.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Girl.Level02_B, true);
        nycBoy.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.NycChuRe.Level02_B, true);
    };
    GamePlay.prototype.handleDoneScene3 = function (currentScene) {
        var boy = currentScene.getChildByName("spine_Boy");
        var nycBoy = currentScene.getChildByName("spine_NycBoy");
        var result = currentScene.getChildByName("Result");
        var fx_rain = currentScene.getChildByName("FX_Rain");
        boy.active = false;
        nycBoy.active = false;
        result.active = true;
        fx_rain.active = true;
    };
    GamePlay.prototype.showNextLevel = function (timeToShowNextLevel) {
        var _this = this;
        this.scheduleOnce(function () {
            constants_1.Constants.isCanTouch = true;
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