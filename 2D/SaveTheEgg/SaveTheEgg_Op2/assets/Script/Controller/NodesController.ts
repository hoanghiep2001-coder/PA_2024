
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
    Pencil: cc.Node = null;
}
