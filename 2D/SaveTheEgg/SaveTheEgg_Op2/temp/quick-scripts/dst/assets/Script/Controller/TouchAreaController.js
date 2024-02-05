
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQscURBQWdEO0FBRTFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBc0VDO1FBbkVHLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUV4QyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFjLEVBQUUsQ0FBQzs7SUE4RDNCLENBQUM7SUEzRGEsbUNBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFHTyxnREFBa0IsR0FBMUIsVUFBMkIsQ0FBVztRQUNsQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBRUQscUJBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFeEMsb0NBQW9DO0lBQ3hDLENBQUM7SUFHTywrQ0FBaUIsR0FBekIsVUFBMEIsQ0FBVztRQUNqQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0Qix3Q0FBd0M7UUFDeEMsMERBQTBEO1FBQzFELDRGQUE0RjtRQUM1RixLQUFLO1FBQ0wsd0NBQXdDO1FBQ3hDLGdEQUFnRDtRQUNoRCxrRkFBa0Y7UUFDbEYsS0FBSztRQUVMLHFCQUFTLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR08sOENBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUdPLDRDQUFjLEdBQXRCO1FBQ0ksa0VBQWtFO1FBRWxFLG9DQUFvQztRQUNwQyxxQ0FBcUM7SUFDekMsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO2dFQUNjO0lBRXhDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFMakIsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0FzRXZDO0lBQUQsMEJBQUM7Q0F0RUQsQUFzRUMsQ0F0RWdELEVBQUUsQ0FBQyxTQUFTLEdBc0U1RDtrQkF0RW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZXNDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRyb2xsZXIpXHJcbiAgICBOb2Rlc0NvbnRyb2xsZXI6IE5vZGVzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGFuZGxlQmdUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLmhhbmRsZUJnVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuaGFuZGxlQmdUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmhhbmRsZUJnVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJnVG91Y2hTdGFydChlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5kcmF3U291bmQubG9vcCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJnVG91Y2hNb3ZlKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaCh0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEcmF3TGluZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuTm9kZXNDb250cm9sbGVyLkdyYXBoaWNzLm1vdmVUbyhcclxuICAgICAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgLy8gICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMiAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIC8vIHRoaXMuTm9kZXNDb250cm9sbGVyLkdyYXBoaWNzLmxpbmVUbyhcclxuICAgICAgICAvLyAgICAgZS5nZXRMb2NhdGlvbigpLnggLSBjYy53aW5TaXplLndpZHRoIC8gMixcclxuICAgICAgICAvLyAgICAgZS5nZXRMb2NhdGlvbigpLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICBcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJnVG91Y2hFbmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLk5vZGVzQ29udHJvbGxlci5HcmFwaGljcy5saW5lQ2FwKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEcmF3TGluZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgbmV3UG9pbnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLk5vZGVzQ29udHJvbGxlci5MaW5lUHJlZmFiKTtcclxuXHJcbiAgICAgICAgLy8gbmV3UG9pbnQuc2V0UG9zaXRpb24odGhpcy5wb2ludHMpXHJcbiAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuTGluZUNvbnRhaW5lclxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=