// class Match3Generator {
//     blockTypes: string[] = ['A', 'B', 'C']; // Các loại block
//     blockCount: number = 3; // Số lần mỗi loại block được xuất hiện trên bảng

//     // Hàm đệ quy để sinh ra tất cả các trường hợp của bảng
//     generateAllBoardCases(): string[][][] {
//         const boards: string[][][] = []; // Lưu trữ các trường hợp

//         // Hàm đệ quy để điền block vào từng ô của bảng
//         const generate = (board: string[][], row: number, col: number, counts: Map<string, number>) => {
//             // Nếu đã đi qua hết bảng, lưu trữ trường hợp và kết thúc đệ quy
//             if (row === 3) {
//                 boards.push(board.map(row => [...row]));
//                 return;
//             }

//             // Duyệt qua từng loại block và gán vào ô hiện tại
//             for (const blockType of this.blockTypes) {
//                 // Nếu loại block này đã xuất hiện đủ số lần cho phép, bỏ qua
//                 if (counts.get(blockType) === 0) continue;

//                 // Gán loại block vào ô hiện tại
//                 board[row][col] = blockType;

//                 // Giảm số lần xuất hiện của loại block này
//                 counts.set(blockType, counts.get(blockType) - 1);

//                 // Di chuyển đến ô tiếp theo (theo thứ tự từ trái qua phải, từ trên xuống dưới)
//                 let nextRow = row;
//                 let nextCol = col + 1;
//                 if (nextCol === 3) {
//                     nextCol = 0;
//                     nextRow++;
//                 }

//                 // Gọi đệ quy cho ô tiếp theo
//                 generate(board, nextRow, nextCol, counts);

//                 // Khôi phục số lần xuất hiện của loại block này
//                 counts.set(blockType, counts.get(blockType) + 1);
//             }
//         };

//         // Bắt đầu đệ quy từ ô đầu tiên (0, 0), với số lần xuất hiện ban đầu là blockCount
//         generate([['', '', ''], ['', '', ''], ['', '', '']], 0, 0, new Map(this.blockTypes.map(type => [type, this.blockCount])));

//         return boards;
//     }
// }

// // Sử dụng lớp Match3Generator để sinh ra tất cả các trường hợp của bảng 3x3
// const generator = new Match3Generator();
// const allBoards = generator.generateAllBoardCases();

// let index = 0;
// // In ra tất cả các trường hợp
// for (const board of allBoards) {
//     index++;
//     cc.log(index)
//     cc.log(board);
// }
