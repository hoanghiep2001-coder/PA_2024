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
        _this.btn_Yes = null;
        _this.btn_No = null;
        _this.hideMask = null;
        _this.hand = null;
        _this.Point = null;
        _this.CTA_Btn = null;
        // state
        _this.isTouch = false;
        _this.isActiveCTA = false;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        this.btn_Yes.on(cc.Node.EventType.TOUCH_START, this.btnYesTouch, this);
        this.btn_No.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        if (!this.GamePlay.Opening.active) {
            this.registerEvent();
        }
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    TouchAreaController.prototype.btnYesTouch = function () {
        this.btn_Yes.getChildByName("icon").active = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        this.GamePlay.Opening.active = false;
        this.GamePlay.MainContent.active = true;
        this.GamePlay.handleIronSourcePlaySound();
        this.registerEvent();
    };
    TouchAreaController.prototype.touchStart = function (e) {
        constants_1.Constants.life <= 0 && this.GameController.installHandle();
        if (constants_1.Constants.ironSource.isEndGame)
            return;
        this.GamePlay.handleIronSourcePlaySound();
        this.isTouch = true;
        this.hand.active = false;
        this.Point.getComponent(cc.Animation).stop();
        !constants_1.Constants.isDoneEraser && this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        constants_1.Constants.touchPoints.push(convertedPos);
        // mtg && aplovin
        // this.isActiveCTA && this.GameController.installHandle();
    };
    TouchAreaController.prototype.touchMove = function (e) {
        var pos = e.getLocation();
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
        var _this = this;
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.unActivePoint();
        // win
        if (this.GamePlay.isDeleteOverHalf() && this.checkStraightLine(constants_1.Constants.touchPoints)) {
            this.isActiveCTA = true;
            constants_1.Constants.isDoneEraser = true;
            this.GamePlay.winGame();
            this.GamePlay.ageLabel.node.color = cc.Color.GREEN;
            this.GamePlay.increaseAge(constants_1.Constants.age, 18);
            this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }
        // lose
        if (!constants_1.Constants.isDoneEraser) {
            constants_1.Constants.isRestart = true;
            constants_1.Constants.life -= 1;
            constants_1.Constants.ageIncrease += 3;
            this.GamePlay.ageLabel.node.color = cc.Color.RED;
            this.GamePlay.increaseAge(constants_1.Constants.age, constants_1.Constants.ageIncrease);
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
            this.scheduleOnce(function () {
                _this.GamePlay.RestartGame();
            }, 1.5);
        }
    };
    TouchAreaController.prototype.unActivePoint = function () {
        this.Point.active = false;
    };
    TouchAreaController.prototype.update = function (dt) {
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
    ], TouchAreaController.prototype, "btn_Yes", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_No", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Point", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA_Btn", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.default = TouchAreaController;

cc._RF.pop();