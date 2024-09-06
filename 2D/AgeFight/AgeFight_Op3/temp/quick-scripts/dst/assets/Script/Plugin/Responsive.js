
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
        this.LoadFood = this.Options.getChildByName("Loadfood");
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
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });
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
        if (constants_1.Constants.Responsive.isVer) {
            return;
        }
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
        // this.FrameFood.setScale(10, 0.13);
        // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        // this.LoadFood.setScale(0.12, 0.12);
        // this.LoadFood.getComponent(cc.Widget).left = -2;
        // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        // let optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = true;
        optionsWidget.isAlignRight = false;
        // optionsWidget.isAlignLeft = false;
        // optionsWidget.right = 30;
        // optionsWidget.bottom = 35;
        // optionsLayout.spacingX = 50;
        // optionsChild.forEach(child => {
        //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        // });
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
        // this.FrameFood.setScale(10, 0.13);
        // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        // this.LoadFood.setScale(0.12, 0.12);
        // this.LoadFood.getComponent(cc.Widget).left = -2;
        // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        // let optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = true;
        optionsWidget.isAlignRight = false;
        // optionsWidget.isAlignLeft = false;
        // optionsWidget.right = 30;
        // optionsWidget.bottom = 35;
        optionsLayout.spacingX = 70;
        // optionsChild.forEach(child => {
        //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE0VkM7UUF6VkcsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFnVWhELENBQUM7SUE3VGEsMEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsU0FB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TSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBeFZEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7aURBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztnREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQVpQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0VjlCO0lBQUQsaUJBQUM7Q0E1VkQsQUE0VkMsQ0E1VnVDLEVBQUUsQ0FBQyxTQUFTLEdBNFZuRDtrQkE1Vm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IENvaW5Db250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0NvaW5Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShCYXNlQ29udHJvbGxlcilcclxuICAgIGVuZW15QmFzZTogQmFzZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJhc2VDb250cm9sbGVyKVxyXG4gICAgYWxseUJhc2U6IEJhc2VDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShDb2luQ29udHJvbGxlcilcclxuICAgIENvaW5Db250cm9sbGVyOiBDb2luQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbnZpcm9ubWVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBCZ19Ib3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQmdfVmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZyYW1lRm9vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBMb2FkRm9vZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBPcHRpb25zX0xheW91dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkJnX0hvciA9IHRoaXMuRW52aXJvbm1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJCZ19Ib3JcIik7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIgPSB0aGlzLkVudmlyb25tZW50LmdldENoaWxkQnlOYW1lKFwiQmdfVmVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkZyYW1lRm9vZCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkZyYW1lZm9vZFwiKTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kID0gdGhpcy5PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiTG9hZGZvb2RcIik7XHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDIwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQmdfSG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gODA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjMpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4zMTYsIDAuMzE2KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0xMDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQubGVmdCA9IDMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAtMTMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gNjU7XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSAxNDA7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiT3BcIikgPyBjaGlsZC5zY2FsZSA9IDEuMTUgOiBjaGlsZC5zY2FsZSA9IDAuNDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAxMDtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC41O1xyXG5cclxuICAgICAgICB0aGlzLkJnX0hvci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQmdfVmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjEwO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDgwO1xyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoMC40LCAwLjQpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSA4MDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC40LCAwLjQpO1xyXG5cclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4zKTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMzE2LCAwLjMxNik7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMTA7XHJcblxyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmxlZnQgPSAzMDtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gLTEzMDtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmJvdHRvbSA9IDY1O1xyXG5cclxuICAgICAgICBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gMTIwO1xyXG4gICAgICAgIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAxLjE1IDogY2hpbGQuc2NhbGUgPSAwLjQxO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAod2lkdGggLyBoZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SXBob25lWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLlJlc3BvbnNpdmUuaXNWZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkID0gMDtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4yNTtcclxuXHJcbiAgICAgICAgdGhpcy5CZ19Ib3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIuYWN0aXZlID0gdHJ1ZTsgIFxyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4xMiwgMC4xMik7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gb3B0aW9uc1dpZGdldC5yaWdodCA9IDMwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDUwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjI1O1xyXG5cclxuICAgICAgICB0aGlzLkJnX0hvci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJnX1Zlci5hY3RpdmUgPSB0cnVlOyAgXHJcblxyXG5cclxuICAgICAgICB0aGlzLkNvaW5Db250cm9sbGVyLm5vZGUuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG5cclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgtMC4yNSwgMC4yNSk7XHJcbiAgICAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4xMiwgMC4xMik7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gb3B0aW9uc1dpZGdldC5yaWdodCA9IDMwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDcwO1xyXG4gICAgICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuMjUsIDAuMjUpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4xMyk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMTIsIDAuMTIpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSA3MDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjEyLCAwLjEyKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIC8vICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAvLyAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJPcFwiKSA/IGNoaWxkLnNjYWxlID0gMC41IDogY2hpbGQuc2NhbGUgPSAwLjI7XHJcbiAgICAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=