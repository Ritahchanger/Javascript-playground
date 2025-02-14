function search(nums,target){

    let left = 0;

    right = nums.length - 1;

    while(left <= right){

        let mid = Math.floor(left + (right - left) / 2);

        if(nums[mid] === target) return mid;


        if(nums[left] <= nums[mid] ){
            

        }

    }

}