// 2. Frog River One
// Problem:
// A frog wants to jump across a river. The river is divided into positions 1...X. Given an array A where A[K] represents a leaf falling at position A[K], find the earliest time when all positions are covered.

// Example:
// Input: X = 5, A = [1, 3, 1, 4, 2, 3, 5, 4]
// Output: 6

// Solution Idea:

// Use a set to track positions where leaves have fallen.
// If the size of the set equals X, return the index.
// Time Complexity: O(n).


function frogRiverOne(X,A){

    const positions = new Set();

    for(let i=0; i<A.length; i++){

        positions.add(A[i]);

        if(positions.size === X){

            return i

        }

    }

    return -1;

}