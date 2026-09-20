process.on("uncaughtException",(err)=>{

    console.error("Uncaught Exception: ",err.message);

    process.exit(1);

})

setTimeout(()=>{

    throw new Error("This is an uncaught exception!");

},1000)