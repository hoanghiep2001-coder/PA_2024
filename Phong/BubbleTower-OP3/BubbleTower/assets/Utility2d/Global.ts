import BubbleController from "../Gameplay/Bubble/BubbleController";

interface Global {
    touchPos: cc.Vec2,

    canTouch: boolean,
    hitBubble: boolean,
    boolStartFalling: boolean,
    canPlayBubbleSound: boolean,

    fireTime: number,
    rayDistance: number,
    explosionTime: number,
    rowCheckFalling: number,
    columnCheckFalling: number,
    totalCash: number,

    CashPos: cc.Node,
    Bubble: any,

    ReleaseAnimal: string,
    SpawnNewBullet: string,
    GetConnectBall: string,
    Falling: string,
    ResetShooter: string,
    UpdateCash: string,
    GetWorldPos: string,

    Shoot: cc.AudioClip,
    Hit: cc.AudioClip,
    Bound: cc.AudioClip,
    Release: cc.AudioClip,
    Explosion: cc.AudioClip,
    Electric: cc.AudioClip,
    Cash: cc.AudioClip,
    Bomb: cc.AudioClip,
}
let Global: Global = {
    touchPos: null,
    canTouch: true,
    canPlayBubbleSound: true,
    hitBubble: false,
    boolStartFalling: false,
    totalCash: 0,

    fireTime: 1.5,
    rayDistance: 100,
    explosionTime: 0.02,
    CashPos: null,

    rowCheckFalling: 13,
    columnCheckFalling: 13,

    Bubble: createBubbleArray(40, 17),
    ReleaseAnimal: "ReleaseAnimal",
    SpawnNewBullet: "SpawnNewBullet",
    GetConnectBall: "GetConnectBall",
    Falling: "Falling",
    ResetShooter: "ResetShooter",
    UpdateCash: "UpdateCash",
    GetWorldPos: "GetWorldPos",

    Shoot: null,
    Hit: null,
    Bound: null,
    Release: null,
    Explosion: null,
    Electric: null,
    Cash: null,
    Bomb: null,
};
function createBubbleArray(rows: number, columns: number): BubbleController[][] {
    const array: BubbleController[][] = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = null; // Lưu trữ component vào mảng
        }
    }
    return array;
}
export default Global;
export const eventDispatcher = new cc.EventTarget();