const fs = require("fs");

const path = require("path");

const https = require("https")

console.time("Execution Time");


const readStream = fs.createReadStream(path.join(__dirname,"largeFile.txt"));


readStream.on("data",(chunk)=>{

    console.log("Received chunk", chunk.length)

})

console.timeEnd("Execution Time");


// const fetchUsers = async () => {

//     const url = `https://jsonplaceholder.typicode.com/posts`;

//     try{

//         const response = await fetch(url);

//         if(!response.ok){

//             throw new Error("Internal server error");

//         }

//         const data = await response.json();

//         console.table(data)

//     }catch(err){

//         console.log(`There was a network problem fetching the data from the server`)

//     }


// }


// const fetchUsers = () => {

//     fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{

//         if(!response.ok){

//             throw new Error("Networt response was not ok")

//         }
//         return response.json();
//     }).then(data=>console.table(data)).catch((error)=>{

//         console.error("Error fetching users: ",error);

//     })

// }


const fetchUsers = () => {
    https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            console.table(JSON.parse(data));
        });
    }).on("error", (error) => {
        console.error("Error fetching users:", error);
    });
};



console.time("Execution time");

fetchUsers()


console.timeEnd("Execution time");