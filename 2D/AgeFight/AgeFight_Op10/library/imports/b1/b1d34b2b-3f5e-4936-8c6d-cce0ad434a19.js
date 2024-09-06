"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var Army_1 = require("../Other/Army");
var AudioManager_1 = require("../Plugin/AudioManager");
var CmoboController_1 = require("./CmoboController");
var GameController_1 = require("./GameController");
var LoadFoodController_1 = require("./LoadFoodController");
var SpawnController_1 = require("./SpawnController");
var vFxController_1 = require("./vFxController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.LoadFoodController = null;
        _this.SpawnController = null;
        _this.ComboController = null;
        _this.VFxController = null;
        // Node
        _this.CTA = null;
        // state
        _this.isCollideBaseFlag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
    };
    GamePlay.prototype.resetGame = function () {
        constants_1.Constants.allyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.enemyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.isStartGame = false;
        constants_1.Constants.isPauseGame = false;
        constants_1.Constants.isCanBuyArmyLv2 = false;
        constants_1.Constants.isCanBuyArmyLv3 = false;
        constants_1.Constants.isUpgrade = false;
        constants_1.Constants.isWin = false;
        constants_1.Constants.isLoose = false;
        constants_1.Constants.isCollideBase = false;
        constants_1.Constants.isFiveBroInTank = false;
        constants_1.Constants.food = 15;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.comboCount = 0;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
        cc.director.loadScene("game_Hor");
    };
    GamePlay.prototype.initGame = function () {
        constants_1.Constants.allyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.enemyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.isStartGame = false;
        constants_1.Constants.isPauseGame = false;
        constants_1.Constants.isCanBuyArmyLv2 = false;
        constants_1.Constants.isCanBuyArmyLv3 = false;
        constants_1.Constants.isUpgrade = false;
        constants_1.Constants.isWin = false;
        constants_1.Constants.isLoose = false;
        constants_1.Constants.isCollideBase = false;
        constants_1.Constants.isFiveBroInTank = false;
        constants_1.Constants.food = 15;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.comboCount = 0;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        this.initGame();
        this.node.on('Shooting', function () {
            _this.VFxController.handleShooting();
        }, this);
        this.node.on('ShowSpeedLine', function () {
            _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.bgSound);
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Bg_Attack);
            _this.AudioManager.Bg_Attack.volume = 0.5;
            _this.VFxController.ShowSpeedLine();
        }, this);
        cc.view.setResizeCallback(function () {
            if (constants_1.Constants.ironSource.isEndGame || constants_1.Constants.isWin || constants_1.Constants.isLoose)
                return;
            _this.resetGame();
        });
    };
    GamePlay.prototype.spawnArmy = function (index) {
        constants_1.Constants.isPauseGame = false;
        // !Constants.isStartGame && this.LoadFoodController.increaseFood();
        !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
        constants_1.Constants.isStartGame = true;
        switch (index) {
            case 1:
                // spawn army lv1
                if (constants_1.Constants.food >= 3) {
                    constants_1.Constants.food -= 3;
                    constants_1.Constants.comboCount += 1;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 1);
                    this.ComboController.handleShowCombo();
                }
                break;
            case 2:
                // spawn army lv2
                if (constants_1.Constants.food >= 4 && constants_1.Constants.isCanBuyArmyLv2) {
                    constants_1.Constants.food -= 4;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 2);
                }
                break;
            case 3:
                // spawn army lv3
                if (constants_1.Constants.food >= 5 && constants_1.Constants.isCanBuyArmyLv3) {
                    constants_1.Constants.food -= 5;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 3);
                }
                break;
            default:
                console.log("can not spawn");
                break;
        }
    };
    GamePlay.prototype.HandleFiveBroInTank = function () {
        if (constants_1.Constants.isFiveBroInTank)
            return;
        constants_1.Constants.isFiveBroInTank = true;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        var Troops = [];
        var Tank = null;
        constants_1.Constants.allyArmies.forEach(function (army) {
            if (army.name === "Army2_Lv1")
                Troops.push(army);
            if (army.name === "Army_Lv3")
                Tank = army;
        });
        // cho mấy thằng lính hợp thể vào tank.
        Troops.forEach(function (troop) {
            cc.tween(troop)
                .to(0.5, { x: Tank.x, y: Tank.y })
                .call(function () {
                constants_1.Constants.troopsInTankCount += 1;
                // set anim run cho lính
                troop.getComponent(Army_1.default).spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
                // cho xe tăng chạy nếu đã đủ lính
                if (constants_1.Constants.troopsInTankCount >= 5)
                    constants_1.Constants.isTankCanRun = true;
                troop.active = false;
            })
                .start();
        });
    };
    GamePlay.prototype.isSpawn5Troops = function () {
        var result = false;
        if (constants_1.Constants.troopsSpawnLeftCount < 0)
            return true;
        return result;
    };
    GamePlay.prototype.activeCTA = function () {
        cc.log("show CTA");
        this.CTA.active = true;
        constants_1.Constants.isActiveCTA = true;
    };
    GamePlay.prototype.update = function (dt) {
        this.isSpawn5Troops() && this.HandleFiveBroInTank();
        if ((constants_1.Constants.isLoose || constants_1.Constants.isWin) && !constants_1.Constants.isActiveCTA) {
            this.activeCTA();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(LoadFoodController_1.default)
    ], GamePlay.prototype, "LoadFoodController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], GamePlay.prototype, "SpawnController", void 0);
    __decorate([
        property(CmoboController_1.default)
    ], GamePlay.prototype, "ComboController", void 0);
    __decorate([
        property(vFxController_1.default)
    ], GamePlay.prototype, "VFxController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();