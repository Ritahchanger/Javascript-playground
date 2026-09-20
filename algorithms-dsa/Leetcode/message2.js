function solution(message, k) {
    if (k < 3) return "...";
    if (message.length <= k) return -1;

    let words = message.split(" ");
    let truncatedMessage = "";

    for (let word of words) {
        // Ensure we consider spaces correctly when appending words
        if (truncatedMessage.length + word.length + (truncatedMessage ? 1 : 0) + 3 > k) {
            break;
        }
        truncatedMessage += (truncatedMessage.length === 0 ? "" : " ") + word;
    }

    return truncatedMessage.length === 0 ? "..." : truncatedMessage + " ...";
}

// Test cases
console.log(solution("And now here is my secret", 15)); // "And now here ..."
console.log(solution("There is an animal with four legs", 15)); // "There is an ..."
console.log(solution("super dog", 4)); // "..."
console.log(solution("how are you", 20)); // how are you
console.log(solution("A quick brown fox jumps over the lazy dog", 10)); // "A quick ..."
console.log(solution("Truncate this message", 5)); // "..."
