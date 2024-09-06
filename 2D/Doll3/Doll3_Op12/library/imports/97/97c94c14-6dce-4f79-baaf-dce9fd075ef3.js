"use strict";
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