// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../../Utility2d/GameManager";
import Global, { eventDispatcher } from "../../Utility2d/Global";
import PoolManager, { BubbleBullet, BubbleType } from "../../Utility2d/Pool/PoolManager";
import Utility from "../../Utility2d/Utility";
import BubbleShooter from "../Bubble/BubbleShooter";
import LineController from "../LineController/LineController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShooterController extends cc.Component {

    @property(cc.Node)
    line: cc.Node = null;

    @property(LineController)
    lineGuide: LineController = null;


    @property(cc.Node)
    startBallPos: cc.Node = null;

    @property(cc.Node)
    guide: cc.Node = null;

    startAngle: number = 0;

    startTouch: cc.Vec2 = null;
    curTouch: cc.Vec2 = null;

    boolStartTouch: boolean = false;
    currentTypeBullet: BubbleType = BubbleType.PURPLE;
    currentBullet: cc.Node = null;
    protected onLoad(): void {
        this.RegisterEvent();
    }
    protected start(): void {
        this.currentBullet = PoolManager.Instance(PoolManager).SpawnerBubbleBullet(this.currentTypeBullet);
        this.currentBullet.parent = this.startBallPos;
        this.currentBullet.setPosition(0, 0);

    }


    RegisterEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);

        eventDispatcher.on(Global.SpawnNewBullet, this.SpawnNewBullet, this);
        eventDispatcher.on(Global.ResetShooter, this.ResetShooter, this);
    }

    TouchStart(event) {
        if (!Global.canTouch) return;
        if (this.currentBullet == null) return;
        this.unscheduleAllCallbacks();
        this.boolStartTouch = true;
        this.startAngle = 90;
        this.startTouch = this.node.convertToNodeSpaceAR(event.getLocation());
        this.guide.active = false;
        // this.SpawnNewBullet(this.currentTypeBullet);
        this.line.opacity = 255;

    }
    TouchMove(event) {
        if (!Global.canTouch) return;
        if (this.currentBullet == null) return;

        if (!this.boolStartTouch) return;
        this.guide.active = false;
        var mousePosition = event.getLocation();
        let mousePositionWorld = mousePosition;
        mousePositionWorld.x = mousePositionWorld.x;
        mousePosition = this.node.convertToNodeSpaceAR(mousePosition);

        let Opposite = -mousePosition.x + this.line.x;
        let Adjacnet = mousePosition.y - this.line.y;
        let comVec = cc.v2(0, 1);
        let vector = cc.v2(Opposite, Adjacnet);
        let radian = vector.signAngle(comVec);
        let AngleRotate = cc.misc.radiansToDegrees(radian);
        let AngleRotateTo = AngleRotate + this.startAngle;
        if (AngleRotateTo < 20) {
            AngleRotateTo = 20
        }
        else if (AngleRotateTo > 150) {
            AngleRotateTo = 150;
        }
        this.line.angle = AngleRotateTo * 1.1;

    }

    TouchEnd(event) {
        if (!Global.canTouch) return;
        if (this.currentBullet == null) return;
        this.boolStartTouch = false;
        this.startAngle = this.line.angle;

        this.line.opacity = 0;

        //shooting
        this.Shooting();

        // guide again
        // this.ActiveGuide();
    }


    count: number = 0;
    // cyan --> green --> purple --> red --> to store
    ResetShooter() {
        this.line.angle = 90;
        if (!Global.hitBubble) {
            this.line.active = true;
            this.SpawnNewBullet(this.currentTypeBullet);
        } else {
            Global.hitBubble = false;
            switch (this.currentTypeBullet) {

                case BubbleType.CYAN:
                    this.count += 1;
                    if (this.count >= 2) {
                        this.currentTypeBullet = BubbleType.GREEN;

                    } else {
                        this.currentTypeBullet = BubbleType.PURPLE

                    }
                    // this.currentTypeBullet = BubbleType.PURPLE

                    break;
                case BubbleType.GREEN:
                    this.line.active = false;
                    this.lineGuide.node.active = false;
                    //    this.currentTypeBullet = BubbleType.PURPLE;
                    break;

                case BubbleType.PURPLE:

                    this.currentTypeBullet = BubbleType.CYAN;

                    //  GameManager.Instance(GameManager).btnAll.active = true;

                    break;
                case BubbleType.RED:
                    break;

            }
            this.SpawnNewBullet(this.currentTypeBullet);
        }
    }

    ActiveGuide() {
        this.scheduleOnce(() => {
            this.line.opacity = 0;
            this.guide.active = true;
        }, 10);
    }

    ActiveLine(color: cc.Color) {
        this.line.opacity = 255;
        this.line.getComponent(LineController).ChangeColor(color);
        this.lineGuide.ChangeColor(color);
    }

    SpawnNewBullet(bulletType: BubbleType) {
        switch (bulletType) {
            case BubbleType.BLUE:
                this.ActiveLine(cc.Color.BLUE);
                break;

            case BubbleType.YELLOW:
                this.ActiveLine(cc.Color.YELLOW);

                break;

            case BubbleType.GREEN:
                this.ActiveLine(cc.Color.GREEN);

                break;

            case BubbleType.RED:
                this.ActiveLine(cc.Color.RED);

                break;

            case BubbleType.PURPLE:
                //   this.ActiveLine(new cc.Color(160, 32, 240));
                this.ActiveLine(new cc.Color(240, 101, 206));

                break;

            case BubbleType.CYAN:
                this.ActiveLine(cc.Color.CYAN);

                break;
        }
        if (this.currentBullet) return;
        this.currentBullet = PoolManager.Instance(PoolManager).SpawnerBubbleBullet(this.currentTypeBullet);
        this.currentBullet.parent = this.startBallPos;
        this.currentBullet.setPosition(0, 0);

    }

    Shooting() {
        Global.boolStartFalling = false;

        Global.rowCheckFalling = 13;
        Global.columnCheckFalling = 0;
        Utility.PlaySound(Global.Shoot, false);
        this.currentBullet.angle = this.line.angle - 90;
        this.currentBullet.getComponent(BubbleShooter).StartMove();
        this.currentBullet = null;
    }
}
