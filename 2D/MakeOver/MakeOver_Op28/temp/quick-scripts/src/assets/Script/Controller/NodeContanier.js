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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        _this.Scratchable = null;
        _this.HideMask = null;
        _this.Bg_1 = null;
        _this.Bg_1_1 = null;
        _this.Bg_1_2 = null;
        _this.Bg_2 = null;
        _this.Bg_2_1 = null;
        _this.Bg_2_2 = null;
        _this.Step2 = null;
        _this.OptionContainer = null;
        _this.Step1_Ponny = null;
        _this.Step2_Ponny = null;
        _this.Star_1 = null;
        // Points
        _this.PointScratch = null;
        // Tools
        _this.Sp_Cleanser = null;
        _this.Sp_Shower = null;
        _this.Spine_RMMG1 = null;
        _this.Spine_Acne = null;
        // Spine
        _this.Spine_Maggot2 = null;
        // Options
        _this.Flow1_Opt1 = null;
        _this.Flow1_Opt2 = null;
        _this.Flow2_Opt1 = null;
        _this.Flow2_Opt2 = null;
        _this.Flow3_Opt1 = null;
        _this.Flow3_Opt2 = null;
        return _this;
    }
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
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_1_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_1_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Step2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "OptionContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Step1_Ponny", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Step2_Ponny", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Star_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "PointScratch", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Sp_Cleanser", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Sp_Shower", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_RMMG1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Acne", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Maggot2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Flow1_Opt1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Flow1_Opt2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Flow2_Opt1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Flow2_Opt2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Flow3_Opt1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Flow3_Opt2", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

cc._RF.pop();