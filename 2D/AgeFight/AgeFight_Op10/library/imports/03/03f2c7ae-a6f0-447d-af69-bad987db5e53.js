"use strict";
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