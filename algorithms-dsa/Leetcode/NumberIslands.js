// 6. Number of Islands
// Problem: Given an m x n 2D binary grid grid where 1 represents land and 0 represents water, count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

function numIslands(grid) {
    if (grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
  
    function dfs(i, j) {
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') {
        return;
      }
      grid[i][j] = '0'; // mark as visited
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === '1') {
          count++;
          dfs(i, j);
        }
      }
    }
  
    return count;
  }
  