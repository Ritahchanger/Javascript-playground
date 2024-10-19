// Given an array of integers return indices of the two numbers such that they add up to a specific target

// You may assume that each input would have exactly one solution, and you may not use the same element twice

var twoSum = function(nums,target){

    const numsLength = nums.length

    for(let i = 0; i<numsLength; i++){

        for(let j=0; j<numsLength;j++){

            if(nums[i] + nums[j] === target ){

                return [i,j]

            }
           

        }

    }

    console.error('Not two sum number')

}

console.log(twoSum([2,7,11,17],9))