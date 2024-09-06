
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
        _this.AllyPoints = [];
        _this.EnemyPoints = [];
        _this.Army_Lv1 = null;
        _this.Army_Lv2 = null;
        _this.Army_Lv3 = null;
        return _this;
    }
    SpawnController.prototype.start = function () {
        if (constants_1.Constants.enemyArmies[0])
            constants_1.Constants.enemyArmies.splice(0, 1);
        this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 2);
    };
    SpawnController.prototype.SpawnEnemies = function () {
        this.schedule(function () {
            if (constants_1.Constants.isPauseGame)
                return;
            this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 1);
        }, 4, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 3);
        var newArmy;
        // create Army
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
            default:
                break;
        }
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
        spine.timeScale = 0.9;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTcGF3bkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHNDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXdHQztRQXJHRyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQzs7SUE0Ri9CLENBQUM7SUF6RmEsK0JBQUssR0FBZjtRQUNJLElBQUkscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQUUscUJBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR00sc0NBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxxQkFBUyxDQUFDLFdBQVc7Z0JBQUUsT0FBTztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHTSx3Q0FBYyxHQUFyQixVQUFzQixJQUFZLEVBQUUsS0FBYTtRQUM3QyxJQUFJLE1BQU0sR0FB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QUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3pCLENBQUM7SUFsR0Q7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7dURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0RBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFaVixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd0duQztJQUFELHNCQUFDO0NBeEdELEFBd0dDLENBeEc0QyxFQUFFLENBQUMsU0FBUyxHQXdHeEQ7a0JBeEdvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBcm15IGZyb20gXCIuLi9PdGhlci9Bcm15XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bhd25Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgQWxseVBvaW50czogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRW5lbXlQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15X0x2MTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15X0x2MjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15X0x2MzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0pIENvbnN0YW50cy5lbmVteUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgdGhpcy5TcGF3bkVuZW15QXJteShDb25zdGFudHMuQXJteVNraW4uRW5lbXksIDIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU3Bhd25FbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlzUGF1c2VHYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15LCAxKTtcclxuICAgICAgICB9LCA0LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC4yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduRW5lbXlBcm15KHNraW46IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDAsIDMpXHJcbiAgICAgICAgbGV0IG5ld0FybXk6IGNjLk5vZGU7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBBcm15XHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2MSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjIpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbnN0YW50cy5lbmVteUFybWllcy5wdXNoKG5ld0FybXkpO1xyXG5cclxuICAgICAgICAvLyBjYWN1bGF0ZSBTY2FsZVxyXG4gICAgICAgIG5ld0FybXkuc2NhbGVYID0gLUNvbnN0YW50cy5zY2FsZUFybXk7XHJcbiAgICAgICAgbmV3QXJteS5zY2FsZVkgPSBDb25zdGFudHMuc2NhbGVBcm15O1xyXG5cclxuICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5FbmVteVBvaW50c1tyYW5kb21dO1xyXG4gICAgICAgIHBvaW50LnBhcmVudC5hZGRDaGlsZChuZXdBcm15KTtcclxuICAgICAgICBuZXdBcm15LnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgICAgICBuZXdBcm15LnNldFBvc2l0aW9uKHBvaW50LmdldFBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2tpbiAmIGdyb3VwXHJcbiAgICAgICAgbmV3QXJteS5nZXRDb21wb25lbnQoQXJteSkuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiRW5lbXlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTcGF3blBsYXllckFybXkoc2tpbjogc3RyaW5nLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMCwgMylcclxuICAgICAgICBsZXQgbmV3QXJteTogY2MuTm9kZTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBBcm15XHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2MSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5wdXNoKG5ld0FybXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxsaWVzOlwiICsgQ29uc3RhbnRzLmFsbHlBcm1pZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gY2FjdWxhdGUgU2NhbGVcclxuICAgICAgICBuZXdBcm15LnNjYWxlID0gQ29uc3RhbnRzLnNjYWxlQXJteTtcclxuXHJcbiAgICAgICAgLy8gc2V0IFBvc1xyXG4gICAgICAgIGxldCBwb2ludCA9IHRoaXMuQWxseVBvaW50c1tyYW5kb21dO1xyXG4gICAgICAgIHBvaW50LnBhcmVudC5hZGRDaGlsZChuZXdBcm15KTtcclxuICAgICAgICBuZXdBcm15LnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgICAgICBuZXdBcm15LnNldFBvc2l0aW9uKHBvaW50LmdldFBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2tpbiAmIGdyb3VwXHJcbiAgICAgICAgbmV3QXJteS5nZXRDb21wb25lbnQoQXJteSkuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiQWxseVwiO1xyXG4gICAgICAgIGxldCBzcGluZSA9IG5ld0FybXkuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHNwaW5lLnNldFNraW4oc2tpbik7XHJcbiAgICAgICAgc3BpbmUudGltZVNjYWxlID0gMC45XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=