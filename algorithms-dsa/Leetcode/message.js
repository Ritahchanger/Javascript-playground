function truncateMessage(message,k){

    if(k < 3) return "..."

    if(message.length <= k) return message;


    let words = message.split(" ");

    let results = [];

    let length = 0;

    for(let word of words){


        if(length + word.length + ( results.length > 0 ? 1 : 0 ) > k - 4){

            return results.length ? results.join(" ") + " ..." : "..."

        }

        results.push(word);

        length += word.length + (results.length > 1 ? 1 : 0);

    }

    return results.join(" ")

}

console.log(truncateMessage("And now here is my secret", 15)); 
console.log(truncateMessage("There is an animal with four legs", 15)); 
console.log(truncateMessage("super dog", 4)); 
console.log(truncateMessage("how are you", 20)); 
console.log(truncateMessage("A quick brown fox jumps over the lazy dog", 10)); 
console.log(truncateMessage("Truncate this message", 5));