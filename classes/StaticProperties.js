class Counter{

    static count = 0;

    increment(){

        Counter.count++

    }
    static getCount(){

        return Counter.count;

    }

}

const counter1 = new Counter();

counter1.increment();

console.log(Counter.getCount());