
const {ccclass, property} = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {

    // Component
    @property(cc.Camera)
    camera: cc.Camera = null;

    // environment
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    background_1: cc.Node = null;
    @property(cc.Node)
    background_2_ver: cc.Node = null;
    @property(cc.Node)
    background_2_hor: cc.Node = null;
    @property(cc.Node)
    background_3: cc.Node = null;

    // container
    @property(cc.Node)
    GamePlay: cc.Node = null;
    @property(cc.Node)
    UI_Container: cc.Node = null;
    @property(cc.Node)
    buttons: cc.Node = null;
    @property(cc.Node)
    scene1: cc.Node = null;
    @property(cc.Node)
    scene3: cc.Node = null;
   
    // CTA
    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    CTA_overlay: cc.Node = null;
    @property(cc.Node)
    CTA_btn: cc.Node = null;
    @property(cc.Node)
    CTA_icon: cc.Node = null;
    @property(cc.Node)
    CTA_logo: cc.Node = null;

    // hint
    @property(cc.Node)
    hand_1: cc.Node = null;
    @property(cc.Node)
    hand_2: cc.Node = null;

    // doll
    @property(cc.Node)
    doll: cc.Node = null;
    @property(cc.Node)
    doll_scene3: cc.Node = null;
    @property(cc.Node)
    doll_mouth_default: cc.Node = null;
    @property(cc.Node)
    doll_mouth_suprise: cc.Node = null;
    @property(sp.Skeleton)
    doll_tears_left: sp.Skeleton = null;
    @property(sp.Skeleton)
    doll_tears_right: sp.Skeleton = null;
    @property(cc.Node)
    doll_dress_default: cc.Node = null;
    @property(cc.Node)
    doll_dress: cc.Node = null;

    // UI
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    icon: cc.Node = null;
    @property(cc.Node)
    door: cc.Node = null;
    @property(cc.Node)
    adultery: cc.Node = null;
    @property(cc.Node)
    UI_button_revenge: cc.Node = null;
    @property(cc.Node)
    item_Dress_btn: cc.Node = null;

    @property([cc.Node])
    items: cc.Node[] = [];

    // effects
    @property(cc.ParticleSystem)
    effect_blink_Doll: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    effect_blink_item: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    effect_heart: cc.ParticleSystem = null;


    protected start(): void {
        
    }
}
