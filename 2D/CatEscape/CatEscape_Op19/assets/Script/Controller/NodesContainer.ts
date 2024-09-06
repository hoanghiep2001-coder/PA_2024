const {ccclass, property} = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {

    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    CatBackground: cc.Node = null;
    @property(cc.Node)
    RotateArea: cc.Node = null;

    @property(cc.Node)
    Text: cc.Node = null;

    @property([cc.Node])
    Cats: cc.Node[] = [];
    @property([cc.Node])
    Hints: cc.Node[] = [];
    @property([cc.Node])
    Stars: cc.Node[] = [];
}
