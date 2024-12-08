const fsPromises = require("fs").promises;

const path = require("path")

const fs = require("fs")

const fileOps = async () =>{


    try{

        const data = await fsPromises.readFile(path.join(__dirname,"files","starter.txt"),'utf8');

        console.log(data)

        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);

        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\nNice to meet you');

        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));

       const newData =  await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');

       console.log(newData)
       
    }catch(err){

        console.error(err)

    }

}

// Deleting using unlink

const deleteFile = async () =>{

    try{

        await fsPromises.unlink(path.join(__dirname,'files','test.txt'))

        console.log('The file has been deleted successfully');

    }catch(err){

        console.log(err)

    }



}

fileOps()



