import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';
import { getUserbyId, getUserListings } from "../controllers/UserController.mjs";


// passport.authenticate('local')
router
    .get("/:id", async (req, res) => {
        const result = await getUserbyId(req.params.id);
        res.send(result);
    })
    .get("/:id/ilanlari", async (req, res) => {
        const result = await getUserListings(req.params.id);
        res.send(result);
    })
export default router;