// first non repeating character in a string

function firstNonRepeatingChar(str){

    for(let i = 0; i<str.length;i++){


        const char = str[i]

        if(str.indexOf(char) === str.lastIndexOf(char)){

            return char
        }

    }

    return null

}


console.log(firstNonRepeatingChar("swiss"))
console.log(firstNonRepeatingChar("aabbcc"))