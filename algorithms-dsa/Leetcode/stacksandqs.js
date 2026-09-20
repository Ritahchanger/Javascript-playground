class StackUsingQueues{
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }
    push(x){
        this.queue1.push(x);
    }
    pop(){

        if(this.queue1.length === 0) return null;

        while(this.queue1.length > 1){

            this.queue2.push(this.queue1.shift())

        }

        let popped = this.queue1.shift();

        [this.queue1,this.queue2] = [this.queue2,this.queue1]

        return popped;

    }
    top(){
        if(this.queue1.length === 0) return null;

        return this.queue1[this.queue1.length - 1];
    }

    empty(){

        return this.queue1.length === 0;

    }
}
