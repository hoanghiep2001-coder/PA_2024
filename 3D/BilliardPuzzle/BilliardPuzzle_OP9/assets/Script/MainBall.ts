
import { _decorator, Component, Node, Collider, ICollisionEvent, Animation, AudioClip, AudioSource, director } from 'cc';
const { ccclass, property } = _decorator;
import { Main } from "./Main";
import { AudioManager } from './Plugin/AudioManager';
import { Constants } from './Data/Constant';
@ccclass('Ball')
export class Ball extends Component {
    @property(Main)
    Main: Main;
    @property(AudioManager)
    AudioManager: AudioManager;

    @property(Node)
    cube: Node =null;

    audioId: any = null;
    
    FixedPositionX() {
        const pos = this.node.position;
        this.node.setPosition(pos.x, 0, pos.z);
    }


    start() {
        let myCollider = this.node.getComponent(Collider);
        myCollider.on("onCollisionEnter", (target: ICollisionEvent) => {
            const isPhysic = target.otherCollider.node;
            if (isPhysic.name.indexOf('hole') != -1) {
                Constants.isLose = true;
                this.AudioManager.playSound(Constants.SoundTrack.LoseSound)
                this.node.active = false;
                this.scheduleOnce(() => {
                    
                    director.loadScene("scene")
                }, 1)
            }

            if(isPhysic.name.indexOf('Cube') != -1) {
                this.AudioManager.playSound(Constants.SoundTrack.hitSound)
            }

            if (isPhysic.name.indexOf('collider_table') != -1) {
                this.AudioManager.playSound(Constants.SoundTrack.collideWallSound)
            }
        })
    }

    update() {
        let thisPos = this.node.getPosition();
        this.cube.setPosition(thisPos.x, 0.55, thisPos.z + 0.02)
        // this.FixedPositionX();
    }

}
