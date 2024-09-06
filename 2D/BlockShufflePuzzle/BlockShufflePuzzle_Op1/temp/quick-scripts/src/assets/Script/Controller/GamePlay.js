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
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.activeScaleAnimOfBlocks();
        this.scheduleOnce(function () { constants_1.Constants.isCanTouch = true; _this.showHint(); }, 1);
    };
    GamePlay.prototype.initTable = function () {
        // Cập nhật vị trí các block trong game sau khi trộn
        var gridSize = 4; // 4x4 grid
        var blockWidth = 122; // Giả sử mỗi block có kích thước 100x100
        var blockHeight = 122;
        var startX = -160; // Tọa độ x ban đầu của grid
        var startY = -240; // Tọa độ y ban đầu của grid
        for (var index = 0; index < (gridSize * gridSize) - 1; index++) {
            var block = cc.instantiate(this.NodesContainer.BlockPrefab);
            this.NodesContainer.Table.addChild(block);
            this.NodesContainer.Blocks.push(block);
        }
        for (var i = 0; i < this.NodesContainer.Blocks.length; i++) {
            var row = Math.floor(i / gridSize);
            var col = i % gridSize;
            this.NodesContainer.Blocks[i].setPosition(startX + col * blockWidth + 15, startY - row * blockHeight - 15);
        }
        this.NodesContainer.initBlockNumber();
    };
    GamePlay.prototype.activeScaleAnimOfBlocks = function () {
        this.NodesContainer.Blocks.forEach(function (block) {
            cc.tween(block)
                .to(1, { scale: 1.8 }, { easing: 'elasticOut' })
                .start();
        });
    };
    GamePlay.prototype.showHint = function () {
        var _this = this;
        this.NodesContainer.Hand.active = true;
        cc.tween(this.NodesContainer.Hand)
            .to(0.5, { opacity: 255 })
            .call(function () {
            _this.NodesContainer.Hand.getComponent(cc.Animation).play();
        })
            .start();
    };
    // private randomBlock(): void {
    //   for (let index = 0; index < this.NodesContainer.Blocks.length; index++) {
    //     const block = this.NodesContainer.Blocks[index];
    //     const pos = block.getPosition();
    //     const random = 
    //   }
    // }
    GamePlay.prototype.showCTA = function (intervalID) {
        var _this = this;
        clearInterval(intervalID);
        this.scheduleOnce(function () {
            _this.NodesContainer.UI.getComponent(cc.Animation).play("CTA_Anim");
        }, 0.5);
    };
    GamePlay.prototype.playGreatSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.AudioManager.pickItemSound.volume = 0.5;
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus1);
                break;
            case 2:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus2);
                break;
            case 3:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus3);
                break;
            case 4:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus4);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
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
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.movesLeft >= 0) {
            this.NodesContainer.Text.getChildByName("Label")
                .getComponent(cc.Label).string = String("Moves Left: " + constants_1.Constants.movesLeft);
        }
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