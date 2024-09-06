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
var NodeController_1 = require("./NodeController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeController = null;
        _this.CTA_Btn = null;
        _this.CTA_Overlay = null;
        // state
        _this.isTouch = false;
        _this.isActiveCTA = false;
        _this.startTouchPos = null;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg && aplovin
        this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.touchStart = function (e) {
        // ironsource
        this.GamePlay.playYameteKudasaiSound();
        this.GamePlay.handleIronSourcePlaySound();
        if (!constants_1.Constants.isCanTouch)
            return;
        this.isTouch = true;
        this.NodeController.Point.active = true;
        !constants_1.Constants.isDoneEraser && this.AudioManager.playSound(constants_1.Constants.SoundTrack.eraserSound);
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.NodeController.Point.getComponent(cc.Animation).stop();
        this.NodeController.Point.setPosition(convertedPos);
        this.startTouchPos = convertedPos;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || !this.isTouch)
            return;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.NodeController.Point.setPosition(convertedPos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        if (!constants_1.Constants.isCanTouch || !this.isTouch)
            return;
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.eraserSound);
        var result;
        // lọc ra những thằng đã bị xóa
        // dựa vào result in ra kết quả
        if (result) {
            // check xóa đúng hoặc sai
            result.length >= 2 && this.GamePlay.handleDeleteWrong(this.startTouchPos, result);
            result.length === 1 && this.GamePlay.filterCorrectResult(result[0], this.startTouchPos);
            cc.log("check Result..");
        }
        else {
            // ko có result là xóa sai, xóa linh tinh, chưa xóa, ...
            this.GamePlay.handleDeleteWrong(this.startTouchPos, result);
        }
    };
    TouchAreaController.prototype.unActivePoint = function () {
        this.NodeController.Point.active = false;
    };
    TouchAreaController.prototype.offEvent = function () {
        this.isActiveCTA = false;
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_START);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_END);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_CANCEL);
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
        property(NodeController_1.default)
    ], TouchAreaController.prototype, "NodeController", void 0);
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