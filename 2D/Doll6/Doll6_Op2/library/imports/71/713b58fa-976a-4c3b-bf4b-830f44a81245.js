"use strict";
cc._RF.push(module, '713b5j6l2pMO79Lgw9EqBJF', 'ClassHelpers');
// Script/MainGame/ClassHelpers.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckerBoolean = void 0;
var CheckerBoolean = /** @class */ (function () {
    function CheckerBoolean() {
    }
    CheckerBoolean.checkTwoBoolean = function (one, two) {
        return one && two;
    };
    CheckerBoolean.checkTrheeBoolean = function (one, two, trhee) {
        return one && two && trhee;
    };
    CheckerBoolean.EqualsTwoObj = function (one, two) {
        return one === two;
    };
    CheckerBoolean.EqualsTrheeObj = function (one, two, trhee) {
        if (one === two && two === trhee)
            return true;
        return false;
    };
    return CheckerBoolean;
}());
exports.CheckerBoolean = CheckerBoolean;

cc._RF.pop();