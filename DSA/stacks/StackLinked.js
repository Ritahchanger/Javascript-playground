// implementing a stack using linked LISTS
// stacks  use nodes to store data
// A stack uses LIFO(last in first out)
class Node{

    constructor(value){

        this.value = value;

        this.next = null

    }

}

class Stack{

    constructor(){

        this.top = null;

        this.size = 0;

    }

    push(value){
        
        const newNode = new Node(value);

        if(this.top){
            newNode.next = this.top;
        }
        this.top = newNode;
        this.size++;
    }

    pop(){

        if(!this.top){
            console.log("Stack is empty");
            return null;
        }
        
        const poppedValue = this.top.value;

        this.top = this.top.next;

        this.size--;

        return poppedValue;

    }
    peek(){

        return this.top ? this.top.value : null;

    }

    isEmpty(){

        return this.size === 0;

    }



}