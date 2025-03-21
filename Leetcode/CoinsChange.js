// 8. Dynamic Programming: Coin Change
// Problem: You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. You want to compute the fewest number of coins needed to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.


function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  

  // Coins problem

function maxCoinsGreedy(coins,amount){

  coins.sort((a,b)=>b-a); //sort coins in descending order

  let count = 0;


  for(let coin of coins){

      if(amount >= coin){

          const numCoins = Math.floor(amount / coin);

          count += numCoins;

          amount-=numCoins * coin

      }

  }
  return amount === 0 ? count : -1;

}

const coins = [1, 2, 5];
const amount = 11;
console.log(`Maximum number of coins to make ${amount}:`, maxCoinsGreedy(coins, amount));