const express = require("express");

const redis = require("redis");

const axios = require("axios");

const redisUrl = "redis://127.0.0.1:6379";

const client = redis.createClient({ url: redisUrl });

client.on("connect", () => {

  console.log("Connected to Redis!");
  
});

client.on("error", (err) => {

  console.error("Redis connection error:", err);

});


(async () => {

  await client.connect();

})();

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {

  const { key, value } = req.body;

  try {
    const response = await client.set(key, value);

    res.json({ success: true, message: `Key set: ${response}` });

  } catch (err) {

    res.status(500).json({ success: false, error: err.message });

  }

});

app.get("/",async (req,res)=>{

    const {key} = req.body;

    const value = await  client.get(key); 

    res.json(value)

})

app.get("/posts/:id",async (req,res)=> {

    const { id } = req.params;

    const chachedPost = await client.get(`post-${id}`)

    if(chachedPost){

        return res.json(JSON.parse(chachedPost));

    }


   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);


   client.set(`post-${id}`,JSON.stringify(response.data),"EX",10);

   return res.json(response.data)
  

})


app.listen(8080, () => {

  console.log("Hey now listening on port 8080!");

});
