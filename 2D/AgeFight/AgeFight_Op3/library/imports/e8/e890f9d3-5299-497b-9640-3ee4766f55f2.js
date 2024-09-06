"use strict";
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
        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
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
            this.checkDoneAttackAnim();
        }
        // hit enemy base
        if (o.tag === 0) {
            // Constants.isCollideBase = true;
            this.isBase = true;
            // this.checkDie();
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            this.checkDoneAttackAnim();
        }
        // hit ally base
        if (o.tag === 1) {
            this.isBase = true;
        }
    };
    Army.prototype.checkDoneAttackAnim = function () {
        var _this = this;
        this.spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Attack") {
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
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.allyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
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
            targetPos = new cc.Vec2(currentPos.x - 10 - constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
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