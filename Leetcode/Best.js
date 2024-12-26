// Best Time to Buy and Sell Stock
// Problem: You are given an array where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy and a single day to sell. You cannot sell before you buy.

function maxProfit(prices){

    let minPrice = Infinity;

    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;

}