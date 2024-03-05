
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
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function () {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchStart = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        if (!constants_1.Constants.isDoneCleanser)
            this.isTouch = true;
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
        if (!constants_1.Constants.isDoneCleanser)
            this.GamePlay.activeCleanSound();
        constants_1.Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        this.NodeContainer.Hand_1.active = false;
        this.NodeContainer.Hand_2.active = false;
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
        this.NodeContainer.Cleanser_Point.x = (pos.x - cc.winSize.width / 2) - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Cleanser_Point.y = (pos.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculatedY;
        this.NodeContainer.Tweezers_Point.x = (pos.x - cc.winSize.width / 2) - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Tweezers_Point.y = (pos.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculatedY;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    TouchAreaController.prototype.moveCleanser = function (posConverted, pos) {
        this.NodeContainer.Cleanser_Point.setPosition(posConverted);
        this.NodeContainer.Spine_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Spine_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80 - constants_1.Constants.Responsive.calculatedY;
    };
    TouchAreaController.prototype.moveTweezers = function (posConverted, pos) {
        this.NodeContainer.Tweezers_Point.setPosition(posConverted);
        this.NodeContainer.Spine_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Spine_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 100 - constants_1.Constants.Responsive.calculatedY;
        this.NodeContainer.Tweezers_HeadPoint.x = (pos.x - cc.winSize.width / 2) - 45 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Tweezers_HeadPoint.y = (pos.y - cc.winSize.height / 2) - 85 - constants_1.Constants.Responsive.calculatedY;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQXNHQztRQXBHQyxZQUFZO1FBRVosZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFzRjNCLENBQUM7SUFuRlcsb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUs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QUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqSCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNwSCxDQUFDO0lBaEdEO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7MkRBQ1M7SUFFOUI7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzs4REFDWTtJQUVwQztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5REFDTztJQVpmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBc0cvQjtJQUFELDBCQUFDO0NBdEdELEFBc0dDLENBdEd3QyxFQUFFLENBQUMsU0FBUyxHQXNHcEQ7QUF0R1ksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWx0aWxzIH0gZnJvbSBcIi4uL0RhdGEvVWx0aWxzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KElyb25Tb3VyY2UpXHJcbiAgSXJvblNvdXJjZTogSXJvblNvdXJjZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXJfUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oaWRlTWFza1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZU1hc2tUb3VjaFN0YXJ0KCk6IHZvaWQge1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIENvbnN0YW50cy5tYWdnb3RSZW1vdmVkID49IDEgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICBcclxuICAgIC8vIGlyb25zb3VyY2VcclxuICAgIHRoaXMuSXJvblNvdXJjZS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICBpZighQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuICAgIGlmKCFDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIpIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0RvbmVDbGVhbnNlcikgdGhpcy5HYW1lUGxheS5hY3RpdmVDbGVhblNvdW5kKCk7XHJcbiAgICBDb25zdGFudHMubWFnZ290UmVtb3ZlZCA+PSAxICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDYW5Ub3VjaCB8fCBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICBsZXQgcG9zQ29udmVydGVkID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgIUNvbnN0YW50cy5pc0RvbmVDbGVhbnNlciAmJiB0aGlzLm1vdmVDbGVhbnNlcihwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIgJiYgdGhpcy5tb3ZlVHdlZXplcnMocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcHJpdmF0ZSB0b3VjaEVuZChlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyX1BvaW50LnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX1BvaW50LnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5jbGVhblNvdW5kLmxvb3AgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVDbGVhbnNlcihwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyX1BvaW50LnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfQ2xlYW5zZXIubm9kZS54ID0gKHBvcy54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIpIC0gNjAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9DbGVhbnNlci5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpIC0gODAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVUd2VlemVycyhwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX1BvaW50LnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfVHdlZXplcnMubm9kZS54ID0gKHBvcy54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIpIC0gNjAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9Ud2VlemVycy5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpIC0gMTAwIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSGVhZFBvaW50LnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSA0NSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0hlYWRQb2ludC55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIDg1IC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=