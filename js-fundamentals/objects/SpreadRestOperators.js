const arr1 = [1,2];

//spread operators-> expands arrays and objects

const arr2 = [...arr1,3];

console.log(arr2)


//rest-operators->Combines arguments

function sum(...nums){

    return nums.reduce((a,b)=>a+b,0);

}

console.log(sum(1,2,3,4))


// stringify->converts objects to json strings

json = JSON.stringify({name:"Alice"}) 

// parse->converts json to object

const obj =JSON.parse(json);