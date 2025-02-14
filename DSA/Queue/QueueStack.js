// Implementing a queue using stacks
// Use one stack for dequeue then another for enqueue
class QueueWithStacks{

    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if(!this.stack2.length){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

}