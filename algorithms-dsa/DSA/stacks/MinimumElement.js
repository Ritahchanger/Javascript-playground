// Question, how do you find the minimun element in a stack in constant time?
// Answer: Use auxiliary stack to store the minimum value at each step
class MinStack{

    constructor(){

        this.stack = [];

        this.minStack = [];
    }

    push(value){

        this.stack.push(value);

    }
}