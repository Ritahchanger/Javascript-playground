for(let i=0;i<3;i++){
    console.log(i)
}

const getNumber=()=>{

    for(var i=0; i<=5; i++){
        function printI(i){
            setTimeout(()=>{
                console.log(i)
            },i * 1000)
        }
        printI(i)
    }
}

getNumber()