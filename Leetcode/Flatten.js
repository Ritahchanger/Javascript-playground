// Flatten an array that contains nested arrays

function flattenArray(arr){

    return arr.flat(Infinity);

}





console.log(flattenArray([1,[2,[3,4],6],7],[1,2,3,4]))