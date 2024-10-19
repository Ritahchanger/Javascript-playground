function chunkArray(arr,size){

    const chunked = [];

    for(let i = 0;i<arr.length;i+=size){

        chunked.push(arr.slice(i,i+size))

    }

    return chunked;


}


console.log(chunkArray([1,2,3,4,5,6,7,8,8,12,4,12,34,32,12,45],2))

