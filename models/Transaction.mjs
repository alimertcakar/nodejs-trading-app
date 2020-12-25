import pool from "../db.mjs";
import sql from '@databases/sql';

async function makeTransaction(senderUserId, receiverUserId, amount) {
    const sender = await pool.query(sql`
        SELECT balance FROM user_account 
        WHERE id=${senderUserId}
    `);
    const senderBalance = sender[0].balance;

    if (senderBalance > amount) {
        const removeFromSender = await pool.query(sql`
            UPDATE user_account 
            SET balance = balance - ${amount}
            WHERE id = ${senderUserId};
        `)
        const addToReceiver = await pool.query(sql`
            UPDATE user_account
            SET balance = balance + ${amount}
            WHERE id = ${receiverUserId}
        `);
        return "hesap hareketi yapıldı";
    }
    else {
        return "yetersiz bakiye";
    }

}

export { makeTransaction };
