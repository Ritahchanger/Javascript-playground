class ValidationError extends Error{

    constructor(message){

        super(message);

        this.name ="ValidationError";

        this.statusCode = 400;

    }

}

const validateUser = (user) => {

    if(!user.name){

        throw new ValidationError("Name is required");

    }

}

try{

    validateUser({})

}catch(error){

    console.log(`${error.name}: ${error.message} (Code: ${error.statusCode})`);

}