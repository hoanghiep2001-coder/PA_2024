export class CheckerBoolean {

  public static checkTwoBoolean(one, two) {
    return one && two;
  }

  public static checkTrheeBoolean(one, two, trhee) {
    return one && two && trhee;
  }

  public static EqualsTwoObj(one, two) {
    return one === two;
  }

  public static EqualsTrheeObj(one, two, trhee) {
    if (one === two && two === trhee) return true;
    return false;
  }

  public static isValidPlacement(board, row, col, circleType): boolean {
    // Kiểm tra hàng
    if (col >= 2 && board[row][col - 1] === circleType && board[row][col - 2] === circleType) {
        return false;
    }

    // Kiểm tra cột
    if (row >= 2 && board[row - 1][col] === circleType && board[row - 2][col] === circleType) {
        return false;
    }

    return true;
  }
}