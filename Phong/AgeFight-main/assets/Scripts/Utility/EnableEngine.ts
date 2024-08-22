const { ccclass, property } = cc._decorator;

@ccclass
export default class EnableEngine extends cc.Component {
    onLoad() {
        cc.view.enableAutoFullScreen(false);
        cc.director.getCollisionManager().enabled = true;
        //cc.director.getPhysicsManager().enabled = true;
    }
}
