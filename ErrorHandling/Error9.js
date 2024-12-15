process.on('uncaughtException',(error)=>{

    console.error("Uncaught Exception:",error.message);

    process.exit(1)

})

process.on('unhandledRejection',(reason)=>{

    console.error("Unhandled Promise Rejection:",reason)

})



