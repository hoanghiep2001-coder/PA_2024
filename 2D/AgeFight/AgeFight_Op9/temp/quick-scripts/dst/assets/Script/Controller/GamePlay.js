
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
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var LoadFoodController_1 = require("./LoadFoodController");
var SpawnController_1 = require("./SpawnController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.LoadFoodController = null;
        _this.SpawnController = null;
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
        constants_1.Constants.food = 6;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
        cc.director.loadScene("game");
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
        constants_1.Constants.food = 6;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        this.initGame();
        cc.view.setResizeCallback(function () {
            if (constants_1.Constants.ironSource.isEndGame)
                return;
            _this.resetGame();
        });
    };
    GamePlay.prototype.spawnArmy = function (index) {
        constants_1.Constants.isPauseGame = false;
        !constants_1.Constants.isStartGame && this.LoadFoodController.increaseFood();
        !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
        constants_1.Constants.isStartGame = true;
        switch (index) {
            case 1:
                // spawn army lv1
                if (constants_1.Constants.food >= 3) {
                    constants_1.Constants.food -= 3;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEhDO1FBMUhDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUU5QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsUUFBUTtRQUNSLHVCQUFpQixHQUFZLEtBQUssQ0FBQzs7SUE2R3JDLENBQUM7SUExR1cseUJBQU0sR0FBaEI7UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGdCQUFnQixDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUMvQyw0Q0FBNEM7SUFDOUMsQ0FBQztJQUdNLDRCQUFTLEdBQWhCO1FBQ0UscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JELHFCQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFB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QUFNO1lBQ1I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7d0RBQ2lCO0lBRTlDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7cURBQ2M7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQVpELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0SDVCO0lBQUQsZUFBQztDQTVIRCxBQTRIQyxDQTVIcUMsRUFBRSxDQUFDLFNBQVMsR0E0SGpEO2tCQTVIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IExvYWRGb29kQ29udHJvbGxlciBmcm9tIFwiLi9Mb2FkRm9vZENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFNwYXduQ29udHJvbGxlciBmcm9tIFwiLi9TcGF3bkNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KExvYWRGb29kQ29udHJvbGxlcilcclxuICBMb2FkRm9vZENvbnRyb2xsZXI6IExvYWRGb29kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFNwYXduQ29udHJvbGxlcilcclxuICBTcGF3bkNvbnRyb2xsZXI6IFNwYXduQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIE5vZGVcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzQ29sbGlkZUJhc2VGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGxldCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZXNldEdhbWUoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcy5mb3JFYWNoKGFybXkgPT4gYXJteS5kZXN0cm95KCkpO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1dpbiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzTG9vc2UgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NvbGxpZGVCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgQ29uc3RhbnRzLmZvb2QgPSA2O1xyXG4gICAgQ29uc3RhbnRzLmVuZW15RGllID0gMDtcclxuICAgIENvbnN0YW50cy5jdXJyZW50Q29pbiA9IDA7XHJcbiAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCA9IDE7XHJcbiAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5hbGx5QXJtaWVzID0gW107XHJcbiAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMgPSBbXTtcclxuXHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdEdhbWUoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcy5mb3JFYWNoKGFybXkgPT4gYXJteS5kZXN0cm95KCkpO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1dpbiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzTG9vc2UgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NvbGxpZGVCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgQ29uc3RhbnRzLmZvb2QgPSA2O1xyXG4gICAgQ29uc3RhbnRzLmVuZW15RGllID0gMDtcclxuICAgIENvbnN0YW50cy5jdXJyZW50Q29pbiA9IDA7XHJcbiAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCA9IDE7XHJcbiAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5hbGx5QXJtaWVzID0gW107XHJcbiAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMgPSBbXTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5iZ1NvdW5kLnZvbHVtZSA9IDAuNTtcclxuXHJcbiAgICB0aGlzLmluaXRHYW1lKCk7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGlmKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNwYXduQXJteShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgICFDb25zdGFudHMuaXNTdGFydEdhbWUgJiYgdGhpcy5Mb2FkRm9vZENvbnRyb2xsZXIuaW5jcmVhc2VGb29kKCk7XHJcbiAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduRW5lbWllcygpO1xyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gdHJ1ZTtcclxuXHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICAvLyBzcGF3biBhcm15IGx2MVxyXG4gICAgICAgIGlmIChDb25zdGFudHMuZm9vZCA+PSAzKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSAzO1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjJcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gNCAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSA0O1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjNcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gNSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSA1O1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW4gbm90IHNwYXduXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19