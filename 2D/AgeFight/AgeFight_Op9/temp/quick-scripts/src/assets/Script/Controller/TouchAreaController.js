"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var IronSource_1 = require("../Data/IronSource");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // Node
        _this.CTA = null;
        _this.hidemask = null;
        _this.hand = null;
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        _this.btn_upgrade = null;
        _this.btn_BuyArmys = [];
        _this.ps_upgrade = [];
        _this.Lv1Troops = [];
        _this.Lv2Troops = [];
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
        // this.Lv2Troops.forEach(troop => troop.active = false);
    };
    TouchAreaController.prototype.registerEvent = function () {
        // hidemask
        // this.hidemask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _this = this;
        var _loop_1 = function (index) {
            var btn = this_1.btn_SpawnArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                if (constants_1.Constants.isLoose || constants_1.Constants.isWin || _this.CTA.active)
                    return;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                _this.GamePlay.spawnArmy(index + 1);
                _this.hand.active = false;
                // this.IronSource.handleIronSourcePlaySound();
            }, this_1);
        };
        var this_1 = this;
        // btn spawn army
        for (var index = 0; index < this.btn_SpawnArmys.length; index++) {
            _loop_1(index);
        }
        ;
        var _loop_2 = function (index) {
            var btn = this_2.btn_BuyArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                // handle buy lv2 army
                if (index === 0) {
                    if (constants_1.Constants.currentCoin >= 60) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv2 = true;
                        constants_1.Constants.enemyDie -= 2;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
                // handle buy lv3 army
                else {
                    if (constants_1.Constants.currentCoin >= 90) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv3 = true;
                        constants_1.Constants.enemyDie -= 3;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
            }, this_2);
        };
        var this_2 = this;
        // btn buy army
        for (var index = 0; index < this.btn_BuyArmys.length; index++) {
            _loop_2(index);
        }
        // btn upgrade
        // this.btn_upgrade.on(cc.Node.EventType.TOUCH_START, () => {
        //   this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
        //   if (Constants.currentCoin >= 120) {
        //     console.log("Upgraded");
        //     Constants.isUpgrade = true;
        //     Constants.enemyDie -= 4;
        //     this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
        //     this.btn_upgrade.parent.active = false;
        //     this.ps_upgrade.forEach(ps => ps.resetSystem());
        //     this.Lv2Troops.forEach(troop => troop.active = true);
        //     this.Lv1Troops.forEach(troop => troop.active = false);
        //   } else {
        //     console.log("Fail");
        //   }
        // }, this);
        // btn install
        // this.btn_install.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hidemask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_BuyArmys", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], TouchAreaController.prototype, "ps_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv1Troops", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv2Troops", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();