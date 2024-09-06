
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/KingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de5b51lmitFXq1nuMymTFt2', 'KingController');
// Script/Controller/KingController.ts

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
var Responsive_1 = require("../Plugin/Responsive");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KingController = /** @class */ (function (_super) {
    __extends(KingController, _super);
    function KingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Base = null;
        _this.HealthBar = null;
        _this.CTA = null;
        _this.Responsive = null;
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
        return _this;
    }
    KingController_1 = KingController;
    KingController.prototype.start = function () {
        var _this = this;
        this.AudioManager = this.node.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
        // active run to Base
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.HelpMe);
            _this.runToBase();
            _this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
        }, 0.2);
        this.schedule(function () {
            if (constants_1.Constants.isLoose || constants_1.Constants.isWin)
                return;
            _this.playSoundHelpMe();
        }, 2);
    };
    KingController.prototype.playSoundHelpMe = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.HelpMe);
    };
    KingController.prototype.runToBase = function () {
        var _this = this;
        var basePos = this.Base.getPosition();
        var currentDevice = this.Responsive.device;
        var calculateTime = null;
        switch (currentDevice) {
            case "horizontal_IPX":
                calculateTime = 23;
                break;
            case "horizontal_Tablet":
                calculateTime = 13.5;
                break;
            case "vertical_IPX":
                calculateTime = 13;
                break;
            case "vertical_Mobile":
                calculateTime = 13;
                break;
            default:
                break;
        }
        cc.tween(this.node)
            .to(calculateTime, { x: basePos.x }, { easing: cc.easing.smooth })
            .call(function () {
            // run to base Successfully
            cc.tween(_this.node)
                .to(0.5, { opacity: 0 })
                .start();
            if (_this.isLive) {
                constants_1.Constants.isPauseGame = true;
                constants_1.Constants.isWin = true;
                _this.CTA.active = true;
            }
        })
            .start();
    };
    KingController.prototype.die = function () {
        constants_1.Constants.isLoose = true;
        constants_1.Constants.isPauseGame = true;
        this.CTA.active = true;
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(KingController_1).enabled = false;
    };
    KingController.prototype.checkDie = function () {
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
    KingController.prototype.decreaseHealth = function () {
        var random = cc.math.randomRangeInt(0, 4);
        switch (random) {
            case 0:
                this.spine.node.getChildByName("Vfx_1").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 1:
                this.spine.node.getChildByName("Vfx_2").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 2:
                this.spine.node.getChildByName("Vfx_3").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 3:
                this.spine.node.getChildByName("Vfx_4").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            default:
                break;
        }
        this.HealthBar.scaleX -= 0.05;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
    };
    KingController.prototype.update = function (dt) {
        // this.checkPause();
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        // this.checkRun();
    };
    var KingController_1;
    __decorate([
        property(cc.Node)
    ], KingController.prototype, "Base", void 0);
    __decorate([
        property(cc.Node)
    ], KingController.prototype, "HealthBar", void 0);
    __decorate([
        property(cc.Node)
    ], KingController.prototype, "CTA", void 0);
    __decorate([
        property(Responsive_1.default)
    ], KingController.prototype, "Responsive", void 0);
    KingController = KingController_1 = __decorate([
        ccclass
    ], KingController);
    return KingController;
}(cc.Component));
exports.default = KingController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxLaW5nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTBKQztRQXhKRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBK0huQyxDQUFDO3VCQTFKb0IsY0FBYztJQThCckIsOEJBQUssR0FBZjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNwRCxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUMvRCxJ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SSxDQUFDO3FEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztzREFDUztJQVhiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwSmxDO0lBQUQscUJBQUM7Q0ExSkQsQUEwSkMsQ0ExSjJDLEVBQUUsQ0FBQyxTQUFTLEdBMEp2RDtrQkExSm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZSBmcm9tIFwiLi4vUGx1Z2luL1Jlc3BvbnNpdmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW5nQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJhc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGVhbHRoQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFJlc3BvbnNpdmUpXHJcbiAgICBSZXNwb25zaXZlOiBSZXNwb25zaXZlID0gbnVsbDtcclxuXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgY29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBza2luOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDI1O1xyXG5cclxuICAgIGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0Jhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0F0dGFja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZWFkeVRvRmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwYXVzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudFxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJBdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KEF1ZGlvTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZlIHJ1biB0byBCYXNlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suSGVscE1lKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub0Jhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgfSwgMC4yKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXNMb29zZSB8fCBDb25zdGFudHMuaXNXaW4pIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U291bmRIZWxwTWUoKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5U291bmRIZWxwTWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkhlbHBNZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcnVuVG9CYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBiYXNlUG9zID0gdGhpcy5CYXNlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREZXZpY2UgPSB0aGlzLlJlc3BvbnNpdmUuZGV2aWNlO1xyXG4gICAgICAgIGxldCBjYWxjdWxhdGVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnREZXZpY2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxfSVBYXCI6XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lID0gMjM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxfVGFibGV0XCI6XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lID0gMTMuNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxfSVBYXCI6XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lID0gMTM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsX01vYmlsZVwiOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZSA9IDEzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKGNhbGN1bGF0ZVRpbWUsIHsgeDogYmFzZVBvcy54IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc21vb3RoIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJ1biB0byBiYXNlIFN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzTG9vc2UgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEtpbmdDb250cm9sbGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uRGllLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlSGVhbHRoKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCA0KTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyYW5kb20pIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiVmZ4XzFcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlZGeF9CbGVlZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJWZnhfMlwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVkZ4X0JsZWVkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlZmeF8zXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJWRnhfQmxlZWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiVmZ4XzRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlZGeF9CbGVlZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkhlYWx0aEJhci5zY2FsZVggLT0gMC4wNTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja1BhdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwLjEgJiYgdGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmNoZWNrUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19