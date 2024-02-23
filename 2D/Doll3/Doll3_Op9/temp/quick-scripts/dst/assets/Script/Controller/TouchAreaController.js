
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
    };
    TouchAreaController.prototype.btnTouchStart = function () {
        if (!constants_1.Constants.isCanClick || constants_1.Constants.isChooseRevenge)
            return;
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
        this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBK0ZDO1FBN0ZDLFlBQVk7UUFFWixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQXFGNUIsQ0FBQztJQWxGQyxPQUFPO0lBR1AsUUFBUTtJQUdFLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxJQUFJLHFCQUFTLENBQUMsZUFBZTtZQUFFLE9BQU87UUFD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LFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNEO1lBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkUscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQztJQTFGRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBVmYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0ErRi9CO0lBQUQsMEJBQUM7Q0EvRkQsQUErRkMsQ0EvRndDLEVBQUUsQ0FBQyxTQUFTLEdBK0ZwRDtBQS9GWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbHRpbHMgfSBmcm9tIFwiLi4vRGF0YS9VbHRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuaW1wb3J0IE5vZGVzQ29udGFpbmVyIGZyb20gXCIuL05vZGVzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZXNDb250YWluZXIpXHJcbiAgTm9kZXNDb250YWluZXI6IE5vZGVzQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIG5vZGVcclxuXHJcblxyXG4gIC8vIHN0YXRlXHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX2J1dHRvbl9yZXZlbmdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0blRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtX0RyZXNzX2J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5idG5EcmVzc1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYnRuVG91Y2hTdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuQ2xpY2sgfHwgQ29uc3RhbnRzLmlzQ2hvb3NlUmV2ZW5nZSkgcmV0dXJuO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsaWNrU291bmQpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5zY2VuZTEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkdhbWVQbGF5LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJHYW1lUGxheV9TaG93U2NlbmUzXCIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge0NvbnN0YW50cy5pc0Nob29zZVJldmVuZ2UgPSB0cnVlfSwgMilcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJ0bkRyZXNzVG91Y2hTdGFydCgpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDaG9vc2VSZXZlbmdlIHx8IENvbnN0YW50cy5pc0Nob29zZURyZXNzKSByZXR1cm47XHJcbiAgICBDb25zdGFudHMuaXNDaG9vc2VEcmVzcyA9IHRydWU7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY2xpY2tTb3VuZCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfZHJlc3MuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuaGFuZF8yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5lZmZlY3RfYmxpbmtfRG9sbC5yZXNldFN5c3RlbSgpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5lZmZlY3RfaGVhcnQucmVzZXRTeXN0ZW0oKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53b2FBbmltZVNvdW5kKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLnNob3dDVEEoKX0sIDEuNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93Q1RBKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAvLyBhcHBsb3ZpbiAmIG10Z1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfb3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=