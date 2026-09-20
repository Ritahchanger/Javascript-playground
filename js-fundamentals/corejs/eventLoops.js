console.log("Start");

setTimeout(()=>console.log("setTimeout"),0);


Promise.resolve().then(()=>console.log("Promise 1")).then(()=>console.log("Promise 2"));


console.log("End");


console.log("A");

setTimeout(()=>console.log("B"),0);

Promise.resolve().then(()=>console.log("C"));

console.log("D");