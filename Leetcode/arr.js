// To solve the "Two Sum II - Input Array Is Sorted" problem efficiently, we can use the two-pointer technique. Since the array is already sorted in non-decreasing order, we can exploit this property to find the two numbers that sum up to the target without needing to check all pairs (which would be inefficient).

// Approach:
// Two Pointer Technique:

// Left pointer: Start from the beginning of the array (left = 0).
// Right pointer: Start from the end of the array (right = numbers.length - 1).
// The idea is to check the sum of the numbers at these two pointers:
// If the sum is equal to the target, return the indices (remember, the problem expects 1-based indices).
// If the sum is less than the target, move the left pointer rightward to increase the sum.
// If the sum is greater than the target, move the right pointer leftward to decrease the sum.
// Why it works:

// Since the array is sorted, you can efficiently narrow down the search space by adjusting the two pointers based on whether the sum is too small or too large.
// The key is that there is exactly one solution, so this method guarantees finding it in linear time, O(n).
// Constraints:

// The solution must use constant extra space, so you cannot use additional arrays or hash maps to store values.
// Solution:



function twoSum(numbers,target){

    let left = 0;

    let right = numbers.length - 1;

    while(left < right){

        const sum = numbers[left] + numbers[right];

        if(sum == target){

            return [left+1, right+1] ;

        }else if(sum < target){ 

            left++;

        }else{

            right--

        }

    }

}