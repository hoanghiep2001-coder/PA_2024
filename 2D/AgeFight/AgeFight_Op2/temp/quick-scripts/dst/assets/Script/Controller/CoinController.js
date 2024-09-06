
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
        _this.label = null;
        _this.tempEnemyDie = 0;
        _this.isTweenRunning = false;
        return _this;
    }
    CoinController.prototype.start = function () {
        // this.label.string = String(50);
    };
    CoinController.prototype.handleIncreaseCoin = function (fromValue, toValue) {
        var _this = this;
        if (this.isTweenRunning)
            return;
        constants_1.Constants.isStartGame && this.AudioManager.playSound(constants_1.Constants.SoundTrack.coinSound);
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
    CoinController.prototype.update = function (dt) {
        if (this.tempEnemyDie !== constants_1.Constants.enemyDie) {
            var toValue = constants_1.Constants.enemyDie * 10;
            this.handleIncreaseCoin(constants_1.Constants.currentCoin, toValue);
        }
        this.tempEnemyDie = constants_1.Constants.enemyDie;
    };
    __decorate([
        property(AudioManager_1.default)
    ], CoinController.prototype, "AudioManager", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDb2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMENDO1FBeENHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLG9CQUFjLEdBQVksS0FBSyxDQUFDOztJQW1DcEMsQ0FBQztJQWpDYSw4QkFBSyxHQUFmO1FBQ0ksa0NBQWtDO0lBQ3RDLENBQUM7SUFHTSwyQ0FBa0IsR0FBekIsVUFBMEIsU0FBaUIsRUFBRSxPQUFlO1FBQTVELGlCQWtCQztRQWpCRyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUVoQyxxQkFBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUMvQixRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QyxPQUFPLFFBQVEsQ0FBQztZQUNwQixDQUFDO1NBQ0osQ0FBQzthQUNELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFHUywrQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxxQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUN6QyxJQUFJLE9BQU8sR0FBRyxxQkFBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7d0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSTtJQUpOLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwQ2xDO0lBQUQscUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzJDLEVBQUUsQ0FBQyxTQUFTLEdBMEN2RDtrQkExQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICB0ZW1wRW5lbXlEaWU6IG51bWJlciA9IDA7XHJcbiAgICBpc1R3ZWVuUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmxhYmVsLnN0cmluZyA9IFN0cmluZyg1MCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVJbmNyZWFzZUNvaW4oZnJvbVZhbHVlOiBudW1iZXIsIHRvVmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHdlZW5SdW5uaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pc1N0YXJ0R2FtZSAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29pblNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBTdHJpbmcoZnJvbVZhbHVlKTtcclxuICAgICAgICBjYy50d2VlbihDb25zdGFudHMpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgY3VycmVudENvaW46IHRvVmFsdWUgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5mbG9vcihjYy5taXNjLmxlcnAoc3RhcnQsIGVuZCwgdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gbmV3VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVHdlZW5SdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnRlbXBFbmVteURpZSAhPT0gQ29uc3RhbnRzLmVuZW15RGllKSB7XHJcbiAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gQ29uc3RhbnRzLmVuZW15RGllICogMTA7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5jcmVhc2VDb2luKENvbnN0YW50cy5jdXJyZW50Q29pbiwgdG9WYWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZW1wRW5lbXlEaWUgPSBDb25zdGFudHMuZW5lbXlEaWU7XHJcbiAgICB9XHJcbn1cclxuIl19