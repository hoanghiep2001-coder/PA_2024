
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeContanier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69c3bsb3chPmrdB+4j36B25', 'NodeContanier');
// Script/Controller/NodeContanier.ts

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
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        _this.Scratchable = null;
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.intro = null;
        _this.MainGame = null;
        // Tools
        _this.dryer = null;
        _this.toothPaste = null;
        _this.waterTooth = null;
        _this.bubblePoints = [];
        _this.spine_Bubbles = [];
        _this.spine_WaterBubbles = [];
        _this.Water_bubblePoints = [];
        return _this;
    }
    NodeContainer.prototype.onLoad = function () {
        constants_1.Constants.toothPaste_Points = this.bubblePoints;
        constants_1.Constants.Water_Points = this.Water_bubblePoints;
        constants_1.Constants.spine_Bubbles = this.spine_Bubbles;
        constants_1.Constants.spine_WaterBubbles = this.spine_WaterBubbles;
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "intro", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "MainGame", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "dryer", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "toothPaste", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "waterTooth", void 0);
    __decorate([
        property([cc.Node])
    ], NodeContainer.prototype, "bubblePoints", void 0);
    __decorate([
        property([sp.Skeleton])
    ], NodeContainer.prototype, "spine_Bubbles", void 0);
    __decorate([
        property([sp.Skeleton])
    ], NodeContainer.prototype, "spine_WaterBubbles", void 0);
    __decorate([
        property([cc.Node])
    ], NodeContainer.prototype, "Water_bubblePoints", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWtEQztRQS9DRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsS0FBSztRQUVMLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixLQUFLO1FBRUwsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFFBQVE7UUFFUixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBSTNCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRTdCLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyx3QkFBa0IsR0FBa0IsRUFBRSxDQUFDO1FBRXZDLHdCQUFrQixHQUFjLEVBQUUsQ0FBQzs7SUFVdkMsQ0FBQztJQVBhLDhCQUFNLEdBQWhCO1FBQ0kscUJBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hELHFCQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqRCxxQkFBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdDLHFCQUFTLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBRTNELENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFLNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBS3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUt6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUkzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt1REFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3REFDVTtJQUVsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2REFDZTtJQUV2QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2REFDZTtJQXhDbEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWtEakM7SUFBRCxvQkFBQztDQWxERCxBQWtEQyxDQWxEMEMsRUFBRSxDQUFDLFNBQVMsR0FrRHREO2tCQWxEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjcmF0Y2hhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQmdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGludHJvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTWFpbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBUb29sc1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkcnllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvb3RoUGFzdGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXRlclRvb3RoOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGJ1YmJsZVBvaW50czogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW3NwLlNrZWxldG9uXSlcclxuICAgIHNwaW5lX0J1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25dKVxyXG4gICAgc3BpbmVfV2F0ZXJCdWJibGVzOiBzcC5Ta2VsZXRvbltdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgV2F0ZXJfYnViYmxlUG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHMgPSB0aGlzLmJ1YmJsZVBvaW50cztcclxuICAgICAgICBDb25zdGFudHMuV2F0ZXJfUG9pbnRzID0gdGhpcy5XYXRlcl9idWJibGVQb2ludHM7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNwaW5lX0J1YmJsZXMgPSB0aGlzLnNwaW5lX0J1YmJsZXM7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNwaW5lX1dhdGVyQnViYmxlcyA9IHRoaXMuc3BpbmVfV2F0ZXJCdWJibGVzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==