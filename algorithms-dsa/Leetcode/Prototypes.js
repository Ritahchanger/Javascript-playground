function Person(firstName,lastName){

    this.firstName =firstName;

    this.lastName = lastName;

}

Person.prototype.getFullName = function(){

    return `${this.firstName} ${this.lastName}` ;

}

Person.prototype.greet = function(){

    return `Hello, my name is ${this.getFullName()}`;

}

const person1 = new Person("John","Doe");


const person2 = new Person("Peter","JackSon");


console.log(person1.greet())

console.log(person2.getFullName())




Array.prototype.sum = function(){

    return this.reduce((acc,curr)=>acc+curr,0);

}


const numbers = [1,2,3,4,5,6,7,8]

console.log(numbers.sum());


