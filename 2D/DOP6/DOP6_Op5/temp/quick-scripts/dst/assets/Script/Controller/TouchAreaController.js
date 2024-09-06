
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsbURBQWtEO0FBQ2xELHVDQUFrQztBQUNsQyxtREFBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFvSkM7UUFsSkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUl0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLFFBQVE7UUFDUixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9DQUFvQztRQUNwQywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsdURBQXVEO1FBQ3ZELG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRWxDLHFCQUFxQjtRQUNyQix5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFFcEMsa0NBQWtDO1FBQ2xDLGVBQVMsR0FBc0IsSUFBSSxDQUFDO1FBRXBDLGdDQUFnQztRQUNoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFpSGhDLENBQUM7SUE5R2EsbUNBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8s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cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2RlQ29udHJvbGxlciBmcm9tIFwiLi9Ob2RlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL25ldXRyaW5vcGFydGljbGVzL2NvbXBvbmVudHMvTmV1dHJpbm9FZmZlY3RfTm9OYW1lRWZmZWN0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTm9kZUNvbnRyb2xsZXIpXHJcbiAgICBOb2RlQ29udHJvbGxlcjogTm9kZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfT3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0FjdGl2ZUNUQTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhcnRUb3VjaFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgLy8gxJHDonkgbMOgIMSR4buTIHbhuq10IGtoaSB0xrDGoW5nIHTDoWMgdG91Y2hcclxuICAgIGN1cnJlbnRJbnRlcmFjdE9iamVjdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIMSRw6J5IGzDoCB24buLIHRyw60gY+G7p2EgxJHhu5MgduG6rXQga2hpIGzhuqduIMSR4bqndSB0xrDGoW5nIHTDoWMgdG91Y2hcclxuICAgICAgICBPYmplY3RQcmV2UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICAvLyDEkcOieSBsw6AgdsO5bmcgaW1wYWN0XHJcbiAgICBjdXJyZW50QXJlYVRvSW1wYWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBmeCBj4bunYSDEkeG7kyB24bqtdCB0xrDGoW5nIMSRxrDGoW5nIHNjZW5lXHJcbiAgICBjdXJyZW50Rlg6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICAvLyBzY2VuZSBoaeG7h24gdOG6oWkgxJFhbmcgdMawxqFuZyB0w6FjXHJcbiAgICBjdXJlbnRTY2VuZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIub2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgIG9iai5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgb2JqLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgb2JqLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIG9iai5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9CdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIG10ZyAmJiBhcGxvdmluXHJcbiAgICAgICAgLy8gdGhpcy5DVEFfT3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gaXJvb25zb291cmNlXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5oaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lUGxheS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnRlcmFjdE9iamVjdCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLk9iamVjdFByZXZQb3MgPSB0aGlzLmN1cnJlbnRJbnRlcmFjdE9iamVjdC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cmVudFNjZW5lID0gdGhpcy5jdXJyZW50SW50ZXJhY3RPYmplY3QucGFyZW50O1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW50ZXJhY3RPYmplY3Quc2V0UG9zaXRpb24oY29udmVydGVkUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFRvdWNoUG9zID0gY29udmVydGVkUG9zO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBcmVhVG9JbXBhY3QgPSB0aGlzLmN1cmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRGWCA9IHRoaXMuY3VyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJGWF9kb25lU3RlcFwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG5cclxuICAgICAgICBsZXQgaGludCA9IHRoaXMuY3VyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJIaW50XCIpO1xyXG4gICAgICAgIGhpbnQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZShlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgIXRoaXMuaXNUb3VjaCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEludGVyYWN0T2JqZWN0LnNldFBvc2l0aW9uKGNvbnZlcnRlZFBvcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCB8fCAhdGhpcy5pc1RvdWNoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUb3VjaEludGVyYWN0QXJlYSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuaGFuZGxlRG9uZUxldmVsKHRoaXMuY3VycmVudEZYLCB0aGlzLmN1cmVudFNjZW5lLCB0aGlzLmN1cnJlbnRJbnRlcmFjdE9iamVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5oYW5kbGVEcmFnV3JvbmcoY29udmVydGVkUG9zLCB0aGlzLk9iamVjdFByZXZQb3MsIHRoaXMuY3VycmVudEludGVyYWN0T2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNUb3VjaEludGVyYWN0QXJlYSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEludGVyYWN0T2JqZWN0Lm5hbWUgPT09IFwib2JqZWN0X3RydWVcIikge1xyXG4gICAgICAgICAgICBsZXQgb2JqQmR4ID0gdGhpcy5jdXJyZW50SW50ZXJhY3RPYmplY3QuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgbGV0IGFyZWFCZHggPSB0aGlzLmN1cnJlbnRBcmVhVG9JbXBhY3QuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZihhcmVhQmR4LmludGVyc2VjdHMob2JqQmR4KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvZmZFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlQ1RBID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5oaWRlTWFzay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuaGlkZU1hc2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuaGlkZU1hc2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5oaWRlTWFzay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19