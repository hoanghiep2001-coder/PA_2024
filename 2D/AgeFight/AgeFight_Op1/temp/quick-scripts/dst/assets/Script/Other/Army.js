
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/Army.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e890fnTUplJe5ZAPuR2b1Xy', 'Army');
// Script/Other/Army.ts

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
var Army = /** @class */ (function (_super) {
    __extends(Army, _super);
    function Army() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HealthBar = null;
        _this.AudioManager = null;
        _this.spine = null;
        _this.collider = null;
        _this.skin = "";
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.pauseFlag = false;
        return _this;
    }
    Army_1 = Army;
    // enemyCollider: cc.BoxCollider = null;
    Army.prototype.start = function () {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.skin === constants_1.Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === constants_1.Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionStay = function (o, s) {
        if (o.tag === 1 || o.tag === 0) {
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionExit = function (o, s) {
        this.canRun = true;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
    };
    Army.prototype.setCollisionForAlly = function (o) {
        // hit enemy base || enemy army
        if (o.tag === 0 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            if (this.node.name === "Army_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim();
        }
        // hit enemy base
        if (o.tag === 0) {
            constants_1.Constants.isCollideBase = true;
            this.isBase = true;
            this.checkDie();
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            if (this.node.name === "Army_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim();
        }
        // hit ally base
        if (o.tag === 1) {
            this.isBase = true;
        }
    };
    Army.prototype.checkDoneAttackAnim = function () {
        var _this = this;
        this.spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Attack") {
                _this.isBase
                    ? _this.handleDecreaseHealthBase()
                    : _this.handleDecreaseHealthArmy();
            }
        });
    };
    Army.prototype.handleDecreaseHealthBase = function () {
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            constants_1.Constants.EnemyBaseHeal -= 0.08;
            return;
        }
        if (this.skin === "ally") {
            constants_1.Constants.EnemyBaseHeal -= 0.05;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.AllyBaseHeal -= 0.05;
        }
    };
    Army.prototype.handleDecreaseHealthArmy = function () {
        // this.enemyCollider.node.getComponent(Army).HealthBar.scaleX -= 0.3;
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.4;
            return;
        }
        if (this.skin === "ally") {
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.allyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
        }
    };
    Army.prototype.die = function () {
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
        this.node.getComponent(Army_1).enabled = false;
        // decrease the first ally/enemy in constant array;
        if (this.skin === "enemy") {
            constants_1.Constants.enemyDie += 1;
            constants_1.Constants.enemyArmies.splice(0, 1);
        }
        else {
            constants_1.Constants.allyArmies.splice(0, 1);
        }
    };
    Army.prototype.checkDie = function () {
        var _this = this;
        this.isLive = false;
        this.HealthBar.active = false;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.die();
    };
    Army.prototype.checkRun = function () {
        if (this.skin === "ally" && this.canRun && this.isLive) {
            if (this.node.name === "Army_Lv3") {
                var currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 1, currentPos.y, 0);
                return;
            }
            if (this.node.name === "Army" || this.node.name === "Army_Lv2") {
                var currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.5, currentPos.y, 0);
            }
        }
        if (this.skin === "enemy" && this.canRun && this.isLive) {
            var currentPos = this.node.getPosition();
            this.node.position = new cc.Vec3(currentPos.x - 0.5, currentPos.y, 0);
        }
    };
    Army.prototype.checkPause = function () {
        if (constants_1.Constants.isPauseGame) {
            this.canRun = false;
        }
        if (constants_1.Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.collider.enabled = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            return;
        }
        if (!constants_1.Constants.isPauseGame) {
            // this.collider.enabled = true;
            this.pauseFlag = false;
        }
    };
    Army.prototype.update = function (dt) {
        this.checkPause();
        if (this.HealthBar.scaleX <= 0 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    };
    var Army_1;
    __decorate([
        property(cc.Node)
    ], Army.prototype, "HealthBar", void 0);
    Army = Army_1 = __decorate([
        ccclass
    ], Army);
    return Army;
}(cc.Component));
exports.default = Army;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBME5DO1FBeE5HLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUE2TS9CLENBQUM7YUExTm9CLElBQUk7SUFjckIsd0NBQXdDO0lBRzlCLG9CQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ3RFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRCwrQkFBZ0IsR0FB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhlYWx0aEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgc2tpbjogc3RyaW5nID0gXCJcIjtcclxuICAgIGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0Jhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIHBhdXNlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gZW5lbXlDb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnRcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJBdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KEF1ZGlvTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvOiBjYy5Cb3hDb2xsaWRlciwgcykge1xyXG4gICAgICAgIGlmKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbiA9PT0gQ29uc3RhbnRzLkFybXlTa2luLkFsbHkgJiYgdGhpcy5zZXRDb2xsaXNpb25Gb3JBbGx5KG8pO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4gPT09IENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSAmJiB0aGlzLnNldENvbGxpc2lvbkZvckVuZW15KG8pO1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25TdGF5KG86IGNjLkJveENvbGxpZGVyLCBzKSB7XHJcbiAgICAgICAgaWYoby50YWcgPT09IDEgfHwgby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvLCBzKSB7XHJcbiAgICAgICAgdGhpcy5jYW5SdW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckFsbHkobzogY2MuQm94Q29sbGlkZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBoaXQgZW5lbXkgYmFzZSB8fCBlbmVteSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MkhpdFNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RvbmVBdHRhY2tBbmltKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaXQgZW5lbXkgYmFzZVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDb2xsaWRlQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb2xsaXNpb25Gb3JFbmVteShvOiBjYy5Cb3hDb2xsaWRlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGhpdCBhbGx5IGJhc2UgfHwgYWxseSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MkhpdFNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RvbmVBdHRhY2tBbmltKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaXQgYWxseSBiYXNlXHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEb25lQXR0YWNrQW5pbSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IHNwLnNwaW5lLlRyYWNrRW50cnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiQXR0YWNrXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCYXNlXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5oYW5kbGVEZWNyZWFzZUhlYWx0aEFybXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjNcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYzSGl0U291bmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICBpZih0aGlzLnNraW4gPT09IFwiYWxseVwiICYmIHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wODtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURlY3JlYXNlSGVhbHRoQXJteSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmVuZW15Q29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjM7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjNcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjNIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC40O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZGllKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLkRpZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoQXJteSkuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZmlyc3QgYWxseS9lbmVteSBpbiBjb25zdGFudCBhcnJheTtcclxuICAgICAgICBpZih0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgKz0gMTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRGllKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNMaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHRoaXMubm9kZS5kZXN0cm95KCkpXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1J1bigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLmNhblJ1biAmJiB0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoY3VycmVudFBvcy54ICsgMSwgY3VycmVudFBvcy55LCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteVwiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoY3VycmVudFBvcy54ICsgMC41LCBjdXJyZW50UG9zLnksIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIHRoaXMuY2FuUnVuICYmIHRoaXMuaXNMaXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKGN1cnJlbnRQb3MueCAtIDAuNSwgY3VycmVudFBvcy55LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tQYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50cy5pc1BhdXNlR2FtZSAmJiAhdGhpcy5wYXVzZUZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tQYXVzZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwICYmIHRoaXMuaXNMaXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEaWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja1J1bigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==