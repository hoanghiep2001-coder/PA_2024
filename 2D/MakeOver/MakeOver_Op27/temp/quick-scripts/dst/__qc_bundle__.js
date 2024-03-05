
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/IronSource');
require('./assets/Script/Controller/MaskGamePlay');
require('./assets/Script/Controller/NodeContanier');
require('./assets/Script/Controller/Scratchable');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchArea = {};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxTQUFTLEdBQUcsRUFFakIsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            // Constants.isRotate = true;
            this.setHorizontalForIpX();
        }
        else {
            // Constants.isRotate = true;
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.NodeContainer.Bg_1.scale = 0.8;
        // this.NodeContainer.Bg_1_1.scale = 0.8;
        // this.NodeContainer.Bg_1_2.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.45;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Bg_2_1.scale = 0.45;
        this.NodeContainer.Bg_2_1.y = 45;
        this.NodeContainer.Bg_2_1.x = 600;
        this.NodeContainer.Bg_2_2.scale = 0.45;
        this.NodeContainer.Bg_2_2.y = 45;
        this.NodeContainer.Bg_2_2.x = -670;
        this.NodeContainer.Cleanser.x = 155;
        this.NodeContainer.Cleanser.y = 250;
        this.NodeContainer.Tweezers.x = 155;
        this.NodeContainer.Tweezers.y = 250;
        this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 155;
        this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 250 - 30;
        this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 155;
        this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 250 - 30;
        constants_1.Constants.Responsive.calculatedX = 155;
        constants_1.Constants.Responsive.calculatedY = 250;
        this.NodeContainer.Step1_Ponny.scale = 0.88;
        this.NodeContainer.Step1_Ponny.y = -210;
        this.NodeContainer.Step2_Ponny.y = -30;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.Bg_1.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.4;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Cleanser.x = 155;
        this.NodeContainer.Cleanser.y = 310;
        this.NodeContainer.Tweezers.x = 155;
        this.NodeContainer.Tweezers.y = 310;
        this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 155;
        this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 310 - 30;
        this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 155;
        this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 310 - 30;
        constants_1.Constants.Responsive.calculatedX = 155;
        constants_1.Constants.Responsive.calculatedY = 310;
        this.NodeContainer.Step1_Ponny.scale = 0.85;
        this.NodeContainer.Step1_Ponny.y = -210;
        this.NodeContainer.Step2_Ponny.y = -30;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        this.NodeContainer.Bg_1.scale = 0.55;
        this.NodeContainer.Bg_2.scale = 0.48;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Cleanser.x = 0;
        this.NodeContainer.Cleanser.y = 0;
        this.NodeContainer.Tweezers.x = 0;
        this.NodeContainer.Tweezers.y = 0;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Bg_1.scale = 0.45;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;
            this.NodeContainer.Cleanser.x = 0;
            this.NodeContainer.Cleanser.y = 0;
            this.NodeContainer.Tweezers.x = 0;
            this.NodeContainer.Tweezers.y = 0;
            this.NodeContainer.Tweezers_InteractPoint1.x = -39;
            this.NodeContainer.Tweezers_InteractPoint1.y = -73.5;
            this.NodeContainer.Tweezers_InteractPoint2.x = -8;
            this.NodeContainer.Tweezers_InteractPoint2.y = -128.5;
            constants_1.Constants.Responsive.calculatedX = 0;
            constants_1.Constants.Responsive.calculatedY = 0;
        }
        else {
            this.NodeContainer.Bg_1.scale = 0.5;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;
            this.NodeContainer.Cleanser.x = 25;
            this.NodeContainer.Cleanser.y = 25;
            this.NodeContainer.Tweezers.x = 15;
            this.NodeContainer.Tweezers.y = 25;
            this.NodeContainer.Tweezers_InteractPoint1.x = -39 - 15;
            this.NodeContainer.Tweezers_InteractPoint1.y = 73.5 - 25;
            this.NodeContainer.Tweezers_InteractPoint2.x = -8 - 15;
            this.NodeContainer.Tweezers_InteractPoint2.y = 128.5 - 25;
            constants_1.Constants.Responsive.calculatedX = 20;
            constants_1.Constants.Responsive.calculatedY = 25;
            this.NodeContainer.Step1_Ponny.scale = 0.85;
            this.NodeContainer.Step1_Ponny.y = -210;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQXdEO0FBQ3hELCtDQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXVNQztRQXBNRyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBMExoRCxDQUFDO0lBdkxhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzlELHFCQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILHFCQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRTtZQUNyRSxxQ0FBcUM7WUFDckMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDSCw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sd0NBQW1CLEdBQTNCO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDcEMseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVwQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkMscUJBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUV2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFFM0MsQ0FBQztJQUVPLDJDQUFzQixHQUE5QjtRQUNJLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoRSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVPLCtCQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRWhDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUVoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUVuQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNwRSxvSkFBb0o7WUFDcEosOEJBQThCO1lBRzlCLGNBQWM7WUFDZCxJQUFJO1lBRUosb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUVoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RELHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckMscUJBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBRWhDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDMUQscUJBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUdTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFuTUQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztxREFDWTtJQUhuQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdU05QjtJQUFELGlCQUFDO0NBdk1ELEFBdU1DLENBdk11QyxFQUFFLENBQUMsU0FBUyxHQXVNbkQ7a0JBdk1vQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuLi9Db250cm9sbGVyL05vZGVDb250YW5pZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gICAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMS5zY2FsZSA9IDAuODtcclxuICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuQmdfMV8xLnNjYWxlID0gMC44O1xyXG4gICAgICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18xXzIuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi54ID0gLTQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yXzEuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yXzEueSA9IDQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yXzEueCA9IDYwMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMl8yLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMl8yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMl8yLnggPSAtNjcwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueSA9IDI1MDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDI1MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMzkgLSAxNTU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnkgPSA3My41IC0gMjUwIC0gMzA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAtOCAtIDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueSA9IDEyOC41IC0gMjUwIC0gMzA7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAxNTU7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAyNTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9Qb25ueS5zY2FsZSA9IDAuODg7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnkgPSAtMjEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Qb25ueS55ID0gLTMwO1xyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18xLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi54ID0gLTQ1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueSA9IDMxMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDMxMDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMzkgLSAxNTU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnkgPSA3My41IC0gMzEwIC0gMzA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAtOCAtIDE1NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueSA9IDEyOC41IC0gMzEwIC0gMzA7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAxNTU7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAzMTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9Qb25ueS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnkgPSAtMjEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Qb25ueS55ID0gLTMwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMS5zY2FsZSA9IDAuNTU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIuc2NhbGUgPSAwLjQ4O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi54ID0gLTQ1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVycy54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPj0gMC42ICYmIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18xLnNjYWxlID0gMC40NTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnkgPSA0NTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzIueCA9IC00NTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlci54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVycy55ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50MS54ID0gLTM5O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDEueSA9IC03My41O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueCA9IC04O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDIueSA9IC0xMjguNTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAwO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnXzEuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmdfMi55ID0gNDU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CZ18yLnggPSAtNDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueCA9IDI1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXIueSA9IDI1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueCA9IDE1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMueSA9IDI1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMzkgLSAxNTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnkgPSA3My41IC0gMjU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Mi54ID0gLTggLSAxNTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnkgPSAxMjguNSAtIDI1O1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWCA9IDIwO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IDI1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnNjYWxlID0gMC44NTtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX1Bvbm55LnkgPSAtMjEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Cleanser_Point.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Tweezers_Point.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function () {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchStart = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        if (!constants_1.Constants.isDoneCleanser)
            this.isTouch = true;
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
        if (!constants_1.Constants.isDoneCleanser)
            this.GamePlay.activeCleanSound();
        constants_1.Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        this.NodeContainer.Hand_1.active = false;
        this.NodeContainer.Hand_2.active = false;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        !constants_1.Constants.isDoneCleanser && this.moveCleanser(posConverted, pos);
        constants_1.Constants.isDoneCleanser && this.moveTweezers(posConverted, pos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        var pos = e.getLocation();
        this.NodeContainer.Cleanser_Point.x = (pos.x - cc.winSize.width / 2) - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Cleanser_Point.y = (pos.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculatedY;
        this.NodeContainer.Tweezers_Point.x = (pos.x - cc.winSize.width / 2) - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Tweezers_Point.y = (pos.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculatedY;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    TouchAreaController.prototype.moveCleanser = function (posConverted, pos) {
        this.NodeContainer.Cleanser_Point.setPosition(posConverted);
        this.NodeContainer.Spine_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Spine_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80 - constants_1.Constants.Responsive.calculatedY;
    };
    TouchAreaController.prototype.moveTweezers = function (posConverted, pos) {
        this.NodeContainer.Tweezers_Point.setPosition(posConverted);
        this.NodeContainer.Spine_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Spine_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 100 - constants_1.Constants.Responsive.calculatedY;
        this.NodeContainer.Tweezers_HeadPoint.x = (pos.x - cc.winSize.width / 2) - 45 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Tweezers_HeadPoint.y = (pos.y - cc.winSize.height / 2) - 85 - constants_1.Constants.Responsive.calculatedY;
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQXNHQztRQXBHQyxZQUFZO1FBRVosZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFzRjNCLENBQUM7SUFuRlcsb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUs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QUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqSCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNwSCxDQUFDO0lBaEdEO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7MkRBQ1M7SUFFOUI7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzs4REFDWTtJQUVwQztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5REFDTztJQVpmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBc0cvQjtJQUFELDBCQUFDO0NBdEdELEFBc0dDLENBdEd3QyxFQUFFLENBQUMsU0FBUyxHQXNHcEQ7QUF0R1ksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWx0aWxzIH0gZnJvbSBcIi4uL0RhdGEvVWx0aWxzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KElyb25Tb3VyY2UpXHJcbiAgSXJvblNvdXJjZTogSXJvblNvdXJjZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXJfUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oaWRlTWFza1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZU1hc2tUb3VjaFN0YXJ0KCk6IHZvaWQge1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIENvbnN0YW50cy5tYWdnb3RSZW1vdmVkID49IDEgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICBcclxuICAgIC8vIGlyb25zb3VyY2VcclxuICAgIHRoaXMuSXJvblNvdXJjZS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICBpZighQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuICAgIGlmKCFDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIpIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0RvbmVDbGVhbnNlcikgdGhpcy5HYW1lUGxheS5hY3RpdmVDbGVhblNvdW5kKCk7XHJcbiAgICBDb25zdGFudHMubWFnZ290UmVtb3ZlZCA+PSAxICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDYW5Ub3VjaCB8fCBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICBsZXQgcG9zQ29udmVydGVkID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgIUNvbnN0YW50cy5pc0RvbmVDbGVhbnNlciAmJiB0aGlzLm1vdmVDbGVhbnNlcihwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIgJiYgdGhpcy5tb3ZlVHdlZXplcnMocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcHJpdmF0ZSB0b3VjaEVuZChlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyX1BvaW50LnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DbGVhbnNlcl9Qb2ludC55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX1BvaW50LnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19Qb2ludC55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5jbGVhblNvdW5kLmxvb3AgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVDbGVhbnNlcihwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyX1BvaW50LnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfQ2xlYW5zZXIubm9kZS54ID0gKHBvcy54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIpIC0gNjAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9DbGVhbnNlci5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpIC0gODAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVUd2VlemVycyhwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX1BvaW50LnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfVHdlZXplcnMubm9kZS54ID0gKHBvcy54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIpIC0gNjAgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9Ud2VlemVycy5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpIC0gMTAwIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSGVhZFBvaW50LnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSA0NSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0hlYWRQb2ludC55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIDg1IC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Scratchable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e71dUgp89ACJhqvD+hiH+q', 'Scratchable');
// Script/Controller/Scratchable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDone: 0,
    isWin: cc.Boolean,
    eraserRadius: {
      type: cc.Int,
      "default": 60
    }
  },
  start: function start() {
    this.percentToWin = 0.5;
    var mask = this.getComponentInChildren(cc.Mask);
    this.graphics = mask._graphics;
    this.graphics.fillColor = cc.color(255, 255, 255, 0);
    this.reset();
  },
  calculateProgress: function calculateProgress() {
    if (!this.isScratchable) {
      return;
    }

    var hitItemCount = 0;
    this.polygonPointsList.forEach(function (item) {
      if (!item.isHit) return;
      hitItemCount += 1;
    });
    this.progress = hitItemCount / this.polygonPointsList.length;

    if (this.progress >= this.percentToWin) {
      this.isWin = true;
      this.isDone = 1;
    }

    if (this.isWin) {
      this.fillInstantly();
      this.completed = true;
      this.isScratchable = false;
      this.node.dispatchEvent(new cc.Event.EventCustom("completed", this));
    }
  },
  reset: function reset() {
    this.callbackFlag = true;
    this.graphics.clear();
    this.tempDrawPoints = [];
    this.polygonPointsList = [];
    this.progress = 0;
    this.completed = false;
    this.isScratchable = true;
    this.initPolygonList();
  },
  initPolygonList: function initPolygonList() {
    for (var x = 0; x < this.node.width; x += this.eraserRadius) {
      for (var y = 0; y < this.node.height; y += this.eraserRadius) {
        this.polygonPointsList.push({
          rect: cc.rect(x - this.node.width / 2, y - this.node.height / 2, this.eraserRadius, this.eraserRadius),
          isHit: false
        });
      }
    }
  },
  scratchHole: function scratchHole(pos) {
    pos = this.node.convertToNodeSpaceAR(pos);
    var stencil = this.graphics;
    var len = this.tempDrawPoints.length;
    this.tempDrawPoints.push(pos);
    this.calculateProgress();

    if (len <= 1) {
      stencil.circle(pos.x, pos.y, this.eraserRadius / 2);
      stencil.fill();
      this.polygonPointsList.forEach(function (item) {
        if (item.isHit) return;
        var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
        var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
        if (xFlag && yFlag) item.isHit = true;
      });
    } else {
      var prevPos = this.tempDrawPoints[len - 2];
      var curPos = this.tempDrawPoints[len - 1];
      stencil.moveTo(prevPos.x, prevPos.y);
      stencil.lineTo(curPos.x, curPos.y);
      stencil.lineWidth = this.eraserRadius;
      stencil.lineCap = cc.Graphics.LineCap.ROUND;
      stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
      stencil.strokeColor = cc.color(255, 255, 255, 255);
      stencil.stroke();
      this.polygonPointsList.forEach(function (item) {
        item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
      });
    }
  },
  resetProgress: function resetProgress() {
    this.clearInstantly();
    this.polygonPointsList = [];
    this.tempDrawPoints = [];
    this.progress = 0;
    this.initPolygonList();
  },
  isInBound: function isInBound(point) {
    return true;
  },
  clearInstantly: function clearInstantly() {
    this.graphics.clear();
  },
  fillInstantly: function fillInstantly() {
    this.graphics.moveTo(0, 0);
    this.graphics.rect(0, 0, this.node.width, this.node.height);
    this.graphics.fill();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTY3JhdGNoYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzRG9uZSIsImlzV2luIiwiQm9vbGVhbiIsImVyYXNlclJhZGl1cyIsInR5cGUiLCJJbnQiLCJzdGFydCIsInBlcmNlbnRUb1dpbiIsIm1hc2siLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTWFzayIsImdyYXBoaWNzIiwiX2dyYXBoaWNzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJyZXNldCIsImNhbGN1bGF0ZVByb2dyZXNzIiwiaXNTY3JhdGNoYWJsZSIsImhpdEl0ZW1Db3VudCIsInBvbHlnb25Qb2ludHNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpc0hpdCIsInByb2dyZXNzIiwibGVuZ3RoIiwiZmlsbEluc3RhbnRseSIsImNvbXBsZXRlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJFdmVudEN1c3RvbSIsImNhbGxiYWNrRmxhZyIsImNsZWFyIiwidGVtcERyYXdQb2ludHMiLCJpbml0UG9seWdvbkxpc3QiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHVzaCIsInJlY3QiLCJzY3JhdGNoSG9sZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3RlbmNpbCIsImxlbiIsImNpcmNsZSIsImZpbGwiLCJ4RmxhZyIsInlGbGFnIiwicHJldlBvcyIsImN1clBvcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJST1VORCIsImxpbmVKb2luIiwiTGluZUpvaW4iLCJzdHJva2VDb2xvciIsInN0cm9rZSIsIkludGVyc2VjdGlvbiIsImxpbmVSZWN0IiwicmVzZXRQcm9ncmVzcyIsImNsZWFySW5zdGFudGx5IiwiaXNJbkJvdW5kIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QyxNQUFsQyxFQUEwQzlCLElBQUksQ0FBQ21CLElBQS9DLENBRGhCO0FBRUQsT0FIRDtBQUlEO0FBQ0YsR0E3R007QUErR1B5QixFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsU0FBS0MsY0FBTDtBQUNBLFNBQUsvQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtjLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csZUFBTDtBQUNELEdBckhNO0FBdUhQaUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFdBQU8sSUFBUDtBQUNELEdBekhNO0FBMkhQRixFQUFBQSxjQUFjLEVBQUUsMEJBQVk7QUFDMUIsU0FBS3ZELFFBQUwsQ0FBY3FCLEtBQWQ7QUFDRCxHQTdITTtBQStIUFAsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3pCLFNBQUtkLFFBQUwsQ0FBY3lDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxTQUFLekMsUUFBTCxDQUFjNkIsSUFBZCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLYixJQUFMLENBQVVTLEtBQW5DLEVBQTBDLEtBQUtULElBQUwsQ0FBVVcsTUFBcEQ7QUFDQSxTQUFLM0IsUUFBTCxDQUFjb0MsSUFBZDtBQUNEO0FBbklNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGlzRG9uZTogMCxcbiAgICBpc1dpbjogY2MuQm9vbGVhbixcbiAgICBlcmFzZXJSYWRpdXM6IHtcbiAgICAgIHR5cGU6IGNjLkludCxcbiAgICAgIGRlZmF1bHQ6IDYwLFxuICAgIH0sXG4gIH0sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBlcmNlbnRUb1dpbiA9IDAuNTtcbiAgICBsZXQgbWFzayA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5NYXNrKTtcbiAgICB0aGlzLmdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH0sXG5cbiAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XG5cbiAgICBpZiAoIXRoaXMuaXNTY3JhdGNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaGl0SXRlbUNvdW50ID0gMDtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xuICAgICAgaGl0SXRlbUNvdW50ICs9IDE7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGhpdEl0ZW1Db3VudCAvIHRoaXMucG9seWdvblBvaW50c0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gdGhpcy5wZXJjZW50VG9XaW4pIHtcbiAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xuICAgICAgdGhpcy5pc0RvbmUgPSAxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzV2luKSB7XG4gICAgICB0aGlzLmZpbGxJbnN0YW50bHkoKTtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTY3JhdGNoYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwiY29tcGxldGVkXCIsIHRoaXMpKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrRmxhZyA9IHRydWU7XG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NyYXRjaGFibGUgPSB0cnVlO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaW5pdFBvbHlnb25MaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm5vZGUud2lkdGg7IHggKz0gdGhpcy5lcmFzZXJSYWRpdXMpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ub2RlLmhlaWdodDsgeSArPSB0aGlzLmVyYXNlclJhZGl1cykge1xuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoXG4gICAgICAgICAgICB4IC0gdGhpcy5ub2RlLndpZHRoIC8gMixcbiAgICAgICAgICAgIHkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZXJhc2VyUmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5lcmFzZXJSYWRpdXNcbiAgICAgICAgICApLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNjcmF0Y2hIb2xlOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmdyYXBoaWNzO1xuICAgIGNvbnN0IGxlbiA9IHRoaXMudGVtcERyYXdQb2ludHMubGVuZ3RoO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xuXG4gICAgaWYgKGxlbiA8PSAxKSB7XG4gICAgICBzdGVuY2lsLmNpcmNsZShwb3MueCwgcG9zLnksIHRoaXMuZXJhc2VyUmFkaXVzIC8gMik7XG4gICAgICBzdGVuY2lsLmZpbGwoKTtcblxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHhGbGFnID1cbiAgICAgICAgICBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHlGbGFnID1cbiAgICAgICAgICBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIGl0ZW0uaXNIaXQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xuXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xuICAgICAgc3RlbmNpbC5saW5lV2lkdGggPSB0aGlzLmVyYXNlclJhZGl1cztcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICBzdGVuY2lsLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmlzSGl0ID1cbiAgICAgICAgICBpdGVtLmlzSGl0IHx8IGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xlYXJJbnN0YW50bHkoKTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaXNJbkJvdW5kOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBjbGVhckluc3RhbnRseTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgfSxcblxuICBmaWxsSW5zdGFudGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XG4gICAgdGhpcy5ncmFwaGljcy5yZWN0KDAsIDAsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.beauty.makeoverasmr");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.beauty.makeoverasmr");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQztnQkFDdkYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7WUFDdkYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5iZWF1dHkubWFrZW92ZXJhc21yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDY0NDkyNjk3MzM/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uYmVhdXR5Lm1ha2VvdmVyYXNtclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["xitNuocSound"] = "xitNuocSound";
    SoundTrack["nhoMun1Sound"] = "nhoMun1Sound";
    SoundTrack["nhoMun2Sound"] = "nhoMun2Sound";
    SoundTrack["nhoMun3Sound"] = "nhoMun3Sound";
    SoundTrack["completeSound"] = "completeSound";
    SoundTrack["conClearSound"] = "conClearSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["showerSound"] = "showerSound";
    SoundTrack["woaAnimeSound"] = "woaAnimeSound";
    SoundTrack["girlScreamSound"] = "girlScreamSound";
    SoundTrack["dirtySound"] = "dirtySound";
    SoundTrack["wormBgSound"] = "wormBgSound";
    SoundTrack["cleanSound"] = "cleanSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isDoneCleanser = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.maggotRemoved = 0;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQWVKO0FBZkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7SUFDN0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsaURBQW1DLENBQUE7SUFDbkMsdUNBQXlCLENBQUE7SUFDekIseUNBQTJCLENBQUE7SUFDM0IsdUNBQXlCLENBQUE7QUFDN0IsQ0FBQyxFQWZJLFVBQVUsS0FBVixVQUFVLFFBZWQ7QUFHRDtJQUFBO0lBMkJBLENBQUM7SUF6QkcsWUFBWTtJQUNMLHlCQUFlLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQix3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUNoQyxpQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixvQkFBVSxHQUFZLEtBQUssQ0FBQztJQUM1Qix1QkFBYSxHQUFXLENBQUMsQ0FBQztJQUdqQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0EzQkQsQUEyQkMsSUFBQTtBQTNCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgeGl0TnVvY1NvdW5kID0gXCJ4aXROdW9jU291bmRcIixcclxuICAgIG5ob011bjFTb3VuZCA9IFwibmhvTXVuMVNvdW5kXCIsXHJcbiAgICBuaG9NdW4yU291bmQgPSBcIm5ob011bjJTb3VuZFwiLFxyXG4gICAgbmhvTXVuM1NvdW5kID0gXCJuaG9NdW4zU291bmRcIixcclxuICAgIGNvbXBsZXRlU291bmQgPSBcImNvbXBsZXRlU291bmRcIixcclxuICAgIGNvbkNsZWFyU291bmQgPSBcImNvbkNsZWFyU291bmRcIixcclxuICAgIG1vdmVJdGVtU291bmQgPSBcIm1vdmVJdGVtU291bmRcIixcclxuICAgIHNob3dlclNvdW5kID0gXCJzaG93ZXJTb3VuZFwiLFxyXG4gICAgd29hQW5pbWVTb3VuZCA9IFwid29hQW5pbWVTb3VuZFwiLFxyXG4gICAgZ2lybFNjcmVhbVNvdW5kID0gXCJnaXJsU2NyZWFtU291bmRcIixcclxuICAgIGRpcnR5U291bmQgPSBcImRpcnR5U291bmRcIixcclxuICAgIHdvcm1CZ1NvdW5kID0gXCJ3b3JtQmdTb3VuZFwiLFxyXG4gICAgY2xlYW5Tb3VuZCA9IFwiY2xlYW5Tb3VuZFwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBjdXJyZW50UG9zaXRpb246IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuXHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RvbmVDbGVhbnNlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgbWFnZ290UmVtb3ZlZDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var GameController_1 = require("./GameController");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        // state
        _this.checkCleanserFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        this.NodeContainer.Tweezers.opacity = 0;
        this.NodeContainer.Circle_1.active = false;
        this.NodeContainer.Circle_2.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.dirtySound);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.girlScreamSound); }, 0.5);
        this.scheduleOnce(function () { _this.getComponent(cc.Animation).play("GamePlay_SwtichStep"); }, 2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.wormBgSound); }, 3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 4.3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound); constants_1.Constants.isCanTouch = true; }, 5.8);
        this.scheduleOnce(function () {
            constants_1.Constants.isRotate
                ? _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                : _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_VtcHintAnim");
        }, 7);
    };
    GamePlay.prototype.activeCleanSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = true;
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            this.checkCleanserFlag = true;
            this.NodeContainer.Scratchable.active = false;
            this.NodeContainer.Cleanser_Point.active = false;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            this.NodeContainer.Cleanser.getComponent(cc.Animation).play("Cleanser_HideAnim");
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
            this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
            this.AudioManager.cleanSound.loop = false;
        }
    };
    GamePlay.prototype.showTweezers = function () {
        var _this = this;
        this.checkshowTweezersFlag = true;
        this.scheduleOnce(function () {
            constants_1.Constants.isDoneCleanser = true;
            _this.NodeContainer.Circle_1.active = true;
            _this.NodeContainer.Circle_2.active = true;
            _this.NodeContainer.Tweezers.getComponent(cc.Animation).play("Tweezers_ShowAnim");
            _this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 0.2);
            _this.scheduleOnce(function () {
                _this.NodeContainer.Hand_2.active = true;
                constants_1.Constants.isRotate
                    ? _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                    : _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_VtcHintAnim");
            }, 1.5);
        }, 1.5);
    };
    GamePlay.prototype.handleCheckRemoveMaggots = function () {
        var tweezersBdx = this.NodeContainer.Tweezers_HeadPoint.getBoundingBox();
        var points = [this.NodeContainer.Tweezers_InteractPoint1, this.NodeContainer.Tweezers_InteractPoint2];
        for (var i = 0; i < points.length; i++) {
            var PointBdx = points[i].getBoundingBox();
            var pointName = points[i].name;
            if (tweezersBdx.intersects(PointBdx)) {
                this.handleRemoveMaggot(pointName);
            }
        }
    };
    GamePlay.prototype.handleRemoveMaggot = function (maggotName) {
        var _this = this;
        this.NodeContainer.Tweezers.opacity = 0;
        this.NodeContainer.Circle_1.active = false;
        this.NodeContainer.Circle_2.active = false;
        this.isRemovingMaggot = true;
        switch (maggotName) {
            case "Tws_InteractPoint1":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG1.node.active = true;
                this.NodeContainer.Circle_1.opacity = 0;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot1.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG1);
                break;
            case "Tws_InteractPoint2":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG2.node.active = true;
                this.NodeContainer.Circle_2.opacity = 0;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG2);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.activeRemoveMaggotSound = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound); }, 0.75);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.8);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound); }, 4);
    };
    GamePlay.prototype.setCompleteSpine = function (spine) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Action") {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                _this.showTweezers();
            }
        });
    };
    GamePlay.prototype.update = function (dt) {
        !this.checkCleanserFlag && this.handleDoneCleanser();
        this.checkCleanserFlag && !this.checkshowTweezersFlag && this.showTweezers();
        this.checkshowTweezersFlag && !this.isRemovingMaggot && this.handleCheckRemoveMaggots();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5SkM7UUF0SkMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQywyQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMsc0JBQWdCLEdBQVksS0FBSyxDQUFDOztJQTRJcEMsQ0FBQztJQXpJVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUFBLGlCQWNDO1FBYkMsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0gsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixxQkFBUyxDQUFDLFFBQVE7Z0JBQ2xCLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0UsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEYsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUdNLG1DQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUdNLHFDQUFrQixHQUF6QjtRQUNFLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUMzQztJQUNILENBQUM7SUFHTywrQkFBWSxHQUFwQjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLHFCQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUNoQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqRixLQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEcsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDeEMscUJBQVMsQ0FBQyxRQUFRO29CQUNsQixDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7b0JBQy9FLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xGLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNULENBQUM7SUFHTSwyQ0FBd0IsR0FBL0I7UUFDRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pFLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDbkM7U0FDRjtJQUNILENBQUM7SUFHTSxxQ0FBa0IsR0FBekIsVUFBMEIsVUFBa0I7UUFBNUMsaUJBMkJDO1FBMUJDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsUUFBUSxVQUFVLEVBQUU7WUFDbEIsS0FBSyxvQkFBb0I7Z0JBQ3JCLHFCQUFTLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUEsQ0FBQSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEQsTUFBTTtZQUNOLEtBQUssb0JBQW9CO2dCQUN2QixxQkFBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBR08sMENBQXVCLEdBQS9CO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFHTSxtQ0FBZ0IsR0FBdkIsVUFBd0IsS0FBaUI7UUFBekMsaUJBT0M7UUFOQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsVUFBQyxVQUErQjtZQUN4RCxJQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDekMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDNUYsQ0FBQztJQXBKRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzttREFDWTtJQVBqQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUo1QjtJQUFELGVBQUM7Q0F6SkQsQUF5SkMsQ0F6SnFDLEVBQUUsQ0FBQyxTQUFTLEdBeUpqRDtrQkF6Sm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gIE5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICBjaGVja0NsZWFuc2VyRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNoZWNrc2hvd1R3ZWV6ZXJzRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzUmVtb3ZpbmdNYWdnb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVycy5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMi5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZUdhbWVQbGF5KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRpcnR5U291bmQpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZ2lybFNjcmVhbVNvdW5kKX0sIDAuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiR2FtZVBsYXlfU3d0aWNoU3RlcFwiKX0sIDIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53b3JtQmdTb3VuZCl9LCAzKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7IH0sIDQuMyk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnhpdE51b2NTb3VuZCk7IENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZSB9LCA1LjgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNSb3RhdGUgXHJcbiAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpIaW50QW5pbVwiKVxyXG4gICAgICA6IHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhhbmRfVnRjSGludEFuaW1cIik7XHJcbiAgICB9LCA3KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYWN0aXZlQ2xlYW5Tb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmNsZWFuU291bmQubG9vcCA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZURvbmVDbGVhbnNlcigpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuTm9kZUNvbnRhaW5lci5TY3JhdGNoYWJsZS5nZXRDb21wb25lbnQoXCJTY3JhdGNoYWJsZVwiKS5pc1dpbikge1xyXG4gICAgICB0aGlzLmNoZWNrQ2xlYW5zZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNjcmF0Y2hhYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2xlYW5zZXJfUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb21wbGV0ZVNvdW5kKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNsZWFuc2VyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDbGVhbnNlcl9IaWRlQW5pbVwiKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0YXJfMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU3Rhcl9CbGlua0FuaW1cIik7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKVxyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5jbGVhblNvdW5kLmxvb3AgPSBmYWxzZTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VHdlZXplcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrc2hvd1R3ZWV6ZXJzRmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVDbGVhbnNlciA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJUd2VlemVyc19TaG93QW5pbVwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKX0sIDAuMik7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZF8yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlIFxyXG4gICAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpIaW50QW5pbVwiKVxyXG4gICAgICAgIDogdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9WdGNIaW50QW5pbVwiKTtcclxuICAgICAgfSwgMS41KTtcclxuICAgIH0sIDEuNSlcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2hlY2tSZW1vdmVNYWdnb3RzKCk6IHZvaWQge1xyXG4gICAgbGV0IHR3ZWV6ZXJzQmR4ID0gdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0hlYWRQb2ludC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IHBvaW50cyA9IFt0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDEsIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Ml07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgUG9pbnRCZHggPSBwb2ludHNbaV0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgbGV0IHBvaW50TmFtZSA9IHBvaW50c1tpXS5uYW1lO1xyXG4gICAgICBpZih0d2VlemVyc0JkeC5pbnRlcnNlY3RzKFBvaW50QmR4KSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTWFnZ290KHBvaW50TmFtZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVSZW1vdmVNYWdnb3QobWFnZ290TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnMub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ2lyY2xlXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUmVtb3ZpbmdNYWdnb3QgPSB0cnVlO1xyXG4gICAgc3dpdGNoIChtYWdnb3ROYW1lKSB7XHJcbiAgICAgIGNhc2UgXCJUd3NfSW50ZXJhY3RQb2ludDFcIjpcclxuICAgICAgICAgIENvbnN0YW50cy5tYWdnb3RSZW1vdmVkICs9IDE7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290MS5zZXRBbmltYXRpb24oMCwgXCJpZGxlMDFcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DaXJjbGVfMS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX01hZ2dvdDEubm9kZS5hY3RpdmUgPSBmYWxzZX0sIDAuNzUpO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVSZW1vdmVNYWdnb3RTb3VuZCgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9STU1HMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlR3c19JbnRlcmFjdFBvaW50MlwiOlxyXG4gICAgICAgICAgQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgKz0gMTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QyLnNldEFuaW1hdGlvbigwLCBcImlkbGUwMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUk1NRzIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNpcmNsZV8yLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfTWFnZ290Mi5ub2RlLmFjdGl2ZSA9IGZhbHNlfSwgMC43NSk7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVJlbW92ZU1hZ2dvdFNvdW5kKCk7XHJcbiAgICAgICAgICB0aGlzLnNldENvbXBsZXRlU3BpbmUodGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVJlbW92ZU1hZ2dvdFNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4xU291bmQpO30sIDAuNzUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpO30sIDEuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7fSwgMi4yKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMlNvdW5kKTt9LCAyLjgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4zU291bmQpO30sIDQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXRDb21wbGV0ZVNwaW5lKHNwaW5lOnNwLlNrZWxldG9uKTogdm9pZCB7XHJcbiAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmKHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiQWN0aW9uXCIpIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29tcGxldGVTb3VuZCk7XHJcbiAgICAgICAgICB0aGlzLnNob3dUd2VlemVycygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgIXRoaXMuY2hlY2tDbGVhbnNlckZsYWcgJiYgdGhpcy5oYW5kbGVEb25lQ2xlYW5zZXIoKTtcclxuICAgICAgdGhpcy5jaGVja0NsZWFuc2VyRmxhZyAmJiAhdGhpcy5jaGVja3Nob3dUd2VlemVyc0ZsYWcgJiYgdGhpcy5zaG93VHdlZXplcnMoKTtcclxuICAgICAgdGhpcy5jaGVja3Nob3dUd2VlemVyc0ZsYWcgJiYgIXRoaXMuaXNSZW1vdmluZ01hZ2dvdCAmJiB0aGlzLmhhbmRsZUNoZWNrUmVtb3ZlTWFnZ290cygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.xitNuocSound = null;
        _this.nhoMun1Sound = null;
        _this.nhoMun2Sound = null;
        _this.nhoMun3Sound = null;
        _this.completeSound = null;
        _this.conClearSound = null;
        _this.moveItemSound = null;
        _this.woaAnimeSound = null;
        _this.girlScreamSound = null;
        _this.dirtySound = null;
        _this.wormBgSound = null;
        _this.cleanSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        if (constants_1.Constants.ironSource.SoundState && constants_1.Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "wormBgSound":
                    this.wormBgSound.play();
                    break;
                case "cleanSound":
                    this.cleanSound.play();
                    break;
                case "xitNuocSound":
                    this.xitNuocSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "nhoMun3Sound":
                    this.nhoMun3Sound.play();
                    break;
                case "completeSound":
                    this.completeSound.play();
                    break;
                case "conClearSound":
                    this.conClearSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                case "girlScreamSound":
                    this.girlScreamSound.play();
                    break;
                case "dirtySound":
                    this.dirtySound.play();
                    break;
                default:
                    break;
            }
        }
        // if (Constants.ironSource.SoundState) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "wormBgSound":
        //             this.wormBgSound.play();
        //             break;
        //             case "cleanSound":
        //                 this.cleanSound.play();
        //                 break;
        //         case "xitNuocSound":
        //             this.xitNuocSound.play();
        //             break;
        //         case "nhoMun1Sound":
        //             this.nhoMun1Sound.play();
        //             break;
        //         case "nhoMun2Sound":
        //             this.nhoMun2Sound.play();
        //             break;
        //         case "nhoMun3Sound":
        //             this.nhoMun3Sound.play();
        //             break;
        //         case "completeSound":
        //             this.completeSound.play();
        //             break;
        //         case "conClearSound":
        //             this.conClearSound.play();
        //             break;
        //         case "moveItemSound":
        //             this.moveItemSound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         case "girlScreamSound":
        //             this.girlScreamSound.play();
        //             break;
        //         case "dirtySound":
        //             this.dirtySound.play();
        //             break;
        //         default:
        //             break;
        //     }
        // }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "wormBgSound":
                this.wormBgSound.stop();
                break;
            case "cleanSound":
                this.cleanSound.stop();
                break;
            case "xitNuocSound":
                this.xitNuocSound.stop();
                break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "nhoMun3Sound":
                this.nhoMun3Sound.stop();
                break;
            case "completeSound":
                this.completeSound.stop();
                break;
            case "conClearSound":
                this.conClearSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "girlScreamSound":
                this.girlScreamSound.stop();
                break;
            case "dirtySound":
                this.dirtySound.stop();
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.wormBgSound.stop();
        this.xitNuocSound.stop();
        this.cleanSound.stop();
        this.nhoMun1Sound.stop();
        this.nhoMun2Sound.stop();
        this.nhoMun3Sound.stop();
        this.completeSound.stop();
        this.conClearSound.stop();
        this.moveItemSound.stop();
        this.girlScreamSound.stop();
        this.dirtySound.stop();
        this.woaAnimeSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "xitNuocSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun1Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun2Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun3Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "completeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "conClearSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "moveItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaAnimeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "girlScreamSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "dirtySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "wormBgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "cleanSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyTEM7UUF6TEcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDOztJQStKdEMsQ0FBQztJQTdKVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixhQUFhO1FBQ2IsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3ZFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssYUFBYTtvQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixNQUFN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LENBQUMsU0FBUyxHQTJMckQ7a0JBM0xvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBzb3VuZCBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHhpdE51b2NTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbmhvTXVuMVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBuaG9NdW4yU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIG5ob011bjNTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY29tcGxldGVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY29uQ2xlYXJTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbW92ZUl0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd29hQW5pbWVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgZ2lybFNjcmVhbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkaXJ0eVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB3b3JtQmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY2xlYW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBpcm9uc291cmNlXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvcm1CZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JtQmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsZWFuU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwieGl0TnVvY1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aXROdW9jU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5ob011bjFTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuaG9NdW4yU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmhvTXVuM1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uaG9NdW4zU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbkNsZWFyU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbkNsZWFyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdmVJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImdpcmxTY3JlYW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2lybFNjcmVhbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXJ0eVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIC8vICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIndvcm1CZ1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53b3JtQmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSBcImNsZWFuU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jbGVhblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwieGl0TnVvY1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy54aXROdW9jU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIm5ob011bjFTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJuaG9NdW4yU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwibmhvTXVuM1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5uaG9NdW4zU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImNvbXBsZXRlU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImNvbkNsZWFyU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbkNsZWFyU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIm1vdmVJdGVtU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSBcImdpcmxTY3JlYW1Tb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZ2lybFNjcmVhbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJkaXJ0eVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b3JtQmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JtQmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGVhblNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhblNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInhpdE51b2NTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54aXROdW9jU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuaG9NdW4xU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibmhvTXVuMlNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm5ob011bjNTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uaG9NdW4zU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25DbGVhclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbkNsZWFyU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3ZlSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnaXJsU2NyZWFtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2lybFNjcmVhbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlydHlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid29hQW5pbWVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndvcm1CZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnhpdE51b2NTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhblNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm5ob011bjFTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5uaG9NdW4yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubmhvTXVuM1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY29uQ2xlYXJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmdpcmxTY3JlYW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndvYUFuaW1lU291bmQuc3RvcCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MaskGamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e413qp47tDJaKLlYhUb7NL', 'MaskGamePlay');
