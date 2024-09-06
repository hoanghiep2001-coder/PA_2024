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
var GamePlay_1 = require("../Controller/GamePlay");
var NodesContainer_1 = require("../Controller/NodesContainer");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.NodesContainer = null;
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
        constants_1.Constants.Responsive.calculatedX = -180;
        constants_1.Constants.Responsive.calculatedY = -135;
        constants_1.Constants.Responsive.calculatedScale = 1.4;
        this.NodesContainer.OpenScene.scale = 1;
        this.NodesContainer.BG.scale = 1;
        this.NodesContainer.OpenScene.scale = 0.9;
        this.NodesContainer.Doll.x = -200;
        this.NodesContainer.Doll.y = -150;
        this.NodesContainer.Doll.scale = 1.4;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -50;
        this.NodesContainer.Opponent.x = 180;
        this.NodesContainer.Opponent.y = 25;
        this.NodesContainer.Opponent.scale = 0.4;
        this.NodesContainer.DressUpBg_1.active = false;
        this.NodesContainer.DressUpBg_2.active = true;
        this.NodesContainer.DressUpPickTray.x = 150;
        this.NodesContainer.DressUpPickTray.y = 70;
        this.NodesContainer.DressUpPickTray.scale = 0.4;
        this.NodesContainer.DressUpText.scale = 0.5;
        this.NodesContainer.DressUpText.x = 150;
        this.NodesContainer.DressUpText.y = 150;
        this.NodesContainer.DressUp_BtnInstall.scale = 0.4;
        this.NodesContainer.DressUp_BtnInstall.x = 150;
        this.NodesContainer.DressUp_BtnInstall.y = -190;
        this.NodesContainer.Btn_Submit.scale = 0.45;
        this.NodesContainer.Btn_Submit.x = 150;
        this.NodesContainer.Btn_Submit.y = -130;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.calculatedX = -180;
        constants_1.Constants.Responsive.calculatedY = -135;
        constants_1.Constants.Responsive.calculatedScale = 1.4;
        this.NodesContainer.BG.scale = 1;
        this.NodesContainer.OpenScene.scale = 0.9;
        this.NodesContainer.Doll.x = -200;
        this.NodesContainer.Doll.y = -150;
        this.NodesContainer.Doll.scale = 1.4;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -50;
        this.NodesContainer.Opponent.x = 180;
        this.NodesContainer.Opponent.y = 25;
        this.NodesContainer.Opponent.scale = 0.4;
        this.NodesContainer.DressUpBg_1.active = false;
        this.NodesContainer.DressUpBg_2.active = true;
        this.NodesContainer.DressUpPickTray.x = 120;
        this.NodesContainer.DressUpPickTray.y = 70;
        this.NodesContainer.DressUpPickTray.scale = 0.3;
        this.NodesContainer.DressUpText.scale = 0.35;
        this.NodesContainer.DressUpText.x = 120;
        this.NodesContainer.DressUpText.y = 150;
        this.NodesContainer.DressUp_BtnInstall.scale = 0.4;
        this.NodesContainer.DressUp_BtnInstall.x = 120;
        this.NodesContainer.DressUp_BtnInstall.y = -190;
        this.NodesContainer.Btn_Submit.scale = 0.45;
        this.NodesContainer.Btn_Submit.x = 120;
        this.NodesContainer.Btn_Submit.y = -120;
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
        constants_1.Constants.Responsive.calculatedX = -80;
        constants_1.Constants.Responsive.calculatedY = -205;
        constants_1.Constants.Responsive.calculatedScale = 1.05;
        this.NodesContainer.BG.scale = 1.3;
        this.NodesContainer.OpenScene.scale = 1;
        this.NodesContainer.Doll.x = -0;
        this.NodesContainer.Doll.y = -0;
        this.NodesContainer.Doll.scale = 1;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -50;
        this.NodesContainer.Opponent.x = 80;
        this.NodesContainer.Opponent.y = -85;
        this.NodesContainer.Opponent.scale = 0.3;
        this.NodesContainer.DressUpBg_1.active = true;
        this.NodesContainer.DressUpBg_1.scale = 0.45;
        this.NodesContainer.DressUpBg_2.active = false;
        this.NodesContainer.DressUpPickTray.x = 0;
        this.NodesContainer.DressUpPickTray.y = -79.6;
        this.NodesContainer.DressUpPickTray.scale = 0.3;
        this.NodesContainer.DressUpText.scale = 0.33;
        this.NodesContainer.DressUpText.x = 0;
        this.NodesContainer.DressUpText.y = -230;
        this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
        this.NodesContainer.DressUp_BtnInstall.x = 0;
        this.NodesContainer.DressUp_BtnInstall.y = -300;
        this.NodesContainer.Btn_Submit.scale = 0.35;
        this.NodesContainer.Btn_Submit.x = 100;
        this.NodesContainer.Btn_Submit.y = -10;
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
            constants_1.Constants.Responsive.calculatedX = -80;
            constants_1.Constants.Responsive.calculatedY = -155;
            constants_1.Constants.Responsive.calculatedScale = 1.05;
            this.NodesContainer.OpenScene.scale = 1;
            this.NodesContainer.Doll.x = -0;
            this.NodesContainer.Doll.y = -0;
            this.NodesContainer.Doll.scale = 1;
            this.NodesContainer.DollPoint.node.scale = 0.8;
            this.NodesContainer.DollPoint.node.y = -50;
            this.NodesContainer.Opponent.x = 80;
            this.NodesContainer.Opponent.y = -35;
            this.NodesContainer.Opponent.scale = 0.3;
            this.NodesContainer.DressUpBg_1.active = true;
            this.NodesContainer.DressUpBg_2.active = false;
            this.NodesContainer.DressUpPickTray.x = 0;
            this.NodesContainer.DressUpPickTray.y = -59.6;
            this.NodesContainer.DressUpPickTray.scale = 0.3;
            this.NodesContainer.DressUpText.scale = 0.33;
            this.NodesContainer.DressUpText.x = 0;
            this.NodesContainer.DressUpText.y = -200;
            this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
            this.NodesContainer.DressUp_BtnInstall.x = 0;
            this.NodesContainer.DressUp_BtnInstall.y = -245;
            this.NodesContainer.Btn_Submit.scale = 0.35;
            this.NodesContainer.Btn_Submit.x = 100;
            this.NodesContainer.Btn_Submit.y = -10;
        }
        else {
            constants_1.Constants.Responsive.calculatedX = -80;
            constants_1.Constants.Responsive.calculatedY = -155;
            constants_1.Constants.Responsive.calculatedScale = 0.88;
            this.NodesContainer.OpenScene.scale = 0.9;
            this.NodesContainer.Doll.x = -0;
            this.NodesContainer.Doll.y = 25;
            this.NodesContainer.Doll.scale = 0.8;
            this.NodesContainer.DollPoint.node.scale = 0.8;
            this.NodesContainer.DollPoint.node.y = -50;
            this.NodesContainer.Opponent.x = 80;
            this.NodesContainer.Opponent.y = -55;
            this.NodesContainer.Opponent.scale = 0.25;
            this.NodesContainer.DressUpBg_1.active = true;
            this.NodesContainer.DressUpBg_1.scale = 0.4;
            this.NodesContainer.DressUpBg_2.active = false;
            this.NodesContainer.DressUpPickTray.x = 0;
            this.NodesContainer.DressUpPickTray.y = -29.6;
            this.NodesContainer.DressUpPickTray.scale = 0.3;
            this.NodesContainer.DressUpText.scale = 0.33;
            this.NodesContainer.DressUpText.x = 0;
            this.NodesContainer.DressUpText.y = -170;
            this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
            this.NodesContainer.DressUp_BtnInstall.x = 0;
            this.NodesContainer.DressUp_BtnInstall.y = -210;
            this.NodesContainer.Btn_Submit.scale = 0.35;
            this.NodesContainer.Btn_Submit.x = 110;
            this.NodesContainer.Btn_Submit.y = 20;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], Responsive.prototype, "NodesContainer", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

cc._RF.pop();