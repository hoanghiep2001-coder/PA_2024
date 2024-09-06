"use strict";
cc._RF.push(module, '97c94wUbc5Pebqv3On9B17z', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BG = null;
        _this.hideMask = null;
        _this.UI = null;
        // Flow
        _this.OpenScene = null;
        _this.DressUpScene = null;
        _this.BattleScene = null;
        _this.CTA = null;
        _this.CTA_Btn = null;
        _this.CTA_Overlay = null;
        // Dress Up Scene
        _this.DressUp_Container = null;
        _this.DressUpBg_1 = null;
        _this.DressUpBg_2 = null;
        _this.DressUpPickTray = null;
        _this.DressUpText = null;
        // Battle Scene
        _this.Doll = null;
        _this.DollPoint = null;
        _this.Opponent = null;
        // Btn
        _this.Btn_Start = null;
        _this.OpenScene_BtnInstall = null;
        _this.DressUp_BtnInstall = null;
        _this.Btn_Submit = null;
        // FX
        _this.FX_Heart = null;
        // Doll Items
        _this.DollDressDefault = null;
        _this.DollHairDefault = null;
        _this.Frame_Icons = [];
        _this.Items = [];
        _this.Dress_Frames = [];
        _this.Doll_Dresses = [];
        _this.Hair_Frames = [];
        _this.Doll_F_Hairs = [];
        _this.Shoe_Frames = [];
        _this.Doll_Shoes = [];
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "OpenScene", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpScene", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BattleScene", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_Btn", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUp_Container", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpBg_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpBg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpPickTray", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpText", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Doll", void 0);
    __decorate([
        property(cc.Label)
    ], NodesContainer.prototype, "DollPoint", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Opponent", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Btn_Start", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "OpenScene_BtnInstall", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUp_BtnInstall", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Btn_Submit", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "FX_Heart", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DollDressDefault", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DollHairDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Frame_Icons", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Items", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Dress_Frames", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Doll_Dresses", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Hair_Frames", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Doll_F_Hairs", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Shoe_Frames", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Doll_Shoes", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

cc._RF.pop();