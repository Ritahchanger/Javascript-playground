const missingNumber = (nums) =>{

    const n = nums.length;

    const totalSum = (n * (n  + 1)) / 2
    
    const arrSum = nums.reduce((a,b)=>a+b,0);

    return totalSum - arrSum;

}


console.log(missingNumber([0,1,2,3,4,5,7]))