"use strict";
cc._RF.push(module, '7dbc7eE2d1AgKeAG34Dn73t', 'Circle');
// Script/MainGame/Circle.ts

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
exports.Circle = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = [];
        _this.circlesTipe = [];
        _this.Blink = null;
        _this.CircleTypeColor = null;
        _this.CircleType = 0;
        _this.inMove = false;
        return _this;
    }
    Circle.prototype.onLoad = function () {
        this.setRandomColor(false);
    };
    Circle.prototype.setRandomColor = function (flag) {
        var sp = this.node.getComponent(cc.Sprite);
        this.randomNumber = Math.floor(Math.random() * Math.floor(this.sprite.length));
        // if(flag && this.randomNumber <= 0) {
        //   this.randomNumber = this.randomNumber + 1;
        // } else if (flag && this.randomNumber >= 6) {
        //   this.randomNumber = this.randomNumber - 1;
        // }
        sp.spriteFrame = this.sprite[this.randomNumber];
        this.setColorTipe(this.randomNumber);
    };
    Circle.prototype.setTipe = function (tipe) {
        this.CircleType = tipe;
        if (tipe > 0) {
            if (tipe == 4) {
                this.setTipeTMP(1);
                this.setTipeTMP(2);
            }
            else {
                this.setTipeTMP(tipe - 1);
            }
        }
    };
    Circle.prototype.setTipeTMP = function (tipe) {
        var newNode = cc.instantiate(this.circlesTipe[tipe]);
        newNode.setParent(this.node);
        newNode.setContentSize(this.node.getContentSize());
        newNode.setPosition(0, 0);
    };
    Circle.prototype.setColorTipe = function (tipe) {
        var sp = this.node.getComponent(cc.Sprite);
        this.CircleTypeColor = tipe;
        sp.spriteFrame = this.sprite[tipe];
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Circle.prototype, "sprite", void 0);
    __decorate([
        property(cc.Prefab)
    ], Circle.prototype, "circlesTipe", void 0);
    __decorate([
        property(cc.Node)
    ], Circle.prototype, "Blink", void 0);
    Circle = __decorate([
        ccclass
    ], Circle);
    return Circle;
}(cc.Component));
exports.Circle = Circle;

cc._RF.pop();