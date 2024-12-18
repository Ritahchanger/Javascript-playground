function longestCommonSequence(text1,text2){

    function lcsHelper(i,j){

        if(i === text1.length || j === text2.length ){

            return 0;

        }

        if(text1[i] == text2[j]){

            return 1 + lcsHelper(i+1,j+1);

        }

        return Math.max(lcsHelper(i + 1,j),lcsHelper(i,j+1));

    }

    return lcsHelper(0,0);

}

const text1 = "abcde";

const text2 = "ace"


console.log(longestCommonSequence(text1,text2))



// Reversing a string

function reverseString(str){

    return str.split("").reverse().join("")

}

console.log(reverseString("hello"))