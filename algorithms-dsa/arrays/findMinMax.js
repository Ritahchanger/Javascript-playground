function findMinMax(arr){

    let min = Math.min(...arr);

    let max = Math.max(...arr);

    return { min, max };

}

console.log(findMinMax([3,5,1,8,2]));


