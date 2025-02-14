// Sure! Here's how you can solve the problem in JavaScript, explained step by step as simply as possible.

// Problem Recap:
// You need to check if a given string is a palindrome, but with two rules:

// Ignore case (so A and a are the same).
// Remove all non-alphanumeric characters (things like spaces, punctuation, and symbols).
// A palindrome is a word or phrase that reads the same forward and backward (after ignoring the case and non-alphanumeric characters).

// Solution in JavaScript:

function isPalindrome(s){


    let cleanedString = ""


    for(let i=0; i < s.length; i++){

        const char = s[i].toLowerCase();
    
         // Check if the character is alphanumeric (letter or number)
        if(/[a-z0-9]/.test(char)){

            cleanedString+=char;

        }

    }

    return cleanedString === cleanedString.split('').reverse().join('');

}

// version 2

let str = "abcdababaabaacc";
let maxLength = 0;
let longestPalindrome = "";

function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            longestPalindrome = str.substring(left, right + 1);
        }
        left--;
        right++;
    }
}
for (let i = 0; i < str.length; i++) {
 
    expandAroundCenter(i, i);
   
    expandAroundCenter(i, i + 1);
}

console.log("Longest Palindrome:", longestPalindrome);
console.log("Length:", maxLength);