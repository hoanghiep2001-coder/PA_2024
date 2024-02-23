
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/Cell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBCLHdCQUFZO0lBQXRDO1FBQUEscUVBc0dDO1FBbkdHLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZUFBUyxHQUFjLENBQUMsQ0FBQztRQUV6QixjQUFRLEdBQWEsQ0FBQyxDQUFDO1FBQ3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQXVDMUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBZ0QzQixDQUFDO0lBcEZHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNJLElBQUcsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFNO1NBQ1Q7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFB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QUM7SUFHRCw0QkFBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFqR0Q7UUFEQyxRQUFROzJDQUNrQjtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBTGIsSUFBSTtRQURoQixPQUFPO09BQ0ssSUFBSSxDQXNHaEI7SUFBRCxXQUFDO0NBdEdELEFBc0dDLENBdEd5QixFQUFFLENBQUMsU0FBUyxHQXNHckM7QUF0R1ksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBnZW5lcmF0b3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmxpbms6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlyb3c6IG51bWJlciA9IDA7XHJcbiAgICBqY29sdW1uOiBudW1iZXIgPSAwO1xyXG4gICAgVHlwZUNvbG9yOiB0eXBlQ29sb3IgPSAwO1xyXG4gICAgXHJcbiAgICB0eXBlQ2VsbDogdHlwZUNlbGwgPSAwO1xyXG4gICAgX2NpcmNsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgd2FzU2VsZWN0Q2lyY2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB3YXNDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy53YXNDbGlja1NldCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMubW92ZUNpcmNsZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2FzQ2xpY2tTZXQoKSB7XHJcbiAgICAgICAgaWYoIUNvbnN0YW50cy5pc0NhblRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FzQ2xpY2sgPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2lyY2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQ2lyY2xlKCl7XHJcbiAgICAgICAgY2MubG9nKFwiY2lyY2xlIGlzIG1vdmVcIilcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcmF5Q29sb3IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAxMzUsIDE1Myk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2hpdGVDb2xvcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3JJblR5cGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZUNlbGwgPT0gMSkgdGhpcy5zZXRXaGl0ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnRDbGljazogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZWxlY3RDaXJjbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb3VudENsaWNrKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDbGljayAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndhc1NlbGVjdENpcmNsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLndhc0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Tm9ybWFsU2l6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3dhc1R3b0NsaWNrT25DZWxsJywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIgY2xpY2tcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53YXNTZWxlY3RDaXJjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3dhc0NsaWNrT25DZWxsJywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGUuc2V0Q29udGVudFNpemUodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEgY2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5vcm1hbFNpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdmFyIG9sZFNpemUgPSBjYy5zaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcclxuICAgICAgICB0aGlzLl9jaXJjbGUuc2V0Q29udGVudFNpemUob2xkU2l6ZS5oZWlnaHQgLSAxNSwgb2xkU2l6ZS53aWR0aCAtIDE1KTtcclxuICAgIH1cclxuICAgIG1vdXNlZG93bigpIHtcclxuICAgICAgICB0aGlzLndhc0NsaWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lDaXJjbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95Q2lyY2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jaXJjbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ2NsaWNrT25DZWxsRm9yRGVzdHJveUNpcmNsZScsIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlSXNOb3ROdWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jaXJjbGUgIT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDZWxsSXNOb3ROdWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzICE9IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19