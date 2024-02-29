
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
var GraphicsController_1 = require("./GraphicsController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // Node
        _this.Hand = null;
        _this.CTA = null;
        _this.CTA_Button = null;
        // UI
        _this.background = null;
        _this.thieftDefault = null;
        _this.guardDefault = null;
        _this.guardDefault_Flag = null;
        _this.thieftCTA = null;
        _this.guardCTA = null;
        _this.tree = null;
        _this.glass = null;
        _this.cage = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.initPhysics();
    };
    GamePlay.prototype.start = function () {
    };
    GamePlay.prototype.loseGame = function () {
        var _this = this;
        constants_1.Constants.isLoseGame = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.naniSound);
        // fill color for graphics to red
        this.GraphicsController.getComponent(cc.Graphics).fillColor = cc.Color.RED;
        this.GraphicsController.getComponent(cc.Graphics).strokeColor = cc.Color.RED;
        this.GraphicsController.graphicsNodes.forEach(function (graphic) {
            graphic.clear();
        });
        if (constants_1.Constants.isTouchPoint1) {
            this.GraphicsController.graphicsNodes[1].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].moveTo(constants_1.Constants.pointA_Pos.x, constants_1.Constants.pointA_Pos.y);
            this.GraphicsController.graphicsNodes[1].lineTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[1].stroke();
            this.GraphicsController.graphicsNodes[2].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].moveTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[2].lineTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[2].stroke();
            this.GraphicsController.graphicsNodes[6].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].moveTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[6].lineTo(constants_1.Constants.point6Pos.x, constants_1.Constants.point6Pos.y);
            this.GraphicsController.graphicsNodes[6].stroke();
        }
        // show flag
        this.guardDefault_Flag.active = true;
        this.scheduleOnce(function () {
            constants_1.Constants.ironSource.isEndGame = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stunSound);
            // active CTA
            _this.guardDefault.active = false;
            _this.thieftDefault.active = false;
            _this.guardCTA.active = true;
            _this.thieftCTA.active = true;
            // destroy hand
            _this.Hand.active = false;
            _this.Hand.destroy();
            _this.GraphicsController.graphicsNodes.forEach(function (graphic) { return graphic.clear(); });
            _this.GraphicsController.getComponent(cc.Graphics).clear();
        }, 1.5);
        this.scheduleOnce(function () {
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.CTA_Button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        }, 2.5);
    };
    GamePlay.prototype.initPhysics = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        collisionManager.enabledDrawBoundingBox = true;
    };
    GamePlay.prototype.update = function (dt) {
        // ironsource
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], GamePlay.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_Button", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault_Flag", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "tree", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "glass", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "cage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFHaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnSUM7UUE3SEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0Qyx3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRzlDLE9BQU87UUFFUCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsS0FBSztRQUVMLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBeUZ2QixDQUFDO0lBdEZXLHlCQUFNLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHUyx3QkFBSyxHQUFmO0lBRUEsQ0FBQztJQUdNLDJCQUFRLEdBQWY7UUFBQSxpQkE0REM7UUEzREMscUJBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxD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QUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUF2Q0YsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdJNUI7SUFBRCxlQUFDO0NBaElELEFBZ0lDLENBaElxQyxFQUFFLENBQUMsU0FBUyxHQWdJakQ7a0JBaElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR3JhcGhpY3NDb250cm9sbGVyIGZyb20gXCIuL0dyYXBoaWNzQ29udHJvbGxlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHcmFwaGljc0NvbnRyb2xsZXIpXHJcbiAgR3JhcGhpY3NDb250cm9sbGVyOiBHcmFwaGljc0NvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ1RBX0J1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBVSVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0aGllZnREZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBndWFyZERlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGd1YXJkRGVmYXVsdF9GbGFnOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0aGllZnRDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGd1YXJkQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdHJlZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZ2xhc3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNhZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBsb3NlR2FtZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc0xvc2VHYW1lID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5kcmF3U291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5hbmlTb3VuZCk7XHJcbiAgICBcclxuICAgIC8vIGZpbGwgY29sb3IgZm9yIGdyYXBoaWNzIHRvIHJlZFxyXG4gICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlcy5mb3JFYWNoKGdyYXBoaWMgPT4ge1xyXG4gICAgICBncmFwaGljLmNsZWFyKClcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0uZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzFdLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzFdLm1vdmVUbyhDb25zdGFudHMucG9pbnRBX1Bvcy54LCBDb25zdGFudHMucG9pbnRBX1Bvcy55KTtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1sxXS5saW5lVG8oQ29uc3RhbnRzLnBvaW50MVBvcy54LCBDb25zdGFudHMucG9pbnQxUG9zLnkpO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzFdLnN0cm9rZSgpO1xyXG4gIFxyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzJdLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1syXS5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1syXS5tb3ZlVG8oQ29uc3RhbnRzLnBvaW50MVBvcy54LCBDb25zdGFudHMucG9pbnQxUG9zLnkpO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzJdLmxpbmVUbyhDb25zdGFudHMucG9pbnQ1UG9zLngsIENvbnN0YW50cy5wb2ludDVQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMl0uc3Ryb2tlKCk7XHJcblxyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzZdLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1s2XS5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1s2XS5tb3ZlVG8oQ29uc3RhbnRzLnBvaW50NVBvcy54LCBDb25zdGFudHMucG9pbnQ1UG9zLnkpO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzZdLmxpbmVUbyhDb25zdGFudHMucG9pbnQ2UG9zLngsIENvbnN0YW50cy5wb2ludDZQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0uc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvdyBmbGFnXHJcbiAgICB0aGlzLmd1YXJkRGVmYXVsdF9GbGFnLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3R1blNvdW5kKTtcclxuXHJcbiAgICAgIC8vIGFjdGl2ZSBDVEFcclxuICAgICAgdGhpcy5ndWFyZERlZmF1bHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGhpZWZ0RGVmYXVsdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ndWFyZENUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRoaWVmdENUQS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gZGVzdHJveSBoYW5kXHJcbiAgICAgIHRoaXMuSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5IYW5kLmRlc3Ryb3koKTtcclxuXHJcblxyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzLmZvckVhY2goZ3JhcGhpYyA9PiBncmFwaGljLmNsZWFyKCkpO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgIFxyXG4gICAgfSwgMS41KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSAgPT4ge1xyXG4gICAgICB0aGlzLkNUQS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ1RBX0FuaW1cIik7XHJcblxyXG4gICAgICB0aGlzLkNUQV9CdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICB9LCAyLjUpXHJcbiAgfVxyXG4gIFxyXG5cclxuICBwcml2YXRlIGluaXRQaHlzaWNzKCk6IHZvaWQge1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGxldCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==