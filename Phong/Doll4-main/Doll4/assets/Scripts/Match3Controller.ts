// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";
import Singleton from "../Utility/Singleton";
import Utility from "../Utility/Utility";
import Block, { BlockInfo, BlockType } from "./Block";
import GameManager from "./GameManager";

const { ccclass, property } = cc._decorator;


@ccclass('BlockSpriteCollection')
export class BlockSpriteCollection {
    @property({ type: cc.SpriteFrame })
    spriteBlock: cc.SpriteFrame[] = [];
}
@ccclass
export default class Match3Controller extends Singleton<Match3Controller> {


    constructor() {
        super();
        Match3Controller._instance = this;
    }


    @property(Block)
    listBlockMatch3: Block[] = [];

    @property({ type: BlockSpriteCollection })
    spriteBlockCollection: BlockSpriteCollection[] = [];

    @property(String)
    boardConfig: string[] = [];


    @property(cc.Node)
    listEffect: cc.Node[] = [];

    @property(cc.Sprite)
    item: cc.Sprite = null;

    @property(cc.Node)
    starEffect: cc.Node = null;

    @property(cc.Node)
    starLight: cc.Node = null;

    @property(cc.Node)
    guide: cc.Node = null;

    blockInfor1: BlockInfo = null;
    blockInfor2: BlockInfo = null;
    blockInfor3: BlockInfo = null;

    spriteFrame1: cc.SpriteFrame = null;
    spriteFrame2: cc.SpriteFrame = null;
    spriteFrame3: cc.SpriteFrame = null;
    initBoardIndex: number = 0;
    stringArray: string[] = [];


    currentBlock1: Block = null;
    currentBlock2: Block = null;



    numRows: number = 3;
    numCols: number = 3;

    array2D: Block[][] = [][3];

    protected onEnable(): void {
        this.InitBoard();
    }

    SetItem(SpriteFrame: cc.SpriteFrame, scaleConfig: number) {
        this.item.spriteFrame = SpriteFrame;
        this.item.node.scale = scaleConfig;
    }

    InitBoard() {
        this.ClearBoard();
        this.RandomSkin();
        this.initBoardIndex = 2;

        this.stringArray = this.boardConfig[this.initBoardIndex].split(" ");
        this.SpawnBlock();

    }
    SpawnBlock() {

        for (let i = 0; i < 9; i++) {
            if (this.stringArray[i] == "1") {
                this.listBlockMatch3[i].InitBlock(this.blockInfor1.blockType, this.blockInfor1.spriteFrame);
            }

            if (this.stringArray[i] == "2") {
                this.listBlockMatch3[i].InitBlock(this.blockInfor2.blockType, this.blockInfor2.spriteFrame);

            }

            if (this.stringArray[i] == "3") {
                this.listBlockMatch3[i].InitBlock(this.blockInfor3.blockType, this.blockInfor3.spriteFrame);

            }
        }
        let i = 0;
        this.schedule(() => {
            this.listBlockMatch3[i].node.active = true;
            i++;
        }, 0.05, 8, 0)
    }
    ClearBoard() {
        for (let i = 0; i < 9; i++) {
            this.listBlockMatch3[i].ResetBlock();
        }
    }
    RandomSkin() {
        let x = Utility.RandomRangeInteger(0, 5);
        this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[0];
        this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[0];
        this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[0];

        switch (x) {
            case 0:
                this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[0];
                this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[1];
                this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[2];
                break;
            case 1:
                this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[0];
                this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[2];
                this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[1];
                break;
            case 2:
                this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[1];
                this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[0];
                this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[2];
                break;
            case 3:
                this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[1];
                this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[2];
                this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[0];
                break;
            case 4:
                this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[2];
                this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[0];
                this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[1];
                break;
            case 5:
                this.spriteFrame1 = this.spriteBlockCollection[0].spriteBlock[2];
                this.spriteFrame2 = this.spriteBlockCollection[0].spriteBlock[1];
                this.spriteFrame3 = this.spriteBlockCollection[0].spriteBlock[0];
                break;

        }
        this.blockInfor1 = new BlockInfo(BlockType.Type1, this.spriteFrame1);
        this.blockInfor2 = new BlockInfo(BlockType.Type2, this.spriteFrame2);
        this.blockInfor3 = new BlockInfo(BlockType.Type3, this.spriteFrame3);
    }

