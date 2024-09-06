"use strict";
cc._RF.push(module, 'fe46aRT4+tC+aNQcYlNw6Y+', 'SpawnController');
// Script/Controller/SpawnController.ts

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
var Ultils_1 = require("../Data/Ultils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpawnController = /** @class */ (function (_super) {
    __extends(SpawnController, _super);
    function SpawnController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BasePlayer = null;
        _this.AllyPoints = [];
        _this.EnemyPoints = [];
        _this.Army_Lv1 = null;
        _this.Army_Lv2 = null;
        _this.Army_Lv3 = null;
        _this.enemySpawnTime = 1;
        _this.isReduce = false;
        return _this;
    }
    SpawnController.prototype.start = function () {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
        constants_1.Constants.isUpgrade = true;
        this.spawnTank();
    };
    SpawnController.prototype.spawnTank = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var random = 2;
            var newArmy;
            newArmy = cc.instantiate(_this.Army_Lv3);
            constants_1.Constants.allyArmies.push(newArmy);
            // caculate Scale
            newArmy.scale = constants_1.Constants.scaleArmy;
            // set Pos
            var point = _this.AllyPoints[random];
            point.parent.addChild(newArmy);
            newArmy.setSiblingIndex(0);
            newArmy.setPosition(point.getPosition());
            // set skin & group
            newArmy.group = "Ally";
            var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
            spine.timeScale = 0.9;
            constants_1.Constants.isSpawnTank = true;
            cc.log("Spawned Tank!");
        }, 0.5);
    };
    SpawnController.prototype.SpawnEnemies = function () {
        var _this = this;
        this.schedule(function () {
            var random = Ultils_1.RandomRangeInt(1, 3);
            if (constants_1.Constants.isPauseGame || constants_1.Constants.shootCount >= 2)
                return;
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, random);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin, level) {
        // if((Constants.isCanBuyArmyLv3 || Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
        //     console.log("up spawn time");
        //     this.enemySpawnTime = 1.5;
        // }
        var random = Ultils_1.RandomRangeInt(0, 5);
        // create Army
        var newArmy = null;
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
                break;
            default:
                break;
        }
        constants_1.Constants.enemyArmies.push(newArmy);
        // caculate Scale
        newArmy.scaleX = -constants_1.Constants.scaleArmy;
        newArmy.scaleY = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.EnemyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Enemy";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        console.log("Enemy - Group: " + newArmy.group);
    };
    SpawnController.prototype.SpawnPlayerArmy = function (skin, level) {
        var random = Ultils_1.RandomRangeInt(0, 5);
        var newArmy;
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
                break;
            case 3:
                newArmy = cc.instantiate(this.Army_Lv3);
                break;
            default:
                break;
        }
        // create Army
        constants_1.Constants.allyArmies.push(newArmy);
        console.log("Allies:" + constants_1.Constants.allyArmies.length);
        // caculate Scale
        newArmy.scale = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.AllyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        // newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Ally";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9;
    };
    __decorate([
        property(cc.Node)
    ], SpawnController.prototype, "BasePlayer", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "AllyPoints", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "EnemyPoints", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv3", void 0);
    SpawnController = __decorate([
        ccclass
    ], SpawnController);
    return SpawnController;
}(cc.Component));
exports.default = SpawnController;

cc._RF.pop();