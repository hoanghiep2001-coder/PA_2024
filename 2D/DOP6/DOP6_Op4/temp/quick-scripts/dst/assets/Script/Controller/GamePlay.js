
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcVVDO1FBcFVHLFNBQVM7UUFFVCxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUl0QyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsUUFBUTtRQUNSLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBbVQ3QixDQUFDO0lBaFRhLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDSSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHTywyQkFBUSxHQUFoQjtRQUNJLHFCQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUvQyw4QkFBOEI7UUFDOUIsaUNBQWlDO0lBQ3JDLENBQUM7SUFHTyxvQ0FBaUIsR0FBekI7UUFBQSxpQkFlQztRQWRHLHFCQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsY0FBYyxDQUFDLEtB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QkFyVW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltRGF0YSB9IGZyb20gXCIuLi9EYXRhL0FuaW1EYXRhXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVDb250cm9sbGVyIGZyb20gXCIuL05vZGVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gU2NyaXB0XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOb2RlQ29udHJvbGxlcilcclxuICAgIE5vZGVDb250cm9sbGVyOiBOb2RlQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBpc0RvbmVFcmFzZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRpbWVvdXRJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50THYgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5zaGFwZV93cm9uZy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY29tbWVudCBpZiBidWlsZCBpcm9uc291cmNlXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5WWFtZXRlS3VkYXNhaVNvdW5kKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlRWFyYXNlckhpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlBvaW50Lm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlBvaW50LnNldFBvc2l0aW9uKDcxLCAxMzQpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlBvaW50LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRyb2xsZXIuUG9pbnQpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuUG9pbnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlRXJhc2VyUG9pbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5Qb2ludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZURlbGV0ZVdyb25nKG5vZGVTcGFjZUFSOiBjYy5WZWMyLCBzY3JhdGNoQWJsZUNvbXBzOiBjYy5Db21wb25lbnRbXSB8IGNjLkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Mb3NlU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLnNoYXBlX3dyb25nLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuc2hhcGVfd3Jvbmcuc2V0UG9zaXRpb24obm9kZVNwYWNlQVIpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250cm9sbGVyLnNoYXBlX3dyb25nKVxyXG4gICAgICAgICAgICAudG8oXHJcbiAgICAgICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgICAgICB7IHNjYWxlOiAwLjEsIG9wYWNpdHk6IDI1NSB9LFxyXG4gICAgICAgICAgICAgICAgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gS2nhu4NtIHRyYSBu4bq/dSBzY3JhdGNoQWJsZUNvbXBzIGzDoCBt4bqjbmdcclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoc2NyYXRjaEFibGVDb21wcylcclxuICAgICAgICAgICAgICAgICAgICA/IHNjcmF0Y2hBYmxlQ29tcHMuZm9yRWFjaChjb21wID0+IGNvbXAucmVzZXRQcm9ncmVzcygpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2NyYXRjaEFibGVDb21wcy5yZXNldFByb2dyZXNzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInJlc2V0IFByb2dyZXNzIVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhcImRlbGV0ZSB3cm9uZy4uLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGZpbHRlckNvcnJlY3RSZXN1bHQocmVzdWx0OiBjYy5Db21wb25lbnQsIGRlbGV0ZVdyb25nUG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChDb25zdGFudHMuY3VycmVudEx2KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5ub2RlLnBhcmVudC5uYW1lID09PSBcIkJveVwiICYmIHJlc3VsdC5wcm9ncmVzcyA+PSAwLjQ1XHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmRlbGV0ZUNvcnJlY3QoMSwgcmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYW5kbGVEZWxldGVXcm9uZyhkZWxldGVXcm9uZ1BvcywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vZGUucGFyZW50Lm5hbWUgPT09IFwibWFpblwiICYmIHJlc3VsdC5wcm9ncmVzcyA+PSAwLjgyXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmRlbGV0ZUNvcnJlY3QoMiwgcmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYW5kbGVEZWxldGVXcm9uZyhkZWxldGVXcm9uZ1BvcywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vZGUucGFyZW50Lm5hbWUgPT09IFwiU2NlbmUzXCIgJiYgcmVzdWx0LnByb2dyZXNzID49IDAuNlxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5kZWxldGVDb3JyZWN0KDMsIHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFuZGxlRGVsZXRlV3JvbmcoZGVsZXRlV3JvbmdQb3MsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVDb3JyZWN0KGxldmVsOiBudW1iZXIsIENvbXBvbmVudDogY2MuQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgY2MubG9nKFwiY29ycmVjdFwiKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMdiArPSAxO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmhpZGVFcmFzZXJQb2ludCgpO1xyXG5cclxuICAgICAgICAvLyDhuqluIHNjcmF0Y2hhYmxlIMSRaS5cclxuICAgICAgICBDb21wb25lbnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5Ob2RlQ29udHJvbGxlci5TY2VuZXNbbGV2ZWwgLSAxXTtcclxuICAgICAgICBsZXQgcmVzdWx0V2luID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJSZXN1bHRfV2luXCIpO1xyXG4gICAgICAgIGxldCB0aW1lVG9Eb25lTGV2ZWw6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRpbWVUb1Nob3dOZXh0TGV2ZWw6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGxldCBnaXJsID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV9HaXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJveSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQm95XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhdG1hbiA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiZmF0bWFuXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpZ2h0U3BpbmUgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkZpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlbHBIZXJUZXh0ID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5maWdodFNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmaWdodFNwaW5lLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRXaW4uYWN0aXZlID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlnaHRTcGluZS5hY3RpdmUgPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmZpZ2h0U291bmQpO1xyXG4gICAgICAgICAgICAgICAgfSwgMS41KTtcclxuXHJcbiAgICAgICAgICAgICAgICBnaXJsLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIEFuaW1EYXRhLkdpcmwuTGV2ZWwyOF9CLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoZWxwSGVyVGV4dC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3kuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZmF0bWFuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb1Nob3dOZXh0TGV2ZWwgPSAzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb0RvbmVMZXZlbCA9IDEuNTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50cm8gPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludHJvR2lybCA9IGludHJvLmdldENoaWxkQnlOYW1lKFwic3BpbmVfR2lybFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYWluID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJtYWluXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb1Nob3dOZXh0TGV2ZWwgPSAzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb0RvbmVMZXZlbCA9IDAuMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRyby5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIGludHJvLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFpbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRyb0dpcmwuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuR2lybC5MZXZlbDI5X0IsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBMdjNCb3kgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX0JveVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBMdjNHaXJsID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV9HaXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IEx2M1Jlc3VsdFdpbiA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiUmVzdWx0X1dpblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgTHYzU3BpbmVEb29yID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJIb3RlbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlNjcmF0Y2hhYmxlXCIpLmdldENoaWxkQnlOYW1lKFwibHZsMzJfaG90ZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIb3RlbF9kb29yXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBMdjNNYXNrRG9vciA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiSG90ZWxcIilcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJTY3JhdGNoYWJsZVwiKS5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJEb29yXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIEx2M1NwaW5lRG9vci5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIEx2M01hc2tEb29yLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIEx2M1Jlc3VsdFdpbi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIEx2M0JveS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBMdjNHaXJsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb0RvbmVMZXZlbCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IGZ4XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLkZYX2NvbmZldHRpLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zdWNjZXNzU291bmQpO1xyXG4gICAgICAgIH0sIHRpbWVUb0RvbmVMZXZlbCk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50THYgPD0gM1xyXG4gICAgICAgICAgICA/IHRoaXMuc2hvd05leHRMZXZlbCh0aW1lVG9TaG93TmV4dExldmVsKVxyXG4gICAgICAgICAgICA6IHRoaXMud2luR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dOZXh0TGV2ZWwodGltZVRvU2hvd05leHRMZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudEx2ID09PSAyXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5hY3RpdmVFYXJhc2VySGludCgpIH0sIDMpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5hY3RpdmVFYXJhc2VySGludCgpIH0sIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5TY2VuZXNbQ29uc3RhbnRzLmN1cnJlbnRMdiAtIDJdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5TY2VuZXNbQ29uc3RhbnRzLmN1cnJlbnRMdiAtIDFdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLkZYX2NvbmZldHRpLnN0b3BTeXN0ZW0oKTtcclxuICAgICAgICB9LCB0aW1lVG9TaG93TmV4dExldmVsKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlVHdlZW5Gb3JCdG4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5DVEFfYnRuKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLkNUQV9idG4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5DVEFfYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNDUgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB3aW5HYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pc0RvbmVFcmFzZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lcmFzZXJTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEb25lRXJhc2VyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkNUQS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ1RBX0FuaW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVHdlZW5Gb3JCdG4oKTtcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVlhbWV0ZUt1ZGFzYWlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZmVtYWxlTGF1Z2hTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudEx2IDwgMiAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZmVtYWxlTGF1Z2hTb3VuZCk7XHJcbiAgICAgICAgfSwgNjAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19