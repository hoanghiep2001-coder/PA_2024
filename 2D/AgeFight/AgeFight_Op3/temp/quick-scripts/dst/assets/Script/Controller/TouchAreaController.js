
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
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // Node
        _this.CTA = null;
        _this.hidemask = null;
        _this.hand = null;
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        _this.btn_upgrade = null;
        _this.btn_BuyArmys = [];
        _this.ps_upgrade = [];
        _this.Lv1Troops = [];
        _this.Lv2Troops = [];
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
        // this.Lv2Troops.forEach(troop => troop.active = false);
    };
    TouchAreaController.prototype.registerEvent = function () {
        // hidemask
        // this.hidemask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _this = this;
        var _loop_1 = function (index) {
            var btn = this_1.btn_SpawnArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                if (constants_1.Constants.isLoose || constants_1.Constants.isWin || _this.CTA.active)
                    return;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                _this.GamePlay.spawnArmy(index + 1);
                _this.hand.active = false;
                // this.IronSource.handleIronSourcePlaySound();
            }, this_1);
        };
        var this_1 = this;
        // btn spawn army
        for (var index = 0; index < this.btn_SpawnArmys.length; index++) {
            _loop_1(index);
        }
        ;
        var _loop_2 = function (index) {
            var btn = this_2.btn_BuyArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                // handle buy lv2 army
                if (index === 0) {
                    if (constants_1.Constants.currentCoin >= 60) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv2 = true;
                        constants_1.Constants.enemyDie -= 2;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
                // handle buy lv3 army
                else {
                    if (constants_1.Constants.currentCoin >= 90) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv3 = true;
                        constants_1.Constants.enemyDie -= 3;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
            }, this_2);
        };
        var this_2 = this;
        // btn buy army
        for (var index = 0; index < this.btn_BuyArmys.length; index++) {
            _loop_2(index);
        }
        // btn upgrade
        this.btn_upgrade.on(cc.Node.EventType.TOUCH_START, function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.UpgradeSound);
            if (constants_1.Constants.currentCoin >= 120) {
                console.log("Upgraded");
                constants_1.Constants.isUpgrade = true;
                constants_1.Constants.enemyDie -= 4;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.UpgradeSound);
                _this.btn_upgrade.parent.active = false;
                _this.ps_upgrade.forEach(function (ps) { return ps.resetSystem(); });
                _this.Lv2Troops.forEach(function (troop) { return troop.active = true; });
                _this.Lv1Troops.forEach(function (troop) { return troop.active = false; });
            }
            else {
                console.log("Fail");
            }
        }, this);
        // btn install
        // this.btn_install.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
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
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hidemask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_BuyArmys", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], TouchAreaController.prototype, "ps_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv1Troops", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv2Troops", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBbUpDO1FBbEpDLFlBQVk7UUFFWixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBSTdCLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBK0c1QixDQUFDO0lBN0dXLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseURBQXlEO0lBQzNELENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUVFLFdBQVc7UUFDWCw0RkFBNEY7UUFIOUYsaUJBZ0dDO2dDQTFGVSxLQUFLO1lBQ1osSUFBTSxHQUFHLEdBQUcsT0FB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IElyb25Tb3VyY2UgZnJvbSBcIi4uL0RhdGEvSXJvblNvdXJjZVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShJcm9uU291cmNlKVxyXG4gIElyb25Tb3VyY2U6IElyb25Tb3VyY2UgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGlkZW1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGJ0bl9TcGF3bkFybXlzOiBjYy5Ob2RlW10gPSBbXTtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBidG5faW5zdGFsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYnRuX3VwZ3JhZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGJ0bl9CdXlBcm15czogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICBwc191cGdyYWRlOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBMdjFUcm9vcHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgTHYyVHJvb3BzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAvLyB0aGlzLkx2MlRyb29wcy5mb3JFYWNoKHRyb29wID0+IHRyb29wLmFjdGl2ZSA9IGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gaGlkZW1hc2tcclxuICAgIC8vIHRoaXMuaGlkZW1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gYnRuIHNwYXduIGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9TcGF3bkFybXlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLmJ0bl9TcGF3bkFybXlzW2luZGV4XTtcclxuICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNMb29zZSB8fCBDb25zdGFudHMuaXNXaW4gfHwgdGhpcy5DVEEuYWN0aXZlKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsaWNrU291bmQpO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuc3Bhd25Bcm15KGluZGV4ICsgMSk7XHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBidG4gYnV5IGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9CdXlBcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fQnV5QXJteXNbaW5kZXhdO1xyXG4gICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGJ1eSBsdjIgYXJteVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYnV5U291bmQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXllZFwiKTtcclxuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgLT0gMjtcclxuICAgICAgICAgICAgdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleCArIDFdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBidXkgbHYzIGFybXlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuY3VycmVudENvaW4gPj0gOTApIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJ1eVNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnV5ZWRcIik7XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15RGllIC09IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX1NwYXduQXJteXNbaW5kZXggKyAxXS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBidG4gdXBncmFkZVxyXG4gICAgdGhpcy5idG5fdXBncmFkZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suVXBncmFkZVNvdW5kKTtcclxuICAgICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSAxMjApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZ3JhZGVkXCIpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5lbmVteURpZSAtPSA0O1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5VcGdyYWRlU291bmQpO1xyXG4gICAgICAgIHRoaXMuYnRuX3VwZ3JhZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHNfdXBncmFkZS5mb3JFYWNoKHBzID0+IHBzLnJlc2V0U3lzdGVtKCkpO1xyXG4gICAgICAgIHRoaXMuTHYyVHJvb3BzLmZvckVhY2godHJvb3AgPT4gdHJvb3AuYWN0aXZlID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5MdjFUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB0cm9vcC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgIC8vIGJ0biBpbnN0YWxsXHJcbiAgICAvLyB0aGlzLmJ0bl9pbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19