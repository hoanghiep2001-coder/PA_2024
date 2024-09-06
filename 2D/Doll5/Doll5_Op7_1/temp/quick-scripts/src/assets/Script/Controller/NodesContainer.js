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
        // FX
        _this.PS_Blink_Head = null;
        _this.PS_Blink_Base = null;
        _this.PS_Blink_Shoe = null;
        // UI
        _this.Hand = null;
        _this.doll = null;
        _this.Doll_Camera = null;
        _this.Logo = null;
        _this.Icon = null;
        _this.Progress = null;
        _this.ProgressSteps = [];
        _this.Btn_DollCamera = null;
        _this.BtnDownload = null;
        _this.BtnLeft = null;
        _this.BtnRight = null;
        _this.ListItem = null;
        _this.ListColor = null;
        // Items
        _this.Char_Hairs = [];
        _this.Char_DressDefault = null;
        _this.Char_Dresses = [];
        _this.Char_ShoesDefault = null;
        _this.Char_Shoes = [];
        _this.Items = [];
        _this.Frame_Colors = [];
        _this.Frame_Hairs = [];
        _this.Frame_Dresses = [];
        _this.Frame_Shoes = [];
        return _this;
    }
    NodesContainer.prototype.onLoad = function () {
        this.BtnLeft.active = false;
        this.BtnRight.active = false;
    };
    NodesContainer.prototype.start = function () {
        // màu FX #FF8F00
        var _this = this;
        // init progress Steps
        this.ProgressSteps = this.Progress.getChildByName("thanhngang").children;
        // init items
        this.Items = this.ListItem.children;
        // init frame pick hairs
        this.ListItem.getChildByName("Hair").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Hairs.push(framePick);
        });
        // init frame pick dress
        this.ListItem.getChildByName("Dress").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Dresses.push(framePick);
        });
        // init frame pick shoe
        this.ListItem.getChildByName("Shoe").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Shoes.push(framePick);
        });
        // init frame pick colors
        this.Frame_Colors = this.ListColor.children;
        // init camera
        this.Btn_DollCamera = this.Doll_Camera.getChildByName("btn");
    };
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
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Head", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Base", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Shoe", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Doll_Camera", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Progress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnDownload", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnLeft", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnRight", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "ListItem", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "ListColor", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Hairs", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Char_DressDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Dresses", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Char_ShoesDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Shoes", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

cc._RF.pop();