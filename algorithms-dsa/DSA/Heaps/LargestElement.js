function findKthLargest(nums,k){

    nums.sort((a,b) => b - a); //Arrange in Descending

    return nums[k - 1];

}


const nums = [5, 6,8,5,1,6,7,9,1,11,12]

console.log(nums.sort((a,b)=>b-a))

console.log(Math.max())

console.log(findKthLargest(nums,4))

