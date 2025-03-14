function isPalindrome(str){

    let reversed = str.split('').reverse().join('');

    return str === reversed;

}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))

function countVowels(str){

    let vowels = "aeiouAEIOU";

    let count = 0;

    for(let car of str){

        if(vowels.includes(car)){
            count++;
        }

    }

    return count;

}

console.log(countVowels("hello, world"));

function howLongArevowelsRepeated(str){

    let vowels = "aeiouAEIOU";

    if(str.length === 0) return -1;

    const map = new Map();

    for(let car of str){

        if(vowels.includes(car)){

            map.set(car, map.has(car) ? map.get(car) + 1 : 1 )

        }

    }

    for(let [vowel,count] of map){

        console.log(`${vowel} : ${count}`)

    }

}
howLongArevowelsRepeated("hello world, how are you?")