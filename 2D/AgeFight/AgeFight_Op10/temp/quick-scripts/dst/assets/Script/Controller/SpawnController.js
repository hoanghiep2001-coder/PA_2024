
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/SpawnController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTcGF3bkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHNDQUFpQztBQUVqQyx5Q0FBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE0SkM7UUExSkcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFFM0IsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFHNUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0IsY0FBUSxHQUFZLEtBQUssQ0FBQTs7SUEwSTdCLENBQUM7SUF2SWEsK0JBQUssR0FBZjtRQUNJLG1FQUFtRTtRQUNuRSxpREFBaUQ7UUFFakQscUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR08sbUNBQVMsR0FBakI7UUFBQSxpQkF5QkM7UUF4QkcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksT0FBZ0IsQ0FBQztZQUNyQixPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFeEMscUJBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5DLGlCQUFpQjtZQUNqQixPQUFPLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMsU0FBUyxDQUFD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QyxjQUFJLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUd6QyxtQkFBbUI7UUFDbkIsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQXpKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3VEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBZFYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTRKbkM7SUFBRCxzQkFBQztDQTVKRCxBQTRKQyxDQTVKNEMsRUFBRSxDQUFDLFNBQVMsR0E0SnhEO2tCQTVKb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXJteSBmcm9tIFwiLi4vT3RoZXIvQXJteVwiO1xyXG5cclxuaW1wb3J0IHsgUmFuZG9tUmFuZ2VJbnQgfSBmcm9tIFwiLi4vRGF0YS9VbHRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGF3bkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCYXNlUGxheWVyOiBjYy5Ob2RlICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEFsbHlQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEVuZW15UG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteV9MdjE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteV9MdjI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteV9MdjM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgZW5lbXlTcGF3blRpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgaXNSZWR1Y2U6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSBDb25zdGFudHMuZW5lbXlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIC8vIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15KTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVXBncmFkZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25UYW5rKCk7XHJcbiAgICB9ICBcclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgc3Bhd25UYW5rKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IDI7XHJcbiAgICAgICAgICAgIGxldCBuZXdBcm15OiBjYy5Ob2RlO1xyXG4gICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2Myk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5wdXNoKG5ld0FybXkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY2FjdWxhdGUgU2NhbGVcclxuICAgICAgICAgICAgbmV3QXJteS5zY2FsZSA9IENvbnN0YW50cy5zY2FsZUFybXk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMuQWxseVBvaW50c1tyYW5kb21dO1xyXG4gICAgICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgICAgIG5ld0FybXkuc2V0U2libGluZ0luZGV4KDApO1xyXG4gICAgICAgICAgICBuZXdBcm15LnNldFBvc2l0aW9uKHBvaW50LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgICAgICBuZXdBcm15Lmdyb3VwID0gXCJBbGx5XCI7XHJcbiAgICAgICAgICAgIGxldCBzcGluZSA9IG5ld0FybXkuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICBzcGluZS50aW1lU2NhbGUgPSAwLjk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1NwYXduVGFuayA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5sb2coXCJTcGF3bmVkIFRhbmshXCIpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTcGF3bkVuZW1pZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBSYW5kb21SYW5nZUludCgxLCAzKTtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pc1BhdXNlR2FtZSB8fCBDb25zdGFudHMuc2hvb3RDb3VudCA+PSAyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15LCByYW5kb20pO1xyXG4gICAgICAgIH0sIHRoaXMuZW5lbXlTcGF3blRpbWUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU3Bhd25FbmVteUFybXkoc2tpbjogc3RyaW5nLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmKChDb25zdGFudHMuaXNDYW5CdXlBcm15THYzIHx8IENvbnN0YW50cy5pc1VwZ3JhZGUpICYmIHRoaXMuZW5lbXlTcGF3blRpbWUgPT09IDAuMykge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInVwIHNwYXduIHRpbWVcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15U3Bhd25UaW1lID0gMS41O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IFJhbmRvbVJhbmdlSW50KDAsIDUpXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBBcm15XHJcbiAgICAgICAgbGV0IG5ld0FybXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5lbmVteUFybWllcy5wdXNoKG5ld0FybXkpO1xyXG5cclxuICAgICAgICAvLyBjYWN1bGF0ZSBTY2FsZVxyXG4gICAgICAgIG5ld0FybXkuc2NhbGVYID0gLUNvbnN0YW50cy5zY2FsZUFybXk7XHJcbiAgICAgICAgbmV3QXJteS5zY2FsZVkgPSBDb25zdGFudHMuc2NhbGVBcm15O1xyXG5cclxuICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5FbmVteVBvaW50c1tyYW5kb21dO1xyXG4gICAgICAgIGxldCBhcm15Q29tcG9uZW50ID0gbmV3QXJteS5nZXRDb21wb25lbnQoQXJteSk7XHJcbiAgICAgICAgcG9pbnQucGFyZW50LmFkZENoaWxkKG5ld0FybXkpO1xyXG4gICAgICAgIG5ld0FybXkuc2V0U2libGluZ0luZGV4KDApO1xyXG4gICAgICAgIG5ld0FybXkuc2V0UG9zaXRpb24ocG9pbnQuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBza2luICYgZ3JvdXBcclxuICAgICAgICBhcm15Q29tcG9uZW50LnNraW4gPSBza2luO1xyXG4gICAgICAgIG5ld0FybXkuZ3JvdXAgPSBcIkVuZW15XCI7XHJcbiAgICAgICAgbGV0IHNwaW5lID0gbmV3QXJteS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgc3BpbmUuc2V0U2tpbihza2luKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVuZW15IC0gR3JvdXA6IFwiICsgbmV3QXJteS5ncm91cCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTcGF3blBsYXllckFybXkoc2tpbjogc3RyaW5nLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IFJhbmRvbVJhbmdlSW50KDAsIDUpXHJcbiAgICAgICAgbGV0IG5ld0FybXk6IGNjLk5vZGU7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIEFybXlcclxuICAgICAgIFxyXG4gICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLnB1c2gobmV3QXJteSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGxpZXM6XCIgKyBDb25zdGFudHMuYWxseUFybWllcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAvLyBjYWN1bGF0ZSBTY2FsZVxyXG4gICAgICAgIG5ld0FybXkuc2NhbGUgPSBDb25zdGFudHMuc2NhbGVBcm15O1xyXG5cclxuICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5BbGx5UG9pbnRzW3JhbmRvbV07XHJcbiAgICAgICAgbGV0IGFybXlDb21wb25lbnQgPSBuZXdBcm15LmdldENvbXBvbmVudChBcm15KTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgLy8gbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIGFybXlDb21wb25lbnQuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiQWxseVwiO1xyXG4gICAgICAgIGxldCBzcGluZSA9IG5ld0FybXkuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHNwaW5lLnNldFNraW4oc2tpbik7XHJcbiAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMC45O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==