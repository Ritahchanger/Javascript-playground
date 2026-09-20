interface MathOperations{

    add(a:number,b:number):number;

    substract(a:number,b:number):number;

    multiply(a:number,b:number):number;

    divide(a:number,b:number):number;

}

const mathOperations:MathOperations = {
    add(a,b){
        return a+b;
    },
    substract(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        if(b === 0){

            throw new Error("Division by zero")

        }
        return a/b;
    }
}