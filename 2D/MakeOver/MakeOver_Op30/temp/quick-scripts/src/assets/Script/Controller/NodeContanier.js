"use strict";
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