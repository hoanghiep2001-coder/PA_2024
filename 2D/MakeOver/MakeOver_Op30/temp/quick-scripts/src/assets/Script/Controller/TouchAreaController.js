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
var Anims_1 = require("../Data/Anims");
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
        _this.Btn_1 = null;
        _this.Btn_2 = null;
        // state
        _this.isTouch = false;
        _this.DryerPoint = null;
        _this.DryerSpine = null;
        _this.DryerToMouthArea = null;
        _this.toothPastePoint = null;
        _this.toothPasteSpine = null;
        _this.toothPasteHeadPoint = null;
        _this.WaterBubblePoint = null;
        _this.WaterBubbleSpine = null;
        _this.WaterBubbleHeadPoint = null;
        return _this;
        // private setCurrentPosCleanser(pos): void {
        //   let posConverted = this.node.convertToNodeSpaceAR(pos);
        //   this.NodeContainer.Point_Cleanser.setPosition(posConverted)
        // }
        // private setCurrentPosTweezers(pos): void {
        //   this.NodeContainer.Point_Tweezers.x = (pos.x - cc.winSize.width / 2) - Constants.Responsive.calculatedX;
        //   this.NodeContainer.Point_Tweezers.y = (pos.y - cc.winSize.height / 2) - Constants.Responsive.calculatedY;
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.initVarialbes = function () {
        this.DryerPoint = this.NodeContainer.dryer.getChildByName("Point_Dryer");
        this.DryerSpine = this.NodeContainer.dryer.getChildByName("sp_dryer").getComponent(sp.Skeleton);
        this.DryerToMouthArea = this.NodeContainer.dryer.getChildByName("Point_Mouth");
        this.toothPastePoint = this.NodeContainer.toothPaste.getChildByName("Point_Tooth");
        this.toothPasteSpine = this.NodeContainer.toothPaste.getChildByName("sp_Tooth").getComponent(sp.Skeleton);
        this.toothPasteHeadPoint = this.NodeContainer.toothPaste.getChildByName("HeadPoint_Tooth");
        this.WaterBubblePoint = this.NodeContainer.waterTooth.getChildByName("Point_WaterTooth");
        this.WaterBubbleSpine = this.NodeContainer.waterTooth.getChildByName("sp_WaterTooth").getComponent(sp.Skeleton);
        this.WaterBubbleHeadPoint = this.NodeContainer.waterTooth.getChildByName("HeadPoint_WaterTooth");
    };
    TouchAreaController.prototype.start = function () {
        this.initVarialbes();
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.DryerPoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.DryerPoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.DryerPoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.DryerPoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.Btn_1.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.Btn_2.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
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
        this.WaterBubbleSpine.setAnimation(0, Anims_1.SpineAnims.waterToothAnim.Action, true);
        constants_1.Constants.isDoneToothPaste && this.AudioManager.playSound(constants_1.Constants.SoundTrack.toothPaste2Sound);
        this.GamePlay.hand.getComponent(cc.Animation).stop();
        this.GamePlay.hand.opacity = 0;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        var debug = false;
        this.debug(debug, 3, posConverted, pos);
    };
    TouchAreaController.prototype.debug = function (isDebug, toolToDebug, posConverted, pos) {
        if (isDebug) {
            switch (toolToDebug) {
                case 1:
                    this.moveDryer(posConverted, pos);
                    break;
                case 2:
                    this.moveToothPaste(posConverted, pos);
                    break;
                case 3:
                    this.moveWaterBrush(posConverted, pos);
                    break;
                default:
                    break;
            }
            return;
        }
        else {
            !constants_1.Constants.isDoneDryer && this.moveDryer(posConverted, pos);
            constants_1.Constants.isDoneDryer && !constants_1.Constants.isDoneToothPaste && this.moveToothPaste(posConverted, pos);
            constants_1.Constants.isDoneToothPaste && !constants_1.Constants.isDoneWaterBrush && this.moveWaterBrush(posConverted, pos);
        }
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        var pos = e.getLocation();
        this.WaterBubbleSpine.setAnimation(0, Anims_1.SpineAnims.waterToothAnim.Idle, true);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.toothPaste2Sound);
    };
    TouchAreaController.prototype.moveDryer = function (posConverted, pos) {
        this.DryerPoint.setPosition(posConverted.x, posConverted.y);
        this.DryerSpine.node.setPosition(posConverted.x, posConverted.y);
    };
    TouchAreaController.prototype.moveToothPaste = function (posConverted, pos) {
        this.toothPastePoint.setPosition(posConverted.x, posConverted.y);
        this.toothPasteHeadPoint.setPosition(posConverted.x - 80, posConverted.y);
        this.toothPasteSpine.node.x = (pos.x - cc.winSize.width / 2) - 100;
        this.toothPasteSpine.node.y = (pos.y - cc.winSize.height / 2) - 15;
        var bdx = this.toothPasteHeadPoint.getBoundingBox();
        this.GamePlay.checkCollideBubblePoints(bdx);
    };
    TouchAreaController.prototype.moveWaterBrush = function (posConverted, pos) {
        console.log("check");
        this.WaterBubblePoint.setPosition(posConverted.x, posConverted.y);
        this.WaterBubbleHeadPoint.setPosition(posConverted.x - 105, posConverted.y + 110);
        this.WaterBubbleSpine.node.x = (pos.x - cc.winSize.width / 2) - 90;
        this.WaterBubbleSpine.node.y = (pos.y - cc.winSize.height / 2) + 100;
        var bdx = this.WaterBubbleHeadPoint.getBoundingBox();
        this.GamePlay.checkBrushTeeth(bdx);
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
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_1", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_2", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();