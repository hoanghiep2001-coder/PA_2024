
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/CmoboController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDbW9ib0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMENDO1FBdENHLGlCQUFXLEdBQWdCLElBQUksQ0FBQzs7SUFzQ3BDLENBQUM7SUFuQ0csK0JBQUssR0FBTDtJQUVBLENBQUM7SUFHTSx5Q0FBZSxHQUF0QjtRQUVJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFOUMsUUFBUSxxQkFBUyxDQUFDLFVBQVUsRUFBRTtZQUMxQixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0RBQ1U7SUFKZixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMENuQztJQUFELHNCQUFDO0NBMUNELEFBMENDLENBMUM0QyxFQUFFLENBQUMsU0FBUyxHQTBDeEQ7a0JBMUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYm9Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc3BpbmVfY29tYm86IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZVNob3dDb21ibygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY2MubG9nKFwiQ21vYm8gQ291bnQ6IFwiICsgQ29uc3RhbnRzLmNvbWJvQ291bnQpXHJcblxyXG4gICAgICAgIHN3aXRjaCAoQ29uc3RhbnRzLmNvbWJvQ291bnQpIHtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZV9jb21iby5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lX2NvbWJvLnNldFNraW4oXCJDb21ibyAyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZV9jb21iby5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVfY29tYm8uc2V0U2tpbihcIkNvbWJvIDNcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lX2NvbWJvLnNldEFuaW1hdGlvbigwLCBcImFjdGlvblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZV9jb21iby5zZXRTa2luKFwiQ29tYm8gNFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVfY29tYm8uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lX2NvbWJvLnNldFNraW4oXCJDb21ibyA1XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZV9jb21iby5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVfY29tYm8uc2V0U2tpbihcIkNvbWJvIDZcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lX2NvbWJvLnNldEFuaW1hdGlvbigwLCBcImFjdGlvblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=