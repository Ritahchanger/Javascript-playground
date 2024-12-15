try{

    const result = riskyOperation();


    console.log(result);


}catch(error){

    console.error("An error occurred:",error.message);

}finally{

    console.log('Execution completed')

}