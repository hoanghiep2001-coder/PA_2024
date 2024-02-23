"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var GameController_1 = require("./GameController");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        return _this;
    }
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.switchVolume(constants_1.Constants.SoundTrack.bgSound, 0.7);
        this.handleGamePlay();
        this.initGame();
    };
    GamePlay.prototype.initGame = function () {
        this.NodesContainer.doll_dress.active = false;
        this.NodesContainer.CTA.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.handleOpenDoor();
        this.handleShowAdultery();
    };
    GamePlay.prototype.handleOpenDoor = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.knockDoorSound);
        }, 1);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.openDoorSound);
            _this.NodesContainer.door.getComponent(cc.Animation).play("OpenDoor_Anim");
        }, 2.5);
        this.scheduleOnce(function () {
            _this.NodesContainer.doll_mouth_default.active = false;
            _this.NodesContainer.doll_mouth_suprise.active = true;
            _this.NodesContainer.doll.getComponent(cc.Animation).play("Doll_InHouseAnim");
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ShakeAnim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.screamSound);
        }, 3);
    };
    GamePlay.prototype.handleShowAdultery = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomAnim");
        }, 4.5);
        this.scheduleOnce(function () {
            _this.getComponent(cc.Animation).play("GamePlay_ShowAdultery");
        }, 5);
        this.scheduleOnce(function () {
            _this.NodesContainer.doll_tears_left.node.active = true;
            _this.NodesContainer.doll_tears_right.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        }, 5.8);
        this.scheduleOnce(function () {
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomOutAnim");
        }, 6.5);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanClick = true;
            _this.NodesContainer.UI_Container.getComponent(cc.Animation).play("UI_Anim");
        }, 7.5);
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();