
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
var IronSource_1 = require("../Data/IronSource");
var Army_1 = require("../Other/Army");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var SpawnController_1 = require("./SpawnController");
var SupporterController_1 = require("./SupporterController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.SupporterController = null;
        _this.SpawnController = null;
        _this.IronSource = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // Node
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var btn = this_1.btn_SpawnArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                !constants_1.Constants.isStartGame && _this.SpawnController.SpawnAllies();
                !constants_1.Constants.isStartGame && _this.SpawnController.SpawnEnemies();
                !constants_1.Constants.isStartGame && _this.activeAnimForAllCurrentArmies();
                constants_1.Constants.isStartGame = true;
                index === 0 && _this.activeSupporter(10, constants_1.Constants.isBuySupportLv1, index, btn, 1);
                index === 1 && _this.activeSupporter(30, constants_1.Constants.isBuySupportLv2, index, btn, 3);
                index === 2 && _this.activeSupporter(50, constants_1.Constants.isBuySupportLv3, index, btn, 5);
                _this.IronSource.handleIronSourcePlaySound();
            }, this_1);
        };
        var this_1 = this;
        // btn spawn army
        for (var index = 0; index < this.btn_SpawnArmys.length; index++) {
            _loop_1(index);
        }
        ;
    };
    TouchAreaController.prototype.activeAnimForAllCurrentArmies = function () {
        for (var index = 0; index < constants_1.Constants.allyArmies.length; index++) {
            var army = constants_1.Constants.allyArmies[index];
            army.getComponent(Army_1.default).activeRunAnim();
        }
        for (var index = 0; index < constants_1.Constants.allyArmies.length; index++) {
            var army = constants_1.Constants.allyArmies[index];
            army.getComponent(Army_1.default).activeRunAnim();
        }
    };
    TouchAreaController.prototype.activeSupporter = function (target, StoreboolCondition, index, btn, StoreDisCount) {
        if (constants_1.Constants.currentCoin >= target && !StoreboolCondition) {
            console.log("buyed");
            StoreboolCondition = true;
            constants_1.Constants.enemyDie -= StoreDisCount;
            this.SupporterController.activeSupporter(index);
            btn.getChildByName("canChoose").opacity = 0;
            btn.off(cc.Node.EventType.TOUCH_START);
        }
    };
    __decorate([
        property(SupporterController_1.default)
    ], TouchAreaController.prototype, "SupporterController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], TouchAreaController.prototype, "SpawnController", void 0);
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHNDQUFpQztBQUNqQyx1REFBa0Q7QUFDbEQsbURBQWtEO0FBQ2xELHVDQUFrQztBQUNsQyxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBb0ZDO1FBbkZDLFlBQVk7UUFFWix5QkFBbUIsR0FBd0IsSUFBSSxDQUFDO1FBRWhELHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUV4QyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQWdFOUIsQ0FBQztJQTdEVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUFBLGlCQW1CQztnQ0FqQlUsS0FBSztZQUNaLElBQU0sR0FBRyxHQUFHLE9BQUssY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxV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REMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBSzFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOytEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1U7SUFwQmpCLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBb0YvQjtJQUFELDBCQUFDO0NBcEZELEFBb0ZDLENBcEZ3QyxFQUFFLENBQUMsU0FBUyxHQW9GcEQ7QUFwRlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuLi9EYXRhL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IEFybXkgZnJvbSBcIi4uL090aGVyL0FybXlcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgU3Bhd25Db250cm9sbGVyIGZyb20gXCIuL1NwYXduQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU3VwcG9ydGVyQ29udHJvbGxlciBmcm9tIFwiLi9TdXBwb3J0ZXJDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShTdXBwb3J0ZXJDb250cm9sbGVyKVxyXG4gIFN1cHBvcnRlckNvbnRyb2xsZXI6IFN1cHBvcnRlckNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShTcGF3bkNvbnRyb2xsZXIpXHJcbiAgU3Bhd25Db250cm9sbGVyOiBTcGF3bkNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShJcm9uU291cmNlKVxyXG4gIElyb25Tb3VyY2U6IElyb25Tb3VyY2UgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgYnRuX1NwYXduQXJteXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJ0bl9pbnN0YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIC8vIGJ0biBzcGF3biBhcm15XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5idG5fU3Bhd25Bcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleF07XHJcbiAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuICAgICAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduQWxsaWVzKCk7XHJcbiAgICAgICAgIUNvbnN0YW50cy5pc1N0YXJ0R2FtZSAmJiB0aGlzLlNwYXduQ29udHJvbGxlci5TcGF3bkVuZW1pZXMoKTtcclxuICAgICAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuYWN0aXZlQW5pbUZvckFsbEN1cnJlbnRBcm1pZXMoKTtcclxuICAgICAgICBDb25zdGFudHMuaXNTdGFydEdhbWUgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgaW5kZXggPT09IDAgJiYgdGhpcy5hY3RpdmVTdXBwb3J0ZXIoMTAsIENvbnN0YW50cy5pc0J1eVN1cHBvcnRMdjEsIGluZGV4LCBidG4sIDEpO1xyXG4gICAgICAgIGluZGV4ID09PSAxICYmIHRoaXMuYWN0aXZlU3VwcG9ydGVyKDMwLCBDb25zdGFudHMuaXNCdXlTdXBwb3J0THYyLCBpbmRleCwgYnRuLCAzKTtcclxuICAgICAgICBpbmRleCA9PT0gMiAmJiB0aGlzLmFjdGl2ZVN1cHBvcnRlcig1MCwgQ29uc3RhbnRzLmlzQnV5U3VwcG9ydEx2MywgaW5kZXgsIGJ0biwgNSk7XHJcblxyXG4gICAgICAgIHRoaXMuSXJvblNvdXJjZS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUFuaW1Gb3JBbGxDdXJyZW50QXJtaWVzKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENvbnN0YW50cy5hbGx5QXJtaWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBhcm15ID0gQ29uc3RhbnRzLmFsbHlBcm1pZXNbaW5kZXhdO1xyXG4gICAgICBhcm15LmdldENvbXBvbmVudChBcm15KS5hY3RpdmVSdW5BbmltKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQ29uc3RhbnRzLmFsbHlBcm1pZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGFybXkgPSBDb25zdGFudHMuYWxseUFybWllc1tpbmRleF07XHJcbiAgICAgIGFybXkuZ2V0Q29tcG9uZW50KEFybXkpLmFjdGl2ZVJ1bkFuaW0oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVN1cHBvcnRlcihcclxuICAgIHRhcmdldDogbnVtYmVyLFxyXG4gICAgU3RvcmVib29sQ29uZGl0aW9uOiBib29sZWFuLFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGJ0bjogY2MuTm9kZSxcclxuICAgIFN0b3JlRGlzQ291bnQ6IG51bWJlclxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSB0YXJnZXQgJiYgIVN0b3JlYm9vbENvbmRpdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1eWVkXCIpO1xyXG4gICAgICBTdG9yZWJvb2xDb25kaXRpb24gPSB0cnVlO1xyXG4gICAgICBDb25zdGFudHMuZW5lbXlEaWUgLT0gU3RvcmVEaXNDb3VudDtcclxuICAgICAgdGhpcy5TdXBwb3J0ZXJDb250cm9sbGVyLmFjdGl2ZVN1cHBvcnRlcihpbmRleCk7XHJcbiAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcImNhbkNob29zZVwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgYnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=