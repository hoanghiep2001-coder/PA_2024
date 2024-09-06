
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
var KingController_1 = require("../Controller/KingController");
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
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        // enemy collide with king
        if (this.skin === "enemy" && o.tag === 7) {
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
            if (this.node.name === "Army_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv2HitSound);
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
        if (o.tag === 7) {
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
    Army.prototype.checkDoneAttackAnim = function (isKing, o) {
        var _this = this;
        this.spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Attack") {
                // nếu là king thì mới cho đấm king
                if (isKing && o.getComponent(KingController_1.default)) {
                    o.getComponent(KingController_1.default).decreaseHealth();
                    _this.isAttacking = false;
                    _this.collisionCount--;
                    if (_this.collisionCount === 0) {
                        _this.canRun = true;
                        _this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
                    }
                    return;
                }
                if (o) {
                    var VFx_bleed = o.node.getChildByName("Spine").getChildByName("Vfx_1").getComponent(cc.Animation);
                    VFx_bleed.play();
                }
                _this.isBase
                    ? _this.handleDecreaseHealthBase()
                    : _this.handleDecreaseHealthArmy();
            }
        });
    };
    Army.prototype.handleDecreaseHealthBase = function () {
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        if (this.node.name === "Army2_Lv3") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
            var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
            spineAttackOfTank.node.active = true;
            spineAttackOfTank.setAnimation(0, "2", false);
            constants_1.Constants.EnemyBaseHeal -= 0.2;
            return;
        }
        if (this.node.name === "Army2_Lv2") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
            return;
        }
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.EnemyBaseHeal -= 0.08;
            return;
        }
        if (this.skin === "ally") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.EnemyBaseHeal -= 0.05;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.AllyBaseHeal -= 0.05;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        }
    };
    Army.prototype.handleDecreaseHealthArmy = function () {
        if (this.skin === "ally") {
            if (this.node.name === "Army_Lv3") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
                return;
            }
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
            if (this.node.name === "Army_Lv2") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
                return;
            }
            if (this.node.name === "Army2_Lv1") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
                return;
            }
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            return;
        }
        else {
            if (constants_1.Constants.allyArmies[0]) {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
                constants_1.Constants.allyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
            }
        }
    };
    Army.prototype.die = function () {
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
        if (this.skin === "ally" && this.canRun) {
            var currentPos = this.node.getPosition();
            this.isReadyToFight
                ? firstEnemyPos = this.roadToEnemyPos(currentPos, "ally")
                : firstEnemyPos = currentPos;
            if (this.node.name === "Army_Lv3" || this.node.name === "Army2_Lv3") {
                targetPos = new cc.Vec2(currentPos.x + 25 + constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
                return;
            }
            if (this.node.name === "Army" || this.node.name === "Army2_Lv2"
                || this.node.name === "Army2_Lv1" || this.node.name === "Army_Lv2") {
                targetPos = new cc.Vec2(currentPos.x + 10 + constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
            }
        }
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
            this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTBXQztRQXhXRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFXLENBQUMsQ0FBQzs7SUFzVnZDLENBQUM7YUExV29CLElBQUk7SUF1Qlgsb0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbEUsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FB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QUssQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFHUyxxQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOztJQXZXRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRlQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTBXeEI7SUFBRCxXQUFDO0NBMVdELEFBMFdDLENBMVdpQyxFQUFFLENBQUMsU0FBUyxHQTBXN0M7a0JBMVdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtpbmdDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0tpbmdDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL1BsdWdpbi9TaW5nbGV0b25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcm15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGVhbHRoQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgY29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBza2luOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDI1O1xyXG5cclxuICAgIGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0Jhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0F0dGFja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZWFkeVRvRmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwYXVzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbGxpc2lvbkNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnRcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChBdWRpb01hbmFnZXIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIobzogY2MuUGh5c2ljc0NvbGxpZGVyLCBzOiBjYy5Db2xsaWRlcikge1xyXG5cclxuICAgICAgICAvLyBlbmVteSBjb2xsaWRlIHdpdGgga2luZ1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIG8udGFnID09PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xsaXNpb25Gb3JFbmVteShvKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChvLnRhZyA9PT0gMSB8fCBvLnRhZyA9PT0gMCB8fCBvLnRhZyA9PT0gMikgJiYgcy50YWcgIT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25Db3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4gPT09IENvbnN0YW50cy5Bcm15U2tpbi5BbGx5ICYmIHRoaXMuc2V0Q29sbGlzaW9uRm9yQWxseShvKTtcclxuICAgICAgICAgICAgdGhpcy5za2luID09PSBDb25zdGFudHMuQXJteVNraW4uRW5lbXkgJiYgdGhpcy5zZXRDb2xsaXNpb25Gb3JFbmVteShvKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG8udGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeVRvRmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50IDwgMCkgdGhpcy5jb2xsaXNpb25Db3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uU3RheShvOiBjYy5QaHlzaWNzQ29sbGlkZXIsIHMpIHtcclxuICAgICAgICBpZiAoKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwKSAmJiBzLnRhZyAhPT0gOSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FeGl0KG8sIHMpIHtcclxuICAgICAgICBpZiAoby50YWcgPT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB8fCAodGhpcy5za2luID09PSBcImVuZW15XCIgJiYgby50YWcgPT09IDcpICYmICF0aGlzLmlzQXR0YWNraW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25Db3VudCA8IDApIHRoaXMuY29sbGlzaW9uQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckFsbHkobzogY2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaGl0IGVuZW15IGJhc2UgfHwgZW5lbXkgYXJteVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMCB8fCBvLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAhKHRoaXMuc3BpbmUuYW5pbWF0aW9uID09PSBcIkF0dGFja1wiKSAmJiB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uQXR0YWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYySGl0U291bmQpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0oZmFsc2UsIG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGl0IGVuZW15IGJhc2VcclxuICAgICAgICBpZiAoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzQ29sbGlkZUJhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckVuZW15KG86IGNjLlBoeXNpY3NDb2xsaWRlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGhpdCBhbGx5IGJhc2UgfHwgYWxseSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0oZmFsc2UsIG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoby50YWcgPT09IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0odHJ1ZSwgbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaXQgYWxseSBiYXNlXHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEb25lQXR0YWNrQW5pbShpc0tpbmc6IGJvb2xlYW4sIG86Y2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09PSBcIkF0dGFja1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbuG6v3UgbMOgIGtpbmcgdGjDrCBt4bubaSBjaG8gxJHhuqVtIGtpbmdcclxuICAgICAgICAgICAgICAgIGlmKGlzS2luZyAmJiBvLmdldENvbXBvbmVudChLaW5nQ29udHJvbGxlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudChLaW5nQ29udHJvbGxlcikuZGVjcmVhc2VIZWFsdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25Db3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFZGeF9ibGVlZCA9IG8ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENoaWxkQnlOYW1lKFwiVmZ4XzFcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgVkZ4X2JsZWVkLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Jhc2VcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKClcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhBcm15KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURlY3JlYXNlSGVhbHRoQmFzZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjNIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjNcIikge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX1RhbmspO1xyXG4gICAgICAgICAgICBsZXQgc3BpbmVBdHRhY2tPZlRhbmsgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCbGFzdFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwaW5lQXR0YWNrT2ZUYW5rLnNldEFuaW1hdGlvbigwLCBcIjJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjJcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfR3VuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wODtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImVuZW15XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkFsbHlCYXNlSGVhbCAtPSAwLjA1O1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRGVjcmVhc2VIZWFsdGhBcm15KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC41O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjNIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9UYW5rKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGluZUF0dGFja09mVGFuayA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJsYXN0XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5zZXRBbmltYXRpb24oMCwgXCIyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYyXCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0d1bik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjFcIikge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuMztcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfS2luaWZlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuMjtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmFsbHlBcm1pZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmFsbHlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEFybXkpLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gZGVjcmVhc2UgdGhlIGZpcnN0IGFsbHkvZW5lbXkgaW4gY29uc3RhbnQgYXJyYXk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5lbmVteURpZSArPSAxO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uRGllLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1J1bigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMaXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEVuZW15UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5jYW5SdW4pIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeVRvRmlnaHRcclxuICAgICAgICAgICAgICAgID8gZmlyc3RFbmVteVBvcyA9IHRoaXMucm9hZFRvRW5lbXlQb3MoY3VycmVudFBvcywgXCJhbGx5XCIpXHJcbiAgICAgICAgICAgICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIgfHwgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKGN1cnJlbnRQb3MueCArIDI1ICsgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkLCBmaXJzdEVuZW15UG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3MubGVycCh0YXJnZXRQb3MsIDAuMDIsIGN1cnJlbnRQb3MpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteVwiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MlwiXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjFcIiB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIoY3VycmVudFBvcy54ICsgMTAgKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQsIGZpcnN0RW5lbXlQb3MueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIiAmJiB0aGlzLmNhblJ1bikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodFxyXG4gICAgICAgICAgICAgICAgPyBmaXJzdEVuZW15UG9zID0gdGhpcy5yb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zLCBcImVuZW15XCIpXHJcbiAgICAgICAgICAgICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmlzUm90YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMihjdXJyZW50UG9zLnggLSAzMCAtIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCwgZmlyc3RFbmVteVBvcy55KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKGN1cnJlbnRQb3MueCAtIDIwIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkLCBmaXJzdEVuZW15UG9zLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zOiBjYy5WZWMyLCB5b3VyU2lkZTogc3RyaW5nKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKHlvdXJTaWRlID09PSBcImFsbHlcIikge1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuYWxseUFybWllc1swXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5hbGx5QXJtaWVzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1BhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUgJiYgIXRoaXMucGF1c2VGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNvbnN0YW50cy5pc1BhdXNlR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja1BhdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwLjEgJiYgdGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19