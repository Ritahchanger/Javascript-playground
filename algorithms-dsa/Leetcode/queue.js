class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items.shift();
    }
    peek(){
        if(this.isEmpty){
            return "Queue is empty";
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items=[];
    }
    print(){
        console.log(this.items.toString());
    }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.size())

queue.print();

console.log(queue.dequeue())

queue.print()
