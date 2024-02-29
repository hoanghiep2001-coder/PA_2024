
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQTBEQztRQXhEQyxZQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUU5QixpQkFBVyxHQUFnQixFQUFFLENBQUM7UUFJOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFDeEMsZ0JBQVUsR0FBZSxDQUFDLENBQUM7UUFFM0IsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUE2QzFCLENBQUM7SUEzQ0MsdUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxJQUFhO1FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9FLHVDQUF1QztRQUN2QywrQ0FBK0M7UUFDL0MsK0NBQStDO1FBQy9DLCtDQUErQztRQUMvQyxJQUFJO1FBRUosRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLElBQUk7UUFDckIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0s7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVTtJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNJO0lBUlgsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQTBEbEI7SUFBRCxhQUFDO0NBMURELEFBMERDLENBMUQyQixFQUFFLENBQUMsU0FBUyxHQTBEdkM7QUExRFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdHlwZUNvbG9yQ2lyY2xlIH0gZnJvbSBcIi4vQ2lyY2xlRW51bXNcIjtcclxuaW1wb3J0IHsgdGlwZUNpcmNsZSB9IGZyb20gXCIuL0NpcmNsZUVudW1zXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHNwcml0ZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgY2lyY2xlc1RpcGU6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gIFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJsaW5rOiBjYy5Ob2RlID0gbnVsbDtcclxuICBcclxuICBDaXJjbGVUeXBlQ29sb3I6IHR5cGVDb2xvckNpcmNsZSA9IG51bGw7XHJcbiAgQ2lyY2xlVHlwZTogdGlwZUNpcmNsZSA9IDA7XHJcbiAgcmFuZG9tTnVtYmVyOiBudW1iZXI7XHJcbiAgaW5Nb3ZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0UmFuZG9tQ29sb3IoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZG9tQ29sb3IoZmxhZzogYm9vbGVhbil7XHJcbiAgICB2YXIgc3AgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB0aGlzLnJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zcHJpdGUubGVuZ3RoKSk7XHJcblxyXG4gICAgLy8gaWYoZmxhZyAmJiB0aGlzLnJhbmRvbU51bWJlciA8PSAwKSB7XHJcbiAgICAvLyAgIHRoaXMucmFuZG9tTnVtYmVyID0gdGhpcy5yYW5kb21OdW1iZXIgKyAxO1xyXG4gICAgLy8gfSBlbHNlIGlmIChmbGFnICYmIHRoaXMucmFuZG9tTnVtYmVyID49IDYpIHtcclxuICAgIC8vICAgdGhpcy5yYW5kb21OdW1iZXIgPSB0aGlzLnJhbmRvbU51bWJlciAtIDE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3Auc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLnJhbmRvbU51bWJlcl07XHJcbiAgICB0aGlzLnNldENvbG9yVGlwZSh0aGlzLnJhbmRvbU51bWJlcik7XHJcbiAgfVxyXG5cclxuICBzZXRUaXBlKHRpcGUpIHtcclxuICAgIHRoaXMuQ2lyY2xlVHlwZSA9IHRpcGU7XHJcbiAgICBpZiAodGlwZSA+IDApIHtcclxuICAgICAgaWYgKHRpcGUgPT0gNCkge1xyXG4gICAgICAgIHRoaXMuc2V0VGlwZVRNUCgxKTtcclxuICAgICAgICB0aGlzLnNldFRpcGVUTVAoMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRUaXBlVE1QKHRpcGUgLSAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUaXBlVE1QKHRpcGUpIHtcclxuICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaXJjbGVzVGlwZVt0aXBlXSk7XHJcbiAgICBuZXdOb2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgbmV3Tm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKSk7XHJcbiAgICBuZXdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29sb3JUaXBlKHRpcGUpIHtcclxuICAgIHZhciBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRoaXMuQ2lyY2xlVHlwZUNvbG9yID0gdGlwZTtcclxuICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGlwZV07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0=