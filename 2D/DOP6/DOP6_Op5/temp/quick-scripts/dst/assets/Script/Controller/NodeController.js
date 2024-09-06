
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
        // ScratchAbles
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // UI
        _this.content = null;
        _this.hideMask = null;
        _this.shape_wrong = null;
        _this.FX_confetti = null;
        _this.Scenes = [];
        _this.objects = [];
        return _this;
    }
    NodeController.prototype.start = function () {
        var _this = this;
        this.content.children.forEach(function (node) { return node.name.includes("Scene") && _this.Scenes.push(node); });
        this.Scenes.find(function (scene) {
            scene.children.forEach(function (child) { return child.name.includes("object") && _this.objects.push(child); });
        });
        this.shape_wrong = this.content.getChildByName("shape");
        this.FX_confetti = this.content.getChildByName("ConfettiBase").getComponentInChildren(cc.ParticleSystem);
    };
    __decorate([
        property(cc.Node)
    ], NodeController.prototype, "content", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUVJLGVBQWU7UUFGbkIscUVBZ0NDO1FBMUJHLEtBQUs7UUFFTCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBQ3RDLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIsYUFBTyxHQUFjLEVBQUUsQ0FBQzs7SUFnQjVCLENBQUM7SUFiYSw4QkFBSyxHQUFmO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLENBQUE7UUFDOUYsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTdHLENBQUM7SUF0QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBWFIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdDbEM7SUFBRCxxQkFBQztDQWhDRCxBQWdDQyxDQWhDMkMsRUFBRSxDQUFDLFNBQVMsR0FnQ3ZEO2tCQWhDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmF0Y2hBYmxlc1xyXG4gICAgXHJcblxyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHNoYXBlX3dyb25nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZYX2NvbmZldHRpOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBTY2VuZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgb2JqZWN0czogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5uYW1lLmluY2x1ZGVzKFwiU2NlbmVcIikgJiYgdGhpcy5TY2VuZXMucHVzaChub2RlKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5TY2VuZXMuZmluZChzY2VuZSA9PiB7XHJcbiAgICAgICAgICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIm9iamVjdFwiKSAmJiB0aGlzLm9iamVjdHMucHVzaChjaGlsZCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhcGVfd3JvbmcgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFwZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkZYX2NvbmZldHRpID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwiQ29uZmV0dGlCYXNlXCIpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUGFydGljbGVTeXN0ZW0pOyAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=