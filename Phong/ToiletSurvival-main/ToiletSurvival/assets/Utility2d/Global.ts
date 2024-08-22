interface Global {
    touchPos: cc.Vec2,
    startTouch: boolean,
    SetUp: string,
    DoneSelection: string,
    Click: cc.AudioClip,
}
let Global: Global = {
    touchPos: null,
    startTouch: false,
    SetUp: "SetUp",
    DoneSelection: "DoneSelection",
    Click: null,

};
export default Global;
export const eventDispatcher = new cc.EventTarget();