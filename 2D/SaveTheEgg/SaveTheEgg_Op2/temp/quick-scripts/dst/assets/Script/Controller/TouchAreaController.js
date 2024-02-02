
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        this.NodesController.Graphics.moveTo(constants_1.Constants.currentPosition.x - cc.winSize.width / 2, constants_1.Constants.currentPosition.y - cc.winSize.height / 2 - constants_1.Constants.Responsive.calculated);
        this.NodesController.Graphics.lineTo(e.getLocation().x - cc.winSize.width / 2, e.getLocation().y - cc.winSize.height / 2 - constants_1.Constants.Responsive.calculated);
        constants_1.Constants.currentPosition = e.getLocation();
        this.NodesController.Graphics.stroke();
    };
    TouchAreaController.prototype.handleBgTouchEnd = function () {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        // this.NodesController.Graphics.clear();
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQscURBQWdEO0FBRTFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBMkRDO1FBeERHLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUV4QyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBc0R0QyxDQUFDO0lBbkRhLG1DQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBSU8sZ0RBQWtCLEdBQTFCLFVBQTJCLENBQVc7UUFDbEMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUdELHFCQUFTLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXhDLG9DQUFvQztJQUN4QyxDQUFDO0lBR08sK0NBQWlCLEdBQXpCLFVBQTBCLENBQVc7UUFDakMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDaEMscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDbEQscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQ3hGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2hDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUN4QyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQzlFLENBQUM7UUFFRixxQkFBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdPLDhDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFFRCx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO2dFQUNjO0lBRXhDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFMakIsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0EyRHZDO0lBQUQsMEJBQUM7Q0EzREQsQUEyREMsQ0EzRGdELEVBQUUsQ0FBQyxTQUFTLEdBMkQ1RDtrQkEzRG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZXNDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRyb2xsZXIpXHJcbiAgICBOb2Rlc0NvbnRyb2xsZXI6IE5vZGVzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGFuZGxlQmdUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLmhhbmRsZUJnVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuaGFuZGxlQmdUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmhhbmRsZUJnVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlQmdUb3VjaFN0YXJ0KGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5kcmF3U291bmQubG9vcCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJnVG91Y2hNb3ZlKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5HcmFwaGljcy5tb3ZlVG8oXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5HcmFwaGljcy5saW5lVG8oXHJcbiAgICAgICAgICAgIGUuZ2V0TG9jYXRpb24oKS54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGUuZ2V0TG9jYXRpb24oKS55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24gPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuR3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQmdUb3VjaEVuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIUNvbnN0YW50cy5pc0NhblRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuTm9kZXNDb250cm9sbGVyLkdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==