import pool from "../db.mjs";
import sql from '@databases/sql';

pool.query(sql`CREATE TABLE IF NOT EXISTS listing(
    id SERIAL PRIMARY KEY,
    title varchar(120) NOT NULL,
    description varchar(240) NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user_account(id),
    created_at timestamp NOT NULL DEFAULT NOW()
    )`).catch(e => console.log(e))



async function publishListing(title, description, price, stock, publisherId) {
    try {
        const result = await pool.query(sql`INSERT INTO listing(title,description,price,stock,user_id) 
    VALUES (${title}, ${description},${price},${stock},${publisherId})`);
        return "İlan başarıyla eklendi";
    }
    catch (e) {
        return e;
    }
}

async function updateListingPrice(price, listingId) {
    try {
        const result = await pool.query(sql`UPDATE listing
        SET price=${price} where id =${listingId}`);
        return "İlan fiyatı başarıyla güncellendi";
    }
    catch (e) {
        return e;
    }
}

async function updateListingStock(stock, listingId) {
    try {
        const result = await pool.query(sql`UPDATE listing
        SET stock=${stock} where id =${listingId}`);
        return "İlan stoğu başarıyla güncellendi";
    }
    catch (e) {
        return e;
    }
}

export { publishListing, updateListingPrice, updateListingStock }