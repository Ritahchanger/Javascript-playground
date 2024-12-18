// Find the missing number in an array of size n containing numbers 0 to n. Solution:Use XOR or arithmentic sum
function missingNumber(nums){

    const n = nums.length;

    const total = (n * (n+1) / 2);

    const sum = nums.reduce((acc,curr)=>acc + curr,0);

    return total - sum;

}
// Time complexity 0(n)

// Space complexity 0(1)