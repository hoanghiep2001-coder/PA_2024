
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
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        // state
        _this.tweezersStartPos = null;
        _this.tweezersPointStartPos = null;
        _this.isRunFlow1 = false;
        _this.checkCleanserFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.NodeContainer.Text_Jimin.opacity = 0;
        this.NodeContainer.Text_Drag.opacity = 0;
        this.NodeContainer.sp_Cleanser.node.active = false;
        this.NodeContainer.Cleanser.opacity = 0;
        this.NodeContainer.tweezers.opacity = 0;
        this.tweezersStartPos = this.NodeContainer.sp_Tweezers.node.getPosition();
        this.tweezersPointStartPos = this.NodeContainer.Point_Tweezers.getPosition();
        this.NodeContainer.Acne1_1.active = false;
        this.NodeContainer.Acne1_2.active = false;
        this.NodeContainer.Acne2_1.active = false;
        this.NodeContainer.Acne2_2.active = false;
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.scheduleOnce(function () { _this.NodeContainer.Text_Jimin.getComponent(cc.Animation).play("ShowAnim"); }, 1);
        this.scheduleOnce(function () {
            _this.NodeContainer.Bg_2.getComponent(cc.Animation).play("ShowAnim");
            _this.NodeContainer.Doll.getComponent(cc.Animation).play("Doll_ScaleAnim");
            _this.NodeContainer.Doll.getChildByName("JiminBase").getComponent(cc.Animation).stop();
            _this.hideUIFirstStep();
        }, 2);
        this.scheduleOnce(function () {
            _this.NodeContainer.Cleanser.getComponent(cc.Animation).play("ShowAnim");
            _this.NodeContainer.sp_Cleanser.node.active = true;
            _this.showTools(_this.NodeContainer.sp_Cleanser);
        }, 3.5);
        this.scheduleOnce(function () {
            _this.NodeContainer.Text_Drag.getComponent(cc.Animation).play("ShowAnim");
        }, 4.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound);
        }, 4.8);
        this.scheduleOnce(function () { cc.tween(_this.NodeContainer.Hand_1).to(0.5, { opacity: 255 }).start(); constants_1.Constants.isCanTouch = true; }, 6);
    };
    GamePlay.prototype.hideUIFirstStep = function () {
        cc.tween(this.NodeContainer.Text_Jimin)
            .to(0.5, { opacity: 0 })
            .start();
        cc.tween(this.NodeContainer.sp_tearsLeft.node)
            .to(0.5, { opacity: 0 })
            .start();
        cc.tween(this.NodeContainer.sp_tearsRight.node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool) {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var node = tool.node;
        var position = node.getPosition();
        node.setPosition(position.x - 30, position.y);
        cc.tween(node)
            .to(0.5, { x: position.x })
            .start();
    };
    GamePlay.prototype.activeCleanSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = true;
    };
    GamePlay.prototype.stopCleanSound = function () {
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            constants_1.Constants.isTouch = false;
            constants_1.Constants.isCanTouch = true;
            this.stopCleanSound();
            this.checkCleanserFlag = true;
            this.NodeContainer.Scratchable.active = false;
            this.hideAnim(this.NodeContainer.Cleanser);
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
        }
    };
    GamePlay.prototype.showTweezers = function () {
        var _this = this;
        this.checkshowTweezersFlag = true;
        this.scheduleOnce(function () {
            constants_1.Constants.isDoneCleanser = true;
            _this.NodeContainer.tweezers.getComponent(cc.Animation).play("ShowAnim");
            _this.showTools(_this.NodeContainer.sp_Tweezers);
            _this.scheduleOnce(function () {
                _this.NodeContainer.Hand_2.active = true;
                constants_1.Constants.isRotate
                    ? _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
                    : _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
                cc.tween(_this.NodeContainer.Hand_2)
                    .to(0.5, { opacity: 255 })
                    .start();
                constants_1.Constants.isCanTouch = true;
            }, 0.5);
        }, 1.5);
    };
    GamePlay.prototype.handleCheckRemoveMaggots = function () {
        var tweezersBdx = this.NodeContainer.Point_Tweezer_Head.getBoundingBox();
        var points = [this.NodeContainer.Tweezers_InteractPoint1, this.NodeContainer.Tweezers_InteractPoint2];
        for (var i = 0; i < points.length; i++) {
            var PointBdx = points[i].getBoundingBox();
            var pointName = points[i].name;
            if (tweezersBdx.intersects(PointBdx)) {
                this.handleRemoveMaggot(pointName);
            }
        }
    };
    GamePlay.prototype.handleRemoveMaggot = function (maggotName) {
        var _this = this;
        this.NodeContainer.tweezers.opacity = 0;
        this.isRemovingMaggot = true;
        constants_1.Constants.maggotRemoved += 1;
        console.log(maggotName);
        switch (maggotName) {
            case "Point_Mg1":
                this.NodeContainer.Acne1_2.active = true;
                this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG1.node.active = true;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot1.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.scheduleOnce(function () {
                    _this.NodeContainer.Acne1_1.active = true;
                }, 3.6);
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG1, maggotName);
                break;
            case "Point_Mg3":
                this.NodeContainer.Acne2_2.active = true;
                this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG2.node.active = true;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.scheduleOnce(function () {
                    _this.NodeContainer.Acne2_1.active = true;
                }, 3.6);
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG2, maggotName);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.activeRemoveMaggotSound = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound); }, 0.75);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.8);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound); }, 3.6);
    };
    GamePlay.prototype.setCompleteSpine = function (spine, name) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Action") {
                _this.showTweezers();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                _this.NodeContainer.sp_Tweezers.node.setPosition(_this.tweezersStartPos);
                _this.NodeContainer.Point_Tweezers.setPosition(_this.tweezersPointStartPos);
            }
        });
    };
    GamePlay.prototype.update = function (dt) {
        !this.checkCleanserFlag && this.handleDoneCleanser();
        this.checkCleanserFlag && !this.checkshowTweezersFlag && this.showTweezers();
        this.checkshowTweezersFlag && !this.isRemovingMaggot && this.handleCheckRemoveMaggots();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyTkM7UUF6TkMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDdEMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLDJCQUFxQixHQUFZLEtBQUssQ0FBQztRQUN2QyxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7O0lBNE1wQyxDQUFDO0lBek1XLHlCQUFNLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFD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dGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIHR3ZWV6ZXJzU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gIHR3ZWV6ZXJzUG9pbnRTdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgaXNSdW5GbG93MTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNoZWNrQ2xlYW5zZXJGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2hlY2tzaG93VHdlZXplcnNGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNSZW1vdmluZ01hZ2dvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLm9wYWNpdHkgPSAwO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5zcF9DbGVhbnNlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLm9wYWNpdHkgPSAwO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLnR3ZWV6ZXJzLm9wYWNpdHkgPSAwO1xyXG4gICAgdGhpcy50d2VlemVyc1N0YXJ0UG9zID0gdGhpcy5Ob2RlQ29udGFpbmVyLnNwX1R3ZWV6ZXJzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMudHdlZXplcnNQb2ludFN0YXJ0UG9zID0gdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkFjbmUxXzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQWNuZTFfMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5BY25lMl8xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkFjbmUyXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfSmltaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNob3dBbmltXCIpIH0sIDEpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2hvd0FuaW1cIik7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJEb2xsX1NjYWxlQW5pbVwiKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGwuZ2V0Q2hpbGRCeU5hbWUoXCJKaW1pbkJhc2VcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICB0aGlzLmhpZGVVSUZpcnN0U3RlcCgpO1xyXG4gICAgfSwgMik7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNob3dBbmltXCIpO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuc3BfQ2xlYW5zZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuc3BfQ2xlYW5zZXIpO1xyXG4gICAgfSwgMy41KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2hvd0FuaW1cIik7XHJcbiAgICB9LCA0LjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sueGl0TnVvY1NvdW5kKTtcclxuICAgIH0sIDQuOClcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpOyBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7IH0sIDYpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlVUlGaXJzdFN0ZXAoKTogdm9pZCB7XHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbilcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5zcF90ZWFyc0xlZnQubm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5zcF90ZWFyc1JpZ2h0Lm5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUFuaW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9vbHModG9vbDogc3AuU2tlbGV0b24pOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKTtcclxuICAgIGxldCBub2RlID0gdG9vbC5ub2RlO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgbm9kZS5zZXRQb3NpdGlvbihwb3NpdGlvbi54IC0gMzAsIHBvc2l0aW9uLnkpO1xyXG4gICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiBwb3NpdGlvbi54IH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBhY3RpdmVDbGVhblNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5jbGVhblNvdW5kLmxvb3AgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzdG9wQ2xlYW5Tb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKVxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuY2xlYW5Tb3VuZC5sb29wID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZURvbmVDbGVhbnNlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLk5vZGVDb250YWluZXIuU2NyYXRjaGFibGUuZ2V0Q29tcG9uZW50KFwiU2NyYXRjaGFibGVcIikuaXNXaW4pIHtcclxuICAgICAgQ29uc3RhbnRzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICB0aGlzLnN0b3BDbGVhblNvdW5kKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tDbGVhbnNlckZsYWcgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuU2NyYXRjaGFibGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGlkZUFuaW0odGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyKTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbXBsZXRlU291bmQpO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuU3Rhcl8xLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTdGFyX0JsaW5rQW5pbVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dUd2VlemVycygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tzaG93VHdlZXplcnNGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgQ29uc3RhbnRzLmlzRG9uZUNsZWFuc2VyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLnR3ZWV6ZXJzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTaG93QW5pbVwiKTtcclxuICAgICAgdGhpcy5zaG93VG9vbHModGhpcy5Ob2RlQ29udGFpbmVyLnNwX1R3ZWV6ZXJzKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBDb25zdGFudHMuaXNSb3RhdGVcclxuICAgICAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpBbmltXCIpXHJcbiAgICAgICAgICA6IHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhhbmRfSGludEFuaW1cIik7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMilcclxuICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgIH0sIDAuNSk7XHJcbiAgICB9LCAxLjUpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUNoZWNrUmVtb3ZlTWFnZ290cygpOiB2b2lkIHtcclxuICAgIGxldCB0d2VlemVyc0JkeCA9IHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9Ud2VlemVyX0hlYWQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBwb2ludHMgPSBbdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLCB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDJdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IFBvaW50QmR4ID0gcG9pbnRzW2ldLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgIGxldCBwb2ludE5hbWUgPSBwb2ludHNbaV0ubmFtZTtcclxuICAgICAgaWYgKHR3ZWV6ZXJzQmR4LmludGVyc2VjdHMoUG9pbnRCZHgpKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVNYWdnb3QocG9pbnROYW1lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZVJlbW92ZU1hZ2dvdChtYWdnb3ROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci50d2VlemVycy5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuaXNSZW1vdmluZ01hZ2dvdCA9IHRydWU7XHJcbiAgICBDb25zdGFudHMubWFnZ290UmVtb3ZlZCArPSAxO1xyXG4gICAgY29uc29sZS5sb2cobWFnZ290TmFtZSk7XHJcblxyXG4gICAgc3dpdGNoIChtYWdnb3ROYW1lKSB7XHJcbiAgICAgIGNhc2UgXCJQb2ludF9NZzFcIjpcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQWNuZTFfMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QxLnNldEFuaW1hdGlvbigwLCBcImlkbGUwMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QxLm5vZGUuYWN0aXZlID0gZmFsc2UgfSwgMC43NSk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSZW1vdmVNYWdnb3RTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5BY25lMV8xLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgMy42KVxyXG4gICAgICAgIHRoaXMuc2V0Q29tcGxldGVTcGluZSh0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUk1NRzEsIG1hZ2dvdE5hbWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUG9pbnRfTWczXCI6XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkFjbmUyXzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290Mi5zZXRBbmltYXRpb24oMCwgXCJpZGxlMDFcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9STU1HMi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290Mi5ub2RlLmFjdGl2ZSA9IGZhbHNlIH0sIDAuNzUpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUmVtb3ZlTWFnZ290U291bmQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQWNuZTJfMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDMuNilcclxuICAgICAgICB0aGlzLnNldENvbXBsZXRlU3BpbmUodGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcyLCBtYWdnb3ROYW1lKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVJlbW92ZU1hZ2dvdFNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMVNvdW5kKSB9LCAwLjc1KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCkgfSwgMS41KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCkgfSwgMi4yKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCkgfSwgMi44KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjNTb3VuZCkgfSwgMy42KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2V0Q29tcGxldGVTcGluZShzcGluZTogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSkgPT4ge1xyXG4gICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gXCJBY3Rpb25cIikge1xyXG4gICAgICAgIHRoaXMuc2hvd1R3ZWV6ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbXBsZXRlU291bmQpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5zcF9Ud2VlemVycy5ub2RlLnNldFBvc2l0aW9uKHRoaXMudHdlZXplcnNTdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLnNldFBvc2l0aW9uKHRoaXMudHdlZXplcnNQb2ludFN0YXJ0UG9zKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAhdGhpcy5jaGVja0NsZWFuc2VyRmxhZyAmJiB0aGlzLmhhbmRsZURvbmVDbGVhbnNlcigpO1xyXG4gICAgdGhpcy5jaGVja0NsZWFuc2VyRmxhZyAmJiAhdGhpcy5jaGVja3Nob3dUd2VlemVyc0ZsYWcgJiYgdGhpcy5zaG93VHdlZXplcnMoKTtcclxuICAgIHRoaXMuY2hlY2tzaG93VHdlZXplcnNGbGFnICYmICF0aGlzLmlzUmVtb3ZpbmdNYWdnb3QgJiYgdGhpcy5oYW5kbGVDaGVja1JlbW92ZU1hZ2dvdHMoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==