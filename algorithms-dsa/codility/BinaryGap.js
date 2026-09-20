// 7. Binary Gap
// Problem:
// Find the longest sequence of consecutive zeros surrounded by ones in the binary representation of a number.

// Example:
// Input: 9 (binary 1001)
// Output: 2

// Solution Idea:

// Convert the number to binary and use string manipulation.
// Time Complexity: O(log n).

function binaryGap(N) {
    const binary = N.toString(2);
    const gaps = binary.split('1').slice(1, -1);
    return gaps.length > 0 ? Math.max(...gaps.map(gap => gap.length)) : 0;
}



