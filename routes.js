const express = require("express");
const app = express();
const passport = require("passport");
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json());

app.use(require('cookie-parser')());
app.use(require('express-session')({
    secret: 'alimertsikrit',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


const HomeRoute = require("./routes/Home");
app.use("/", HomeRoute);
const UserRoute = require("./routes/User");
app.use("/hesap", UserRoute);
const SecretRoute = require("./routes/Secret");
app.use("/gizli", SecretRoute);



exports.app = app;