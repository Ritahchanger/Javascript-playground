try{

    const user = JSON.parse('{"name":"Alice"}');

    console.log(user.name)

}catch(error){

    console.error("Failed to parse JSON:",error.message);

}finally{
    console.log("JSON parsing attempted");
}