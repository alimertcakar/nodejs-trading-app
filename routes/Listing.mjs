import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import passport from "passport";
const { session } = passport;

import { publishNewListing, updateListingPrice, updateListingStock } from "../controllers/IlanController.mjs";


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


export default router;