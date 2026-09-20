const fs = require("fs");

const path = require("path");

fs.readFile(path.join(__dirname,"file.txt"),"utf-8",(err,data)=>{

    if(err) return console.error(err);

    console.log(data);

})

fs.promises.readFile(path.join(__dirname,"file.txt")).then(data=>console.log(data.toString())).catch(err=>console.error(err));


async function readFile(){
    try{

        const data = await fs.promises.readFile("file.txt");

        console.log(data.toString())

    }catch(err){
        console.error(err);
    }
}

readFile();