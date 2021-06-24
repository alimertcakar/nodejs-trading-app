import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import passport from "passport";
const { session } = passport;

import { ara, eslestirmeEkle, eslestirmeGetir } from "../controllers/AramaController.mjs";


router
    .post("/", jsonParser, async (req, res) => {
        const { term } = req.body;
        const result = await ara(term);
        res.send(result)
    })


router
    .post("/eslestirme-ekle", jsonParser, async (req, res) => {
        const { terim, eslestirme } = req.body;
        const result = await eslestirmeEkle(terim, eslestirme);
        res.send(result)
    })

router
    .get("/eslestirme", jsonParser, async (req, res) => {
        const result = await eslestirmeGetir();
        res.send(result)
    })



export default router;