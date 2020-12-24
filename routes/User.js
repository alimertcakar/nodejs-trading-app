const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require("passport");
const LocalStrategy = require('passport-local');
const { createUserAccount } = require("../controllers/UserController");
const { validateUser } = require("../models/User");
const { session } = require("passport");

passport.use(new LocalStrategy(
    function (username, password, done) {
        validateUser(username, password).then(res => {
            if (!res[0]?.username) {
                return done(null, false, { message: 'Kullanıcı adı/şifre yanlış.' });
            }
            return done(null, res[0]);
        })
    }
));

// passport.authenticate('local')
router
    .post("/olustur", jsonParser, async (req, res) => {
        console.log(req.session)
        const { username, password } = req.body;
        const result = await createUserAccount(username, password);
        res.send(result);
    })
    .post("/bakiyeGuncelle", jsonParser, async (req, res) => {
        console.log(req.session)
        const { balance, id } = req.body;
        const result = await createUserAccount(id, balance);
        res.send(result);
    })
    .post('/giris', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/hesap/giris',
    }))
    .get("/giris", (req, res) => { res.send("giriş yapılmadı.giriş yapmak için post at.") })

module.exports = router;