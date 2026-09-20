// 55. Jump Game
// Alright! Let's imagine you're playing a game where you have a long row of stepping stones (like a path made of blocks), and you're standing on the first stone. Each stone tells you how far you can jump from it. Your goal is to see if you can get to the last stone.

// Here's how we play the game:
// You start on the first stone (the first number in the list).
// Each number on the stone tells you how many stones you can jump forward.
// If the number is big, it means you can jump far; if it's small, you can't jump far.
// You need to figure out if it's possible to reach the last stone by jumping along the path.
// Example 1:
// Let's take this path of stones:

// [2, 3, 1, 1, 4]

// You start at the first stone (where the number is 2).
// Jump 2 steps forward: You can go to the second stone (index 1).
// Now you're at the second stone, which has a 3 on it.
// Jump 3 steps forward: You can reach the last stone (index 4)!
// Since you made it to the last stone, the answer is True!

// Example 2:
// Now, let's try this path:

// [3, 2, 1, 0, 4]

// You start at the first stone (where the number is 3).
// Jump 3 steps forward: You land on the fourth stone (index 3).
// But on the fourth stone, the number is 0. This means you can't jump any further from here.
// So, you can't reach the last stone, and the answer is False.

// How It Works:
// You need to jump as far as you can from each stone.
// If you reach a stone that says you can't jump anymore (like 0), and you're not on the last stone, it means you're stuck and can't get to the end.

function canJump(nums){

    let maxJump = 0;

    for(let i = 0; i < nums.length; i++){

        if(i > maxJump){

            return false;

        }

        maxJump = Math.max(maxJump, i + nums[i]);

        if(maxJump >= nums.length - 1){
            
            return true;

        }
    }

    return false;
}