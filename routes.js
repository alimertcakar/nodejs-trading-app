const express = require("express");
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json());

const HomeRoute = require("./routes/Home");
app.use("/", HomeRoute);
const UserRoute = require("./routes/User");
app.use("/hesap", UserRoute);




exports.app = app;