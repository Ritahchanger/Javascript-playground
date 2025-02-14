// Given a string, write a function that returns the first non-repeating character. If there is no non-repeating character, return null.
function firstNonRepeating(str){

    const charCount = {};

    for(let i=0; i<str.length;i++){

        charCount[str[i]] = (charCount[str[i]] || 0 ) + 1;

    }
    for(let i=0; i< str.length; i++){

        if(charCount[str[i]] === 1){

            return str[i];

        }

    }

    return null;

}

console.log(firstNonRepeating("swiss"));