
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
        _this.hideMask = null;
        _this.BG = null;
        _this.UI = null;
        _this.Hand = null;
        _this.Decor = null;
        _this.boy = null;
        _this.boy_answerCorrect = null;
        _this.boy_answerWrong = null;
        _this.CharactersContainer = null;
        _this.Overlay = null;
        _this.Dolls = [];
        _this.Lv1_Hint = null;
        _this.Lv2_Hint = null;
        _this.FX_Blink = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
        this.Decor = this.UI.getChildByName("Decor");
        this.boy = this.Decor.getChildByName("Boy");
        this.boy_answerCorrect = this.boy.getChildByName("Correct");
        this.boy_answerWrong = this.boy.getChildByName("Wrong");
        this.CharactersContainer = this.UI.getChildByName("Characters");
        this.Overlay = this.UI.getChildByName("Overlay");
        this.Dolls = this.CharactersContainer.children;
        // board ----------
        var board = this.Decor.getChildByName("board");
        this.Lv1_Hint = board.getChildByName("Hint1");
        this.Lv2_Hint = board.getChildByName("Hint2");
        this.FX_Blink = board.getChildByName("PS_Base").getChildByName("Blink").getComponent(cc.ParticleSystem);
    };
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Hand", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTBDQztRQXhDRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUNwQix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFDbEMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBQ3BDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFzQixJQUFJLENBQUM7O0lBcUJ2QyxDQUFDO0lBbEJhLDhCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1FBRS9DLG1CQUFtQjtRQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFUSixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMENsQztJQUFELHFCQUFDO0NBMUNELEFBMENDLENBMUMyQyxFQUFFLENBQUMsU0FBUyxHQTBDdkQ7a0JBMUNvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBEZWNvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBib3k6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYm95X2Fuc3dlckNvcnJlY3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYm95X2Fuc3dlcldyb25nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIENoYXJhY3RlcnNDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgT3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEb2xscyA6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEx2MV9IaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEx2Ml9IaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZYX0JsaW5rOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkRlY29yID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkRlY29yXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJveSA9IHRoaXMuRGVjb3IuZ2V0Q2hpbGRCeU5hbWUoXCJCb3lcIik7XHJcbiAgICAgICAgdGhpcy5ib3lfYW5zd2VyQ29ycmVjdCA9IHRoaXMuYm95LmdldENoaWxkQnlOYW1lKFwiQ29ycmVjdFwiKTtcclxuICAgICAgICB0aGlzLmJveV9hbnN3ZXJXcm9uZyA9IHRoaXMuYm95LmdldENoaWxkQnlOYW1lKFwiV3JvbmdcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQ2hhcmFjdGVyc0NvbnRhaW5lciA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIHRoaXMuT3ZlcmxheSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJPdmVybGF5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLkRvbGxzID0gdGhpcy5DaGFyYWN0ZXJzQ29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvLyBib2FyZCAtLS0tLS0tLS0tXHJcbiAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5EZWNvci5nZXRDaGlsZEJ5TmFtZShcImJvYXJkXCIpO1xyXG4gICAgICAgIHRoaXMuTHYxX0hpbnQgPSBib2FyZC5nZXRDaGlsZEJ5TmFtZShcIkhpbnQxXCIpO1xyXG4gICAgICAgIHRoaXMuTHYyX0hpbnQgPSBib2FyZC5nZXRDaGlsZEJ5TmFtZShcIkhpbnQyXCIpO1xyXG4gICAgICAgIHRoaXMuRlhfQmxpbmsgPSBib2FyZC5nZXRDaGlsZEJ5TmFtZShcIlBTX0Jhc2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCbGlua1wiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==