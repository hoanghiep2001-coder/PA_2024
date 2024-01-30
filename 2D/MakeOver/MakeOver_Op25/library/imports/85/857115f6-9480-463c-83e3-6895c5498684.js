"use strict";
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