import { _decorator, Component, Vec3, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraShake')
export class CameraShake extends Component {

    @property
    intensity: number = 5; // Intensity of the shake

    @property
    duration: number = 0.5; // Duration of the shake in seconds

    private originalPosition: Vec3;
    private shaking: boolean = false;

    protected start(): void {
        this.shake();
    }

    shake() {
        if (!this.shaking) {
            this.originalPosition = this.node.position.clone();
            this.shaking = true;
            this.scheduleOnce(() => {
                this.shaking = false;
                this.node.position = this.originalPosition.clone();
            }, this.duration);
            this.schedule(this.updateShake, 0.05, this.duration / 0.05 - 1, 0);
        }
    }

    updateShake(dt: number) {
        let offset = new Vec3(
            Math.random() * this.intensity - this.intensity / 2,
            Math.random() * this.intensity - this.intensity / 2,
            Math.random() * this.intensity - this.intensity / 2
        );
        this.node.position = this.originalPosition.clone().add(offset);
        this.shake();
    }
}
