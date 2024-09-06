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
    CTA: cc.Node = null;


    Btn_1: cc.Node = null;
    Hand: cc.Node = null;
    Hint_Circle: cc.Node = null;
    Hint_Circle_2: cc.Node = null;


    // Character Path
    Doll: cc.Node = null;
    Doll_Ear: sp.Skeleton = null;
    Doll_Maggot: cc.Node = null;
    Doll_SpineRmMaggot: sp.Skeleton = null;
    Doll_Poke: cc.Node = null;


    // Flow
    Flow1: cc.Node = null;
    Flow2: cc.Node = null;


    // Tools
    ToolArea: cc.Node = null;
    Flow1_Tool: cc.Node = null;
    Flow1_ToolHead: cc.Node = null;
    Flow1_spineTool: cc.Node = null;
    Flow1_DollSpineTool: sp.Skeleton = null;

    Flow2_Tool: cc.Node = null;
    Flow2_ToolHead: cc.Node = null;


    // Area
    Flow1_Area: cc.Node = null;
    Flow1_Acnes: cc.Node[] = [];

    Flow2_Area: cc.Node = null;


    // CTA
    CTA_Btn: cc.Node = null;
    CTA_icon: cc.Node = null;
    CTA_logo: cc.Node = null;
    CTA_overlay: cc.Node = null;


    initPosTool_Flow2: cc.Vec2 = null;


    protected start(): void {
        this.Hand = this.UI.getChildByName("hand2");

        this.Doll = this.UI.getChildByName("Doll");

        this.Doll_Poke = this.Doll.getChildByName("poke");

        this.Doll_Ear = this.Doll.getChildByName("Malear").getComponent(sp.Skeleton);

        this.Hint_Circle = this.Doll.getChildByName("Maggot").getChildByName("circle");

        this.Hint_Circle_2 = this.Doll.getChildByName("Maggot").getChildByName("circle_2");

        this.Doll_Maggot = this.Doll.getChildByName("Maggot").getChildByName("Mask_Maggot");

        this.Doll_SpineRmMaggot = this.Doll.getChildByName("Maggot")
        .getChildByName("Mask").getChildByName("spine_tool").getComponent(sp.Skeleton);

        this.Flow1 = this.UI.getChildByName("Flow_1");

        this.Flow1_DollSpineTool =  this.Doll.getChildByName("Maggot")
        .getChildByName("Mask").getChildByName("spine_tool").getComponent(sp.Skeleton);

        this.Flow1_Tool = this.Flow1.getChildByName("Tool");

        this.Flow1_ToolHead = this.Flow1.getChildByName("ToolHead");

        this.Flow1_spineTool = this.Flow1.getChildByName("spine_Tool");
        
        this.Flow1_Area = this.Flow1.getChildByName("Area");

        this.Flow2 = this.UI.getChildByName("Flow_2");

        this.Flow2_Tool = this.Flow2.getChildByName("poke");

        this.Flow2_ToolHead = this.Flow2.getChildByName("ToolHead");

        this.Flow2_Area = this.Flow2.getChildByName("Area");

        this.CTA_Btn = this.CTA.getChildByName("btnNext");

        this.CTA_logo = this.CTA.getChildByName("logo");

        this.CTA_icon = this.CTA.getChildByName("icon");

        this.CTA_overlay = this.CTA.getChildByName("Overlay");

        this.init();
    }


    private init(): void {
        this.initPosTool_Flow2 = this.Flow2_Tool.getPosition();

        this.ToolArea = this.Flow1_Tool;
    }
}
