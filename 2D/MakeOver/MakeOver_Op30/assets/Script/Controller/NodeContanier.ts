import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeContainer extends cc.Component {

    @property(cc.Node)
    GamePlay: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    @property(cc.Node)
    Scratchable: cc.Node = null;


    // Bg
    @property(cc.Node)
    Bg_2: cc.Node = null;
    @property(cc.Node)
    HideMask: cc.Node = null;
    

    // UI
    @property(cc.Node)
    intro: cc.Node = null;
    @property(cc.Node)
    MainGame: cc.Node = null;


    // Tools
    @property(cc.Node)
    dryer: cc.Node = null;
    @property(cc.Node)
    toothPaste: cc.Node = null;
    @property(cc.Node)
    waterTooth: cc.Node = null;


    @property([cc.Node])
    bubblePoints: cc.Node[] = [];
    @property([sp.Skeleton])
    spine_Bubbles: sp.Skeleton[] = [];
    @property([sp.Skeleton])
    spine_WaterBubbles: sp.Skeleton[] = [];
    @property([cc.Node])
    Water_bubblePoints: cc.Node[] = [];


    protected onLoad(): void {
        Constants.toothPaste_Points = this.bubblePoints;
        Constants.Water_Points = this.Water_bubblePoints;
        Constants.spine_Bubbles = this.spine_Bubbles;
        Constants.spine_WaterBubbles = this.spine_WaterBubbles;
        
    }
}
