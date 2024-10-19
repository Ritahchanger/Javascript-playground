const factorialOf = (n) =>{

    if(n <= 2){

        return 1

    }
    return `The factorial of ${n} is ${n*factorialOf(n-1)}` 

}


console.log(factorialOf(6))