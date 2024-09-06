
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
        _this.CTA = null;
        _this.Btn_1 = null;
        _this.Hand = null;
        _this.Hint_Circle = null;
        _this.Hint_Circle_2 = null;
        // Character Path
        _this.Doll = null;
        _this.Doll_Ear = null;
        _this.Doll_Maggot = null;
        _this.Doll_SpineRmMaggot = null;
        _this.Doll_Poke = null;
        // Flow
        _this.Flow1 = null;
        _this.Flow2 = null;
        // Tools
        _this.ToolArea = null;
        _this.Flow1_Tool = null;
        _this.Flow1_ToolHead = null;
        _this.Flow1_spineTool = null;
        _this.Flow1_DollSpineTool = null;
        _this.Flow2_Tool = null;
        _this.Flow2_ToolHead = null;
        // Area
        _this.Flow1_Area = null;
        _this.Flow1_Acnes = [];
        _this.Flow2_Area = null;
        // CTA
        _this.CTA_Btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        _this.initPosTool_Flow2 = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        this.Hand = this.UI.getChildByName("hand2");
        this.Doll = this.UI.getChildByName("Doll");
        this.Doll_Poke = this.Doll.getChildByName("poke");
        this.Doll_Ear = this.Doll.getChildByName("Malear").getComponent(sp.Skeleton);
        this.Hint_Circle = this.Doll.getChildByName("Maggot").getChildByName("circle");
        this.Hint_Circle_2 = this.Doll.getChildByName("Maggot").getChildByName("circle_2");
        this.Doll_Maggot = this.Doll.getChildByName("Maggot").getChildByName("Mask_Maggot");
        this.Doll_SpineRmMaggot = this.Doll.getChildByName("Maggot")
            .getChildByName("Mask").getChildByName("spine_tool").getComponent(sp.Skeleton);
        this.Flow1 = this.UI.getChildByName("Flow_1");
        this.Flow1_DollSpineTool = this.Doll.getChildByName("Maggot")
            .getChildByName("Mask").getChildByName("spine_tool").getComponent(sp.Skeleton);
        this.Flow1_Tool = this.Flow1.getChildByName("Tool");
        this.Flow1_ToolHead = this.Flow1.getChildByName("ToolHead");
        this.Flow1_spineTool = this.Flow1.getChildByName("spine_Tool");
        this.Flow1_Area = this.Flow1.getChildByName("Area");
        this.Flow2 = this.UI.getChildByName("Flow_2");
        this.Flow2_Tool = this.Flow2.getChildByName("poke");
        this.Flow2_ToolHead = this.Flow2.getChildByName("ToolHead");
        this.Flow2_Area = this.Flow2.getChildByName("Area");
        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.init();
    };
    NodeContainer.prototype.init = function () {
        this.initPosTool_Flow2 = this.Flow2_Tool.getPosition();
        this.ToolArea = this.Flow1_Tool;
    };
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
    ], NodeContainer.prototype, "CTA", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNEhDO1FBMUhHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixLQUFLO1FBRUwsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLEtBQUs7UUFFTCxTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBaUI7UUFDakIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUM3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1Qix3QkFBa0IsR0FBZ0IsSUFBSSxDQUFDO1FBQ3ZDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUNQLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixRQUFRO1FBQ1IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyx5QkFBbUIsR0FBZ0IsSUFBSSxDQUFDO1FBRXhDLGdCQUFVLEdBQVksSUFBSSxDQUFD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YSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjcmF0Y2hhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQmdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEJ0bl8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgSGludF9DaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgSGludF9DaXJjbGVfMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIENoYXJhY3RlciBQYXRoXHJcbiAgICBEb2xsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIERvbGxfRWFyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBEb2xsX01hZ2dvdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEb2xsX1NwaW5lUm1NYWdnb3Q6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIERvbGxfUG9rZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIEZsb3dcclxuICAgIEZsb3cxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZsb3cyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gVG9vbHNcclxuICAgIFRvb2xBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZsb3cxX1Rvb2w6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRmxvdzFfVG9vbEhlYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRmxvdzFfc3BpbmVUb29sOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZsb3cxX0RvbGxTcGluZVRvb2w6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBGbG93Ml9Ub29sOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZsb3cyX1Rvb2xIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQXJlYVxyXG4gICAgRmxvdzFfQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93MV9BY25lczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgRmxvdzJfQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIENUQVxyXG4gICAgQ1RBX0J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBDVEFfaWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBDVEFfbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIGluaXRQb3NUb29sX0Zsb3cyOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuSGFuZCA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kMlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Eb2xsID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkRvbGxcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRG9sbF9Qb2tlID0gdGhpcy5Eb2xsLmdldENoaWxkQnlOYW1lKFwicG9rZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Eb2xsX0VhciA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIk1hbGVhclwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG5cclxuICAgICAgICB0aGlzLkhpbnRfQ2lyY2xlID0gdGhpcy5Eb2xsLmdldENoaWxkQnlOYW1lKFwiTWFnZ290XCIpLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkhpbnRfQ2lyY2xlXzIgPSB0aGlzLkRvbGwuZ2V0Q2hpbGRCeU5hbWUoXCJNYWdnb3RcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVfMlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Eb2xsX01hZ2dvdCA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIk1hZ2dvdFwiKS5nZXRDaGlsZEJ5TmFtZShcIk1hc2tfTWFnZ290XCIpO1xyXG5cclxuICAgICAgICB0aGlzLkRvbGxfU3BpbmVSbU1hZ2dvdCA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIk1hZ2dvdFwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV90b29sXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgIHRoaXMuRmxvdzEgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiRmxvd18xXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkZsb3cxX0RvbGxTcGluZVRvb2wgPSAgdGhpcy5Eb2xsLmdldENoaWxkQnlOYW1lKFwiTWFnZ290XCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiTWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX3Rvb2xcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5GbG93MV9Ub29sID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcIlRvb2xcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRmxvdzFfVG9vbEhlYWQgPSB0aGlzLkZsb3cxLmdldENoaWxkQnlOYW1lKFwiVG9vbEhlYWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRmxvdzFfc3BpbmVUb29sID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX1Rvb2xcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5GbG93MV9BcmVhID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcIkFyZWFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRmxvdzIgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiRmxvd18yXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkZsb3cyX1Rvb2wgPSB0aGlzLkZsb3cyLmdldENoaWxkQnlOYW1lKFwicG9rZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5GbG93Ml9Ub29sSGVhZCA9IHRoaXMuRmxvdzIuZ2V0Q2hpbGRCeU5hbWUoXCJUb29sSGVhZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5GbG93Ml9BcmVhID0gdGhpcy5GbG93Mi5nZXRDaGlsZEJ5TmFtZShcIkFyZWFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX0J0biA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwiYnRuTmV4dFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nbyA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwibG9nb1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfaWNvbiA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfb3ZlcmxheSA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwiT3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRQb3NUb29sX0Zsb3cyID0gdGhpcy5GbG93Ml9Ub29sLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuVG9vbEFyZWEgPSB0aGlzLkZsb3cxX1Rvb2w7XHJcbiAgICB9XHJcbn1cclxuIl19