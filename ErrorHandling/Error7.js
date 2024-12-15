function getConfig(){

    try{

        return JSON.parse('{"valid":"json"}');

    }catch(error){

        console.error("Failed to load config. Using defaults");

        return { valid:"default" };

    }

}

const config = getConfig();

console.log(config);