const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;

    // FX
    @property(cc.ParticleSystem)
    PS_Blink_Head: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    PS_Blink_Base: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    PS_Blink_Shoe: cc.ParticleSystem = null;

    // UI
    @property(cc.Node)
    Hand: cc.Node = null;
    @property(cc.Node)
    doll: cc.Node = null;
    @property(cc.Node)
    Doll_Camera: cc.Node = null;
    @property(cc.Node)
    Logo: cc.Node = null;
    @property(cc.Node)
    Icon: cc.Node = null;
    @property(cc.Node)
    Progress: cc.Node = null;
    ProgressSteps: cc.Node[] = [];

    Btn_DollCamera: cc.Node = null;
    @property(cc.Node)
    BtnDownload: cc.Node = null;
    @property(cc.Node)
    BtnLeft: cc.Node = null;
    @property(cc.Node)
    BtnRight: cc.Node = null;

    @property(cc.Node)
    ListItem: cc.Node = null;
    @property(cc.Node)
    ListColor: cc.Node = null;

    // Items
    @property([cc.Node])
    Char_Hairs: cc.Node[] = [];
    @property(cc.Node)
    Char_DressDefault: cc.Node = null;
    @property([cc.Node])
    Char_Dresses: cc.Node[] = [];
    @property(cc.Node)
    Char_ShoesDefault: cc.Node = null;
    @property([cc.Node])
    Char_Shoes: cc.Node[] = [];

    Items: cc.Node[] = [];

    Frame_Colors: cc.Node[] = [];
    Frame_Hairs: cc.Node[] = [];
    Frame_Dresses: cc.Node[] = [];
    Frame_Shoes: cc.Node[] = [];


    protected onLoad(): void {
        this.BtnLeft.active = false;
        this.BtnRight.active = false;
    }


    protected start(): void {
        // màu FX #FF8F00

        // init progress Steps
        this.ProgressSteps = this.Progress.getChildByName("thanhngang").children;

        // init items
        this.Items = this.ListItem.children;

        // init frame pick hairs
        this.ListItem.getChildByName("Hair").children.filter((item, index) => {
            let framePick = item.getChildByName("FramePick");
            if (framePick.name) this.Frame_Hairs.push(framePick);
        });
        // init frame pick dress
        this.ListItem.getChildByName("Dress").children.filter((item, index) => {
            let framePick = item.getChildByName("FramePick");
            if (framePick.name) this.Frame_Dresses.push(framePick);
        });
        // init frame pick shoe
        this.ListItem.getChildByName("Shoe").children.filter((item, index) => {
            let framePick = item.getChildByName("FramePick");
            if (framePick.name) this.Frame_Shoes.push(framePick);
        });

        // init frame pick colors
        this.Frame_Colors = this.ListColor.children;

        // init camera
        this.Btn_DollCamera = this.Doll_Camera.getChildByName("btn");

    }
}
