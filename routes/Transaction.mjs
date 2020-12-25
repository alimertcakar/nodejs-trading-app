import express from "express";
import { makeTransaction } from "../controllers/TransactionController.mjs";

const router = express.Router();

router.post("/yolla", async (req, res) => {
    const { senderUserId, receiverUserId, amount } = req.body;

    const result = await makeTransaction(senderUserId, receiverUserId, amount);
    console.log(result);
})



export default router;