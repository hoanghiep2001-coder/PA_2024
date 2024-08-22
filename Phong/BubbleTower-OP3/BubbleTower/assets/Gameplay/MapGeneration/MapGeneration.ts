// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../../Utility2d/Global";
import PoolManager, { BubbleType } from "../../Utility2d/Pool/PoolManager";
import SoundManager from "../../Utility2d/SoundManager";
import BubbleController from "../Bubble/BubbleController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MapGeneration extends cc.Component {

    @property()
    totalRow: number = 0;

    @property()
    startY: number = 0;

    @property()
    startXOddRow: number = 0;

    @property()
    startXEvenRow: number = 0;

    @property()
    levelConfig: string = "";

    @property(cc.Node)
    ballHolder: cc.Node = null;

    wordsArray: string[] = [];
    stringInput: string = "";

    protected onLoad(): void {
        eventDispatcher.on(Global.ResetShooter, this.moveMapDown, this);
    }

    Init(): void {
        this.parseStringBySpace();
        this.startGenMap();
        eventDispatcher.emit(Global.GetConnectBall);
        eventDispatcher.on(Global.Falling, this.CheckFalling, this);
        eventDispatcher.emit(Global.GetWorldPos);

    }
    boolStartMoveMap: boolean = false;
    moveMapDown() {
        if (!Global.hitBubble) return;
        if (this.boolStartMoveMap) return;
        this.boolStartMoveMap = true;
        switch (this.node.y) {
            case 300:
                this.node.runAction(
                    cc.sequence(
                        cc.moveTo(0.5, new cc.Vec2(0, 150)),
                        cc.callFunc(() => {
                            this.boolStartMoveMap = false;
                            this.node.y = 150;
                        })
                    )
                );
                break;

            case 150:
                this.node.runAction(
                    cc.sequence(
                        cc.moveTo(0.5, new cc.Vec2(0, -100)),
                        cc.callFunc(() => {
                            this.node.y = -100;
                            this.boolStartMoveMap = false;
                        })
                    )
                );
                break;

            case -100:
                this.node.runAction(
                    cc.sequence(
                        cc.moveTo(0.5, new cc.Vec2(0, -500)),
                        cc.callFunc(() => {
                            this.node.y = -500;
                            this.boolStartMoveMap = false;
                        })
                    )
                );
                break;
        }
    }

    startGenMap() {
        // this.startY -= 55 * 38;

        for (let i = 0; i < this.totalRow; i++) {

            this.stringInput = this.wordsArray[i];
            if (this.stringInput.length == 16) {
                this.stringInput = this.stringInput + '.';
            }
            if (i % 2 == 0) {
                for (let j = 0; j < this.stringInput.length; j++) {
                    this.createBall(this.stringInput[j], this.startXEvenRow + j * 60, "[" + i + "][" + j + "]", i, j);
                }

            } else {

                for (let j = 0; j < this.stringInput.length; j++) {
                    this.createBall(this.stringInput[j], this.startXOddRow + j * 60, "[" + i + "][" + j + "]", i, j);
                }
            }
            this.startY -= 55;
        }
    }

    createBall(string: String, posX: number, stringName: string, row: number, column: number) {
        switch (string) {

            case ".":
                Global.Bubble[row][column] = null;
                break;
            case "R":
                var redBall = PoolManager.Instance(PoolManager).SpawnerBubble(BubbleType.RED, this.ballHolder);
                redBall.getComponent(BubbleController).Init(row, column);
                Global.Bubble[row][column] = redBall.getComponent(BubbleController);

                redBall.parent = this.ballHolder;
                redBall.name = "ball_red" + stringName;

                redBall.setPosition(posX, this.startY);
                break;

            case "C":
                var cyanBall = PoolManager.Instance(PoolManager).SpawnerBubble(BubbleType.CYAN, this.ballHolder);
                cyanBall.getComponent(BubbleController).Init(row, column);
                Global.Bubble[row][column] = cyanBall.getComponent(BubbleController);

                cyanBall.parent = this.ballHolder;
                cyanBall.name = "ball_cyan" + stringName;

                cyanBall.setPosition(posX, this.startY);
                break;

            case "G":
                var greenBall = PoolManager.Instance(PoolManager).SpawnerBubble(BubbleType.GREEN, this.ballHolder);
                greenBall.getComponent(BubbleController).Init(row, column);
                Global.Bubble[row][column] = greenBall.getComponent(BubbleController);

                greenBall.parent = this.ballHolder;
                greenBall.name = "ball_green" + stringName;

                greenBall.setPosition(posX, this.startY);
                break;

            case "Y":
                var yellowBall = PoolManager.Instance(PoolManager).SpawnerBubble(BubbleType.YELLOW, this.ballHolder);
                yellowBall.getComponent(BubbleController).Init(row, column);
                Global.Bubble[row][column] = yellowBall.getComponent(BubbleController);

                yellowBall.parent = this.ballHolder;
                yellowBall.name = "ball_yellow" + stringName;

                yellowBall.setPosition(posX, this.startY);
                break;

            case "P":
                var purpleBall = PoolManager.Instance(PoolManager).SpawnerBubble(BubbleType.PURPLE, this.ballHolder);
                purpleBall.getComponent(BubbleController).Init(row, column);
                Global.Bubble[row][column] = purpleBall.getComponent(BubbleController);

                purpleBall.parent = this.ballHolder;
                purpleBall.name = "ball_purple" + stringName;

                purpleBall.setPosition(posX, this.startY);
                break;

            case "B":
                var blueBall = PoolManager.Instance(PoolManager).SpawnerBubble(BubbleType.BLUE, this.ballHolder);
                blueBall.getComponent(BubbleController).Init(row, column);
                Global.Bubble[row][column] = blueBall.getComponent(BubbleController);

                blueBall.parent = this.ballHolder;
                blueBall.name = "ball_blue" + stringName;

                blueBall.setPosition(posX, this.startY);
                break;
        }
    }

    parseStringBySpace() {
        const inputString = this.levelConfig;

        this.wordsArray = inputString.split(' ');
        // this.wordsArray.forEach(word => {
        //     console.log(word);
        // });
    }
    CheckFalling() {
        if (Global.boolStartFalling) return;
        Global.boolStartFalling = true;
        //  cc.log(Global.rowCheckFalling);
        // cc.log(Global.columnCheckFalling);
       // SoundManager.Instance(SoundManager).bubble.stop();

        for (let i = Global.rowCheckFalling; i < 13; i++) {
            for (let j = 0; j < Global.columnCheckFalling; j++) {
                if (Global.Bubble[i][j] != null) {
                    // Global.Bubble[i][j].Falling();
                    if (Global.Bubble[i][j].CheckCanFalling()) {
                        //   cc.log(Global.Bubble[i][j].node.name);
                        Global.Bubble[i][j].Falling(Global.rowCheckFalling, j);
                    }
                }
            }
        }

    }

}