// Script/Controller/MaskGamePlay.js

"use strict";

var Scratchable = require("Scratchable");

cc.Class({
  "extends": cc.Component,
  properties: {
    pointClear: cc.Node,
    touchArea: cc.Node
  },
  onLoad: function onLoad() {
    this.scratchables = this.getComponentsInChildren(Scratchable);
  },
  update: function update(dt) {
    this.isTouch = this.touchArea.getComponent("TouchAreaController").isTouch;

    if (this.pointClear.active && this.isTouch) {
      console.log("Check");
      var point = cc.v2(this.pointClear.x + cc.winSize.width / 2, this.pointClear.y + cc.winSize.height / 2);
      this.scratchables.forEach(function (scratchable) {
        if (scratchable.isScratchable && scratchable.isInBound(point)) {
          scratchable.scratchHole(point);
        }
      });
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYXNrR2FtZVBsYXkuanMiXSwibmFtZXMiOlsiU2NyYXRjaGFibGUiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludENsZWFyIiwiTm9kZSIsInRvdWNoQXJlYSIsIm9uTG9hZCIsInNjcmF0Y2hhYmxlcyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwidXBkYXRlIiwiZHQiLCJpc1RvdWNoIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsInBvaW50IiwidjIiLCJ4Iiwid2luU2l6ZSIsIndpZHRoIiwieSIsImhlaWdodCIsImZvckVhY2giLCJzY3JhdGNoYWJsZSIsImlzU2NyYXRjaGFibGUiLCJpc0luQm91bmQiLCJzY3JhdGNoSG9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQTNCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBREw7QUFFVkMsSUFBQUEsU0FBUyxFQUFFTixFQUFFLENBQUNLO0FBRkosR0FITDtBQVFQRSxFQUFBQSxNQVJPLG9CQVFFO0FBQ1AsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyx1QkFBTCxDQUE2QlgsV0FBN0IsQ0FBcEI7QUFDRCxHQVZNO0FBWVBZLEVBQUFBLE1BWk8sa0JBWUFDLEVBWkEsRUFZSTtBQUNULFNBQUtDLE9BQUwsR0FBZSxLQUFLTixTQUFMLENBQWVPLFlBQWYsQ0FBNEIscUJBQTVCLEVBQW1ERCxPQUFsRTs7QUFDQSxRQUFJLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQWhCLElBQTBCLEtBQUtGLE9BQW5DLEVBQTRDO0FBQzFDRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsVUFBSUMsS0FBSyxHQUFHakIsRUFBRSxDQUFDa0IsRUFBSCxDQUNWLEtBQUtkLFVBQUwsQ0FBZ0JlLENBQWhCLEdBQW9CbkIsRUFBRSxDQUFDb0IsT0FBSCxDQUFXQyxLQUFYLEdBQW1CLENBRDdCLEVBRVYsS0FBS2pCLFVBQUwsQ0FBZ0JrQixDQUFoQixHQUFvQnRCLEVBQUUsQ0FBQ29CLE9BQUgsQ0FBV0csTUFBWCxHQUFvQixDQUY5QixDQUFaO0FBSUEsV0FBS2YsWUFBTCxDQUFrQmdCLE9BQWxCLENBQTBCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsWUFBSUEsV0FBVyxDQUFDQyxhQUFaLElBQTZCRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JWLEtBQXRCLENBQWpDLEVBQStEO0FBQzdEUSxVQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBd0JYLEtBQXhCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUFDRjtBQTFCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTY3JhdGNoYWJsZSA9IHJlcXVpcmUoXCJTY3JhdGNoYWJsZVwiKTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHBvaW50Q2xlYXI6IGNjLk5vZGUsXG4gICAgdG91Y2hBcmVhOiBjYy5Ob2RlLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNjcmF0Y2hhYmxlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU2NyYXRjaGFibGUpO1xuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuaXNUb3VjaCA9IHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikuaXNUb3VjaDtcbiAgICBpZiAodGhpcy5wb2ludENsZWFyLmFjdGl2ZSAmJiB0aGlzLmlzVG91Y2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tcIik7XG4gICAgICB2YXIgcG9pbnQgPSBjYy52MihcbiAgICAgICAgdGhpcy5wb2ludENsZWFyLnggKyBjYy53aW5TaXplLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5wb2ludENsZWFyLnkgKyBjYy53aW5TaXplLmhlaWdodCAvIDJcbiAgICAgICk7XG4gICAgICB0aGlzLnNjcmF0Y2hhYmxlcy5mb3JFYWNoKChzY3JhdGNoYWJsZSkgPT4ge1xuICAgICAgICBpZiAoc2NyYXRjaGFibGUuaXNTY3JhdGNoYWJsZSAmJiBzY3JhdGNoYWJsZS5pc0luQm91bmQocG9pbnQpKSB7XG4gICAgICAgICAgc2NyYXRjaGFibGUuc2NyYXRjaEhvbGUocG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/IronSource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c0ang8TBDWqCvjXG1XKDi', 'IronSource');
// Script/Controller/IronSource.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var IronSource = /** @class */ (function (_super) {
    __extends(IronSource, _super);
    function IronSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    IronSource.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    IronSource.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    IronSource.prototype.update = function (dt) {
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], IronSource.prototype, "AudioManager", void 0);
    IronSource = __decorate([
        ccclass
    ], IronSource);
    return IronSource;
}(cc.Component));
exports.default = IronSource;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDOztJQWlDdEMsQ0FBQztJQS9CVSw4Q0FBeUIsR0FBaEM7UUFDSSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUdPLDhDQUF5QixHQUFqQztRQUNFLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxGLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0cscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBRVMsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBaENIO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7b0RBQ1c7SUFIakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW9DOUI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDdUMsRUFBRSxDQUFDLFNBQVMsR0FvQ25EO2tCQXBDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElyb25Tb3VyY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
