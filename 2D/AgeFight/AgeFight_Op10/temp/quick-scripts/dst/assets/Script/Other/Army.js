
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/Army.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e890fnTUplJe5ZAPuR2b1Xy', 'Army');
// Script/Other/Army.ts

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
var TankController_1 = require("../Controller/TankController");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Army = /** @class */ (function (_super) {
    __extends(Army, _super);
    function Army() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HealthBar = null;
        _this.AudioManager = null;
        _this.spine = null;
        _this.collider = null;
        _this.skin = "";
        _this.speed = 25;
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.isAttacking = false;
        _this.isReadyToFight = false;
        _this.pauseFlag = false;
        _this.rigidbody = null;
        _this.collisionCount = 0;
        return _this;
    }
    Army_1 = Army;
    Army.prototype.start = function () {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
        this.skin === "ally" && this.goToTankPoint();
    };
    Army.prototype.goToTankPoint = function () {
        var _this = this;
        var targetPoint = constants_1.Constants.tank_TroopPoints[constants_1.Constants.troopsSpawnLeftCount];
        var worldPos = targetPoint.convertToWorldSpaceAR(cc.Vec3.ZERO);
        var targetPos = this.node.parent.convertToNodeSpaceAR(worldPos);
        constants_1.Constants.troopsSpawnLeftCount -= 1;
        cc.tween(this.node)
            .to(1.5, { x: targetPos.x, y: targetPos.y })
            .call(function () {
            _this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Idle, true);
        })
            .start();
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        // enemy collide with king
        if (this.skin === "enemy" && o.tag === 20) {
            this.collisionCount++;
            this.setCollisionForEnemy(o);
            this.canRun = false;
            return;
        }
        if ((o.tag === 1 || o.tag === 0 || o.tag === 2) && s.tag !== 9) {
            this.collisionCount++;
            this.skin === constants_1.Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === constants_1.Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
            return;
        }
        if (o.tag === 9) {
            this.isReadyToFight = true;
        }
        if (this.collisionCount < 0)
            this.collisionCount = 0;
    };
    Army.prototype.onCollisionStay = function (o, s) {
        if ((o.tag === 1 || o.tag === 0) && s.tag !== 9) {
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionExit = function (o, s) {
        if (o.tag === 9) {
            this.isReadyToFight = false;
        }
        if (!this.isLive)
            return;
        if ((o.tag === 1 || o.tag === 0 || o.tag === 2) || (this.skin === "enemy" && o.tag === 7) && !this.isAttacking) {
            this.collisionCount--;
            if (this.collisionCount === 0) {
                this.canRun = true;
                this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            }
        }
        if (this.collisionCount < 0)
            this.collisionCount = 0;
    };
    Army.prototype.setCollisionForAlly = function (o) {
        // hit enemy base || enemy army
        if (o.tag === 0 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            // if (this.node.name === "Army_Lv2") this.AudioManager.playSound(Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim(false, o);
        }
        // hit enemy base
        if (o.tag === 0) {
            // Constants.isCollideBase = true;
            this.isBase = true;
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            this.checkDoneAttackAnim(false, o);
        }
        if (o.tag === 20) {
            this.isAttacking = true;
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            this.checkDoneAttackAnim(true, o);
        }
        // hit ally base
        if (o.tag === 1) {
            this.isBase = true;
        }
    };
    Army.prototype.checkDoneAttackAnim = function (isTank, o) {
        var _this = this;
        this.spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Attack") {
                if (o.tag !== 1) {
                    var VFx_bleed = o.node.getChildByName("Spine").getChildByName("Vfx_1").getComponent(cc.Animation);
                    VFx_bleed.play();
                }
                if (isTank) {
                    var TankComp = o.getComponent(TankController_1.default);
                    TankComp.HealthBar.scaleX -= 0.05;
                    if (_this.node.name === "Army2_Lv1") {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
                    }
                    if (_this.node.name === "Army2_Lv2") {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
                    }
                }
                _this.isBase
                    ? _this.handleDecreaseHealthBase()
                    : _this.handleDecreaseHealthArmy();
            }
        });
    };
    Army.prototype.handleDecreaseHealthBase = function () {
        // if (this.skin === "ally" && this.node.name === "Army_Lv3") {
        //     Constants.EnemyBaseHeal -= 0.1;
        //     return;
        // }
        // if (this.node.name === "Army2_Lv3") {
        //     this.AudioManager.playSound(Constants.SoundTrack.Lv2_Tank);
        //     let spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
        //     spineAttackOfTank.node.active = true;
        //     spineAttackOfTank.setAnimation(0, "2", false);
        //     Constants.EnemyBaseHeal -= 0.2;
        //     return;
        // }
        if (this.skin === "enemy" && this.node.name === "Army2_Lv2") {
            constants_1.Constants.AllyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
            return;
        }
        // if (this.skin === "ally" && this.node.name === "Army_Lv2") {
        //     this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        //     Constants.EnemyBaseHeal -= 0.08;
        //     return;
        // }
        // if (this.skin === "ally") {
        //     this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
        //     Constants.EnemyBaseHeal -= 0.05;
        // }
        if (this.skin === "enemy" && this.node.name === "Army2_Lv1") {
            constants_1.Constants.AllyBaseHeal -= 0.05;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
        }
    };
    Army.prototype.handleDecreaseHealthArmy = function () {
        if (this.skin === "ally") {
            // if (this.node.name === "Army_Lv3") {
            //     Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.5;
            //     this.AudioManager.playSound(Constants.SoundTrack.ArmyLv3HitSound);
            //     return;
            // }
            if (this.node.name === "Army2_Lv3") {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
                var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                spineAttackOfTank.node.active = true;
                spineAttackOfTank.setAnimation(0, "2", false);
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 1;
                return;
            }
            if (this.node.name === "Army2_Lv2") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
                return;
            }
            // if (this.node.name === "Army_Lv2") {
            //     Constants.enemyArmies[0].getComponent(Army).HealthBar.scaleX -= 0.2;
            //     this.AudioManager.playSound(Constants.SoundTrack.ArmyLv1HitSound);
            //     return;
            // }
            if (this.node.name === "Army2_Lv1") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
                return;
            }
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
            return;
        }
        else {
            if (this.node.name === "Army2_Lv2") {
                constants_1.Constants.allyArmies[1].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
                return;
            }
            if (this.node.name === "Army2_Lv1") {
                constants_1.Constants.allyArmies[1].getComponent(Army_1).HealthBar.scaleX -= 0.3;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
                return;
            }
        }
    };
    Army.prototype.die = function () {
        var VFx_bleed = this.node.getChildByName("Spine").getChildByName("Vfx_1").getComponent(cc.Animation);
        VFx_bleed.play();
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(Army_1).enabled = false;
        // decrease the first ally/enemy in constant array;
        if (this.skin === "enemy") {
            constants_1.Constants.enemyDie += 1;
            constants_1.Constants.enemyArmies.splice(0, 1);
        }
        else {
            constants_1.Constants.allyArmies.splice(0, 1);
        }
    };
    Army.prototype.checkDie = function () {
        var _this = this;
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.die();
    };
    Army.prototype.checkRun = function () {
        if (!this.isLive)
            return;
        var firstEnemyPos = null;
        var targetPos = null;
        // if (this.skin === "ally" && this.canRun) {
        // let currentPos = this.node.getPosition();
        // this.isReadyToFight
        //     ? firstEnemyPos = this.roadToEnemyPos(currentPos, "ally")
        //     : firstEnemyPos = currentPos;
        // if (this.node.name === "Army_Lv3" || this.node.name === "Army2_Lv3") {
        //     targetPos = new cc.Vec2(currentPos.x + 25 + Constants.Responsive.speedCalculated, firstEnemyPos.y);
        //     this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos))
        //     return;
        // }
        // if (this.node.name === "Army" || this.node.name === "Army2_Lv2"
        //     || this.node.name === "Army2_Lv1" || this.node.name === "Army_Lv2"
        // ) {
        //     targetPos = new cc.Vec2(currentPos.x + 10 + Constants.Responsive.speedCalculated, firstEnemyPos.y);
        //     this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos))
        // }
        // }
        if (this.skin === "enemy" && this.canRun) {
            var currentPos = this.node.getPosition();
            this.isReadyToFight
                ? firstEnemyPos = this.roadToEnemyPos(currentPos, "enemy")
                : firstEnemyPos = currentPos;
            if (constants_1.Constants.isRotate) {
                targetPos = new cc.Vec2(currentPos.x - 30 - constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
            }
            else {
                targetPos = new cc.Vec2(currentPos.x - 20 - constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
            }
            this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
        }
    };
    Army.prototype.roadToEnemyPos = function (currentPos, yourSide) {
        if (yourSide === "ally") {
            if (constants_1.Constants.enemyArmies[0]) {
                return constants_1.Constants.enemyArmies[0].getPosition();
            }
            else {
                return currentPos;
            }
        }
        else {
            if (constants_1.Constants.allyArmies[0]) {
                return constants_1.Constants.allyArmies[0].getPosition();
            }
            else {
                return currentPos;
            }
        }
    };
    Army.prototype.checkPause = function () {
        if (constants_1.Constants.isPauseGame) {
            this.canRun = false;
        }
        if (constants_1.Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.collider.enabled = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Idle, true);
            return;
        }
        if (!constants_1.Constants.isPauseGame) {
            this.pauseFlag = false;
        }
    };
    Army.prototype.update = function (dt) {
        this.checkPause();
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    };
    var Army_1;
    __decorate([
        property(cc.Node)
    ], Army.prototype, "HealthBar", void 0);
    Army = Army_1 = __decorate([
        ccclass
    ], Army);
    return Army;
}(cc.Component));
exports.default = Army;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXVZQztRQXJZRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFXLENBQUMsQ0FBQzs7SUFtWHZDLENBQUM7YUF2WW9CLElBQUk7SUF1Qlgsb0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbEUsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FB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QUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBR1MscUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUFwWUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUTtJQUZULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F1WXhCO0lBQUQsV0FBQztDQXZZRCxBQXVZQyxDQXZZaUMsRUFBRSxDQUFDLFNBQVMsR0F1WTdDO2tCQXZZb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYW5rQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9UYW5rQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFybXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIZWFsdGhCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIHNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBjb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHNraW46IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjU7XHJcblxyXG4gICAgY2FuUnVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzQmFzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNMaXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc1JlYWR5VG9GaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHBhdXNlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY29sbGlzaW9uQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlciA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudFxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJBdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KEF1ZGlvTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLmdvVG9UYW5rUG9pbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnb1RvVGFua1BvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0YXJnZXRQb2ludCA9IENvbnN0YW50cy50YW5rX1Ryb29wUG9pbnRzW0NvbnN0YW50cy50cm9vcHNTcGF3bkxlZnRDb3VudF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGFyZ2V0UG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBDb25zdGFudHMudHJvb3BzU3Bhd25MZWZ0Q291bnQgLT0gMTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC50bygxLjUsIHt4OiB0YXJnZXRQb3MueCwgeTogdGFyZ2V0UG9zLnl9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLklkbGUsIHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIobzogY2MuUGh5c2ljc0NvbGxpZGVyLCBzOiBjYy5Db2xsaWRlcikge1xyXG5cclxuICAgICAgICAvLyBlbmVteSBjb2xsaWRlIHdpdGgga2luZ1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIG8udGFnID09PSAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbkNvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sbGlzaW9uRm9yRW5lbXkobyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoby50YWcgPT09IDEgfHwgby50YWcgPT09IDAgfHwgby50YWcgPT09IDIpICYmIHMudGFnICE9PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5za2luID09PSBDb25zdGFudHMuQXJteVNraW4uQWxseSAmJiB0aGlzLnNldENvbGxpc2lvbkZvckFsbHkobyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbiA9PT0gQ29uc3RhbnRzLkFybXlTa2luLkVuZW15ICYmIHRoaXMuc2V0Q29sbGlzaW9uRm9yRW5lbXkobyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gOSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVhZHlUb0ZpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25Db3VudCA8IDApIHRoaXMuY29sbGlzaW9uQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvblN0YXkobzogY2MuUGh5c2ljc0NvbGxpZGVyLCBzKSB7XHJcbiAgICAgICAgaWYgKChvLnRhZyA9PT0gMSB8fCBvLnRhZyA9PT0gMCkgJiYgcy50YWcgIT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvLCBzKSB7XHJcbiAgICAgICAgaWYgKG8udGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeVRvRmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0xpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKChvLnRhZyA9PT0gMSB8fCBvLnRhZyA9PT0gMCB8fCBvLnRhZyA9PT0gMikgfHwgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIG8udGFnID09PSA3KSAmJiAhdGhpcy5pc0F0dGFja2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbkNvdW50LS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblJ1biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uUnVuLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uQ291bnQgPCAwKSB0aGlzLmNvbGxpc2lvbkNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb2xsaXNpb25Gb3JBbGx5KG86IGNjLlBoeXNpY3NDb2xsaWRlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGhpdCBlbmVteSBiYXNlIHx8IGVuZW15IGFybXlcclxuICAgICAgICBpZiAoby50YWcgPT09IDAgfHwgby50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgISh0aGlzLnNwaW5lLmFuaW1hdGlvbiA9PT0gXCJBdHRhY2tcIikgJiYgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkF0dGFjaywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MkhpdFNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RvbmVBdHRhY2tBbmltKGZhbHNlLCBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpdCBlbmVteSBiYXNlXHJcbiAgICAgICAgaWYgKG8udGFnID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIENvbnN0YW50cy5pc0NvbGxpZGVCYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb2xsaXNpb25Gb3JFbmVteShvOiBjYy5QaHlzaWNzQ29sbGlkZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBoaXQgYWxseSBiYXNlIHx8IGFsbHkgYXJteVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMSB8fCBvLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAhKHRoaXMuc3BpbmUuYW5pbWF0aW9uID09PSBcIkF0dGFja1wiKSAmJiB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uQXR0YWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RvbmVBdHRhY2tBbmltKGZhbHNlLCBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG8udGFnID09PSAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgISh0aGlzLnNwaW5lLmFuaW1hdGlvbiA9PT0gXCJBdHRhY2tcIikgJiYgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkF0dGFjaywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEb25lQXR0YWNrQW5pbSh0cnVlLCBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpdCBhbGx5IGJhc2VcclxuICAgICAgICBpZiAoby50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0RvbmVBdHRhY2tBbmltKGlzVGFuazogYm9vbGVhbiwgbzpjYy5QaHlzaWNzQ29sbGlkZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IHNwLnNwaW5lLlRyYWNrRW50cnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiQXR0YWNrXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvLnRhZyAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBWRnhfYmxlZWQgPSBvLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlZmeF8xXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIFZGeF9ibGVlZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNUYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFRhbmtDb21wID0gby5nZXRDb21wb25lbnQoVGFua0NvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgVGFua0NvbXAuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjA1O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfS2luaWZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfR3VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Jhc2VcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKClcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhBcm15KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURlY3JlYXNlSGVhbHRoQmFzZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgLy8gICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2M1wiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfVGFuayk7XHJcbiAgICAgICAgLy8gICAgIGxldCBzcGluZUF0dGFja09mVGFuayA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJsYXN0XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgLy8gICAgIHNwaW5lQXR0YWNrT2ZUYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgc3BpbmVBdHRhY2tPZlRhbmsuc2V0QW5pbWF0aW9uKDAsIFwiMlwiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMjtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MlwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5BbGx5QmFzZUhlYWwgLT0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0d1bik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiICYmIHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgLy8gICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMDg7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgIC8vICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjA1O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MVwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5BbGx5QmFzZUhlYWwgLT0gMC4wNTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9LaW5pZmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEZWNyZWFzZUhlYWx0aEFybXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIpIHtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2M0hpdFNvdW5kKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2M1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX1RhbmspO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwaW5lQXR0YWNrT2ZUYW5rID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxhc3RcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIHNwaW5lQXR0YWNrT2ZUYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNwaW5lQXR0YWNrT2ZUYW5rLnNldEFuaW1hdGlvbigwLCBcIjJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjJcIikge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuNTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfR3VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjI7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MVwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9LaW5pZmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4zO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0tpbmlmZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MlwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllc1sxXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0d1bik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjFcIikge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmFsbHlBcm1pZXNbMV0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9LaW5pZmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IFZGeF9ibGVlZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENoaWxkQnlOYW1lKFwiVmZ4XzFcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIFZGeF9ibGVlZC5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChBcm15KS5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIGRlY3JlYXNlIHRoZSBmaXJzdCBhbGx5L2VuZW15IGluIGNvbnN0YW50IGFycmF5O1xyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgKz0gMTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tEaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uRGllLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1J1bigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMaXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEVuZW15UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5jYW5SdW4pIHtcclxuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNSZWFkeVRvRmlnaHRcclxuICAgICAgICAgICAgLy8gICAgID8gZmlyc3RFbmVteVBvcyA9IHRoaXMucm9hZFRvRW5lbXlQb3MoY3VycmVudFBvcywgXCJhbGx5XCIpXHJcbiAgICAgICAgICAgIC8vICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIgfHwgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYzXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKGN1cnJlbnRQb3MueCArIDI1ICsgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkLCBmaXJzdEVuZW15UG9zLnkpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3MubGVycCh0YXJnZXRQb3MsIDAuMDIsIGN1cnJlbnRQb3MpKVxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteVwiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MlwiXHJcbiAgICAgICAgICAgIC8vICAgICB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjFcIiB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiXHJcbiAgICAgICAgICAgIC8vICkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIoY3VycmVudFBvcy54ICsgMTAgKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQsIGZpcnN0RW5lbXlQb3MueSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIiAmJiB0aGlzLmNhblJ1bikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodFxyXG4gICAgICAgICAgICAgICAgPyBmaXJzdEVuZW15UG9zID0gdGhpcy5yb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zLCBcImVuZW15XCIpXHJcbiAgICAgICAgICAgICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmlzUm90YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMihjdXJyZW50UG9zLnggLSAzMCAtIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCwgZmlyc3RFbmVteVBvcy55KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKGN1cnJlbnRQb3MueCAtIDIwIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkLCBmaXJzdEVuZW15UG9zLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zOiBjYy5WZWMyLCB5b3VyU2lkZTogc3RyaW5nKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKHlvdXJTaWRlID09PSBcImFsbHlcIikge1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuYWxseUFybWllc1swXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5hbGx5QXJtaWVzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1BhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUgJiYgIXRoaXMucGF1c2VGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5JZGxlLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tQYXVzZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLkhlYWx0aEJhci5zY2FsZVggPD0gMC4xICYmIHRoaXMuaXNMaXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEaWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja1J1bigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==