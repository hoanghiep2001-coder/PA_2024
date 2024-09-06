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