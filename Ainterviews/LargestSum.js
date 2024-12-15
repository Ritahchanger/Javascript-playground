// Given a list of integers, find the largest sum of non-adjacent numbers. For example, for the list [2, 4, 6, 2, 5], the largest sum is 11 (i.e., 2 + 6 + 5).

// House robber problem

function largestSum(nums){

    let prevMax = 0;

    let currMax = 0;

    for(let num of nums){

        const newMax = Math.max(currMax,prevMax+num);

        prevMax = currMax;

        currMax = newMax;

    }

    return currMax

}

function largestSum(nums) {
    let prevMax = 0;
    let currMax = 0;
  
    nums.forEach(num => {
      const newMax = Math.max(currMax, prevMax + num);
      prevMax = currMax;
      currMax = newMax;
    });
  
    return currMax;
  }
  
  console.log(largestSum([2, 4, 6, 2, 5])); // Output: 11
  

  function largestSum(nums) {
    return nums.reduce(
      ([prevMax, currMax], num) => [currMax, Math.max(currMax, prevMax + num)],
      [0, 0]
    )[1];
  }
  
  console.log(largestSum([2, 4, 6, 2, 5])); // Output: 11
  