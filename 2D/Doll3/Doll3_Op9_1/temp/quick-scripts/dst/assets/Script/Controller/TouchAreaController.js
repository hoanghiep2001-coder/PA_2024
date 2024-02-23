
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
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodesContainer = null;
        _this.GamePlay = null;
        return _this;
    }
    // node
    // state
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodesContainer.UI_button_revenge.on(cc.Node.EventType.TOUCH_START, this.btnTouchStart, this);
        this.NodesContainer.item_Dress_btn.on(cc.Node.EventType.TOUCH_START, this.btnDressTouchStart, this);
        this.NodesContainer.background_1.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.btnTouchStart = function () {
        if (!constants_1.Constants.isCanClick || constants_1.Constants.isChooseRevenge)
            return;
        this.handleIronSourcePlaySound();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        this.NodesContainer.buttons.active = false;
        this.NodesContainer.scene1.active = false;
        this.NodesContainer.GamePlay.getComponent(cc.Animation).play("GamePlay_ShowScene3");
        this.scheduleOnce(function () { constants_1.Constants.isChooseRevenge = true; }, 2);
    };
    TouchAreaController.prototype.btnDressTouchStart = function () {
        var _this = this;
        if (!constants_1.Constants.isChooseRevenge || constants_1.Constants.isChooseDress)
            return;
        constants_1.Constants.isChooseDress = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        this.NodesContainer.doll_dress.active = true;
        this.NodesContainer.doll_dress_default.active = false;
        this.NodesContainer.hand_2.active = false;
        this.NodesContainer.effect_blink_Doll.resetSystem();
        this.NodesContainer.effect_heart.resetSystem();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaAnimeSound);
        this.scheduleOnce(function () { _this.showCTA(); }, 1.5);
    };
    TouchAreaController.prototype.showCTA = function () {
        this.NodesContainer.CTA.active = true;
        this.NodesContainer.CTA_btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // applovin & mtg
        // this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
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
    TouchAreaController.prototype.update = function (dt) {
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBdUdDO1FBckdDLFlBQVk7UUFFWixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTZGNUIsQ0FBQztJQTFGQyxPQUFPO0lBR1AsUUFBUTtJQUdFLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENB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QUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNEO1lBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkUscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQztJQUdTLG9DQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDekIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQWxHRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBVmYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0F1Ry9CO0lBQUQsMEJBQUM7Q0F2R0QsQUF1R0MsQ0F2R3dDLEVBQUUsQ0FBQyxTQUFTLEdBdUdwRDtBQXZHWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbHRpbHMgfSBmcm9tIFwiLi4vRGF0YS9VbHRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuaW1wb3J0IE5vZGVzQ29udGFpbmVyIGZyb20gXCIuL05vZGVzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZXNDb250YWluZXIpXHJcbiAgTm9kZXNDb250YWluZXI6IE5vZGVzQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIG5vZGVcclxuXHJcblxyXG4gIC8vIHN0YXRlXHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX2J1dHRvbl9yZXZlbmdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0blRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtX0RyZXNzX2J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5idG5EcmVzc1RvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYnRuVG91Y2hTdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuQ2xpY2sgfHwgQ29uc3RhbnRzLmlzQ2hvb3NlUmV2ZW5nZSkgcmV0dXJuO1xyXG4gICAgdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY2xpY2tTb3VuZCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnNjZW5lMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X1Nob3dTY2VuZTNcIik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Q29uc3RhbnRzLmlzQ2hvb3NlUmV2ZW5nZSA9IHRydWV9LCAyKVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYnRuRHJlc3NUb3VjaFN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0Nob29zZVJldmVuZ2UgfHwgQ29uc3RhbnRzLmlzQ2hvb3NlRHJlc3MpIHJldHVybjtcclxuICAgIENvbnN0YW50cy5pc0Nob29zZURyZXNzID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9kcmVzcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX2RyZXNzX2RlZmF1bHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhhbmRfMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuZWZmZWN0X2JsaW5rX0RvbGwucmVzZXRTeXN0ZW0oKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuZWZmZWN0X2hlYXJ0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud29hQW5pbWVTb3VuZCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5zaG93Q1RBKCl9LCAxLjUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0NUQSgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gYXBwbG92aW4gJiBtdGdcclxuICAgIC8vIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX292ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICB9XHJcbn1cclxuIl19