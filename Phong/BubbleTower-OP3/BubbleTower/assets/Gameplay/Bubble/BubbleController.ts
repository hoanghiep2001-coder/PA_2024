// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "../../Utility2d/Constant";
import Global, { eventDispatcher } from "../../Utility2d/Global";
import PoolManager, { BubbleType } from "../../Utility2d/Pool/PoolManager";
import SoundManager from "../../Utility2d/SoundManager";
import Utility from "../../Utility2d/Utility";
import BubbleShooter from "./BubbleShooter";

const { ccclass, property } = cc._decorator;

@ccclass()
export default class BubbleController extends cc.Component {

    @property(cc.Collider)
    collider: cc.Collider = null;

    @property(cc.Node)
    fx: cc.Node = null;

    @property(cc.Node)
    spriteBall: cc.Node = null;

    @property(cc.AudioSource)
    sfx: cc.AudioSource = null;

    @property({ type: cc.Enum(BubbleType) })
    type: BubbleType = BubbleType.BLUE;

    row: number = 0;
    column: number = 0;
    connectcolumn: number = 0;
    connectRow: number = 0;

    boolExplisionBubble: boolean = false;
    boolFalling: boolean = false;

    stringLog: string = "";

    topLeftBubble: BubbleController = null;
    topRightBubble: BubbleController = null;
    leftBubble: BubbleController = null;
    rightBubble: BubbleController = null;
    downLeftBubble: BubbleController = null;
    downRigthBubble: BubbleController = null;

    worldPos: cc.Vec2 = null;

    protected onLoad(): void {

        eventDispatcher.on(Global.GetConnectBall, this.GetConnectBall, this);

        // eventDispatcher.on(Global.Falling, this.Falling, this);
    }

    Init(row: number, column: number) {
        this.row = row;
        this.column = column;

    }

