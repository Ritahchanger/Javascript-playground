const express = require("express");

const dotenv = require("dotenv")

dotenv.config();

const app = express();

//middlewares


app.use(express.json());

//routes


//start the server

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{


    console.log(`The server is running on port ${PORT}`)


})