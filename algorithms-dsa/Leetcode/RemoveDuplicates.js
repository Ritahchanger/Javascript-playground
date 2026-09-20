function removeDuplicates(arr){

    return [...new Set(arr)];

}

console.log(removeDuplicates([1,2,3,4,5,1,2,3,4,12,3,4,5,6,7,11,12,13]))





function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let index = 1;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[index] = nums[i];
        index++;
      }
    }
  
    return index;
  }
  
