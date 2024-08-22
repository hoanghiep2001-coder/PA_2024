// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../Utility/Global";


const { ccclass, property } = cc._decorator;

export enum BlockType {
    Type1 = "Type1",
    Type2 = "Type2",
    Type3 = "Type3",
}

@ccclass("BlockInfo")
export class BlockInfo {
    blockType: BlockType = BlockType.Type1;
    spriteFrame: cc.SpriteFrame = null;

    constructor(param1: BlockType, param2: cc.SpriteFrame) {
        this.blockType = param1;
        this.spriteFrame = param2;
    }
}

@ccclass()
export default class Block extends cc.Component {

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Node)
    bg: cc.Node = null;

    public blockType: BlockType = BlockType.Type1;

    public doneMatch: boolean = false;

    prePos: cc.Vec2 = null;


    protected onEnable(): void {
        this.prePos = new cc.Vec2(this.node.x, this.node.y);
        this.anim.play("ScaleTo1");

    }


    Moving(pos: cc.Vec2, stringName: string, speed: number) {
        if (this.doneMatch) return;
        // this.node.name = stringName;
        this.prePos = pos;
        this.node.runAction(
            cc.sequence(
                cc.moveTo(speed, pos),
                cc.callFunc(() => {
                })
            )
        )
    }

    completeMatch() {
        this.doneMatch = true;
        this.anim.play("Match");
    }

    InitBlock(blockType: BlockType, spriteFrameBlock: cc.SpriteFrame) {
        this.icon.node.active = true;
        this.bg.active = true;
        this.icon.spriteFrame = spriteFrameBlock;
        this.blockType = blockType;
        // this.node.active = true;
    }

    ResetBlock() {
        this.node.scaleX = 0;
        this.node.scaleY = 0;
        this.node.active = false;

    }



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update(dt) {

    // }
}
