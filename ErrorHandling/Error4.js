async function fetchData(){

    try{

        const response = await fetch("https://api.example.com/data");

        const data = await response.json();

        console.log(data);


    }catch(error){

        console.error("Error fetching data:",error.message);

    }

}

fetchData()