import { _decorator, Camera, Component, Node, ParticleSystem, Vec3 } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;

 
@ccclass('NodesController')
export class NodesController extends Component {

    // Camera
    @property(Camera)
    Camera: Camera = null;
    

    // hints
    @property(Node)
    hint_1: Node = null;
    @property(Node)
    hint_2: Node = null;

    // touch area
    @property(Node)
    point: Node = null;
    @property(Node)
    hideMask: Node = null;


    // FX
    @property(ParticleSystem)
    FX_Merge: ParticleSystem = null;
    @property(ParticleSystem)
    FX_Merge_2: ParticleSystem = null;

    // array
    @property([Node])
    dinoLines: Node[] = [];
    @property([Node])
    points_1: Node[] = [];
    @property([Node])
    points_2: Node[] = [];
    @property([Node])
    unitsStep1: Node[] = [];
    @property([Node])
    unitstep2: Node[] = [];
    @property([Node])
    dinoLevels: Node[] = [];
    @property([Node])
    dinosStep1: Node[] = [];
    @property([Node])
    dinosStep2: Node[] = [];


    // Characters
    @property(Node)
    Boss: Node = null;
    @property(Node)
    MainCharacter_1: Node = null;
    @property(Node)
    targetNode: Node = null;
    @property(Node)
    MainCharacter_2: Node = null;


    // Text
    @property(Node)
    Text_Tap: Node = null;
    @property(Node)
    Fail: Node = null;

    isSaveOnceFlag: boolean = false;

    protected start(): void {
        this.init();
    }


    public init(): void {
        this.Text_Tap.active = false;
        this.Fail.active = false;
        this.hint_2.active = false;
        this.setupForUtils();
        this.saveUnitsInitPos();
      }


      private setupForUtils(): void {
        // step 1
        Constants.isMergeStep1States = Constants.isMergeStep1States.map(() => false);
        let pointsCopy = [...this.points_1];
        Constants.points_1 = pointsCopy;
        Constants.point = this.point;
    
        this.dinoLines.forEach(line => line.active = false);
        let copyDinoLines = [...this.dinoLines];
        Constants.dino_lines = copyDinoLines;
        // --------------------------------


        // step 2
        Constants.isMergeStep2States = Constants.isMergeStep2States.map(() => false);
        let pointsCopy2 = [...this.points_2];
        Constants.points_2 = pointsCopy2;

        this.dinoLines.forEach(line => line.active = false);
        let copyDinoLines_2 = this.dinoLines.splice(8, 6);
        Constants.dino_lines_2 = copyDinoLines_2;
      }


      private saveUnitsInitPos(): void {
        if(this.isSaveOnceFlag) {
            return;
        }

        // Other Units
        this.isSaveOnceFlag = true;
        let dinosStep1Pos: Vec3[] = [];
        let dinosStep2Pos: Vec3[] = [];
        let unitsStep1Pos: Vec3[] = [];
        let unitsStep2Pos: Vec3[] = [];
        for (let i = 0; i < this.unitsStep1.length; i++) {
            let unitPos = this.unitsStep1[i].getPosition();
            let dino = this.unitsStep1[i].getChildByName("Comp");
            let pos = dino.getPosition();
            dinosStep1Pos.push(pos);
            unitsStep1Pos.push(unitPos);
        };
        for (let i = 0; i < this.unitstep2.length; i++) {
            let unitPos = this.unitstep2[i].getPosition();
            let dino = this.unitstep2[i].getChildByName("Comp");
            let pos = dino.getPosition();
            dinosStep2Pos.push(pos);
            unitsStep2Pos.push(unitPos);
        };
        Constants.dinosStep1InitPos = dinosStep1Pos;
        Constants.dinosStep2InitPos = dinosStep2Pos;
        Constants.unitsStep1InitPos = unitsStep1Pos;
        Constants.unitsStep2InitPos = unitsStep2Pos;
        // --------------------------------------------


      }
}

