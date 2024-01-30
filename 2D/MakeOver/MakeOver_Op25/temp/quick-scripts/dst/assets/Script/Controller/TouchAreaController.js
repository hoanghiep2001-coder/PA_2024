
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var Ultils_1 = require("../Data/Ultils");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // node
        _this.HideMask = null;
        _this.Point_maggot = null;
        _this.Point_tweezers = null;
        _this.Head_tweezers = null;
        _this.CTA = null;
        _this.spine_CleanHair = null;
        _this.bubblePoints = [];
        _this.spine_Bubbles = [];
        _this.spine_Tweezers = null;
        _this.spine_Maggot = null;
        // state
        _this.activeBubbleFlag = false;
        _this.isTouchCleanHairFlag = false;
        _this.isTouchSpineMaggotFlag = false;
        _this.registerEventStep2Flag = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
        this.CTA.active = false;
        constants_1.Constants.cleanHair_Points = this.bubblePoints;
        constants_1.Constants.spine_Bubbles = this.spine_Bubbles;
        // mtg & applovin
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, () => {
        //   Constants.step === 3 && this.GameController.installHandle();
        // }, this);
        // ironsource
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.registerEvent(constants_1.Constants.step);
    };
    TouchAreaController.prototype.registerEvent = function (step) {
        switch (step) {
            case 1:
                this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
                this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
                this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
                this.spine_CleanHair.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
                break;
            case 2:
                if (this.registerEventStep2Flag) {
                    return;
                }
                this.registerEventStep2Flag = true;
                this.Point_tweezers.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
                this.Point_tweezers.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
                this.Point_tweezers.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
                this.Point_tweezers.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
                break;
            case 3:
                this.CTA.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
                break;
            default:
                break;
        }
    };
    TouchAreaController.prototype.offEvent = function (step) {
        switch (step) {
            case 1:
                this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_START);
                this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_MOVE);
                this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_END);
                this.spine_CleanHair.node.off(cc.Node.EventType.TOUCH_CANCEL);
                break;
            case 2:
                this.Point_tweezers.off(cc.Node.EventType.TOUCH_START);
                this.Point_tweezers.off(cc.Node.EventType.TOUCH_MOVE);
                this.Point_tweezers.off(cc.Node.EventType.TOUCH_END);
                this.Point_tweezers.off(cc.Node.EventType.TOUCH_CANCEL);
                break;
            default:
                break;
        }
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    TouchAreaController.prototype.touchStart = function (event) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        if (constants_1.Constants.step === 1) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.conClearSound);
        }
        constants_1.Constants.step === 3 && this.GameController.installHandle();
        this.GamePlay.getComponent(cc.Animation).stop("GamePlay_TutorialStep3Anim");
        this.GamePlay.getComponent(cc.Animation).stop("GamePlay_TutorialStep2Anim");
        this.GamePlay.getComponent(cc.Animation).stop("GamePlay_TutorialAnim");
        constants_1.Constants.isTouch = true;
        this.GamePlay.hair_tut.active = false;
        this.spine_CleanHair.setAnimation(0, "action", true);
        this.GamePlay.hand.active = false;
        this.GamePlay.hand.opacity = 0;
        this.GamePlay.overlay.opacity = 0;
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (event) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        this.GamePlay.hair_tut.active = false;
        this.GamePlay.hand.active = false;
        this.GamePlay.overlay.opacity = 0;
        // step 1
        if (constants_1.Constants.step === 1) {
            constants_1.Constants.currentPosition = this.node.convertToNodeSpaceAR(event.getLocation());
            var bdx = this.spine_CleanHair.node.getBoundingBox();
            Ultils_1.Ultils.TouchArea.checkCollideBubblePoints(bdx);
            this.spine_CleanHair.node.setPosition(constants_1.Constants.currentPosition.x + constants_1.Constants.Responsive.calculatedX, constants_1.Constants.currentPosition.y + constants_1.Constants.Responsive.calculatedY);
            if (!this.isTouchCleanHairFlag && constants_1.Constants.isTouchCleanHair) {
                this.isTouchCleanHairFlag = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.conClearSound);
            }
        }
        // step 2
        if (constants_1.Constants.step === 2) {
            constants_1.Constants.currentPosition = new cc.Vec2(event.getLocation().x - cc.winSize.width / 2, event.getLocation().y - cc.winSize.height / 2);
            this.Point_tweezers.setPosition(constants_1.Constants.currentPosition.x + constants_1.Constants.Responsive.calculatedX, constants_1.Constants.currentPosition.y + constants_1.Constants.Responsive.calculatedY);
            this.Head_tweezers.setPosition(constants_1.Constants.currentPosition.x - 45 + constants_1.Constants.Responsive.calculatedX, constants_1.Constants.currentPosition.y - 60 + constants_1.Constants.Responsive.calculatedY);
            this.spine_Tweezers.node.setPosition(constants_1.Constants.currentPosition.x - 50 + constants_1.Constants.Responsive.calculatedX, constants_1.Constants.currentPosition.y - 70 + constants_1.Constants.Responsive.calculatedY);
            var bdx = this.Head_tweezers.getBoundingBox();
            var maggot = this.Point_maggot.getBoundingBox();
            Ultils_1.Ultils.TouchArea.checkCollideMaggot(bdx, maggot);
        }
    };
    TouchAreaController.prototype.touchEnd = function (event) {
        var _this = this;
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        this.scheduleOnce(function () {
            if (constants_1.Constants.step === 1 && !constants_1.Constants.isDoneCleanHair) {
                _this.GamePlay.hair_tut.active = true;
            }
        }, 3);
        this.isTouchCleanHairFlag = false;
        constants_1.Constants.isTouchCleanHair = false;
        constants_1.Constants.isTouch = true;
        this.spine_CleanHair.setAnimation(0, "idle", false);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.conClearSound);
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
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
    TouchAreaController.prototype.handleActiveBubbles = function () {
        this.activeBubbleFlag = true;
        this.spine_Bubbles.forEach(function (bubble) { return bubble.setAnimation(0, "idle03_bubble", false); });
        this.offEvent(constants_1.Constants.step);
    };
    TouchAreaController.prototype.handleActiveSpineMaggot = function () {
        var _this = this;
        this.GamePlay.circle.active = false;
        this.isTouchSpineMaggotFlag = true;
        this.spine_Maggot.setAnimation(0, "action03_squeze_big", false);
        this.setCompleteSpine();
        this.spine_Tweezers.node.active = false;
        this.offEvent(constants_1.Constants.step);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound);
        }, 0.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
        }, 1);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
        }, 1.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
        }, 2);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
        }, 2.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound);
        }, 3.2);
    };
    TouchAreaController.prototype.setCompleteSpine = function () {
        var _this = this;
        this.spine_Maggot.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "action03_squeze_big") {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                _this.scheduleOnce(function () {
                    constants_1.Constants.step = 3;
                    _this.CTA.active = true;
                    _this.GamePlay.getComponent(cc.Animation).play("GamePlay_TutorialStep3Anim");
                    _this.registerEvent(3);
                }, 0.5);
            }
        });
    };
    TouchAreaController.prototype.update = function (dt) {
        !this.activeBubbleFlag && constants_1.Constants.isDoneCleanHair && this.handleActiveBubbles();
        !this.isTouchSpineMaggotFlag && constants_1.Constants.isTouchMaggot && this.handleActiveSpineMaggot();
        constants_1.Constants.isDoneStep1 && !this.registerEventStep2Flag && this.registerEvent(2);
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Point_maggot", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Point_tweezers", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Head_tweezers", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TouchAreaController.prototype, "spine_CleanHair", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "bubblePoints", void 0);
    __decorate([
        property([sp.Skeleton])
    ], TouchAreaController.prototype, "spine_Bubbles", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TouchAreaController.prototype, "spine_Tweezers", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TouchAreaController.prototype, "spine_Maggot", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBNlNDO1FBM1NDLFlBQVk7UUFFWixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUlwQixxQkFBZSxHQUFnQixJQUFJLENBQUM7UUFFcEMsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0IsbUJBQWEsR0FBa0IsRUFBRSxDQUFDO1FBRWxDLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUVuQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsUUFBUTtRQUNSLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQywwQkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBQ3hDLDRCQUFzQixHQUFZLEtBQUssQ0FBQzs7SUFxUTFDLENBQUM7SUFqUVcsb0NBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIscUJBQVMsQ0FBQyxnQkFB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QUksQ0FBQzt5REFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNFO0lBSXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0VBQ2M7SUFFcEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkRBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7OERBQ1U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrREFDYTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZEQUNXO0lBakN0QixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTZTL0I7SUFBRCwwQkFBQztDQTdTRCxBQTZTQyxDQTdTd0MsRUFBRSxDQUFDLFNBQVMsR0E2U3BEO0FBN1NZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVsdGlscyB9IGZyb20gXCIuLi9EYXRhL1VsdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBub2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFBvaW50X21hZ2dvdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgUG9pbnRfdHdlZXplcnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEhlYWRfdHdlZXplcnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgc3BpbmVfQ2xlYW5IYWlyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBidWJibGVQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25dKVxyXG4gIHNwaW5lX0J1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgc3BpbmVfVHdlZXplcnM6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgc3BpbmVfTWFnZ290OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGFjdGl2ZUJ1YmJsZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1RvdWNoQ2xlYW5IYWlyRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzVG91Y2hTcGluZU1hZ2dvdEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICByZWdpc3RlckV2ZW50U3RlcDJGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHMgPSB0aGlzLmJ1YmJsZVBvaW50cztcclxuICAgIENvbnN0YW50cy5zcGluZV9CdWJibGVzID0gdGhpcy5zcGluZV9CdWJibGVzO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAvLyAgIENvbnN0YW50cy5zdGVwID09PSAzICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChDb25zdGFudHMuc3RlcCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KHN0ZXA6IG51bWJlcik6IHZvaWQge1xyXG4gICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLnNwaW5lX0NsZWFuSGFpci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfQ2xlYW5IYWlyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfQ2xlYW5IYWlyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNwaW5lX0NsZWFuSGFpci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICBpZiAodGhpcy5yZWdpc3RlckV2ZW50U3RlcDJGbGFnKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRTdGVwMkZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuUG9pbnRfdHdlZXplcnMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5Qb2ludF90d2VlemVycy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5Qb2ludF90d2VlemVycy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuUG9pbnRfdHdlZXplcnMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRoaXMuQ1RBLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgb2ZmRXZlbnQoc3RlcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHN0ZXApIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMuc3BpbmVfQ2xlYW5IYWlyLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICB0aGlzLnNwaW5lX0NsZWFuSGFpci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCk7XHJcbiAgICAgICAgdGhpcy5zcGluZV9DbGVhbkhhaXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcclxuICAgICAgICB0aGlzLnNwaW5lX0NsZWFuSGFpci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgdGhpcy5Qb2ludF90d2VlemVycy5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG4gICAgICAgIHRoaXMuUG9pbnRfdHdlZXplcnMub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgIHRoaXMuUG9pbnRfdHdlZXplcnMub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5Qb2ludF90d2VlemVycy5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQ29uc3RhbnRzLnN0ZXAgPT09IDEpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbkNsZWFyU291bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5zdGVwID09PSAzICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG5cclxuICAgIHRoaXMuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcIkdhbWVQbGF5X1R1dG9yaWFsU3RlcDNBbmltXCIpO1xyXG4gICAgdGhpcy5HYW1lUGxheS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKFwiR2FtZVBsYXlfVHV0b3JpYWxTdGVwMkFuaW1cIik7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJHYW1lUGxheV9UdXRvcmlhbEFuaW1cIik7XHJcbiAgICBcclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgIHRoaXMuR2FtZVBsYXkuaGFpcl90dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwaW5lX0NsZWFuSGFpci5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLkdhbWVQbGF5Lm92ZXJsYXkub3BhY2l0eSA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hNb3ZlKGV2ZW50OiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5HYW1lUGxheS5oYWlyX3R1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuR2FtZVBsYXkuaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuR2FtZVBsYXkub3ZlcmxheS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAvLyBzdGVwIDFcclxuICAgIGlmIChDb25zdGFudHMuc3RlcCA9PT0gMSkge1xyXG4gICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG5cclxuICAgICAgbGV0IGJkeCA9IHRoaXMuc3BpbmVfQ2xlYW5IYWlyLm5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja0NvbGxpZGVCdWJibGVQb2ludHMoYmR4KTtcclxuICAgICAgdGhpcy5zcGluZV9DbGVhbkhhaXIubm9kZS5zZXRQb3NpdGlvbihcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWCxcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWVxyXG4gICAgICApO1xyXG4gICAgICBpZighdGhpcy5pc1RvdWNoQ2xlYW5IYWlyRmxhZyAmJiBDb25zdGFudHMuaXNUb3VjaENsZWFuSGFpcikge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaENsZWFuSGFpckZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb25DbGVhclNvdW5kKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBzdGVwIDJcclxuICAgIGlmIChDb25zdGFudHMuc3RlcCA9PT0gMikge1xyXG4gICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uID0gbmV3IGNjLlZlYzIoXHJcbiAgICAgICAgZXZlbnQuZ2V0TG9jYXRpb24oKS54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgZXZlbnQuZ2V0TG9jYXRpb24oKS55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLlBvaW50X3R3ZWV6ZXJzLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCArIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYLFxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSArIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuSGVhZF90d2VlemVycy5zZXRQb3NpdGlvbihcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSA0NSArIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYLFxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIDYwICsgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zcGluZV9Ud2VlemVycy5ub2RlLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIDUwICsgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFgsXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gNzAgKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGJkeCA9IHRoaXMuSGVhZF90d2VlemVycy5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICBsZXQgbWFnZ290ID0gdGhpcy5Qb2ludF9tYWdnb3QuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja0NvbGxpZGVNYWdnb3QoYmR4LCBtYWdnb3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICBpZiAoIUNvbnN0YW50cy5pc0NhblRvdWNoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuc3RlcCA9PT0gMSAmJiAhQ29uc3RhbnRzLmlzRG9uZUNsZWFuSGFpcikge1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuaGFpcl90dXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSwgMyk7XHJcblxyXG4gICAgdGhpcy5pc1RvdWNoQ2xlYW5IYWlyRmxhZyA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzVG91Y2hDbGVhbkhhaXIgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gdHJ1ZTsgXHJcbiAgICB0aGlzLnNwaW5lX0NsZWFuSGFpci5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIGZhbHNlKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb25DbGVhclNvdW5kKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmVCdWJibGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVCdWJibGVGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BpbmVfQnViYmxlcy5mb3JFYWNoKGJ1YmJsZSA9PiBidWJibGUuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZTAzX2J1YmJsZVwiLCBmYWxzZSkpO1xyXG4gICAgdGhpcy5vZmZFdmVudChDb25zdGFudHMuc3RlcCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmVTcGluZU1hZ2dvdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuR2FtZVBsYXkuY2lyY2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1RvdWNoU3BpbmVNYWdnb3RGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BpbmVfTWFnZ290LnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjAzX3NxdWV6ZV9iaWdcIiwgZmFsc2UpO1xyXG4gICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKCk7XHJcblxyXG4gICAgdGhpcy5zcGluZV9Ud2VlemVycy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5vZmZFdmVudChDb25zdGFudHMuc3RlcCk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMVNvdW5kKTtcclxuICAgIH0sIDAuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpO1xyXG4gICAgfSwgMSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpO1xyXG4gICAgfSwgMS41KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICB9LCAyKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICB9LCAyLjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuM1NvdW5kKTtcclxuICAgIH0sIDMuMik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb21wbGV0ZVNwaW5lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcGluZV9NYWdnb3Quc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSkgPT4ge1xyXG4gICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gXCJhY3Rpb24wM19zcXVlemVfYmlnXCIpIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29tcGxldGVTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIENvbnN0YW50cy5zdGVwID0gMztcclxuICAgICAgICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLkdhbWVQbGF5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJHYW1lUGxheV9UdXRvcmlhbFN0ZXAzQW5pbVwiKTtcclxuICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgzKTtcclxuICAgICAgICB9LCAwLjUpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgIXRoaXMuYWN0aXZlQnViYmxlRmxhZyAmJiBDb25zdGFudHMuaXNEb25lQ2xlYW5IYWlyICYmIHRoaXMuaGFuZGxlQWN0aXZlQnViYmxlcygpO1xyXG4gICAgIXRoaXMuaXNUb3VjaFNwaW5lTWFnZ290RmxhZyAmJiBDb25zdGFudHMuaXNUb3VjaE1hZ2dvdCAmJiB0aGlzLmhhbmRsZUFjdGl2ZVNwaW5lTWFnZ290KCk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lU3RlcDEgJiYgIXRoaXMucmVnaXN0ZXJFdmVudFN0ZXAyRmxhZyAmJiB0aGlzLnJlZ2lzdGVyRXZlbnQoMik7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==