"use strict";
cc._RF.push(module, '93f68rzHqxJY5it62LGw3mz', 'Cell');
// Script/MainGame/Cell.ts

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
exports.Cell = void 0;
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.generator = false;
        _this.blink = null;
        _this.irow = 0;
        _this.jcolumn = 0;
        _this.TypeColor = 0;
        _this.typeCell = 0;
        _this._circle = null;
        _this.wasSelectCircle = false;
        _this.wasClick = false;
        _this.countClick = 0;
        return _this;
    }
    Cell.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.wasClickSet, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveCircle, this);
    };
    Cell.prototype.wasClickSet = function () {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        if (this._circle != null) {
            this.wasClick = true;
            this.selectCircle();
        }
    };
    Cell.prototype.start = function () {
    };
    Cell.prototype.moveCircle = function () {
        cc.log("circle is move");
    };
    Cell.prototype.setGrayColor = function () {
        this.node.color = new cc.Color(71, 135, 153);
    };
    Cell.prototype.setWhiteColor = function () {
        this.node.color = new cc.Color(0, 0, 0);
    };
    Cell.prototype.setColorInType = function () {
        if (this.typeCell == 1)
            this.setWhiteColor();
    };
    Cell.prototype.selectCircle = function () {
        if (this._circle == null)
            return;
        this.countClick++;
        if (this.countClick % 2 == 0) {
            this.wasSelectCircle = false;
            this.wasClick = false;
            this.setNormalSize();
            this.node.dispatchEvent(new cc.Event.EventCustom('wasTwoClickOnCell', true));
            // console.log("2 click");
        }
        else {
            this.wasSelectCircle = true;
            this.node.dispatchEvent(new cc.Event.EventCustom('wasClickOnCell', true));
            this._circle.setContentSize(this.node.getContentSize());
            // console.log("1 click");
        }
    };
    Cell.prototype.setNormalSize = function () {
        if (this._circle == null)
            return;
        var oldSize = cc.size(this.node.getContentSize());
        this._circle.setContentSize(oldSize.height - 15, oldSize.width - 15);
    };
    Cell.prototype.mousedown = function () {
        this.wasClick = true;
        this.destroyCircle();
    };
    Cell.prototype.destroyCircle = function () {
        if (this._circle != null) {
            this._circle.destroy();
            this._circle = null;
            this.node.dispatchEvent(new cc.Event.EventCustom('clickOnCellForDestroyCircle', true));
        }
    };
    Cell.prototype.circleIsNotNull = function () {
        if (this._circle != null)
            return true;
        return false;
    };
    Cell.prototype.CellIsNotNull = function () {
        if (this != null)
            return true;
        return false;
    };
    __decorate([
        property
    ], Cell.prototype, "generator", void 0);
    __decorate([
        property(cc.Node)
    ], Cell.prototype, "blink", void 0);
    Cell = __decorate([
        ccclass
    ], Cell);
    return Cell;
}(cc.Component));
exports.Cell = Cell;

cc._RF.pop();