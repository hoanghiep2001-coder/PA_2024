
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
require('./assets/Script/Controller/GraphicsController');
require('./assets/Script/Controller/HandController');
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
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4c073bv1FK85YFJROX1Ttb', 'GraphicsController');
// Script/Controller/GraphicsController.ts

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
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GraphicsController = /** @class */ (function (_super) {
    __extends(GraphicsController, _super);
    function GraphicsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.graphicsNodes = [];
        _this.graphics = null;
        _this.handController = null;
        return _this;
    }
    GraphicsController.prototype.start = function () {
        this.graphics = this.getComponent(cc.Graphics);
        this.handController = this.hand.getComponent(HandController_1.default);
    };
    GraphicsController.prototype.handleDrawLine = function (start, end) {
        if (constants_1.Constants.newPoint) {
            start = constants_1.Constants.newPoint;
        }
        this.graphics.clear();
        this.graphics.lineWidth = 7;
        this.graphics.moveTo(start.x, start.y);
        this.graphics.lineTo(end.x, end.y);
        this.graphics.stroke();
    };
    GraphicsController.prototype.handleDrawWithTouchPoint = function () {
        if (constants_1.Constants.isTouchPoint1 && !constants_1.Constants.isDrawPoint1) {
            this.handleDrawOldLine(1);
            return;
        }
        if (constants_1.Constants.isTouchPoint2 && !constants_1.Constants.isDrawPoint2) {
            this.handleDrawOldLine(2);
            return;
        }
        if (constants_1.Constants.isTouchPoint3 && !constants_1.Constants.isDrawPoint3) {
            this.handleDrawOldLine(3);
            return;
        }
        if (constants_1.Constants.isTouchPoint4 && !constants_1.Constants.isDrawPoint4) {
            this.handleDrawOldLine(4);
            return;
        }
        if (constants_1.Constants.isTouchPoint5 && !constants_1.Constants.isDrawPoint5) {
            this.handleDrawOldLine(5);
            return;
        }
        if (constants_1.Constants.isTouchPoint6 && !constants_1.Constants.isDrawPoint6) {
            this.handleDrawOldLine(6);
            return;
        }
        if (constants_1.Constants.isTouchPoint7 && !constants_1.Constants.isDrawPoint7) {
            this.handleDrawOldLine(7);
            return;
        }
    };
    GraphicsController.prototype.handleDrawOldLine = function (step) {
        this.graphicsNodes[step - 1].clear();
        this.graphicsNodes[step - 1].lineWidth = 6;
        if (constants_1.Constants.isLoseGame) {
            this.graphicsNodes[step - 1].fillColor = cc.Color.RED;
            this.graphicsNodes[step - 1].strokeColor = cc.Color.RED;
        }
        switch (step) {
            case 1:
                if (constants_1.Constants.newPoint) {
                    constants_1.Constants.isDrawPoint1 = true;
                    this.graphicsNodes[step - 1].moveTo(constants_1.Constants.pointA_Pos.x, constants_1.Constants.pointA_Pos.y);
                    // this.graphicsNodes[step - 1].lineTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    var controlPointX = constants_1.Constants.point1Pos.x - 15;
                    var controlPointY = constants_1.Constants.point1Pos.y - 15;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX, controlPointY, constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
                }
                break;
            case 2:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint2 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    this.graphicsNodes[step - 1].quadraticCurveTo((this.handController.Apple_1_Points[1].x + this.handController.Apple_1_Points[0].x) / 2, (this.handController.Apple_1_Points[1].y + this.handController.Apple_1_Points[0].y) / 2 + 3, this.handController.Apple_1_Points[1].x, this.handController.Apple_1_Points[1].y);
                }
                break;
            case 3:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint3 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[1].x, this.handController.Apple_1_Points[1].y);
                    var controlPointX = (this.handController.Apple_1_Points[2].x + this.handController.Apple_1_Points[1].x) / 2;
                    var controlPointY = (this.handController.Apple_1_Points[2].y + this.handController.Apple_1_Points[1].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX + 6, controlPointY, this.handController.Apple_1_Points[2].x, this.handController.Apple_1_Points[2].y);
                }
                break;
            case 4:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint4 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[2].x, this.handController.Apple_1_Points[2].y);
                    var controlPointX = (this.handController.Apple_1_Points[2].x + this.handController.Apple_1_Points[3].x) / 2;
                    var controlPointY = (this.handController.Apple_1_Points[2].y + this.handController.Apple_1_Points[3].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX, controlPointY - 6, this.handController.Apple_1_Points[3].x, this.handController.Apple_1_Points[3].y);
                }
                break;
            case 5:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint5 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[3].x, this.handController.Apple_1_Points[3].y);
                    var controlPointX = (this.handController.Apple_1_Points[0].x + this.handController.Apple_1_Points[3].x) / 2;
                    var controlPointY = (this.handController.Apple_1_Points[0].y + this.handController.Apple_1_Points[3].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX - 6, controlPointY, this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                }
                break;
            case 6:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint6 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    this.graphicsNodes[step - 1].lineTo(this.handController.Apple_1_Points[4].x, this.handController.Apple_1_Points[4].y);
                }
                break;
            case 7:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint7 = true;
                    this.graphicsNodes[step - 1].moveTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
                    var controlPointX = (constants_1.Constants.point6Pos.x + constants_1.Constants.point5Pos.x) / 2;
                    var controlPointY = (constants_1.Constants.point6Pos.y + constants_1.Constants.point5Pos.y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX, controlPointY + 6, constants_1.Constants.point6Pos.x, constants_1.Constants.point6Pos.y);
                }
                break;
            default:
                break;
        }
        this.graphicsNodes[step - 1].stroke();
    };
    GraphicsController.prototype.update = function (dt) {
        this.handleDrawWithTouchPoint();
        this.hand.active && this.handleDrawLine(constants_1.Constants.pointA_Pos, this.hand.getPosition());
    };
    __decorate([
        property(cc.Node)
    ], GraphicsController.prototype, "hand", void 0);
    __decorate([
        property([cc.Graphics])
    ], GraphicsController.prototype, "graphicsNodes", void 0);
    GraphicsController = __decorate([
        ccclass
    ], GraphicsController);
    return GraphicsController;
}(cc.Component));
exports.default = GraphicsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTRMQztRQXpMRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBb0wxQyxDQUFDO0lBakxhLGtDQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHTywyQ0FBYyxHQUF0QixVQUF1QixLQUFjLEVBQUUsR0FBWTtRQUMvQyxJQUFJLHFCQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLEtBQUssR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxD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SUFDM0YsQ0FBQztJQXhMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZEQUNVO0lBTGpCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNEx0QztJQUFELHlCQUFDO0NBNUxELEFBNExDLENBNUwrQyxFQUFFLENBQUMsU0FBUyxHQTRMM0Q7a0JBNUxvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEhhbmRDb250cm9sbGVyIGZyb20gXCIuL0hhbmRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5HcmFwaGljc10pXHJcbiAgICBncmFwaGljc05vZGVzOiBjYy5HcmFwaGljc1tdID0gW107XHJcbiAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG5cclxuICAgIGhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuaGFuZENvbnRyb2xsZXIgPSB0aGlzLmhhbmQuZ2V0Q29tcG9uZW50KEhhbmRDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEcmF3TGluZShzdGFydDogY2MuVmVjMiwgZW5kOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5uZXdQb2ludCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IENvbnN0YW50cy5uZXdQb2ludDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDc7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oZW5kLngsIGVuZC55KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRHJhd1dpdGhUb3VjaFBvaW50KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgIUNvbnN0YW50cy5pc0RyYXdQb2ludDEpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVEcmF3T2xkTGluZSgxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQyICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoMik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiAhQ29uc3RhbnRzLmlzRHJhd1BvaW50Mykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZURyYXdPbGRMaW5lKDMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQgJiYgIUNvbnN0YW50cy5pc0RyYXdQb2ludDQpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVEcmF3T2xkTGluZSg0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ1ICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQ1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoNSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQ2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoNik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3ICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQ3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoNyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVEcmF3T2xkTGluZShzdGVwOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5saW5lV2lkdGggPSA2O1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNMb3NlR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMubmV3UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQxID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyhDb25zdGFudHMucG9pbnRBX1Bvcy54LCBDb25zdGFudHMucG9pbnRBX1Bvcy55KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLmxpbmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udHJvbFBvaW50WCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDFQb3MueCAtIDE1O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250cm9sUG9pbnRZID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLnBvaW50MVBvcy55IC0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMucG9pbnQxUG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDFQb3MueVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaWYgKENvbnN0YW50cy5vbGRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdQb2ludDIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NOb2Rlc1tzdGVwIC0gMV0ubW92ZVRvKHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueCwgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS55KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLnF1YWRyYXRpY0N1cnZlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdLnggKyB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLngpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMV0ueSArIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueSkgLyAyICsgMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS54ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXS54KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS55ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXS55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYICsgNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzJdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzJdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMl0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS54ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS54KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS55ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRZIC0gNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzNdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzNdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbM10ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS54ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS54KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS55ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYIC0gNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5saW5lVG8odGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1s0XS54LCB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzRdLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbnN0YW50cy5vbGRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5tb3ZlVG8oQ29uc3RhbnRzLnBvaW50NVBvcy54LCBDb25zdGFudHMucG9pbnQ1UG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKENvbnN0YW50cy5wb2ludDZQb3MueCArIENvbnN0YW50cy5wb2ludDVQb3MueCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udHJvbFBvaW50WSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQ29uc3RhbnRzLnBvaW50NlBvcy55ICsgQ29uc3RhbnRzLnBvaW50NVBvcy55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NOb2Rlc1tzdGVwIC0gMV0ucXVhZHJhdGljQ3VydmVUbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xQb2ludFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRZICsgNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDZQb3MueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDZQb3MueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEcmF3V2l0aFRvdWNoUG9pbnQoKTtcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlICYmIHRoaXMuaGFuZGxlRHJhd0xpbmUoQ29uc3RhbnRzLnBvaW50QV9Qb3MsIHRoaXMuaGFuZC5nZXRQb3NpdGlvbigpKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["stunSound"] = "stunSound";
    SoundTrack["naniSound"] = "naniSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.pointA_Pos = new cc.Vec2(0, 0);
    Constants.newPoint = null;
    Constants.oldPoint = null;
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.beforePosition = new cc.Vec2(0, 0);
    Constants.currentLocalPosition = new cc.Vec2(0, 0);
    Constants.isCanMove = true;
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanDraw = true;
    Constants.isLoseGame = false;
    Constants.isTouchFence = false;
    Constants.isTouchPoint1 = false;
    Constants.isTouchPoint2 = false;
    Constants.isTouchPoint3 = false;
    Constants.isTouchPoint4 = false;
    Constants.isTouchPoint5 = false;
    Constants.isTouchPoint6 = false;
    Constants.isTouchPoint7 = false;
    Constants.isDrawPoint1 = false;
    Constants.isDrawPoint2 = false;
    Constants.isDrawPoint3 = false;
    Constants.isDrawPoint4 = false;
    Constants.isDrawPoint5 = false;
    Constants.isDrawPoint6 = false;
    Constants.isDrawPoint7 = false;
    Constants.point1Pos = null;
    Constants.point2Pos = null;
    Constants.point3Pos = null;
    Constants.point4Pos = null;
    Constants.point5Pos = null;
    Constants.point6Pos = null;
    Constants.point7Pos = null;
    Constants.fencePoint = null;
    Constants.point1Bdb = null;
    Constants.point2Bdb = null;
    Constants.point3Bdb = null;
    Constants.point4Bdb = null;
    Constants.step = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBQTtJQW1FQSxDQUFDO0lBakVHLFlBQVk7SUFDTCxvQkFBVSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsa0JBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIsa0JBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIseUJBQWUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLHdCQUFjLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyw4QkFBb0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBR2pELG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRzlCLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBRS9CLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRTlCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBRTNCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBRTFCLGNBQUksR0FBVyxDQUFDLENBQUM7SUFHeEIsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBbkVELEFBbUVDLElBQUE7QUFuRVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWQ6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIGRyYXdTb3VuZCA9IFwiZHJhd1NvdW5kXCIsXHJcbiAgICBzdHVuU291bmQgPSBcInN0dW5Tb3VuZFwiLFxyXG4gICAgbmFuaVNvdW5kID0gXCJuYW5pU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgcG9pbnRBX1BvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcbiAgICBzdGF0aWMgbmV3UG9pbnQ6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIG9sZFBvaW50OiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBjdXJyZW50UG9zaXRpb246IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLDApO1xyXG4gICAgc3RhdGljIGJlZm9yZVBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwwKTtcclxuICAgIHN0YXRpYyBjdXJyZW50TG9jYWxQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcblxyXG5cclxuICAgIHN0YXRpYyBpc0Nhbk1vdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuRHJhdzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgaXNMb3NlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hGZW5jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50MTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hQb2ludDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoUG9pbnQzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50NDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hQb2ludDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoUG9pbnQ2OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50NzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgcG9pbnQxUG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDJQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50M1BvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDVQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50NlBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ3UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBmZW5jZVBvaW50OiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgcG9pbnQxQmRiOiBjYy5SZWN0ID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDJCZGI6IGNjLlJlY3QgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50M0JkYjogY2MuUmVjdCA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ0QmRiOiBjYy5SZWN0ID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc3RlcDogbnVtYmVyID0gMTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==
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
var HandController_1 = require("../Controller/HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.HandController = null;
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
        // this.GamePlay.cage.x = 150;
        // this.GamePlay.background.scale = 0.55;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        // this.GamePlay.cage.x = 150;
        // this.GamePlay.background.scale = 0.55;
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
        // this.GamePlay.cage.x = 120;
        // this.GamePlay.background.scale = 0.65;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            // this.GamePlay.cage.x = 120;
            // this.GamePlay.background.scale = 0.55;
        }
        else {
            // this.GamePlay.cage.x = 120;
            // this.GamePlay.background.scale = 0.55;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    __decorate([
        property(HandController_1.default)
    ], Responsive.prototype, "HandController", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUdwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlIQztRQTlHRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFrR2hELENBQUM7SUFoR2EsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRTtZQUNyRSxxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVPLHdDQUFtQixHQUEzQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyw4QkFBOEI7UUFDOUIseUNBQXlDO0lBQzdDLENBQUM7SUFFTywyQ0FBc0IsR0FBOUI7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRXJDLDhCQUE4QjtRQUM5Qix5Q0FBeUM7SUFFN0MsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFaEMsOEJBQThCO1FBQzlCLHlDQUF5QztJQUM3QyxDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFbkMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDcEUsb0pBQW9KO1lBQ3BKLDhCQUE4QjtZQUU5QixjQUFjO1lBQ2QsSUFBSTtZQUVKLG9DQUFvQztZQUNwQyw4QkFBOEI7WUFDOUIseUNBQXlDO1NBQzVDO2FBQU07WUFDSCw4QkFBOEI7WUFDOUIseUNBQXlDO1NBQzVDO0lBQ0wsQ0FBQztJQUdTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUE3R0Q7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQztnREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBTHJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpSDlCO0lBQUQsaUJBQUM7Q0FqSEQsQUFpSEMsQ0FqSHVDLEVBQUUsQ0FBQyxTQUFTLEdBaUhuRDtrQkFqSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZVBsYXlcIjtcclxuaW1wb3J0IEhhbmRDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0hhbmRDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoSGFuZENvbnRyb2xsZXIpXHJcbiAgICBIYW5kQ29udHJvbGxlcjogSGFuZENvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTUwO1xyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuYmFja2dyb3VuZC5zY2FsZSA9IDAuNTU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTUwO1xyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuYmFja2dyb3VuZC5zY2FsZSA9IDAuNTU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmNhZ2UueCA9IDEyMDtcclxuICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjY1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICAvLyBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ID49IDAuNiAmJiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjYyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBtb2JpbGUgbW9kZSBhcHBsb3ZpblxyXG5cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTIwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTIwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
