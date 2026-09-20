const express = require("express");

const session = require("express-session");

const passportSetup = require("./passport");

const passport = require("passport");

const cors = require("cors");

const app = express();

const authRoute = require("./routes/auth");

app.use(session({
    secret: 'fwejkwmekfnkwemckewmc', 
    resave: false,             
    saveUninitialized: true,    
    cookie: { secure: false }   
}));

app.use(passport.initialize());

app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("SERVER IS RUNNING");
});
