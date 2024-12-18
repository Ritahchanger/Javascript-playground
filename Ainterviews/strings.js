// function reverseString(str){

//     let reversed = "";

//     for(let i = str.length - 1; i>=0; i--){

//         reversed +=str[i];

//     }
//     return reversed;

// }

// function longestUniqueSubstring(str){

//     let map = new Map();

//     let start=0, maxLength = 0;

//     for (let end=0; end < str.length; end++){
//         if(map.has(str[end])){
//             start=Math.max(start,map.get(str[end])+1);
//         }
//         map.set(str[end],end)
//         maxLength = Math.max(maxLength,end - start + 1)
//     }
//     return maxLength;

// }

// console.log(longestUniqueSubstring('aaabbsbdhffjksn'));

function nonRepeatingChar(s){

    for(let i = 0; i < s.length ; i++){

        const char = s[i];

        if(s.indexOf(char) === s.lastIndexOf(char) ){

            return char

        }

    }

    return null;

}

console.log(nonRepeatingChar('swiss'));