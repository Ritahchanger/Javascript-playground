function lengthOflongestSubstring(s){

    let set = [];

    let maxLength = 0;

    for(let right = 0; right < s.length; right++){

        if(set.includes(s[right])){

            while(set[0] !== s[right]){
                set.shift();
            }
            set.shift();
        }

        set.push(s[right]);

        maxLength = Math.max(maxLength,set.length)

    }

    return maxLength

}


function version2(str){

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

console.log(version2("ababaacccbddefttttyui"))