const start = performance.now();


function a(){

    console.log("Inside function a");

    b();

}

function b(){
    console.log("Inside function b");
}
a();
console.log("End");

const end  = performance.now();


console.log(`Execution Time: ${end - start}ms`)