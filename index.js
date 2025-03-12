class Animal{

    makeSound(){

        console.log("Animal makes sound");

    }

}


class Dog extends Animal{

    makeSound(){

        console.log("Woof! Woof!");

    }

}

class Cat extends Animal{

    makeSound(){

        console.log("Meow!");

    }

}

const dog = new Dog();

dog.makeSound();


const cat = new Cat();

cat.makeSound()