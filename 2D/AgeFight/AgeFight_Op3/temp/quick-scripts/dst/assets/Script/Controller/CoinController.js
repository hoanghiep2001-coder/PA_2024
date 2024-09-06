
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/CoinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f60c4CpqFlH750A1K4ORO4l', 'CoinController');
// Script/Controller/CoinController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinController = /** @class */ (function (_super) {
    __extends(CoinController, _super);
    function CoinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.frameUnlockArmies = [];
        _this.frameUpgrade = null;
        _this.label = null;
        _this.tempEnemyDie = 0;
        _this.isTweenRunning = false;
        return _this;
    }
    CoinController.prototype.start = function () {
    };
    CoinController.prototype.increaseCoin = function (fromValue, toValue) {
        var _this = this;
        if (this.isTweenRunning)
            return;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.coinSound);
        this.label.string = String(fromValue);
        cc.tween(constants_1.Constants)
            .to(0.5, { currentCoin: toValue }, {
            progress: function (start, end, current, t) {
                var newValue = Math.floor(cc.misc.lerp(start, end, t));
                _this.label.string = newValue.toString();
                return newValue;
            },
        })
            .call(function () {
            _this.isTweenRunning = false;
        })
            .start();
    };
    CoinController.prototype.checkUnlockArmy = function () {
        for (var index = 0; index < this.frameUnlockArmies.length; index++) {
            var node = this.frameUnlockArmies[index];
            var cost = node.getChildByName("Label").getComponent(cc.Label);
            if (constants_1.Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            }
            else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    };
    CoinController.prototype.checkEnableFrameUpgrade = function () {
        var node = this.frameUpgrade;
        if (node) {
            var cost = node.getChildByName("Label").getComponent(cc.Label);
            if (constants_1.Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            }
            else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    };
    CoinController.prototype.update = function (dt) {
        this.checkUnlockArmy();
        this.checkEnableFrameUpgrade();
        if (this.tempEnemyDie !== constants_1.Constants.enemyDie) {
            var toValue = constants_1.Constants.enemyDie * 30;
            this.increaseCoin(constants_1.Constants.currentCoin, toValue);
        }
        this.tempEnemyDie = constants_1.Constants.enemyDie;
    };
    __decorate([
        property(AudioManager_1.default)
    ], CoinController.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.Node])
    ], CoinController.prototype, "frameUnlockArmies", void 0);
    __decorate([
        property(cc.Node)
    ], CoinController.prototype, "frameUpgrade", void 0);
    __decorate([
        property(cc.Label)
    ], CoinController.prototype, "label", void 0);
    CoinController = __decorate([
        ccclass
    ], CoinController);
    return CoinController;
}(cc.Component));
exports.default = CoinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDb2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOEVDO1FBNUVHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUlsQyx1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUFpRXBDLENBQUM7SUE5RGEsOEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTSxxQ0FBWSxHQUFuQixVQUFvQixTQUFpQixFQUFFLE9BQWU7UUFBdEQsaUJBa0JDO1FBakJHLElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQy9CLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJ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Q0E5RUQsQUE4RUMsQ0E5RTJDLEVBQUUsQ0FBQyxTQUFTLEdBOEV2RDtrQkE5RW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgZnJhbWVVbmxvY2tBcm1pZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmcmFtZVVwZ3JhZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICB0ZW1wRW5lbXlEaWU6IG51bWJlciA9IDA7XHJcbiAgICBpc1R3ZWVuUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VDb2luKGZyb21WYWx1ZTogbnVtYmVyLCB0b1ZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1R3ZWVuUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29pblNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBTdHJpbmcoZnJvbVZhbHVlKTtcclxuICAgICAgICBjYy50d2VlbihDb25zdGFudHMpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgY3VycmVudENvaW46IHRvVmFsdWUgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5mbG9vcihjYy5taXNjLmxlcnAoc3RhcnQsIGVuZCwgdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gbmV3VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHdlZW5SdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVW5sb2NrQXJteSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5mcmFtZVVubG9ja0FybWllcy5sZW5ndGg7IGluZGV4KyspIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZnJhbWVVbmxvY2tBcm1pZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmKENvbnN0YW50cy5jdXJyZW50Q29pbiA8IE51bWJlcihjb3N0LnN0cmluZykpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuY29sb3IgPSBjYy5jb2xvcigxMTMsIDExMywgMTEzLCAyNTUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tFbmFibGVGcmFtZVVwZ3JhZGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmZyYW1lVXBncmFkZTtcclxuICAgICAgICBpZihub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvc3QgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmN1cnJlbnRDb2luIDwgTnVtYmVyKGNvc3Quc3RyaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IGNjLmNvbG9yKDExMywgMTEzLCAxMTMsIDI1NSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja1VubG9ja0FybXkoKTtcclxuICAgICAgICB0aGlzLmNoZWNrRW5hYmxlRnJhbWVVcGdyYWRlKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGVtcEVuZW15RGllICE9PSBDb25zdGFudHMuZW5lbXlEaWUpIHtcclxuICAgICAgICAgICAgbGV0IHRvVmFsdWUgPSBDb25zdGFudHMuZW5lbXlEaWUgKiAzMDtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZUNvaW4oQ29uc3RhbnRzLmN1cnJlbnRDb2luLCB0b1ZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRlbXBFbmVteURpZSA9IENvbnN0YW50cy5lbmVteURpZTtcclxuICAgIH1cclxufVxyXG4iXX0=