
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
cc._RF.push(module, '97c94wUbc5Pebqv3On9B17z', 'NodesContainer');
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
        _this.BG = null;
        _this.hideMask = null;
        _this.UI = null;
        // FX
        _this.PS_Blink_Head = null;
        _this.PS_Blink_Base = null;
        _this.PS_Blink_Shoe = null;
        // UI
        _this.Hand = null;
        _this.doll = null;
        _this.Doll_Camera = null;
        _this.Logo = null;
        _this.Icon = null;
        _this.Progress = null;
        _this.ProgressSteps = [];
        _this.Btn_DollCamera = null;
        _this.BtnDownload = null;
        _this.BtnLeft = null;
        _this.BtnRight = null;
        _this.ListItem = null;
        _this.ListColor = null;
        // Items
        _this.Char_Hairs = [];
        _this.Char_DressDefault = null;
        _this.Char_Dresses = [];
        _this.Char_ShoesDefault = null;
        _this.Char_Shoes = [];
        _this.Items = [];
        _this.Frame_Colors = [];
        _this.Frame_Hairs = [];
        _this.Frame_Dresses = [];
        _this.Frame_Shoes = [];
        return _this;
    }
    NodesContainer.prototype.onLoad = function () {
        this.BtnLeft.active = false;
        this.BtnRight.active = false;
    };
    NodesContainer.prototype.start = function () {
        // màu FX #FF8F00
        var _this = this;
        // init progress Steps
        this.ProgressSteps = this.Progress.getChildByName("thanhngang").children;
        // init items
        this.Items = this.ListItem.children;
        // init frame pick hairs
        this.ListItem.getChildByName("Hair").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Hairs.push(framePick);
        });
        // init frame pick dress
        this.ListItem.getChildByName("Dress").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Dresses.push(framePick);
        });
        // init frame pick shoe
        this.ListItem.getChildByName("Shoe").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Shoes.push(framePick);
        });
        // init frame pick colors
        this.Frame_Colors = this.ListColor.children;
        // init camera
        this.Btn_DollCamera = this.Doll_Camera.getChildByName("btn");
    };
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Head", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Base", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Shoe", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Doll_Camera", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Progress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnDownload", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnLeft", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnRight", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "ListItem", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "ListColor", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Hairs", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Char_DressDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Dresses", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Char_ShoesDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Shoes", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXNHQztRQXBHRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixLQUFLO1FBRUwsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXNCLElBQUksQ0FBQztRQUV4QyxtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFFeEMsS0FBSztRQUVMLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFFBQVE7UUFFUixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBRTNCLFdBQUssR0FBYyxFQUFFLENBQUM7UUFFdEIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFDN0IsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFDOUIsaUJBQVcsR0FBYyxFQUFFLENBQUM7O0lBeUNoQyxDQUFDO0lBdENhLCtCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBR1MsOEJBQUssR0FBZjtRQUNJLGlCQUFpQjtRQURyQixpQkErQkM7UUE1Qkcsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXpFLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXBDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDN0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCxJQUFJLFNBQVMsQ0FBQyxJQUFJO2dCQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUM5RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELElBQUksU0FBUyxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDSCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsSUFBSSxTQUFTLENBQUMsSUFBSTtnQkFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILHlCQUF5QjtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBRTVDLGNBQWM7UUFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLENBQUM7SUFuR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0M7SUFJbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzt5REFDWTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO3lEQUNZO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7eURBQ1k7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFLekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNRO0lBSTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNPO0lBdERWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FzR2xDO0lBQUQscUJBQUM7Q0F0R0QsQUFzR0MsQ0F0RzJDLEVBQUUsQ0FBQyxTQUFTLEdBc0d2RDtrQkF0R29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEZYXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19CbGlua19IZWFkOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19CbGlua19CYXNlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19CbGlua19TaG9lOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgLy8gVUlcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEb2xsX0NhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIExvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUHJvZ3Jlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgUHJvZ3Jlc3NTdGVwczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQnRuX0RvbGxDYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCdG5Eb3dubG9hZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJ0bkxlZnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCdG5SaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMaXN0SXRlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIExpc3RDb2xvcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gSXRlbXNcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBDaGFyX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ2hhcl9EcmVzc0RlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIENoYXJfRHJlc3NlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENoYXJfU2hvZXNEZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBDaGFyX1Nob2VzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBJdGVtczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgRnJhbWVfQ29sb3JzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEZyYW1lX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEZyYW1lX0RyZXNzZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgRnJhbWVfU2hvZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQnRuTGVmdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJ0blJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbcOgdSBGWCAjRkY4RjAwXHJcblxyXG4gICAgICAgIC8vIGluaXQgcHJvZ3Jlc3MgU3RlcHNcclxuICAgICAgICB0aGlzLlByb2dyZXNzU3RlcHMgPSB0aGlzLlByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwidGhhbmhuZ2FuZ1wiKS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy8gaW5pdCBpdGVtc1xyXG4gICAgICAgIHRoaXMuSXRlbXMgPSB0aGlzLkxpc3RJdGVtLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvLyBpbml0IGZyYW1lIHBpY2sgaGFpcnNcclxuICAgICAgICB0aGlzLkxpc3RJdGVtLmdldENoaWxkQnlOYW1lKFwiSGFpclwiKS5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVBpY2sgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnJhbWVQaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVQaWNrLm5hbWUpIHRoaXMuRnJhbWVfSGFpcnMucHVzaChmcmFtZVBpY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGluaXQgZnJhbWUgcGljayBkcmVzc1xyXG4gICAgICAgIHRoaXMuTGlzdEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEcmVzc1wiKS5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVBpY2sgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnJhbWVQaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVQaWNrLm5hbWUpIHRoaXMuRnJhbWVfRHJlc3Nlcy5wdXNoKGZyYW1lUGljayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaW5pdCBmcmFtZSBwaWNrIHNob2VcclxuICAgICAgICB0aGlzLkxpc3RJdGVtLmdldENoaWxkQnlOYW1lKFwiU2hvZVwiKS5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVBpY2sgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnJhbWVQaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVQaWNrLm5hbWUpIHRoaXMuRnJhbWVfU2hvZXMucHVzaChmcmFtZVBpY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpbml0IGZyYW1lIHBpY2sgY29sb3JzXHJcbiAgICAgICAgdGhpcy5GcmFtZV9Db2xvcnMgPSB0aGlzLkxpc3RDb2xvci5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy8gaW5pdCBjYW1lcmFcclxuICAgICAgICB0aGlzLkJ0bl9Eb2xsQ2FtZXJhID0gdGhpcy5Eb2xsX0NhbWVyYS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19