"use strict";
cc._RF.push(module, 'bd701N6NVNEvrKURY+sGJNw', 'TouchAreaController');
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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var NodesController_1 = require("./NodesController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.points = [];
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleBgTouchStart, this);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_MOVE, this.handleBgTouchMove, this);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_END, this.handleBgTouchEnd, this);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.handleBgTouchEnd, this);
    };
    TouchAreaController.prototype.handleBgTouchStart = function (e) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        constants_1.Constants.currentPosition = e.getLocation();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        this.AudioManager.drawSound.loop = true;
        // this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.handleBgTouchMove = function (e) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        this.points.push(this.node.convertToNodeSpaceAR(e.getLocation()));
        this.handleDrawLine();
        // this.NodesController.Graphics.moveTo(
        //     Constants.currentPosition.x - cc.winSize.width / 2,
        //     Constants.currentPosition.y - cc.winSize.height / 2 - Constants.Responsive.calculated
        // );
        // this.NodesController.Graphics.lineTo(
        //     e.getLocation().x - cc.winSize.width / 2,
        //     e.getLocation().y - cc.winSize.height / 2 - Constants.Responsive.calculated
        // );
        constants_1.Constants.currentPosition = e.getLocation();
        this.NodesController.Graphics.stroke();
    };
    TouchAreaController.prototype.handleBgTouchEnd = function () {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        console.log(this.NodesController.Graphics.lineCap);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
    };
    TouchAreaController.prototype.handleDrawLine = function () {
        // let newPoint = cc.instantiate(this.NodesController.LinePrefab);
        // newPoint.setPosition(this.points)
        // this.NodesController.LineContainer
    };
    __decorate([
        property(NodesController_1.default)
    ], TouchAreaController.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.default = TouchAreaController;

cc._RF.pop();