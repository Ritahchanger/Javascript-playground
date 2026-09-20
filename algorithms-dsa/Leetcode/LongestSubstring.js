// Find the length of the longest substring without repeating characters

function lengthOfLongestSubstring(str){

    let set = new Set();

    let left = 0;


    for(let right = 0; right < str.length; right++){

        while(set.has(str[right])){

            set.delete(str[left++])

        }
        set.add(str[right]);

    }

    const strLength = [...set].length

    return `The substring is ${[...set]} and the string length is ${strLength}`;
}

console.log(lengthOfLongestSubstring("ababaacccbddefttttyui"))