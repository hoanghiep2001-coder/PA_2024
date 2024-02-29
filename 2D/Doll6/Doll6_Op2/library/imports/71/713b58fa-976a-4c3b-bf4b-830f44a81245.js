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
    CheckerBoolean.isValidPlacement = function (board, row, col, circleType) {
        // Kiểm tra hàng
        if (col >= 2 && board[row][col - 1] === circleType && board[row][col - 2] === circleType) {
            return false;
        }
        // Kiểm tra cột
        if (row >= 2 && board[row - 1][col] === circleType && board[row - 2][col] === circleType) {
            return false;
        }
        return true;
    };
    return CheckerBoolean;
}());
exports.CheckerBoolean = CheckerBoolean;

cc._RF.pop();