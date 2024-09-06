
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
        _this.rigidbody = null;
        _this.skin = "";
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.isActive = false;
        _this.pauseFlag = false;
        _this.enemyCollider = null;
        _this.isDoneAnim = true;
        return _this;
    }
    Army_1 = Army;
    Army.prototype.start = function () {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        if (!constants_1.Constants.isStartGame)
            return;
        if (o.tag === 1 || o.tag === 0 || o.tag === 2) {
            this.isDoneAnim = false;
            this.skin === constants_1.Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === constants_1.Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
            this.enemyCollider = o;
        }
    };
    Army.prototype.onCollisionStay = function (o, s) {
        if (!constants_1.Constants.isStartGame)
            return;
        if (o.tag === 1 || o.tag === 0) {
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionExit = function (o, s) {
        if (!constants_1.Constants.isStartGame)
            return;
        this.canRun = true;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
    };
    Army.prototype.activeRunAnim = function () {
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
            this.isBase = true;
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            if (this.node.name === "Enemy_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.K98Sound);
            if (this.node.name === "Enemy_Lv3")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.EnemyTankSound);
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
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
                _this.isDoneAnim = true;
                _this.isBase
                    ? _this.handleDecreaseHealthBase()
                    : _this.handleDecreaseHealthArmy();
            }
        });
    };
    Army.prototype.handleDecreaseHealthBase = function () {
        if (this.skin === "ally" && (this.node.name === "Army_Lv3" || this.node.name === "Tank")) {
            var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
            spineAttackOfTank.node.active = true;
            spineAttackOfTank.setAnimation(0, "2", false);
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
        if (constants_1.Constants.isHasResult)
            return;
        if (this.skin === "ally" && (this.node.name === "Army_Lv3" || this.node.name === "Tank")) {
            if (constants_1.Constants.enemyArmies[0]) {
                var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                spineAttackOfTank.node.active = true;
                spineAttackOfTank.setAnimation(0, "2", false);
                constants_1.Constants.enemyDie += 1;
                constants_1.Constants.enemyArmies[0].destroy();
                constants_1.Constants.enemyArmies.splice(0, 1);
            }
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        !this.AudioManager.ArmyLv1HitSound.isPlaying && this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            this.enemyCollider.node.getComponent(Army_1).HealthBar.scaleX -= 0.5;
            return;
        }
        if (this.skin === "ally") {
            this.enemyCollider.node.getComponent(Army_1).HealthBar.scaleX -= 0.4;
        }
        if (this.skin === "enemy") {
            this.enemyCollider.node.getComponent(Army_1).HealthBar.scaleX -= 0.2;
        }
    };
    Army.prototype.die = function () {
        if (this.node.getComponent(cc.Collider))
            this.node.getComponent(cc.Collider).destroy();
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
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
        this.die();
        cc.tween(this.node)
            .to(1.2, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
    };
    Army.prototype.checkRun = function () {
        if (!constants_1.Constants.isStartGame)
            return;
        // if(!(this.spine.animation === "Run")) this.spine.setAnimation(0, Constants.ArmyAnim.Run, true);
        if (this.skin === "ally" && this.canRun && this.isLive) {
            if (this.node.name === "Army_Lv3" || this.node.name === "Tank") {
                var currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.7, currentPos.y, 0);
                return;
            }
            if (this.node.name === "Army"
                || this.node.name === "Army_Lv2"
                || this.node.name === "Gun"
                || this.node.name === "Kinfe") {
                var currentPos = this.node.getPosition();
                this.node.position = new cc.Vec3(currentPos.x + 0.7, currentPos.y, 0);
            }
        }
        if (this.skin === "enemy" && this.canRun && this.isLive) {
            var currentPos = this.node.getPosition();
            this.node.position = new cc.Vec3(currentPos.x - 0.7, currentPos.y, 0);
        }
    };
    Army.prototype.checkPause = function () {
        if (constants_1.Constants.isPauseGame) {
            this.canRun = false;
        }
        if (constants_1.Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            return;
        }
        if (!constants_1.Constants.isPauseGame) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBeVBDO1FBdlBHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBQ2hDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUN6QyxnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUF1Ty9CLENBQUM7YUF6UG9CLElBQUk7SUFxQlgsb0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ3pFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENB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VUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUF0UEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUTtJQUZULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F5UHhCO0lBQUQsV0FBQztDQXpQRCxBQXlQQyxDQXpQaUMsRUFBRSxDQUFDLFNBQVMsR0F5UDdDO2tCQXpQb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFybXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIZWFsdGhCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIHNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBjb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG4gICAgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHNraW46IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjYW5SdW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNCYXNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0xpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwYXVzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBlbmVteUNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIgPSBudWxsO1xyXG4gICAgaXNEb25lQW5pbTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlciA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnRcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChBdWRpb01hbmFnZXIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIobzogY2MuUGh5c2ljc0NvbGxpZGVyLCBzKSB7XHJcbiAgICAgICAgaWYoIUNvbnN0YW50cy5pc1N0YXJ0R2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoby50YWcgPT09IDEgfHwgby50YWcgPT09IDAgfHwgby50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RvbmVBbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbiA9PT0gQ29uc3RhbnRzLkFybXlTa2luLkFsbHkgJiYgdGhpcy5zZXRDb2xsaXNpb25Gb3JBbGx5KG8pO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4gPT09IENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSAmJiB0aGlzLnNldENvbGxpc2lvbkZvckVuZW15KG8pO1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sbGlkZXIgPSBvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25TdGF5KG86IGNjLkJveENvbGxpZGVyLCBzKSB7XHJcbiAgICAgICAgaWYoIUNvbnN0YW50cy5pc1N0YXJ0R2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoby50YWcgPT09IDEgfHwgby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvLCBzKSB7XHJcbiAgICAgICAgaWYoIUNvbnN0YW50cy5pc1N0YXJ0R2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNhblJ1biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmVSdW5BbmltKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckFsbHkobzogY2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaGl0IGVuZW15IGJhc2UgfHwgZW5lbXkgYXJteVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMCB8fCBvLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAhKHRoaXMuc3BpbmUuYW5pbWF0aW9uID09PSBcIkF0dGFja1wiKSAmJiB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uQXR0YWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYySGl0U291bmQpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpdCBlbmVteSBiYXNlXHJcbiAgICAgICAgaWYgKG8udGFnID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlzaW9uRm9yRW5lbXkobzogY2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaGl0IGFsbHkgYmFzZSB8fCBhbGx5IGFybXlcclxuICAgICAgICBpZiAoby50YWcgPT09IDEgfHwgby50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkVuZW15X0x2MlwiKSB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suSzk4U291bmQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiRW5lbXlfTHYzXCIpIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5FbmVteVRhbmtTb3VuZCk7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpdCBhbGx5IGJhc2VcclxuICAgICAgICBpZiAoby50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0RvbmVBdHRhY2tBbmltKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gXCJBdHRhY2tcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvbmVBbmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhbmRsZURlY3JlYXNlSGVhbHRoQmFzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmhhbmRsZURlY3JlYXNlSGVhbHRoQXJteSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEZWNyZWFzZUhlYWx0aEJhc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIgfHwgdGhpcy5ub2RlLm5hbWUgPT09IFwiVGFua1wiKSkge1xyXG4gICAgICAgICAgICBsZXQgc3BpbmVBdHRhY2tPZlRhbmsgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCbGFzdFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwaW5lQXR0YWNrT2ZUYW5rLnNldEFuaW1hdGlvbigwLCBcIjJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYzSGl0U291bmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMDg7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImVuZW15XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkFsbHlCYXNlSGVhbCAtPSAwLjA1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEZWNyZWFzZUhlYWx0aEFybXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzSGFzUmVzdWx0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiICYmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIlRhbmtcIikpIHtcclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BpbmVBdHRhY2tPZlRhbmsgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCbGFzdFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BpbmVBdHRhY2tPZlRhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3BpbmVBdHRhY2tPZlRhbmsuc2V0QW5pbWF0aW9uKDAsIFwiMlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgKz0gMTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2M0hpdFNvdW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgIXRoaXMuQXVkaW9NYW5hZ2VyLkFybXlMdjFIaXRTb3VuZC5pc1BsYXlpbmcgJiYgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikpIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uRGllLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIGRlY3JlYXNlIHRoZSBmaXJzdCBhbGx5L2VuZW15IGluIGNvbnN0YW50IGFycmF5O1xyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgKz0gMTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuYWxseUFybWllcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tEaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkhlYWx0aEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEuMiwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMubm9kZS5kZXN0cm95KCkpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUnVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghQ29uc3RhbnRzLmlzU3RhcnRHYW1lKSByZXR1cm5cclxuXHJcbiAgICAgICAgLy8gaWYoISh0aGlzLnNwaW5lLmFuaW1hdGlvbiA9PT0gXCJSdW5cIikpIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLmNhblJ1biAmJiB0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjNcIiB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJUYW5rXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhjdXJyZW50UG9zLnggKyAwLjcsIGN1cnJlbnRQb3MueSwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15XCJcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCJcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkd1blwiXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJLaW5mZVwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKGN1cnJlbnRQb3MueCArIDAuNywgY3VycmVudFBvcy55LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIiAmJiB0aGlzLmNhblJ1biAmJiB0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhjdXJyZW50UG9zLnggLSAwLjcsIGN1cnJlbnRQb3MueSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1BhdXNlR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1BhdXNlR2FtZSAmJiAhdGhpcy5wYXVzZUZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uUnVuLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tQYXVzZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLkhlYWx0aEJhci5zY2FsZVggPD0gMCAmJiB0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGllKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tSdW4oKTtcclxuICAgIH1cclxufVxyXG4iXX0=