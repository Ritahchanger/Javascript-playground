// Given an array of integers and a target, return the indices of the two numbers that add up to the target.


function solution(numbers, k) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                return [i, j];
            }
        }
    }
    return -1;
}




function solution2(numbers,k){

    const map = new Map();

    for(let i = 0; i < numbers.length; i++){

        const complement = k - numbers[i];

        if(map.has(complement)){

            return [map.get(complement), i];

        }

        map.set(numbers[i], i)

    }

    return -1;

}








console.log(solution([2, 7, 11, 15], 9))
console.log(solution2([2, 7, 11, 15], 9))

