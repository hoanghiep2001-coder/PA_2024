
import { _decorator, Component, Node, AudioClip, AudioSource, screen, Sprite, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Responsive')
export class Responsive extends Component {
    @property(Node)
    Camera_: Node = null;
    @property(Node)
    ShootingTurn: Node = null;
    @property(Node)
    Bar_Force: Node = null;
    @property(Node)
    hand_01: Node = null;
    @property(Node)
    hand_02: Node = null;
    @property(Node)
    View_CTA: Node = null;


    onLoad() {

    }


    update() {
        let screenW = screen.windowSize.x;
        let screenH = screen.windowSize.y;

        if (screenW < screenH) {
            this.View_CTA.children[0].active = true;
            this.View_CTA.children[1].active = false;
            this.Camera_.setRotationFromEuler(-90, 0, 0);
            this.Bar_Force.setPosition(0, 0);
            // console.log(1);

            this.Bar_Force.setScale(0.664, 0.664);
            this.hand_01.setScale(1, 1, 1);
            const ratio = screenH / screenW;

            if (ratio >= 2.1) {
                // ip X Plus
                this.Camera_.setPosition(0, 7.764, 0);
                this.ShootingTurn.setPosition(-30, 235, 0);
                this.ShootingTurn.setScale(0.3, 0.3, 0.3);
                // console.log(2);
            } else {

                if (ratio <= 1.4) {
                    // ipad
                    this.ShootingTurn.setPosition(-32, 280, 0);
                    this.ShootingTurn.setScale(0.35, 0.35, 0.35);
                    this.Camera_.setPosition(0, 6.2, 0);
                } else {
                    // ip 7 Plus

                    this.ShootingTurn.setPosition(-32, 280, 0);
                    this.ShootingTurn.setScale(0.35, 0.35, 0.35);
                    this.Camera_.setPosition(0, 6.2, 0);
                }



            }
        } else {
            // console.log(4);
            this.View_CTA.children[0].active = false;
            this.View_CTA.children[1].active = true;
            const ratio = screenW / screenH;
            this.hand_01.setScale(1.4, 1.4, 1);
            this.Bar_Force.setScale(0.97, 0.97);
            this.Bar_Force.setPosition(0, -70);
            if (ratio <= 1.6) {
                // console.log(5);
                this.ShootingTurn.setPosition(-32, 270, 0);
                this.ShootingTurn.setScale(0.5, 0.5, 0.5);
                this.Camera_.setPosition(-0.15, 4.5, 0.3);
                this.Camera_.setRotationFromEuler(-90, -90, 0);
            } else {
                this.ShootingTurn.setPosition(-32, 272, 0);
                this.ShootingTurn.setScale(0.52, 0.52, 0.52);
                this.Camera_.setPosition(-0.15, 4, 0.3);
                this.Camera_.setRotationFromEuler(-90, -90, 0);
            }
        }
    }

}


