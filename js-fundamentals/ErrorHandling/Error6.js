try{


    throw new Error("Custom error message");


}catch(error){

    console.log("Error name:",error.name);
    console.log("Error message:",error.message);
    console.log("Stack trace:",error.stack);

}