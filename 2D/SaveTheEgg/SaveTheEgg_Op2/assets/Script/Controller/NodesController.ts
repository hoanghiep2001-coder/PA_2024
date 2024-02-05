
const {ccclass, property} = cc._decorator;

@ccclass
export default class NodesController extends cc.Component {

    // Component
    @property(cc.Graphics)
    Graphics: cc.Graphics = null;

    // Node
    @property(cc.Node)
    HideMask: cc.Node = null;
    @property(cc.Node)
    LineContainer: cc.Node = null;

    // PreFab
    @property(cc.Prefab)
    Prefab_Graphics: cc.Prefab = null;
}
