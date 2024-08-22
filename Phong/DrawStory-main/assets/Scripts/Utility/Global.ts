interface Global {
    touchPos: cc.Vec2,
    startTouch: boolean,
    isDraw: boolean,
    endGame: boolean,
    theme: cc.AudioClip,
    lose: cc.AudioClip,
    catSound: cc.AudioClip,
    listPosDraw1: cc.Vec2[],
}
let Global: Global = {
    touchPos: null,
    theme: null,
    lose: null,
    startTouch: false,
    endGame: true,
    catSound: null,
    listPosDraw1: [],
    isDraw: false,

};
export default Global;
export const eventDispatcher = new cc.EventTarget();