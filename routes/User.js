const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require("passport");
const LocalStrategy = require('passport-local');
const { validateUser } = require("../models/User");

passport.use(new LocalStrategy(
    function (username, password, done) {
        validateUser(username, password).then(res => {
            if (!res[0].username) {
                console.log("haaayıır")
                return done(null, false, { message: 'Kullanıcı adı/şifre yanlış.' });
            }
            return done(null, res[0]);
        })
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