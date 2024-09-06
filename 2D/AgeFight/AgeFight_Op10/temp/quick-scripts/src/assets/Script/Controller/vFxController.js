"use strict";
cc._RF.push(module, 'ea71f2bo9lAG7VjMLcpHTjW', 'vFxController');
// Script/Controller/vFxController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var VFxController = /** @class */ (function (_super) {
    __extends(VFxController, _super);
    function VFxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vFx_Booom = null;
        _this.sp_SpeedLine = null;
        _this.enemyBase = null;
        _this.enemyBaseHealth = null;
        return _this;
    }
    VFxController.prototype.start = function () {
        // this.handleShooting();
        // this.ShowSpeedLine();
    };
    VFxController.prototype.handleShooting = function () {
        var _this = this;
        cc.log("boommmmm!!!!");
        constants_1.Constants.isPauseGame = true;
        this.enemyBase.getChildByName("nha lose").active = true;
        this.enemyBase.getChildByName("baseLv2").active = false;
        this.enemyBaseHealth.active = false;
        this.vFx_Booom.active = true;
        cc.tween(this.sp_SpeedLine.node)
            .to(0.5, { opacity: 0 })
            .start();
        this.scheduleOnce(function () {
            _this.vFx_Booom.active = false;
            constants_1.Constants.isWin = true;
        }, 1.5);
    };
    VFxController.prototype.ShowSpeedLine = function () {
        cc.log("speedUp!!!!!");
        if (!constants_1.Constants.isRotate)
            return;
        this.sp_SpeedLine.node.active = true;
        cc.tween(this.sp_SpeedLine.node)
            .to(0.5, { opacity: 255 })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], VFxController.prototype, "vFx_Booom", void 0);
    __decorate([
        property(sp.Skeleton)
    ], VFxController.prototype, "sp_SpeedLine", void 0);
    __decorate([
        property(cc.Node)
    ], VFxController.prototype, "enemyBase", void 0);
    __decorate([
        property(cc.Node)
    ], VFxController.prototype, "enemyBaseHealth", void 0);
    VFxController = __decorate([
        ccclass
    ], VFxController);
    return VFxController;
}(cc.Component));
exports.default = VFxController;

cc._RF.pop();