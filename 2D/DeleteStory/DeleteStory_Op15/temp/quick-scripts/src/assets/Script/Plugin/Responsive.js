"use strict";
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