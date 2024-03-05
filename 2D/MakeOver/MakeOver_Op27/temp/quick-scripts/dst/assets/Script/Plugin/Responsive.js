
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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            // Constants.isRotate = true;
            this.setHorizontalForIpX();
        }
        else {
            // Constants.isRotate = true;
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.NodeContainer.Bg_1.scale = 0.8;
        // this.NodeContainer.Bg_1_1.scale = 0.8;
        // this.NodeContainer.Bg_1_2.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.45;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Bg_2_1.scale = 0.45;
        this.NodeContainer.Bg_2_1.y = 45;
        this.NodeContainer.Bg_2_1.x = 600;
        this.NodeContainer.Bg_2_2.scale = 0.45;
        this.NodeContainer.Bg_2_2.y = 45;
        this.NodeContainer.Bg_2_2.x = -670;
        this.NodeContainer.Cleanser.x = 155;
        this.NodeContainer.Cleanser.y = 250;
        this.NodeContainer.Tweezers.x = 155;
        this.NodeContainer.Tweezers.y = 250;
        this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 155;
        this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 250 - 30;
        this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 155;
        this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 250 - 30;
        constants_1.Constants.Responsive.calculatedX = 155;
        constants_1.Constants.Responsive.calculatedY = 250;
        this.NodeContainer.Step1_Ponny.scale = 0.88;
        this.NodeContainer.Step1_Ponny.y = -210;
        this.NodeContainer.Step2_Ponny.y = -30;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.Bg_1.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.4;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Cleanser.x = 155;
        this.NodeContainer.Cleanser.y = 310;
        this.NodeContainer.Tweezers.x = 155;
        this.NodeContainer.Tweezers.y = 310;
        this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 155;
        this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 310 - 30;
        this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 155;
        this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 310 - 30;
        constants_1.Constants.Responsive.calculatedX = 155;
        constants_1.Constants.Responsive.calculatedY = 310;
        this.NodeContainer.Step1_Ponny.scale = 0.85;
        this.NodeContainer.Step1_Ponny.y = -210;
        this.NodeContainer.Step2_Ponny.y = -30;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
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
        this.NodeContainer.Bg_1.scale = 0.55;
        this.NodeContainer.Bg_2.scale = 0.48;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Cleanser.x = 0;
        this.NodeContainer.Cleanser.y = 0;
        this.NodeContainer.Tweezers.x = 0;
        this.NodeContainer.Tweezers.y = 0;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Bg_1.scale = 0.45;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;
            this.NodeContainer.Cleanser.x = 0;
            this.NodeContainer.Cleanser.y = 0;
            this.NodeContainer.Tweezers.x = 0;
            this.NodeContainer.Tweezers.y = 0;
            this.NodeContainer.Tweezers_InteractPoint1.x = -39;
            this.NodeContainer.Tweezers_InteractPoint1.y = -73.5;
            this.NodeContainer.Tweezers_InteractPoint2.x = -8;
            this.NodeContainer.Tweezers_InteractPoint2.y = -128.5;
            constants_1.Constants.Responsive.calculatedX = 0;
            constants_1.Constants.Responsive.calculatedY = 0;
        }
        else {
            this.NodeContainer.Bg_1.scale = 0.5;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;
            this.NodeContainer.Cleanser.x = 25;
            this.NodeContainer.Cleanser.y = 25;
            this.NodeContainer.Tweezers.x = 15;
            this.NodeContainer.Tweezers.y = 25;
            this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 15;
            this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 25;
            this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 15;
            this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 25;
            constants_1.Constants.Responsive.calculatedX = 20;
            constants_1.Constants.Responsive.calculatedY = 25;
            this.NodeContainer.Step1_Ponny.scale = 0.85;
            this.NodeContainer.Step1_Ponny.y = -210;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQXdEO0FBQ3hELCtDQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXVNQztRQXBNRyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBMExoRCxDQUFDO0lBdkxhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzlELHFCQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILHFCQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFB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Qyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDMUQscUJBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUdTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFuTUQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztxREFDWTtJQUhuQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdU05QjtJQUFELGlCQUFDO0NBdk1ELEFBdU1DLENBdk11QyxFQUFFLENBQUMsU0FBUyxHQXVNbkQ7a0JBdk1vQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuLi9Db250cm9sbGVyL05vZGVDb250YW5pZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gICAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMS5zY2FsZSA9IDAuODtcclxuICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuQmdfMV8xLnNjYWxlID0gMC44O1xyXG4gICAgICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18xXzIuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi54ID0gLTQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yXzEuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yXzEueSA9IDQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yXzEueCA9IDYwMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMl8yLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMl8yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMl8yLnggPSAtNjcwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueSA9IDI1MDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDI1MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMzkgLSAxNTU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnkgPSA3My41IC0gMjUwIC0gMzA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAtOCAtIDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueSA9IDEyOC41IC0gMjUwIC0gMzA7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAxNTU7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAyNTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9Qb25ueS5zY2FsZSA9IDAuODg7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnkgPSAtMjEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Qb25ueS55ID0gLTMwO1xyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18xLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi54ID0gLTQ1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueSA9IDMxMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDMxMDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMzkgLSAxNTU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnkgPSA3My41IC0gMzEwIC0gMzA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAtOCAtIDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueSA9IDEyOC41IC0gMzEwIC0gMzA7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAxNTU7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAzMTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9Qb25ueS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnkgPSAtMjEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Qb25ueS55ID0gLTMwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMS5zY2FsZSA9IDAuNTU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIuc2NhbGUgPSAwLjQ4O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi54ID0gLTQ1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVycy54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPj0gMC42ICYmIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18xLnNjYWxlID0gMC40NTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIueCA9IC00NTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlci54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVycy55ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50MS54ID0gLTM5O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDEueSA9IC03My41O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueCA9IC04O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueSA9IC0xMjguNTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAwO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzEuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi55ID0gNDU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnggPSAtNDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDI1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueSA9IDI1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDE1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDI1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMzkgLSAxNTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnkgPSA3My41IC0gMjU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Mi54ID0gLTggLSAxNTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnkgPSAxMjguNSAtIDI1O1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWCA9IDIwO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IDI1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnNjYWxlID0gMC44NTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnkgPSAtMjEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=