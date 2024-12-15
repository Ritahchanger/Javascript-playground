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
