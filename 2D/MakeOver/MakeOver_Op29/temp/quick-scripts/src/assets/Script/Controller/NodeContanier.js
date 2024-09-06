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
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.Doll = null;
        _this.Star_1 = null;
        _this.Text_Jimin = null;
        _this.Text_Drag = null;
        _this.Hand_1 = null;
        _this.Hand_2 = null;
        _this.Acne1_1 = null;
        _this.Acne1_2 = null;
        _this.Acne2_1 = null;
        _this.Acne2_2 = null;
        // Point
        _this.Point_Cleanser = null;
        _this.Point_Tweezers = null;
        _this.Point_Tweezer_Head = null;
        _this.Tweezers_InteractPoint1 = null;
        _this.Tweezers_InteractPoint2 = null;
        // tools
        _this.Cleanser = null;
        _this.sp_Cleanser = null;
        _this.tweezers = null;
        _this.sp_Tweezers = null;
        // spine
        _this.sp_tearsLeft = null;
        _this.sp_tearsRight = null;
        _this.Spine_Maggot1 = null;
        _this.Spine_Maggot2 = null;
        _this.Spine_RMMG1 = null;
        _this.Spine_RMMG2 = null;
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
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Star_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Text_Jimin", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Text_Drag", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne1_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne1_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne2_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne2_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Point_Cleanser", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Point_Tweezers", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Point_Tweezer_Head", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers_InteractPoint1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers_InteractPoint2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Cleanser", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_Cleanser", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "tweezers", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_Tweezers", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_tearsLeft", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_tearsRight", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Maggot1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Maggot2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_RMMG1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_RMMG2", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

cc._RF.pop();