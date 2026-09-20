interface Calculator{
    add(a:number,b:number):number;
}
const calculator:Calculator={
    add(a,b){
        return a+b;
    }
}
console.log(calculator.add(5,10))