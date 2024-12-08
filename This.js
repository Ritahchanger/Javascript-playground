console.log(this)

const person={

    name:"John",

    greet:function(){

        console.log(this.name)

    }

}
person.greet()


class People{

    constructor(name){

        this.name = name;

    }

    greet(){

        console.log(`Hello, ${this.name}`);

    }

}

const dennis = new People("John");


dennis.greet()

function showThis(){

    console.log(this)

}

showThis()