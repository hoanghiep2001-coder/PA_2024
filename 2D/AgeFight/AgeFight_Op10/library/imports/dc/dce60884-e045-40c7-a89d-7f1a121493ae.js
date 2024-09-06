"use strict";
cc._RF.push(module, 'dce60iE4EVAx6idfxoSFJOu', 'TankController');
// Script/Controller/TankController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TankController = /** @class */ (function (_super) {
    __extends(TankController, _super);
    function TankController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HealthBar = null;
        _this.vFx_Booom = null;
        _this.FX_Upgrade = null;
        _this.FX_Blink = null;
        _this.TroopsPoints = [];
        _this.AudioManager = null;
        _this.spine = null;
        _this.collider = null;
        _this.skin = "";
        _this.speed = 25;
        _this.isRunning = false;
        _this.isBase = false;
        _this.isLive = true;
        _this.rigidbody = null;
        return _this;
    }
    TankController.prototype.onCollisionEnter = function (o, s) {
        var _this = this;
        // enemy collide with tank
        if (o) {
            if (o.tag === 0) {
                constants_1.Constants.isTankCanRun = false;
                this.shoot();
            }
            var armyComponent_1 = o.getComponent(Army_1.default);
            if (armyComponent_1 && constants_1.Constants.isTankCanRun && s.tag === 18) {
                constants_1.Constants.shootCount += 1;
                constants_1.Constants.isTankCanRun = false;
                this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, false);
                // fx blast
                this.scheduleOnce(function () {
                    _this.node.getChildByName("Blast").getComponent(cc.Animation).play("Tank_BlastAnim");
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
                    _this.shootEnemy(armyComponent_1);
                    var _loop_1 = function (index) {
                        var element = constants_1.Constants.enemyArmies[index];
                        var army = element.getComponent(Army_1.default);
                        army.isLive = false;
                        army.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
                        cc.tween(element)
                            .to(0.5, { opacity: 0 })
                            .call(function () {
                            element.active = false;
                            element.destroy();
                        })
                            .start();
                    };
                    for (var index = 0; index < constants_1.Constants.enemyArmies.length; index++) {
                        _loop_1(index);
                    }
                    constants_1.Constants.enemyArmies = [];
                }, 0.3);
            }
        }
    };
    // onCollisionStay(o: cc.PhysicsCollider, s) {
    //     Constants.isTankCanRun = false
    // }
    // onCollisionExit(o, s) {
    //     Constants.isTankCanRun = true;
    // }
    TankController.prototype.shootEnemy = function (armyComponent) {
        cc.log("shoot!!!");
        var tankPos = this.node.getPosition();
        var vFx_Booom = cc.instantiate(this.vFx_Booom);
        vFx_Booom.parent = this.node;
        vFx_Booom.setPosition(tankPos.x + 50, tankPos.y + 105);
        vFx_Booom.active = true;
        this.scheduleOnce(function () {
            vFx_Booom.active = false;
            constants_1.Constants.isTankCanRun = true;
        }, 1.5);
    };
    TankController.prototype.start = function () {
        var _this = this;
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
        this.collider.enabled = false;
        // active run to Base
        this.scheduleOnce(function () {
            _this.runAheadBase();
            _this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
        }, 0.2);
        constants_1.Constants.tank_TroopPoints = this.TroopsPoints;
    };
    TankController.prototype.shoot = function () {
        var _this = this;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, false);
        // fx blast
        this.scheduleOnce(function () {
            _this.node.getChildByName("Blast").getComponent(cc.Animation).play("Tank_BlastAnim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
            var customEvent = new cc.Event.EventCustom('Shooting', true);
            _this.node.dispatchEvent(customEvent);
        }, 0.3);
    };
    TankController.prototype.die = function () {
        var _this = this;
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;
        constants_1.Constants.isLoose = true;
        constants_1.Constants.isPauseGame = true;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
    };
    TankController.prototype.runAheadBase = function () {
        var currentPos = this.node.getPosition();
        this.node.x = currentPos.x + 100;
        constants_1.Constants.isCanTouch = true;
        // cc.tween(this.node)
        //     .to(3, { x: currentPos.x + 100 })
        //     .call(() => {
        //         Constants.isCanTouch = true;
        //         this.spine.setAnimation(0, Constants.ArmyAnim.Idle, true);
        //     })
        //     .start();
    };
    TankController.prototype.activeAnimRun = function () {
        if (this.isRunning)
            return;
        this.spine.node.active = true;
        this.HealthBar.parent.active = true;
        this.collider.enabled = true;
        this.updateTankPremeium();
        this.registerEvent();
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
    };
    TankController.prototype.updateTankPremeium = function () {
        var currentScale = this.node.scale;
        this.FX_Upgrade.resetSystem();
        this.FX_Blink.resetSystem();
        // this.spine.node.color = cc.color(255, 204, 0 ,255);
        cc.tween(this.node)
            .to(0.5, { scale: currentScale + 0.15 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TankController.prototype.registerEvent = function () {
        var customEvent = new cc.Event.EventCustom('ShowSpeedLine', true);
        this.node.dispatchEvent(customEvent);
    };
    TankController.prototype.run = function () {
        this.activeAnimRun();
        this.isRunning = true;
        var currentPos = this.node.getPosition();
        var targetPos = new cc.Vec2(currentPos.x + 25 + constants_1.Constants.Responsive.speedCalculated, currentPos.y);
        this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
    };
    TankController.prototype.update = function (dt) {
        if (this.HealthBar.scaleX <= 0.05 && this.isLive)
            this.die();
        constants_1.Constants.isTankCanRun && this.run();
    };
    __decorate([
        property(cc.Node)
    ], TankController.prototype, "HealthBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], TankController.prototype, "vFx_Booom", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], TankController.prototype, "FX_Upgrade", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], TankController.prototype, "FX_Blink", void 0);
    __decorate([
        property([cc.Node])
    ], TankController.prototype, "TroopsPoints", void 0);
    TankController = __decorate([
        ccclass
    ], TankController);
    return TankController;
}(cc.Component));
exports.default = TankController;

cc._RF.pop();