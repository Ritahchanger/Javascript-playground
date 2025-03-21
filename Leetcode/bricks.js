// We need to redistribute bricks across N boxes so that each box contains exactly 10 bricks. We can only move bricks one step at a time to adjacent boxes. The goal is to determine the minimum number of moves required or return -1 if it's impossible.
function solution(A){


    let N = A.length;

    let bricksTotal = A.reduce((acc,cur)=>acc + cur, 0);

    if(bricksTotal !== (N * 10)) return - 1;

    let balance = 0;

    let moves = 0;

    for(let i = 0; i < N; i++){

        balance += A[i] - 10;

        moves += Math.abs(balance);

    }


    return moves;

}


console.log(solution([7, 15, 10, 8])); // Output: 7
console.log(solution([11, 10, 8, 12, 8, 10, 11])); // Output: 6
console.log(solution([7, 14, 10])); // Output: -1
