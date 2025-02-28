// Understanding how objects inherit properties in JavaScript.
function Person(name){

    this.name = name;

}


Person.prototype.sayHello = function(){

    console.log(`Hello, I am ${this.name}`);

}

const user1 = new Person("Alice");

user1.sayHello();