"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var BaseController_1 = require("../Controller/BaseController");
var CoinController_1 = require("../Controller/CoinController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemyBase = null;
        _this.allyBase = null;
        _this.CoinController = null;
        _this.King = null;
        _this.Environment = null;
        _this.Options = null;
        _this.CTA_logo = null;
        _this.Bg_Hor = null;
        _this.Bg_Ver = null;
        _this.FrameFood = null;
        _this.LoadFood = null;
        _this.Options_Layout = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.start = function () {
        this.Bg_Hor = this.Environment.getChildByName("Bg_Hor");
        this.Bg_Ver = this.Environment.getChildByName("Bg_Ver");
        this.FrameFood = this.Options.getChildByName("Framefood");
        this.LoadFood = this.Options.getChildByName("LoadFoodController");
        this.Options_Layout = this.Options.getChildByName("Layout");
    };
    Responsive.prototype.handleRotate = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        constants_1.Constants.Responsive.speedCalculated = 20;
        constants_1.Constants.scaleArmy = 0.5;
        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;
        this.CoinController.node.scale = 1;
        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);
        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);
        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;
        optionsLayout.spacingX = 140;
        optionsChild.forEach(function (child) {
            child.scale = 1.15;
        });
        this.King.scaleX = -0.5;
        this.King.scaleY = 0.5;
        this.CTA_logo.scale = 0.4;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.speedCalculated = 10;
        constants_1.Constants.scaleArmy = 0.5;
        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;
        this.CoinController.node.scale = 1;
        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);
        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);
        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;
        optionsLayout.spacingX = 120;
        optionsChild.forEach(function (child) {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });
        this.King.scaleX = -0.5;
        this.King.scaleY = 0.5;
        this.CTA_logo.scale = 0.4;
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;
        this.CoinController.node.scale = 0.8;
        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25);
        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        this.FrameFood.setScale(10, 0.25);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.22, 0.24);
        this.LoadFood.getComponent(cc.Widget).left = -2;
        this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignLeft = true;
        optionsWidget.right = 67;
        optionsWidget.left = 177;
        optionsWidget.bottom = 34;
        optionsLayout.spacingX = 55;
        optionsChild.forEach(function (child) {
            child.scale = 0.6;
        });
        this.CTA_logo.scale = 0.3;
        this.King.scaleX = -0.25;
        this.King.scaleY = 0.25;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;
        this.CoinController.node.scale = 0.8;
        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25);
        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        this.FrameFood.setScale(10, 0.25);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.22, 0.24);
        this.LoadFood.getComponent(cc.Widget).left = -2;
        this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignLeft = true;
        optionsWidget.right = 67;
        optionsWidget.left = 177;
        optionsWidget.bottom = 34;
        optionsLayout.spacingX = 55;
        this.King.scaleX = -0.25;
        this.King.scaleY = 0.25;
        optionsChild.forEach(function (child) {
            child.scale = 0.6;
        });
        this.CTA_logo.scale = 0.3;
        // if (height / width > 1.5) {
        //     this.CoinController.node.scale = 0.8;
        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
        //     optionsLayout.spacingX = 70;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // } else {
        //     this.CoinController.node.scale = 0.8;
        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
        //     // optionsLayout.spacingX = 50;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(BaseController_1.default)
    ], Responsive.prototype, "enemyBase", void 0);
    __decorate([
        property(BaseController_1.default)
    ], Responsive.prototype, "allyBase", void 0);
    __decorate([
        property(CoinController_1.default)
    ], Responsive.prototype, "CoinController", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "King", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_logo", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

cc._RF.pop();