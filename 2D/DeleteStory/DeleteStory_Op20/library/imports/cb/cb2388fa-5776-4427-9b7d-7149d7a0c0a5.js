"use strict";
cc._RF.push(module, 'cb238j6V3ZEJ5t9cUnXoMCl', 'TouchAreaController');
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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.hideMask = null;
        _this.Text_HelpHer = null;
        _this.hand = null;
        _this.Point = null;
        _this.CTA_Btn = null;
        _this.CTA_Overlay = null;
        // state
        _this.isTouch = false;
        _this.isActiveCTA = false;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        var _this = this;
        this.Point.active = false;
        this.registerEvent();
        setInterval(function () {
            if (_this.isTouch || constants_1.Constants.isDoneEraser) {
                return;
            }
            ;
            _this.hand.opacity = 0;
            _this.hand.active = true;
            _this.Point.active = true;
            _this.Point.getComponent(cc.Animation).play();
        }, 3000);
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg && aplovin
        // this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.touchStart = function (e) {
        if (constants_1.Constants.ironSource.isEndGame)
            return;
        this.GamePlay.handleIronSourcePlaySound();
        this.isTouch = true;
        this.hand.active = false;
        this.Text_HelpHer.active = false;
        this.Point.active = true;
        this.Point.getComponent(cc.Animation).stop();
        !constants_1.Constants.isDoneEraser && this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        constants_1.Constants.touchPoints.push(convertedPos);
    };
    TouchAreaController.prototype.touchMove = function (e) {
        var pos = e.getLocation();
        this.Point.getComponent(cc.Animation).stop();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        constants_1.Constants.touchPoints.push(convertedPos);
    };
    TouchAreaController.prototype.checkStraightLine = function (touchPoints) {
        if (touchPoints.length < 3) {
            return false;
        }
        var A = touchPoints[touchPoints.length - 3];
        var B = touchPoints[touchPoints.length - 2];
        var C = touchPoints[touchPoints.length - 1];
        return (B.x - A.x) * (C.y - A.y) === (B.y - A.y) * (C.x - A.x);
    };
    TouchAreaController.prototype.touchEnd = function () {
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
    };
    TouchAreaController.prototype.unActivePoint = function () {
        this.Point.active = false;
    };
    TouchAreaController.prototype.offEvent = function () {
        this.isActiveCTA = false;
        this.hideMask.off(cc.Node.EventType.TOUCH_START);
        this.hideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.hideMask.off(cc.Node.EventType.TOUCH_END);
        this.hideMask.off(cc.Node.EventType.TOUCH_CANCEL);
    };
    TouchAreaController.prototype.update = function (dt) {
        this.isActiveCTA && this.offEvent();
        this.GamePlay.handleMuteSoundIronSource();
    };
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Text_HelpHer", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Point", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA_Btn", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA_Overlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.default = TouchAreaController;

cc._RF.pop();