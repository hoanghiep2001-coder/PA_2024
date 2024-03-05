
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
    Step1_Ponny: cc.Node = null;
    @property(cc.Node)
    Step2_Ponny: cc.Node = null;

    @property(cc.Node)
    Hand_1: cc.Node = null;
    @property(cc.Node)
    Hand_2: cc.Node = null;
    @property(cc.Node)
    Star_1: cc.Node = null;
    @property(cc.Node)
    Circle_1: cc.Node = null;
    @property(cc.Node)
    Circle_2: cc.Node = null;

    // Points
    @property(cc.Node)
    Cleanser_Point: cc.Node = null;
    @property(cc.Node)
    Tweezers_Point: cc.Node = null;
    @property(cc.Node)
    Tweezers_HeadPoint: cc.Node = null;
    @property(cc.Node)
    Tweezers_InteractPoint1: cc.Node = null;
    @property(cc.Node)
    Tweezers_InteractPoint2: cc.Node = null;

    // Tools
    @property(cc.Node)
    Cleanser: cc.Node = null;
    @property(cc.Node)
    Tweezers: cc.Node = null;


    // Spine
    @property(sp.Skeleton)
    Spine_Cleanser: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_Tweezers: sp.Skeleton = null;


    @property(sp.Skeleton)
    Spine_Maggot1: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_Maggot2: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_RMMG1: sp.Skeleton = null;
    @property(sp.Skeleton)
    Spine_RMMG2: sp.Skeleton = null;
}
