"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        return _this;
        // protected update(dt: number): void {
        //     this.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodesContainer.Button_1.on(cc.Node.EventType.TOUCH_START, this.handleClick, this);
        this.NodesContainer.Button_2.on(cc.Node.EventType.TOUCH_START, this.handleClick, this);
        // mtg & applovin
        this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskClick, this);
    };
    TouchAreaController.prototype.hideMaskClick = function () {
        // iroon source
        // this.handleIronSourcePlaySound();
        // ----------------------
        // mtg & applovin
        constants_1.Constants.isDresUp && this.GameController.installHandle();
    };
    TouchAreaController.prototype.handleClick = function (e) {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        // ironsource
        // this.handleIronSourcePlaySound();
        // --------------
        var nodeClick = e.target._name;
        constants_1.Constants.isDresUp && this.GameController.installHandle();
        !constants_1.Constants.isDresUp && this.handleDressUp(nodeClick);
    };
    TouchAreaController.prototype.handleDressUp = function (nodeClick) {
        var _this = this;
        constants_1.Constants.isCanTouch = false;
        constants_1.Constants.isDresUp = true;
        this.AudioManager.stopAllSoundExceptBgSound();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.waoGameSound);
        this.NodesContainer.Effect_Heart.resetSystem();
        this.NodesContainer.Effect_Blink.resetSystem();
        this.NodesContainer.Doll_DressDefault.active = false;
        this.NodesContainer.Hand.active = false;
        nodeClick === "Btn_1" ? this.NodesContainer.Doll_Dress1.active = true : this.NodesContainer.Doll_Dress2.active = true;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.swtichItemSound);
            _this.GamePlay.getComponent(cc.Animation).play("GamePlay_SwitchItem");
            constants_1.Constants.isCanTouch = true;
            _this.NodesContainer.Hand.active = true;
        }, 1);
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();