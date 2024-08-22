// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, AudioClip, AudioSource, Camera, Component, CurveRange, director, enumerableProps, EventMouse, game, log, Node, ParticleSystem, ParticleSystemComponent, Scheduler, SkeletalAnimation, sys, systemEvent, SystemEvent, tween, Vec2, Vec3 } from 'cc';

import Global from "./Global";
import Singleton from "./Singleton";
import { Constants } from './Constant';
const { ccclass, property } = _decorator;


@ccclass
export default class SoundManager extends Singleton<SoundManager> {

    @property({ type: AudioSource })
    win: AudioSource = null!;

    @property({ type: AudioSource })
    fart: AudioSource = null!;
    @property({ type: AudioSource })
    theme: AudioSource = null!;


    constructor() {
        super();
        SoundManager._instance = this;
    }

    protected start(): void {
    }

    StopAllSound() {
    }
    update(deltaTime: number) {
        if (Constants.ironSource.SoundState) {
            this.theme.volume = 0.5
        } else {
            this.theme.volume = 0;
        }
    }
}
