"use strict";
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