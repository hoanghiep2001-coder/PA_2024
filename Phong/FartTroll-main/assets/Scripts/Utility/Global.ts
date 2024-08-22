import { AudioClip, Vec2 } from "cc";

interface Global {
    touchPos: Vec2,
    startTouch: boolean,
    doneIntro: boolean,
    endGame: boolean,
    fov: number,
    fovEndgame: number,
    win: AudioClip,

}
let Global: Global = {
    touchPos: null,
    startTouch: false,
    fov: 60,
    fovEndgame: 60,
    win: null,
    doneIntro: false,
    endGame: false,



};
export default Global;
export const eventDispatcher = new EventTarget();