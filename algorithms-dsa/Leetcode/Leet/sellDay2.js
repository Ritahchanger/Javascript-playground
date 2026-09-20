// Best Time to Buy and Sell Stock II

// Imagine This:
// You have a toy that gets sold every day. Each day, the price of that toy changes, and you can buy it and sell it on the same day if you want.

// Your goal is to make the most money by buying and selling toys. But here’s the trick: you can only buy one toy at a time, and you can only sell it if you own it. You can buy a toy, sell it right away, and then maybe buy it again the next day!

// Example 1:
// Imagine you have these prices for the toy every day:
// [7, 1, 5, 3, 6, 4]

// You want to buy when it's cheap and sell when it's more expensive. Here's the best way:

// Day 1: The price is 7. It’s too expensive, so we don’t buy.
// Day 2: The price is 1. This is cheap, so we buy it.
// Day 3: The price is 5. Now, we sell the toy for 5 - 1 = 4 profit!
// Day 4: The price is 3. It’s cheaper again, so we buy again.
// Day 5: The price is 6. We sell it for 6 - 3 = 3 profit!
// Day 6: The price is 4. No need to buy because we already made our money.
// Total profit = 4 + 3 = 7!

// Example 2:
// Now, imagine you have prices:
// [1, 2, 3, 4, 5]

// Day 1: Price = 1. This is cheap, so buy.
// Day 2 to Day 5: Prices are going up every day! We sell at the end for a profit of 5 - 1 = 4.
// So your total profit is 4!

// Example 3:
// If the prices are going down:
// [7, 6, 4, 3, 1]

// No matter what, the price keeps getting cheaper. You don’t want to buy because you can’t make any profit.
// So, the best decision is to not buy anything. The total profit is 0.


function maxProfit(prices) {
    let profit = 0; // We start with no profit
    
    // Loop through the prices and check if we can make money
    for (let i = 1; i < prices.length; i++) {
      // If the price is going up, we can make a profit
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1]; // Add the profit from buying and selling
      }
    }
    
    return profit; // Return the total profit
  }
  