    GetWorldPos() {
        let convert1 = Utility.ConvertPosToHigherParentByNode(this.node.parent.parent, this.node.parent, this.node);
        let convert2 = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent, this.node.parent.parent, convert1);
        this.worldPos = Utility.ConvertPosToParentByVector(this.node.parent.parent.parent.parent, this.node.parent.parent.parent, convert2);
        //   cc.log(this.node.name + " row " + this.row + " column " + this.column + " " + this.worldPos);
    }

    ExplosionBubble() {

        if (this.boolExplisionBubble) return;
        this.boolExplisionBubble = true;
        if (Constants.ironSource.SoundState) {

            this.sfx.play();

            // if (this.sfx != null) {
            //     if (Global.canPlayBubbleSound) {
            //         Global.canPlayBubbleSound = false;
            //         this.sfx.play();
            //         this.scheduleOnce(() => {
            //             Global.canPlayBubbleSound = true;
            //         }, 0.02);
            //     }

            // }
        }
        //  Utility.PlaySound(Global.Explosion, false);
        this.spriteBall.active = false;
        this.collider.enabled = false;

        Global.rowCheckFalling = this.row < Global.rowCheckFalling ? this.row : Global.rowCheckFalling;
        Global.columnCheckFalling = this.column > Global.columnCheckFalling ? this.column : Global.columnCheckFalling;
        //left  
        this.scheduleOnce(() => {
            if (this.leftBubble)
                this.leftBubble.ExplosionBubble();
        }, Global.explosionTime);

        //right    
        this.scheduleOnce(() => {
            if (this.rightBubble)

                this.rightBubble.ExplosionBubble();
        }, Global.explosionTime * 2);
        //top left    

        this.scheduleOnce(() => {
            if (this.topLeftBubble)

                this.topLeftBubble.ExplosionBubble();
        }, Global.explosionTime * 3);
        //top right    

        this.scheduleOnce(() => {
            if (this.topRightBubble)

                this.topRightBubble.ExplosionBubble();
        }, Global.explosionTime * 4);
        //down left    

        this.scheduleOnce(() => {
            if (this.downLeftBubble)

                this.downLeftBubble.ExplosionBubble();
        }, Global.explosionTime * 5);
        //down right    

        this.scheduleOnce(() => {
            if (this.downRigthBubble)
                this.downRigthBubble.ExplosionBubble();
        }, Global.explosionTime * 6);


        //spawn fx smoke
        var _cash = PoolManager.Instance(PoolManager).SpawnerFxSmoke(this.fx);
        _cash.parent = cc.Canvas.instance.node;
        _cash.setPosition(this.worldPos);
        this.scheduleOnce(() => {
            eventDispatcher.emit(Global.Falling);//, this.row, this.column);
        }, 0.7)
    }
    // Falling(rowFalling: number, columnFalling: number) {
    Falling() {
        if (this.boolExplisionBubble) {
            //  cc.log(this.node.name);
            eventDispatcher.emit(Global.ReleaseAnimal, Global.rowCheckFalling, this.type);
            this.scheduleOnce(() => {
                eventDispatcher.emit(Global.ResetShooter);
            }, 1);
            return;
        }
        if (this.boolFalling) return;
        this.boolFalling = true;
        this.collider.enabled = false;
        const newPos = this.node.getPosition().addSelf(new cc.Vec2(Utility.RandomRangeFloat(-30, 30), Utility.RandomRangeFloat(10, 30)));
        this.node.runAction(
            cc.sequence(
                cc.moveTo(0.1, newPos),
                cc.callFunc((() => {
                    this.node.setPosition(newPos);
                    this.node.runAction(cc.fadeOut(1));
                    this.node.runAction(cc.moveBy(1, new cc.Vec2(0, -1000)));
                    eventDispatcher.emit(Global.ReleaseAnimal, Global.rowCheckFalling, this.type);
                    this.scheduleOnce(() => {
                        eventDispatcher.emit(Global.ResetShooter);
                    }, 1);
                }))
            )
        )
        // }
    }

    CheckCanFalling() {
        if (this.row == 0) return false;

        if (this.topLeftBubble == null && this.topRightBubble == null) {

            //check left right
            if (this.leftBubble == null && this.rightBubble == null) return true;

            if (this.leftBubble != null && this.rightBubble != null) {
                if (this.leftBubble.boolExplisionBubble == false || this.rightBubble.boolExplisionBubble == false)
                    return false;
                else
                    return true;
            }

            if (this.leftBubble == null && this.rightBubble != null) {

                if (this.rightBubble.boolExplisionBubble == true)
                    return true;
                else
                    return false;

            }

            if (this.rightBubble == null && this.leftBubble != null) {

                if (this.leftBubble.boolExplisionBubble == true)
                    return true;
                else
                    return false;
            }


            return true;
        }
        if (this.topLeftBubble != null && this.topRightBubble != null) {
            if (this.topLeftBubble.boolExplisionBubble == false || this.topRightBubble.boolExplisionBubble == false)
                return false;
            else
                return true;
        }


        //check top

        if (this.topLeftBubble == null && this.topRightBubble != null) {

            if (this.topRightBubble.boolExplisionBubble == true)
                return true;
            else
                return false;

        }

        if (this.topRightBubble == null && this.topLeftBubble != null) {

            if (this.topLeftBubble.boolExplisionBubble == true)
                return true;
            else
                return false;
        }
    }

    GetConnectBall() {

        // hang chan
        if (this.row % 2 == 0) {

            // top left
            this.connectRow = this.row - 1;
            this.connectcolumn = this.column - 1;
            this.topLeftBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // top right

            this.connectRow = this.row - 1;
            this.connectcolumn = this.column;
            this.topRightBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // left

            this.connectRow = this.row;
            this.connectcolumn = this.column - 1;
            this.leftBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // right

            this.connectRow = this.row;
            this.connectcolumn = this.column + 1;
            this.rightBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // down left

            this.connectRow = this.row + 1;
            this.connectcolumn = this.column - 1;
            this.downLeftBubble = this.GetBall(this.connectRow, this.connectcolumn);
            //down right
            this.connectRow = this.row + 1;
            this.connectcolumn = this.column;
            this.downRigthBubble = this.GetBall(this.connectRow, this.connectcolumn);

        }
        //hang le
        else {
            // top left
            this.connectRow = this.row - 1;
            this.connectcolumn = this.column;
            this.topLeftBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // top right

            this.connectRow = this.row - 1;
            this.connectcolumn = this.column + 1;
            this.topRightBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // left

            this.connectRow = this.row;
            this.connectcolumn = this.column - 1;
            this.leftBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // right

            this.connectRow = this.row;
            this.connectcolumn = this.column + 1;
            this.rightBubble = this.GetBall(this.connectRow, this.connectcolumn);
            // down left

            this.connectRow = this.row + 1;
            this.connectcolumn = this.column;
            this.downLeftBubble = this.GetBall(this.connectRow, this.connectcolumn);
            //down right
            this.connectRow = this.row + 1;
            this.connectcolumn = this.column + 1;
            this.downRigthBubble = this.GetBall(this.connectRow, this.connectcolumn);

        }
        this.GetWorldPos();
        // this.DebugLog();
    }

    GetBall(row: number, column: number) {
        if (row >= 13) return null;
        if (row < 0) return null;

        if (column >= 13) return null;
        if (column < 0) return null;

        if (Global.Bubble[row][column] == null)
            return null;

        if (Global.Bubble[row][column].type == this.type) {
            return Global.Bubble[row][column];
        }

        return null;

    }

    DebugLog() {
        this.stringLog = this.node.name;
        if (this.topLeftBubble) {
            this.stringLog += (" topLeftBubble " + this.topLeftBubble.node.name);
        }

        if (this.topRightBubble) {
            this.stringLog += (" topRightBubble " + this.topRightBubble.node.name);
        }
        if (this.leftBubble) {
            this.stringLog += " leftBubble " + this.leftBubble.node.name;
        }
        if (this.rightBubble) {
            this.stringLog += " rightBubble " + this.rightBubble.node.name;
        }
        if (this.downLeftBubble) {
            this.stringLog += " downLeftBubble " + this.downLeftBubble.node.name;
        }
        if (this.downRigthBubble) {
            this.stringLog += " downRigthBubble " + this.downRigthBubble.node.name;
        }
        cc.log(this.stringLog);
    }


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group === "BubbleShooter") {
            if (other.node.parent.getComponent(BubbleShooter).typeBubble == this.type) {

                Utility.PlaySound(Global.Hit, false);
                Global.hitBubble = true;
                // SoundManager.Instance(SoundManager).bubble.play();
                this.ExplosionBubble();
                PoolManager.Instance(PoolManager).RecycleBubble(this.type, other.node.parent);

            } else {
                Utility.PlaySound(Global.Bound, false);

                Global.hitBubble = false;
                other.node.parent.getComponent(BubbleShooter).StopMoving();
                this.scheduleOnce(() => {
                    eventDispatcher.emit(Global.ResetShooter);
                }, 0.5);
            }

        }
    }
}
