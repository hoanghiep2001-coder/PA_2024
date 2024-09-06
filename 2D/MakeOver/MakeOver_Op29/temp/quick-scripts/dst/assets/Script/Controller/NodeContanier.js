
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeContanier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69c3bsb3chPmrdB+4j36B25', 'NodeContanier');
// Script/Controller/NodeContanier.ts

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
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        _this.Scratchable = null;
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.Doll = null;
        _this.Star_1 = null;
        _this.Text_Jimin = null;
        _this.Text_Drag = null;
        _this.Hand_1 = null;
        _this.Hand_2 = null;
        _this.Acne1_1 = null;
        _this.Acne1_2 = null;
        _this.Acne2_1 = null;
        _this.Acne2_2 = null;
        // Point
        _this.Point_Cleanser = null;
        _this.Point_Tweezers = null;
        _this.Point_Tweezer_Head = null;
        _this.Tweezers_InteractPoint1 = null;
        _this.Tweezers_InteractPoint2 = null;
        // tools
        _this.Cleanser = null;
        _this.sp_Cleanser = null;
        _this.tweezers = null;
        _this.sp_Tweezers = null;
        // spine
        _this.sp_tearsLeft = null;
        _this.sp_tearsRight = null;
        _this.Spine_Maggot1 = null;
        _this.Spine_Maggot2 = null;
        _this.Spine_RMMG1 = null;
        _this.Spine_RMMG2 = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Star_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Text_Jimin", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Text_Drag", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne1_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne1_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne2_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Acne2_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Point_Cleanser", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Point_Tweezers", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Point_Tweezer_Head", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers_InteractPoint1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers_InteractPoint2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Cleanser", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_Cleanser", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "tweezers", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_Tweezers", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_tearsLeft", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "sp_tearsRight", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Maggot1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Maggot2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_RMMG1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_RMMG2", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBK0VDO1FBNUVHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixLQUFLO1FBRUwsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLEtBQUs7UUFFTCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixRQUFRO1FBRVIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBSW5DLDZCQUF1QixHQUFZLElBQUksQ0FBQztRQUV4Qyw2QkFBdUIsR0FBWSxJQUFJLENBQUM7UUFFeEMsUUFBUTtRQUVSLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLFFBQVE7UUFFUixrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFFakMsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBR2xDLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUVsQyxtQkFBYSxHQUFnQixJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQWdCLElBQUksQ0FBQzs7SUFDcEMsQ0FBQztJQTVFRztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDaUI7SUFJbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrRUFDc0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrRUFDc0I7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3NEQUNVO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzREFDVTtJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3VEQUNXO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0RBQ1k7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3REFDWTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3dEQUNZO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0RBQ1U7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzREFDVTtJQTlFZixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBK0VqQztJQUFELG9CQUFDO0NBL0VELEFBK0VDLENBL0UwQyxFQUFFLENBQUMsU0FBUyxHQStFdEQ7a0JBL0VvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY3JhdGNoYWJsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQmdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gVUlcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRG9sbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTdGFyXzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBUZXh0X0ppbWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVGV4dF9EcmFnOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhhbmRfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhhbmRfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQWNuZTFfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEFjbmUxXzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBBY25lMl8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQWNuZTJfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuICAgIC8vIFBvaW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBvaW50X0NsZWFuc2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUG9pbnRfVHdlZXplcnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQb2ludF9Ud2VlemVyX0hlYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVHdlZXplcnNfSW50ZXJhY3RQb2ludDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHRvb2xzXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENsZWFuc2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHNwX0NsZWFuc2VyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0d2VlemVyczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBzcF9Ud2VlemVyczogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICAgIC8vIHNwaW5lXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBzcF90ZWFyc0xlZnQ6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHNwX3RlYXJzUmlnaHQ6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9NYWdnb3QxOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9NYWdnb3QyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9STU1HMTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgU3BpbmVfUk1NRzI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxufVxyXG4iXX0=