
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TankController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUYW5rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsc0NBQWlDO0FBQ2pDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9PQztRQWpPRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBc0IsSUFBSSxDQUFDO1FBR3JDLGNBQVEsR0FBc0IsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRTdCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBd01uQyxDQUFDO0lBck1HLHlDQUFnQixHQUFoQixVQUFpQixDQUFxQixFQUFFLENBQWM7UUFBdEQsaUJBNkNDO1FBNUNHLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsRUFBRTtZQUNILElBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ1oscUJBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7WUFFRCxJQUFJLGVBQWEsR0FBRyxDQUFDLENBQUMsWUFBWSxD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SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO3NEQUNTO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0RBQ087SUFHbkM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0RBQ1M7SUFmWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBb09sQztJQUFELHFCQUFDO0NBcE9ELEFBb09DLENBcE8yQyxFQUFFLENBQUMsU0FBUyxHQW9PdkQ7a0JBcE9vQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBcm15IGZyb20gXCIuLi9PdGhlci9Bcm15XCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIZWFsdGhCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB2RnhfQm9vb206IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgRlhfVXBncmFkZTogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIEZYX0JsaW5rOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIFRyb29wc1BvaW50czogY2MuTm9kZVtdID0gW107XHJcbiBcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIHNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7IFxyXG4gICAgY29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBza2luOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDI1O1xyXG5cclxuICAgIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNCYXNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0xpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvOiBjYy5QaHlzaWNzQ29sbGlkZXIsIHM6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgLy8gZW5lbXkgY29sbGlkZSB3aXRoIHRhbmtcclxuICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICBpZihvLnRhZyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzVGFua0NhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJteUNvbXBvbmVudCA9IG8uZ2V0Q29tcG9uZW50KEFybXkpO1xyXG4gICAgICAgICAgICBpZiAoYXJteUNvbXBvbmVudCAmJiBDb25zdGFudHMuaXNUYW5rQ2FuUnVuICYmIHMudGFnID09PSAxOCkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLnNob290Q291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNUYW5rQ2FuUnVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkF0dGFjaywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBmeCBibGFzdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxhc3RcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlRhbmtfQmxhc3RBbmltXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9UYW5rKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RFbmVteShhcm15Q29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBDb25zdGFudHMuZW5lbXlBcm1pZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gQ29uc3RhbnRzLmVuZW15QXJtaWVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFybXkgPSBlbGVtZW50LmdldENvbXBvbmVudChBcm15KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcm15LmlzTGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJteS5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkRpZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eTogMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9uQ29sbGlzaW9uU3RheShvOiBjYy5QaHlzaWNzQ29sbGlkZXIsIHMpIHtcclxuICAgIC8vICAgICBDb25zdGFudHMuaXNUYW5rQ2FuUnVuID0gZmFsc2VcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gb25Db2xsaXNpb25FeGl0KG8sIHMpIHtcclxuICAgIC8vICAgICBDb25zdGFudHMuaXNUYW5rQ2FuUnVuID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdEVuZW15KGFybXlDb21wb25lbnQ6IEFybXkpOiB2b2lkIHtcclxuICAgICAgICBjYy5sb2coXCJzaG9vdCEhIVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGFua1BvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgdkZ4X0Jvb29tID0gY2MuaW5zdGFudGlhdGUodGhpcy52RnhfQm9vb20pO1xyXG5cclxuICAgICAgICB2RnhfQm9vb20ucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICB2RnhfQm9vb20uc2V0UG9zaXRpb24odGFua1Bvcy54ICsgNTAsIHRhbmtQb3MueSArIDEwNSk7XHJcblxyXG4gICAgICAgIHZGeF9Cb29vbS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZGeF9Cb29vbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzVGFua0NhblJ1biA9IHRydWU7XHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnRcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChBdWRpb01hbmFnZXIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBhY3RpdmUgcnVuIHRvIEJhc2VcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucnVuQWhlYWRCYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgICAgIH0sIDAuMik7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy50YW5rX1Ryb29wUG9pbnRzID0gdGhpcy5Ucm9vcHNQb2ludHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkF0dGFjaywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBmeCBibGFzdFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxhc3RcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlRhbmtfQmxhc3RBbmltXCIpO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX1RhbmspXHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gbmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdTaG9vdGluZycsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGllKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNMaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGluZS50aW1lU2NhbGUgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkRpZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuaXNMb29zZSA9IHRydWU7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBydW5BaGVhZEJhc2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IGN1cnJlbnRQb3MueCArIDEwMDtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gICAgIC50bygzLCB7IHg6IGN1cnJlbnRQb3MueCArIDEwMCB9KVxyXG4gICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uSWRsZSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZUFuaW1SdW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVRhbmtQcmVtZWl1bSgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVGFua1ByZW1laXVtKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMuRlhfVXBncmFkZS5yZXNldFN5c3RlbSgpO1xyXG5cclxuICAgICAgICB0aGlzLkZYX0JsaW5rLnJlc2V0U3lzdGVtKCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3BpbmUubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjA0LCAwICwyNTUpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuNSwge3NjYWxlOiBjdXJyZW50U2NhbGUgKyAwLjE1fSwge2Vhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXR9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ1Nob3dTcGVlZExpbmUnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQW5pbVJ1bigpO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMihjdXJyZW50UG9zLnggKyAyNSArIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCwgY3VycmVudFBvcy55KTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhlYWx0aEJhci5zY2FsZVggPD0gMC4wNSAmJiB0aGlzLmlzTGl2ZSkgdGhpcy5kaWUoKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVGFua0NhblJ1biAmJiB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==