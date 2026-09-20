// Find the missing number in an array of size n containing numbers 0 to n. Solution:Use XOR or arithmentic sum
function missingNumber(nums){

    const n = nums.length;

    const total = (n * (n+1) / 2);

    const sum = nums.reduce((acc,curr)=>acc + curr,0);

    return total - sum;

}
// Time complexity 0(n)

// Space complexity 0(1)



// Given an array containing n distinct numbers taken from the range 1 to n + 1, find the one that is missing from the array.

function findMissingNumber(nums) {
    const n = nums.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = nums.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
  }
  