const fs = require("fs");

const fspromises = require("fs").promises

const path = require("path");

fs.writeFile(path.join(__dirname,"testing.txt"),"The first content to put in the system",(err)=>{

    if(err){

        console.log(`There was a problem writing to the file ${err.message}`);


        process.exit(1)

    }

    console.log("The file write operation was done successfull")

})

const dealwithfsOperations = async () =>{
    try{


     if(fs.existsSync(path.join(__dirname,"testing.txt"))){

        await fspromises.appendFile(path.join(__dirname,"testing.txt"),"\tThis is now the new content")

        const dataFetched = await fspromises.readFile(path.join(__dirname,"testing.txt"),"utf8");
   
        console.log("Data appended successfully to the files");
   
        console.log(`Data read from the file: ${dataFetched}`);

        await fspromises.unlink(path.join(__dirname,"testing.txt"));

        console.log("The file has been deleted successfully");
     }
     else{

        await fspromises.appendFile(path.join(__dirname,"testing.txt"),"This is the new content in the text");

        console.log("The file was found not there and new content has been added");

     }
     

    }catch(err){

        console.log(err);

        process.exit(1)

    }

}

dealwithfsOperations()
