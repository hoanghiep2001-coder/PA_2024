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
var LoadFoodController_1 = require("./LoadFoodController");
var SpawnController_1 = require("./SpawnController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.LoadFoodController = null;
        _this.SpawnController = null;
        // Node
        _this.CTA = null;
        _this.Boss = null;
        // state
        _this.isCollideBaseFlag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        cc.view.setResizeCallback(function () {
            _this.handleYourOrientation();
        });
    };
    GamePlay.prototype.handleYourOrientation = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            cc.director.loadScene("game_Horizontal");
            constants_1.Constants.scaleArmy = 0.5;
        }
        else {
            var width = cc.view.getFrameSize().width;
            var height = cc.view.getFrameSize().height;
            if (width / height < 0.5) {
                // IPX
                cc.director.loadScene("game_IPX");
                constants_1.Constants.scaleArmy = 0.3;
            }
            else {
                // other
                if (height / width > 1.5) {
                    cc.director.loadScene("game_Vertical");
                    constants_1.Constants.scaleArmy = 0.3;
                }
                else {
                    cc.director.loadScene("game_VerticalIpad");
                    constants_1.Constants.scaleArmy = 0.35;
                }
            }
        }
    };
    GamePlay.prototype.spawnArmy = function (index) {
        switch (index) {
            case 1:
                !constants_1.Constants.isStartGame && this.LoadFoodController.increaseFood();
                !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
                constants_1.Constants.isStartGame = true;
                // spawn army lv1
                if (constants_1.Constants.food >= 3) {
                    constants_1.Constants.food -= 3;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 1);
                }
                break;
            case 2:
                // spawn army lv2
                if (constants_1.Constants.food >= 4 && constants_1.Constants.isCanBuyArmyLv2) {
                    constants_1.Constants.food -= 4;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 2);
                }
                break;
            case 3:
                // spawn army lv3
                if (constants_1.Constants.food >= 5 && constants_1.Constants.isCanBuyArmyLv3) {
                    constants_1.Constants.food -= 5;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 3);
                }
                break;
            default:
                console.log("can not spawn");
                break;
        }
    };
    GamePlay.prototype.update = function (dt) {
        var _this = this;
        if (constants_1.Constants.isCollideBase && !this.isCollideBaseFlag) {
            this.isCollideBaseFlag = true;
            this.Boss.active = true;
            this.scheduleOnce(function () {
                _this.CTA.active = true;
            }, 1.5);
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(LoadFoodController_1.default)
    ], GamePlay.prototype, "LoadFoodController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], GamePlay.prototype, "SpawnController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Boss", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();