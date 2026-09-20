// const missingNumber = (nums) =>{

//     const n = nums.length;

//     const totalSum = (n*(n+1)) / 2

//     const arraySum = nums.reduce((a,b)=>a+b,0);

//     return totalSum - arraySum;

// }


// console.log(missingNumber([0,2,3,4,5,6]))



function subsets(nums){

    const result =[];

    function backTrack(start,current){

        result.push([...current]);

        for(let i = start; i < nums.length; i++){

            current.push(nums[i]);

            backTrack(i+1,current);

            current.pop()

        }

    }

    backTrack(0,[])

    return result;

}