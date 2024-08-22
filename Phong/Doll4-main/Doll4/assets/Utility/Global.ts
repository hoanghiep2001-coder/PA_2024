interface Global {
    touchPos: cc.Vec2,
    startTouch: boolean,
    completeChooseSkin: boolean,
    canMoveBlock: boolean,
    speedSwapBlock: number,
    speedSwapBlockFail: number,
    clickSound: cc.AudioClip,
    moveBlock: cc.AudioClip,
    matchBlock: cc.AudioClip,
    girl: cc.AudioClip,
    amazing: cc.AudioClip,
    suprise: cc.AudioClip,

}
let Global: Global = {
    touchPos: null,
    startTouch: false,
    completeChooseSkin: false,
    canMoveBlock: true,
    speedSwapBlock: 0.2,
    speedSwapBlockFail: 0.1,
    clickSound: null,
    moveBlock: null,
    matchBlock: null,
    girl: null,
    amazing: null,
    suprise: null,

};
export default Global;
export const eventDispatcher = new cc.EventTarget();