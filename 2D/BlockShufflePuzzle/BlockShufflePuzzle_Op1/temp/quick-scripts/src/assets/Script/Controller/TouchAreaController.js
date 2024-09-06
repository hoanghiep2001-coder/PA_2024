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
        _this.currentBlockNumber = 0;
        _this.currentBlockPositionInTable = 0;
        _this.prevPos = null;
        _this.canMoveLeft = false;
        _this.canMoveRight = false;
        _this.canMoveUp = false;
        _this.canMoveDown = false;
        return _this;
        // protected update(dt: number): void {
        //   this.GamePlay.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.Blocks.forEach(function (block, index) {
            block.on(cc.Node.EventType.TOUCH_START, function () { _this.blockTouchStart(block, index); }, _this);
            block.on(cc.Node.EventType.TOUCH_MOVE, _this.blockTouchMove, _this);
            block.on(cc.Node.EventType.TOUCH_END, _this.blockTouchEnd, _this);
            block.on(cc.Node.EventType.TOUCH_CANCEL, _this.blockTouchEnd, _this);
        });
        this.NodesContainer.hideMask
            .on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.blockTouchStart = function (e, index) {
        // ironsource
        // this.handleIronSourcePlaySound()
        if (!constants_1.Constants.isCanTouch)
            return;
        if (constants_1.Constants.isToStore || constants_1.Constants.movesLeft <= 0) {
            this.GameController.installHandle();
            return;
        }
        var node = e;
        var orderNumber = this.extractOrderNumber(node.name);
        this.currentBlockPositionInTable = index;
        if (orderNumber !== null) {
            console.log("Curent Block Touch: " + orderNumber);
            this.currentBlockNumber = orderNumber;
        }
        this.NodesContainer.Hand.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        var canMove = this.isMoveEnable(this.currentBlockPositionInTable);
        var block = this.NodesContainer.Blocks[this.currentBlockPositionInTable];
        var blockPos = block.getPosition();
        if (canMove) {
            if (this.canMoveDown)
                this.moveBlock(block, blockPos.x, blockPos.y - 226);
            if (this.canMoveUp)
                this.moveBlock(block, blockPos.x, blockPos.y + 226);
            if (this.canMoveLeft)
                this.moveBlock(block, blockPos.x - 226, blockPos.y);
            if (this.canMoveRight)
                this.moveBlock(block, blockPos.x + 226, blockPos.y);
        }
    };
    TouchAreaController.prototype.blockTouchMove = function (e) {
    };
    TouchAreaController.prototype.blockTouchEnd = function () {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        constants_1.Constants.movesLeft -= 1;
        this.canMoveDown = false;
        this.canMoveLeft = false;
        this.canMoveRight = false;
        this.canMoveUp = false;
        this.prevPos = null;
    };
    TouchAreaController.prototype.hideMaskTouchStart = function () {
        // mtg & applovin
        if (constants_1.Constants.isToStore || constants_1.Constants.movesLeft <= 0) {
            this.GameController.installHandle();
            return;
        }
        // ironsource
        // this.handleIronSourcePlaySound();
    };
    // Method to extract order number from node name
    TouchAreaController.prototype.extractOrderNumber = function (name) {
        var match = name.match(/_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    };
    TouchAreaController.prototype.isMoveEnable = function (orderNumber) {
        var result = false;
        if (!constants_1.Constants.tablePuzzle[orderNumber - 1]) {
            console.log("left");
            this.canMoveLeft = true;
            constants_1.Constants.tablePuzzle[orderNumber - 1] = true;
            constants_1.Constants.tablePuzzle[orderNumber] = false;
            return true;
        }
        if (!constants_1.Constants.tablePuzzle[orderNumber + 1]) {
            console.log("right");
            this.canMoveRight = true;
            constants_1.Constants.tablePuzzle[orderNumber + 1] = true;
            constants_1.Constants.tablePuzzle[orderNumber] = false;
            return true;
        }
        if (!constants_1.Constants.tablePuzzle[orderNumber + 4]) {
            console.log("down");
            this.canMoveDown = true;
            constants_1.Constants.tablePuzzle[orderNumber + 4] = true;
            constants_1.Constants.tablePuzzle[orderNumber] = false;
            return true;
        }
        if (!constants_1.Constants.tablePuzzle[orderNumber - 4]) {
            console.log("up");
            this.canMoveUp = true;
            constants_1.Constants.tablePuzzle[orderNumber - 4] = true;
            constants_1.Constants.tablePuzzle[orderNumber] = false;
            return true;
        }
        return result;
    };
    TouchAreaController.prototype.moveBlock = function (block, x, y) {
        cc.tween(block)
            .to(0.1, { x: x, y: y })
            .call(function () { constants_1.Constants.isCanTouch = true; })
            .start();
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