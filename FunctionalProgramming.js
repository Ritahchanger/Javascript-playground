const add = (x,y) => x+y;

const multiply = (x,y) => x * y;

const calculate =(x,y) => add(x,multiply(x,y));

console.log(calculate(2,3))