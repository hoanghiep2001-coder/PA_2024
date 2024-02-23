
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/Circle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.CircleType = 0;
        _this.inMove = false;
        return _this;
    }
    Circle.prototype.onLoad = function () {
        this.setRandomColor();
    };
    Circle.prototype.setRandomColor = function () {
        var sp = this.node.getComponent(cc.Sprite);
        this.randomNumber = Math.floor(Math.random() * Math.floor(this.sprite.length));
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
        property
    ], Circle.prototype, "CircleTypeColor", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQW9EQztRQWxEQyxZQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUU5QixpQkFBVyxHQUFnQixFQUFFLENBQUM7UUFNOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixnQkFBVSxHQUFlLENBQUMsQ0FBQztRQUUzQixZQUFNLEdBQVksS0FBSyxDQUFDOztJQXNDMUIsQ0FBQztJQXBDQyx1QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0UsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0UsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLElBQUk7UUFDckIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0s7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVTtJQUc5QjtRQURDLFFBQVE7bURBQ3dCO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0k7SUFWWCxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBb0RsQjtJQUFELGFBQUM7Q0FwREQsQUFvREMsQ0FwRDJCLEVBQUUsQ0FBQyxTQUFTLEdBb0R2QztBQXBEWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGVDb2xvckNpcmNsZSB9IGZyb20gXCIuL0NpcmNsZUVudW1zXCI7XHJcbmltcG9ydCB7IHRpcGVDaXJjbGUgfSBmcm9tIFwiLi9DaXJjbGVFbnVtc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBzcHJpdGU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGNpcmNsZXNUaXBlOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHlcclxuICBDaXJjbGVUeXBlQ29sb3I6IHR5cGVDb2xvckNpcmNsZTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQmxpbms6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBDaXJjbGVUeXBlOiB0aXBlQ2lyY2xlID0gMDtcclxuICByYW5kb21OdW1iZXI6IG51bWJlcjtcclxuICBpbk1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zZXRSYW5kb21Db2xvcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZG9tQ29sb3IoKXtcclxuICAgIHZhciBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRoaXMucmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcih0aGlzLnNwcml0ZS5sZW5ndGgpKTtcclxuICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5yYW5kb21OdW1iZXJdO1xyXG4gICAgdGhpcy5zZXRDb2xvclRpcGUodGhpcy5yYW5kb21OdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGlwZSh0aXBlKSB7XHJcbiAgICB0aGlzLkNpcmNsZVR5cGUgPSB0aXBlO1xyXG4gICAgaWYgKHRpcGUgPiAwKSB7XHJcbiAgICAgIGlmICh0aXBlID09IDQpIHtcclxuICAgICAgICB0aGlzLnNldFRpcGVUTVAoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRUaXBlVE1QKDIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0VGlwZVRNUCh0aXBlIC0gMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGlwZVRNUCh0aXBlKSB7XHJcbiAgICB2YXIgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2lyY2xlc1RpcGVbdGlwZV0pO1xyXG4gICAgbmV3Tm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgIG5ld05vZGUuc2V0Q29udGVudFNpemUodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgbmV3Tm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICB9XHJcblxyXG4gIHNldENvbG9yVGlwZSh0aXBlKSB7XHJcbiAgICB2YXIgc3AgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB0aGlzLkNpcmNsZVR5cGVDb2xvciA9IHRpcGU7XHJcbiAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RpcGVdO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19