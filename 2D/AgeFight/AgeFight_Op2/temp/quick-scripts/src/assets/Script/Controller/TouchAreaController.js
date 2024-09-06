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
var Army_1 = require("../Other/Army");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var SpawnController_1 = require("./SpawnController");
var SupporterController_1 = require("./SupporterController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.SupporterController = null;
        _this.SpawnController = null;
        _this.IronSource = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // Node
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var btn = this_1.btn_SpawnArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                !constants_1.Constants.isStartGame && _this.SpawnController.SpawnAllies();
                !constants_1.Constants.isStartGame && _this.SpawnController.SpawnEnemies();
                !constants_1.Constants.isStartGame && _this.activeAnimForAllCurrentArmies();
                constants_1.Constants.isStartGame = true;
                index === 0 && _this.activeSupporter(10, constants_1.Constants.isBuySupportLv1, index, btn, 1);
                index === 1 && _this.activeSupporter(30, constants_1.Constants.isBuySupportLv2, index, btn, 3);
                index === 2 && _this.activeSupporter(50, constants_1.Constants.isBuySupportLv3, index, btn, 5);
                _this.IronSource.handleIronSourcePlaySound();
            }, this_1);
        };
        var this_1 = this;
        // btn spawn army
        for (var index = 0; index < this.btn_SpawnArmys.length; index++) {
            _loop_1(index);
        }
        ;
    };
    TouchAreaController.prototype.activeAnimForAllCurrentArmies = function () {
        for (var index = 0; index < constants_1.Constants.allyArmies.length; index++) {
            var army = constants_1.Constants.allyArmies[index];
            army.getComponent(Army_1.default).activeRunAnim();
        }
        for (var index = 0; index < constants_1.Constants.allyArmies.length; index++) {
            var army = constants_1.Constants.allyArmies[index];
            army.getComponent(Army_1.default).activeRunAnim();
        }
    };
    TouchAreaController.prototype.activeSupporter = function (target, StoreboolCondition, index, btn, StoreDisCount) {
        if (constants_1.Constants.currentCoin >= target && !StoreboolCondition) {
            console.log("buyed");
            StoreboolCondition = true;
            constants_1.Constants.enemyDie -= StoreDisCount;
            this.SupporterController.activeSupporter(index);
            btn.getChildByName("canChoose").opacity = 0;
            btn.off(cc.Node.EventType.TOUCH_START);
        }
    };
    __decorate([
        property(SupporterController_1.default)
    ], TouchAreaController.prototype, "SupporterController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], TouchAreaController.prototype, "SpawnController", void 0);
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
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();