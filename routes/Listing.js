const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require("passport");

const { session } = require("passport");

const { publishNewListing, updateListingPrice, updateListingStock } = require("../controllers/IlanController");


// passport.authenticate('local')
router
    .post("/olustur", jsonParser, async (req, res) => {
        const { title, description, price, stock, publisherId } = req.body;
        const result = await publishNewListing(title, description, price, stock, publisherId);
        console.log(result);
        res.send(result)
    })
    .post("/fiyatGuncelle", jsonParser, async (req, res) => {
        const { id, price } = req.body;
        const result = await updateListingPrice(price, id);
        res.send(result)
    })
    .post("/stokGuncelle", jsonParser, async (req, res) => {
        const { id, stock } = req.body;
        const result = await updateListingStock(stock, id);
        res.send(result)
    })


module.exports = router;