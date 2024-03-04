
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
        this.NodeContainer.Tweezers.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.dirtySound);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.girlScreamSound); }, 0.5);
        this.scheduleOnce(function () { _this.getComponent(cc.Animation).play("GamePlay_SwtichStep"); }, 2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.wormBgSound); constants_1.Constants.isCanTouch = true; }, 3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 4.3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound); }, 5.8);
        this.scheduleOnce(function () {
            // this.NodeContainer.Hand_1.active = true; 
            constants_1.Constants.isRotate
                ? _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                : _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_VtcHintAnim");
        }, 7);
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            constants_1.Constants.isDoneCleanser = true;
            this.checkCleanserFlag = true;
            this.NodeContainer.Cleanser.getComponent(cc.Animation).play("Cleanser_HideAnim");
            this.NodeContainer.Scratchable.active = false;
            this.NodeContainer.Cleanser_Point.active = false;
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
        }
    };
    GamePlay.prototype.showTweezers = function () {
        console.log("tweezers");
        this.checkshowTweezersFlag = true;
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
        this.isRemovingMaggot = true;
        switch (maggotName) {
            case "Tws_InteractPoint1":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG1.node.active = true;
                this.NodeContainer.Circle_1.active = false;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot1.node.active = false; }, 1.2);
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG1);
                break;
            case "Tws_InteractPoint2":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG2.node.active = true;
                this.NodeContainer.Circle_2.active = false;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 1.2);
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG2);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.setCompleteSpine = function (spine) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Action") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxSEM7UUFsSEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQywyQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMsc0JBQWdCLEdBQVksS0FBSyxDQUFDOztJQXdHcEMsQ0FBQztJQXJHVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUdPLGlDQUFjLEdBQXRCO1FBQUEsaUJBZUM7UUFkQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTyxLQUFJLENBQUMsWUFBWSxD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QUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZUNvbnRhaW5lciBmcm9tIFwiLi9Ob2RlQ29udGFuaWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgY2hlY2tDbGVhbnNlckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjaGVja3Nob3dUd2VlemVyc0ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1JlbW92aW5nTWFnZ290OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIFxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5kaXJ0eVNvdW5kKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmdpcmxTY3JlYW1Tb3VuZCl9LCAwLjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X1N3dGljaFN0ZXBcIil9LCAyKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud29ybUJnU291bmQpOyBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWV9LCAzKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7IH0sIDQuMyk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnhpdE51b2NTb3VuZCk7IH0sIDUuOCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzEuYWN0aXZlID0gdHJ1ZTsgXHJcbiAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSBcclxuICAgICAgPyB0aGlzLk5vZGVDb250YWluZXIuSGFuZF8xLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIYW5kX0hyekhpbnRBbmltXCIpXHJcbiAgICAgIDogdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9WdGNIaW50QW5pbVwiKTtcclxuICAgIH0sIDcpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVEb25lQ2xlYW5zZXIoKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLk5vZGVDb250YWluZXIuU2NyYXRjaGFibGUuZ2V0Q29tcG9uZW50KFwiU2NyYXRjaGFibGVcIikuaXNXaW4pIHtcclxuICAgICAgQ29uc3RhbnRzLmlzRG9uZUNsZWFuc2VyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGVja0NsZWFuc2VyRmxhZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2xlYW5zZXJfSGlkZUFuaW1cIilcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNjcmF0Y2hhYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXJfUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGFyXzEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJfQmxpbmtBbmltXCIpO1xyXG4gICAgfSBcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dUd2VlemVycygpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHdlZXplcnNcIik7XHJcbiAgICB0aGlzLmNoZWNrc2hvd1R3ZWV6ZXJzRmxhZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUNoZWNrUmVtb3ZlTWFnZ290cygpOiB2b2lkIHtcclxuICAgIGxldCB0d2VlemVyc0JkeCA9IHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19IZWFkUG9pbnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBwb2ludHMgPSBbdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLCB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDJdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IFBvaW50QmR4ID0gcG9pbnRzW2ldLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgIGxldCBwb2ludE5hbWUgPSBwb2ludHNbaV0ubmFtZTtcclxuICAgICAgaWYodHdlZXplcnNCZHguaW50ZXJzZWN0cyhQb2ludEJkeCkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZU1hZ2dvdChwb2ludE5hbWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlUmVtb3ZlTWFnZ290KG1hZ2dvdE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1JlbW92aW5nTWFnZ290ID0gdHJ1ZTtcclxuICAgIHN3aXRjaCAobWFnZ290TmFtZSkge1xyXG4gICAgICBjYXNlIFwiVHdzX0ludGVyYWN0UG9pbnQxXCI6XHJcbiAgICAgICAgICBDb25zdGFudHMubWFnZ290UmVtb3ZlZCArPSAxO1xyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX01hZ2dvdDEuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZTAxXCIsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9STU1HMS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QxLm5vZGUuYWN0aXZlID0gZmFsc2V9LCAxLjIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9STU1HMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlR3c19JbnRlcmFjdFBvaW50MlwiOlxyXG4gICAgICAgICAgQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgKz0gMTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QyLnNldEFuaW1hdGlvbigwLCBcImlkbGUwMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUk1NRzIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNpcmNsZV8yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290Mi5ub2RlLmFjdGl2ZSA9IGZhbHNlfSwgMS4yKTtcclxuICAgICAgICAgIHRoaXMuc2V0Q29tcGxldGVTcGluZSh0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUk1NRzIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXRDb21wbGV0ZVNwaW5lKHNwaW5lOnNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiQWN0aW9uXCIpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd1R3ZWV6ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAhdGhpcy5jaGVja0NsZWFuc2VyRmxhZyAmJiB0aGlzLmhhbmRsZURvbmVDbGVhbnNlcigpO1xyXG4gICAgICB0aGlzLmNoZWNrQ2xlYW5zZXJGbGFnICYmICF0aGlzLmNoZWNrc2hvd1R3ZWV6ZXJzRmxhZyAmJiB0aGlzLnNob3dUd2VlemVycygpO1xyXG4gICAgICB0aGlzLmNoZWNrc2hvd1R3ZWV6ZXJzRmxhZyAmJiAhdGhpcy5pc1JlbW92aW5nTWFnZ290ICYmIHRoaXMuaGFuZGxlQ2hlY2tSZW1vdmVNYWdnb3RzKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=