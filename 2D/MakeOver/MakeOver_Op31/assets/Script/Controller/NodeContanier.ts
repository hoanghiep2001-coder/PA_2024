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
    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    Hand: cc.Node = null;

    Btn_1: cc.Node = null;


    // Character Path
    Spine_Delight: sp.Skeleton = null;
    Delight_EyeFly: cc.Node = null;
    Delight_EyeAlert: cc.Node = null;
    Tears: cc.Node[] = [];
    

    // CTA
    CTA_Btn: cc.Node = null;
    CTA_icon: cc.Node = null;
    CTA_logo: cc.Node = null;
    CTA_overlay: cc.Node = null;


    // Tool
    Spine_Remove: sp.Skeleton = null;
    Tool: cc.Node = null;
    ToolArea: cc.Node = null;
    ToolHeadArea: cc.Node = null;
    Fly: cc.Node = null;


    protected start(): void {
        this.Btn_1 = this.MainGame.getChildByName("btnNext");

        this.Spine_Delight = this.MainGame.getChildByName("Spine_Delight").getComponent(sp.Skeleton)
        this.Tears = this.Spine_Delight.node.children.filter(child => child.name.includes("Tears"));
        this.Delight_EyeFly = this.Spine_Delight.node.getChildByName("fly");
        this.Delight_EyeAlert = this.Spine_Delight.node.getChildByName("Alert");
        this.Spine_Remove = this.Spine_Delight.node.getChildByName("Spine_Remove").getComponent(sp.Skeleton)

        this.Fly = this.MainGame.getChildByName("fly");
        this.Tool = this.MainGame.getChildByName("Tools");
        this.ToolArea = this.MainGame.getChildByName("Tools_Area");
        
        this.ToolHeadArea = this.MainGame.getChildByName("Tools_HeadArea");

        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
    }
}
