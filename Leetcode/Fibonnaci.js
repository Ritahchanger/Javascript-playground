// find the nth number of fibonnaci series using dynamic programming

function fibonnaci(n){

    if(n<=1) return n;

    let prev1 = 1, prev2 = 0;

    for(let i = 2; i <=n; i++){

        let current = prev1 + prev2;

        prev2 = prev1;

        prev1 = current

    }

    return prev1

}

console.log(fibonnaci(6));

// Using recursion

function fibonnaciR(n){

    if(n <= 1) return n;

    return fibonnaci(n-1) + fibonnaci(n-2)

}


console.log(fibonnaciR(6))