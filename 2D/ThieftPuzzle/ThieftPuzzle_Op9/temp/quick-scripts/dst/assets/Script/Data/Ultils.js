
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
var constants_1 = require("./constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rotateDefault = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.pointA_Pos);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
var rotateWithPoint = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.newPoint);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
var checkTouchCondition1 = function (hand, point, graphic, pointCompare) {
    if (hand.x > pointCompare.x && hand.y > pointCompare.y) {
        return;
    }
    if (hand.x < point.x && !constants_1.Constants.isTouchPoint2) {
        constants_1.Constants.isDrawPoint1 = false;
        constants_1.Constants.isTouchPoint1 = false;
        constants_1.Constants.newPoint = constants_1.Constants.pointA_Pos;
        graphic.clear();
        return;
    }
    if (hand.x > point.x && hand.y > point.y && !constants_1.Constants.isTouchPoint1) {
        constants_1.Constants.isTouchPoint1 = true;
        constants_1.Constants.newPoint = point.getPosition();
    }
};
var checkTouchCondition6 = function (hand, newPoint, oldPoint, graphics) {
    if (!constants_1.Constants.isTouchPoint2 && !constants_1.Constants.isTouchPoint3 && !constants_1.Constants.isTouchPoint4) {
        if (hand.x < newPoint.x && constants_1.Constants.isTouchPoint1) {
            graphics.clear();
            constants_1.Constants.isDrawPoint6 = false;
            constants_1.Constants.isTouchPoint6 = false;
            return;
        }
        if (hand.x > newPoint.x && hand.y > newPoint.y && constants_1.Constants.isTouchPoint1) {
            constants_1.Constants.isTouchPoint6 = true;
            constants_1.Constants.oldPoint = oldPoint.getPosition();
            constants_1.Constants.newPoint = newPoint.getPosition();
        }
    }
    if (constants_1.Constants.isTouchPoint2 && constants_1.Constants.isTouchPoint3 && constants_1.Constants.isTouchPoint4) {
        if (hand.x < newPoint.x) {
            graphics.clear();
            constants_1.Constants.isDrawPoint6 = false;
            constants_1.Constants.isTouchPoint6 = false;
            constants_1.Constants.oldPoint = constants_1.Constants.point4Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point1Pos;
            return;
        }
        if (hand.x > newPoint.x && hand.y > newPoint.y && constants_1.Constants.isTouchPoint1) {
            constants_1.Constants.isTouchPoint6 = true;
            constants_1.Constants.oldPoint = oldPoint.getPosition();
            constants_1.Constants.newPoint = newPoint.getPosition();
        }
    }
};
var checkTouchCondition7 = function (hand) {
    if (constants_1.Constants.isTouchPoint1) {
        if (hand.x < constants_1.Constants.point5Pos.x) {
            constants_1.Constants.oldPoint = constants_1.Constants.pointA_Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point1Pos;
        }
    }
};
var checkTouchCondition8 = function (hand, graphic) {
    if (constants_1.Constants.isTouchPoint1 && constants_1.Constants.isTouchPoint6) {
        if (hand.x < constants_1.Constants.point6Pos.x && constants_1.Constants.isTouchPoint7) {
            graphic.clear();
            constants_1.Constants.isTouchPoint7 = false;
            constants_1.Constants.isDrawPoint7 = false;
            constants_1.Constants.oldPoint = constants_1.Constants.point1Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point5Pos;
            return;
        }
        if (hand.x > constants_1.Constants.point6Pos.x) {
            constants_1.Constants.isTouchPoint7 = true;
            constants_1.Constants.oldPoint = constants_1.Constants.point5Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point6Pos;
        }
    }
};
var checkTouchCondition9 = function (boudingbox, hand) {
    if (constants_1.Constants.isTouchPoint1 && boudingbox.intersects(hand.getBoundingBox())) {
        constants_1.Constants.isTouchFence = true;
    }
    else {
        constants_1.Constants.isTouchFence = false;
    }
};
var checkTouchPoint = function (fence, hand, fenceLeft) {
    var f_BoudingBox = fence.getBoundingBox();
    var fl_BoudingBox = fenceLeft.getBoundingBox();
    var h_BoudingBox = hand.getBoundingBox();
    var checkPosX = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    var checkPosY = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
    // // touch point 6
    if (constants_1.Constants.isTouchPoint6 && f_BoudingBox.intersects(h_BoudingBox)) {
        if (checkPosY < constants_1.Constants.point7Pos.y) {
            return;
        }
        constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    // touch fence
    if (f_BoudingBox.intersects(h_BoudingBox)) {
        if (constants_1.Constants.fencePoint.y > checkPosY) {
            return;
        }
        if (constants_1.Constants.fencePoint.y < checkPosY && constants_1.Constants.point2Pos.x > checkPosX) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    // touch point 3 && 4
    if (h_BoudingBox.intersects(constants_1.Constants.point3Bdb) || h_BoudingBox.intersects(constants_1.Constants.point4Bdb)) {
        if (checkPosY < constants_1.Constants.point3Pos.y && checkPosX < constants_1.Constants.point3Pos.x) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
        return;
    }
    // tooouch fence Left
    if (fl_BoudingBox.intersects(h_BoudingBox)) {
        if (checkPosX < fenceLeft.x) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
};
var Hand = {
    rotateDefault: rotateDefault,
    rotateWithPoint: rotateWithPoint,
};
var TouchArea = {
    checkTouchCondition1: checkTouchCondition1,
    checkTouchCondition6: checkTouchCondition6,
    checkTouchCondition7: checkTouchCondition7,
    checkTouchCondition8: checkTouchCondition8,
    checkTouchPoint: checkTouchPoint,
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.Hand = Hand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBa0I7SUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsT0FBTyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsU0FBa0I7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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QUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3RGLHFCQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDM0YsQ0FBQyxDQUFBO0FBR0QsSUFBTSxJQUFJLEdBQUc7SUFDVCxhQUFhLEVBQUUsYUFBYTtJQUM1QixlQUFlLEVBQUUsZUFBZTtDQUNuQyxDQUFBO0FBQ0QsSUFBTSxTQUFTLEdBQUc7SUFDZCxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzFDLG9CQUFvQixFQUFFLG9CQUFvQjtJQUMxQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsZUFBZSxFQUFFLGVBQWU7Q0FDbkMsQ0FBQTtBQUVEO0lBQUE7SUFLQSxDQUFDO0lBSFUsV0FBSSxHQUFnQixJQUFJLENBQUM7SUFDekIsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRW5ELGFBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHJvdGF0ZURlZmF1bHQgPSAoYmFzZVBvaW50OiBjYy5WZWMyKTogbnVtYmVyID0+IHtcclxuICAgIGxldCB0aGlzUG9zID0gbmV3IGNjLlZlYzIoYmFzZVBvaW50LngsIGJhc2VQb2ludC55KTtcclxuICAgIGxldCBkaXJlY3Rpb25WZWN0b3IgPSB0aGlzUG9zLnN1YihDb25zdGFudHMucG9pbnRBX1Bvcyk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHJldHVybiByb3RhdGlvbkRlZ3JlZXMgKyAyMDtcclxufVxyXG5cclxuY29uc3Qgcm90YXRlV2l0aFBvaW50ID0gKGJhc2VQb2ludDogY2MuVmVjMik6IG51bWJlciA9PiB7XHJcbiAgICBsZXQgdGhpc1BvcyA9IG5ldyBjYy5WZWMyKGJhc2VQb2ludC54LCBiYXNlUG9pbnQueSk7XHJcbiAgICBsZXQgZGlyZWN0aW9uVmVjdG9yID0gdGhpc1Bvcy5zdWIoQ29uc3RhbnRzLm5ld1BvaW50KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uUmFkaWFucyA9IE1hdGguYXRhbjIoZGlyZWN0aW9uVmVjdG9yLnksIGRpcmVjdGlvblZlY3Rvci54KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlcyA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyb3RhdGlvblJhZGlhbnMpO1xyXG4gICAgcmV0dXJuIHJvdGF0aW9uRGVncmVlcyArIDIwO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb24xID0gKGhhbmQ6IGNjLk5vZGUsIHBvaW50OiBjYy5Ob2RlLCBncmFwaGljOiBjYy5HcmFwaGljcywgcG9pbnRDb21wYXJlOiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoaGFuZC54ID4gcG9pbnRDb21wYXJlLnggJiYgaGFuZC55ID4gcG9pbnRDb21wYXJlLnkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmKGhhbmQueCA8IHBvaW50LnggJiYgICFDb25zdGFudHMuaXNUb3VjaFBvaW50Mikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQxID0gZmFsc2U7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxID0gZmFsc2U7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IENvbnN0YW50cy5wb2ludEFfUG9zO1xyXG4gICAgICAgICAgICBncmFwaGljLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFuZC54ID4gcG9pbnQueCAmJiBoYW5kLnkgPiBwb2ludC55ICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxID0gdHJ1ZTtcclxuICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBwb2ludC5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uNiA9IChoYW5kOiBjYy5Ob2RlLCBuZXdQb2ludDogY2MuTm9kZSwgb2xkUG9pbnQ6IGNjLk5vZGUsIGdyYXBoaWNzOiBjYy5HcmFwaGljcyk6IHZvaWQgPT4ge1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc1RvdWNoUG9pbnQyICAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDMgJiYgIUNvbnN0YW50cy5pc1RvdWNoUG9pbnQ0KSB7XHJcbiAgICAgICAgaWYgKGhhbmQueCA8IG5ld1BvaW50LnggICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdQb2ludDYgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDYgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChoYW5kLnggPiBuZXdQb2ludC54ICYmIGhhbmQueSA+IG5ld1BvaW50LnkgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDYgPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBvbGRQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBuZXdQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQyICAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50NCkge1xyXG4gICAgICAgIGlmIChoYW5kLnggPCBuZXdQb2ludC54KSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdQb2ludDYgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDYgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gQ29uc3RhbnRzLnBvaW50NFBvczsgXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IENvbnN0YW50cy5wb2ludDFQb3M7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYW5kLnggPiBuZXdQb2ludC54ICYmIGhhbmQueSA+IG5ld1BvaW50LnkgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDYgPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBvbGRQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBuZXdQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjcgPSAoaGFuZDogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgaWYoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICBpZihoYW5kLnggPCBDb25zdGFudHMucG9pbnQ1UG9zLngpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gQ29uc3RhbnRzLnBvaW50QV9Qb3M7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IENvbnN0YW50cy5wb2ludDFQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uOCA9IChoYW5kOiBjYy5Ob2RlLCBncmFwaGljOiBjYy5HcmFwaGljcyk6IHZvaWQgPT4ge1xyXG4gICAgaWYoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDYpIHtcclxuICAgICAgICBpZihoYW5kLnggPCBDb25zdGFudHMucG9pbnQ2UG9zLnggJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDcpIHtcclxuICAgICAgICAgICAgZ3JhcGhpYy5jbGVhcigpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IENvbnN0YW50cy5wb2ludDFQb3M7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IENvbnN0YW50cy5wb2ludDVQb3M7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGhhbmQueCA+IENvbnN0YW50cy5wb2ludDZQb3MueCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NyA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IENvbnN0YW50cy5wb2ludDVQb3M7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IENvbnN0YW50cy5wb2ludDZQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uOSA9IChib3VkaW5nYm94OiBjYy5SZWN0LCBoYW5kOiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBib3VkaW5nYm94LmludGVyc2VjdHMoaGFuZC5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pc1RvdWNoRmVuY2UgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaEZlbmNlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBjaGVja1RvdWNoUG9pbnQgPSAoZmVuY2U6IGNjLk5vZGUsIGhhbmQ6IGNjLk5vZGUsIGZlbmNlTGVmdDogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgbGV0IGZfQm91ZGluZ0JveCA9IGZlbmNlLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgZmxfQm91ZGluZ0JveCA9IGZlbmNlTGVmdC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IGhfQm91ZGluZ0JveCA9IGhhbmQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBjaGVja1Bvc1ggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIGxldCBjaGVja1Bvc1kgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcblxyXG5cclxuICAgIC8vIC8vIHRvdWNoIHBvaW50IDZcclxuICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ICYmIGZfQm91ZGluZ0JveC5pbnRlcnNlY3RzKGhfQm91ZGluZ0JveCkpIHtcclxuICAgICAgICBpZihjaGVja1Bvc1kgPCBDb25zdGFudHMucG9pbnQ3UG9zLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRvdWNoIGZlbmNlXHJcbiAgICBpZihmX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhoX0JvdWRpbmdCb3gpKSB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmZlbmNlUG9pbnQueSA+IGNoZWNrUG9zWSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmZlbmNlUG9pbnQueSA8IGNoZWNrUG9zWSAmJiBDb25zdGFudHMucG9pbnQyUG9zLnggPiBjaGVja1Bvc1gpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdG91Y2ggcG9pbnQgMyAmJiA0XHJcbiAgICBpZihoX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhDb25zdGFudHMucG9pbnQzQmRiKSB8fCBoX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhDb25zdGFudHMucG9pbnQ0QmRiKSkge1xyXG4gICAgICAgIGlmKGNoZWNrUG9zWSA8IENvbnN0YW50cy5wb2ludDNQb3MueSAmJiBjaGVja1Bvc1ggPCBDb25zdGFudHMucG9pbnQzUG9zLngpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdG9vb3VjaCBmZW5jZSBMZWZ0XHJcbiAgICBpZihmbF9Cb3VkaW5nQm94LmludGVyc2VjdHMoaF9Cb3VkaW5nQm94KSkge1xyXG4gICAgICAgIGlmKGNoZWNrUG9zWCA8ICBmZW5jZUxlZnQueCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBIYW5kID0ge1xyXG4gICAgcm90YXRlRGVmYXVsdDogcm90YXRlRGVmYXVsdCxcclxuICAgIHJvdGF0ZVdpdGhQb2ludDogcm90YXRlV2l0aFBvaW50LFxyXG59XHJcbmNvbnN0IFRvdWNoQXJlYSA9IHtcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb24xOiBjaGVja1RvdWNoQ29uZGl0aW9uMSxcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb242OiBjaGVja1RvdWNoQ29uZGl0aW9uNixcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb243OiBjaGVja1RvdWNoQ29uZGl0aW9uNyxcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb244OiBjaGVja1RvdWNoQ29uZGl0aW9uOCxcclxuICAgIGNoZWNrVG91Y2hQb2ludDogY2hlY2tUb3VjaFBvaW50LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgSGFuZDogdHlwZW9mIEhhbmQgPSBIYW5kO1xyXG4gICAgc3RhdGljIFRvdWNoQXJlYTogdHlwZW9mIFRvdWNoQXJlYSA9IFRvdWNoQXJlYTtcclxuXHJcbn0iXX0=