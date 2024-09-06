"use strict";
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