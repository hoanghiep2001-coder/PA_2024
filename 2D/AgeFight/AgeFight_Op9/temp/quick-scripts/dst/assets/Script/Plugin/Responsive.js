
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyWEM7UUF4WEcsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBd1ZoRCxDQUFDO0lBclZhLDBCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdB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QUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUcxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFD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QUVqQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO2dEQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7c0RBQ2E7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQW5CUixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMlg5QjtJQUFELGlCQUFDO0NBM1hELEFBMlhDLENBM1h1QyxFQUFFLENBQUMsU0FBUyxHQTJYbkQ7a0JBM1hvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0Jhc2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCBDb2luQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9Db2luQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQmFzZUNvbnRyb2xsZXIpXHJcbiAgICBlbmVteUJhc2U6IEJhc2VDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCYXNlQ29udHJvbGxlcilcclxuICAgIGFsbHlCYXNlOiBCYXNlQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQ29pbkNvbnRyb2xsZXIpXHJcbiAgICBDb2luQ29udHJvbGxlcjogQ29pbkNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgS2luZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbnZpcm9ubWVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9sb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQmdfSG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEJnX1ZlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGcmFtZUZvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgTG9hZEZvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgT3B0aW9uc19MYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5CZ19Ib3IgPSB0aGlzLkVudmlyb25tZW50LmdldENoaWxkQnlOYW1lKFwiQmdfSG9yXCIpO1xyXG4gICAgICAgIHRoaXMuQmdfVmVyID0gdGhpcy5FbnZpcm9ubWVudC5nZXRDaGlsZEJ5TmFtZShcIkJnX1ZlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QgPSB0aGlzLk9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJGcmFtZWZvb2RcIik7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkxvYWRGb29kQ29udHJvbGxlclwiKTtcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0ID0gdGhpcy5PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAoaGVpZ2h0IC8gd2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JJcFgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkID0gMjA7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5CZ19Ib3IuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkJnX1Zlci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSA4MDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuNCwgMC40KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjEwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuNCwgMC40KTtcclxuXHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMyk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjMxNiwgMC4zMTYpO1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTEwO1xyXG5cclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5sZWZ0ID0gMzA7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5yaWdodCA9IC0xMzA7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSA2NTtcclxuXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDE0MDtcclxuICAgICAgICBvcHRpb25zQ2hpbGQuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMS4xNTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5LaW5nLnNjYWxlWCA9IC0wLjU7XHJcbiAgICAgICAgdGhpcy5LaW5nLnNjYWxlWSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDEwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQmdfSG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gODA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjMpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4zMTYsIDAuMzE2KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0xMDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQubGVmdCA9IDMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAtMTMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gNjU7XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSAxMjA7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiT3BcIikgPyBjaGlsZC5zY2FsZSA9IDEuMTUgOiBjaGlsZC5zY2FsZSA9IDAuNDE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVggPSAtMC41O1xyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoIC8gaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjI1O1xyXG5cclxuICAgICAgICB0aGlzLkJnX0hvci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJnX1Zlci5hY3RpdmUgPSB0cnVlOyAgXHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDMwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4yNSk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjIyLCAwLjI0KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSA2NztcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmxlZnQgPSAxNzc7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNDtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTU7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDAuNjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuMztcclxuXHJcbiAgICAgICAgdGhpcy5LaW5nLnNjYWxlWCA9IC0wLjI1O1xyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVkgPSAwLjI1O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDA7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuMjU7XHJcblxyXG4gICAgICAgIHRoaXMuQmdfSG9yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmdfVmVyLmFjdGl2ZSA9IHRydWU7ICBcclxuXHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDMwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4yNSk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjIyLCAwLjI0KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSA2NztcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmxlZnQgPSAxNzc7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNDtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTU7XHJcblxyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVggPSAtMC4yNTtcclxuICAgICAgICB0aGlzLktpbmcuc2NhbGVZID0gMC4yNTtcclxuXHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDAuNjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuMztcclxuXHJcbiAgICAgICAgLy8gaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuMjUsIDAuMjUpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4xMyk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMTIsIDAuMTIpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSA3MDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjEyLCAwLjEyKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIC8vICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAvLyAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJPcFwiKSA/IGNoaWxkLnNjYWxlID0gMC41IDogY2hpbGQuc2NhbGUgPSAwLjI7XHJcbiAgICAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=