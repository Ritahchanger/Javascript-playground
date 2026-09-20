console.log("Start");

setTimeout(()=>{

    console.log("Timeout")

},2000);

Promise.resolve().then(()=>{
    console.log("Promise");
})

console.log("End");