    swapElements<T>(arr: T[], index1: number, index2: number): void {

        //  cc.log(arr);
        // Check if indices are within the bounds of the array
        if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
            console.error('Indices out of bounds.');
            return;
        }

        // Swap the elements
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

    }

    convertArrayTo2D(arr: any[], numRows: number, numCols: number): any[][] {
        const result: any[][] = [];
        let index = 0;

        for (let i = 0; i < numRows; i++) {
            const row: any[] = [];
            for (let j = 0; j < numCols; j++) {
                row.push(arr[index++]);
            }
            result.push(row);
        }
        //  cc.log(result);
        return result;
    }
    RearrangeBoard() {
        let index1 = this.listBlockMatch3.indexOf(this.currentBlock1);
        let index2 = this.listBlockMatch3.indexOf(this.currentBlock2);

        this.swapElements(this.listBlockMatch3, index1, index2)
        this.array2D = this.convertArrayTo2D(this.listBlockMatch3, 3, 3);

        //  cc.log(this.array2D);

    }
    CheckMatchHorizontal() {
        let count = 0;
        let row = 0;
        for (let i = 0; i < 3; i++) {
            const block = this.array2D[row][0];
            for (let j = 0; j < 3; j++) {
                if (block.doneMatch) {
                    break;
                }
                //   cc.log("check horizontal " + this.array2D[cow][0].node.name + " " + this.array2D[cow][0].blockType + " " + this.array2D[i][j].node.name + " " + this.array2D[i][j].blockType);
                if (block.blockType == this.array2D[i][j].blockType) {
                    count += 1;
                    // return false;
                }
            }
            if (count == 3) {
                //   this.rowMatch = row;
                //  cc.log("can match horizontal");
                return true;
            }
            count = 0;
            row += 1;
        }
        return false;
    }

    CheckMatchVertical() {
        let count = 0;
        let col = 0;
        for (let i = 0; i < 3; i++) {
            const block = this.array2D[0][col];
            for (let j = 0; j < 3; j++) {
                if (block.doneMatch) {
                    break;
                }
                //    cc.log("check vertical " + this.array2D[0][row].node.name + " " + this.array2D[0][row].blockType + " " + this.array2D[j][i].node.name + " " + this.array2D[j][i].blockType);
                if (block.blockType == this.array2D[j][i].blockType) {
                    count += 1;
                }
            }
            if (count == 3) {
                // cc.log("can match vertical");
                //  this.colMatch = col;
                return true;
            }
            count = 0;
            col += 1;

        }
        return false;
    }

    CheckMatch() {
        this.RearrangeBoard();

        if (this.CheckMatchVertical() || this.CheckMatchHorizontal())
            return true;

        return false;

    }

    CheckLose() {

        return false;
    }

    CheckWin() {
        for (let i = 0; i < this.listBlockMatch3.length; i++) {
            if (!this.listBlockMatch3[i].doneMatch) {
                return false;
            }
        }
        // this.listBlockMatch3.forEach(element => {
        //     cc.log(element.doneMatch);
        //     if (element.doneMatch == false) {
        //         return false;
        //     }
        // });
        return true;
    }

    MatchBlock() {
        let count = 0;
        let row = 0;
        for (let i = 0; i < 3; i++) {
            const block = this.array2D[row][0];
            for (let j = 0; j < 3; j++) {
                if (block.doneMatch) {
                    break;
                }
                //   cc.log("check horizontal " + this.array2D[cow][0].node.name + " " + this.array2D[cow][0].blockType + " " + this.array2D[i][j].node.name + " " + this.array2D[i][j].blockType);
                if (block.blockType == this.array2D[i][j].blockType) {
                    count += 1;
                    // return false;
                }
            }
            if (count == 3) {
                this.listEffect[row].active = true;
                for (let i = 0; i < 3; i++) {
                    this.array2D[row][i].completeMatch();
                }

                //    cc.log("can match horizontal");
            }
            count = 0;
            row += 1;
        }
        Utility.PlaySound(Global.matchBlock, false);
        if (this.CheckWin()) {
            this.scheduleOnce(() => {
                Utility.PlaySound(Global.girl, false);
                this.starEffect.active = true;
                this.item.node.active = true;
                this.EndMatch();
            }, 0.5);
        }
    }

    EndMatch() {
        this.scheduleOnce(() => {
            this.node.getComponent(cc.Animation).play("Fade");
        }, 1)
        this.scheduleOnce(() => {
            this.starLight.active = true;
            GameManager.Instance(GameManager).ShowGirl();
            this.scheduleOnce(() => {
                GameManager.Instance(GameManager).ShowEndcard();
            }, 1)
        }, 1.5)
    }

    oldPos: cc.Vec2 = null;
    touchPos: cc.Vec2 = null;
    protected start(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
        // this.node.active = false;

        this.array2D = this.convertArrayTo2D(this.listBlockMatch3, 3, 3);

    }
    TouchStart(event) {
        if (!Global.canMoveBlock) return;
        this.currentBlock1 = null;
        this.currentBlock2 = null;
        this.oldPos = null;
        this.touchPos = null;

        this.oldPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.getBlock1();
    }
    TouchMove(event) {
        this.touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (!Global.canMoveBlock) return;

        if (Utility.Distance(this.touchPos, this.oldPos) > 8 && this.currentBlock1 != null && this.currentBlock2 == null) {
            this.getBlock2();
            this.SwapBlock();
        }
    }
    TouchEnd(event) {


    }

    SwapBlock() {
        this.guide.active = false;
        if (this.currentBlock1 == null || this.currentBlock2 == null) return;
        if (!Global.canMoveBlock) return;
        Global.canMoveBlock = false;

        var pos1 = this.currentBlock1.prePos;
        var stringName1 = this.currentBlock1.node.name;

        var pos2 = this.currentBlock2.prePos;
        var stringName2 = this.currentBlock2.node.name;

        Utility.PlaySound(Global.moveBlock, false);
        this.currentBlock1.Moving(pos2, stringName2, Global.speedSwapBlock);
        this.currentBlock2.Moving(pos1, stringName1, Global.speedSwapBlock);
        if (this.CheckMatch()) {
            this.MatchBlock();
            this.scheduleOnce(() => {
                //this.currentBlock1.doneMatch = true;
                //  this.currentBlock2.doneMatch = true;
                Global.canMoveBlock = true;
            }, 0.3);
        }
        else {
            this.scheduleOnce(() => {
                this.currentBlock1.Moving(pos1, stringName1, Global.speedSwapBlockFail);
                this.currentBlock2.Moving(pos2, stringName2, Global.speedSwapBlockFail);
            }, 0.3);

            this.RearrangeBoard();
            this.scheduleOnce(() => {
                Global.canMoveBlock = true;
            }, 0.3);
        }
        // cc.log(this.array2D);
    }

    getBlock1() {
        if (!Global.canMoveBlock) return;
        if (this.currentBlock1) return;
        var maxDis = 10000;
        this.listBlockMatch3.forEach(element => {
            if (Utility.Distance(this.oldPos, Utility.PositionToVector2(element.node.position)) < maxDis) {
                maxDis = Utility.Distance(this.oldPos, Utility.PositionToVector2(element.node.position));
                this.currentBlock1 = element;
            }
        });
        if (this.currentBlock1.doneMatch) {
            this.currentBlock1 = null;
        }
        //  cc.log(this.currentBlock1.node.name);
    }
    getBlock2() {
        if (!Global.canMoveBlock) return;
        if (this.currentBlock1 == null) return;
        if (this.currentBlock2) return;
        var maxDis = 10000;
        this.listBlockMatch3.forEach(element => {
            if (Utility.Distance(this.touchPos, Utility.PositionToVector2(element.node.position)) < maxDis && element != this.currentBlock1) {
                maxDis = Utility.Distance(this.touchPos, Utility.PositionToVector2(element.node.position));
                this.currentBlock2 = element;
            }
        });
        if (this.currentBlock2.doneMatch) {
            this.currentBlock2 = null;
        }
        // cc.log(this.currentBlock2.node.name);
    }


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}

