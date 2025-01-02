// 5. Tape Equilibrium
// Problem:
// Split an array A into two parts, P and N - P, to minimize the absolute difference between their sums.

// Example:
// Input: A = [3, 1, 2, 4, 3]
// Output: 1 (split at P = 3 → [3, 1, 2] and [4, 3]).

// Solution Idea:

// Use a prefix sum approach to calculate the difference in O(n).
// Time Complexity: O(n).


function tapeEquilibrium(A) {
    const totalSum = A.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    let minDiff = Infinity;

    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i];
        const rightSum = totalSum - leftSum;
        const diff = Math.abs(leftSum - rightSum);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}
