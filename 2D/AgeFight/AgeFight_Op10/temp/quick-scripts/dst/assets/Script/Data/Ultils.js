
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomRangeInt = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RandomRangeInt = function (from, to) {
    var random = cc.math.randomRangeInt(from, to);
    return random;
};
exports.RandomRangeInt = RandomRangeInt;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHckMsSUFBTSxjQUFjLEdBQUcsVUFBQyxJQUFZLEVBQUUsRUFBVTtJQUNwRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUMsT0FBTyxNQUFNLENBQUM7QUFDakIsQ0FBQyxDQUFBO0FBSlksUUFBQSxjQUFjLGtCQUkxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21SYW5nZUludCA9IChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludChmcm9tLCB0byk7XHJcblxyXG4gICByZXR1cm4gcmFuZG9tO1xyXG59XHJcbiJdfQ==