
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBNEM7QUFDNUMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK1JDO1FBOVJHLFNBQVM7UUFFVCxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUl0QyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsUUFBUTtRQUNSLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBNlE3QixDQUFDO0lBMVFhLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDSSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHTywyQkFBUSxHQUFoQjtRQUNJLHFCQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUdNLGtDQUFlLEdBQXRCLFVBQXVCLFdBQW9CLEVBQUUsT0FBZ0IsRUFBRSxNQUFlO1FBQzFFLHFCQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMs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O2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztvREFDYTtJQUl0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFiUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK1I1QjtJQUFELGVBQUM7Q0EvUkQsQUErUkMsQ0EvUnFDLEVBQUUsQ0FBQyxTQUFTLEdBK1JqRDtrQkEvUm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL25ldXRyaW5vcGFydGljbGVzL2NvbXBvbmVudHMvTmV1dHJpbm9FZmZlY3RfTm9OYW1lRWZmZWN0XCI7XHJcbmltcG9ydCB7IEFuaW1EYXRhIH0gZnJvbSBcIi4uL0RhdGEvQW5pbURhdGFcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZUNvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KE5vZGVDb250cm9sbGVyKVxyXG4gICAgTm9kZUNvbnRyb2xsZXI6IE5vZGVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGlzRG9uZUVyYXNlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdGltZW91dElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5pdEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMdiA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRHJhZ1dyb25nKG5vZGVTcGFjZUFSOiBjYy5WZWMyLCBwcmV2UG9zOiBjYy5WZWMyLCBvYmplY3Q6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTG9zZVNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5zaGFwZV93cm9uZy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLnNoYXBlX3dyb25nLnNldFBvc2l0aW9uKG5vZGVTcGFjZUFSKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udHJvbGxlci5zaGFwZV93cm9uZylcclxuICAgICAgICAgICAgLnRvKFxyXG4gICAgICAgICAgICAgICAgMC41LFxyXG4gICAgICAgICAgICAgICAgeyBzY2FsZTogMC4xLCBvcGFjaXR5OiAyNTUgfSxcclxuICAgICAgICAgICAgICAgIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5zZXRQb3NpdGlvbihwcmV2UG9zKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInJlc2V0IFByb2dyZXNzIVwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy5sb2coXCJkcmFnIHdyb25nLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRG9uZUxldmVsKGZ4OiBjYy5QYXJ0aWNsZVN5c3RlbSwgY3VycmVudFNjZW5lOiBjYy5Ob2RlLCBvYmplY3Q6IGNjLk5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZngucmVzZXRTeXN0ZW0oKTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVUb0RvbmVMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVUb1Nob3dOZXh0TGV2ZWw6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoQ29uc3RhbnRzLmN1cnJlbnRMdikge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aW1lVG9Eb25lTGV2ZWwgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb1Nob3dOZXh0TGV2ZWwgPSA0O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9uZVNjZW5lMShjdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aW1lVG9Eb25lTGV2ZWwgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb1Nob3dOZXh0TGV2ZWwgPSA0O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9uZVNjZW5lMihjdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmxldmVsT2JqZWN0RG9uZUluZGV4ICs9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpLmNoaWxkcmVuW0NvbnN0YW50cy5sZXZlbE9iamVjdERvbmVJbmRleCAtIDFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmxldmVsT2JqZWN0RG9uZUluZGV4ID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lVG9Eb25lTGV2ZWwgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lVG9TaG93TmV4dExldmVsID0gMztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEb25lU2NlbmUzKGN1cnJlbnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5wYXNzU291bmQpO1xyXG5cclxuICAgICAgICAvLyBzaG93IGZ4XHJcbiAgICAgICAgaWYodGltZVRvRG9uZUxldmVsKSB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuRlhfY29uZmV0dGkucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnN1Y2Nlc3NTb3VuZCk7XHJcbiAgICAgICAgfSwgdGltZVRvRG9uZUxldmVsKTtcclxuXHJcbiAgICAgICAgaWYodGltZVRvU2hvd05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudEx2ICs9IDE7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5jdXJyZW50THYgPD0gM1xyXG4gICAgICAgICAgICA/IHRoaXMuc2hvd05leHRMZXZlbCh0aW1lVG9TaG93TmV4dExldmVsKVxyXG4gICAgICAgICAgICA6IHRoaXMud2luR2FtZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRG9uZVNjZW5lMShjdXJyZW50U2NlbmU6IGNjLk5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGNodXJlID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2h1cmVcIik7XHJcbiAgICAgICAgbGV0IGNvZGF1ID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY29kYXVcIik7XHJcbiAgICAgICAgbGV0IG9iaiA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIm9iamVjdF90cnVlXCIpO1xyXG4gICAgICAgIGxldCBjaXJjbGUgPSBjdXJyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIlJlc3VsdF9XaW5cIik7XHJcbiAgICAgICAgbGV0IG55Y0NodXJlID0gcmVzdWx0LmdldENoaWxkQnlOYW1lKFwiTnljQ2h1cmVcIik7XHJcbiAgICAgICAgbGV0IGhhbGxEb29yID0gcmVzdWx0LmdldENoaWxkQnlOYW1lKFwiSGFsbF9Eb29yXCIpO1xyXG4gICAgICAgIGxldCBmeF9XYXRlciA9IGhhbGxEb29yLmdldENoaWxkQnlOYW1lKFwiUFNfQmFzZVwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ3YXRlclwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNpcmNsZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2h1cmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuQ2h1cmUuTGV2ZWwwMV9DLCB0cnVlKTtcclxuXHJcbiAgICAgICAgY29kYXUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuQ29kYXUuTGV2ZWwwMV9DLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IG55Y0NodXJlUG9zID0gbnljQ2h1cmUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBoYWxsRG9vci5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBBbmltRGF0YS5Eb29yLkxldmVsMDFfQiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgbnljQ2h1cmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuTnljQ2h1UmUuTGV2ZWwwMV9CLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgZnhfV2F0ZXIucmVzZXRTeXN0ZW0oKTsgfSwgMC4yKVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4obnljQ2h1cmUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IG55Y0NodXJlUG9zLnggLSA0MCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG55Y0NodXJlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIEFuaW1EYXRhLk55Y0NodVJlLkxldmVsMDFfQywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgMC4yNSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEb25lU2NlbmUyKGN1cnJlbnRTY2VuZTogY2MuTm9kZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgYm95ID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwic3BpbmVfQm95XCIpO1xyXG4gICAgICAgIGxldCByZXN1bHRfd2luID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwicmVzdWx0X3dpblwiKTtcclxuICAgICAgICBsZXQgZ2lybCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX0dpcmxcIik7XHJcbiAgICAgICAgbGV0IG55Y0JveSA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX055Y0JveVwiKTtcclxuICAgICAgICBsZXQgb2JqX3RydWUgPSBjdXJyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RfdHJ1ZVwiKTtcclxuICAgICAgICBsZXQgY2lyY2xlID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpO1xyXG4gICAgICAgIGxldCBGWF9IZWFydCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkZYX0hlYXJ0XCIpO1xyXG5cclxuICAgICAgICBib3kuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2lyY2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIG9ial90cnVlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIEZYX0hlYXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmVzdWx0X3dpbi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBib3kuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuQm95LkxldmVsMDJfQiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGdpcmwuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuR2lybC5MZXZlbDAyX0IsIHRydWUpO1xyXG5cclxuICAgICAgICBueWNCb3kuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuTnljQ2h1UmUuTGV2ZWwwMl9CLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEb25lU2NlbmUzKGN1cnJlbnRTY2VuZTogY2MuTm9kZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgYm95ID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwic3BpbmVfQm95XCIpO1xyXG4gICAgICAgIGxldCBueWNCb3kgPSBjdXJyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV9OeWNCb3lcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIlJlc3VsdFwiKTtcclxuICAgICAgICBsZXQgZnhfcmFpbiA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkZYX1JhaW5cIik7XHJcblxyXG4gICAgICAgIGJveS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBueWNCb3kuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcmVzdWx0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZnhfcmFpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dOZXh0TGV2ZWwodGltZVRvU2hvd05leHRMZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlNjZW5lc1tDb25zdGFudHMuY3VycmVudEx2IC0gMl0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlNjZW5lc1tDb25zdGFudHMuY3VycmVudEx2IC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuRlhfY29uZmV0dGkuc3RvcFN5c3RlbSgpO1xyXG4gICAgICAgIH0sIHRpbWVUb1Nob3dOZXh0TGV2ZWwpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVR3ZWVuRm9yQnRuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQ1RBX2J0bilcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5DVEFfYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQ1RBX2J0bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgd2luR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNEb25lRXJhc2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZXJhc2VyU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLmlzRG9uZUVyYXNlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5DVEEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNUQV9BbmltXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVR3ZWVuRm9yQnRuKCk7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxufVxyXG4iXX0=