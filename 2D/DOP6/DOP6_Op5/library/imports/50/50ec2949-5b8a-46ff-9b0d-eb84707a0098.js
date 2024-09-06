"use strict";
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