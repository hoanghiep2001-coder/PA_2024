"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// const checkCollideBubblePoints = (bdx: cc.Rect): void => {
//     for (let i = 0; i < Constants.cleanHair_Points.length; i++) {
//         let currentNode = Constants.cleanHair_Points[i];
//         if (currentNode.getBoundingBox().intersects(bdx)) {
//             Constants.isTouchCleanHair = true;
//             for (let j = 0; j < Constants.cleanHair_PointsStatus.length; j++) {
//                 if (!Constants.cleanHair_PointsStatus[j]) {
//                     Constants.cleanHair_PointsStatus[j] = true;
//                     Constants.cleanHair_Points.splice(i, 1);
//                     Constants.spine_Bubbles[i].setAnimation(0, "action03_only_bubble", false);
//                     Constants.spine_Bubbles.splice(i, 1);
//                     if (Constants.cleanHair_PointsStatus.every(status => status === true)) {
//                         Constants.isDoneCleanHair = true;
//                     }
//                     break;
//                 }
//             }
//             break;
//         }
//     }
// }
// const checkCollideMaggot = (bdx: cc.Rect, maggot: cc.Rect): void => {
//     if(bdx.intersects(maggot)) {
//         Constants.isTouchMaggot = true;
//     }
// }
var TouchArea = {
// checkCollideBubblePoints: checkCollideBubblePoints,
// checkCollideMaggot: checkCollideMaggot
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

cc._RF.pop();