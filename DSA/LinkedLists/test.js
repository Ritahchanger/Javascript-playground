function findMissingNumber(arr){

    const n = arr.length + 1;

    const expectedSum = (n * (n+1)) / 2;

    const actualSum = arr.reduce((sum,num)=>sum+num,0);

    return expectedSum - actualSum;

}

const numbers = [1,2,3,4,5,6,7,9];

console.log(findMissingNumber(numbers))