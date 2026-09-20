class Stack{

    constructor(){
        this.items = []
    }
    push(element){

        this.items.push(element);

    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = []
    }
    print(){
        console.log(this.items.toString());
    }
}

let stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()