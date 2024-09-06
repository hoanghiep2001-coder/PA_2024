
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBbUxDO1FBbExDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUMvQixpQ0FBMkIsR0FBVyxDQUFDLENBQUM7UUFDeEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztRQTZKN0IsdUNBQXVDO1FBQ3ZDLCtDQUErQztRQUMvQyxJQUFJO0lBRU4sQ0FBQztJQTlKVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDOUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxX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Q0FtTC9CO0lBQUQsMEJBQUM7Q0FuTEQsQUFtTEMsQ0FuTHdDLEVBQUUsQ0FBQyxTQUFTLEdBbUxwRDtBQW5MWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIGN1cnJlbnRCbG9ja051bWJlcjogbnVtYmVyID0gMDtcclxuICBjdXJyZW50QmxvY2tQb3NpdGlvbkluVGFibGU6IG51bWJlciA9IDA7XHJcbiAgcHJldlBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gIGNhbk1vdmVMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2FuTW92ZVJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2FuTW92ZVVwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2FuTW92ZURvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQmxvY2tzLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICBibG9jay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge3RoaXMuYmxvY2tUb3VjaFN0YXJ0KGJsb2NrLCBpbmRleCl9LCB0aGlzKTtcclxuICAgICAgYmxvY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5ibG9ja1RvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgIGJsb2NrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5ibG9ja1RvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgYmxvY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmJsb2NrVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5oaWRlTWFza1xyXG4gICAgICAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGlkZU1hc2tUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJsb2NrVG91Y2hTdGFydChlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKVxyXG5cclxuICAgIGlmKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgIGlmKENvbnN0YW50cy5pc1RvU3RvcmUgfHwgQ29uc3RhbnRzLm1vdmVzTGVmdCA8PSAwKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZTogY2MuTm9kZSA9IGU7XHJcbiAgICBjb25zdCBvcmRlck51bWJlciA9IHRoaXMuZXh0cmFjdE9yZGVyTnVtYmVyKG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRCbG9ja1Bvc2l0aW9uSW5UYWJsZSA9IGluZGV4OyAgICBcclxuXHJcbiAgICBpZiAob3JkZXJOdW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coYEN1cmVudCBCbG9jayBUb3VjaDogJHtvcmRlck51bWJlcn1gKTtcclxuICAgICAgdGhpcy5jdXJyZW50QmxvY2tOdW1iZXIgPSBvcmRlck51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucGlja0l0ZW1Tb3VuZCk7XHJcblxyXG4gICAgbGV0IGNhbk1vdmUgPSB0aGlzLmlzTW92ZUVuYWJsZSh0aGlzLmN1cnJlbnRCbG9ja1Bvc2l0aW9uSW5UYWJsZSk7XHJcbiAgICBsZXQgYmxvY2sgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkJsb2Nrc1t0aGlzLmN1cnJlbnRCbG9ja1Bvc2l0aW9uSW5UYWJsZV07XHJcbiAgICBsZXQgYmxvY2tQb3MgPSBibG9jay5nZXRQb3NpdGlvbigpOyBcclxuXHJcbiAgICBpZihjYW5Nb3ZlKSB7XHJcbiAgICAgIGlmKHRoaXMuY2FuTW92ZURvd24pIHRoaXMubW92ZUJsb2NrKGJsb2NrLCBibG9ja1Bvcy54LCBibG9ja1Bvcy55IC0gMjI2KTtcclxuICAgICAgaWYodGhpcy5jYW5Nb3ZlVXApIHRoaXMubW92ZUJsb2NrKGJsb2NrLCBibG9ja1Bvcy54LCBibG9ja1Bvcy55ICsgMjI2KTtcclxuICAgICAgaWYodGhpcy5jYW5Nb3ZlTGVmdCkgIHRoaXMubW92ZUJsb2NrKGJsb2NrLCBibG9ja1Bvcy54IC0gMjI2LCBibG9ja1Bvcy55KTtcclxuICAgICAgaWYodGhpcy5jYW5Nb3ZlUmlnaHQpICB0aGlzLm1vdmVCbG9jayhibG9jaywgYmxvY2tQb3MueCArIDIyNiwgYmxvY2tQb3MueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBibG9ja1RvdWNoTW92ZShlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJsb2NrVG91Y2hFbmQoKTogdm9pZCB7XHJcbiAgICBpZighQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICBDb25zdGFudHMubW92ZXNMZWZ0IC09IDE7XHJcbiAgICB0aGlzLmNhbk1vdmVEb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhbk1vdmVMZWZ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhbk1vdmVSaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jYW5Nb3ZlVXAgPSBmYWxzZTtcclxuICAgIHRoaXMucHJldlBvcyA9IG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoKTogdm9pZCB7XHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgaWYoQ29uc3RhbnRzLmlzVG9TdG9yZSB8fCBDb25zdGFudHMubW92ZXNMZWZ0IDw9IDApIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICB9XHJcblxyXG5cclxuICAgLy8gTWV0aG9kIHRvIGV4dHJhY3Qgb3JkZXIgbnVtYmVyIGZyb20gbm9kZSBuYW1lXHJcbiAgIHByaXZhdGUgZXh0cmFjdE9yZGVyTnVtYmVyKG5hbWU6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBuYW1lLm1hdGNoKC9fKFxcZCspJC8pO1xyXG4gICAgcmV0dXJuIG1hdGNoID8gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpc01vdmVFbmFibGUob3JkZXJOdW1iZXI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBpZighQ29uc3RhbnRzLnRhYmxlUHV6emxlW29yZGVyTnVtYmVyIC0gMV0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpO1xyXG4gICAgICB0aGlzLmNhbk1vdmVMZWZ0ID0gdHJ1ZTtcclxuICAgICAgQ29uc3RhbnRzLnRhYmxlUHV6emxlW29yZGVyTnVtYmVyIC0gMV0gPSB0cnVlO1xyXG4gICAgICBDb25zdGFudHMudGFibGVQdXp6bGVbb3JkZXJOdW1iZXJdID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFDb25zdGFudHMudGFibGVQdXp6bGVbb3JkZXJOdW1iZXIgKyAxXSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpO1xyXG4gICAgICB0aGlzLmNhbk1vdmVSaWdodCA9IHRydWU7XHJcbiAgICAgIENvbnN0YW50cy50YWJsZVB1enpsZVtvcmRlck51bWJlciArIDFdID0gdHJ1ZTtcclxuICAgICAgQ29uc3RhbnRzLnRhYmxlUHV6emxlW29yZGVyTnVtYmVyXSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZighQ29uc3RhbnRzLnRhYmxlUHV6emxlW29yZGVyTnVtYmVyICsgNF0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJkb3duXCIpO1xyXG4gICAgICB0aGlzLmNhbk1vdmVEb3duID0gdHJ1ZTtcclxuICAgICAgQ29uc3RhbnRzLnRhYmxlUHV6emxlW29yZGVyTnVtYmVyICsgNF0gPSB0cnVlO1xyXG4gICAgICBDb25zdGFudHMudGFibGVQdXp6bGVbb3JkZXJOdW1iZXJdID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFDb25zdGFudHMudGFibGVQdXp6bGVbb3JkZXJOdW1iZXIgLSA0XSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVwXCIpO1xyXG4gICAgICB0aGlzLmNhbk1vdmVVcCA9IHRydWU7XHJcbiAgICAgIENvbnN0YW50cy50YWJsZVB1enpsZVtvcmRlck51bWJlciAtIDRdID0gdHJ1ZTtcclxuICAgICAgQ29uc3RhbnRzLnRhYmxlUHV6emxlW29yZGVyTnVtYmVyXSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZUJsb2NrKGJsb2NrOiBjYy5Ob2RlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY2MudHdlZW4oYmxvY2spXHJcbiAgICAudG8oMC4xLCB7eDogeCwgeTogeX0pXHJcbiAgICAuY2FsbCgoKSA9PiB7Q29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlfSlcclxuICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5HYW1lUGxheS5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgLy8gfVxyXG5cclxufVxyXG4iXX0=