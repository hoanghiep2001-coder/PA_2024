"use strict";
cc._RF.push(module, '71158ED8B1KhJK96FnjvNWK', 'CTA');
// Script/Other/CTA.ts

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
var GameController_1 = require("../Controller/GameController");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.AudioManager = null;
        _this.btn = null;
        _this.overlay = null;
        _this.PS = null;
        _this.Next = null;
        _this.tryAgain = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        // cc.tween(this.overlay)
        // .to(0.5, {opacity: 100})
        // .start();
        this.activeTweenForBtn();
        if (constants_1.Constants.isLoose) {
            this.tryAgain.active = true;
            this.Next.active = false;
        }
        else {
            this.tryAgain.active = false;
            this.Next.active = true;
            this.PS.resetSystem();
        }
        this.scheduleOnce(function () {
            // this.btn.opacity = 255;
            // this.tryAgain.opacity = 255;
            // this.Next.opacity = 255;
            if (constants_1.Constants.isLoose) {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.failSound);
            }
            else {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            }
        }, 1.5);
        this.btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    NewClass.prototype.activeTweenForBtn = function () {
        cc.tween(this.btn)
            .repeatForever(cc.tween(this.btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
    };
    __decorate([
        property(GameController_1.GameController)
    ], NewClass.prototype, "GameController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "overlay", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NewClass.prototype, "PS", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Next", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tryAgain", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();