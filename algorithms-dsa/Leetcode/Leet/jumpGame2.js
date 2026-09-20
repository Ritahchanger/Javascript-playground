// 45. Jump Game II
// Alright! Let's think of this like a game where you're jumping on stones. You're starting on the first stone, and each stone has a number on it that tells you how far you can jump from that stone.

// Here's the challenge:
// You want to get to the last stone, but you can only jump as far as the number on the stone you’re currently on. You want to figure out the fewest number of jumps you need to reach the last stone.

// Example 1:
// [2, 3, 1, 1, 4]

// You start at the first stone (where the number is 2), so you can jump up to 2 stones ahead.
// Jump from the first stone (index 0) to the second stone (index 1).
// Now you're at the second stone, where the number is 3, meaning you can jump 3 stones ahead. From here, you can jump directly to the last stone (index 4).
// That's only 2 jumps!

// Example 2:
// [2, 3, 0, 1, 4]

// You start at the first stone (where the number is 2), so you can jump up to 2 stones ahead.
// Jump to the second stone (index 1).
// At the second stone, the number is 3, so you can jump 3 stones ahead and go all the way to the last stone.
// That's still only 2 jumps!

// How It Works:
// Every stone tells you how far you can jump from it.
// Your job is to figure out the smallest number of jumps to get to the last stone.
// You can jump anywhere between 0 and the number on the current stone. The goal is to use the fewest jumps.



function jump(nums) {
    let jumps = 0; // Number of jumps taken
    let currentEnd = 0; // The farthest we can reach with the current number of jumps
    let farthest = 0; // The farthest we can reach with the next jump
  
    for (let i = 0; i < nums.length - 1; i++) {
      // Update the farthest point we can reach from this stone
      farthest = Math.max(farthest, i + nums[i]);
      
      // If we reach the end of the range for the current jump
      if (i === currentEnd) {
        jumps++; // Increase the jump count
        currentEnd = farthest; // Update the current end to the farthest point we can reach
        
        // If we can reach the last stone, we're done
        if (currentEnd >= nums.length - 1) {
          break;
        }
      }
    }
  
    return jumps;
  }
  