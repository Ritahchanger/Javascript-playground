// Given a list of integers, find the largest sum of non-adjacent numbers. For example, for the list [2, 4, 6, 2, 5], the largest sum is 13 (i.e., 2 + 6 + 5).

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


  