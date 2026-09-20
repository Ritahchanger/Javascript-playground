function fetchData(callback){

    setTimeout(()=>{

        callback("Data loaded");

    },1000)

}

fetchData((data)=>console.log(data));