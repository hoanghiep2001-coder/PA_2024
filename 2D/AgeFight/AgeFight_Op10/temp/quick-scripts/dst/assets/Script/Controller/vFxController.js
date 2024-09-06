
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/vFxController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea71f2bo9lAG7VjMLcpHTjW', 'vFxController');
// Script/Controller/vFxController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VFxController = /** @class */ (function (_super) {
    __extends(VFxController, _super);
    function VFxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vFx_Booom = null;
        _this.sp_SpeedLine = null;
        _this.enemyBase = null;
        _this.enemyBaseHealth = null;
        return _this;
    }
    VFxController.prototype.start = function () {
        // this.handleShooting();
        // this.ShowSpeedLine();
    };
    VFxController.prototype.handleShooting = function () {
        var _this = this;
        cc.log("boommmmm!!!!");
        constants_1.Constants.isPauseGame = true;
        this.enemyBase.getChildByName("nha lose").active = true;
        this.enemyBase.getChildByName("baseLv2").active = false;
        this.enemyBaseHealth.active = false;
        this.vFx_Booom.active = true;
        cc.tween(this.sp_SpeedLine.node)
            .to(0.5, { opacity: 0 })
            .start();
        this.scheduleOnce(function () {
            _this.vFx_Booom.active = false;
            constants_1.Constants.isWin = true;
        }, 1.5);
    };
    VFxController.prototype.ShowSpeedLine = function () {
        cc.log("speedUp!!!!!");
        if (!constants_1.Constants.isRotate)
            return;
        this.sp_SpeedLine.node.active = true;
        cc.tween(this.sp_SpeedLine.node)
            .to(0.5, { opacity: 255 })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], VFxController.prototype, "vFx_Booom", void 0);
    __decorate([
        property(sp.Skeleton)
    ], VFxController.prototype, "sp_SpeedLine", void 0);
    __decorate([
        property(cc.Node)
    ], VFxController.prototype, "enemyBase", void 0);
    __decorate([
        property(cc.Node)
    ], VFxController.prototype, "enemyBaseHealth", void 0);
    VFxController = __decorate([
        ccclass
    ], VFxController);
    return VFxController;
}(cc.Component));
exports.default = VFxController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFx2RnhDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUE4QztBQUV4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXdEQztRQXJERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDOztJQTRDcEMsQ0FBQztJQTFDYSw2QkFBSyxHQUFmO1FBQ0kseUJBQXlCO1FBQ3pCLHdCQUF3QjtJQUM1QixDQUFDO0lBR00sc0NBQWMsR0FBckI7UUFBQSxpQkFzQkM7UUFyQk8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV2QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzthQUMvQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO2FBQ3JCLEtBQUssRUFBRSxDQUFDO1FBR1QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixxQkFBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsQ0FBQztJQUdNLHFDQUFhLEdBQXBCO1FBQ1EsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV2QixJQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDL0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUN2QixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBcEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt1REFDVztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ2M7SUFaZixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBd0RqQztJQUFELG9CQUFDO0NBeERELEFBd0RDLENBeEQwQyxFQUFFLENBQUMsU0FBUyxHQXdEdEQ7a0JBeERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZGeENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdkZ4X0Jvb29tOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBzcF9TcGVlZExpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZW15QmFzZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmVteUJhc2VIZWFsdGg6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZVNob290aW5nKCk7XHJcbiAgICAgICAgLy8gdGhpcy5TaG93U3BlZWRMaW5lKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVTaG9vdGluZygpOiB2b2lkIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiYm9vbW1tbW0hISEhXCIpO1xyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENoaWxkQnlOYW1lKFwibmhhIGxvc2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENoaWxkQnlOYW1lKFwiYmFzZUx2MlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCYXNlSGVhbHRoLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52RnhfQm9vb20uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BfU3BlZWRMaW5lLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAwfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52RnhfQm9vb20uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNXaW4gPSB0cnVlOyBcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2hvd1NwZWVkTGluZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgY2MubG9nKFwic3BlZWRVcCEhISEhXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYoIUNvbnN0YW50cy5pc1JvdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zcF9TcGVlZExpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zcF9TcGVlZExpbmUubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuNSwge29wYWNpdHk6IDI1NX0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==