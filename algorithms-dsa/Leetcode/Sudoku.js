// 4. Valid Sudoku
// Problem: Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.


function isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') continue;
        const val = board[i][j];
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  
        if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
          return false;
        }
  
        rows[i].add(val);
        cols[j].add(val);
        boxes[boxIndex].add(val);
      }
    }
  
    return true;
  }
  