const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000

app.use(express.json());


app.listen(PORT,()=>{


    console.log(`The server is running on PORT ${PORT}`);


})



