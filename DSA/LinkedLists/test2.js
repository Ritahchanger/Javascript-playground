const missingNumber = (nums) =>{

    const n = nums.length;

    const totalSum = (n*(n+1)) / 2

    const arraySum = nums.reduce((a,b)=>a+b,0);

    return totalSum - arraySum;

}


console.log(missingNumber([0,2,3,4,5,6]))