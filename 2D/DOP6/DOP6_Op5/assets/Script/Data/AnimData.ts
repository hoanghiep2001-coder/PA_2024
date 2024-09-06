
const { ccclass, property } = cc._decorator;

enum Chure {
    Level01_A = "Level/Level01_A",
    Level01_C = "Level/Level01_C",
}


enum Codau {
    Level01_A = "Level/Level01_A",
    Level01_B = "Level/Level01_B",
    Level01_C = "Level/Level01_C",
}


enum NycChuRe {
    Level01_A = "Level/Level01_A",
    Level01_B = "Level/Level01_B",
    Level01_C = "Level/Level01_C",
    Level02_A = "Level/Level02_A",
    Level02_B = "Level/Level02_B",
    Level03_A = "Level/Level03_A",
    Level03_B = "Level/Level03_B",
    Level03_C = "Level/Level03_C",
}


enum Door {
    Level01_A = "Level01_A",
    Level01_B = "Level01_B",
    Level01_C = "Level01_C",
}


enum Boy {
    Level02_A = "Level/Level02_A",
    Level02_B = "Level/Level02_B",
    Level03_A = "Level/Level03_A",
    Level03_B = "Level/Level03_B",
    Level03_C = "Level/Level03_C",
}


enum Girl {
    Level02_A = "Level/Level02_A",
    Level02_B = "Level/Level02_B",
}


export class AnimData {
    static Chure: typeof Chure = Chure;

    static Codau: typeof Codau = Codau;

    static NycChuRe: typeof NycChuRe = NycChuRe;

    static Door: typeof Door = Door;

    static Boy: typeof Boy = Boy;
    
    static Girl: typeof Girl = Girl;

}
