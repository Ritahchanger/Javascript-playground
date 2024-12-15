function Person(name){

    this.name = name

}

Person.prototype.age = 100;

Person.prototype.greet=function(){

    console.log(`The name of the person is ${this.name} and is ${this.age} years old`)

}
const denno = new Person("Dennis");

denno.greet()