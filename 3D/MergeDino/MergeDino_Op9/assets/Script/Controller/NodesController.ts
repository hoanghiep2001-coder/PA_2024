
import { _decorator, Camera, Component, Node, ParticleSystem } from 'cc';
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


    // touch area
    @property(Node)
    point: Node = null;
    @property(Node)
    hideMask: Node = null;


    // FX
    @property(ParticleSystem)
    FX_Merge: ParticleSystem = null;


    // array
    @property([Node])
    dinoLines: Node[] = [];
    @property([Node])
    points_1: Node[] = [];
    @property([Node])
    dinosStep1: Node[] = [];
    @property([Node])
    dinoLevels: Node[] = [];

    // Characters
    @property(Node)
    Boss: Node = null;
    @property(Node)
    MainCharacter_1: Node = null;


    protected start(): void {
        this.init();
    }


    public init(): void {
        Constants.isMergeStep1States = Constants.isMergeStep1States.map(() => false);
        let pointsCopy = [...this.points_1];
        Constants.points_1 = pointsCopy;
        Constants.point = this.point;
    
        this.dinoLines.forEach(line => line.active = false);
        let copyDinoLines = [...this.dinoLines];
        Constants.dino_lines = copyDinoLines;
      }
}

