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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        // this.IronSource.handleIronSourcePlaySound();
        // mtg & applovin
        // Constants.isToStore && this.GameController.installHandle();
    };
    TouchAreaController.prototype.enableTouch = function () {
        constants_1.Constants.isCanTouch = false;
    };
    TouchAreaController.prototype.touchStart = function (e) {
        constants_1.Constants.isToStore && this.GameController.installHandle();
        if (!constants_1.Constants.isCanTouch)
            return;
        constants_1.Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        if (!constants_1.Constants.isDoneCleanser)
            this.isTouch = true;
        !constants_1.Constants.isDoneCleanser && this.GamePlay.activeCleanSound();
        this.NodeContainer.Hand_1.active = false;
        this.NodeContainer.Hand_2.active = false;
        this.NodeContainer.Text_Drag.active = false;
        // this.IronSource.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        !constants_1.Constants.isDoneCleanser && this.moveCleanser(posConverted, pos);
        constants_1.Constants.isDoneCleanser && this.moveTweezers(posConverted, pos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        var pos = e.getLocation();
        !constants_1.Constants.isDoneCleanser && this.setCurrentPosCleanser(pos);
        constants_1.Constants.isDoneCleanser && this.setCurrentPosTweezers(pos);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    TouchAreaController.prototype.moveCleanser = function (posConverted, pos) {
        this.NodeContainer.Point_Cleanser.setPosition(posConverted.x + 35, posConverted.y - 30);
        this.NodeContainer.sp_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60;
        this.NodeContainer.sp_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80;
    };
    TouchAreaController.prototype.moveTweezers = function (posConverted, pos) {
        this.NodeContainer.Point_Tweezers.setPosition(posConverted);
        this.NodeContainer.sp_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.sp_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 90 - constants_1.Constants.Responsive.calculatedY;
        this.NodeContainer.Point_Tweezer_Head.x = (pos.x - cc.winSize.width / 2) - 45 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Point_Tweezer_Head.y = (pos.y - cc.winSize.height / 2) - 85 - constants_1.Constants.Responsive.calculatedY;
    };
    TouchAreaController.prototype.setCurrentPosCleanser = function (pos) {
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        this.NodeContainer.Point_Cleanser.setPosition(posConverted);
    };
    TouchAreaController.prototype.setCurrentPosTweezers = function (pos) {
        this.NodeContainer.Point_Tweezers.x = (pos.x - cc.winSize.width / 2) - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Point_Tweezers.y = (pos.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculatedY;
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();