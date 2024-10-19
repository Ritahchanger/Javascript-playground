function throttle(func,delay){

    let lastCall = 0;

    return function(...args){

        const now = new Date().getTime();

    }

}


function generateUniqueFileName(originalName){

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 9e1);

    return `${uniqueSuffix}-${originalName}`;

}

console.log(new Date().getTime())


console.log(generateUniqueFileName('dennis.png'))


function getOriginalFile(x){

    const nameSplittedToArray = x.split('-')

    return nameSplittedToArray[nameSplittedToArray.length - 1]

}


console.log(getOriginalFile(generateUniqueFileName('dennis.png')));


fetch('https://jsonplaceholder.typicode.com/users').then(response=>{


    if(!response.ok){

        throw new Error('Network response was not okay')

    }

    return response.json();

}).then(data => console.log(data) ).catch(error=>{

    console.error('Error fetching data: ',error)

})