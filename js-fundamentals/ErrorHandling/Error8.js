function getUserInput(input){

    if(typeof input!== string || input.trim() === ""){

        throw new Error("Invalid input. Must be a non empty string");

    }

    return input.trim();

}

try{

    console.log(getUserInput("    Hello world         "));

    console.lo(getUserInput(""));
    
}catch(error){


    console.error(error.message);


}