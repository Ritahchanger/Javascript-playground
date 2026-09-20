function twoSum(nums,target){

  let map = new Map();

  for(let i; i < nums.length; i++){

    let complement = target - nums[i];

    if(map.has(complement)){

      return [map.get((complement),i)];

    }

    map.set(nums[i],i)

  }

}