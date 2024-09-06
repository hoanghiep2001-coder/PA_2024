const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    @property(cc.Node)
    PickTray: cc.Node = null;

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
    Hand: cc.Node = null;
    @property(cc.Node)
    CTA_Btn: cc.Node = null;
    @property(cc.Node)
    CTA_Overlay: cc.Node = null;


    // Dress Up Scene
    @property(cc.Node)
    DressUp_Container: cc.Node = null;
    @property(cc.Node)
    DressUpBg_2: cc.Node = null;
    @property(cc.Node)
    DressUpPickTray: cc.Node = null;

    // Battle Scene
    @property(cc.Node)
    Doll: cc.Node = null;

    // Btn
    @property(cc.Node)
    Btn_Submit: cc.Node = null;

    // FX
    @property(cc.ParticleSystem)
    FX_Heart: cc.ParticleSystem = null;

    // Doll Items
    @property(cc.Node)
    DollDressDefault: cc.Node = null;
    @property(cc.Node)
    DollHairDefault: cc.Node = null;

    @property([cc.Node])
    Items: cc.Node[] = [];

    @property([cc.Node])
    Dress_Frames: cc.Node[] = [];
    @property([cc.Node])
    Doll_Dresses: cc.Node[] = [];

    @property([cc.Node])
    Hair_Frames: cc.Node[] = [];
    @property([cc.Node])
    Doll_F_Hairs: cc.Node[] = [];

    @property([cc.Node])
    Shoe_Frames: cc.Node[] = [];


    // state
    frameItems: cc.Node[] = [];
    btnSubmit_Sprite: cc.Node = null;
    btnNext_Sprite: cc.Node = null;


    protected onLoad(): void {
        for (let index = 0; index < this.Items.length; index++) {
            const itemNode: cc.Node = this.Items[index];
            const itemsInNodeArr: cc.Node[] = itemNode.children;
            for (let index = 0; index < itemsInNodeArr.length; index++) {
                const item = itemsInNodeArr[index];
                this.frameItems.push(item);
            }
        }   
        
        this.btnSubmit_Sprite = this.Btn_Submit.getChildByName("Btn_Submit");
        this.btnNext_Sprite = this.Btn_Submit.getChildByName("Btn_Next");
    }
}
