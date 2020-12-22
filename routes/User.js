const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require("passport");
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(password)
    }
));

router
    .post("/olustur", jsonParser, async (req, res) => {
        const { username, password } = req.body;

    })
    .post('/giris', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/hesap/giris',
    }))
    .get("/giris", (req, res) => { res.send("post at") })

module.exports = router;