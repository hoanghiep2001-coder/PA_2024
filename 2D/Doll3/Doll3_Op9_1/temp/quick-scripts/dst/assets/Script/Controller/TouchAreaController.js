
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
        // protected update(dt: number): void {
        //   this.handleMuteSoundIronSource();
        // }
    }
    // node
    // state
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        // ironsource
        // this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
        this.NodesContainer.UI_button_revenge.on(cc.Node.EventType.TOUCH_START, this.btnTouchStart, this);
        this.NodesContainer.item_Dress_btn.on(cc.Node.EventType.TOUCH_START, this.btnDressTouchStart, this);
    };
    TouchAreaController.prototype.btnTouchStart = function () {
        if (!constants_1.Constants.isCanClick || constants_1.Constants.isChooseRevenge)
            return;
        // this.handleIronSourcePlaySound();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        this.NodesContainer.buttons.active = false;
        this.NodesContainer.scene1.active = false;
        this.NodesContainer.GamePlay.getComponent(cc.Animation).play("GamePlay_ShowScene3");
        this.NodesContainer.logo.getComponent(cc.Sprite).enabled = false;
        this.NodesContainer.icon.getComponent(cc.Sprite).enabled = false;
        this.scheduleOnce(function () {
            constants_1.Constants.isChooseRevenge = true;
        }, 2);
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
        this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBNkdDO1FBM0dDLFlBQVk7UUFFWixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztRQWdHMUIsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQWhHQyxPQUFPO0lBR1AsUUFBUTtJQUdFLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsYUFBYTtRQUNiLHdHQUF3RztRQUV4RyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFDRSxJ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LEFBNkdDLENBN0d3QyxFQUFFLENBQUMsU0FBUyxHQTZHcEQ7QUE3R1ksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWx0aWxzIH0gZnJvbSBcIi4uL0RhdGEvVWx0aWxzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBub2RlXHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5oaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX2J1dHRvbl9yZXZlbmdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0blRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtX0RyZXNzX2J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5idG5EcmVzc1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYnRuVG91Y2hTdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuQ2xpY2sgfHwgQ29uc3RhbnRzLmlzQ2hvb3NlUmV2ZW5nZSkgcmV0dXJuO1xyXG4gICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY2xpY2tTb3VuZCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnNjZW5lMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X1Nob3dTY2VuZTNcIik7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgQ29uc3RhbnRzLmlzQ2hvb3NlUmV2ZW5nZSA9IHRydWU7XHJcbiAgICB9LCAyKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJ0bkRyZXNzVG91Y2hTdGFydCgpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDaG9vc2VSZXZlbmdlIHx8IENvbnN0YW50cy5pc0Nob29zZURyZXNzKSByZXR1cm47XHJcbiAgICBDb25zdGFudHMuaXNDaG9vc2VEcmVzcyA9IHRydWU7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY2xpY2tTb3VuZCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfZHJlc3MuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9kcmVzc19kZWZhdWx0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5oYW5kXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmVmZmVjdF9ibGlua19Eb2xsLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmVmZmVjdF9oZWFydC5yZXNldFN5c3RlbSgpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYUFuaW1lU291bmQpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuc2hvd0NUQSgpfSwgMS41KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dDVEEoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIGFwcGxvdmluICYgbXRnXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9vdmVybGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=