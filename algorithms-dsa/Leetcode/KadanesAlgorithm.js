// 🧩 Find the Biggest Treasure in a Line (Kadane’s Algorithm)
// Imagine you’re walking down a line of treasure chests. Some chests have gold (positive numbers), some are empty, and some are cursed (negative numbers). You want to collect as much gold as possible, but if you open a cursed chest, you lose gold.

// Here’s how you do it:

// Start with the first chest.
// If your total gold becomes less than 0, stop collecting and start over from the next chest.
// Keep track of the most gold you’ve collected so far.


function  maxGold(treasures){

    let maxGold = treasures[0];

    let currentGold = treasures[0];

    for(let i = 1; i < treasures.length;i++){

        currentGold = Math.max(treasures[i],currentGold + treasures[i] )

        maxGold = Math.max(maxGold, currentGold);

    }


    return maxGold

}

console.log(maxGold([1, 2, 3, -2, 5])) //EXPECTED 9