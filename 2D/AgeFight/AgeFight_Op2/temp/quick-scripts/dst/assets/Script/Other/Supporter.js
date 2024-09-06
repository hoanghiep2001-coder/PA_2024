
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/Supporter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6667fJIRhJHE6YyfchB8gYC', 'Supporter');
// Script/Other/Supporter.ts

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
var Army_1 = require("./Army");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Supporter = /** @class */ (function (_super) {
    __extends(Supporter, _super);
    function Supporter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.collide = null;
        _this.spine = null;
        _this.enemyCollider = null;
        _this.isActive = false;
        _this.isDoneAttackAnim = true;
        return _this;
    }
    Supporter.prototype.start = function () {
        this.spine = this.getComponent(sp.Skeleton);
    };
    Supporter.prototype.onCollisionEnter = function (o, s) {
        if (!this.isActive || !this.isDoneAttackAnim)
            return;
        if (o.tag === 2) {
            !(this.spine.animation === "Attack") && constants_1.Constants.isStartGame && this.Attack(o);
            this.enemyCollider = o;
        }
    };
    Supporter.prototype.onCollisionStay = function (o, s) {
        if (!this.isActive || !this.isDoneAttackAnim)
            return;
        if (o.tag === 2) {
            !(this.spine.animation === "Attack") && constants_1.Constants.isStartGame && this.Attack(o);
            this.enemyCollider = o;
        }
    };
    Supporter.prototype.onCollisionExit = function (o, s) {
        if (!this.isActive)
            return;
        this.spine.setAnimation(0, constants_1.Constants.SupporterAnim.Idle, true);
    };
    Supporter.prototype.Attack = function (o) {
        var _this = this;
        this.isDoneAttackAnim = false;
        this.spine.setAnimation(0, constants_1.Constants.SupporterAnim.Attack, true);
        this.spine.setCompleteListener(function (trackEntry) {
            _this.isDoneAttackAnim = true;
            if (trackEntry.animation.name === "Attack") {
                _this.node.name === "Spine_Cauda" && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
                if (_this.node.name === "spine_Phao") {
                    var spine = _this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                    spine.node.active = true;
                    _this.node.getChildByName("Blast").getComponent(sp.Skeleton).setAnimation(0, "2", false);
                }
                if (o) {
                    o.getComponent(Army_1.default).checkDie();
                    _this.node.name === "spine_Phao" && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.BoomSound);
                    _this.node.name === "Spine_Laze" && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.lazerSound);
                }
            }
        });
    };
    __decorate([
        property(AudioManager_1.default)
    ], Supporter.prototype, "AudioManager", void 0);
    Supporter = __decorate([
        ccclass
    ], Supporter);
    return Supporter;
}(cc.Component));
exports.default = Supporter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcU3VwcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcUVDO1FBbEVHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQXVCLElBQUksQ0FBQztRQUNuQyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixtQkFBYSxHQUF1QixJQUFJLENBQUM7UUFFekMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBMkRyQyxDQUFDO0lBeERhLHlCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBcUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUFFLE9BQU87UUFHckQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsSUFBSSxxQkFBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUdELG1DQUFlLEdBQWYsVUFBZ0IsQ0FBcUIsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUFFLE9BQU87UUFDckQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsSUFBSSxxQkFBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUdELG1DQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUscUJBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFHTywwQkFBTSxHQUFkLFVBQWUsQ0FBcUI7UUFBcEMsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHFCQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFVBQUMsVUFBK0I7WUFDM0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUU3QixJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFFeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUV0RyxJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtvQkFDaEMsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzRjtnQkFFRCxJQUFJLENBQUMsRUFBRTtvQkFDSCxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9GLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDbkc7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO21EQUNXO0lBSGpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxRTdCO0lBQUQsZ0JBQUM7Q0FyRUQsQUFxRUMsQ0FyRXNDLEVBQUUsQ0FBQyxTQUFTLEdBcUVsRDtrQkFyRW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQXJteSBmcm9tIFwiLi9Bcm15XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9ydGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbGxpZGU6IGNjLlBoeXNpY3NDb2xsaWRlciA9IG51bGw7XHJcbiAgICBzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgZW5lbXlDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNEb25lQXR0YWNrQW5pbTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwaW5lID0gdGhpcy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG86IGNjLlBoeXNpY3NDb2xsaWRlciwgcykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCAhdGhpcy5pc0RvbmVBdHRhY2tBbmltKSByZXR1cm47XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICAhKHRoaXMuc3BpbmUuYW5pbWF0aW9uID09PSBcIkF0dGFja1wiKSAmJiBDb25zdGFudHMuaXNTdGFydEdhbWUgJiYgdGhpcy5BdHRhY2sobyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlDb2xsaWRlciA9IG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvblN0YXkobzogY2MuUGh5c2ljc0NvbGxpZGVyLCBzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8ICF0aGlzLmlzRG9uZUF0dGFja0FuaW0pIHJldHVybjtcclxuICAgICAgICBpZiAoby50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgISh0aGlzLnNwaW5lLmFuaW1hdGlvbiA9PT0gXCJBdHRhY2tcIikgJiYgQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuQXR0YWNrKG8pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15Q29sbGlkZXIgPSBvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FeGl0KG8sIHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuU3VwcG9ydGVyQW5pbS5JZGxlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBBdHRhY2sobzogY2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0RvbmVBdHRhY2tBbmltID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5TdXBwb3J0ZXJBbmltLkF0dGFjaywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb25lQXR0YWNrQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gXCJBdHRhY2tcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uYW1lID09PSBcIlNwaW5lX0NhdWRhXCIgJiYgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmVhcnRoUXVha2VTb3VuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT09IFwic3BpbmVfUGhhb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxhc3RcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmxhc3RcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCIyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KEFybXkpLmNoZWNrRGllKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5hbWUgPT09IFwic3BpbmVfUGhhb1wiICYmIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Cb29tU291bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uYW1lID09PSBcIlNwaW5lX0xhemVcIiAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subGF6ZXJTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==