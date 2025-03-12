function firstNonRepeatingChar(str){

    const charCount = new Map();

    for(const char of str){

        charCount.set(char, (charCount.get(char) || 0 ) + 1);

    }

    for(const char of str){

        if(charCount.get(char) === 1 ) return char;

    }

    return null;

}

console.log(firstNonRepeatingChar("aabbccdeffg"))


function twoSum(numbers,target){

    const map = new Map();

    for(let i = 0; i < numbers.length; i++){

        const complement = target - numbers[i];

        if(map.has(complement)){

            return [map.get(complement), i]

        }

        map.set(numbers[i],i);

    }

    return null;

}

console.log(twoSum([2, 7, 11, 15], 9));





function groupAnagrams(words){

    const anagramMap = new Map();

    for(const word of words){

        let sortedWord = word.split("").sort().join("");


        if(!anagramMap.has(sortedWord)){

            anagramMap.set(sortedWord,[]);

        }

        anagramMap.get(sortedWord).push(word);

    }

    return Array.from(anagramMap.values());

}
console.log(groupAnagrams(["bat", "tab", "cat", "act", "tac"]));


function wordFrequency(text) {
    const wordMap = new Map();
    const words = text.toLowerCase().match(/\b\w+\b/g);
  
    for (const word of words) {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
  
    return wordMap;
  }
  
  console.log(wordFrequency("This is a test. This test is easy."));
  