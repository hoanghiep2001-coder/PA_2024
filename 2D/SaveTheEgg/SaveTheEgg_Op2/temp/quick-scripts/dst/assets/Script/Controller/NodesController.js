
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a4b0WHwkROlbKmBnDG0V0n', 'NodesController');
// Script/Controller/NodesController.ts

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
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.Graphics = null;
        // Node
        _this.HideMask = null;
        _this.Pencil = null;
        return _this;
    }
    __decorate([
        property(cc.Graphics)
    ], NodesController.prototype, "Graphics", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Pencil", void 0);
    NodesController = __decorate([
        ccclass
    ], NodesController);
    return NodesController;
}(cc.Component));
exports.default = NodesController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFXQztRQVRHLFlBQVk7UUFFWixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixPQUFPO1FBRVAsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQUMzQixDQUFDO0lBUEc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDTztJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFWTixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBV25DO0lBQUQsc0JBQUM7Q0FYRCxBQVdDLENBWDRDLEVBQUUsQ0FBQyxTQUFTLEdBV3hEO2tCQVhvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIEdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBlbmNpbDogY2MuTm9kZSA9IG51bGw7XHJcbn1cclxuIl19