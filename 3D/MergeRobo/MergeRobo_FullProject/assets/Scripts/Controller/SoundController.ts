import { _decorator, AudioClip, AudioSource, Component, log, Node } from 'cc';
import Singleton from '../Utils/Singleton';
import { IronSource } from '../AdHelper/IronSource';
const { ccclass, property } = _decorator;


@ccclass('SoundController')
export class SoundController extends Singleton<SoundController> {

    @property(AudioSource)
    bgSound: AudioSource = null;


    constructor() {
        super();
        SoundController._instance = this;
    }


    protected onLoad(): void {

    }


    public PlaySound(stringAudioName: string) {
        if (!IronSource.SoundState) return;

        switch (stringAudioName) {
            case "bgSound":
                this.bgSound.play();
                break;
        }
    }


    public StopAllSound() {
        this.bgSound.stop();
    }
}