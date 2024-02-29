
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/NodesContainer');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.openDoorSound = null;
        _this.knockDoorSound = null;
        _this.screamSound = null;
        _this.crySound = null;
        _this.woaAnimeSound = null;
        _this.clickSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "openDoorSound":
                    this.openDoorSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "knockDoorSound":
                    this.knockDoorSound.play();
                    break;
                case "screamSound":
                    this.screamSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                default:
                    break;
            }
        }
        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "openDoorSound":
        //             this.openDoorSound.play();
        //             break;
        //             case "clickSound":
        //                 this.clickSound.play();
        //                 break;
        //         case "knockDoorSound":
        //             this.knockDoorSound.play();
        //             break;
        //         case "screamSound":
        //             this.screamSound.play();
        //             break;
        //         case "crySound":
        //             this.crySound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         default:
        //             break;
        //     }
        // }
    };
    AudioManager.prototype.switchVolume = function (soundName, volume) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.volume = volume;
                break;
            case "openDoorSound":
                this.openDoorSound.volume = volume;
                break;
            case "clickSound":
                this.clickSound.volume = volume;
                break;
            case "knockDoorSound":
                this.knockDoorSound.volume = volume;
                break;
            case "screamSound":
                this.screamSound.volume = volume;
                break;
            case "crySound":
                this.crySound.volume = volume;
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.volume = volume;
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "openDoorSound":
                this.openDoorSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "knockDoorSound":
                this.knockDoorSound.stop();
                break;
            case "screamSound":
                this.screamSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.openDoorSound.stop();
        this.knockDoorSound.stop();
        this.screamSound.stop();
        this.crySound.stop();
        this.woaAnimeSound.stop();
        this.clickSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "openDoorSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "knockDoorSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "screamSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "crySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaAnimeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtSkM7UUFqSkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBbUl0QyxDQUFDO0lBaklVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2pDLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssZUFBZTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUIsTUFBTTtnQkFDTixLQUFLLFlBQVk7b0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDZCxLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsTUFBTTtnQkFDVixLQUFLLGFBQWE7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsTUFB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UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUE5SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQWhCakIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1KaEM7SUFBRCxtQkFBQztDQW5KRCxBQW1KQyxDQW5KeUMsRUFBRSxDQUFDLFNBQVMsR0FtSnJEO2tCQW5Kb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBvcGVuRG9vclNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBrbm9ja0Rvb3JTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc2NyZWFtU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNyeVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB3b2FBbmltZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjbGlja1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3BlbkRvb3JTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRvb3JTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwia25vY2tEb29yU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtub2NrRG9vclNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY3JlYW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWFtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNyeVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcnlTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid29hQW5pbWVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgICAgIC8vIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAvLyAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vcGVuRG9vclNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJrbm9ja0Rvb3JTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMua25vY2tEb29yU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcInNjcmVhbVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JlYW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoVm9sdW1lKHNvdW5kTmFtZTogc3RyaW5nLCB2b2x1bWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC52b2x1bWUgPSB2b2x1bWVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImtub2NrRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtub2NrRG9vclNvdW5kLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2NyZWFtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWFtU291bmQudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjcnlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcnlTb3VuZC52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuRG9vclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJrbm9ja0Rvb3JTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rbm9ja0Rvb3JTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNjcmVhbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVhbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm9wZW5Eb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMua25vY2tEb29yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2NyZWFtU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// const checkCollideBubblePoints = (bdx: cc.Rect): void => {
