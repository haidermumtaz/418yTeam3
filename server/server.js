// Robert McIlrath
// Code modified from code courtesy of Rishi Prasad's blog post on Bits and Pieces: "Build a Login/ Auth App with the MERN Stack"
// https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const polls = require("./routes/api/polls");
var cors = require('cors')
var app = express()

// Needed or throws a network error. Middleware too
app.use(cors())

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({extended: false})
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use("/api/polls", polls);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Pollify server is up and running on port ${port} !`));