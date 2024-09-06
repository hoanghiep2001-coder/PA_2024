
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
        _this.Environment = null;
        _this.Options = null;
        _this.speedLine = null;
        _this.CTA_logo = null;
        _this.Hor_Decor = null;
        _this.Ver_Decor = null;
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
        this.Hor_Decor.active = true;
        this.Ver_Decor.active = false;
        constants_1.Constants.Responsive.speedCalculated = 20;
        constants_1.Constants.scaleArmy = 0.5;
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
        this.CTA_logo.scale = 0.4;
        this.speedLine.scale = 0.9;
        this.speedLine.y = -200;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.Hor_Decor.active = true;
        this.Ver_Decor.active = false;
        constants_1.Constants.Responsive.speedCalculated = 10;
        constants_1.Constants.scaleArmy = 0.5;
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
        this.CTA_logo.scale = 0.4;
        this.speedLine.scale = 0.6;
        this.speedLine.y = -180;
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
        this.Hor_Decor.active = false;
        this.Ver_Decor.active = true;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
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
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        this.Hor_Decor.active = false;
        this.Ver_Decor.active = true;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
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
        this.speedLine.scale = 0.3;
        this.speedLine.y = -90;
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
    ], Responsive.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "speedLine", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Hor_Decor", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Ver_Decor", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3WEM7UUFyWEcsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFJeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBbVZoRCxDQUFDO0lBaFZhLDBCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksS0FBSyxHQUFHLE1BQU0sRUFBRTtZQUNoQixxQkFBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxxQkFBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUdPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRTtZQUN2QixxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUdPLHdDQUFtQixHQUEzQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTlCLHFCQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUMscUJBQVMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FB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QUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBeEJULFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3WDlCO0lBQUQsaUJBQUM7Q0F4WEQsQUF3WEMsQ0F4WHVDLEVBQUUsQ0FBQyxTQUFTLEdBd1huRDtrQkF4WG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IENvaW5Db250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0NvaW5Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShCYXNlQ29udHJvbGxlcilcclxuICAgIGVuZW15QmFzZTogQmFzZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJhc2VDb250cm9sbGVyKVxyXG4gICAgYWxseUJhc2U6IEJhc2VDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShDb2luQ29udHJvbGxlcilcclxuICAgIENvaW5Db250cm9sbGVyOiBDb2luQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbnZpcm9ubWVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwZWVkTGluZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIb3JfRGVjb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBWZXJfRGVjb3I6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEZyYW1lRm9vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBMb2FkRm9vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBPcHRpb25zX0xheW91dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkZyYW1lZm9vZFwiKTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kID0gdGhpcy5PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiTG9hZEZvb2RDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQgPSB0aGlzLk9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChoZWlnaHQgLyB3aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIHRoaXMuSG9yX0RlY29yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5WZXJfRGVjb3IuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDIwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gODA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjMpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4zMTYsIDAuMzE2KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0xMDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQubGVmdCA9IDMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAtMTMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gNjU7XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSAxNDA7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDEuMTU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWRMaW5lLnNjYWxlID0gMC45O1xyXG4gICAgICAgIHRoaXMuc3BlZWRMaW5lLnkgPSAtMjAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JUYWJsZXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX1RBQkxFVDtcclxuXHJcbiAgICAgICAgdGhpcy5Ib3JfRGVjb3IuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLlZlcl9EZWNvci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkID0gMTA7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSA4MDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuNCwgMC40KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjEwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuNCwgMC40KTtcclxuXHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMyk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjMxNiwgMC4zMTYpO1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTEwO1xyXG5cclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5sZWZ0ID0gMzA7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5yaWdodCA9IC0xMzA7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSA2NTtcclxuXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDEyMDtcclxuICAgICAgICBvcHRpb25zQ2hpbGQuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJPcFwiKSA/IGNoaWxkLnNjYWxlID0gMS4xNSA6IGNoaWxkLnNjYWxlID0gMC40MTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWRMaW5lLnNjYWxlID0gMC42O1xyXG4gICAgICAgIHRoaXMuc3BlZWRMaW5lLnkgPSAtMTgwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldFZlcnRpY2FsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCAvIGhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5Ib3JfRGVjb3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5WZXJfRGVjb3IuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkID0gMDtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4yNTtcclxuXHJcbiAgICAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoMC4yNSwgMC4yNSlcclxuXHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuMjUsIDAuMjUpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjI1KTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMjIsIDAuMjQpO1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IC0yO1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5yaWdodCA9IDY3O1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQubGVmdCA9IDE3NztcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmJvdHRvbSA9IDM0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSA1NTtcclxuICAgICAgICBvcHRpb25zQ2hpbGQuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMC42O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC4zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuSG9yX0RlY29yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuVmVyX0RlY29yLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjI1O1xyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMjUpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4yMiwgMC4yNCk7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gNjc7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5sZWZ0ID0gMTc3O1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDU1O1xyXG5cclxuICAgICAgICBvcHRpb25zQ2hpbGQuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMC42O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC4zO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZExpbmUuc2NhbGUgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5zcGVlZExpbmUueSA9IC05MDtcclxuICAgICAgICAvLyBpZiAoaGVpZ2h0IC8gd2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoMC4yNSwgMC4yNSlcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDMwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjEzKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4xMiwgMC4xMik7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IC0yO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0yO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAvLyAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIC8vICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnblJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5yaWdodCA9IDMwO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LmJvdHRvbSA9IDM1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDcwO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zQ2hpbGQuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiT3BcIikgPyBjaGlsZC5zY2FsZSA9IDAuNSA6IGNoaWxkLnNjYWxlID0gMC4yO1xyXG4gICAgICAgIC8vICAgICAvLyB9KTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuMjUsIDAuMjUpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4xMyk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMTIsIDAuMTIpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyAgICAgLy8gbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSA1MDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==