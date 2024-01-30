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
        _this.pencil = null;
        // Node
        _this.Bg_HideMask = null;
        _this.logo = null;
        _this.point = null;
        _this.hint = null;
        _this.point_draws = [];
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        _this.CTA_btn = null;
        _this.fireWorks = [];
        // Effects
        _this.effect_Nodes = [];
        _this.effect_FireWorks = [];
        _this.spine_FireWorks = [];
        // Lv3
        _this.spine_level3 = null;
        _this.text_lv3 = null;
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.currentHitPoints = [];
        _this.doneHitPoints = [false, false, false];
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.CTA.active = false;
        this.spine_FireWorks.forEach(function (fw) { return fw.node.active = false; });
    };
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        // this.setupLevel();
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.registerEvent();
    };
    GamePlay.prototype.registerEvent = function () {
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_START, this.handleBgTouchStart, this);
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_MOVE, this.handleBgTouchMove, this);
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_END, this.handleBgTouchEnd, this);
        this.Bg_HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.handleBgTouchEnd, this);
    };
    GamePlay.prototype.handleBgTouchStart = function (e) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        if (constants_1.Constants.currentLv === 3) {
            this.GameController.installHandle();
            return;
        }
        this.curentPosition = e.getLocation();
        this.setupLevel();
        this.currentHint.getComponent(cc.Animation).stop();
        this.currentHint.active = false;
        // this.currentHint.getComponent(cc.Animation).play(`Hand_AnimLv${Constants.currentLv}`)
        this.curerntPoint.setPosition(this.setCurrentPointPos());
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        this.AudioManager.drawSound.loop = true;
        // this.handleIronSourcePlaySound();
    };
    GamePlay.prototype.handleBgTouchMove = function (e) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        this.currentPencil.moveTo(this.curentPosition.x - cc.winSize.width / 2, this.curentPosition.y - cc.winSize.height / 2 - constants_1.Constants.Responsive.calculated);
        this.currentPencil.lineTo(e.getLocation().x - cc.winSize.width / 2, e.getLocation().y - cc.winSize.height / 2 - constants_1.Constants.Responsive.calculated);
        this.curentPosition = e.getLocation();
        this.currentPencil.stroke();
        this.curerntPoint.setPosition(this.setCurrentPointPos());
        this.handleIntersectPoints();
    };
    GamePlay.prototype.handleBgTouchEnd = function () {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        this.currentPencil.clear();
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        var result = this.doneHitPoints.find(function (point) { return point === false; });
        var newResult = String(result);
        newResult === "false" ? this.drawAgain() : this.drawSuccess();
    };
    GamePlay.prototype.setupLevel = function () {
        this.currentHint = this.hint;
        this.currentPencil = this.pencil;
        this.curerntPoint = this.point;
        this.currentHitPoints = this.point_draws;
    };
    GamePlay.prototype.setCurrentPointPos = function () {
        var result = new cc.Vec2(0, 0);
        result.x = this.curentPosition.x - cc.winSize.width / 2;
        result.y = (this.curentPosition.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculated;
        return result;
    };
    GamePlay.prototype.handleIntersectPoints = function () {
        for (var i = 0; i < this.currentHitPoints.length; i++) {
            var currentNode = this.currentHitPoints[i];
            if (currentNode.getBoundingBox().intersects(this.curerntPoint.getBoundingBox())) {
                for (var j = 0; j < this.doneHitPoints.length; j++) {
                    if (!this.doneHitPoints[j]) {
                        this.doneHitPoints[j] = true;
                        this.currentHitPoints.splice(i, 1);
                        break;
                    }
                }
                break;
            }
        }
    };
    GamePlay.prototype.drawAgain = function () {
        console.log("draw again");
        this.doneHitPoints[0] = false;
        this.doneHitPoints[1] = false;
        this.doneHitPoints[2] = false;
    };
    GamePlay.prototype.drawSuccess = function () {
        console.log("draw success");
        constants_1.Constants.isCanTouch = false;
        this.doneHitPoints[0] = false;
        this.doneHitPoints[1] = false;
        this.doneHitPoints[2] = false;
        this.effect_FireWorks[0].resetSystem();
        this.effect_FireWorks[1].resetSystem();
        this.activeFireWorks();
    };
    GamePlay.prototype.activeFireWorks = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.fireworksSound);
        this.AudioManager.fireworksSound.volume = 0.7;
        this.fireWorks.forEach(function (fw) {
            cc.tween(fw)
                .to(1, {
                y: _this.point_draws[3].y,
                scale: 0
            })
                .start();
        });
        this.scheduleOnce(function () {
            _this.spine_FireWorks[0].node.active = true;
            _this.spine_FireWorks[3].node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.successSound);
        }, 1);
        this.scheduleOnce(function () {
            _this.spine_FireWorks[1].node.active = true;
            _this.spine_FireWorks[4].node.active = true;
        }, 1.5);
        this.scheduleOnce(function () {
            _this.spine_FireWorks[2].node.active = true;
            _this.spine_FireWorks[5].node.active = true;
            _this.handleDoneLevel();
        }, 2);
    };
    GamePlay.prototype.handleDoneLevel = function () {
        var _this = this;
        this.spine_level3.getComponent(sp.Skeleton).setAnimation(0, "action", true);
        this.spine_level3.getParent().getComponent(cc.Animation).stop("Character_Anim");
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_START);
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_END);
        this.Bg_HideMask.off(cc.Node.EventType.TOUCH_CANCEL);
        this.scheduleOnce(function () {
            constants_1.Constants.isDrawSuccess = true;
            _this.CTA.active = true;
            _this.CTA_btn.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
            // mtg & applovin
            // this.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 2);
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
    GamePlay.prototype.update = function (dt) {
        // this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "pencil", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Bg_HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "point", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hint", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "point_draws", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_overlay", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_btn", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "fireWorks", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "effect_Nodes", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "effect_FireWorks", void 0);
    __decorate([
        property([sp.Skeleton])
    ], GamePlay.prototype, "spine_FireWorks", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "spine_level3", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "text_lv3", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();