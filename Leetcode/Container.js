// 1. Container With Most Water
// Problem: You are given an integer array height where height[i] represents the height of a vertical line at position i. Find two lines that together with the x-axis form a container, such that the container contains the most water.

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
  
    while (left < right) {
      const minHeight = Math.min(height[left], height[right]);
      maxArea = Math.max(maxArea, minHeight * (right - left));
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
  }
  