
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97c94wUbc5Pebqv3On9B17z', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hideMask = null;
        _this.UI = null;
        _this.BlockPrefab = null;
        _this.Hand = null;
        _this.Text = null;
        _this.Table = null;
        _this.Blocks = [];
        return _this;
    }
    NodesContainer.prototype.start = function () {
        this.Text = this.UI.getChildByName("Text");
        this.Blocks = this.UI.getChildByName("Table").children;
        for (var index = 0; index < this.Blocks.length; index++) {
            var block = this.Blocks[index];
            var label = block.getChildByName("Label").getComponent(cc.Label);
            label.string = String(this.extractOrderNumber(block.name) - 1);
            label.node.y = 65;
        }
        this.Hand = this.UI.getChildByName("hand");
        // --- scene 2
        // this.Table = this.UI.getChildByName("Table");
    };
    NodesContainer.prototype.initBlockNumber = function () {
        for (var index = 0; index < this.Blocks.length; index++) {
            var block = this.Blocks[index];
            var label = block.getChildByName("Label").getComponent(cc.Label);
            label.string = String(index);
            label.node.y = 65;
        }
    };
    NodesContainer.prototype.extractOrderNumber = function (name) {
        var match = name.match(/_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    };
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesContainer.prototype, "BlockPrefab", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtEQztRQWhERyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsWUFBTSxHQUFjLEVBQUUsQ0FBQzs7SUF1QzNCLENBQUM7SUFyQ2EsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdkQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5FLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUczQyxjQUFjO1FBQ2QsZ0RBQWdEO0lBRXBELENBQUM7SUFHTSx3Q0FBZSxHQUF0QjtRQUNJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuRSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBR08sMkNBQWtCLEdBQTFCLFVBQTJCLElBQVk7UUFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFOYixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa0RsQztJQUFELHFCQUFDO0NBbERELEFBa0RDLENBbEQyQyxFQUFFLENBQUMsU0FBUyxHQWtEdkQ7a0JBbERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBUZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFRhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEJsb2NrczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuVGV4dCA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuQmxvY2tzID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIlRhYmxlXCIpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5CbG9ja3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5CbG9ja3NbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGJsb2NrLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLmV4dHJhY3RPcmRlck51bWJlcihibG9jay5uYW1lKSAtIDEpO1xyXG4gICAgICAgICAgICBsYWJlbC5ub2RlLnkgPSA2NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSGFuZCA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gLS0tIHNjZW5lIDJcclxuICAgICAgICAvLyB0aGlzLlRhYmxlID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIlRhYmxlXCIpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluaXRCbG9ja051bWJlcigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5CbG9ja3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5CbG9ja3NbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGJsb2NrLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgICAgIGxhYmVsLm5vZGUueSA9IDY1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0T3JkZXJOdW1iZXIobmFtZTogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBuYW1lLm1hdGNoKC9fKFxcZCspJC8pO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCA/IHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==