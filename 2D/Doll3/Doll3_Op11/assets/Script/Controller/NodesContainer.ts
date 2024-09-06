const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;

    // Flow
    @property(cc.Node)
    OpenScene: cc.Node = null;
    @property(cc.Node)
    DressUpScene: cc.Node = null;
    @property(cc.Node)
    BattleScene: cc.Node = null;
    @property(cc.Node)
    CTA: cc.Node = null;

    @property(cc.Node)
    CTA_Btn: cc.Node = null;
    @property(cc.Node)
    CTA_Overlay: cc.Node = null;


    // Dress Up Scene
    @property(cc.Node)
    DressUp_Container: cc.Node = null;
    @property(cc.Node)
    DressUpBg_1: cc.Node = null;
    @property(cc.Node)
    DressUpBg_2: cc.Node = null;
    @property(cc.Node)
    DressUpPickTray: cc.Node = null;
    @property(cc.Node)
    DressUpText: cc.Node = null;

    // Battle Scene
    @property(cc.Node)
    Doll: cc.Node = null;
    @property(cc.Label)
    DollPoint: cc.Label = null;
    @property(cc.Node)
    Opponent: cc.Node = null;

    // Btn
    @property(cc.Node)
    Btn_Start: cc.Node = null;
    @property(cc.Node)
    OpenScene_BtnInstall: cc.Node = null;
    @property(cc.Node)
    DressUp_BtnInstall: cc.Node = null;
    @property(cc.Node)
    Btn_Submit: cc.Node = null;

    // FX
    @property(cc.ParticleSystem)
    FX_Heart: cc.ParticleSystem = null;

    // Doll Items
    @property(cc.Node)
    DollDressDefault: cc.Node = null;

    @property([cc.Node])
    Frame_Icons: cc.Node[] = [];
    @property([cc.Node])
    Items: cc.Node[] = [];

    @property([cc.Node])
    Dress_Frames: cc.Node[] = [];
    @property([cc.Node])
    Doll_Dresses: cc.Node[] = [];

    @property([cc.Node])
    Hair_Frames: cc.Node[] = [];
    @property([cc.Node])
    Doll_B_Hairs: cc.Node[] = [];
    @property([cc.Node])
    Doll_F_Hairs: cc.Node[] = [];

    @property([cc.Node])
    Shoe_Frames: cc.Node[] = [];
    @property([cc.Node])
    Doll_Shoes: cc.Node[] = [];
}
