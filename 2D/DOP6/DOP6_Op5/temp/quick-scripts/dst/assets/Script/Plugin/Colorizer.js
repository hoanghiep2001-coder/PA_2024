
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Colorizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50ec2lJW4pG/5sN64RwegCY', 'Colorizer');
// Script/Plugin/Colorizer.ts

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
var NeutrinoEffect_Heart_1 = require("../../neutrinoparticles/components/NeutrinoEffect_Heart");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Colorizer = /** @class */ (function (_super) {
    __extends(Colorizer, _super);
    function Colorizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colorizer.prototype.start = function () {
        var effect = this.node.getComponent(NeutrinoEffect_Heart_1.default);
        if (effect) {
            effect.setPropertyInAllEmitters('Color', // Name of the property
            new cc.Vec3(0.92, 0, 0.92) // cc.Vec3(R, G, B) - red color
            );
        }
    };
    Colorizer = __decorate([
        ccclass
    ], Colorizer);
    return Colorizer;
}(cc.Component));
exports.default = Colorizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXENvbG9yaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnR0FBMEY7QUFFcEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBYUEsQ0FBQztJQVhhLHlCQUFLLEdBQWY7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBbUIsQ0FBQyxDQUFDO1FBRWpFLElBQUksTUFBTSxFQUFFO1lBQ1gsTUFBTSxDQUFDLHdCQUF3QixDQUNsQixPQUFPLEVBQWlCLHVCQUF1QjtZQUMvQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBSSwrQkFBK0I7YUFDaEUsQ0FBQztTQUNYO0lBRUMsQ0FBQztJQVpnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBYTdCO0lBQUQsZ0JBQUM7Q0FiRCxBQWFDLENBYnNDLEVBQUUsQ0FBQyxTQUFTLEdBYWxEO2tCQWJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IE5ldXRyaW5vRWZmZWN0SGVhcnQgZnJvbSBcIi4uLy4uL25ldXRyaW5vcGFydGljbGVzL2NvbXBvbmVudHMvTmV1dHJpbm9FZmZlY3RfSGVhcnRcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JpemVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChOZXV0cmlub0VmZmVjdEhlYXJ0KTtcclxuICAgICAgICBcclxuXHRcdGlmIChlZmZlY3QpIHtcclxuXHRcdFx0ZWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhcclxuICAgICAgICAgICAgICAgICdDb2xvcicsICAgICAgICAgICAgICAgIC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMygwLjkyLCAwLCAwLjkyKSAgICAvLyBjYy5WZWMzKFIsIEcsIEIpIC0gcmVkIGNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==