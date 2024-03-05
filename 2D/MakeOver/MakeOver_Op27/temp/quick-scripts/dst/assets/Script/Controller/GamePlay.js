
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
        _this.checkCleanserFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        this.NodeContainer.Tweezers.opacity = 0;
        this.NodeContainer.Circle_1.active = false;
        this.NodeContainer.Circle_2.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.dirtySound);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.girlScreamSound); }, 0.5);
        this.scheduleOnce(function () { _this.getComponent(cc.Animation).play("GamePlay_SwtichStep"); }, 2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.wormBgSound); }, 3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 4.3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound); constants_1.Constants.isCanTouch = true; }, 5.8);
        this.scheduleOnce(function () {
            constants_1.Constants.isRotate
                ? _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                : _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_VtcHintAnim");
        }, 7);
    };
    GamePlay.prototype.activeCleanSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = true;
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            this.checkCleanserFlag = true;
            this.NodeContainer.Scratchable.active = false;
            this.NodeContainer.Cleanser_Point.active = false;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            this.NodeContainer.Cleanser.getComponent(cc.Animation).play("Cleanser_HideAnim");
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
            this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
            this.AudioManager.cleanSound.loop = false;
        }
    };
    GamePlay.prototype.showTweezers = function () {
        var _this = this;
        this.checkshowTweezersFlag = true;
        this.scheduleOnce(function () {
            constants_1.Constants.isDoneCleanser = true;
            _this.NodeContainer.Circle_1.active = true;
            _this.NodeContainer.Circle_2.active = true;
            _this.NodeContainer.Tweezers.getComponent(cc.Animation).play("Tweezers_ShowAnim");
            _this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 0.2);
            _this.scheduleOnce(function () {
                _this.NodeContainer.Hand_2.active = true;
                constants_1.Constants.isRotate
                    ? _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                    : _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_VtcHintAnim");
            }, 1.5);
        }, 1.5);
    };
    GamePlay.prototype.handleCheckRemoveMaggots = function () {
        var tweezersBdx = this.NodeContainer.Tweezers_HeadPoint.getBoundingBox();
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
        this.NodeContainer.Tweezers.opacity = 0;
        this.NodeContainer.Circle_1.active = false;
        this.NodeContainer.Circle_2.active = false;
        this.isRemovingMaggot = true;
        switch (maggotName) {
            case "Tws_InteractPoint1":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG1.node.active = true;
                this.NodeContainer.Circle_1.opacity = 0;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot1.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG1);
                break;
            case "Tws_InteractPoint2":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG2.node.active = true;
                this.NodeContainer.Circle_2.opacity = 0;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG2);
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
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound); }, 4);
    };
    GamePlay.prototype.setCompleteSpine = function (spine) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Action") {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                _this.showTweezers();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5SkM7UUF0SkMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQywyQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMsc0JBQWdCLEdBQVksS0FBSyxDQUFDOztJQTRJcEMsQ0FBQztJQXpJVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUFBLGlCQWNDO1FBYkMsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxx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SUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDNUYsQ0FBQztJQXBKRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzttREFDWTtJQVBqQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUo1QjtJQUFELGVBQUM7Q0F6SkQsQUF5SkMsQ0F6SnFDLEVBQUUsQ0FBQyxTQUFTLEdBeUpqRDtrQkF6Sm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gIE5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICBjaGVja0NsZWFuc2VyRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNoZWNrc2hvd1R3ZWV6ZXJzRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzUmVtb3ZpbmdNYWdnb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVycy5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMi5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZUdhbWVQbGF5KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRpcnR5U291bmQpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZ2lybFNjcmVhbVNvdW5kKX0sIDAuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiR2FtZVBsYXlfU3d0aWNoU3RlcFwiKX0sIDIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53b3JtQmdTb3VuZCl9LCAzKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7IH0sIDQuMyk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnhpdE51b2NTb3VuZCk7IENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZSB9LCA1LjgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNSb3RhdGUgXHJcbiAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpIaW50QW5pbVwiKVxyXG4gICAgICA6IHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhhbmRfVnRjSGludEFuaW1cIik7XHJcbiAgICB9LCA3KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYWN0aXZlQ2xlYW5Tb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmNsZWFuU291bmQubG9vcCA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZURvbmVDbGVhbnNlcigpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuTm9kZUNvbnRhaW5lci5TY3JhdGNoYWJsZS5nZXRDb21wb25lbnQoXCJTY3JhdGNoYWJsZVwiKS5pc1dpbikge1xyXG4gICAgICB0aGlzLmNoZWNrQ2xlYW5zZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNjcmF0Y2hhYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXJfUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb21wbGV0ZVNvdW5kKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDbGVhbnNlcl9IaWRlQW5pbVwiKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0YXJfMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU3Rhcl9CbGlua0FuaW1cIik7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKVxyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5jbGVhblNvdW5kLmxvb3AgPSBmYWxzZTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VHdlZXplcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrc2hvd1R3ZWV6ZXJzRmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVDbGVhbnNlciA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJUd2VlemVyc19TaG93QW5pbVwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKX0sIDAuMik7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZF8yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlIFxyXG4gICAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpIaW50QW5pbVwiKVxyXG4gICAgICAgIDogdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9WdGNIaW50QW5pbVwiKTtcclxuICAgICAgfSwgMS41KTtcclxuICAgIH0sIDEuNSlcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2hlY2tSZW1vdmVNYWdnb3RzKCk6IHZvaWQge1xyXG4gICAgbGV0IHR3ZWV6ZXJzQmR4ID0gdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0hlYWRQb2ludC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IHBvaW50cyA9IFt0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDEsIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Ml07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgUG9pbnRCZHggPSBwb2ludHNbaV0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgbGV0IHBvaW50TmFtZSA9IHBvaW50c1tpXS5uYW1lO1xyXG4gICAgICBpZih0d2VlemVyc0JkeC5pbnRlcnNlY3RzKFBvaW50QmR4KSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTWFnZ290KHBvaW50TmFtZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVSZW1vdmVNYWdnb3QobWFnZ290TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUmVtb3ZpbmdNYWdnb3QgPSB0cnVlO1xyXG4gICAgc3dpdGNoIChtYWdnb3ROYW1lKSB7XHJcbiAgICAgIGNhc2UgXCJUd3NfSW50ZXJhY3RQb2ludDFcIjpcclxuICAgICAgICAgIENvbnN0YW50cy5tYWdnb3RSZW1vdmVkICs9IDE7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290MS5zZXRBbmltYXRpb24oMCwgXCJpZGxlMDFcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX01hZ2dvdDEubm9kZS5hY3RpdmUgPSBmYWxzZX0sIDAuNzUpO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVSZW1vdmVNYWdnb3RTb3VuZCgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9STU1HMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlR3c19JbnRlcmFjdFBvaW50MlwiOlxyXG4gICAgICAgICAgQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgKz0gMTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QyLnNldEFuaW1hdGlvbigwLCBcImlkbGUwMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUk1NRzIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNpcmNsZV8yLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290Mi5ub2RlLmFjdGl2ZSA9IGZhbHNlfSwgMC43NSk7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVJlbW92ZU1hZ2dvdFNvdW5kKCk7XHJcbiAgICAgICAgICB0aGlzLnNldENvbXBsZXRlU3BpbmUodGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVJlbW92ZU1hZ2dvdFNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4xU291bmQpO30sIDAuNzUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpO30sIDEuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7fSwgMi4yKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMlNvdW5kKTt9LCAyLjgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4zU291bmQpO30sIDQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXRDb21wbGV0ZVNwaW5lKHNwaW5lOnNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiQWN0aW9uXCIpIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29tcGxldGVTb3VuZCk7XHJcbiAgICAgICAgICB0aGlzLnNob3dUd2VlemVycygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgIXRoaXMuY2hlY2tDbGVhbnNlckZsYWcgJiYgdGhpcy5oYW5kbGVEb25lQ2xlYW5zZXIoKTtcclxuICAgICAgdGhpcy5jaGVja0NsZWFuc2VyRmxhZyAmJiAhdGhpcy5jaGVja3Nob3dUd2VlemVyc0ZsYWcgJiYgdGhpcy5zaG93VHdlZXplcnMoKTtcclxuICAgICAgdGhpcy5jaGVja3Nob3dUd2VlemVyc0ZsYWcgJiYgIXRoaXMuaXNSZW1vdmluZ01hZ2dvdCAmJiB0aGlzLmhhbmRsZUNoZWNrUmVtb3ZlTWFnZ290cygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19