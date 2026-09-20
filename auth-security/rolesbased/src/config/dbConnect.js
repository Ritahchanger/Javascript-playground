const mongoose = require("mongoose");


require("dotenv").config()


const dbConnect = async () =>{

    try{

        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);

    }
    catch(error){

        console.log(error);

        process.exit(1)

    }

}

module.exports = dbConnect;