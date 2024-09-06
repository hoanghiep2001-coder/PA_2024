
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsc0NBQWlDO0FBQ2pDLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsbURBQWtEO0FBQ2xELDJEQUFzRDtBQUN0RCxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOE1DO1FBNU1DLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUU5QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFHeEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxPQUFPO1FBRVAsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixRQUFRO1FBQ1IsdUJBQWlCLEdBQVksS0FBSyxDQUFDOztJQXlMckMsQ0FBQztJQXRMVyx5QkFBTSxHQUFoQjtRQUNFLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pELGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDaEMsZ0JBQWdCLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLDRDQUE0QztJQUM5QyxDQUFDO0lBR00sNEJBQVMsR0FBaEI7UUFDRSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDckQscUJBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBRXRELHFCQUFTLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM5QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDOUIscUJBQVMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLHFCQUFTLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxxQkFBUyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUIscUJBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQixxQkFBUyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDaEMscUJBQVMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRWxDLHFCQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNwQixxQkFBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdkIscUJBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHFCQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUM1QixxQkFBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDM0IscUJBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLHFCQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUMxQixxQkFBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdPLDJCQUFRLEdBQWhCO1FBQ0UscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JELHFCQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUV0RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDOUIscUJBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzlCLHFCQUFTLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxxQkFBUyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMscUJBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHFCQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN4QixxQkFBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDMUIscUJBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLHFCQUFTLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUVsQyxxQkFBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEIscUJBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUMxQixxQkFBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDNUIscUJBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLHFCQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUV6QixxQkFBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDMUIscUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUN2QixLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUM1QixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1RCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN4QixJQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxxQkFBUyxDQUFDLEtBQUssSUFBSSxxQkFBUyxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUNsRixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR00sNEJBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDOUIsb0VBQW9FO1FBQ3BFLENBQUMscUJBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFN0IsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUM7Z0JBQ0osaUJBQWlCO2dCQUNqQixJQUFJLHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDdkIscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNwQixxQkFBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEM7Z0JBRUQsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixpQkFBaUI7Z0JBQ2pCLElBQUkscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFO29CQUNwRCxxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssQ0FBQztnQkFDSixpQkFBaUI7Z0JBQ2pCLElBQUkscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFO29CQUNwRCxxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Z0JBQ0QsTUFBTTtZQUNSO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07U0FDVDtJQUNILENBQUM7SUFHTyxzQ0FBbUIsR0FBM0I7UUFDRSxJQUFJLHFCQUFTLENBQUMsZUFBZTtZQUFFLE9BQU87UUFFdEMscUJBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRWpDLDZEQUE2RDtRQUU3RCxJQUFJLE1BQU0sR0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO1FBRXpCLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDL0IsSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7Z0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVTtnQkFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2xCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDO2lCQUMvQixJQUFJLENBQUM7Z0JBQ0oscUJBQVMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUM7Z0JBRWpDLHdCQUF3QjtnQkFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTdFLGtDQUFrQztnQkFDbEMsSUFBRyxxQkFBUyxDQUFDLGlCQUFpQixJQUFJLENBQUM7b0JBQUUscUJBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUVuRSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUNFLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztRQUM1QixJQUFJLHFCQUFTLENBQUMsb0JBQW9CLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFHTyw0QkFBUyxHQUFqQjtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDcEQsSUFBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxJQUFJLHFCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRTtZQUNuRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBMU1EO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQzt3REFDaUI7SUFFOUM7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQztxREFDYztJQUd4QztRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3FEQUNjO0lBR3hDO1FBREMsUUFBUSxDQUFDLHVCQUFhLENBQUM7bURBQ1k7SUFJcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQWxCRCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOE01QjtJQUFELGVBQUM7Q0E5TUQsQUE4TUMsQ0E5TXFDLEVBQUUsQ0FBQyxTQUFTLEdBOE1qRDtrQkE5TW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEFybXkgZnJvbSBcIi4uL090aGVyL0FybXlcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29tYm9Db250cm9sbGVyIGZyb20gXCIuL0Ntb2JvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBMb2FkRm9vZENvbnRyb2xsZXIgZnJvbSBcIi4vTG9hZEZvb2RDb250cm9sbGVyXCI7XHJcbmltcG9ydCBTcGF3bkNvbnRyb2xsZXIgZnJvbSBcIi4vU3Bhd25Db250cm9sbGVyXCI7XHJcbmltcG9ydCBWRnhDb250cm9sbGVyIGZyb20gXCIuL3ZGeENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KExvYWRGb29kQ29udHJvbGxlcilcclxuICBMb2FkRm9vZENvbnRyb2xsZXI6IExvYWRGb29kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFNwYXduQ29udHJvbGxlcilcclxuICBTcGF3bkNvbnRyb2xsZXI6IFNwYXduQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShDb21ib0NvbnRyb2xsZXIpXHJcbiAgQ29tYm9Db250cm9sbGVyOiBDb21ib0NvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoVkZ4Q29udHJvbGxlcilcclxuICBWRnhDb250cm9sbGVyOiBWRnhDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNDb2xsaWRlQmFzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgbGV0IGNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHJlc2V0R2FtZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcbiAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMuZm9yRWFjaChhcm15ID0+IGFybXkuZGVzdHJveSgpKTtcclxuXHJcbiAgICBDb25zdGFudHMuaXNTdGFydEdhbWUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MyA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzVXBncmFkZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzV2luID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNMb29zZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ29sbGlkZUJhc2UgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0ZpdmVCcm9JblRhbmsgPSBmYWxzZTtcclxuXHJcbiAgICBDb25zdGFudHMuZm9vZCA9IDE1O1xyXG4gICAgQ29uc3RhbnRzLmVuZW15RGllID0gMDtcclxuICAgIENvbnN0YW50cy5jdXJyZW50Q29pbiA9IDA7XHJcbiAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCA9IDE7XHJcbiAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5jb21ib0NvdW50ID0gMDtcclxuXHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcyA9IFtdO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzID0gW107XHJcblxyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV9Ib3JcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0R2FtZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcbiAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMuZm9yRWFjaChhcm15ID0+IGFybXkuZGVzdHJveSgpKTtcclxuXHJcbiAgICBDb25zdGFudHMuaXNTdGFydEdhbWUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2MyA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzVXBncmFkZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzV2luID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNMb29zZSA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzQ29sbGlkZUJhc2UgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0ZpdmVCcm9JblRhbmsgPSBmYWxzZTtcclxuXHJcbiAgICBDb25zdGFudHMuZm9vZCA9IDE1O1xyXG4gICAgQ29uc3RhbnRzLmVuZW15RGllID0gMDtcclxuICAgIENvbnN0YW50cy5jdXJyZW50Q29pbiA9IDA7XHJcbiAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCA9IDE7XHJcbiAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5jb21ib0NvdW50ID0gMDtcclxuXHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcyA9IFtdO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzID0gW107XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuYmdTb3VuZC52b2x1bWUgPSAwLjU7XHJcblxyXG4gICAgdGhpcy5pbml0R2FtZSgpO1xyXG5cclxuICAgIHRoaXMubm9kZS5vbignU2hvb3RpbmcnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuVkZ4Q29udHJvbGxlci5oYW5kbGVTaG9vdGluZygpO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5ub2RlLm9uKCdTaG93U3BlZWRMaW5lJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5CZ19BdHRhY2spO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5CZ19BdHRhY2sudm9sdW1lID0gMC41O1xyXG4gICAgICB0aGlzLlZGeENvbnRyb2xsZXIuU2hvd1NwZWVkTGluZSgpO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGlmKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSB8fCBDb25zdGFudHMuaXNXaW4gfHwgQ29uc3RhbnRzLmlzTG9vc2UpIHJldHVybjtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzcGF3bkFybXkoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gZmFsc2U7XHJcbiAgICAvLyAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuTG9hZEZvb2RDb250cm9sbGVyLmluY3JlYXNlRm9vZCgpO1xyXG4gICAgIUNvbnN0YW50cy5pc1N0YXJ0R2FtZSAmJiB0aGlzLlNwYXduQ29udHJvbGxlci5TcGF3bkVuZW1pZXMoKTtcclxuICAgIENvbnN0YW50cy5pc1N0YXJ0R2FtZSA9IHRydWU7XHJcblxyXG4gICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjFcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gMykge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gMztcclxuICAgICAgICAgIENvbnN0YW50cy5jb21ib0NvdW50ICs9IDE7XHJcbiAgICAgICAgICB0aGlzLlNwYXduQ29udHJvbGxlci5TcGF3blBsYXllckFybXkoQ29uc3RhbnRzLkFybXlTa2luLkFsbHksIDEpO1xyXG4gICAgICAgICAgdGhpcy5Db21ib0NvbnRyb2xsZXIuaGFuZGxlU2hvd0NvbWJvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIC8vIHNwYXduIGFybXkgbHYyXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5mb29kID49IDQgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mikge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gNDtcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIC8vIHNwYXduIGFybXkgbHYzXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5mb29kID49IDUgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mykge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gNTtcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIG5vdCBzcGF3blwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIEhhbmRsZUZpdmVCcm9JblRhbmsoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzRml2ZUJyb0luVGFuaykgcmV0dXJuO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0ZpdmVCcm9JblRhbmsgPSB0cnVlO1xyXG5cclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuXHJcbiAgICBsZXQgVHJvb3BzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIGxldCBUYW5rOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcy5mb3JFYWNoKGFybXkgPT4ge1xyXG4gICAgICBpZihhcm15Lm5hbWUgPT09IFwiQXJteTJfTHYxXCIpIFRyb29wcy5wdXNoKGFybXkpO1xyXG4gICAgICBpZihhcm15Lm5hbWUgPT09IFwiQXJteV9MdjNcIikgVGFuayA9IGFybXk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaG8gbeG6pXkgdGjhurFuZyBsw61uaCBo4bujcCB0aOG7gyB2w6BvIHRhbmsuXHJcbiAgICBUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB7XHJcbiAgICAgIGNjLnR3ZWVuKHRyb29wKVxyXG4gICAgICAudG8oMC41LCB7eDogVGFuay54LCB5OiBUYW5rLnl9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgQ29uc3RhbnRzLnRyb29wc0luVGFua0NvdW50ICs9IDE7XHJcblxyXG4gICAgICAgIC8vIHNldCBhbmltIHJ1biBjaG8gbMOtbmhcclxuICAgICAgICB0cm9vcC5nZXRDb21wb25lbnQoQXJteSkuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBjaG8geGUgdMSDbmcgY2jhuqF5IG7hur91IMSRw6MgxJHhu6cgbMOtbmhcclxuICAgICAgICBpZihDb25zdGFudHMudHJvb3BzSW5UYW5rQ291bnQgPj0gNSkgQ29uc3RhbnRzLmlzVGFua0NhblJ1biA9IHRydWU7XHJcblxyXG4gICAgICAgIHRyb29wLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpc1NwYXduNVRyb29wcygpOiBib29sZWFuIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlmIChDb25zdGFudHMudHJvb3BzU3Bhd25MZWZ0Q291bnQgPCAwKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVDVEEoKTogdm9pZCB7XHJcbiAgICBjYy5sb2coXCJzaG93IENUQVwiKTtcclxuICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBDb25zdGFudHMuaXNBY3RpdmVDVEEgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pc1NwYXduNVRyb29wcygpICYmIHRoaXMuSGFuZGxlRml2ZUJyb0luVGFuaygpO1xyXG4gICAgaWYoKENvbnN0YW50cy5pc0xvb3NlIHx8IENvbnN0YW50cy5pc1dpbikgJiYgIUNvbnN0YW50cy5pc0FjdGl2ZUNUQSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUNUQSgpO1xyXG4gICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=