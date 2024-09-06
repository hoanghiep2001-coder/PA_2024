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
        // đây là đồ vật khi tương tác touch
        _this.currentInteractObject = null;
        // đây là vị trí của đồ vật khi lần đầu tương tác touch
        _this.ObjectPrevPos = null;
        // đây là vùng impact
        _this.currentAreaToImpact = null;
        // fx của đồ vật tương đương scene
        _this.currentFX = null;
        // scene hiện tại đang tương tác
        _this.curentScene = null;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodeController.objects.forEach(function (obj) {
            obj.on(cc.Node.EventType.TOUCH_START, _this.touchStart, _this);
            obj.on(cc.Node.EventType.TOUCH_MOVE, _this.touchMove, _this);
            obj.on(cc.Node.EventType.TOUCH_END, _this.touchEnd, _this);
            obj.on(cc.Node.EventType.TOUCH_CANCEL, _this.touchEnd, _this);
        });
        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg && aplovin
        // this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // iroonsoource
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_START, this.GamePlay.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.touchStart = function (e) {
        this.GamePlay.handleIronSourcePlaySound();
        if (!constants_1.Constants.isCanTouch)
            return;
        this.isTouch = true;
        this.currentInteractObject = e.target;
        this.ObjectPrevPos = this.currentInteractObject.getPosition();
        this.curentScene = this.currentInteractObject.parent;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.currentInteractObject.setPosition(convertedPos);
        this.startTouchPos = convertedPos;
        this.currentAreaToImpact = this.curentScene.getChildByName("circle");
        this.currentFX = this.curentScene.getChildByName("FX_doneStep").children[0].getComponent(cc.ParticleSystem);
        var hint = this.curentScene.getChildByName("Hint");
        hint.active = false;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || !this.isTouch)
            return;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.currentInteractObject.setPosition(convertedPos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        if (!constants_1.Constants.isCanTouch || !this.isTouch)
            return;
        this.isTouch = false;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        if (this.isTouchInteractArea()) {
            this.GamePlay.handleDoneLevel(this.currentFX, this.curentScene, this.currentInteractObject);
        }
        else {
            this.GamePlay.handleDragWrong(convertedPos, this.ObjectPrevPos, this.currentInteractObject);
        }
    };
    TouchAreaController.prototype.isTouchInteractArea = function () {
        var result = false;
        if (this.currentInteractObject.name === "object_true") {
            var objBdx = this.currentInteractObject.getBoundingBox();
            var areaBdx = this.currentAreaToImpact.getBoundingBox();
            if (areaBdx.intersects(objBdx))
                return true;
        }
        return result;
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