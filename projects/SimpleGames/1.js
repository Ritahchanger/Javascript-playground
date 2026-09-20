const readline = require("readline");

const r1 = readline.createInterface({

    input:process.stdin,

    output:process.stdout

})

const min = 1;

const max = 100;

const maxAttempts = 7;

const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0

console.log("Welcome to 'Guess the number' \n");

console.log(`I'm thinking of a number between ${min} and ${max}. `);

console.log(`You have ${maxAttempts} attempts to guess it. Good luck!`);

function playGame(){

    r1.question("Enter your guese: ",(input)=>{

        const guess = parseInt(input);

        if(isNaN(guess)){

            console.log("Please enter a valid number")

        }else if(guess < min || guess > max){

            console.log(`Your guess shall be between ${min} and ${max}.`)

        }else{

            attempts++;

            if(guess === secretNumber){

                console.log("Congrats you go the correct answer")

                r1.close();

                return;
            }else if(guess < secretNumber){

                console.log('Too low! Try again. ');

            }else{

                console.log('Too high! Try again');

            }
        }

        if(attempts >= maxAttempts){

            console.log(`You have run out of attempts! The number was ${secretNumber}.Better luck next time`)

            r1.close();


        }else{

            playGame();

        }
    
    })

}

playGame()