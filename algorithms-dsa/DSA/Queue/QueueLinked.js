// implementing a queue using LinkedList
// A queue follows a FIFO(First in, First out)
class Node{

    constructor(value){

        this.value = value;

        this.next = null;

    }

}

class Queue{

    constructor(){

        this.front = null;

        this.rear = null;

        this.size = 0;

    }

    enqueue(value){

        const newNode = new Node(value);

        if(this.rear){
            this.rear.next = newNode;
        }
        this.rear = newNode;

        if(!this.front){
            this.front = newNode;
        }
        this.size++;

    }

    dequeue(){

        if(!this.front){
            console.log("Queue is Empty");
            return null;
        }

        const dequeuedValue = this.front.value;

        this.front = this.front.next

        if(!this.front){

            this.rear = null;

        }
        this.size--;

        return dequeuedValue;

    }

    peek(){

        return this.front ? this.front.value : null

    }

    isEmpty(){

        return this.size === 0;

    }

}