import express from "express";
const router = express.Router();
import bodyParser from 'body-parser';
import { getUserbyId } from "../controllers/UserController.mjs";


// passport.authenticate('local')
router
    .post("/profil/:id", async (req, res) => {
        const result = await getUserbyId(req.params.id);
        res.send(result);
    })
export default router;