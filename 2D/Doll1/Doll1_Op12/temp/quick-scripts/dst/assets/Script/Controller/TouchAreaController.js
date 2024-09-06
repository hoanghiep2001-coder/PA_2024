
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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        return _this;
        // protected update(dt: number): void {
        //     this.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.activeDressWhenClick();
        this.activeHairWhenClick();
        this.activeShoeWhenClick();
        this.NodesContainer.Btn_Submit.on(cc.Node.EventType.TOUCH_START, this.GamePlay.goToNextItem, this);
        this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskClick, this);
    };
    TouchAreaController.prototype.hideMaskClick = function () {
        // mtg & applovin
        constants_1.Constants.currentStep >= 2 && this.GameController.installHandle();
        // ironsource
        // this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.activeDressWhenClick = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var node = this_1.NodesContainer.Dress_Frames[index];
            var btn = node.parent.addComponent(cc.Button);
            btn.target = btn.node;
            btn.transition = cc.Button.Transition.SCALE;
            node.on(cc.Node.EventType.TOUCH_START, function () {
                _this.NodesContainer.Btn_Submit.active = true;
                _this.NodesContainer.btnNext_Sprite.active = true;
                constants_1.Constants.currentStep <= 2 && _this.GamePlay.activeBlinkAnimForBtnSubmit();
                _this.NodesContainer.Dress_Frames.forEach(function (frame) { return frame.opacity = 0; });
                _this.NodesContainer.Doll_Dresses.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_Dresses[index].active = true;
                _this.NodesContainer.DollDressDefault.active = false;
                node.opacity = 255;
                _this.NodesContainer.FX_Heart.resetSystem();
                _this.GamePlay.playGreatSound();
            }, this_1);
        };
        var this_1 = this;
        for (var index = 0; index < this.NodesContainer.Dress_Frames.length; index++) {
            _loop_1(index);
        }
    };
    TouchAreaController.prototype.activeHairWhenClick = function () {
        var _this = this;
        var _loop_2 = function (index) {
            var node = this_2.NodesContainer.Hair_Frames[index];
            var btn = node.parent.addComponent(cc.Button);
            btn.target = btn.node;
            btn.transition = cc.Button.Transition.SCALE;
            node.on(cc.Node.EventType.TOUCH_START, function () {
                // ironsource
                // this.handleIronSourcePlaySound();
                _this.NodesContainer.Btn_Submit.active = true;
                _this.NodesContainer.btnNext_Sprite.active = true;
                constants_1.Constants.currentStep <= 2 && _this.GamePlay.activeBlinkAnimForBtnSubmit();
                _this.NodesContainer.Hair_Frames.forEach(function (frame) { return frame.opacity = 0; });
                _this.NodesContainer.Doll_F_Hairs.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_F_Hairs[index].active = true;
                _this.NodesContainer.DollHairDefault.active = false;
                _this.NodesContainer.Hand.active = false;
                node.opacity = 255;
                _this.NodesContainer.FX_Heart.resetSystem();
                _this.GamePlay.playGreatSound();
            }, this_2);
        };
        var this_2 = this;
        for (var index = 0; index < this.NodesContainer.Hair_Frames.length; index++) {
            _loop_2(index);
        }
    };
    TouchAreaController.prototype.activeShoeWhenClick = function () {
        var _this = this;
        for (var index = 0; index < this.NodesContainer.Shoe_Frames.length; index++) {
            var node = this.NodesContainer.Shoe_Frames[index];
            var btn = node.parent.addComponent(cc.Button);
            btn.target = btn.node;
            btn.transition = cc.Button.Transition.SCALE;
            node.on(cc.Node.EventType.TOUCH_START, function () {
                _this.GameController.installHandle();
            }, this);
        }
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBK0lDO1FBOUlDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztRQW1JMUIsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUN4QyxJQUFJO0lBQ04sQ0FBQztJQW5JVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENB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LEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2dCQUMzRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzRDtZQUVELElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZFLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbEM7U0FDRjtJQUNILENBQUM7SUF0SUQ7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5REFDTztJQVRmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBK0kvQjtJQUFELDBCQUFDO0NBL0lELEFBK0lDLENBL0l3QyxFQUFFLENBQUMsU0FBUyxHQStJcEQ7QUEvSVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuaW1wb3J0IE5vZGVzQ29udGFpbmVyIGZyb20gXCIuL05vZGVzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEcmVzc1doZW5DbGljaygpO1xyXG4gICAgdGhpcy5hY3RpdmVIYWlyV2hlbkNsaWNrKCk7XHJcbiAgICB0aGlzLmFjdGl2ZVNob2VXaGVuQ2xpY2soKTtcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZVBsYXkuZ29Ub05leHRJdGVtLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGlkZU1hc2tDbGljaywgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza0NsaWNrKCk6IHZvaWQge1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIENvbnN0YW50cy5jdXJyZW50U3RlcCA+PSAyICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpXHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVEcmVzc1doZW5DbGljaygpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzX0ZyYW1lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NfRnJhbWVzW2luZGV4XTtcclxuICAgICAgbGV0IGJ0biA9IG5vZGUucGFyZW50LmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICBidG4udGFyZ2V0ID0gYnRuLm5vZGU7XHJcbiAgICAgIGJ0bi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XHJcblxyXG4gICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5OZXh0X1Nwcml0ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50U3RlcCA8PSAyICYmIHRoaXMuR2FtZVBsYXkuYWN0aXZlQmxpbmtBbmltRm9yQnRuU3VibWl0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NfRnJhbWVzLmZvckVhY2goZnJhbWUgPT4gZnJhbWUub3BhY2l0eSA9IDApO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbF9EcmVzc2VzLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfRHJlc3Nlc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxEcmVzc0RlZmF1bHQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRlhfSGVhcnQucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LnBsYXlHcmVhdFNvdW5kKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlSGFpcldoZW5DbGljaygpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkhhaXJfRnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5IYWlyX0ZyYW1lc1tpbmRleF07XHJcbiAgICAgIGxldCBidG4gPSBub2RlLnBhcmVudC5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgYnRuLnRhcmdldCA9IGJ0bi5ub2RlO1xyXG4gICAgICBidG4udHJhbnNpdGlvbiA9IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFO1xyXG5cclxuICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5OZXh0X1Nwcml0ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50U3RlcCA8PSAyICYmIHRoaXMuR2FtZVBsYXkuYWN0aXZlQmxpbmtBbmltRm9yQnRuU3VibWl0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuSGFpcl9GcmFtZXMuZm9yRWFjaChmcmFtZSA9PiBmcmFtZS5vcGFjaXR5ID0gMCk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0ZfSGFpcnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbF9GX0hhaXJzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbEhhaXJEZWZhdWx0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRlhfSGVhcnQucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LnBsYXlHcmVhdFNvdW5kKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlU2hvZVdoZW5DbGljaygpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLlNob2VfRnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5TaG9lX0ZyYW1lc1tpbmRleF07XHJcbiAgICAgIGxldCBidG4gPSBub2RlLnBhcmVudC5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgYnRuLnRhcmdldCA9IGJ0bi5ub2RlO1xyXG4gICAgICBidG4udHJhbnNpdGlvbiA9IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFO1xyXG5cclxuICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gIC8vICAgICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAvLyB9XHJcbn1cclxuIl19