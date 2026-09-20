const express = require("express");

const dotenv = require("dotenv")

const dbConnect = require("./config/dbConnect");

dotenv.config();

const app = express();

const authRoutes = require("../src/routes/authRoutes");

const userRoutes = require("../src/routes/UserRoutes");


//middlewares


app.use(express.json());

//routes


app.use("/api/auth",authRoutes)


app.use("/api/users",userRoutes);


//start the server

const PORT = process.env.PORT || 8000

dbConnect()

app.listen(PORT,()=>{


    console.log(`The server is running on port ${PORT}`)


})