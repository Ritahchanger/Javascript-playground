// 1. Missing Integer
// Problem:
// Find the smallest positive integer (greater than 0) that does not occur in the array.

// Example:
// Input: [1, 3, 6, 4, 1, 2]
// Output: 5


function missingInteger(A){

    const seen = new Set(A);

    let smallest = 1;

    while(seen.has(smallest)){

        smallest++;

    }
    return smallest

}

console.log(missingInteger([2,4,5,6,7,8]))