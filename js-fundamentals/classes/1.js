class Person{

    constructor(name,age){

        this.name = name;

        this.age = age

    }

    greet(){

        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);

    }

}

const person1 = new Person("Alice",30);

person1.greet()