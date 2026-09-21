const express = require("express");

const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRoutes = require("./routes/auth.routes");

const app = express();

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`);
})



