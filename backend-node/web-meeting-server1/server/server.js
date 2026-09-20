const express = require("express");

const PORT = process.env.PORT || 8000

const app = express();

const testingRoute = require("../routes/testingRoute");

app.use(express.json())

app.use('/api-testing',(req,res)=>{
    return res.status(200).json({success:true,message:"Dennis is good"});
})

app.use('/api',testingRoute);


app.listen(PORT,()=>{

    console.log(`The server is running on port ${PORT}`)

})