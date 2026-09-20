function binarySearch(arr,target){

    let left = 0;

    let right = arr.length - 1;

    while(left <= right){

        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === target ){

            return mid

        }
        if(arr[mid] > target){

            right = mid - 1

        }
        else{
            left = mid + 1;
        }
    }

    return 'Target not found';

}

let arr = [1,2,3,4,5,6,6,8,9,0,17];


let target = 8;

let result = binarySearch(arr,target);

if(result !== -1){
    console.log(`Element found at index: ${result}`);
}else{
    console.log("Element not found");
}