
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
    Doll: cc.Node = null;

    @property(cc.Node)
    Star_1: cc.Node = null;
    @property(cc.Node)
    Text_Jimin: cc.Node = null;
    @property(cc.Node)
    Text_Drag: cc.Node = null;

    @property(cc.Node)
    Hand_1: cc.Node = null;
    @property(cc.Node)
    Hand_2: cc.Node = null;
    
    @property(cc.Node)
    Acne1_1: cc.Node = null;
    @property(cc.Node)
    Acne1_2: cc.Node = null;
    @property(cc.Node)
    Acne2_1: cc.Node = null;
    @property(cc.Node)
    Acne2_2: cc.Node = null;
    
    // Point
    @property(cc.Node)
    Point_Cleanser: cc.Node = null;
    @property(cc.Node)
    Point_Tweezers: cc.Node = null;
    @property(cc.Node)
    Point_Tweezer_Head: cc.Node = null;


    @property(cc.Node)
    Tweezers_InteractPoint1: cc.Node = null;
    @property(cc.Node)
    Tweezers_InteractPoint2: cc.Node = null;

    // tools
    @property(cc.Node)
    Cleanser: cc.Node = null;
    @property(sp.Skeleton)
    sp_Cleanser: sp.Skeleton = null;

    @property(cc.Node)
    tweezers: cc.Node = null;
    @property(sp.Skeleton)
    sp_Tweezers: sp.Skeleton = null;

    // spine
    @property(sp.Skeleton)
    sp_tearsLeft: sp.Skeleton = null;
    @property(sp.Skeleton)
    sp_tearsRight: sp.Skeleton = null;

    @property(sp.Skeleton)
    Spine_Maggot1: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_Maggot2: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_RMMG1: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_RMMG2: sp.Skeleton = null;
}
