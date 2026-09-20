// Implementing stacks using queues
//Answer: Push elements into the first queue, then during pop operation, transfer all elements except the last to the second queue, then return the last element
class StackWithQueues{

    constructor(){

        this.queue1 = [];

        this.queue2 = [];

    }

    push(value){
        this.queue1.push(value);
    }
    pop(){
        if(!this.queue1.length) return null;

        while(this.queue1.length > 1){

            this.queue2.push(this.queue1.shift());

        }

        const popped = this.queue1.shift();

        [this.queue1, this.queue2] = [this.queue2,this.queue1]

        return popped;

    }

}