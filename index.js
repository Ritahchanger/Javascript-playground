function factorialPermutation(n){

    if( n === 1 || n === 0 ){

        return 1;

    }

    return n * factorialPermutation(n - 1);

}

console.log(factorialPermutation(5))