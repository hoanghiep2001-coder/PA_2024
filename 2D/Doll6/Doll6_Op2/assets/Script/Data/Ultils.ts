import { Constants } from "./constants";

const { ccclass, property } = cc._decorator;


const checkRowForThree = (candiesArr: cc.Node[]) => {

    for (let i = 0; i < 56; i++) { // Duyệt qua mỗi ô trong lưới 8x7
        let rowOfThree = [i, i+1, i+2]; // Xác định một hàng có 3 ô liên tiếp
        const isBlank = candiesArr[i].active;
        let decidedColor = candiesArr[i].name;
        // console.log(Constants.decidedColor);
        // console.log(i);
        
        // Loại trừ các ô cuối cùng của mỗi hàng để không bắt đầu kiểm tra từ chúng
        const notValid = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41, 47, 48, 54, 55];
        if (notValid.includes(i)) continue;
        
        if(rowOfThree.every(index => candiesArr[index].name === decidedColor)) {
            // score += 3; // Tăng điểm cho người chơi
            // scoreDisplay.innerHTML = score; // Cập nhật điểm số trên giao diện
            console.log("Check");
            
            rowOfThree.forEach(index => {
                candiesArr[index].active = false; // Làm trống các ô đã kiểm tra
            });
        }
    }
    
}


const GamePlay = {
    checkRowForThree: checkRowForThree,
    // checkCollideMaggot: checkCollideMaggot
}

export class Ultils {

   static GamePlay: typeof GamePlay = GamePlay;

}