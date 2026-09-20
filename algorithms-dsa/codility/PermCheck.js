// 4. PermCheck
// Problem:
// Check whether an array is a permutation of integers 1..N.

// Example:
// Input: [4, 1, 3, 2]
// Output: 1 (true, it's a permutation)
// Input: [4, 1, 3]
// Output: 0 (false, missing 2)

// Solution Idea:

// Use a set or summation comparison to check if the array contains exactly all numbers from 1...N.
// Time Complexity: O(n).
// javascript
// Copy code



function permCheck(A){

    const n = A.length;

    const set = new Set(A);

    let max = -Infinity;

    for(let i=0; i < A.length; i++){

        if(A[i] > max ){

            max = A[i];

        }

        if(set.size === n && max === n){

            return 1;

        }

        else{

            return 0;

        }

    }


}


function permCheck(A) {
    
    const n = A.length; 
    
    
    const set = new Set(A);
    
   
    return set.size === n && Math.max(...A) === n ? 1 : 0;
}
