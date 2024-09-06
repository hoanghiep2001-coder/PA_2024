
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '583f8lznOlEMIzaakSFrhxZ', 'NodeController');
// Script/Controller/NodeController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodeController = /** @class */ (function (_super) {
    __extends(NodeController, _super);
    function NodeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ScratchAbles
        _this.Scene1_ScratchAble = [];
        _this.Scene2_ScratchAble = [];
        _this.Scene3_ScratchAble = [];
        // UI
        _this.content = null;
        _this.Point = null;
        _this.hideMask = null;
        _this.shape_wrong = null;
        _this.FX_confetti = null;
        _this.Scenes = [];
        return _this;
    }
    NodeController.prototype.start = function () {
        var _this = this;
        this.content.children.forEach(function (node) { return node.name.includes("Scene") && _this.Scenes.push(node); });
        this.Scene1_ScratchAble = this.Scenes[0].getComponentsInChildren("Scratchable");
        this.Scene2_ScratchAble = this.Scenes[1].getComponentsInChildren("Scratchable");
        this.Scene3_ScratchAble = this.Scenes[2].getComponentsInChildren("Scratchable");
        this.shape_wrong = this.content.getChildByName("shape");
        this.FX_confetti = this.content.getChildByName("ConfettiBase").getComponentInChildren(cc.ParticleSystem);
    };
    __decorate([
        property(cc.Node)
    ], NodeController.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], NodeController.prototype, "Point", void 0);
    __decorate([
        property(cc.Node)
    ], NodeController.prototype, "hideMask", void 0);
    NodeController = __decorate([
        ccclass
    ], NodeController);
    return NodeController;
}(cc.Component));
exports.default = NodeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9DQztRQWxDRyxlQUFlO1FBQ2Ysd0JBQWtCLEdBQW1CLEVBQUUsQ0FBQztRQUN4Qyx3QkFBa0IsR0FBbUIsRUFBRSxDQUFDO1FBQ3hDLHdCQUFrQixHQUFtQixFQUFFLENBQUM7UUFFeEMsS0FBSztRQUVMLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFXLEdBQXNCLElBQUksQ0FBQztRQUN0QyxZQUFNLEdBQWMsRUFBRSxDQUFDOztJQWtCM0IsQ0FBQztJQWZhLDhCQUFLLEdBQWY7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU3RyxDQUFDO0lBekJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBZFIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9DbEM7SUFBRCxxQkFBQztDQXBDRCxBQW9DQyxDQXBDMkMsRUFBRSxDQUFDLFNBQVMsR0FvQ3ZEO2tCQXBDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmF0Y2hBYmxlc1xyXG4gICAgU2NlbmUxX1NjcmF0Y2hBYmxlOiBjYy5Db21wb25lbnRbXSA9IFtdO1xyXG4gICAgU2NlbmUyX1NjcmF0Y2hBYmxlOiBjYy5Db21wb25lbnRbXSA9IFtdO1xyXG4gICAgU2NlbmUzX1NjcmF0Y2hBYmxlOiBjYy5Db21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc2hhcGVfd3Jvbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRlhfY29uZmV0dGk6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuICAgIFNjZW5lczogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5uYW1lLmluY2x1ZGVzKFwiU2NlbmVcIikgJiYgdGhpcy5TY2VuZXMucHVzaChub2RlKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5TY2VuZTFfU2NyYXRjaEFibGUgPSB0aGlzLlNjZW5lc1swXS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcIlNjcmF0Y2hhYmxlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLlNjZW5lMl9TY3JhdGNoQWJsZSA9IHRoaXMuU2NlbmVzWzFdLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKFwiU2NyYXRjaGFibGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuU2NlbmUzX1NjcmF0Y2hBYmxlID0gdGhpcy5TY2VuZXNbMl0uZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oXCJTY3JhdGNoYWJsZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNoYXBlX3dyb25nID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwic2hhcGVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5GWF9jb25mZXR0aSA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcIkNvbmZldHRpQmFzZVwiKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==