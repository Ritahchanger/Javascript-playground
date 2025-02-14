function  areAnagrams(str1,str2){

    if(str1.length !== str2.length){
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');

    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2

}


console.log(areAnagrams('daniel','nielda'))

// Time complexity 0(nlogn)

// space complexity 

// sorting both of them taks 0(nlogn) time, where n is the length of the stringd