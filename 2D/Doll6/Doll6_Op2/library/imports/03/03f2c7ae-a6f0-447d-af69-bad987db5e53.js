"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var checkRowForThree = function (candiesArr) {
    var _loop_1 = function (i) {
        var rowOfThree = [i, i + 1, i + 2]; // Xác định một hàng có 3 ô liên tiếp
        var isBlank = candiesArr[i].active;
        var decidedColor = candiesArr[i].name;
        // console.log(Constants.decidedColor);
        // console.log(i);
        // Loại trừ các ô cuối cùng của mỗi hàng để không bắt đầu kiểm tra từ chúng
        var notValid = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41, 47, 48, 54, 55];
        if (notValid.includes(i))
            return "continue";
        if (rowOfThree.every(function (index) { return candiesArr[index].name === decidedColor; })) {
            // score += 3; // Tăng điểm cho người chơi
            // scoreDisplay.innerHTML = score; // Cập nhật điểm số trên giao diện
            console.log("Check");
            rowOfThree.forEach(function (index) {
                candiesArr[index].active = false; // Làm trống các ô đã kiểm tra
            });
        }
    };
    for (var i = 0; i < 56; i++) {
        _loop_1(i);
    }
};
var GamePlay = {
    checkRowForThree: checkRowForThree,
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.GamePlay = GamePlay;
    return Ultils;
}());
exports.Ultils = Ultils;

cc._RF.pop();