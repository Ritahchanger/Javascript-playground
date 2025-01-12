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