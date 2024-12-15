const fs = require("fs");
const path = require("path");


const readable = fs.createReadStream(path.join(__dirname,"largeFile.txt"),{encoding:'utf-8'});

readable.on('data',(chunk)=>{

    console.log('New chunk:',chunk);

})
readable.on('end',()=>{

    console.log('Finished reading');

})