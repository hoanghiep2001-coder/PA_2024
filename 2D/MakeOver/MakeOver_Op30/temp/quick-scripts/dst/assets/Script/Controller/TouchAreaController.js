
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUFpTUM7UUFoTUMsWUFBWTtRQUVaLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFFBQVE7UUFDUixhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUMvQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBQ3BDLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUNyQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7O1FBeUpyQyw2Q0FBNkM7UUFDN0MsNERBQTREO1FBQzVELGdFQUFnRTtRQUNoRSxJQUFJO1FBRUosNkNBQTZDO1FBQzdDLDZHQUE2RztRQUM3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RUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQWhCWCxtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQWlNL0I7SUFBRCwwQkFBQztDQWpNRCxBQWlNQyxDQWpNd0MsRUFBRSxDQUFDLFNBQVMsR0FpTXBEO0FBak1ZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5lQW5pbXMgfSBmcm9tIFwiLi4vRGF0YS9Bbmltc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgSXJvblNvdXJjZSBmcm9tIFwiLi9Jcm9uU291cmNlXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KElyb25Tb3VyY2UpXHJcbiAgSXJvblNvdXJjZTogSXJvblNvdXJjZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJ0bl8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBCdG5fMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBEcnllclBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICBEcnllclNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgRHJ5ZXJUb01vdXRoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHRvb3RoUGFzdGVQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgdG9vdGhQYXN0ZVNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgdG9vdGhQYXN0ZUhlYWRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIFdhdGVyQnViYmxlUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIFdhdGVyQnViYmxlU3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICBXYXRlckJ1YmJsZUhlYWRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRWYXJpYWxiZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQgPSB0aGlzLk5vZGVDb250YWluZXIuZHJ5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9EcnllclwiKTtcclxuICAgIHRoaXMuRHJ5ZXJTcGluZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5kcnllci5nZXRDaGlsZEJ5TmFtZShcInNwX2RyeWVyXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICB0aGlzLkRyeWVyVG9Nb3V0aEFyZWEgPSB0aGlzLk5vZGVDb250YWluZXIuZHJ5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9Nb3V0aFwiKTtcclxuXHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmdldENoaWxkQnlOYW1lKFwiUG9pbnRfVG9vdGhcIik7XHJcbiAgICB0aGlzLnRvb3RoUGFzdGVTcGluZSA9IHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmdldENoaWxkQnlOYW1lKFwic3BfVG9vdGhcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZUhlYWRQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmdldENoaWxkQnlOYW1lKFwiSGVhZFBvaW50X1Rvb3RoXCIpO1xyXG5cclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmdldENoaWxkQnlOYW1lKFwiUG9pbnRfV2F0ZXJUb290aFwiKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZSA9IHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmdldENoaWxkQnlOYW1lKFwic3BfV2F0ZXJUb290aFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgdGhpcy5XYXRlckJ1YmJsZUhlYWRQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmdldENoaWxkQnlOYW1lKFwiSGVhZFBvaW50X1dhdGVyVG9vdGhcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5pbml0VmFyaWFsYmVzKCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5EcnllclBvaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVBvaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVBvaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLldhdGVyQnViYmxlUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuXHJcbiAgICB0aGlzLkJ0bl8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgdGhpcy5CdG5fMi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oaWRlTWFza1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZU1hc2tUb3VjaFN0YXJ0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIENvbnN0YW50cy5tYWdnb3RSZW1vdmVkID49IDEgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLmlzVG9TdG9yZSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGVuYWJsZVRvdWNoKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZS5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy53YXRlclRvb3RoQW5pbS5BY3Rpb24sIHRydWUpO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0RvbmVUb290aFBhc3RlICYmIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50b290aFBhc3RlMlNvdW5kKTtcclxuICAgIHRoaXMuR2FtZVBsYXkuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZWJ1ZyhkZWJ1ZywgMywgcG9zQ29udmVydGVkLCBwb3MpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBkZWJ1Zyhpc0RlYnVnOiBib29sZWFuLCB0b29sVG9EZWJ1ZzogbnVtYmVyLCBwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgaWYgKGlzRGVidWcpIHtcclxuICAgICAgc3dpdGNoICh0b29sVG9EZWJ1Zykge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMubW92ZURyeWVyKHBvc0NvbnZlcnRlZCwgcG9zKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRoaXMubW92ZVRvb3RoUGFzdGUocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5tb3ZlV2F0ZXJCcnVzaChwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIUNvbnN0YW50cy5pc0RvbmVEcnllciAmJiB0aGlzLm1vdmVEcnllcihwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVEcnllciAmJiAhQ29uc3RhbnRzLmlzRG9uZVRvb3RoUGFzdGUgJiYgdGhpcy5tb3ZlVG9vdGhQYXN0ZShwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVUb290aFBhc3RlICYmICFDb25zdGFudHMuaXNEb25lV2F0ZXJCcnVzaCAmJiB0aGlzLm1vdmVXYXRlckJydXNoKHBvc0NvbnZlcnRlZCwgcG9zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoRW5kKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICB0aGlzLldhdGVyQnViYmxlU3BpbmUuc2V0QW5pbWF0aW9uKDAsIFNwaW5lQW5pbXMud2F0ZXJUb290aEFuaW0uSWRsZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sudG9vdGhQYXN0ZTJTb3VuZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlRHJ5ZXIocG9zQ29udmVydGVkOiBjYy5WZWMyLCBwb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgIHRoaXMuRHJ5ZXJQb2ludC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCwgcG9zQ29udmVydGVkLnkpO1xyXG4gICAgdGhpcy5EcnllclNwaW5lLm5vZGUuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLngsIHBvc0NvbnZlcnRlZC55KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVUb290aFBhc3RlKHBvc0NvbnZlcnRlZDogY2MuVmVjMiwgcG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCwgcG9zQ29udmVydGVkLnkpO1xyXG4gICAgdGhpcy50b290aFBhc3RlSGVhZFBvaW50LnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54IC0gODAsIHBvc0NvbnZlcnRlZC55KTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVNwaW5lLm5vZGUueCA9IChwb3MueCAtIGNjLndpblNpemUud2lkdGggLyAyKSAtIDEwMDtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVNwaW5lLm5vZGUueSA9IChwb3MueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLSAxNTtcclxuXHJcbiAgICBsZXQgYmR4ID0gdGhpcy50b290aFBhc3RlSGVhZFBvaW50LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmNoZWNrQ29sbGlkZUJ1YmJsZVBvaW50cyhiZHgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZVdhdGVyQnJ1c2gocG9zQ29udmVydGVkOiBjYy5WZWMyLCBwb3M6IGNjLlZlYzIpIDogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLldhdGVyQnViYmxlUG9pbnQuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLngsIHBvc0NvbnZlcnRlZC55KTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVIZWFkUG9pbnQuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLnggLSAxMDUsIHBvc0NvbnZlcnRlZC55ICsgMTEwKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZS5ub2RlLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSA5MDtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZS5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpICsgMTAwO1xyXG5cclxuICAgIGxldCBiZHggPSB0aGlzLldhdGVyQnViYmxlSGVhZFBvaW50LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmNoZWNrQnJ1c2hUZWV0aChiZHgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHByaXZhdGUgc2V0Q3VycmVudFBvc0NsZWFuc2VyKHBvcyk6IHZvaWQge1xyXG4gIC8vICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gIC8vICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X0NsZWFuc2VyLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZClcclxuICAvLyB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2V0Q3VycmVudFBvc1R3ZWV6ZXJzKHBvcyk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAvLyAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9Ud2VlemVycy55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=