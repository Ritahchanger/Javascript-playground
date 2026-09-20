// Given a sorted array and a target sum, find two numbers in the array that add up to the target sum.


function findPairWithSum(arr,target){

    let left = 0;

    let right = arr.length - 1;

    while(left < right ){

        const sum = arr[left] + arr[right];

        if(sum === target){

            return [arr[left],arr[right]];

        }else if(sum < target){

            left++;

        }else{

            right --;
        }

    }

    return null;

}

console.log(findPairWithSum([1,2,3,4,5,6,7,8,9],10))