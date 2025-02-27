// if an array is sorted in an ascending
function isSorted(arr){

    for(let i = 1; i < arr.length; i++){

        if(arr[i] < arr[i-1]) return false;

    }

    return true;
}

console.log(isSorted([1,2,3,4,5])) //TRUE

console.log(isSorted([1,3,2])) //FALSE