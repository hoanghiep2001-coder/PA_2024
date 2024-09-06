"use strict";
cc._RF.push(module, '4e572/MVNFO0p1py0Apfw5p', 'SupporterController');
// Script/Controller/SupporterController.ts

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
var Supporter_1 = require("../Other/Supporter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SupporterController = /** @class */ (function (_super) {
    __extends(SupporterController, _super);
    function SupporterController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.supporters = [];
        // state
        _this.tweenStates = [];
        return _this;
    }
    SupporterController.prototype.start = function () {
        for (var index = 0; index < this.supporters.length; index++) {
            var node = this.supporters[index];
            var tweenState = cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(0.8, { opacity: 120 })
                .to(0.8, { opacity: 50 })).start();
            this.tweenStates.push(tweenState);
        }
    };
    SupporterController.prototype.activeSupporter = function (index) {
        this.tweenStates[index].stop();
        this.supporters[index].opacity = 255;
        this.supporters[index].getComponent(Supporter_1.default).isActive = true;
    };
    __decorate([
        property([cc.Node])
    ], SupporterController.prototype, "supporters", void 0);
    SupporterController = __decorate([
        ccclass
    ], SupporterController);
    return SupporterController;
}(cc.Component));
exports.default = SupporterController;

cc._RF.pop();