var GraphicsController_1 = require("./GraphicsController");
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.HandController = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // node
        _this.HideMask = null;
        _this.Line = null;
        _this.Tutorial = null;
        _this.fence = null;
        _this.fenceLeft = null;
        return _this;
    }
    // state
    TouchAreaController.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    TouchAreaController.prototype.onLoad = function () {
        constants_1.Constants.fencePoint = this.fence.getPosition();
        this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        // ironsource
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.touchStart = function (event) {
        // if (Constants.ironSource.isEndGame) {
        //   this.GameController.installHandle();
        // }
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        this.Line.active = false;
        constants_1.Constants.isTouch = true;
        this.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        constants_1.Constants.currentPosition = event.getLocation();
        // this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (event) {
        if (constants_1.Constants.isLoseGame || !constants_1.Constants.isCanMove) {
            return;
        }
        constants_1.Constants.currentPosition = event.getLocation();
        this.HandController.move();
    };
    TouchAreaController.prototype.touchEnd = function (event) {
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        constants_1.Constants.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.HandController.stop();
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
        property(HandController_1.default)
    ], TouchAreaController.prototype, "HandController", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], TouchAreaController.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Line", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Tutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fence", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fenceLeft", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBaUhDO1FBL0dDLFlBQVk7UUFFWixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0Qyx3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRzlDLE9BQU87UUFFUCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBMEY1QixDQUFDO0lBeEZDLFFBQVE7SUFHRSxtQ0FBSyxHQUFmO1FBQ0UsNkRBQTZEO0lBQy9ELENBQUM7SUFHUyxvQ0FBTSxHQUFoQjtRQUNFLHFCQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNB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TyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBNUdEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLDRCQUFrQixDQUFDO21FQUNpQjtJQUs5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1E7SUF2QmYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0FpSC9CO0lBQUQsMEJBQUM7Q0FqSEQsQUFpSEMsQ0FqSHdDLEVBQUUsQ0FBQyxTQUFTLEdBaUhwRDtBQWpIWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbHRpbHMgfSBmcm9tIFwiLi4vRGF0YS9VbHRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR3JhcGhpY3NDb250cm9sbGVyIGZyb20gXCIuL0dyYXBoaWNzQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgSGFuZENvbnRyb2xsZXIgZnJvbSBcIi4vSGFuZENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShIYW5kQ29udHJvbGxlcilcclxuICBIYW5kQ29udHJvbGxlcjogSGFuZENvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHcmFwaGljc0NvbnRyb2xsZXIpXHJcbiAgR3JhcGhpY3NDb250cm9sbGVyOiBHcmFwaGljc0NvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gbm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBMaW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBUdXRvcmlhbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZmVuY2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGZlbmNlTGVmdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgIENvbnN0YW50cy5mZW5jZVBvaW50ID0gdGhpcy5mZW5jZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kLCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcblxyXG4gICAgLy8gaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgLy8gICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuTGluZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgIHRoaXMuVHV0b3JpYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgIC8vIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hNb3ZlKGV2ZW50OiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pc0xvc2VHYW1lIHx8ICFDb25zdGFudHMuaXNDYW5Nb3ZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIubW92ZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIuc3RvcCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
        _this.drawSound = null;
        _this.stunSound = null;
        _this.naniSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "stunSound":
                    this.stunSound.play();
                    break;
                case "naniSound":
                    this.naniSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "stunSound":
                this.stunSound.stop();
                break;
            case "naniSound":
                this.naniSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.drawSound.stop();
        this.stunSound.stop();
        this.naniSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "stunSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "naniSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEwREM7UUF4REcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBbUIsSUFBSSxDQUFDOztJQWdEckMsQ0FBQztJQTlDVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1E7SUFWaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTBEaEM7SUFBRCxtQkFBQztDQTFERCxBQTBEQyxDQTFEeUMsRUFBRSxDQUFDLFNBQVMsR0EwRHJEO2tCQTFEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkcmF3U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHN0dW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbmFuaVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0dW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1blNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYW5pU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbmlTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0dW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW5pU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubmFuaVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdHVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubmFuaVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
                mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1589022394?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDaEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDaEYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50dmMudGhpZWZwdXp6bGVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkMTU4OTAyMjM5ND9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50dmMudGhpZWZwdXp6bGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
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
//------QC-SOURCE-SPLIT------
