const {ccclass, property} = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {

    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    @property(cc.Node)
    Doll: cc.Node = null;
    @property(cc.Node)
    Doll_DressDefault: cc.Node = null;
    @property(cc.Node)
    Doll_Dress1: cc.Node = null;
    @property(cc.Node)
    Doll_Dress2: cc.Node = null;
    @property(cc.Node)
    Book: cc.Node = null;
    @property(cc.Node)
    Hand: cc.Node = null;
    @property(cc.Node)
    Button_1: cc.Node = null;
    @property(cc.Node)
    Button_2: cc.Node = null;

    @property(cc.ParticleSystem)
    Effect_Heart: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    Effect_Blink: cc.ParticleSystem = null;
}