//     for (let i = 0; i < Constants.cleanHair_Points.length; i++) {
//         let currentNode = Constants.cleanHair_Points[i];
//         if (currentNode.getBoundingBox().intersects(bdx)) {
//             Constants.isTouchCleanHair = true;
//             for (let j = 0; j < Constants.cleanHair_PointsStatus.length; j++) {
//                 if (!Constants.cleanHair_PointsStatus[j]) {
//                     Constants.cleanHair_PointsStatus[j] = true;
//                     Constants.cleanHair_Points.splice(i, 1);
//                     Constants.spine_Bubbles[i].setAnimation(0, "action03_only_bubble", false);
//                     Constants.spine_Bubbles.splice(i, 1);
//                     if (Constants.cleanHair_PointsStatus.every(status => status === true)) {
//                         Constants.isDoneCleanHair = true;
//                     }
//                     break;
//                 }
//             }
//             break;
//         }
//     }
// }
// const checkCollideMaggot = (bdx: cc.Rect, maggot: cc.Rect): void => {
//     if(bdx.intersects(maggot)) {
//         Constants.isTouchMaggot = true;
//     }
// }
var TouchArea = {
// checkCollideBubblePoints: checkCollideBubblePoints,
// checkCollideMaggot: checkCollideMaggot
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsNkRBQTZEO0FBQzdELG9FQUFvRTtBQUNwRSwyREFBMkQ7QUFDM0QsOERBQThEO0FBQzlELGlEQUFpRDtBQUNqRCxrRkFBa0Y7QUFDbEYsOERBQThEO0FBQzlELGtFQUFrRTtBQUNsRSwrREFBK0Q7QUFFL0QsaUdBQWlHO0FBQ2pHLDREQUE0RDtBQUU1RCwrRkFBK0Y7QUFDL0YsNERBQTREO0FBQzVELHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsWUFBWTtBQUNaLFFBQVE7QUFDUixJQUFJO0FBRUosd0VBQXdFO0FBQ3hFLG1DQUFtQztBQUNuQywwQ0FBMEM7QUFDMUMsUUFBUTtBQUNSLElBQUk7QUFFSixJQUFNLFNBQVMsR0FBRztBQUNkLHNEQUFzRDtBQUN0RCx5Q0FBeUM7Q0FDNUMsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG4vLyBjb25zdCBjaGVja0NvbGxpZGVCdWJibGVQb2ludHMgPSAoYmR4OiBjYy5SZWN0KTogdm9pZCA9PiB7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbnN0YW50cy5jbGVhbkhhaXJfUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNbaV07XHJcbi8vICAgICAgICAgaWYgKGN1cnJlbnROb2RlLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyhiZHgpKSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoQ2xlYW5IYWlyID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1cy5sZW5ndGg7IGorKykge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCFDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1c1tqXSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5jbGVhbkhhaXJfUG9pbnRzU3RhdHVzW2pdID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50cy5zcGxpY2UoaSwgMSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5zcGluZV9CdWJibGVzW2ldLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjAzX29ubHlfYnViYmxlXCIsIGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfQnViYmxlcy5zcGxpY2UoaSwgMSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1cy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSB0cnVlKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEb25lQ2xlYW5IYWlyID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBjaGVja0NvbGxpZGVNYWdnb3QgPSAoYmR4OiBjYy5SZWN0LCBtYWdnb3Q6IGNjLlJlY3QpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKGJkeC5pbnRlcnNlY3RzKG1hZ2dvdCkpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaE1hZ2dvdCA9IHRydWU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IFRvdWNoQXJlYSA9IHtcclxuICAgIC8vIGNoZWNrQ29sbGlkZUJ1YmJsZVBvaW50czogY2hlY2tDb2xsaWRlQnViYmxlUG9pbnRzLFxyXG4gICAgLy8gY2hlY2tDb2xsaWRlTWFnZ290OiBjaGVja0NvbGxpZGVNYWdnb3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVsdGlscyB7XHJcblxyXG4gICBzdGF0aWMgVG91Y2hBcmVhOiB0eXBlb2YgVG91Y2hBcmVhID0gVG91Y2hBcmVhO1xyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["openDoorSound"] = "openDoorSound";
    SoundTrack["knockDoorSound"] = "knockDoorSound";
    SoundTrack["screamSound"] = "screamSound";
    SoundTrack["woaAnimeSound"] = "woaAnimeSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["clickSound"] = "clickSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isCanClick = false;
    Constants.isChooseRevenge = false;
    Constants.isChooseDress = false;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQVFKO0FBUkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7SUFDL0IsK0NBQWlDLENBQUE7SUFDakMseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsbUNBQXFCLENBQUE7SUFDckIsdUNBQXlCLENBQUE7QUFDN0IsQ0FBQyxFQVJJLFVBQVUsS0FBVixVQUFVLFFBUWQ7QUFHRDtJQUFBO0lBd0JBLENBQUM7SUF0QkcsWUFBWTtJQUVMLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLHlCQUFlLEdBQVksS0FBSyxDQUFDO0lBQ2pDLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBRXRDLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQXhCRCxBQXdCQyxJQUFBO0FBeEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBvcGVuRG9vclNvdW5kID0gXCJvcGVuRG9vclNvdW5kXCIsXHJcbiAgICBrbm9ja0Rvb3JTb3VuZCA9IFwia25vY2tEb29yU291bmRcIixcclxuICAgIHNjcmVhbVNvdW5kID0gXCJzY3JlYW1Tb3VuZFwiLFxyXG4gICAgd29hQW5pbWVTb3VuZCA9IFwid29hQW5pbWVTb3VuZFwiLFxyXG4gICAgY3J5U291bmQgPSBcImNyeVNvdW5kXCIsXHJcbiAgICBjbGlja1NvdW5kID0gXCJjbGlja1NvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG5cclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0Nob29zZVJldmVuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0Nob29zZURyZXNzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var GamePlay_1 = require("../Controller/GamePlay");
var NodesContainer_1 = require("../Controller/NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesContainer = null;
        _this.GamePlay = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.NodesContainer.logo.active = true;
        this.NodesContainer.icon.active = true;
        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.55;
        this.NodesContainer.background_1.scale = 0.45;
        this.NodesContainer.background_1.y = 95;
        this.NodesContainer.background_3.scale = 0.55;
        this.NodesContainer.doll_scene3.x = -140;
        this.NodesContainer.doll_scene3.scale = 0.35;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -10;
        this.NodesContainer.CTA_btn.y = -170;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 50;
        this.NodesContainer.items[0].scale = 0.9;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = -90;
        this.NodesContainer.items[1].scale = 0.9;
        this.NodesContainer.items[2].x = 230;
        this.NodesContainer.items[2].y = -90;
        this.NodesContainer.items[2].scale = 0.9;
        this.NodesContainer.items[3].x = 230;
        this.NodesContainer.items[3].y = 50;
        this.NodesContainer.items[3].scale = 0.9;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;
        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.45;
        this.NodesContainer.background_1.scale = 0.3;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.38;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = 0;
        this.NodesContainer.CTA_btn.y = -170;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;
        this.NodesContainer.background_2_hor.active = false;
        this.NodesContainer.background_2_ver.active = true;
        this.NodesContainer.background_2_ver.scale = 0.4;
        this.NodesContainer.background_1.scale = 0.4;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.45;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = -30;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -20;
        this.NodesContainer.CTA_btn.y = -170;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodesContainer.background_2_hor.active = false;
            this.NodesContainer.background_2_ver.active = true;
            this.NodesContainer.background_2_ver.scale = 0.3;
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 0;
            this.NodesContainer.background_3.scale = 0.3;
            this.NodesContainer.adultery.scale = 0.55;
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 0;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -170;
        }
        else {
            this.NodesContainer.background_2_hor.active = true;
            this.NodesContainer.background_2_ver.active = false;
            this.NodesContainer.background_2_hor.scale = 0.45;
            // this.NodesContainer.background_2_ver.scale = 0.3;
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 20;
            this.NodesContainer.background_3.scale = 0.38;
            this.NodesContainer.adultery.scale = 0.65;
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 20;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -170;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], Responsive.prototype, "NodesContainer", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUlwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXNQQztRQXBQRyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUF3T2hELENBQUM7SUF0T2EsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFH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TUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRTdDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVB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SUFuUEQ7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztzREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO2dEQUNPO0lBSlQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXNQOUI7SUFBRCxpQkFBQztDQXRQRCxBQXNQQyxDQXRQdUMsRUFBRSxDQUFDLFNBQVMsR0FzUG5EO2tCQXRQb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gICAgTm9kZXNDb250YWluZXI6IE5vZGVzQ29udGFpbmVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JJcFgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5sb2dvLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pY29uLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX2hvci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX3Zlci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLnNjYWxlID0gMC41NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzEueSA9IDk1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8zLnNjYWxlID0gMC41NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfc2NlbmUzLnggPSAtMTQwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9zY2VuZTMuc2NhbGUgPSAwLjM1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYWR1bHRlcnkuc2NhbGUgPSAwLjY1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci55ID0gMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy55ID0gLTEwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J0bi55ID0gLTE3MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1swXS54ID0gODU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1swXS55ID0gNTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1swXS5zY2FsZSA9IDAuOTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnggPSA4NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnkgPSAtOTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1sxXS5zY2FsZSA9IDAuOTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzJdLnggPSAyMzA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1syXS55ID0gLTkwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMl0uc2NhbGUgPSAwLjk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1szXS54ID0gMjMwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbM10ueSA9IDUwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbM10uc2NhbGUgPSAwLjk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5sb2dvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX2hvci5zY2FsZSA9IDAuNDU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLnNjYWxlID0gMC4zO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLnkgPSAyMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMy5zY2FsZSA9IDAuMzg7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX3NjZW5lMy54ID0gLTc1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9zY2VuZTMuc2NhbGUgPSAwLjMyO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYWR1bHRlcnkuc2NhbGUgPSAwLjY1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci55ID0gMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy55ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idG4ueSA9IC0xNzA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMF0ueCA9IDg1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMF0ueSA9IDEzMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzBdLnNjYWxlID0gMC42NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnggPSA4NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnkgPSAzMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnNjYWxlID0gMC42NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzJdLnggPSA4NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzJdLnkgPSAtNzA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1syXS5zY2FsZSA9IDAuNjU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1szXS54ID0gODU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1szXS55ID0gLTE3MDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzNdLnNjYWxlID0gMC42NTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZlcnRpY2FsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5sb2dvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX3Zlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX3Zlci5zY2FsZSA9IDAuNDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzEuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzEueSA9IDIwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8zLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfc2NlbmUzLnggPSAtNzU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX3NjZW5lMy5zY2FsZSA9IDAuMzI7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5hZHVsdGVyeS5zY2FsZSA9IDAuNjU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUlfQ29udGFpbmVyLnggPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUlfQ29udGFpbmVyLnkgPSAtMzA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy55ID0gLTIwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J0bi55ID0gLTE3MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1swXS54ID0gODU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1swXS55ID0gMTMwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMF0uc2NhbGUgPSAwLjY1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMV0ueCA9IDg1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMV0ueSA9IDMwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMV0uc2NhbGUgPSAwLjY1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMl0ueCA9IDg1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMl0ueSA9IC03MDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzJdLnNjYWxlID0gMC42NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzNdLnggPSA4NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzNdLnkgPSAtMTcwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbM10uc2NhbGUgPSAwLjY1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfc2NlbmUzLnggPSAtNzU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX3NjZW5lMy5zY2FsZSA9IDAuMzI7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMF0ueCA9IDg1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuaXRlbXNbMF0ueSA9IDEzMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzBdLnNjYWxlID0gMC42NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnggPSA4NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnkgPSAzMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzFdLnNjYWxlID0gMC42NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzJdLnggPSA4NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzJdLnkgPSAtNzA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1syXS5zY2FsZSA9IDAuNjU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1szXS54ID0gODU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5pdGVtc1szXS55ID0gLTE3MDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLml0ZW1zWzNdLnNjYWxlID0gMC42NTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICAvLyBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ID49IDAuNiAmJiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjYyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBtb2JpbGUgbW9kZSBhcHBsb3ZpblxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgUGx1cyAvIDcgLyA3IFBsdXMgICBcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl92ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLnNjYWxlID0gMC4zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzEuc2NhbGUgPSAwLjM7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMy5zY2FsZSA9IDAuMztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYWR1bHRlcnkuc2NhbGUgPSAwLjU1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUlfQ29udGFpbmVyLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy55ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfYnRuLnkgPSAtMTcwO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl9ob3IuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl9ob3Iuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgICAgICAvLyB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl92ZXIuc2NhbGUgPSAwLjM7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzEuc2NhbGUgPSAwLjM7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLnkgPSAyMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzMuc2NhbGUgPSAwLjM4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYWR1bHRlcnkuc2NhbGUgPSAwLjY1O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUlfQ29udGFpbmVyLnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci55ID0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idG4ueSA9IC0xNzA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        return _this;
    }
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.switchVolume(constants_1.Constants.SoundTrack.bgSound, 0.7);
        this.handleGamePlay();
        this.initGame();
    };
    GamePlay.prototype.initGame = function () {
        this.NodesContainer.doll_dress.active = false;
        this.NodesContainer.CTA.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.handleOpenDoor();
        this.handleShowAdultery();
    };
    GamePlay.prototype.handleOpenDoor = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.knockDoorSound);
        }, 1);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.openDoorSound);
            _this.NodesContainer.door.getComponent(cc.Animation).play("OpenDoor_Anim");
        }, 2.5);
        this.scheduleOnce(function () {
            _this.NodesContainer.doll_mouth_default.active = false;
            _this.NodesContainer.doll_mouth_suprise.active = true;
            _this.NodesContainer.doll.getComponent(cc.Animation).play("Doll_InHouseAnim");
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ShakeAnim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.screamSound);
        }, 3);
    };
    GamePlay.prototype.handleShowAdultery = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomAnim");
        }, 4.5);
        this.scheduleOnce(function () {
            _this.getComponent(cc.Animation).play("GamePlay_ShowAdultery");
        }, 5);
        this.scheduleOnce(function () {
            _this.NodesContainer.doll_tears_left.node.active = true;
            _this.NodesContainer.doll_tears_right.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        }, 5.8);
        this.scheduleOnce(function () {
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomOutAnim");
        }, 6.5);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanClick = true;
            _this.NodesContainer.UI_Container.getComponent(cc.Animation).play("UI_Anim");
        }, 7.5);
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyRUM7UUF4RUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBb0V4QyxDQUFDO0lBakVXLHdCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBR08sMkJBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUdPLGlDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsWUFB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UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQVBuQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkU1QjtJQUFELGVBQUM7Q0EzRUQsQUEyRUMsQ0EzRXFDLEVBQUUsQ0FBQyxTQUFTLEdBMkVqRDtrQkEzRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zd2l0Y2hWb2x1bWUoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCwgMC43KTtcclxuICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgIHRoaXMuaW5pdEdhbWUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX2RyZXNzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEEuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5oYW5kbGVPcGVuRG9vcigpO1xyXG4gICAgICB0aGlzLmhhbmRsZVNob3dBZHVsdGVyeSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlT3BlbkRvb3IoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5rbm9ja0Rvb3JTb3VuZCk7XHJcbiAgICB9LCAxKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5vcGVuRG9vclNvdW5kKVxyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIk9wZW5Eb29yX0FuaW1cIik7XHJcbiAgICB9LCAyLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX21vdXRoX2RlZmF1bHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9tb3V0aF9zdXByaXNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiRG9sbF9JbkhvdXNlQW5pbVwiKTtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNhbWVyYV9TaGFrZUFuaW1cIik7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY3JlYW1Tb3VuZCk7XHJcbiAgICB9LCAzKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNob3dBZHVsdGVyeSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNhbWVyYV9ab29tQW5pbVwiKTtcclxuICAgIH0sIDQuNSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJHYW1lUGxheV9TaG93QWR1bHRlcnlcIik7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF90ZWFyc19sZWZ0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX3RlYXJzX3JpZ2h0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuICAgIH0sIDUuOClcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuY2FtZXJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDYW1lcmFfWm9vbU91dEFuaW1cIik7XHJcbiAgICB9LCA2LjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgQ29uc3RhbnRzLmlzQ2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVUlfQW5pbVwiKTtcclxuICAgIH0sIDcuNSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.totee.sweetdoll");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1614415418?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.totee.sweetdoll");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDaEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDaEYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50b3RlZS5zd2VldGRvbGxcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkMTYxNDQxNTQxOD9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50b3RlZS5zd2VldGRvbGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a876a3+anpHqp1oP95zhFm5', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.camera = null;
        // environment
        _this.hideMask = null;
        _this.background_1 = null;
        _this.background_2_ver = null;
        _this.background_2_hor = null;
        _this.background_3 = null;
        // container
        _this.GamePlay = null;
        _this.UI_Container = null;
        _this.buttons = null;
        _this.scene1 = null;
        _this.scene3 = null;
        // CTA
        _this.CTA = null;
        _this.CTA_overlay = null;
        _this.CTA_btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        // hint
        _this.hand_1 = null;
        _this.hand_2 = null;
        // doll
        _this.doll = null;
        _this.doll_scene3 = null;
        _this.doll_mouth_default = null;
        _this.doll_mouth_suprise = null;
        _this.doll_tears_left = null;
        _this.doll_tears_right = null;
        _this.doll_dress_default = null;
        _this.doll_dress = null;
        // UI
        _this.logo = null;
        _this.icon = null;
        _this.door = null;
        _this.adultery = null;
        _this.UI_button_revenge = null;
        _this.item_Dress_btn = null;
        _this.items = [];
        // effects
        _this.effect_blink_Doll = null;
        _this.effect_blink_item = null;
        _this.effect_heart = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
    };
    __decorate([
        property(cc.Camera)
    ], NodesContainer.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_2_ver", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_2_hor", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI_Container", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "buttons", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "scene3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_btn", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_scene3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_mouth_default", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_mouth_suprise", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesContainer.prototype, "doll_tears_left", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesContainer.prototype, "doll_tears_right", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_dress_default", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_dress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "door", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "adultery", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI_button_revenge", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "item_Dress_btn", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "items", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_blink_Doll", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_blink_item", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_heart", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStGQztRQTdGRyxZQUFZO1FBRVosWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixjQUFjO1FBRWQsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQVk7UUFFWixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLE1BQU07UUFFTixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLE9BQU87UUFFUCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsT0FBTztRQUVQLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFnQixJ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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2lEQUNFO0lBSXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NkRBQ2dCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NkRBQ2dCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0RBQ1c7SUF6RnRCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErRmxDO0lBQUQscUJBQUM7Q0EvRkQsQUErRkMsQ0EvRjJDLEVBQUUsQ0FBQyxTQUFTLEdBK0Z2RDtrQkEvRm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2Rlc0NvbnRhaW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIC8vIGVudmlyb25tZW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8yX3ZlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmRfMl9ob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrZ3JvdW5kXzM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGNvbnRhaW5lclxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lUGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJX0NvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICBcclxuICAgIC8vIENUQVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9idG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfaWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9sb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBoaW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRfMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gZG9sbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9sbF9zY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX21vdXRoX2RlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX21vdXRoX3N1cHJpc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgZG9sbF90ZWFyc19sZWZ0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBkb2xsX3RlYXJzX3JpZ2h0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGxfZHJlc3NfZGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGxfZHJlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFkdWx0ZXJ5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUlfYnV0dG9uX3JldmVuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtX0RyZXNzX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGl0ZW1zOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBlZmZlY3RzXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBlZmZlY3RfYmxpbmtfRG9sbDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgZWZmZWN0X2JsaW5rX2l0ZW06IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIGVmZmVjdF9oZWFydDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
