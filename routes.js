const express = require("express");
const app = express();

const HomeRoute = require("./routes/Home");
app.use("/", HomeRoute);
const UserRoute = require("./routes/User");
app.use("/hesap", UserRoute);




exports.app = app;