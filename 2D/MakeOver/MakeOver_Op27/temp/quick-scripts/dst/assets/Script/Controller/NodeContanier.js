
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
        _this.HideMask = null;
        _this.Bg_1 = null;
        _this.Bg_1_1 = null;
        _this.Bg_1_2 = null;
        _this.Bg_2 = null;
        _this.Bg_2_1 = null;
        _this.Bg_2_2 = null;
        _this.Step1_Ponny = null;
        _this.Step2_Ponny = null;
        _this.Hand_1 = null;
        _this.Hand_2 = null;
        _this.Star_1 = null;
        _this.Circle_1 = null;
        _this.Circle_2 = null;
        // Points
        _this.Cleanser_Point = null;
        _this.Tweezers_Point = null;
        _this.Tweezers_HeadPoint = null;
        _this.Tweezers_InteractPoint1 = null;
        _this.Tweezers_InteractPoint2 = null;
        // Tools
        _this.Cleanser = null;
        _this.Tweezers = null;
        // Spine
        _this.Spine_Cleanser = null;
        _this.Spine_Tweezers = null;
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
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_1_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_1_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Step1_Ponny", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Step2_Ponny", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Star_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Circle_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Circle_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Cleanser_Point", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers_Point", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers_HeadPoint", void 0);
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
        property(cc.Node)
    ], NodeContainer.prototype, "Tweezers", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Cleanser", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeContainer.prototype, "Spine_Tweezers", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMEVDO1FBdkVHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixTQUFTO1FBRVQsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLDZCQUF1QixHQUFZLElBQUksQ0FBQztRQUV4Qyw2QkFBdUIsR0FBWSxJQUFJLENBQUM7UUFFeEMsUUFBUTtRQUVSLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixRQUFRO1FBRVIsb0JBQWMsR0FBZ0IsSUFBSSxDQUFDO1FBRW5DLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUluQyxtQkFBYSxHQUFnQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFnQixJQUFJLENBQUM7O0lBQ3BDLENBQUM7SUF2RUc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tFQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tFQUNzQjtJQUl4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ087SUFLekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5REFDYTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3lEQUNhO0lBSW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0RBQ1k7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3REFDWTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3NEQUNVO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0RBQ1U7SUF6RWYsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTBFakM7SUFBRCxvQkFBQztDQTFFRCxBQTBFQyxDQTFFMEMsRUFBRSxDQUFDLFNBQVMsR0EwRXREO2tCQTFFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUNvbnRhaW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lUGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NyYXRjaGFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCZ18xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMV8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMV8yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJnXzJfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJnXzJfMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTdGVwMV9Qb25ueTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFN0ZXAyX1Bvbm55OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhhbmRfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhhbmRfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFN0YXJfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENpcmNsZV8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ2lyY2xlXzI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFBvaW50c1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDbGVhbnNlcl9Qb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFR3ZWV6ZXJzX1BvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVHdlZXplcnNfSGVhZFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVHdlZXplcnNfSW50ZXJhY3RQb2ludDE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBUd2VlemVyc19JbnRlcmFjdFBvaW50MjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVG9vbHNcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ2xlYW5zZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBUd2VlemVyczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIFNwaW5lXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9DbGVhbnNlcjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgU3BpbmVfVHdlZXplcnM6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgU3BpbmVfTWFnZ290MTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgU3BpbmVfTWFnZ290Mjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgU3BpbmVfUk1NRzE6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIFNwaW5lX1JNTUcyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbn1cclxuIl19