// Reversing and integer


const reverse = (x) =>{

    
    const maximum_integer = (2**31)-1;

    const minimum_integer = -(2**31);


    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    if( x < 0 ) reversed = -reversed;

    if(reversed < minimum_integer || reversed > maximum_integer) return 0;

    return reversed;


}

console.log(reverse(-123))
console.log(reverse(123))
console.log(reverse(120))
console.log(reverse(0))



(function(x){
    return (function(y){
        console.log(x)
    })()
})(40)