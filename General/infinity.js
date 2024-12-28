const numbers = [10,20,30,5,15];

let max = -Infinity;


for(let num of numbers){


    if(num > max){

        max = num;

    }

}

console.log("Max number:", max); 


const numers = [10,20,30,5,15];

let min = Infinity;

for(let num of numbers){

    if(num < min){

        min = num

    }
}

console.log("Max number:", max); 

console.log(10 + Infinity);  // Infinity
console.log(Infinity - 10);  // Infinity
console.log(Infinity * 2);   // Infinity
console.log(10 / Infinity);  // 0
console.log(-10 / Infinity); // -0

console.log(isFinite(Infinity));  // false
console.log(isFinite(-Infinity)); // false
console.log(Infinity === Infinity); // true
console.log(-Infinity === -Infinity); // true
