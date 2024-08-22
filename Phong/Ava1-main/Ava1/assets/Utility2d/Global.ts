import { Type } from "../Gameplay/Element";

interface Global {
    touchPos: cc.Vec2,
    startTouch: boolean,
    canModify: boolean,
    startX: number,
    endX: number,
    ChangeSkin: string,
    DisabeleGuide: string,
    UpdatePos: string,
    Click: cc.AudioClip,
    Open: cc.AudioClip,
}
let Global: Global = {
    touchPos: null,
    startTouch: false,
    canModify: true,
    startX: -182.282,
    endX: 182.282,
    ChangeSkin: "ChangeSkin",
    DisabeleGuide: "DisabeleGuide",
    UpdatePos: "UpdatePos",
    Click: null,
    Open: null,
};
export default Global;
export const eventDispatcher = new cc.EventTarget();