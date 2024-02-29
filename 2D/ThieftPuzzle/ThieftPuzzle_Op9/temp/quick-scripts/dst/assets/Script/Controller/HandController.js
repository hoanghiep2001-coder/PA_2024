
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/HandController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '730b3Z1IwJDqI1WXeAS4N6z', 'HandController');
// Script/Controller/HandController.ts

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
var Ultils_1 = require("../Data/Ultils");
var constants_1 = require("../Data/constants");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HandController = /** @class */ (function (_super) {
    __extends(HandController, _super);
    function HandController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.GamePlay = null;
        _this.fakeHand = null;
        _this.Line = null;
        _this.Apple1 = null;
        _this.Apple2 = null;
        _this.PointA = null;
        _this.Apple_1_Points = [];
        _this.rigidBody = null;
        _this.collide = null;
        _this.targetPosition = null;
        _this.speed = 150;
        _this.currentPosition = null;
        return _this;
    }
    HandController.prototype.onLoad = function () {
        this.reset();
    };
    HandController.prototype.start = function () {
        this.currentPosition = this.node.getPosition();
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.handleContact();
    };
    HandController.prototype.reset = function () {
        // Constants.pointA_Pos = this.PointA.getPosition();
        // Constants.point1Pos = this.Apple_1_Points[0].getPosition();
        // Constants.point2Pos = this.Apple_1_Points[1].getPosition();
        // Constants.point3Pos = this.Apple_1_Points[2].getPosition();
        // Constants.point4Pos = this.Apple_1_Points[3].getPosition();
        // Constants.point5Pos = this.Apple_1_Points[4].getPosition();
        // Constants.point6Pos = this.Apple_1_Points[5].getPosition();
        // Constants.point7Pos = this.Apple_1_Points[5].getPosition();
        // Constants.point1Bdb = this.Apple_1_Points[0].getBoundingBox();
        // Constants.point2Bdb = this.Apple_1_Points[1].getBoundingBox();
        // Constants.point3Bdb = this.Apple_1_Points[2].getBoundingBox();
        // Constants.point4Bdb = this.Apple_1_Points[3].getBoundingBox();
    };
    HandController.prototype.handleContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 2) {
                !constants_1.Constants.isLoseGame && _this.GamePlay.getComponent(GamePlay_1.default).loseGame();
            }
        };
    };
    HandController.prototype.handleRotateHand = function () {
        // if (Constants.isTouchPoint1 && Constants.isTouchPoint2) {
        //   return Ultils.Hand.rotateWithPoint(this.node.getPosition());
        // }
        // if (Constants.isTouchPoint1) {
        //   return Ultils.Hand.rotateWithPoint(this.node.getPosition());
        // }
        return Ultils_1.Ultils.Hand.rotateDefault(this.node.getPosition());
    };
    HandController.prototype.move = function () {
        if (!constants_1.Constants.isCanMove) {
            this.stop();
            return;
        }
        if (!constants_1.Constants.ironSource.isEndGame) {
            this.node.setPosition(constants_1.Constants.currentLocalPosition);
            this.fakeHand.setPosition(constants_1.Constants.currentLocalPosition);
            this.currentPosition = this.node.getPosition();
        }
    };
    HandController.prototype.stop = function () {
        this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
        this.node.setPosition(this.currentPosition);
    };
    HandController.prototype.update = function (dt) {
        this.node.angle = this.handleRotateHand();
        (!constants_1.Constants.isTouch || constants_1.Constants.isLoseGame) && this.stop();
    };
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "fakeHand", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "Line", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "Apple1", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "Apple2", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "PointA", void 0);
    __decorate([
        property([cc.Node])
    ], HandController.prototype, "Apple_1_Points", void 0);
    HandController = __decorate([
        ccclass
    ], HandController);
    return HandController;
}(cc.Component));
exports.default = HandController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxIYW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsK0NBQThDO0FBQzlDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXFHQztRQW5HQyxZQUFZO1FBRVosY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFDNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixxQkFBZSxHQUFZLElBQUksQ0FBQzs7SUE4RWxDLENBQUM7SUE1RVcsK0JBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR1MsOEJBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sOEJBQUssR0FBWjtRQUNFLG9EQUFvRDtRQUNwRCw4REFB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aWxzIH0gZnJvbSBcIi4uL0RhdGEvVWx0aWxzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZmFrZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIExpbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEFwcGxlMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQXBwbGUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBQb2ludEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgQXBwbGVfMV9Qb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgY29sbGlkZTogY2MuQ29sbGlkZXIgPSBudWxsO1xyXG4gIHRhcmdldFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuICBzcGVlZDogbnVtYmVyID0gMTUwO1xyXG4gIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIHRoaXMuaGFuZGxlQ29udGFjdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuICAgIC8vIENvbnN0YW50cy5wb2ludEFfUG9zID0gdGhpcy5Qb2ludEEuZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vIENvbnN0YW50cy5wb2ludDFQb3MgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAvLyBDb25zdGFudHMucG9pbnQyUG9zID0gdGhpcy5BcHBsZV8xX1BvaW50c1sxXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgLy8gQ29uc3RhbnRzLnBvaW50M1BvcyA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbMl0uZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vIENvbnN0YW50cy5wb2ludDRQb3MgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzNdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAvLyBDb25zdGFudHMucG9pbnQ1UG9zID0gdGhpcy5BcHBsZV8xX1BvaW50c1s0XS5nZXRQb3NpdGlvbigpO1xyXG4gICAgLy8gQ29uc3RhbnRzLnBvaW50NlBvcyA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbNV0uZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vIENvbnN0YW50cy5wb2ludDdQb3MgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzVdLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgLy8gQ29uc3RhbnRzLnBvaW50MUJkYiA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbMF0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIC8vIENvbnN0YW50cy5wb2ludDJCZGIgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzFdLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAvLyBDb25zdGFudHMucG9pbnQzQmRiID0gdGhpcy5BcHBsZV8xX1BvaW50c1syXS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgLy8gQ29uc3RhbnRzLnBvaW50NEJkYiA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbM10uZ2V0Qm91bmRpbmdCb3goKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5vbkJlZ2luQ29udGFjdCA9IChjOiBjYy5QaHlzaWNzQ29udGFjdCwgczogY2MuUGh5c2ljc0NvbGxpZGVyLCBvOiBjYy5QaHlzaWNzQ29sbGlkZXIpID0+IHtcclxuICAgICAgaWYgKG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgIUNvbnN0YW50cy5pc0xvc2VHYW1lICYmIHRoaXMuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5sb3NlR2FtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVSb3RhdGVIYW5kKCk6IG51bWJlciB7XHJcbiAgICAvLyBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIpIHtcclxuICAgIC8vICAgcmV0dXJuIFVsdGlscy5IYW5kLnJvdGF0ZVdpdGhQb2ludCh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbiAgICAvLyAgIHJldHVybiBVbHRpbHMuSGFuZC5yb3RhdGVXaXRoUG9pbnQodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiBVbHRpbHMuSGFuZC5yb3RhdGVEZWZhdWx0KHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgbW92ZSgpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDYW5Nb3ZlKSB7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbilcclxuICAgICAgdGhpcy5mYWtlSGFuZC5zZXRQb3NpdGlvbihDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24pXHJcbiAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG4gICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuY3VycmVudFBvc2l0aW9uKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuaGFuZGxlUm90YXRlSGFuZCgpO1xyXG4gICAgKCFDb25zdGFudHMuaXNUb3VjaCB8fCBDb25zdGFudHMuaXNMb3NlR2FtZSkgJiYgdGhpcy5zdG9wKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=