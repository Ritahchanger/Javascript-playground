// 🌀 Walk Around the Playground (Spiral Matrix)
// You’re walking around a rectangular playground, starting from the top-left corner, and you need to walk in a spiral. First, you walk right, then down, then left, then up, and repeat until the whole playground is covered.

// Steps to Solve:
// Keep walking in one direction (e.g., right).
// When you hit the edge or a visited spot, turn to the next direction.
// Keep doing this until you’ve visited every spot.
// Code:

function spiralPlayground(playground) {
  let result = [];
  let top = 0,
    bottom = playground.length - 1;
  let left = 0,
    right = playground[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(playground[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) result.push(playground[i][right]);
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(playground[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(playground[i][left]);
      left++;
    }
  }

  return result;
}

console.log(
  spiralPlayground([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);


