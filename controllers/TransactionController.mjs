import { makeTransaction as _makeTransaction } from "../models/Transaction.mjs";

async function makeTransaction(senderUserId, receiverUserId, amount) {
    const res = await _makeTransaction(senderUserId, receiverUserId, amount);
    return res;
}

export { makeTransaction };