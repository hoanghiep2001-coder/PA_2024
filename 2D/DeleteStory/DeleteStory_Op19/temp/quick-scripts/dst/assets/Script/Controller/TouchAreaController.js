
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsbURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQTRJQztRQTFJRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsUUFBUTtRQUNSLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBa0hqQyxDQUFDO0lBL0dhLG1DQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkYsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFD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QUFDO0lBQzlCLENBQUM7SUFFUyxvQ0FBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBeklEO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNNO0lBdEJQLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBNEl2QztJQUFELDBCQUFDO0NBNUlELEFBNElDLENBNUlnRCxFQUFFLENBQUMsU0FBUyxHQTRJNUQ7a0JBNUlvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX1llczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9ObzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX0J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQWN0aXZlQ1RBOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ0bl9ZZXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuYnRuWWVzVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX05vLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBpZighdGhpcy5HYW1lUGxheS5PcGVuaW5nLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYnRuWWVzVG91Y2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5fWWVzLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5Lk9wZW5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5NYWluQ29udGVudC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5saWZlIDw9IDAgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlBvaW50LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAhQ29uc3RhbnRzLmlzRG9uZUVyYXNlciAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgdGhpcy5Qb2ludC5zZXRQb3NpdGlvbihjb252ZXJ0ZWRQb3MpO1xyXG4gICAgICAgIENvbnN0YW50cy50b3VjaFBvaW50cy5wdXNoKGNvbnZlcnRlZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIG10ZyAmJiBhcGxvdmluXHJcbiAgICAgICAgLy8gdGhpcy5pc0FjdGl2ZUNUQSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBjb252ZXJ0ZWRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICB0aGlzLlBvaW50LnNldFBvc2l0aW9uKGNvbnZlcnRlZFBvcyk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy50b3VjaFBvaW50cy5wdXNoKGNvbnZlcnRlZFBvcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTdHJhaWdodExpbmUodG91Y2hQb2ludHM6IGNjLlZlYzJbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0b3VjaFBvaW50cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBBID0gdG91Y2hQb2ludHNbdG91Y2hQb2ludHMubGVuZ3RoIC0gM107XHJcbiAgICAgICAgbGV0IEIgPSB0b3VjaFBvaW50c1t0b3VjaFBvaW50cy5sZW5ndGggLSAyXTtcclxuICAgICAgICBsZXQgQyA9IHRvdWNoUG9pbnRzW3RvdWNoUG9pbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICByZXR1cm4gKEIueCAtIEEueCkgKiAoQy55IC0gQS55KSA9PT0gKEIueSAtIEEueSkgKiAoQy54IC0gQS54KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgICAgICB0aGlzLnVuQWN0aXZlUG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gd2luXHJcbiAgICAgICAgaWYgKHRoaXMuR2FtZVBsYXkuaXNEZWxldGVPdmVySGFsZigpICYmIHRoaXMuY2hlY2tTdHJhaWdodExpbmUoQ29uc3RhbnRzLnRvdWNoUG9pbnRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlQ1RBID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZUVyYXNlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkud2luR2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LmFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5pbmNyZWFzZUFnZShDb25zdGFudHMuYWdlLCAxOCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ1RBX0J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxvc2VcclxuICAgICAgICBpZiAoIUNvbnN0YW50cy5pc0RvbmVFcmFzZXIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUmVzdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5saWZlIC09IDE7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5hZ2VJbmNyZWFzZSArPSAzO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LmFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuaW5jcmVhc2VBZ2UoQ29uc3RhbnRzLmFnZSwgQ29uc3RhbnRzLmFnZUluY3JlYXNlKTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkxvc2VTb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuUmVzdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1bkFjdGl2ZVBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19