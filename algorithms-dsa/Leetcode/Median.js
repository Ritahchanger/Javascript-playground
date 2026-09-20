// 3. Find Median of Two Sorted Arrays
// Problem: Given two sorted arrays, find the median of the two sorted arrays.


function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0
      ? (merged[mid - 1] + merged[mid]) / 2
      : merged[mid];
  }
  