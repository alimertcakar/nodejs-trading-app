import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import passport from "passport";
const { session } = passport;

import { ara } from "../controllers/AramaController.mjs";


router
    .post("/ara", jsonParser, async (req, res) => {
        const { term } = req.body;
        const result = await ara(term);
        res.send(result)
    })


export default router;