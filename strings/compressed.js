function compressedString(str){

    let compressed = "";

    let count = 1;

    for(let i = 1; i <= str.length; i++){

        if(str[i] === str[i - 1]){
            count++
        }else{
            compressed += str[i - 1] + count;
            count = 1
        }

    }

    return compressed.length < str.length ? compressed:str;
}




// Time complexity 0(n)

// space complexity 0(n)


// we traverse the string once and the space is proportional to the size of the result