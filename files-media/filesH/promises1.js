const myPromise = new Promise((resolve,reject)=>{

    const success = true;

    setTimeout(()=>{

        if(success){

            resolve("Operation was done successfully")
    
        }else{
    
            reject("Operation failed")
    
        }

    },2000)

})

myPromise.then((result)=>{

    console.log(result)

}).catch((error)=>{

    console.error(error)

})

const asyncFunction = async () =>{

    try{

        const result = await myPromise

        console.log(result);

    }catch(error){

        console.error(error);

    }finally{
        console.log("Operation completed")
    }

}

asyncFunction()