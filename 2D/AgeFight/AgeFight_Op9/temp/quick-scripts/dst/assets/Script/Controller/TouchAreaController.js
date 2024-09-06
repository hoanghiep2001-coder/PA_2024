
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
        // this.btn_upgrade.on(cc.Node.EventType.TOUCH_START, () => {
        //   this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
        //   if (Constants.currentCoin >= 120) {
        //     console.log("Upgraded");
        //     Constants.isUpgrade = true;
        //     Constants.enemyDie -= 4;
        //     this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
        //     this.btn_upgrade.parent.active = false;
        //     this.ps_upgrade.forEach(ps => ps.resetSystem());
        //     this.Lv2Troops.forEach(troop => troop.active = true);
        //     this.Lv1Troops.forEach(troop => troop.active = false);
        //   } else {
        //     console.log("Fail");
        //   }
        // }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBeUpDO1FBeEpDLFlBQVk7UUFFWixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSTVCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBSTdCLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBbUg1QixDQUFDO0lBaEhXLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseURBQXlEO0lBQzNELENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUVFLFdBQVc7UUFDWCw0RkFBNEY7UUFIOUYsaUJBbUdDO2dDQTdGVSxLQUFLO1lBQ1osSUFBTSxHQUFHLEdBQUcsT0FB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O0lBRXJDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBdENmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBeUovQjtJQUFELDBCQUFDO0NBekpELEFBeUpDLENBekp3QyxFQUFFLENBQUMsU0FBUyxHQXlKcEQ7QUF6Slksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuLi9EYXRhL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoSXJvblNvdXJjZSlcclxuICBJcm9uU291cmNlOiBJcm9uU291cmNlID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIE5vZGVcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhpZGVtYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgYnRuX1NwYXduQXJteXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJ0bl9pbnN0YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBidG5fdXBncmFkZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGJ0bl9CdXlBcm15czogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICBwc191cGdyYWRlOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBMdjFUcm9vcHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgTHYyVHJvb3BzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgLy8gdGhpcy5MdjJUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB0cm9vcC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGhpZGVtYXNrXHJcbiAgICAvLyB0aGlzLmhpZGVtYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIGJ0biBzcGF3biBhcm15XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5idG5fU3Bhd25Bcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleF07XHJcbiAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzVG9TdG9yZSkge1xyXG4gICAgICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzTG9vc2UgfHwgQ29uc3RhbnRzLmlzV2luIHx8IHRoaXMuQ1RBLmFjdGl2ZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5zcGF3bkFybXkoaW5kZXggKyAxKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBidG4gYnV5IGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9CdXlBcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fQnV5QXJteXNbaW5kZXhdO1xyXG4gICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGJ1eSBsdjIgYXJteVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYnV5U291bmQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXllZFwiKTtcclxuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgLT0gMjtcclxuICAgICAgICAgICAgdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleCArIDFdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBidXkgbHYzIGFybXlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuY3VycmVudENvaW4gPj0gOTApIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJ1eVNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnV5ZWRcIik7XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15RGllIC09IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX1NwYXduQXJteXNbaW5kZXggKyAxXS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBidG4gdXBncmFkZVxyXG4gICAgLy8gdGhpcy5idG5fdXBncmFkZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suVXBncmFkZVNvdW5kKTtcclxuICAgIC8vICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSAxMjApIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlVwZ3JhZGVkXCIpO1xyXG4gICAgLy8gICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSB0cnVlO1xyXG4gICAgLy8gICAgIENvbnN0YW50cy5lbmVteURpZSAtPSA0O1xyXG4gICAgLy8gICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5VcGdyYWRlU291bmQpO1xyXG4gICAgLy8gICAgIHRoaXMuYnRuX3VwZ3JhZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMucHNfdXBncmFkZS5mb3JFYWNoKHBzID0+IHBzLnJlc2V0U3lzdGVtKCkpO1xyXG4gICAgLy8gICAgIHRoaXMuTHYyVHJvb3BzLmZvckVhY2godHJvb3AgPT4gdHJvb3AuYWN0aXZlID0gdHJ1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5MdjFUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB0cm9vcC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJGYWlsXCIpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gfSwgdGhpcyk7XHJcblxyXG5cclxuICAgIC8vIGJ0biBpbnN0YWxsXHJcbiAgICAvLyB0aGlzLmJ0bl9pbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19