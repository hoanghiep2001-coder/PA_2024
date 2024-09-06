
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
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.boy = null;
        _this.tool = null;
        _this.scratchable = null;
        _this.bgDoor = null;
        _this.girl = null;
        _this.car = null;
        _this.lamp = null;
        _this.cancelBtn = null;
        _this.text = null;
        _this.CTA_Btn = null;
        _this.CTA_logo = null;
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
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
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
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
        this.boy.scale = 1.2;
        this.boy.y = 20;
        this.scratchable.scale = 0.55;
        this.scratchable.y = 12.3 + 20;
        this.bgDoor.scale = 0.55;
        this.bgDoor.y = 12.3 + 20;
        this.girl.scale = 1.1;
        this.girl.y = 15;
        this.car.scale = 0.45;
        this.car.x = 128 + 15;
        this.car.y = -32 + 15;
        this.lamp.scale = 0.4;
        this.lamp.x = -100;
        this.tool.scale = 0.5;
        this.tool.x = 100;
        this.text.scale = 0.5;
        this.text.y = 200;
        this.cancelBtn.scale = 0.65;
        this.CTA_logo.scale = 0.7;
        this.CTA_Btn.scale = 0.5;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
        this.boy.scale = 1;
        this.boy.y = 0;
        this.scratchable.scale = 0.45;
        this.scratchable.y = 12.3;
        this.bgDoor.scale = 0.45;
        this.bgDoor.y = 12.3;
        this.girl.scale = 1;
        this.girl.y = 0;
        this.car.scale = 0.4;
        this.car.x = 128;
        this.car.y = -32;
        this.lamp.scale = 0.4;
        this.lamp.x = -73;
        this.tool.scale = 0.4;
        this.tool.x = 60;
        this.text.scale = 0.45;
        this.text.y = 190;
        this.cancelBtn.scale = 0.55;
        this.CTA_logo.scale = 0.6;
        this.CTA_Btn.scale = 0.5;
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
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        this.boy.scale = 0.95;
        this.boy.y = 0;
        this.scratchable.scale = 0.45;
        this.scratchable.y = 12.3;
        this.bgDoor.scale = 0.45;
        this.bgDoor.y = 12.3;
        this.girl.scale = 1;
        this.girl.y = 0;
        this.car.scale = 0.4;
        this.car.x = 128;
        this.car.y = -32;
        this.lamp.scale = 0.4;
        this.lamp.x = -73;
        this.tool.scale = 0.4;
        this.tool.x = 60;
        this.text.scale = 0.3;
        this.text.y = 182;
        this.cancelBtn.scale = 0.45;
        this.CTA_logo.scale = 0.48;
        this.CTA_Btn.scale = 0.4;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        this.boy.scale = 1;
        this.boy.y = 0;
        this.scratchable.scale = 0.45;
        this.scratchable.y = 12.3;
        this.bgDoor.scale = 0.45;
        this.bgDoor.y = 12.3;
        this.girl.scale = 1;
        this.girl.y = 0;
        this.car.scale = 0.4;
        this.car.x = 128;
        this.car.y = -32;
        this.lamp.scale = 0.4;
        this.lamp.x = -73;
        this.tool.scale = 0.4;
        this.tool.x = 60;
        this.text.scale = 0.38;
        this.text.y = 182;
        this.cancelBtn.scale = 0.45;
        this.CTA_logo.scale = 0.54;
        this.CTA_Btn.scale = 0.4;
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
        //     this.cancelBtn.scale = 0.45;
        // } else {    
        //     // Ipad
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
        //     this.cancelBtn.scale = 0.45;
        // }
    };
    Responsive.prototype.unActiveLogo = function () {
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "boy", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "tool", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "bgDoor", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "girl", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "car", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "lamp", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "cancelBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_Btn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBbVRDO1FBalRHLFlBQVk7UUFFWixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQWlSaEQsQ0FBQztJQS9RYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUdPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZ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QUQsaUJBQUM7Q0FuVEQsQUFtVEMsQ0FuVHVDLEVBQUUsQ0FBQyxTQUFTLEdBbVRuRDtrQkFuVG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3k6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b29sOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NyYXRjaGFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ0Rvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaXJsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGFtcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbmNlbEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX0J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9sb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbCgpOiB2b2lkIHtcclxuICAgICBcclxuICAgICAgICBpZihjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG5cclxuICAgICAgICB0aGlzLmJveS5zY2FsZSA9IDEuMjtcclxuICAgICAgICB0aGlzLmJveS55ID0gMjA7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUueSA9IDEyLjMgKyAyMDtcclxuXHJcbiAgICAgICAgdGhpcy5iZ0Rvb3Iuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIHRoaXMuYmdEb29yLnkgPSAxMi4zICsgMjA7XHJcblxyXG4gICAgICAgIHRoaXMuZ2lybC5zY2FsZSA9IDEuMTtcclxuICAgICAgICB0aGlzLmdpcmwueSA9IDE1O1xyXG5cclxuICAgICAgICB0aGlzLmNhci5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5jYXIueCA9IDEyOCArIDE1O1xyXG4gICAgICAgIHRoaXMuY2FyLnkgPSAtMzIgKyAxNTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW1wLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMubGFtcC54ID0gLTEwMDtcclxuXHJcbiAgICAgICAgdGhpcy50b29sLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMudG9vbC54ID0gMTAwO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdGhpcy50ZXh0LnkgPSAyMDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuY2VsQnRuLnNjYWxlID0gMC42NTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNztcclxuICAgICAgICB0aGlzLkNUQV9CdG4uc2NhbGUgPSAwLjU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuYm95LnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmJveS55ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JhdGNoYWJsZS5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5zY3JhdGNoYWJsZS55ID0gMTIuMztcclxuXHJcbiAgICAgICAgdGhpcy5iZ0Rvb3Iuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuYmdEb29yLnkgPSAxMi4zO1xyXG5cclxuICAgICAgICB0aGlzLmdpcmwuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZ2lybC55ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jYXIuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgdGhpcy5jYXIueCA9IDEyODtcclxuICAgICAgICB0aGlzLmNhci55ID0gLTMyO1xyXG5cclxuICAgICAgICB0aGlzLmxhbXAuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgdGhpcy5sYW1wLnggPSAtNzM7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbC5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLnRvb2wueCA9IDYwO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMudGV4dC55ID0gMTkwO1xyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbEJ0bi5zY2FsZSA9IDAuNTU7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjY7XHJcbiAgICAgICAgdGhpcy5DVEFfQnRuLnNjYWxlID0gMC41O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldFZlcnRpY2FsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5ib3kuc2NhbGUgPSAwLjk1O1xyXG4gICAgICAgIHRoaXMuYm95LnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmF0Y2hhYmxlLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLnNjcmF0Y2hhYmxlLnkgPSAxMi4zO1xyXG5cclxuICAgICAgICB0aGlzLmJnRG9vci5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5iZ0Rvb3IueSA9IDEyLjM7XHJcblxyXG4gICAgICAgIHRoaXMuZ2lybC5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5naXJsLnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmNhci5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLmNhci54ID0gMTI4O1xyXG4gICAgICAgIHRoaXMuY2FyLnkgPSAtMzI7XHJcblxyXG4gICAgICAgIHRoaXMubGFtcC5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLmxhbXAueCA9IC03MztcclxuXHJcbiAgICAgICAgdGhpcy50b29sLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMudG9vbC54ID0gNjA7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC5zY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLnRleHQueSA9IDE4MjtcclxuXHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdG4uc2NhbGUgPSAwLjQ1O1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC40ODtcclxuICAgICAgICB0aGlzLkNUQV9CdG4uc2NhbGUgPSAwLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmN1cnJlbnREZXZpY2UgPSBcInZlcnRpY2FsX21vYmlsZVwiO1xyXG5cclxuICAgICAgICB0aGlzLmJveS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5ib3kueSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUueSA9IDEyLjM7XHJcblxyXG4gICAgICAgIHRoaXMuYmdEb29yLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLmJnRG9vci55ID0gMTIuMztcclxuXHJcbiAgICAgICAgdGhpcy5naXJsLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmdpcmwueSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMuY2FyLnggPSAxMjg7XHJcbiAgICAgICAgdGhpcy5jYXIueSA9IC0zMjtcclxuXHJcbiAgICAgICAgdGhpcy5sYW1wLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMubGFtcC54ID0gLTczO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2wuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgdGhpcy50b29sLnggPSA2MDtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnNjYWxlID0gMC4zODtcclxuICAgICAgICB0aGlzLnRleHQueSA9IDE4MjtcclxuXHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdG4uc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjU0O1xyXG4gICAgICAgIHRoaXMuQ1RBX0J0bi5zY2FsZSA9IDAuNDtcclxuXHJcbiAgICAgICAgLy8gaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC43KSB7XHJcbiAgICAgICAgLy8gICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1c1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5ib3kuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJveS55ID0gMDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmF0Y2hhYmxlLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JhdGNoYWJsZS55ID0gMTIuMztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmJnRG9vci5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmdEb29yLnkgPSAxMi4zO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2lybC5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2lybC55ID0gMDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIueCA9IDEyODtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIueSA9IC0zMjtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmxhbXAuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFtcC54ID0gLTczO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbC5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sLnggPSA2MDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnRleHQuc2NhbGUgPSAwLjM4O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRleHQueSA9IDE4MjtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbmNlbEJ0bi5zY2FsZSA9IDAuNDU7XHJcblxyXG4gICAgICAgIC8vIH0gZWxzZSB7ICAgIFxyXG4gICAgICAgIC8vICAgICAvLyBJcGFkXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm95LnNjYWxlID0gMTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ib3kueSA9IDA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JhdGNoYWJsZS5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NyYXRjaGFibGUueSA9IDEyLjM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5iZ0Rvb3Iuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJnRG9vci55ID0gMTIuMztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmdpcmwuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdpcmwueSA9IDA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnggPSAxMjg7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnkgPSAtMzI7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5sYW1wLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxhbXAueCA9IC03MztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2wuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbC54ID0gNjA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXh0LnNjYWxlID0gMC4zODtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXh0LnkgPSAxODI7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW5jZWxCdG4uc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1bkFjdGl2ZUxvZ28oKTogdm9pZCB7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19