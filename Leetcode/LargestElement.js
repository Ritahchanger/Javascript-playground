// find the kth largest element in an unsortted array
// Use min heap or quick select

function findKthLargest(nums,k){

    nums.sort((a,b)=>b-a);

    return nums[k-1];

}

// Time complexity O(nlogn)
// Space complexity O[k-1];