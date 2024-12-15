function mergeSort(arr){

    if(arr.length <= 1){

        return arr;

    }
    const middle = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0,middle));

    const right = mergeSort(arr.slice(middle));

    return merge(left,right);

}

function merge(left,right){
    
    let result = [];

    let leftIndex = 0;

    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){

        if(left[leftIndex] < right[rightIndex]){

            result.push(left[leftIndex]);

            leftIndex++

        }else{

            result.push(right[rightIndex]);

            rightIndex++;

        }

    }

    return result.concat(left.slice(leftIndex),right.slice(rightIndex));

}

let arr = [10, 7, 8, 9, 1, 5];
console.log("Original array:", arr);

let sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
