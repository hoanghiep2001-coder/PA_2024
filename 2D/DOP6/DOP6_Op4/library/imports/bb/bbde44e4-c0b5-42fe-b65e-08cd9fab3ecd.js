"use strict";
cc._RF.push(module, 'bbde4TkwLVC/rZeCM2fqz7N', 'AnimData');
// Script/Data/AnimData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimData = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Girl;
(function (Girl) {
    Girl["Level28_A"] = "Level/Level28_A";
    Girl["Level28_B"] = "Level/Level28_B";
    Girl["Level29_A"] = "Level/Level29_B";
    Girl["Level29_B"] = "Level/Level29_B";
    Girl["Level32_B"] = "Level/Level32_B";
})(Girl || (Girl = {}));
var Boy;
(function (Boy) {
    Boy["Level28_A"] = "Level/Level28_A";
    Boy["Level28_C"] = "Level/Level28_C";
    Boy["Level29_A"] = "Level/Level29_B";
    Boy["Level32_A"] = "Level/Level32_A";
    Boy["Level32_B"] = "Level/Level32_B";
})(Boy || (Boy = {}));
var FatMan;
(function (FatMan) {
    FatMan["Level28_A2"] = "Level/Level28_A2";
    FatMan["Level28_C"] = "Level/Level28_C";
})(FatMan || (FatMan = {}));
var Door;
(function (Door) {
    Door["Level32_B"] = "Level/Level32_B";
})(Door || (Door = {}));
var AnimData = /** @class */ (function () {
    function AnimData() {
    }
    AnimData.Girl = Girl;
    AnimData.Boy = Boy;
    AnimData.FatMan = FatMan;
    AnimData.Door = Door;
    return AnimData;
}());
exports.AnimData = AnimData;

cc._RF.pop();