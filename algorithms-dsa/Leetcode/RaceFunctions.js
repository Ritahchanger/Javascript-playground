// BASIC USAGE OF PROMISE DOT RACE 

const promise1 = new Promise((resolve,reject)=>{

    setTimeout(()=>resolve("Promise 1 resolved"),200);

});


const promise2 = new Promise((resolve,reject)=>{

    setTimeout(()=>reject("Promise2 rejected"),100)

})

Promise.race([promise1,promise2])
.then(result=>{

    console.log(result);

})
.catch(error=>{

    console.error(error)

})

// TIMEOUT MECHANISM

function fetchWithTimeout(url,timeout){

    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_,reject)=>

        setTimeout(()=>reject(new Error("Request timed out")),timeout)
    
    );

    return Promise.race([fetchPromise,timeoutPromise])

}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 5000)
.then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.error(error.message));


//FALLBACK MECHANISM

function fetchFromPrimary(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>resolve("Data from primary source"),1000);

    })

}

function fetchFromFallback(){


    return new Promise((resolve)=>{

        setTimeout(()=>resolve("Data from fallback source"),200);

    })

}

Promise.race([fetchFromPrimary(),fetchFromFallback()]).then(data=>{

    console.log(data);


});