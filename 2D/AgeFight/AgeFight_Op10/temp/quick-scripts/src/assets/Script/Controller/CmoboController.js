"use strict";
cc._RF.push(module, '679afIcYMtMwYaLkXHrL+XK', 'CmoboController');
// Script/Controller/CmoboController.ts

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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ComboController = /** @class */ (function (_super) {
    __extends(ComboController, _super);
    function ComboController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine_combo = null;
        return _this;
    }
    ComboController.prototype.start = function () {
    };
    ComboController.prototype.handleShowCombo = function () {
        cc.log("Cmobo Count: " + constants_1.Constants.comboCount);
        switch (constants_1.Constants.comboCount) {
            case 2:
                this.spine_combo.node.active = true;
                this.spine_combo.setSkin("Combo 2");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 3:
                this.spine_combo.setSkin("Combo 3");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 4:
                this.spine_combo.setSkin("Combo 4");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 5:
                this.spine_combo.setSkin("Combo 5");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 6:
                this.spine_combo.setSkin("Combo 6");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            default:
                break;
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], ComboController.prototype, "spine_combo", void 0);
    ComboController = __decorate([
        ccclass
    ], ComboController);
    return ComboController;
}(cc.Component));
exports.default = ComboController;

cc._RF.pop();