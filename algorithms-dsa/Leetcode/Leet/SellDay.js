// Best Time to Buy and Sell Stock

// Imagine you're at a store selling toys. Each day, the price of a toy goes up or down. You want to buy the toy when it's cheap and sell it when it's more expensive to make money!

// Here's the challenge:

// You can only buy once and you can only sell once.
// You have to buy before you sell, which means you can't just grab a toy today and sell it the day before.
// How do we maximize our profit?
// Think of it like looking at a line graph of prices. You want to buy at the lowest point and sell at the highest point that comes after.
// If there is no way to make a profit (like prices are always going down), you just don’t do any transaction!
// Example 1:
// Let’s say the prices are:
// [7, 1, 5, 3, 6, 4]

// On day 1, the price is 7. Too expensive!
// On day 2, the price is 1. Wow, this is cheap! So we could buy here.
// On day 3, the price is 5. We could sell here and make a profit of 5 - 1 = 4.
// On day 4, the price is 3. Still, we can't sell here for more money than 1.
// On day 5, the price is 6. Now we can sell for a profit of 6 - 1 = 5!
// So the best day to buy is day 2 (price = 1), and the best day to sell is day 5 (price = 6), giving you a profit of 5.

// Example 2:
// For prices:
// [7, 6, 4, 3, 1]

// The prices are only going down, so you can never sell for more than you bought.
// In this case, the best thing is to not buy at all since you can’t make any money.
// Profit = 0 because there's no way to sell for a higher price than you bought!
// Summary:
// You want to find the lowest price before the highest price that comes after it.
// If prices keep going down, you don’t buy or sell, and your profit is 0.


function maxProfit(prices) {
    let minPrice = Infinity; // start with a very high price
    let maxProfit = 0; // we haven't made any profit yet
  
    for (let i = 0; i < prices.length; i++) {
      // update the minPrice to the smallest price we've seen
      minPrice = Math.min(minPrice, prices[i]);
      
      // calculate the potential profit for this day
      const profit = prices[i] - minPrice;
      
      // keep track of the maximum profit we've seen
      maxProfit = Math.max(maxProfit, profit);
    }
  
    return maxProfit;
  }
  