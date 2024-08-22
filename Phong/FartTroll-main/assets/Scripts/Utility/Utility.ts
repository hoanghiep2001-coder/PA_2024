// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { _decorator, AudioClip, Camera, Component, CurveRange, director, enumerableProps, EventMouse, game, log, Node, ParticleSystem, ParticleSystemComponent, Scheduler, SkeletalAnimation, sys, systemEvent, SystemEvent, tween, utils, Vec2, Vec3 } from 'cc';

import { Constants } from "./Constant";
import Singleton from "./Singleton";
const { ccclass, property } = _decorator;


@ccclass
export default class Utility extends Singleton<Utility> {
    constructor() {
        super();
        Utility._instance = this;
    }
    static RandomRangeFloat(lower: number, upper: number) {
        return Math.random() * (upper - lower) + lower;
        //return Math.floor(Math.random() * (lower - lower)) + lower;
    }
    static RandomRangeInteger(lower: number, upper: number) {
        return Math.round(Math.random() * (upper - lower) + lower);
    }
    static RandomPosNeg() {
        return Math.random() < 0.5 ? -1 : 1;
    }
    static Distance(vec1: Vec2, vec2: Vec2) {
        let Distance = Math.sqrt(Math.pow(vec1.x - vec2.x, 2) +
            Math.pow(vec1.y - vec2.y, 2));
        return Distance;
    }
    static CaculatorDuration(vec1: Vec2, vec2: Vec2, speed: number) {
        let distance = this.Distance(vec1, vec2);
        let duration = distance / speed;
        return duration;
    }
    
    static BetweenDegree(comVec: Vec2, dirVec:Vec2) {
        let angleDegree = Math.atan2(dirVec.y - comVec.y, dirVec.x - comVec.x) * 180 / Math.PI;
        return angleDegree - 90;
    }
    static CaculatorDegree(Target: Vec2) {
        var r = Math.atan2(Target.y, Target.x);
        var degree = r * 180 / (Math.PI);
        degree = 360 - degree + 90;
        return degree;
    }
   

}
