"use strict";
cc._RF.push(module, '6667fJIRhJHE6YyfchB8gYC', 'Supporter');
// Script/Other/Supporter.ts

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
var Army_1 = require("./Army");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Supporter = /** @class */ (function (_super) {
    __extends(Supporter, _super);
    function Supporter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.collide = null;
        _this.spine = null;
        _this.enemyCollider = null;
        _this.isActive = false;
        _this.isDoneAttackAnim = true;
        return _this;
    }
    Supporter.prototype.start = function () {
        this.spine = this.getComponent(sp.Skeleton);
    };
    Supporter.prototype.onCollisionEnter = function (o, s) {
        if (!this.isActive || !this.isDoneAttackAnim)
            return;
        if (o.tag === 2) {
            !(this.spine.animation === "Attack") && constants_1.Constants.isStartGame && this.Attack(o);
            this.enemyCollider = o;
        }
    };
    Supporter.prototype.onCollisionStay = function (o, s) {
        if (!this.isActive || !this.isDoneAttackAnim)
            return;
        if (o.tag === 2) {
            !(this.spine.animation === "Attack") && constants_1.Constants.isStartGame && this.Attack(o);
            this.enemyCollider = o;
        }
    };
    Supporter.prototype.onCollisionExit = function (o, s) {
        if (!this.isActive)
            return;
        this.spine.setAnimation(0, constants_1.Constants.SupporterAnim.Idle, true);
    };
    Supporter.prototype.Attack = function (o) {
        var _this = this;
        this.isDoneAttackAnim = false;
        this.spine.setAnimation(0, constants_1.Constants.SupporterAnim.Attack, true);
        this.spine.setCompleteListener(function (trackEntry) {
            _this.isDoneAttackAnim = true;
            if (trackEntry.animation.name === "Attack") {
                _this.node.name === "Spine_Cauda" && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
                if (_this.node.name === "spine_Phao") {
                    var spine = _this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                    spine.node.active = true;
                    _this.node.getChildByName("Blast").getComponent(sp.Skeleton).setAnimation(0, "2", false);
                }
                if (o) {
                    o.getComponent(Army_1.default).checkDie();
                    _this.node.name === "spine_Phao" && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.BoomSound);
                    _this.node.name === "Spine_Laze" && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.lazerSound);
                }
            }
        });
    };
    __decorate([
        property(AudioManager_1.default)
    ], Supporter.prototype, "AudioManager", void 0);
    Supporter = __decorate([
        ccclass
    ], Supporter);
    return Supporter;
}(cc.Component));
exports.default = Supporter;

cc._RF.pop();