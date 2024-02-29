"use strict";
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