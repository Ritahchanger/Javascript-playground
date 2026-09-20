require("dotenv").config();

const express = require("express");

const app = express();

const path = require("path");

const axios = require("axios");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/auth", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`
  );
});

app.get("/oauth/callback", (req, res) => {
  try {
    const body = {

      client_id:process.env.CLIENT_ID,

      client_secret:process.env.CLIENT_SECRET,

      code: req.query.code,
    };

    const opts = { headers: { accept: "application/json" } };

    axios
    .post("https://github.com/login/access_token", body, opts)
    .then((_res) => {
      console.log("Response from GitHub:", _res.data);
      return _res.data.access_token;
    })
    .then((token) => {
      if (!token) throw new Error("Token not received");
      res.redirect(`/?token=${token}`);
    })
    .catch((err) => {
      console.error(`Error fetching access token: ${err.response?.data || err.message}`);
      res.status(500).send("Authentication failed");
    });
  
  } catch (error) {
    console.log(`There as an error ${error}`);
  }
});

app.listen(3000, () => {
  console.log(`The application is running on PORT ${3000}`);
});
