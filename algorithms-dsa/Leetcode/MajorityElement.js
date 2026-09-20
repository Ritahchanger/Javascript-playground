var majorityElement = function(nums){

    const hash = {};


    for(let num of nums){

        if(!hash[num]){

            hash[num] = 1;

        }else{

            hash[num]++;
        }

        // console.log('Hash',hash)

    }

    let counter = 0

    let keyName = 0;

    for(let key in hash){

        if(hash[key] > counter){

            counter = hash[key];

            keyName = key

        }

    }

    return keyName


}
console.log(majorityElement([1,2,2,2,3,4,5,6,7]))