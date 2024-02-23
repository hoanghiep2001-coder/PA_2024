
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a876a3+anpHqp1oP95zhFm5', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.camera = null;
        // environment
        _this.background_1 = null;
        _this.background_2_ver = null;
        _this.background_2_hor = null;
        _this.background_3 = null;
        // container
        _this.GamePlay = null;
        _this.UI_Container = null;
        _this.buttons = null;
        _this.scene1 = null;
        _this.scene3 = null;
        // CTA
        _this.CTA = null;
        _this.CTA_overlay = null;
        _this.CTA_btn = null;
        // hint
        _this.hand_1 = null;
        _this.hand_2 = null;
        // doll
        _this.doll = null;
        _this.doll_mouth_default = null;
        _this.doll_mouth_suprise = null;
        _this.doll_tears_left = null;
        _this.doll_tears_right = null;
        _this.doll_dress = null;
        // UI
        _this.door = null;
        _this.adultery = null;
        _this.UI_button_revenge = null;
        _this.item_Dress_btn = null;
        // effects
        _this.effect_blink_Doll = null;
        _this.effect_blink_item = null;
        _this.effect_heart = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
    };
    __decorate([
        property(cc.Camera)
    ], NodesContainer.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_2_ver", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_2_hor", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI_Container", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "buttons", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "scene3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_btn", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_mouth_default", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_mouth_suprise", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesContainer.prototype, "doll_tears_left", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesContainer.prototype, "doll_tears_right", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_dress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "door", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "adultery", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI_button_revenge", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "item_Dress_btn", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_blink_Doll", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_blink_item", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_heart", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThFQztRQTVFRyxZQUFZO1FBRVosWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixjQUFjO1FBRWQsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFZO1FBRVosY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixNQUFNO1FBRU4sU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLE9BQU87UUFFUCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsT0FBTztRQUVQLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFnQixJQUFJLENBQUM7UUFFcEMsc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixLQUFLO1FBRUwsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixVQUFVO1FBRVYsdUJBQWlCLEdBQXNCLElBQUksQ0FBQztRQUU1Qyx1QkFBaUIsR0FBc0IsSUFBSSxDQUFDO1FBRTVDLGtCQUFZLEdBQXNCLElBQUksQ0FBQzs7SUFNM0MsQ0FBQztJQUhhLDhCQUFLLEdBQWY7SUFFQSxDQUFDO0lBekVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ0s7SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVztJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFJdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ007SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBSXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyREFDYztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzREQUNlO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFJM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ2E7SUFJL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzs2REFDZ0I7SUFFNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzs2REFDZ0I7SUFFNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzt3REFDVztJQXhFdEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQThFbEM7SUFBRCxxQkFBQztDQTlFRCxBQThFQyxDQTlFMkMsRUFBRSxDQUFDLFNBQVMsR0E4RXZEO2tCQTlFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgLy8gZW52aXJvbm1lbnRcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8yX3ZlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmRfMl9ob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrZ3JvdW5kXzM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGNvbnRhaW5lclxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lUGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJX0NvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICBcclxuICAgIC8vIENUQVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9idG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGhpbnRcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZF8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZF8yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBkb2xsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX21vdXRoX2RlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX21vdXRoX3N1cHJpc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgZG9sbF90ZWFyc19sZWZ0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBkb2xsX3RlYXJzX3JpZ2h0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGxfZHJlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhZHVsdGVyeTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJX2J1dHRvbl9yZXZlbmdlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbV9EcmVzc19idG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGVmZmVjdHNcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIGVmZmVjdF9ibGlua19Eb2xsOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBlZmZlY3RfYmxpbmtfaXRlbTogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgZWZmZWN0X2hlYXJ0OiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=