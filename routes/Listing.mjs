import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import passport from "passport";
const { session } = passport;

import { publishNewListing, updateListingPrice, updateListingStock, getAllListings, getSingleListing, getCategoryAllListings } from "../controllers/IlanController.mjs";


// passport.authenticate('local')
router
    .post("/olustur", jsonParser, async (req, res) => {
        const { title, description, price, stock, publisherId, category } = req.body;
        const kategoriId = category;
        console.log(kategoriId, "router")
        const result = await publishNewListing(title, description, price, stock, publisherId, kategoriId);
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
    .get("/", async (req, res) => {
        let result = await getAllListings();
        res.send(result)
    })
    .get("/:id", async (req, res) => {
        let result = await getSingleListing(req.params.id);
        res.send(result)
    })
    .post("/kategori", async (req, res) => {
        console.log("istek geldi")
        const { term: kategori } = req.body;
        let result = await getCategoryAllListings(kategori);
        res.send(result)
    })


export default router;