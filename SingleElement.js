var singleElement = (nums) =>{

    const hash = {}

    for(let num of nums){

        if(!hash[num]){


            hash[num] = 1


        }else{

            hash[num] +=1

        }

    }

    for(let key in hash){


        if(hash[key] === 1){


            console.log(`The single element is ${key}`)


        }

    }

}

singleElement([1,2,2,2,34,34])