
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/BaseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff0ebeMo+dPNqttw4fwK25C', 'BaseController');
// Script/Controller/BaseController.ts

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
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseController = /** @class */ (function (_super) {
    __extends(BaseController, _super);
    function BaseController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.baseLose = null;
        _this.HealthBar = null;
        _this.baseSide = "";
        _this.baseLv2 = null;
        _this.rigidbody = null;
        _this.collider = null;
        _this.isUpgrade = false;
        return _this;
    }
    BaseController.prototype.start = function () {
        if (this.baseSide === "Player") {
            this.baseLv2 = this.node.getChildByName("base").getChildByName("baseLv2");
        }
    };
    BaseController.prototype.update = function (dt) {
        if (this.baseSide === "Player" && !constants_1.Constants.isHasResult) {
            if (this.HealthBar.scaleX < 0.05) {
                constants_1.Constants.isHasResult = true;
                constants_1.Constants.isPauseGame = true;
                constants_1.Constants.isLoose = true;
                this.HealthBar.active = false;
                this.baseLose.active = true;
                this.node.getChildByName("base").getChildByName("baseLv2").active = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = constants_1.Constants.AllyBaseHeal;
        }
        if (this.baseSide === "Enemy" && !constants_1.Constants.isHasResult) {
            if (this.HealthBar.scaleX < 0.05) {
                constants_1.Constants.isHasResult = true;
                constants_1.Constants.isPauseGame = true;
                this.baseLose.active = true;
                this.HealthBar.active = false;
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = constants_1.Constants.EnemyBaseHeal;
        }
        // upgradeBase
        if (this.baseSide === "Player" && constants_1.Constants.isUpgrade && !this.isUpgrade) {
            this.isUpgrade = true;
            this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
            this.baseLv2.active = true;
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], BaseController.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], BaseController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], BaseController.prototype, "baseLose", void 0);
    __decorate([
        property(cc.Node)
    ], BaseController.prototype, "HealthBar", void 0);
    __decorate([
        property(cc.String)
    ], BaseController.prototype, "baseSide", void 0);
    BaseController = __decorate([
        ccclass
    ], BaseController);
    return BaseController;
}(cc.Component));
exports.default = BaseController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStEQztRQTdERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBRXZDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBOEMvQixDQUFDO0lBM0NhLDhCQUFLLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQztJQUdTLCtCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3RELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFO2dCQUM5QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDN0IscUJBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcscUJBQVMsQ0FBQyxZQUFZLENBQUM7U0FDbEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDckQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUU7Z0JBQzlCLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDN0IscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHFCQUFTLENBQUMsYUFBYSxDQUFDO1NBQ25EO1FBRUQsY0FBYztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUkscUJBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7d0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQztvREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDRTtJQVZMLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErRGxDO0lBQUQscUJBQUM7Q0EvREQsQUErREMsQ0EvRDJDLEVBQUUsQ0FBQyxTQUFTLEdBK0R2RDtrQkEvRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFzZUxvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIZWFsdGhCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGJhc2VTaWRlOiBTdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGJhc2VMdjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIGlzVXBncmFkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVNpZGUgPT09IFwiUGxheWVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlTHYyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImJhc2VMdjJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlU2lkZSA9PT0gXCJQbGF5ZXJcIiAmJiAhQ29uc3RhbnRzLmlzSGFzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkhlYWx0aEJhci5zY2FsZVggPCAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0xvb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGVhbHRoQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlTG9zZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImJhc2VMdjJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENoaWxkQnlOYW1lKFwiSGVhbEJhclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5IZWFsdGhCYXIuc2NhbGVYID0gQ29uc3RhbnRzLkFsbHlCYXNlSGVhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhc2VTaWRlID09PSBcIkVuZW15XCIgJiYgIUNvbnN0YW50cy5pc0hhc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5IZWFsdGhCYXIuc2NhbGVYIDwgMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGFzUmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VMb3NlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhlYWx0aEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDaGlsZEJ5TmFtZShcIkhlYWxCYXJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVQbGF5LkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA9IENvbnN0YW50cy5FbmVteUJhc2VIZWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBncmFkZUJhc2VcclxuICAgICAgICBpZiAodGhpcy5iYXNlU2lkZSA9PT0gXCJQbGF5ZXJcIiAmJiBDb25zdGFudHMuaXNVcGdyYWRlICYmICF0aGlzLmlzVXBncmFkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVXBncmFkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VMdjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==