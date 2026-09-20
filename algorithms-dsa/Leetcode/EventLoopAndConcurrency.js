console.log("Start");


setTimeout(()=>{

    console.log("Timeout callback");

},0);

Promise.resolve("Promise resolved").then(console.log);

console.log("End");