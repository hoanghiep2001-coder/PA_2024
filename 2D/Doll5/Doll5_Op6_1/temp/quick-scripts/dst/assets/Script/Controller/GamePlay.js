
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
        _this.skinIndex = 0;
        _this.currentProgress = null;
        _this.PrevProgress = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.currentProgress = this.NodesContainer.ProgressSteps[constants_1.Constants.currentListItem];
    };
    GamePlay.prototype.updateProgress = function () {
        this.PrevProgress = this.currentProgress;
        this.currentProgress = this.NodesContainer.ProgressSteps[constants_1.Constants.currentListItem];
        this.setupTween();
    };
    GamePlay.prototype.setupTween = function () {
        var icon = this.currentProgress.getChildByName("icon");
        var frame = this.currentProgress.getChildByName("khungicon");
        var framePick = this.currentProgress.getChildByName("Pickicon");
        var stroke = this.currentProgress.getChildByName("ElipseStroke");
        var tick = this.currentProgress.getChildByName("tick");
        icon.active = true;
        tick.active = false;
        frame.active = true;
        framePick.active = false;
        stroke.color = cc.Color.fromHEX(new cc.Color, "#FFFFFF");
        if (this.PrevProgress) {
            var prev_icon = this.PrevProgress.getChildByName("icon");
            var prev_frame = this.PrevProgress.getChildByName("khungicon");
            var prev_framePick = this.PrevProgress.getChildByName("Pickicon");
            var prev_stroke = this.PrevProgress.getChildByName("ElipseStroke");
            var prev_tick = this.PrevProgress.getChildByName("tick");
            prev_icon.active = false;
            prev_tick.active = true;
            prev_frame.active = false;
            prev_framePick.active = true;
            prev_stroke.color = cc.Color.fromHEX(new cc.Color, "#00FF14");
        }
        this.callTween();
    };
    GamePlay.prototype.callTween = function () {
        cc.tween(this.currentProgress)
            .to(1, { scale: 0.8 }, { easing: "elasticOut" })
            .start();
        if (this.PrevProgress) {
            cc.tween(this.PrevProgress)
                .to(1, { scale: 0.6 }, { easing: "elasticOut" })
                .start();
        }
    };
    GamePlay.prototype.handleTakePhoto = function () {
        var _this = this;
        this.NodesContainer.Doll_Camera.active = true;
        this.NodesContainer.Progress.active = false;
        this.NodesContainer.UI.getChildByName("PickTray").active = false;
        var cameraFrame = this.NodesContainer.Doll_Camera.getChildByName("frame");
        var doll = this.NodesContainer.UI.getChildByName("Dolls");
        cc.tween(cameraFrame)
            .to(1, { opacity: 255 }, { easing: 'elasticOut' })
            .start();
        cc.tween(doll)
            .to(1, { y: 40, scale: 0.22 }, { easing: "elasticOut" })
            .start();
        cc.tween(this.NodesContainer.Btn_DollCamera)
            .to(1, { opacity: 255 }, { easing: 'elasticOut' })
            .call(function () {
            cc.tween(_this.NodesContainer.Btn_DollCamera)
                .repeatForever(cc.tween(_this.NodesContainer.Btn_DollCamera)
                .to(0.5, { scale: 1 })
                .to(0.5, { scale: 0.9 }, { easing: 'elasticOut' })).start();
        })
            .start();
    };
    GamePlay.prototype.showCTA = function (intervalID) {
        var _this = this;
        clearInterval(intervalID);
        this.scheduleOnce(function () {
            _this.NodesContainer.UI.getComponent(cc.Animation).play("CTA_Anim");
        }, 0.5);
        // this.scheduleOnce(() => {
        // this.reset();
        // this.activeCasualSkinsWithAnim();
        // }, 2.5);
    };
    GamePlay.prototype.playGreatSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.AudioManager.pickItemSound.volume = 0.5;
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus1);
                break;
            case 2:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus2);
                break;
            case 3:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus3);
                break;
            case 4:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus4);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
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
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.currentListItem <= 0)
            this.NodesContainer.BtnLeft.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4S0M7UUEzS0Msa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFtSy9CLENBQUM7SUFoS1cseUJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBR00saUNBQWMsR0FBckI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR08sNkJBQVUsR0FBbEI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMs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WUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBSVMseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN6QixJQUFJLHFCQUFTLENBQUMsZUFBZSxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUF6S0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFQbkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThLNUI7SUFBRCxlQUFDO0NBOUtELEFBOEtDLENBOUtxQyxFQUFFLENBQUMsU0FBUyxHQThLakQ7a0JBOUtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBza2luSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgY3VycmVudFByb2dyZXNzOiBjYy5Ob2RlID0gbnVsbDtcclxuICBQcmV2UHJvZ3Jlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSB0aGlzLk5vZGVzQ29udGFpbmVyLlByb2dyZXNzU3RlcHNbQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbV07XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHVwZGF0ZVByb2dyZXNzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5QcmV2UHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcztcclxuICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5Qcm9ncmVzc1N0ZXBzW0NvbnN0YW50cy5jdXJyZW50TGlzdEl0ZW1dO1xyXG4gICAgdGhpcy5zZXR1cFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cFR3ZWVuKCk6IHZvaWQge1xyXG4gICAgbGV0IGljb24gPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICBsZXQgZnJhbWUgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcImtodW5naWNvblwiKTtcclxuICAgIGxldCBmcmFtZVBpY2sgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcIlBpY2tpY29uXCIpO1xyXG4gICAgbGV0IHN0cm9rZSA9IHRoaXMuY3VycmVudFByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwiRWxpcHNlU3Ryb2tlXCIpO1xyXG4gICAgbGV0IHRpY2sgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIik7XHJcbiAgICBcclxuICAgIGljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRpY2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICBmcmFtZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgZnJhbWVQaWNrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgc3Ryb2tlLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChuZXcgY2MuQ29sb3IsIFwiI0ZGRkZGRlwiKTtcclxuXHJcbiAgICBpZih0aGlzLlByZXZQcm9ncmVzcykge1xyXG4gICAgICBsZXQgcHJldl9pY29uID0gdGhpcy5QcmV2UHJvZ3Jlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpO1xyXG4gICAgICBsZXQgcHJldl9mcmFtZSA9IHRoaXMuUHJldlByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwia2h1bmdpY29uXCIpO1xyXG4gICAgICBsZXQgcHJldl9mcmFtZVBpY2sgPSB0aGlzLlByZXZQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcIlBpY2tpY29uXCIpO1xyXG4gICAgICBsZXQgcHJldl9zdHJva2UgPSB0aGlzLlByZXZQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcIkVsaXBzZVN0cm9rZVwiKTtcclxuICAgICAgbGV0IHByZXZfdGljayA9IHRoaXMuUHJldlByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwidGlja1wiKTtcclxuICAgICAgcHJldl9pY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBwcmV2X3RpY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgcHJldl9mcmFtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgcHJldl9mcmFtZVBpY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgcHJldl9zdHJva2UuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgXCIjMDBGRjE0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsbFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBjYWxsVHdlZW4oKTogdm9pZCB7XHJcbiAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRQcm9ncmVzcylcclxuICAgIC50bygxLCB7c2NhbGU6IDAuOH0sIHtlYXNpbmc6IFwiZWxhc3RpY091dFwifSlcclxuICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGlmKHRoaXMuUHJldlByb2dyZXNzKSB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuUHJldlByb2dyZXNzKVxyXG4gICAgICAudG8oMSwge3NjYWxlOiAwLjZ9LCB7ZWFzaW5nOiBcImVsYXN0aWNPdXRcIn0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVUYWtlUGhvdG8oKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfQ2FtZXJhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlByb2dyZXNzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSS5nZXRDaGlsZEJ5TmFtZShcIlBpY2tUcmF5XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgbGV0IGNhbWVyYUZyYW1lID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0NhbWVyYS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpO1xyXG4gICAgbGV0IGRvbGwgPSB0aGlzLk5vZGVzQ29udGFpbmVyLlVJLmdldENoaWxkQnlOYW1lKFwiRG9sbHNcIik7XHJcblxyXG4gICAgY2MudHdlZW4oY2FtZXJhRnJhbWUpXHJcbiAgICAudG8oMSwge29wYWNpdHk6IDI1NX0sICB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxyXG4gICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgY2MudHdlZW4oZG9sbClcclxuICAgIC50bygxLCB7eTogNDAsIHNjYWxlOiAwLjIyfSwge2Vhc2luZzogXCJlbGFzdGljT3V0XCJ9KVxyXG4gICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fRG9sbENhbWVyYSlcclxuICAgIC50bygxLCB7b3BhY2l0eTogMjU1fSwgIHtlYXNpbmc6ICdlbGFzdGljT3V0J30pXHJcbiAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX0RvbGxDYW1lcmEpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fRG9sbENhbWVyYSlcclxuICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgKS5zdGFydCgpO1xyXG4gICAgfSlcclxuICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0NUQShpbnRlcnZhbElEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNUQV9BbmltXCIpO1xyXG4gICAgfSwgMC41KTtcclxuXHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyB0aGlzLnJlc2V0KCk7XHJcbiAgICAvLyB0aGlzLmFjdGl2ZUNhc3VhbFNraW5zV2l0aEFuaW0oKTtcclxuICAgIC8vIH0sIDIuNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHBsYXlHcmVhdFNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnBpY2tJdGVtU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5waWNrSXRlbVNvdW5kLnZvbHVtZSA9IDAuNTtcclxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XHJcbiAgICBzd2l0Y2ggKHJhbmRvbSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzMSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5GeF9Cb251czIpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMzKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzNClcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5jdXJyZW50TGlzdEl0ZW0gPD0gMCkgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5MZWZ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19