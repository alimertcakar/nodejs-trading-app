const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require("passport");

const { session } = require("passport");

const { publishNewListing } = require("../controllers/IlanController");


// passport.authenticate('local')
router
    .post("/olustur", jsonParser, async (req, res) => {
        const { title, description, price, stock, publisherId } = req.body;
        //res.send(result);
        const result = await publishNewListing(title, description, price, stock, publisherId);
        console.log(result);
        res.send(result)
    })


module.exports = router;