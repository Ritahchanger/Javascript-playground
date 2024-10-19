function checkAnagram(str1,str2){



    const cleanString = (str) => str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')


    return cleanString(str1) === cleanString(str2)



}



console.log(checkAnagram("listen","silent"))
console.log(checkAnagram("hello","world"))