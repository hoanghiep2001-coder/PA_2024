"use strict";
cc._RF.push(module, 'f60c4CpqFlH750A1K4ORO4l', 'CoinController');
// Script/Controller/CoinController.ts

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
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinController = /** @class */ (function (_super) {
    __extends(CoinController, _super);
    function CoinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.label = null;
        _this.tempEnemyDie = 0;
        _this.isTweenRunning = false;
        return _this;
    }
    CoinController.prototype.start = function () {
        // this.label.string = String(50);
    };
    CoinController.prototype.handleIncreaseCoin = function (fromValue, toValue) {
        var _this = this;
        if (this.isTweenRunning)
            return;
        constants_1.Constants.isStartGame && this.AudioManager.playSound(constants_1.Constants.SoundTrack.coinSound);
        this.label.string = String(fromValue);
        cc.tween(constants_1.Constants)
            .to(0.5, { currentCoin: toValue }, {
            progress: function (start, end, current, t) {
                var newValue = Math.floor(cc.misc.lerp(start, end, t));
                _this.label.string = newValue.toString();
                return newValue;
            },
        })
            .call(function () {
            _this.isTweenRunning = false;
        })
            .start();
    };
    CoinController.prototype.update = function (dt) {
        if (this.tempEnemyDie !== constants_1.Constants.enemyDie) {
            var toValue = constants_1.Constants.enemyDie * 10;
            this.handleIncreaseCoin(constants_1.Constants.currentCoin, toValue);
        }
        this.tempEnemyDie = constants_1.Constants.enemyDie;
    };
    __decorate([
        property(AudioManager_1.default)
    ], CoinController.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.Label)
    ], CoinController.prototype, "label", void 0);
    CoinController = __decorate([
        ccclass
    ], CoinController);
    return CoinController;
}(cc.Component));
exports.default = CoinController;

cc._RF.pop();