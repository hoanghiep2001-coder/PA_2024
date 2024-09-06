
const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeContainer extends cc.Component {

    @property(cc.Node)
    GamePlay: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    @property(cc.Node)
    Scratchable: cc.Node = null;

    @property(cc.Node)
    HideMask: cc.Node = null;
    @property(cc.Node)
    Bg_1: cc.Node = null;
    @property(cc.Node)
    Bg_1_1: cc.Node = null;
    @property(cc.Node)
    Bg_1_2: cc.Node = null;
    @property(cc.Node)
    Bg_2: cc.Node = null;
    @property(cc.Node)
    Bg_2_1: cc.Node = null;
    @property(cc.Node)
    Bg_2_2: cc.Node = null;


    @property(cc.Node)
    Step2: cc.Node = null;
    @property(cc.Node)
    OptionContainer: cc.Node = null;

    @property(cc.Node)
    Step1_Ponny: cc.Node = null;
    @property(cc.Node)
    Step2_Ponny: cc.Node = null;
    
 
    @property(cc.Node)
    Star_1: cc.Node = null;

    // Points
    @property(cc.Node)
    PointScratch: cc.Node = null;

    // Tools
    @property(sp.Skeleton)
    Sp_Cleanser: sp.Skeleton = null;
    @property(sp.Skeleton)
    Sp_Shower: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_RMMG1: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_Acne: sp.Skeleton = null;


    // Spine
    @property(sp.Skeleton)
    Spine_Maggot2: sp.Skeleton = null;


     // Options


     @property(cc.Node)
     Flow1_Opt1: cc.Node = null;
     @property(cc.Node)
     Flow1_Opt2: cc.Node = null;
     @property(cc.Node)
     Flow2_Opt1: cc.Node = null;
     @property(cc.Node)
     Flow2_Opt2: cc.Node = null;
     @property(cc.Node)
     Flow3_Opt1: cc.Node = null;
     @property(cc.Node)
     Flow3_Opt2: cc.Node = null;
}
