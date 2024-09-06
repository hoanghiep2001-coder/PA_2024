
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpawnController = /** @class */ (function (_super) {
    __extends(SpawnController, _super);
    function SpawnController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CreatedAllies = [];
        _this.CreatedEnemies = [];
        _this.AllyPoints = [];
        _this.EnemyPoints = [];
        _this.Army_Lv1 = null;
        _this.Army_Lv2 = null;
        _this.Army_Lv3 = null;
        _this.Enemy_Lv1 = null;
        _this.Enemy_Lv2 = null;
        _this.Enemy_Lv3 = null;
        return _this;
    }
    SpawnController.prototype.start = function () {
        var _a, _b;
        (_a = constants_1.Constants.allyArmies).push.apply(_a, this.CreatedAllies);
        for (var index = 0; index < constants_1.Constants.allyArmies.length; index++) {
            var army = constants_1.Constants.allyArmies[index];
            army.getComponent(Army_1.default).skin = constants_1.Constants.ArmySkin.Ally;
        }
        (_b = constants_1.Constants.enemyArmies).push.apply(_b, this.CreatedEnemies);
        for (var index = 0; index < constants_1.Constants.enemyArmies.length; index++) {
            var army = constants_1.Constants.enemyArmies[index];
            army.getComponent(Army_1.default).skin = constants_1.Constants.ArmySkin.Enemy;
        }
    };
    SpawnController.prototype.SpawnEnemies = function () {
        this.schedule(function () {
            if (constants_1.Constants.isPauseGame)
                return;
            this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy);
        }, 3, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnAllies = function () {
        this.schedule(function () {
            if (constants_1.Constants.isPauseGame)
                return;
            var random = cc.math.randomRangeInt(2, 4);
            this.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, random);
        }, 1.2, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin) {
        var random = cc.math.randomRangeInt(0, 3);
        // create Army
        var newArmy = cc.instantiate(this.Army_Lv2);
        constants_1.Constants.enemyArmies.push(newArmy);
        // caculate Scale
        newArmy.scaleX = -constants_1.Constants.scaleArmy;
        newArmy.scaleY = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.EnemyPoints[random];
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        newArmy.getComponent(Army_1.default).skin = skin;
        newArmy.group = "Enemy";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
    };
    SpawnController.prototype.SpawnPlayerArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 3);
        var newArmy;
        // create Army
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
        constants_1.Constants.allyArmies.push(newArmy);
        console.log("Allies:" + constants_1.Constants.allyArmies.length);
        // caculate Scale
        newArmy.scale = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.AllyPoints[random];
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        newArmy.getComponent(Army_1.default).skin = skin;
        newArmy.group = "Ally";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.95;
    };
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "CreatedAllies", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "CreatedEnemies", void 0);
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
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Enemy_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Enemy_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Enemy_Lv3", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTcGF3bkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHNDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTZIQztRQTFIRyxtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUcvQixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFjLElBQUksQ0FBQzs7SUFxR2hDLENBQUM7SUFsR2EsK0JBQUssR0FBZjs7UUFDSSxDQUFBLEtBQUEscUJBQVMsQ0FBQyxVQUFVLENBQUEsQ0FBQyxJQUFJLFdBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNqRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcscUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlELElBQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUMxRDtRQUVELENBQUEsS0FBQSxxQkFBUyxDQUFDLFdBQVcsQ0FB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QUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQXZIRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzswREFDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzsyREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt1REFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3REFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUTtJQXhCWCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNkhuQztJQUFELHNCQUFDO0NBN0hELEFBNkhDLENBN0g0QyxFQUFFLENBQUMsU0FBUyxHQTZIeEQ7a0JBN0hvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBcm15IGZyb20gXCIuLi9PdGhlci9Bcm15XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bhd25Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgQ3JlYXRlZEFsbGllczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgQ3JlYXRlZEVuZW1pZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBBbGx5UG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBFbmVteVBvaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXlfTHYxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXlfTHYyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXlfTHYzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBFbmVteV9MdjE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlfTHYyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEVuZW15X0x2MzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLnB1c2goLi4udGhpcy5DcmVhdGVkQWxsaWVzKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQ29uc3RhbnRzLmFsbHlBcm1pZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFybXkgPSBDb25zdGFudHMuYWxseUFybWllc1tpbmRleF07XHJcbiAgICAgICAgICAgIGFybXkuZ2V0Q29tcG9uZW50KEFybXkpLnNraW4gPSBDb25zdGFudHMuQXJteVNraW4uQWxseTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5lbmVteUFybWllcy5wdXNoKC4uLnRoaXMuQ3JlYXRlZEVuZW1pZXMpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBDb25zdGFudHMuZW5lbXlBcm1pZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFybXkgPSBDb25zdGFudHMuZW5lbXlBcm1pZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBhcm15LmdldENvbXBvbmVudChBcm15KS5za2luID0gQ29uc3RhbnRzLkFybXlTa2luLkVuZW15O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pc1BhdXNlR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLlNwYXduRW5lbXlBcm15KENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSk7XHJcbiAgICAgICAgfSwgMywgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDAuMik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTcGF3bkFsbGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pc1BhdXNlR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgyLCA0KTtcclxuICAgICAgICAgICAgdGhpcy5TcGF3blBsYXllckFybXkoQ29uc3RhbnRzLkFybXlTa2luLkFsbHksIHJhbmRvbSk7XHJcbiAgICAgICAgfSwgMS4yLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC4yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduRW5lbXlBcm15KHNraW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDAsIDMpXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBBcm15XHJcbiAgICAgICAgbGV0IG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYyKTtcclxuICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMucHVzaChuZXdBcm15KTtcclxuXHJcbiAgICAgICAgLy8gY2FjdWxhdGUgU2NhbGVcclxuICAgICAgICBuZXdBcm15LnNjYWxlWCA9IC1Db25zdGFudHMuc2NhbGVBcm15O1xyXG4gICAgICAgIG5ld0FybXkuc2NhbGVZID0gQ29uc3RhbnRzLnNjYWxlQXJteTtcclxuXHJcbiAgICAgICAgLy8gc2V0IFBvc1xyXG4gICAgICAgIGxldCBwb2ludCA9IHRoaXMuRW5lbXlQb2ludHNbcmFuZG9tXTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIG5ld0FybXkuZ2V0Q29tcG9uZW50KEFybXkpLnNraW4gPSBza2luO1xyXG4gICAgICAgIG5ld0FybXkuZ3JvdXAgPSBcIkVuZW15XCI7XHJcbiAgICAgICAgbGV0IHNwaW5lID0gbmV3QXJteS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgc3BpbmUuc2V0U2tpbihza2luKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU3Bhd25QbGF5ZXJBcm15KHNraW46IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDAsIDMpXHJcbiAgICAgICAgbGV0IG5ld0FybXk6IGNjLk5vZGU7XHJcblxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgQXJteVxyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2Myk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmFsbHlBcm1pZXMucHVzaChuZXdBcm15KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFsbGllczpcIiArIENvbnN0YW50cy5hbGx5QXJtaWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIGNhY3VsYXRlIFNjYWxlXHJcbiAgICAgICAgbmV3QXJteS5zY2FsZSA9IENvbnN0YW50cy5zY2FsZUFybXk7XHJcblxyXG4gICAgICAgIC8vIHNldCBQb3NcclxuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLkFsbHlQb2ludHNbcmFuZG9tXTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIG5ld0FybXkuZ2V0Q29tcG9uZW50KEFybXkpLnNraW4gPSBza2luO1xyXG4gICAgICAgIG5ld0FybXkuZ3JvdXAgPSBcIkFsbHlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pO1xyXG4gICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDAuOTVcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==