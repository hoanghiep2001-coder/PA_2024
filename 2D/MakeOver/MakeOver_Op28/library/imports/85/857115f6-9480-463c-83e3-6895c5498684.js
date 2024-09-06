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
        this.NodeContainer.Flow1_Opt1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow1_Opt2.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow2_Opt1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow2_Opt2.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow3_Opt1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow3_Opt2.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        constants_1.Constants.toStore && this.GameController.installHandle();
        // mtg & applovin
        // Constants.optionDoneLength >= 3 && this.GameController.installHandle();
        // ironsource
        // this.IronSource.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.enableTouch = function () {
        constants_1.Constants.isCanTouch = false;
    };
    TouchAreaController.prototype.touchStart = function (e) {
        constants_1.Constants.toStore && this.GameController.installHandle();
        // this.IronSource.handleIronSourcePlaySound();
        // if (!Constants.isCanTouch) return;
        // Constants.optionDoneLength <= 2 && this.enableTouch();
        // let target = e.target._name;
        // switch (target) {
        //   case "item_1":
        //     this.GamePlay.runFlow1_Opt1();
        //     break;
        //   case "item_2":
        //     this.GamePlay.runFlow1_Opt2();
        //     break;
        //   case "item_3":
        //     this.GamePlay.runFlow2_Opt1();
        //     break;
        //   case "item_4":
        //     this.GamePlay.runFlow2_Opt2();
        //     break;
        //   case "item_5":
        //     this.GameController.installHandle();
        //     break;
        //   case "item_6":
        //     this.GameController.installHandle();
        //     break;
        //   default:
        //     break;
        // }
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    TouchAreaController.prototype.update = function (dt) {
        this.isTouch = constants_1.Constants.isTouch;
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