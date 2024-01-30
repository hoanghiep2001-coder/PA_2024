
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFTQztRQW5TRyxTQUFTO1FBRVQsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBRVosWUFBTSxHQUFnQixJQUFJLENBQUM7UUFHM0IsT0FBTztRQUVQLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBRTVCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFJMUIsVUFBVTtRQUVWLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRTdCLHNCQUFnQixHQUF3QixFQUFFLENBQUM7UUFFM0MscUJBQWUsR0FBa0IsRUFBRSxDQUFDO1FBRXBDLE1BQU07UUFFTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFFBQVE7UUFDUixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFnQixJQUFJLENBQUM7UUFDbEMs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UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7c0RBQ2E7SUFFM0M7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBQ1k7SUFJcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBbERSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxUzVCO0lBQUQsZUFBQztDQXJTRCxBQXFTQyxDQXJTcUMsRUFBRSxDQUFDLFNBQVMsR0FxU2pEO2tCQXJTb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gU2NyaXB0XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBwZW5jaWw6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCZ19IaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHBvaW50X2RyYXdzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9idG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGZpcmVXb3JrczogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuXHJcbiAgICAvLyBFZmZlY3RzXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgZWZmZWN0X05vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gICAgZWZmZWN0X0ZpcmVXb3JrczogY2MuUGFydGljbGVTeXN0ZW1bXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXHJcbiAgICBzcGluZV9GaXJlV29ya3M6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuXHJcbiAgICAvLyBMdjNcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3BpbmVfbGV2ZWwzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dF9sdjM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBTdGF0ZVxyXG4gICAgY3VyZW50UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgY3VycmVudEhpbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY3VycmVudFBlbmNpbDogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgY3VyZXJudFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGN1cnJlbnRIaXRQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgZG9uZUhpdFBvaW50czogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfRmlyZVdvcmtzLmZvckVhY2goZncgPT4gZncubm9kZS5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXR1cExldmVsKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQmdfSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGFuZGxlQmdUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLkJnX0hpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuaGFuZGxlQmdUb3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuQmdfSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmhhbmRsZUJnVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuQmdfSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmhhbmRsZUJnVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJnVG91Y2hTdGFydChlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuY3VycmVudEx2ID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jdXJlbnRQb3NpdGlvbiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNldHVwTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIaW50LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudEhpbnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShgSGFuZF9BbmltTHYke0NvbnN0YW50cy5jdXJyZW50THZ9YClcclxuICAgICAgICB0aGlzLmN1cmVybnRQb2ludC5zZXRQb3NpdGlvbih0aGlzLnNldEN1cnJlbnRQb2ludFBvcygpKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5kcmF3U291bmQubG9vcCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJnVG91Y2hNb3ZlKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQZW5jaWwubW92ZVRvKFxyXG4gICAgICAgICAgICB0aGlzLmN1cmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5jdXJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGVuY2lsLmxpbmVUbyhcclxuICAgICAgICAgICAgZS5nZXRMb2NhdGlvbigpLnggLSBjYy53aW5TaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgZS5nZXRMb2NhdGlvbigpLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJlbnRQb3NpdGlvbiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQZW5jaWwuc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdXJlcm50UG9pbnQuc2V0UG9zaXRpb24odGhpcy5zZXRDdXJyZW50UG9pbnRQb3MoKSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbnRlcnNlY3RQb2ludHMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVCZ1RvdWNoRW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGVuY2lsLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZG9uZUhpdFBvaW50cy5maW5kKHBvaW50ID0+IHBvaW50ID09PSBmYWxzZSk7XHJcbiAgICAgICAgbGV0IG5ld1Jlc3VsdCA9IFN0cmluZyhyZXN1bHQpO1xyXG4gICAgICAgIG5ld1Jlc3VsdCA9PT0gXCJmYWxzZVwiID8gdGhpcy5kcmF3QWdhaW4oKSA6IHRoaXMuZHJhd1N1Y2Nlc3MoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cExldmVsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhpbnQgPSB0aGlzLmhpbnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGVuY2lsID0gdGhpcy5wZW5jaWw7XHJcbiAgICAgICAgdGhpcy5jdXJlcm50UG9pbnQgPSB0aGlzLnBvaW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhpdFBvaW50cyA9IHRoaXMucG9pbnRfZHJhd3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0Q3VycmVudFBvaW50UG9zKCk6IGNjLlZlYzIge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuICAgICAgICByZXN1bHQueCA9IHRoaXMuY3VyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIHJlc3VsdC55ID0gKHRoaXMuY3VyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUludGVyc2VjdFBvaW50cygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudEhpdFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnRIaXRQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5jdXJlcm50UG9pbnQuZ2V0Qm91bmRpbmdCb3goKSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kb25lSGl0UG9pbnRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRvbmVIaXRQb2ludHNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lSGl0UG9pbnRzW2pdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGl0UG9pbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZHJhd0FnYWluKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhZ2FpblwiKTtcclxuICAgICAgICB0aGlzLmRvbmVIaXRQb2ludHNbMF0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvbmVIaXRQb2ludHNbMV0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvbmVIaXRQb2ludHNbMl0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3U3VjY2VzcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRyYXcgc3VjY2Vzc1wiKTtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG9uZUhpdFBvaW50c1swXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG9uZUhpdFBvaW50c1sxXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG9uZUhpdFBvaW50c1syXSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmVmZmVjdF9GaXJlV29ya3NbMF0ucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB0aGlzLmVmZmVjdF9GaXJlV29ya3NbMV0ucmVzZXRTeXN0ZW0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVGaXJlV29ya3MoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVGaXJlV29ya3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmZpcmV3b3Jrc1NvdW5kKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5maXJld29ya3NTb3VuZC52b2x1bWUgPSAwLjc7XHJcbiAgICAgICAgdGhpcy5maXJlV29ya3MuZm9yRWFjaChmdyA9PiB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGZ3KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnBvaW50X2RyYXdzWzNdLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfRmlyZVdvcmtzWzBdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGluZV9GaXJlV29ya3NbM10ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3VjY2Vzc1NvdW5kKTtcclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lX0ZpcmVXb3Jrc1sxXS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfRmlyZVdvcmtzWzRdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAxLjUpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfRmlyZVdvcmtzWzJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGluZV9GaXJlV29ya3NbNV0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZURvbmVMZXZlbCgpO1xyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRG9uZUxldmVsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BpbmVfbGV2ZWwzLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfbGV2ZWwzLmdldFBhcmVudCgpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJDaGFyYWN0ZXJfQW5pbVwiKTtcclxuICAgICAgICB0aGlzLkJnX0hpZGVNYXNrLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgdGhpcy5CZ19IaWRlTWFzay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSk7XHJcbiAgICAgICAgdGhpcy5CZ19IaWRlTWFzay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcclxuICAgICAgICB0aGlzLkJnX0hpZGVNYXNrLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdTdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5DVEFfYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgICAgICAgLy8gdGhpcy5DVEFfb3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICB9LCAyKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcbiAgICBcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19