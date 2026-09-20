function maxSubArraySum(arr,k){

    let maxSum = 0, windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for(let i=k; i<arr.length; i++){

        windowSum+=arr[i]-arr[i - k];

        maxSum = Math.max(maxSum,windowSum);

    }

    return maxSum;
}

console.log(maxSubArraySum([2,1,5,1,3,2],3))